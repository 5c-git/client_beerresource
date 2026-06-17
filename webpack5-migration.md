# Миграция client_beerresource: Webpack 4 → Webpack 5 + канон 5corners

**Ветка:** `webpack5-migration` (запушена в origin)
**База:** релиз `e76378d` (20260403) → чекпоинт `ed9c584` → реорг `436000f` → бамп 19/24
**Node:** 24.16.0
**React:** 19.2
**Дата:** июнь 2026

Цель — перевести фронт со старого тулинга (Webpack 4 + babel) на единый канон 5corners (Webpack 5 + esbuild + структура `react/{components,providers}`), унифицировав с другими React-проектами (эталон — `client_sokfit`). Дополнительно проект выведен **пилотом впереди канона** на React 19 + Node 24 (sokfit пока на 18/22).

---

## 1. Тулинг

- Webpack 4 → **Webpack 5**, babel → **esbuild** (`esbuild-loader`, jsx automatic).
- Единый `webpack.config.js` + `cross-env NODE_ENV` (вместо раздельных dev/prod конфигов).
- Node переведён на **22.21.0**.
- Конфиг/зависимости подтянуты к версии `client_sokfit`.
- SCSS: utils раздаётся глобально через `additionalData @use "utils/utils.scss"`; из всех компонентных scss убраны ручные `@import` (кодмод `remove-utils-import.mjs`).
- Удалён старый постпроцессинг: `postcss.config.js`, `.babelrc`, eslint/stylelint конфиги (канон без них).

## 2. Библиотеки

| Было | Стало | Причина |
|---|---|---|
| Swiper 7 (`swiper.esm`) | **Swiper 12** (`swiper` + `swiper/modules`) | новый API |
| react-verification-code-input | **собственный `CodeInput`** | либа заброшена, не встаёт на React 18 |
| qartjs | **qr-code-styling** | qartjs тянет нативный canvas, не ставится на Node 22 |
| react-input-mask `3.0.0-alpha` | **`@react-input/mask` 2.0.4** | держался на `findDOMNode`, который удалён в React 19 |
| react-dom 17 | **react-dom 19** | см. раздел 3 |

Также подняты до версий sokfit: axios 1.x, yup 1.x, MUI 7, formik, react-dadata, react-dropzone 15.

**Места:** `src/react/components/Code/Code.js` (CodeInput), `src/components/qr-code/qr-code.js`.

## 3. React 18 → 19

- Все точки монтирования (18 шт.) переведены `ReactDOM.render(...)` → **`createRoot(...).render(...)`** (`react-dom/client`).
- Проверено отсутствие потерянных колбэков (3-й аргумент старого `render`).
- Исправлен баг guard'а монтирования в `LoginProvider`: `if (LoginProvider)` → `if (LoginProviderContainer)` (проверялся компонент вместо контейнера → падение `createRoot(null)` на страницах без контейнера).
- Поднято до **React 19.2**. Проверено отсутствие удалённых в 19 API в нашем коде (нет `defaultProps`/`propTypes` на функц-компонентах, строковых ref, legacy `ReactDOM.render`/`react-dom`-импортов).
- **Замена маски ввода:** `react-input-mask@3.0.0-alpha` держался на `findDOMNode` (удалён в React 19) → переведён на **`@react-input/mask` 2.0.4** в 5 компонентах (`PhoneInput`, `Form-Phone`, `InputPhoneInternational`, `Form-Add-Organization-1/2`). Синтаксис масок другой (плейсхолдеры через `replacement`-карту вместо `9`/`maskChar`): статичные маски переписаны (`9`→`_`, `replacement={{ _: /\d/ }}`), для ~200 международных масок с экранированием (`+\9\96 …`) добавлен хелпер-конвертер `toMask()` в `InputPhoneInternational`. Render-children паттерн (`<InputMask><input/></InputMask>`) заменён на прямой рендер инпута компонентом `@react-input/mask`.

## 4. Структура — приведение к канону sokfit (ключевой этап)

Вся React-логика сведена под `src/react/{components, providers}`.

**Было** — React раскидан по трём местам:
- `src/react/*` (25 листовых компонентов, плоско)
- `src/components/react/*` (8 форм)
- `src/providers/*` (13 маунтеров)

**Стало:**
- `src/react/components/` — все листовые компоненты (33).
- `src/react/providers/{common,pages}/` — все маунтеры (`createRoot`).
- Гибрид `profile-react` (js+pug+scss) разнесён на два page-scoped провайдера: `react/providers/pages/lk/personal-data/` (контейнер `#personal-data`, страница lk) и `react/providers/pages/lk-add-organization/add-organization/` (контейнер `#add-organization`).

**Агрегаторы** (через `require.context`, чтобы `index.js` не перечислял файлы руками):
- `src/react/providers/providers.js` — все провайдеры (common + pages).
- `src/components/components.js` — все компоненты (`window.js` первым).

**`index.js`** ужат с **197 до 41 строки** — тянет только два агрегатора + utils + vendor-scss + 100vh-хак.

Импорты cross-area переведены в bare (`resolve.modules=src`); pug-инклюды провайдеров перенацелены на `react/providers/`. История файлов сохранена (`git mv` → 93 rename).

## 5. Верификация

- **Сборка:** `npm run stage` под Node 24 / React 19 — 0 ошибок (3 пре-существующих ворнинга: sass-deprecations; `findDOMNode`-ворнинг ушёл вместе с react-input-mask).
- **Рантайм:** CDP-смоук (headless Chrome) — React монтируется под 19, `@react-input/mask` форматирует ввод end-to-end через formik (телефон `+7 (999) 991-23-45`, ИНН обрезается до 12 цифр), React-19-специфичных ошибок/ворнингов нет. Guard `LoginProvider` корректно no-op на странице без контейнера. Известный шум статик-смоука (нет бэка: Network Error; бэкендные глобалы Bitrix-шаблона: MAPS/`.content of null`) — не регресс.
- **CodeInput** проверен функционально (ввод/фокус/Backspace/вставка/onComplete-сабмит).
- **Ручная проверка на дев-сервере (Bitrix-бэк):** маски на ключевых страницах (модалка входа `InputPhoneInternational`, `lk-add-organization`, публичные формы с `PhoneInput`) работают — подтверждено.

## Границы

- `src/assets/` **не трогался** (иконки/svg рабочие, копятся через CopyWebpackPlugin).
- `build/` — вне git (намеренно), деплой ручной (`npm run stage` → залить на гит).
- autoprefixer/postcss — в каноне отсутствуют; проект собирается без вендор-префиксов (как sokfit).
- **Расхождение с каноном:** sokfit пока на React 18 / Node 22. Бир выведен пилотом на 19/24 сознательно — при синхронизации канона sokfit подтянется к этой версии (тогда совпадут обратно).

## Открытые хвосты

- Проверка обработки `error.response` (axios 1.x) на реальном бэке — на стороне команды клиента.
- Финальный мерж `webpack5-migration` → `master` — ручной процесс.

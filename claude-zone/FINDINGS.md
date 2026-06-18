# FINDINGS — client_beerresource

Локальные находки проекта (append-only). Формат: дата, контекст, симптом (❌), корень, решение (✅).
Универсальное мигрирует в централь → `G:\Work-5corners\claude zone\personal-claude-knowledge\findings\frontend_findings.md`.

---

## #1 — WP5 + sass `additionalData`: utils.js не должен импортить сам utils.scss

**Дата:** 2026-06-16
**Контекст:** переезд на WP5, конфиг sokfit инжектит `@use "utils/utils.scss" as *` в каждый scss-entry через `additionalData`.
**Симптом (❌):** `SassError: Module loop: this module is already being loaded` на `src/utils/utils.scss`.
**Корень:** `utils.js` импортил `import utils from "./utils.scss"` → utils.scss становится entry → в него тоже инжектится `@use utils` → файл грузит сам себя.
**Решение (✅):** `utils.js` импортит только `main.scss` + `fonts.scss` (как в sokfit). Переменные/миксины раздаются глобально через `additionalData`.
→ Промигрировано в `frontend_findings.md`.

---

## #2 — Swiper 7→12: сменились пути импортов

**Дата:** 2026-06-16
**Симптом (❌):** `Module not found: "./swiper.esm" is not exported` в 9 компонентах.
**Решение (✅):** `import Swiper, {Navigation,...} from 'swiper/swiper.esm'` → `import Swiper from 'swiper'; import {Navigation,...} from 'swiper/modules'`. SCSS: все частичные импорты → `import 'swiper/css/bundle'` в index.js.
→ Промигрировано в `frontend_findings.md`.

---

## #3 — qartjs не ставится на Node 22 (тянет нативный canvas)

**Дата:** 2026-06-16
**Симптом (❌):** `npm i` падает на сборке `canvas@2.11.2` через node-gyp (нет пребилда под node-v127, нет C++ build tools).
**Корень:** `qartjs` (заброшен) зависит от нативного `canvas`, хотя в браузере использует DOM-canvas.
**Решение (✅):** заменён на `qr-code-styling` (browser-only, лого в центре) в `src/components/qr-code/qr-code.js`.
→ Промигрировано в `frontend_findings.md`.

---

## #4 — react-verification-code-input мёртв на React 18

**Дата:** 2026-06-16
**Симптом (❌):** ERESOLVE — peer react `<=17`, на React 18 не встаёт. React-18-версии не существует (либа заброшена).
**Решение (✅):** написан собственный компонент `CodeInput` прямо в `src/react/Code/Code.js` (тот же интерфейс fields/value/onChange/onComplete, WebOTP/iOS-автозаполнение сохранены).
→ Промигрировано в `frontend_findings.md`.

---

# Баги

## Б#1 — Относительная ссылка «Отменить»/«Мои организации» в добавлении организации

**Дата:** 2026-06-18
**Контекст:** найдено на проде во время работы над MSW. Создание организации, шаг 2, кнопка «✗ Отменить».
**Симптом (❌):** отмена кидала на `/personal/addorganization/lk-my-organization.html` вместо `/personal/organizations/`.
**Корень:** косяк наш (не бек). Ссылка `href="lk-my-organization.html"` — **относительный** путь без слеша; страница живёт на `/personal/addorganization/`, браузер резолвит относительно текущего каталога → `/personal/addorganization/lk-my-organization.html`. Плюс `lk-my-organization.html` — имя статического dev-файла, которому не место в прод-ссылке. Канон в этом же коде правильный: успешный редирект `Add-Organization.js:89` использует абсолютный `${window.location.origin}/personal/organizations/`.
**Решение (✅):** `href="lk-my-organization.html"` → `href="/personal/organizations/"` в трёх местах:
- `Form-Add-Organization-2.js:474` (кнопка «✗ Отменить», шаг 2 — основной репорт)
- `Add-Organization.js:124` (ссылка «← Мои организации»)
- `Add-Organization-PopUp.js:155` (то же в попапе)
Ещё одна закомментированная такая же ссылка в `Form-Add-Organization-1.js:512` — неактивна, оставлена как есть.

## Б#2 — `Organization.js` падает, если у организации нет `contacts`

**Дата:** 2026-06-18
**Контекст:** найдено через MSW-мок организаций (`getOrganizations.json`) — у объекта id 25 (ЛАМБИК) нет полей `contacts`/`who`, как и может прийти с бэка.
**Симптом (❌):** `Organization.js:129 Uncaught TypeError: Cannot read properties of undefined (reading 'map')` — падает **весь** компонент организаций, не только одна карточка.
**Корень:** formik `initialValues.contacts = organization.contacts` (`Organization.js:124`), дальше `values.contacts.map(...)` (`:137`). Если у организации нет `contacts`, `values.contacts` = `undefined` → `.map` бросает. Баг наш — бэк легально может вернуть организацию без контактов.
**Решение (✅):** дефолт пустым массивом — `contacts: organization.contacts || []` (`Organization.js:124`). FieldArray на `[]` рендерит ноль строк (корректно), весь список организаций больше не валится. Проверено CDP: ЛАМБИК и все 11 организаций рендерятся, ошибок в консоли нет.

## Б#3 — MUI Select «out-of-range value» для роли контакта в просмотре организации

**Дата:** 2026-06-18
**Контекст:** раскрытие организации (напр. ООО «ЯНДЕКС») с контактами, у которых `role` — массив.
**Симптом (❌):** `MUI: You have provided an out-of-range value ... for the select (name="contacts[0].role")` (dev-варнинг MUI, в прод-сборке стрипается; не краш). Available values: `Повар, Закупщик, Директор, Управляющий`.
**Корень:** два рассогласования в дисплейном Select'е `Organization.js:228` (read-only, `isDisabled`). (1) `role` — **массив** ролей, а Select был **одиночный** и брал значение через `.toString()` → склейка через запятую не матчит ни одну опцию. (2) Список опций кривой: `Повар` вместо `Пивовар`, нет `Бухгалтер`/`Другое`. Канон ролей живёт в форме добавления `Form-Add-Organization-1.js:126` (`rolesData`: Пивовар, Закупщик, Директор, Управляющий, Бухгалтер, Другое) — там роль выбирается мультиселектом (`multiple`).
**Решение (✅):**
- Select-обёртка `Select.js` — добавлен опциональный проп `multiple` (пробрасывается в MuiSelect, бэк-совместимо) + `renderValue` теперь джойнит массив через `", "`.
- `Organization.js:228` — `value={...role || []}` (массив вместо `.toString()`), `multiple`, опции приведены к канону (`Повар`→`Пивовар`, добавлены `Бухгалтер`, `Другое`).
Проверено CDP: раскрытие Яндекса — роли рендерятся как «Бухгалтер, Управляющий, Закупщик, Пивовар» / «Пивовар», MUI-варнингов нет.

## Б#4 — `sendDeletedOrganizations` зовёт несуществующую `oranizationsApi` → удаление организации сломано с релиза

**Дата:** 2026-06-18
**Контекст:** флагнуто ещё в MSW-сессии, починено сейчас. `OrganizationsApi.js:60`, кнопка удаления организации в `lk-my-organization`.
**Симптом (❌):** клик «Удалить» — ничего не происходит, организация остаётся; в консоли `ReferenceError: oranizationsApi is not defined`.
**Корень:** `sendDeletedOrganizations` зовёт `oranizationsApi.post(...)` — переменной с таким именем в файле нет (импортирован только `axios`). Огрызок старого мок-кода (рядом закомментирован `oranizationsApi.post("run.mocky.io/...")`, строки 36-41). Опечатка `oRanizations`. НЕ путать с `organizationsApi` из `api.js:69` — это объект-обёртка `{ addNewOrganization }` без метода `.post`, на `instance` (baseURL `/local/ajax/`); подстановка его дала бы `TypeError`. Баг живёт с `e76378d` (релиз 20260403, 03.04.2026) — файл там и родился, функция битая с рождения. ~2.5 мес незаметно, т.к. никто не удалял организации.
**Решение (✅):** `oranizationsApi` → `axios` (`OrganizationsApi.js:60`). Теперь идентично рабочей соседке `sendUpdatedOrganizations:29` — голый `axios.post` + URL из `routes5.organizations.requests.deleteOrganizations[urlENV]`. Под MSW ловится общим POST-хендлером на `organizations.php`, на бою идёт в реальный `deleteOrganizations`.

⚠️ **Код недостижим из текущего UI.** Единственный триггер `sendDeletedOrganizations` — модалка по `callAlert` (`Organization.js:517`), а вся секция `Organization__buttons` (Удалить/Редактировать/Отменить/Сохранить) **закомментирована** (`Organization.js:509-556`, `{/* … */}`). Карточка организации сейчас read-only — кнопки удаления на проекте нет, баг в живом UI не воспроизводится. Поэтому в клиентский `BUG-REPORT.md` НЕ внесён (клиент не увидит «фикса» без кнопки). Фикс оставлен как страховка на случай раскомментирования.
**Раскомментировали кнопки для теста (18.06) — вылезли ещё два бага, оба пофикшены:**

**Б#4.1 — `placeholderEvent is not defined` → краш `<OrganizationProvider>` по клику «Удалить».** Модалка `<Modal closeEvent={placeholderEvent}>` (`OrganizationProvider.js:108`) ссылается на `placeholderEvent`, который в этом провайдере **не объявлен** (импортов нет, локального `const` нет). Все остальные провайдеры с модалкой объявляют его сверху (`AddressProvider.js:24`, `LoginProvider.js:19`, `Form-Personal-Data.js:11` и др.): `const placeholderEvent = new CustomEvent("PlaceholderEvent", { bubbles: true });`. Пока блок кнопок был закомментирован, модалка не рендерилась → ReferenceError не всплывал. **Решение (✅):** добавлен такой же `const placeholderEvent` перед компонентом (`OrganizationProvider.js`).

**Б#4.2 — фильтр удаления сравнивает строку с объектом → ничего не удаляется.** `callAlert(organization)` кладёт в `organizationToDelete` **весь объект** (нужно для заголовка модалки `{organizationToDelete.companyName}`), а `deleteOrganization` фильтровал `item.inn !== organizationToDelete` (`OrganizationProvider.js:74`) — inn-строка vs объект → всегда true, `updatedArray` = полный список. **Решение (✅):** `item.inn !== organizationToDelete.inn`. Заголовок модалки трогать не надо — он уже на объекте.

## Б#5 — «Отмена» на шаге 1 добавления организации мертва на странице (завязана на закрытие попапа)

**Дата:** 2026-06-18
**Контекст:** найдено Павлом. Страница `/personal/addorganization/`, форма добавления, шаг 1, кнопка «✗ Отменить».
**Симптом (❌):** клик «Отмена» — ничего не происходит, без ошибок в консоли. Обработчик есть, но визуально no-op.
**Корень:** `FormAddOrganization1` используется в двух контекстах — попап (`Add-Organization-PopUp.js:130`) и страница (`Add-Organization.js:99`). Кнопка «Отмена» была захардкожена на `window.AddOrganizationPopUpProvider.setOpen(false)` (`Form-Add-Organization-1.js:510`) — закрытие **попапа**. Глобал `AddOrganizationPopUpProvider` смонтирован на всех страницах (common-провайдер, `<div id='AddOrganizationPopUpProvider'>`), поэтому ошибки нет — `setOpen(false)` просто закрывает уже-закрытый невидимый попап. На странице это no-op. (Шаг 2 этим не страдал — там «Отмена» = `href`, починена в Б#1.)
**Решение (✅):** прокинут проп `onCancel` из родителя — контекст задаёт поведение:
- `Form-Add-Organization-1.js:16` — `onCancel` в деструктуризацию пропсов; кнопка (`:509`) зовёт `onCancel?.()` (убран хардкод setOpen + закомментированный `href="lk-my-organization.html"`).
- `Add-Organization.js:99` (страница) — `onCancel={() => window.location.assign(\`${origin}/personal/organizations/\`)}` (канон ухода, как success-redirect `:88` и ссылка «Мои организации» `:124`).
- `Add-Organization-PopUp.js:130` (попап) — `onCancel={() => window.AddOrganizationPopUpProvider.setOpen(false)}` (поведение сохранено — попап закрывается изящно, без редиректа).

⚠️ Оставшиеся грабли теста (не баги фронта): (1) `OrganizationsApi.js:68` зовёт `window.Corners5ProjectLayout.summonAlert("#alert--organization-deleted")` — на статик-смоуке без глобала/алерт-элемента упадёт в `.then`; (2) под MSW удаление визуально не персистит — POST-хендлер на `organizations.php` отдаёт статичный полный `getOrganizations.json`, организация возвращается в список. Для UI-теста исчезновения — временно сделать хендлер эхом (`return HttpResponse.json(присланный updatedArray)`).

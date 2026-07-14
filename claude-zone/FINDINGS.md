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

## #5 — Прореживание pug `block mixins`: пересборка всех страниц из-за общего пула миксинов

**Дата:** 2026-07-08
**Контекст:** перф сборки. Шаблоны `templates/default.pug` + `main-page.pug` инклюдили ВСЕ 41 миксин компонентов в `block mixins`.
**Симптом (❌):** каждая страница `extends` шаблон → шаблон в include-графе всех 52 страниц → правка любого миксина инвалидирует шаблон → пересобираются ВСЕ страницы (медленный watch/rebuild).
**Корень:** общий пул миксинов в шаблоне. Канон (`client_knowledge`) держит в пуле минимум, остальное — `include` внутри компонентов-потребителей / на страницах.
**Решение (✅):** вынес 23 редких/страничных миксина (`map, marker, tooltip, line, tags, offer, payment, article-card, …`) в потребителей: `include ../X/X` первой строкой компонента, `block append mixins` на странице. Оставил 18 — обязательные (`header/alert/modal`, шаблон сам зовёт), высокочастотные (`title` 36 стр, `layout` 21 и т.п.), транзитивно-глобальные (`sidebar-nav`→layout, `video`→article, `socials`, `packaging`, `top-filters`).
⚠️ **Ключевой критерий выноса — НЕ число страниц, а глобален ли единственный потребитель.** Миксин на 4 страницах → вынос ускоряет; миксин на 1 глобальном компоненте (layout/article/footer/header, которые остаются в пуле) → вынос бесполезен (шаблон транзитивно зависит), только косметика.
🩲 **Грабли:** GNU `sed '/pat/a\  текст'` СРЕЗАЕТ ведущие пробелы → `include` в column 0, `block append mixins` без детей → `pug lexer fail`. Вставка с отступом — только `printf`/heredoc. Один `block append mixins` на файл (несколько миксинов = в ОДИН блок). После каждой партии — `npm run build` (вызов неопределённого миксина = хард-ошибка, ловится сразу). Сборка зелёная, 52 стр, рендер проверен.
→ Метод промигрирован в скилл `migrate-frontend-wp5` (секция «Не-очевидное»).

---

## #6 — Swiper: кнопки навигации мигают до инициализации (FOUC)

**Дата:** 2026-07-10
**Контекст:** жалоба клиента — кнопки навигации слайдеров видны на загрузке, потом (если слайдов мало и слайдер не нужен) пропадают. Компоненты: novelties, watched, layout, banner, warehouses-map, double-slider.
**Симптом (❌):** кнопка по умолчанию видима (CSS показывал через `&:not(.swiper-button-lock){display:flex}`, а до init lock-класса ещё нет). Swiper инициализируется после первой отрисовки → если не нужен, вешает `swiper-button-lock` → кнопки исчезают. Моргание «показали→спрятали».
**Решение (✅):** инвертировать — кнопка `display:none` по умолчанию, показывать только `.X:has(.swiper-initialized) .X__slider-button:not(.swiper-button-lock){display:flex}`. Появляется только после init и только если слайдер реально нужен (locked → остаётся скрытой). Завязка на корень компонента через `:has()` — не нужно знать разметку каждого (кнопки то сиблингом, то в head, то внутри `.swiper`). double-slider: reveal на `:has(.double-slider__nav.swiper-initialized)` (на мобиле nav-свайпер не инициализируется) + `display:block` (нет flex-центрирования).
⚠️ Требует `:has()` — Chrome 105+/Safari 15.4+/FF 121+ (конец 2023). Для B2B-2026 ок. `swiper-button-lock` приходит из `swiper/css/bundle` (глобально в index.js). Проверено смоуком: layout (8 слайдов) кнопки видны, watched (5, влезли) — залочены/скрыты.

---

## #7 — Choices.js: два молчаливых капкана (двойной init + программный выбор без `change`)

**Дата:** 2026-07-13
**Контекст:** адрес доставки на оформлении заказа (eShop dev3). Селект адресов — Choices.js 9.x, инициируется из `bx-soa-order.js`, а React-попап (`AddAddressPopUpProvider`) добавляет в него опцию через `setChoices`/`setChoiceByValue`.

**Капкан 1 — повторный `new Choices` возвращает заглушку.** Конструктор видит на элементе `data-choice="active"`, пишет `initialised = true` и делает `return` ДО `init()` (`choices.js:424-432`). У такого объекта нет `containerOuter` — и любой `setChoices` на нём падает `Cannot read properties of undefined (reading 'removeLoadingState')` (`choices.js:884`). Bitrix (`editActiveRegionBlock`) зовёт инициализацию на КАЖДУЮ перерисовку блока, а `<select>` не пересоздаёт — переносит между скрытым и активным контейнером.
**Решение (✅):** запоминать инстанс на самом элементе (`select.choicesInstance`) и переиспользовать вместо повторного `new Choices`. Бонус: перестают накапливаться слушатели `addItem` (каждый повторный init вешал ещё один).

**Капкан 2 — `setChoiceByValue()` НЕ стреляет `change`.** Программный выбор шлёт только `addItem`; `change` летит лишь на пользовательский клик. Проверено изолированно. Вся логика заказа (`locationNew`/`locationNewtwo`, `addressSet`, `checkPosition`, пересчёт доставки) висела на `change` — поэтому адрес, добавленный через попап, выглядел выбранным, но для формы не существовал: заказ уходил без адреса, а блок региона оставался невалидным (красная рамка «не снималась»). Годами списывали на баг рендера ошибки.
**Решение (✅):** после `setChoiceByValue` дёргать `change` руками — `instance.passedElement.element.dispatchEvent(new Event('change', {bubbles:true}))`.
⚠️ Ещё: `setChoiceByValue` — no-op, если choice уже `selected` (`_findAndSelectChoiceByValue` проверяет `!foundChoice.selected`). Для возврата выбора после «отмены» надо либо быть уверенным, что Choices снял флаг (select-one снимает), либо звать `removeActiveItems()` перед возвратом.

---

## #8 — Bitrix `sale.order.ajax`: что ядро делает молча (preload, сброс на смене типа плательщика, пустой fade)

**Дата:** 2026-07-13
**Контекст:** разбор «регрессов» на оформлении заказа beerresource dev3, которые оказались штатным поведением ядра.

- **Доставка «сама» встаёт самовывозом.** При `USE_PRELOAD='Y'` на GET-запросе компонент читает ПОСЛЕДНИЙ заказ юзера (`class.php:702` `getLastOrderData`, `USER_ID`+`ORDER BY ID DESC LIMIT 1`) и предвыбирает из него тип плательщика, платёжку, `DELIVERY_ID` и `BUYER_STORE`. Диагностика — `result.LAST_ORDER_DATA` (`PICK_UP: true` = склад из прошлого заказа применён). Это не баг; «чинится» оформлением заказа с другой доставкой либо `USE_PRELOAD => 'N'`.
- **Смена типа плательщика сбрасывает доставку/склад/платёжку/профиль.** `class.php:5578`: `DELIVERY_ID`, `BUYER_STORE`, `PAY_SYSTEM_ID`, `PROFILE_ID` читаются из запроса ТОЛЬКО если `PERSON_TYPE_OLD` пуст или равен новому типу. Клиент их шлёт — ядро выбрасывает и берёт первую доставку по сортировке. Обход только поверх (запомнить и вернуть на клиенте); НЕ слать `PERSON_TYPE_OLD` нельзя — он же нужен ядру для переноса location/zip-свойств между типами (`addLastLocationPropertyValues`).
- **Свёрнутый блок региона пустеет после ajax.** `editFadeRegionContent` начинается с `if (!node || !this.locationsInitialized) return;`, а ядро зовёт его в момент, когда виджет локаций ещё не поднялся → рендер выходит вхолостую и оставляет пустой контент.
- **Тип плательщика исчезает из fade.** `getSelectedPersonType()` читает `radio[name=PERSON_TYPE]:checked` ИЗ DOM, которого после ajax-перерисовки на момент рендера ещё нет. Надёжный источник — `result.PERSON_TYPE` с `CHECKED == 'Y'`.

⚠️ Общий вывод: всё состояние формы заказа читать из `result.*` (серверная правда), а не из DOM — DOM в момент ajax-рендера может быть не готов или уже снесён.

---

## #9 — `php -l` молча врёт на файлах с коротким тегом `<?` (страховка деплоя не сработала)

**Дата:** 2026-07-14
**Контекст:** `local/php_interface/functions.php` на beerresource-eShop. Конвенция деплоя PHP — `.new` + `php -l` + `mv`, чтобы синтакс-ошибка не положила сайт (файл глобальный, подключается из `init.php`).
**Симптом (❌):** в файле лежали НЕразрешённые git-маркеры (`<<<<<<< HEAD`, `=======`, `>>>>>>> issue_84601`) прямо в теле PHP. `php -l` на сервере отрапортовал `No syntax errors detected`. Файл уехал на dev3 → сайт отдал **HTTP 500**, `ParseError: syntax error, unexpected token "<<"`.
**Корень:** файл открывается **коротким тегом `<?`** (не `<?php`). В CLI на сервере `short_open_tag=Off` — линтер не видит в файле PHP вообще, считает его текстом и потому «ошибок нет». Веб-SAPI короткие теги ест → там же fatal. То есть линт зелёный ровно на тех файлах, где он нужнее всего.
**Правило (✅):** линтить с явным включением — `php -d short_open_tag=On -l <файл>`. Дополнительно перед заливкой любого PHP грепать конфликт-маркеры: `grep -n '^<<<<<<<\|^=======\|^>>>>>>>'` — линт их поймает не всегда, а стоит это ноль.
⚠️ Проверка «сайт открывается» после деплоя стоит один `curl -o /dev/null -w '%{http_code}'` — и ловит ровно этот класс аварий.

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

## Б#6 — [TC-174] Задвоение адреса доставки после добавления через DaData

**Дата:** 2026-07-10
**Контекст:** QA-тикет. Добавление адреса: вводишь «Москва, ул Рабочая 15», выбираешь подсказку «г Москва, ул Рабочая, д 84 стр 15», в модалке дополняешь → после сохранения задвоено: «…д 84 стр 15 ул Рабочая 84». Файл `AddAddressPopUpProvider.js` (React, фронт client_beerresource).
**Симптом (❌):** при построении пункта choices-селекта клеил уже-полную строку DaData `val.address` ещё раз с `val.street`+`val.house`.
**Корень:** `val.address` (=`address.value` из react-dadata) уже содержит улицу+дом; `val.street`=`street_with_type`, `val.house` дублируют. Плюс игнорировало ручные правки полей (address заморожен, не пересобирается).
**Решение (✅):** собирать label из ПОЛЕЙ формы, а не из замороженной строки: `[val.city, val.street, val.house && 'д '+val.house].filter(Boolean).join(', ')`. Закрывает разом: задвоение, выбор без улицы/дома, ручные правки. Бэк адрес собирает сам из структурированных полей — фронт-label транзиентный (заменяется серверным при релоаде).
⚠️ TC-175 (валидация адреса при оформлении заказа) — это уже НЕ фронт, а Bitrix-eShop, см. память `project_bitrix_eshop_dev3`.

⚠️ Оставшиеся грабли теста (не баги фронта): (1) `OrganizationsApi.js:68` зовёт `window.Corners5ProjectLayout.summonAlert("#alert--organization-deleted")` — на статик-смоуке без глобала/алерт-элемента упадёт в `.then`; (2) под MSW удаление визуально не персистит — POST-хендлер на `organizations.php` отдаёт статичный полный `getOrganizations.json`, организация возвращается в список. Для UI-теста исчезновения — временно сделать хендлер эхом (`return HttpResponse.json(присланный updatedArray)`).

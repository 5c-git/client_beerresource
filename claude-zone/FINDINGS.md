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

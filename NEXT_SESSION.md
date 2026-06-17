# Next session — client_beerresource

## Kickoff-промпт (скопировать в новую сессию)

```
Продолжаем client_beerresource. Webpack 4→5 миграция СДЕЛАНА и рабочая (ветка
feature/webpack5-migration, не закоммичена). Сборка зелёная: npm run stage / npm run dev,
Node 22.21.0. Детали — память [[project_webpack5_migration]].

ЗАДАЧА №1 на эту сессию: проверить модалку ВВОДА SMS-КОДА.
Я заменил мёртвую либу react-verification-code-input своим компонентом CodeInput
(файл src/react/Code/Code.js, 4 поля ввода + фокус-менеджмент + paste + WebOTP/iOS-автозаполнение).
Надо убедиться, что она работает правильно — визуально и по поведению.

Где живёт модалка:
- src/react/Code/Code.js — сам компонент CodeInput + Code (шаг ввода кода).
- Рендерится в: src/providers/common/LoginProvider/LoginProvider.js (модалка логина,
  кнопка .request-login → шаг телефона → шаг кода), src/components/react/Form-Personal-Data,
  src/providers/pages/lk-my-organization/OrganizationProvider.

Как проверять (ВАЖНЫЙ нюанс): в деве НЕТ бэка, поэтому переход «телефон → код» по сети не
произойдёт (sendPhone из api/LoginApi падает с Network Error). Чтобы увидеть CodeInput:
вариант А — временно форснуть рендер шага кода (замокать ответ sendPhone или выставить стейт);
вариант Б — проверять на stage/реальном бэке. Проверять headless Chrome через CDP
(паттерн: поднять Chrome --remote-debugging-port, навигировать, читать console + DOM).
Что именно проверить в CodeInput: 4 ячейки, ввод цифры двигает фокус вперёд, Backspace —
назад, вставка кода целиком раскидывается по ячейкам, onComplete сабмитит форму.

Остальные хвосты (ниже приоритетом):
1. Закоммитить/смержить ветку (ручной процесс Павла — спросить про мерж в master).
2. autoprefixer: postcss выпал (канон sokfit). Глянуть префиксы глазами, вернуть если надо.
3. axios 1.x: проверить error.response в src/api/ на реальном бэке.
4. (отложено) Этап 2 — реорг структуры под канон sokfit.

ЖЁСТКО НЕ ТРОГАТЬ: src/assets/. Деплой ручной (npm run stage → гит).
Работать автономно [[feedback_work_autonomously]] (trust-session уже включён).
Конвенция файлов: claude-zone/ в проекте + централь personal-claude-knowledge
[[reference_personal_kb_convention]].
```

## Ключевые файлы
- `src/react/Code/Code.js` — CodeInput (то, что проверяем) + Code.
- `src/providers/common/LoginProvider/LoginProvider.js` — основная точка рендера модалки.
- `webpack.config.js` — единый конфиг (канон sokfit).
- Эталон-референс: `G:\Work-5corners\client_sokfit`.

## Память
- [[project_webpack5_migration]] — прогресс и риски миграции.
- [[feedback_work_autonomously]] — не дёргать пермишенами.
- [[reference_personal_kb_convention]] — где вести знание по личным проектам.
- [[project_build_and_node]] — Node 22.21.0, npm-скрипты.

## Что изменилось с прошлого закрытия
- Заведена конвенция KB личных проектов: `claude-zone/` в проекте (тоглится из git, блок в .gitignore)
  + централь `G:\Work-5corners\claude zone\personal-claude-knowledge\` (docs/findings/rules).
- Якорь на эту базу добавлен в глобальный `~/.claude/CLAUDE.md`.
- Находки миграции записаны в claude-zone/FINDINGS.md и в централь.

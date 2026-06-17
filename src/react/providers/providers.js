// Авто-агрегатор React-провайдеров (маунтеров).
// Подтягивает все common + pages, чтобы index.js не перечислял их руками.
function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./common', true, /\.(js|jsx)$/));
importAll(require.context('./pages', true, /\.(js|jsx)$/));

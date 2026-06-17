// Авто-агрегатор компонентов (pug/jQuery).
// window/window.js грузится ПЕРВЫМ (ставит глобалы, нужные остальным),
// остальные — по алфавиту. Сам себя (components.js) исключаем.
function importAll(r) {
  const keys = r.keys();
  const firstFile = './window/window.js';
  const rest = keys
    .filter((k) => k !== firstFile && k !== './components.js')
    .sort();

  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  rest.forEach(r);
}

importAll(require.context('./', true, /\.js$/));

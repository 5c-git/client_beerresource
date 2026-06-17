// import fs from 'fs';
// import path from 'path';

// const SRC_DIR = path.resolve('./src');
// const importRegex = /^\s*@import\s+['"]src\/utils\/utils['"]\s*;?\s*$/gm;

// function processDir(dir) {
//   const files = fs.readdirSync(dir);
//   for (const file of files) {
//     const filePath = path.join(dir, file);
//     const stat = fs.statSync(filePath);
//     if (stat.isDirectory()) {
//       processDir(filePath); // рекурсия
//     } else if (file.endsWith('.scss')) {
//       let content = fs.readFileSync(filePath, 'utf8');
//       const newContent = content.replace(importRegex, '');
//       if (newContent !== content) {
//         fs.writeFileSync(filePath, newContent, 'utf8');
//         console.log(`Обновлён: ${filePath}`);
//       }
//     }
//   }
// }

// processDir(SRC_DIR);

import fs from 'fs';
import path from 'path';
import prettier from 'prettier';

const SRC_DIR = path.resolve('./src');

// Удаляет только строку: @import 'src/utils/utils'; и форматирует SCSS-файл через Prettier
const importRegex = /^\s*@import\s+['"]src\/utils\/utils['"]\s*;?\s*$/gm;

async function processFile(filePath) {
  const original = fs.readFileSync(filePath, 'utf8');

  // 1. Удаляем импорт (если есть).
  const cleaned = original.replace(importRegex, '');

  // 2. Загружаем конфиг Prettier проекта.
  const prettierConfig = await prettier.resolveConfig(filePath);

  // 3. Форматируем SCSS.
  const formatted = await prettier.format(cleaned, {
    ...prettierConfig,
    parser: 'scss',
  });

  // 4. Записываем файл только если он реально изменился.
  if (formatted !== original) {
    fs.writeFileSync(filePath, formatted, 'utf8');
    console.log(`✔ ${filePath}`);
  }
}

async function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.scss')) {
      await processFile(fullPath);
    }
  }
}

// Старт
await processDir(SRC_DIR);

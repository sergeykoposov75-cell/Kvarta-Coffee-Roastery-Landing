// Обёртка для сборки в этой среде: кириллический путь ломает часть shell-команд,
// поэтому next запускается напрямую через node.
// ESLint в рамках next build здесь подвисает, поэтому линтинг вынесен отдельно:
//   node node_modules\eslint\bin\eslint.js app components lib types  (~8 c)
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const root = __dirname;
const nextBin = path.join(root, 'node_modules', 'next', 'dist', 'bin', 'next');

const result = spawnSync(process.execPath, [nextBin, 'build', '--no-lint'], {
  cwd: root,
  stdio: 'inherit',
});

process.exit(result.status ?? 1);

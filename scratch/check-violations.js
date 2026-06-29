import fs from 'node:fs';
import path from 'node:path';

function getFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) {
    return results;
  }
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      if (file !== 'tests' && file !== 'node_modules' && file !== '.astro') {
        results.push(...getFiles(fullPath));
      }
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function isContentFile(filePath) {
  return /\\i18n\\/.test(filePath) || filePath.endsWith('bibliography.ts');
}

const srcDir = path.join(process.cwd(), 'src');
const scriptsDir = path.join(process.cwd(), 'scripts');
const filesToTest = [
  ...getFiles(srcDir).filter(isContentFile),
  ...getFiles(scriptsDir).filter(isContentFile),
];

const aiTypographyGarbage = [
  '\u2013', // en dash –
  '\u2014', // em dash —
  '\u2026', // ellipsis …
  '\u201C', // left double quote “
  '\u201D', // right double quote ”
  '\u2018', // left single quote ‘
  '\u2019', // right single quote ’
  '\u00AB', // left double angle quote «
  '\u00BB', // right double angle quote »
  '\u200B', // zero-width space
  '\u201E', // double low-9 quote „
];

const violations = [];

for (const filePath of filesToTest) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(process.cwd(), filePath);
  
  const garbageFound = [];
  aiTypographyGarbage.forEach(char => {
    if (content.includes(char)) {
      garbageFound.push(char);
    }
  });

  const spaceBeforeColon = / : /.test(content);

  if (garbageFound.length > 0 || spaceBeforeColon) {
    violations.push({
      file: relativePath,
      garbage: garbageFound,
      spaceBeforeColon
    });
  }
}

console.log(JSON.stringify(violations, null, 2));

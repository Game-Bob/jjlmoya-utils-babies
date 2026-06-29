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

const stringLiteralRegex = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/g;

function fixStringLiteral(strLiteral) {
  const quote = strLiteral[0];
  let content = strLiteral.slice(1, -1);
  
  content = content.replace(/\u2013/g, '-');
  content = content.replace(/\u2014/g, '-');
  content = content.replace(/\u2026/g, '...');
  content = content.replace(/\u200B/g, '');
  
  const doubleQuoteReplacer = (match) => {
    if (quote === '"') {
      return '\\"';
    } else {
      return '"';
    }
  };
  content = content.replace(/[\u201C\u201D\u00AB\u00BB\u201E]/g, doubleQuoteReplacer);
  
  const singleQuoteReplacer = (match) => {
    if (quote === "'") {
      return "\\'";
    } else {
      return "'";
    }
  };
  content = content.replace(/[\u2018\u2019]/g, singleQuoteReplacer);
  
  content = content.replace(/ : /g, ': ');

  return quote + content + quote;
}

let modifiedCount = 0;

for (const filePath of filesToTest) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace string literals using our function
  let newContent = content.replace(stringLiteralRegex, fixStringLiteral);
  
  // Also check if there is any stray " : " outside of strings (like in code spacing) and fix it
  newContent = newContent.replace(/ : /g, ': ');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`Fixed: ${path.relative(process.cwd(), filePath)}`);
    modifiedCount++;
  }
}

console.log(`Done! Modified ${modifiedCount} files.`);

const stringLiteralRegex = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`/g;

function fixStringLiteral(strLiteral) {
  const quote = strLiteral[0]; // ', ", or `
  let content = strLiteral.slice(1, -1);
  
  // Replace simple ones
  content = content.replace(/\u2013/g, '-');
  content = content.replace(/\u2014/g, '-');
  content = content.replace(/\u2026/g, '...');
  content = content.replace(/\u200B/g, '');
  
  // Replace double quotes: “, ”, «, », „
  const doubleQuoteReplacer = (match) => {
    if (quote === '"') {
      return '\\"';
    } else {
      return '"';
    }
  };
  content = content.replace(/[\u201C\u201D\u00AB\u00BB\u201E]/g, doubleQuoteReplacer);
  
  // Replace single quotes: ‘, ’
  const singleQuoteReplacer = (match) => {
    if (quote === "'") {
      return "\\'";
    } else {
      return "'";
    }
  };
  content = content.replace(/[\u2018\u2019]/g, singleQuoteReplacer);
  
  // Replace space before colon
  content = content.replace(/ : /g, ': ');

  return quote + content + quote;
}

const test1 = "const a = 'O “ciclo”';";
const test2 = 'const b = "O “ciclo”";';
const test3 = "const c = 'jusqu’à';";
const test4 = 'const d = "jusqu’à";';
const test5 = "const e = '0,2–0,4 °C';";
const test6 = "const f = 'cervicale : pendant';";

console.log(test1.replace(stringLiteralRegex, fixStringLiteral));
console.log(test2.replace(stringLiteralRegex, fixStringLiteral));
console.log(test3.replace(stringLiteralRegex, fixStringLiteral));
console.log(test4.replace(stringLiteralRegex, fixStringLiteral));
console.log(test5.replace(stringLiteralRegex, fixStringLiteral));
console.log(test6.replace(stringLiteralRegex, fixStringLiteral));

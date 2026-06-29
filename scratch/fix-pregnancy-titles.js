import fs from 'node:fs';
import path from 'node:path';

const replacements = {
  'de.ts': [
    ['Erstes Trimester (Wo. 1-12)', 'Erstes Trimester (Wo. 1 bis 12)'],
    ['Zweites Trimester (Wo. 13-26)', 'Zweites Trimester (Wo. 13 bis 26)'],
    ['Drittes Trimester (Wo. 27-40)', 'Drittes Trimester (Wo. 27 bis 40)']
  ],
  'en.ts': [
    ['First trimester (wks 1-12)', 'First trimester (wks 1 to 12)'],
    ['Second trimester (wks 13-26)', 'Second trimester (wks 13 to 26)'],
    ['Third trimester (wks 27-40)', 'Third trimester (wks 27 to 40)']
  ],
  'es.ts': [
    ['Primer trimestre (sem. 1-12)', 'Primer trimestre (sem. 1 a 12)'],
    ['Segundo trimestre (sem. 13-26)', 'Segundo trimestre (sem. 13 a 26)'],
    ['Tercer trimestre (sem. 27-40)', 'Tercer trimestre (sem. 27 a 40)']
  ],
  'fr.ts': [
    ['1er trimestre (sem. 1-12)', '1er trimestre (sem. 1 à 12)'],
    ['2e trimestre (sem. 13-26)', '2e trimestre (sem. 13 à 26)'],
    ['3e trimestre (sem. 27-40)', '3e trimestre (sem. 27 à 40)']
  ],
  'id.ts': [
    ['Trimester Pertama (mgg. 1-12)', 'Trimester Pertama (mgg. 1 s.d. 12)'],
    ['Trimester Kedua (mgg. 13-26)', 'Trimester Kedua (mgg. 13 s.d. 26)'],
    ['Trimester Ketiga (mgg. 27-40)', 'Trimester Ketiga (mgg. 27 s.d. 40)']
  ],
  'it.ts': [
    ['Primo trimestre (sett. 1-12)', 'Primo trimestre (sett. 1 a 12)'],
    ['Secondo trimestre (sett. 13-26)', 'Secondo trimestre (sett. 13 a 26)'],
    ['Terzo trimestre (sett. 27-40)', 'Terzo trimestre (sett. 27 a 40)']
  ],
  'nl.ts': [
    ['Eerste trimester (wk. 1-12)', 'Eerste trimester (wk. 1 tot 12)'],
    ['Tweede trimester (wk. 13-26)', 'Tweede trimester (wk. 13 tot 26)'],
    ['Derde trimester (wk. 27-40)', 'Derde trimester (wk. 27 tot 40)']
  ],
  'pl.ts': [
    ['Pierwszy trymestr (tyg. 1-12)', 'Pierwszy trymestr (tyg. 1 do 12)'],
    ['Drugi trymestr (tyg. 13-26)', 'Drugi trymestr (tyg. 13 do 26)'],
    ['Trzecic trymestr (tyg. 27-40)', 'Trzeci trymestr (tyg. 27 do 40)'],
    ['Trzeci trymestr (tyg. 27-40)', 'Trzeci trymestr (tyg. 27 do 40)']
  ],
  'pt.ts': [
    ['Primeiro trimestre (sem. 1-12)', 'Primeiro trimestre (sem. 1 a 12)'],
    ['Segundo trimestre (sem. 13-26)', 'Segundo trimestre (sem. 13 a 26)'],
    ['Tercero trimestre (sem. 27-40)', 'Tercero trimestre (sem. 27 a 40)'],
    ['Tercer trimestre (sem. 27-40)', 'Tercer trimestre (sem. 27 a 40)']
  ],
  'ru.ts': [
    ['Первый триместр (нед. 1-12)', 'Первый триместр (нед. с 1 по 12)'],
    ['Второй триместр (нед. 13-26)', 'Второй триместр (нед. с 13 по 26)'],
    ['Третий триместр (нед. 27-40)', 'Третий триместр (нед. с 27 по 40)']
  ],
  'sv.ts': [
    ['Första trimestern (v. 1-12)', 'Första trimestern (v. 1 till 12)'],
    ['Andra trimestern (v. 13-26)', 'Andra trimestern (v. 13 till 26)'],
    ['Tredje trimestern (v. 27-40)', 'Tredje trimestern (v. 27 till 40)']
  ],
  'tr.ts': [
    ['İlk trimester (1-12. haftalar)', 'İlk trimester (1 ila 12. haftalar)'],
    ['İkinci trimester (13-26. haftalar)', 'İkinci trimester (13 ila 26. haftalar)'],
    ['Üçüncü trimester (27-40. haftalar)', 'Üçüncü trimester (27 ila 40. haftalar)']
  ],
  'zh.ts': [
    ['孕早期 (1-12周)', '孕早期 (1至12周)'],
    ['孕中期 (13-26周)', '孕中期 (13至26周)'],
    ['孕晚期 (27-40周)', '孕晚期 (27至40周)']
  ]
};

const baseDir = path.join(process.cwd(), 'src/tool/pregnancy-calculator/i18n');

for (const [filename, rules] of Object.entries(replacements)) {
  const filePath = path.join(baseDir, filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  for (const [search, replace] of rules) {
    // Replace all occurrences of search string
    content = content.split(search).join(replace);
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated ${filename}`);
}

console.log('Finished updating pregnancy-calculator title separators.');

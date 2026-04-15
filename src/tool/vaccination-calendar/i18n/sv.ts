import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'vaccinationsprogram-spanien-bebisar';
const title = 'Vaccinationsprogram i Spanien';
const description = 'Beräkna de exakta datumen för ditt barns vaccinationer enligt AEP 2026-kalendern.';
const faq = [
  {
    question: 'Vad är vaccinationsprogrammet AEP 2026?',
    answer: 'Det är det vaccinationsschema som rekommenderas av den spanska barnläkarföreningen (Asociación Española de Pediatría) för år 2026. Det inkluderar alla systematiska och valfria vaccinationer för spädbarn och barn från födseln upp till 14 år.',
  },
  {
    question: 'Är det obligatoriskt att vaccinera mitt barn enligt programmet?',
    answer: 'I Spanien är vaccination inte lagligt obligatorisk, men rekommenderas starkt. Vaccinationerna i det systematiska programmet är kostnadsfria och administreras på offentliga vårdcentraler.',
  },
  {
    question: 'Vad händer om vi missar en dos?',
    answer: 'Om en dos blir försenad behöver man inte börja om från början. Din barnläkare kommer att ange hur ni återupptar schemat där det avbröts. Det viktiga är att färdigställa programmet så snart som möjligt.',
  },
  {
    question: 'Kan man ge flera vaccinationer samma dag?',
    answer: 'Ja, det är vanligt och säkert att ge flera vaccinationer vid samma besök. Kombinationsvacciner skyddar mot sex sjukdomar i en enda spruta.',
  },
  {
    question: 'Är vaccinationer säkra för prematura barn?',
    answer: 'Prematura barn bör vaccineras enligt sin kronologiska ålder (från födseln), inte korrigerad ålder, om inte neonatologen anger något annat. De prioriteras då de är mer sårbara.',
  },
];
const howTo = [
  {
    name: 'Ange födelsedatum',
    text: 'Fyll i dag, månad och år för ditt barns födelse i motsvarande fält.',
  },
  {
    name: 'Se nästa besök',
    text: 'Kalkylatorn visar automatiskt när nästa vaccination infaller och vilka vacciner som är aktuella.',
  },
  {
    name: 'Kontrollera hela programmet',
    text: 'Öppna sektionerna för tidigare och framtida besök för att se hela vaccinationsprogrammet.',
  },
  {
    name: 'Exportera påminnelser',
    text: 'Tryck på knappen för att ladda ner en .ics-fil med alla framtida besök och lägg till dem i din mobilkalender.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Barnets födelsedatum',
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'ÅÅÅÅ',
    emptyMsg: 'Ange dag, månad och år för barnets födelse för att se vaccinationsprogrammet.',
    invalidMsg: 'Det angivna datumet är ogiltigt.',
    futureMsg: 'Ett barn kan inte vara fött i framtiden.',
    labelNextAppointment: 'Nästa beräknade besök',
    btnAddReminder: 'Lägg till påminnelse i mobilen',
    btnToday: 'Det är idag! Glöm inte hälsoboken',
    labelPassed: 'Tidigare besök',
    labelFuture: 'Framtida schema',
    labelStatusOk: 'OK',
    labelStatusPending: 'VÄNTAR',
    labelSource: 'Källa: AEP 2026',
    labelShare: 'Dela dessa datum',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser',
    labelMonth: 'månad',
    labelMonths: 'månader',
    labelYear: 'år',
    labelYears: 'år',
    labelDay: 'dag',
    labelDays: 'dagar',
    labelAnd: 'och',
    labelVaccination: 'Vaccination',
    labelAppointment: 'Vaccinationstid',
    vac_hexavalente: 'Hexavalent',
    vac_neumococo: 'Pneumokocker (VCN15/20)',
    vac_meningococo_b: 'Meningokocker B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningokocker ACWY',
    vac_triple_virica: 'MPR (Mässling, Påssjuka, Röda hund)',
    vac_varicela: 'Vattkoppor',
    vac_gripe: 'Influensa (Säsongsbunden)',
    vac_vph: 'HPV (Papillomvirus)',
    vac_tdpa: 'Tdap (Stelkramp, Difteri, Kikhosta)',
    vac_polio_booster: 'Polio (Booster)',
  },
  seo: [
    { type: 'title', text: 'Vaccinationskalkylator: När är det dags för mitt barns nästa vaccination?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Effektivitet' },
      { value: '14', label: 'Totala doser' },
      { value: 'Offentlig', label: 'Kostnad AEP' },
      { value: 'Hög', label: 'Säkerhet' },
    ]},
    { type: 'tip', html: 'AEP 2026-kalendern innehåller viktiga nyheter som utökningen av vaccinationen mot meningokock B och uppdaterade rekommendationer för HPV-vaccin för båda könen från 12 års ålder.' },
    { type: 'title', text: 'Nyheter i AEP 2026-kalendern', level: 3 },
    { type: 'list', items: [
      'Meningokock B (Bexsero): 2+1-schema konsoliderat med doser vid 2, 4 och 12 månaders ålder.',
      'HPV-vaccin utökat till alla ungdomar från 12 års ålder, oavsett kön.',
      'Pneumokocker: uppdaterad rekommendation med VCN15 eller VCN20 beroende på regional tillgänglighet.',
      'Rotavirus: oralt vaccin inkluderat i det systematiska programmet i alla regioner.',
      'Tdap: booster rekommenderas vid 6 och 12 års ålder för att bibehålla immunitet mot kikhosta.',
    ]},
    { type: 'title', text: 'Skillnader mellan autonoma regioner', level: 3 },
    { type: 'list', items: [
      'Vissa regioner inkluderar ytterligare vacciner som inte finns i den nationella kalendern.',
      'Finansieringen av rotavirus-vaccinet varierar beroende på region, även om trenden går mot universell täckning.',
      'Meningokock ACWY kan ges vid något olika åldrar beroende på regionalt protokoll.',
      'Konsultera alltid din barnläkare eller vårdcentral för att bekräfta det gällande programmet i din region.',
    ]},
    { type: 'title', text: 'Hur du exporterar programmet till din mobil', level: 3 },
    { type: 'list', items: [
      'Ange barnets födelsedatum i kalkylatorn.',
      'Tryck på knappen "Lägg till påminnelse i mobilen" för att ladda ner .ics-filen.',
      'Öppna filen med din kalenderapp (Google Calendar, Apple Calendar, etc.).',
      'Alla vaccinationstillfällen sparas med datum och aktuella vacciner.',
    ]},
    { type: 'title', text: 'Vanliga biverkningar', level: 3 },
    { type: 'list', items: [
      'Rodnad eller svullnad vid injektionsstället: försvinner oftast efter 1-2 dagar.',
      'Lätt feber (37,5–38,5 °C): normalt under de första 24-48 timmarna.',
      'Irritabilitet eller gråt: vanligt hos spädbarn efter de första doserna.',
      'Dåsighet eller tillfällig aptitlöshet: kräver oftast ingen behandling.',
      'Allvarliga reaktioner som anafylaxi är extremt sällsynta (färre än 1 på en miljon doser).',
    ]},
    { type: 'tip', html: 'Ett mätt barn i bekväma kläder underlättar besöket. Efter vaccinationen kan hud mot hud-kontakt eller amning hjälpa till att lindra smärta och inflammation naturligt.' },
    { type: 'summary', title: 'Att komma ihåg', items: [
      'AEP 2026-kalendern inkluderar 14 doser upp till 12 års ålder för fullgott skydd.',
      'Vaccinationerna under det första året skyddar mot upp till 9 allvarliga sjukdomar samtidigt.',
      'Milda biverkningar är normala och försvinner efter 1-2 dagar.',
      'Du kan exportera alla vaccinationstillfällen till din mobilkalender med ett klick.',
      'Fråga alltid din barnläkare om du har frågor om programmet i din region.',
    ]},
  ],
  faqTitle: "Vanliga frågor",
  faq,
  bibliographyTitle: "Referenser",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendario de Vacunaciones 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Spanska hälsoministeriet (Ministerio de Sanidad) - Vaccinationsschema',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Immunisering',
      url: 'https://www.who.int/news-room/fact-sheets/detail/vaccines-and-immunization',
    },
    {
      name: 'CDC - Rekommenderat vaccinationsschema för barn och ungdomar',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

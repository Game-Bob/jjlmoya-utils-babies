import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'matningskalkylator-baby';
const title = 'Matningskalkylator för Bebisar';
const description = 'Beräkna hur mycket mjölk din bebis behöver baserat på vikt och ålder. Rekommenderade matningar, milliliter per matning samt hunger- och mättnadssignaler.';

const faq = [
  {
    question: 'Hur mycket mjölk behöver en nyfödd?',
    answer: 'Under första levnadsdygnet är bebisens mage stor som ett körsbär och behöver bara mellan 5 och 7 ml per matning. Från femte dagen växer kapaciteten till 45–60 ml och behoven ökar progressivt.',
  },
  {
    question: 'Hur ofta ska en bebis äta?',
    answer: 'Nyfödda behöver mellan 8 och 12 matningar per dygn. Vid 3 månader brukar det glesas ut till 7–8 matningar, och vid 6 månader till cirka 5 matningar dagligen.',
  },
  {
    question: 'Hur vet jag om min bebis får tillräckligt med mat?',
    answer: 'De mest pålitliga indikatorerna är: adekvat viktuppgång, minst 5–6 blöta blöjor per dygn och att bebisen visar mättnadssignaler efter matningen.',
  },
  {
    question: 'Är mängderna desamma för bröstmjölk och ersättning?',
    answer: 'Vid amning rekommenderas fri matning (efter behov) utan att mäta volymer. Vid ersättning är det vanliga riktmärket 150 ml per kg kroppsvikt per dygn, fördelat på antalet matningar beroende på ålder.',
  },
];

const howTo = [
  {
    name: 'Välj bebisens ålder',
    text: 'Välj enhet (dagar, veckor eller månader) och justera värdet med skjutreglaget eller knapparna.',
  },
  {
    name: 'Ange bebisens vikt',
    text: 'Använd viktskjutreglaget eller knapparna för att ställa in bebisens aktuella vikt i kilogram.',
  },
  {
    name: 'Välj typ av matning',
    text: 'Välj mellan bröst, blandad eller ersättning för att få den mest anpassade guiden.',
  },
  {
    name: 'Se rekommenderad plan',
    text: 'Kalkylatorn visar antalet matningar, milliliter per matning och det uppskattade dygns-totalet.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Nuvarande inställning',
    labelPlan: 'Rekommenderad plan',
    unitDays: 'dagar',
    unitWeeks: 'veckor',
    unitMonths: 'månader',
    labelWeight: 'Bebisens vikt',
    labelFeedType: 'Typ av matning',
    feedBreast: 'Bröst',
    feedMixed: 'Blandad',
    feedFormula: 'Ersättning',
    labelFreeDemand: 'Fri matning',
    labelMlPerFeed: 'ml per matning',
    labelFeedsCount: 'Matningar / 24h',
    labelDailyTotal: 'Dygns-total (uppsk.)',
    labelHunger: 'Hungersignaler',
    labelFullness: 'Mättnadssignaler',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser',
  },
  seo: [
    { type: 'summary', title: 'Sammanfattning: Bebismatning', items: [
      'Nyföddas magkapacitet är bara 5–7 ml under första dygnet.',
      'Det allmänna riktmärket för ersättning är 150 ml per kg vikt per dygn.',
      'Amning sker efter behov utan fasta volymer.',
      'Frekvensen minskar med åldern: från 8–12 matningar till 4–5 på 6 månader.',
    ]},
    { type: 'title', text: 'Hur mycket mjölk behöver min bebis baserat på vikt och ålder?', level: 2 },
    { type: 'paragraph', html: 'Behovet av mjölk ändras snabbt under de första månaderna. Kalkylatorn uppskattar mängden baserat på bebisens aktuella vikt och ålder enligt pediatriska riktlinjer från WHO och AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Dag 1 (körsbärsstorlek)' },
      { value: '150 ml/kg', label: 'Dygns-riktmärke ersättn.' },
      { value: '8–12', label: 'Matningar/dygn nyfödd' },
    ]},
    { type: 'title', text: 'Magens storlek efter ålder', level: 3 },
    { type: 'table', headers: ['Ålder', 'Ref. storlek', 'Kapacitet', 'Matningar/dygn'], rows: [
      ['Dag 1', 'Körsbär', '5–7 ml', '8–12'],
      ['Dag 2–4', 'Valnöt', '22–27 ml', '8–12'],
      ['Dag 5–30', 'Ägg', '45–60 ml', '8–10'],
      ['1–3 mån.', 'Maximal', '90–120 ml', '7–8'],
      ['3–6 mån.', 'Maximal', '120–150 ml', '5–6'],
      ['6+ mån.', 'Maximal', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Ett pålitligt tecken på tillräcklig matning är antalet blöta blöjor: mellan 5 och 6 per dygn från femte dagen indikerar god vätskebalans.' },
    { type: 'title', text: 'Amning vs. ersättning', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Amning', description: 'Naturlig matning efter behov.', points: ['Inget fast schema', 'Aktiva antikroppar', 'Variabel sammansättning', 'Svårt att kvantifiera'] },
      { title: 'Modersmjölksersättning', description: 'Planerade matningar med beräkningsbar volym.', points: ['Var 3–4 timme', 'Stabil sammansättning', 'Lätt att kontrollera intaget', 'Kräver steril tillberedning'] },
    ]},
    { type: 'list', items: [
      'Adekvat viktuppgång: 150–200 g/vecka första månaden',
      'Minst 5–6 blöta blöjor per dygn',
      'Bebisen är nöjd efter matningen',
      'Ljus eller mycket ljusgul urin',
    ]},
  ],
  faqTitle: "Vanliga frågor",
  faq,
  bibliographyTitle: "Referenser",
  bibliography: [
    {
      name: 'WHO - Spädbarnsmatning',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: 'Vårdguiden 1177 - Mat till spädbarn',
      url: 'https://www.1177.se',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

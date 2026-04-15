import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-futter-rechner';
const title = 'Baby Fütterungsrechner';
const description = 'Berechnen Sie, wie viel Milch Ihr Baby basierend auf Gewicht und Alter benötigt. Empfohlene Mahlzeiten, Milliliter pro Mahlzeit sowie Hunger- und Sättigungssignale.';

const faq = [
  {
    question: 'Wie viel Milch benötigt ein Neugeborenes?',
    answer: 'Am ersten Lebenstag hat der Magen des Babys die Größe einer Kirsche und benötigt nur 5 bis 7 ml pro Mahlzeit. Ab dem fünften Tag wächst die Kapazität auf 45–60 ml an, und die Bedürfnisse steigen progressiv.',
  },
  {
    question: 'Wie oft sollte ein Baby essen?',
    answer: 'Neugeborene benötigen zwischen 8 und 12 Mahlzeiten am Tag. Mit 3 Monaten liegen sie meist bei 7–8 Mahlzeiten, und mit 6 Monaten bei etwa 5 Mahlzeiten täglich.',
  },
  {
    question: 'Woher weiß ich, ob mein Baby genug isst?',
    answer: 'Die zuverlässigsten Indikatoren sind: angemessene Gewichtszunahme, mindestens 5–6 nasse Windeln pro Tag und dass das Baby nach den Mahlzeiten Sättigungssignale zeigt.',
  },
  {
    question: 'Haben Muttermilch und Formelnahrung die gleichen Mengen?',
    answer: 'Bei Muttermilch wird empfohlen, nach Bedarf zu füttern, ohne Volumina zu messen. Bei Formelnahrung ist der übliche Richtwert 150 ml pro kg Körpergewicht pro Tag, verteilt auf die Anzahl der Mahlzeiten je nach Alter.',
  },
];

const howTo = [
  {
    name: 'Wählen Sie das Alter des Babys',
    text: 'Wählen Sie die Einheit (Tage, Wochen oder Monate) und passen Sie den Wert mit dem Schieberegler oder den Tasten an.',
  },
  {
    name: 'Geben Sie das Gewicht des Babys ein',
    text: 'Verwenden Sie den Gewichts-Schieberegler oder die Tasten, um das aktuelle Gewicht des Babys in Kilogramm einzustellen.',
  },
  {
    name: 'Wählen Sie die Ernährungsart',
    text: 'Wählen Sie zwischen Stillen, Mischfütterung oder Formelnahrung, um die am besten angepasste Anleitung zu erhalten.',
  },
  {
    name: 'Konsultieren Sie den empfohlenen Plan',
    text: 'Der Rechner zeigt die Anzahl der Mahlzeiten, Milliliter pro Mahlzeit und die geschätzte tägliche Gesamtmenge an.',
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
  inLanguage: 'de',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Aktuelle Konfiguration',
    labelPlan: 'Empfohlener Plan',
    unitDays: 'Tage',
    unitWeeks: 'Wochen',
    unitMonths: 'Monate',
    labelWeight: 'Gewicht des Babys',
    labelFeedType: 'Ernährungsart',
    feedBreast: 'Stillen',
    feedMixed: 'Mischfütterung',
    feedFormula: 'Formelnahrung',
    labelFreeDemand: 'Füttern nach Bedarf',
    labelMlPerFeed: 'ml pro Mahlzeit',
    labelFeedsCount: 'Mahlzeiten / 24h',
    labelDailyTotal: 'Tagesgesamtmenge (gesch.)',
    labelHunger: 'Hungersignale',
    labelFullness: 'Sättigungssignale',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen',
  },
  seo: [
    { type: 'summary', title: 'Zusammenfassung: Baby Ernährung', items: [
      'Die Magenkapazität des Neugeborenen beträgt am ersten Tag nur etwa 5–7 ml.',
      'Der allgemeine Richtwert für Formelnahrung liegt bei 150 ml pro kg Körpergewicht pro Tag.',
      'Stillen erfolgt nach Bedarf ohne feste Mengen.',
      'Die Häufigkeit nimmt mit dem Alter ab: von 8–12 Mahlzeiten auf 4–5 in 6 Monaten.',
    ]},
    { type: 'title', text: 'Wie viel Milch benötigt mein Baby basierend auf Gewicht und Alter?', level: 2 },
    { type: 'paragraph', html: 'Der Milchbedarf ändert sich in den ersten Monaten schnell. Der Rechner schätzt die Menge basierend auf dem aktuellen Gewicht und Alter des Babys gemäß den pädiatrischen Richtlinien der WHO und der AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Tag 1 (Kirschgröße)' },
      { value: '150 ml/kg', label: 'Tageswert Formel' },
      { value: '8–12', label: 'Mahlzeiten/Tag Neugeb.' },
    ]},
    { type: 'title', text: 'Magengröße nach Alter', level: 3 },
    { type: 'table', headers: ['Alter', 'Ref.-Größe', 'Kapazität', 'Mahlzeiten/Tag'], rows: [
      ['Tag 1', 'Kirsche', '5–7 ml', '8–12'],
      ['Tag 2–4', 'Walnuss', '22–27 ml', '8–12'],
      ['Tag 5–30', 'Ei', '45–60 ml', '8–10'],
      ['1–3 Monate', 'Maximal', '90–120 ml', '7–8'],
      ['3–6 Monate', 'Maximal', '120–150 ml', '5–6'],
      ['6+ Monate', 'Maximal', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Ein zuverlässiger Indikator für eine angemessene Ernährung ist die Anzahl der nassen Windeln: Zwischen 5 und 6 pro Tag ab dem fünften Tag deuten auf eine gute Hydratation hin.' },
    { type: 'title', text: 'Stillen vs. Formelnahrung', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Stillen', description: 'Natürliche Ernährung nach Bedarf.', points: ['Kein fester Zeitplan', 'Aktive Antikörper', 'Variable Zusammensetzung', 'Schwer zu quantifizieren'] },
      { title: 'Formelnahrung', description: 'Geplante Mahlzeiten mit berechenbarem Volumen.', points: ['Alle 3–4 Stunden', 'Stabile Zusammensetzung', 'Einfache Kontrolle der Menge', 'Erfordert sterile Zubereitung'] },
    ]},
    { type: 'list', items: [
      'Angemessene Gewichtszunahme: 150–200 g/Woche im ersten Monat',
      'Mindestens 5–6 nasse Windeln pro Tag',
      'Das Baby zeigt sich nach den Mahlzeiten ruhig',
      'Klarer oder sehr hellgelber Urin',
    ]},
  ],
  faqTitle: "Häufig gestellte Fragen",
  faq,
  bibliographyTitle: "Referenzen",
  bibliography: [
    {
      name: 'WHO - Ernährung von Säuglingen und Kleinkindern',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche Liga International',
      url: 'https://www.llli.org',
    },
    {
      name: 'Deutsche Gesellschaft für Kinder- und Jugendmedizin (DGKJ)',
      url: 'https://www.dgkj.de',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

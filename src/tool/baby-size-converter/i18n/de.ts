import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'babygrossenrechner';
const title = 'Babygrößen Umrechner';
const description = 'Konvertieren Sie Babykonfektionsgrößen zwischen Zara, H&M, Primark, Carter\'s, Kiabi, Mango und Mayoral. Geben Sie Größe und Gewicht ein, um die exakte Größe jeder Marke zu erhalten.';
const faq = [
  {
    question: 'Woher weiß ich, welche Kleidergröße mein Baby hat?',
    answer: 'Am zuverlässigsten ist es, die Körpergröße des Babys als Hauptreferenz zu verwenden. Europäische Größen (50, 56, 62...) entsprechen direkt der Größe in Zentimetern. Geben Sie die Größe und das Gewicht des Babys in den Umrechner ein, um die von jeder Marke empfohlene Größe zu erhalten.',
  },
  {
    question: 'Warum variieren die Größen zwischen den Marken so stark?',
    answer: 'Jede Marke hat ihr eigenes Schnittmuster. H&M und Primark fallen tendenziell größer aus, während Carter\'s und Mayoral engere Schnitte haben. Verwenden Sie immer die Maße des Babys, nicht nur das Alter.',
  },
  {
    question: 'Welche Größe soll ich wählen, wenn es zwischen zwei Größen liegt?',
    answer: 'Wählen Sie immer die größere Größe. Babys wachsen sehr schnell, und eine größere Größe garantiert eine längere Haltbarkeit und mehr Komfort.',
  },
  {
    question: 'Funktionieren die Größen in Zoll genauso?',
    answer: 'Amerikanische Marken wie Carter\'s verwenden Zoll und das Gewicht als Referenz. Der Umrechner zeigt Ihnen automatisch die Entsprechungen im imperialen System an, wenn Sie es aktivieren.',
  },
];
const howTo = [
  {
    name: 'Geben Sie die Größe des Babys ein',
    text: 'Verwenden Sie den Schieberegler oder die Tasten, um die aktuelle Größe des Babys in Zentimetern oder Zoll einzustellen.',
  },
  {
    name: 'Geben Sie das Gewicht des Babys ein',
    text: 'Passen Sie das Gewicht in kg oder Pfund an, um die Ergebnisse zu verfeinern, da einige Marken das Gewicht als ergänzende Referenz verwenden.',
  },
  {
    name: 'Wählen Sie eine Marke',
    text: 'Wählen Sie die Kleidungsmarke aus, um die vorgeschlagene Größe und die geschätzten Maße des Kleidungsstücks anzuzeigen.',
  },
  {
    name: 'Konsultieren Sie die Entsprechungen',
    text: 'Im rechten Bereich sehen Sie die entsprechenden Größen aller verfügbaren Marken auf einen Blick.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Babymaße',
    labelResults: 'Geschätzte Entsprechungen',
    labelHeight: 'Größe des Babys',
    labelWeight: 'Aktuelles Gewicht des Babys',
    labelPresets: 'Voreinstellungen nach typischem Alter',
    unitMetric: 'Metrisch (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marke und Schnitt',
    labelSuggested: 'Vorgeschlagene Größe',
    labelChest: 'Brust',
    labelWaist: 'Taille',
    labelGarmentMeasures: 'Geschätzte Maße des Kleidungsstücks',
    fitRegular: 'Regulärer Schnitt',
    fitLarge: 'Weiter Schnitt',
    fitSmall: 'Enger Schnitt',
    tipTitle: 'Expertentipp',
    tipText: 'Babys wachsen in sehr schnellen Entwicklungsschüben. Wenn das Ergebnis an der oberen Grenze einer Größe liegt, wählen Sie immer die größere Größe, um die Haltbarkeit und den Komfort des Babys zu gewährleisten.',
    shareAriaLabel: 'Größe teilen',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen',
  },
  seo: [
    { type: 'title', text: 'Babygrößen Guide: Zara, H&M, Primark und internationale Marken', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2,5 cm', label: 'Monatliches Wachstum' },
      { value: '3 Monate', label: 'Dauer jeder Größe' },
      { value: '95 %', label: 'Zuverlässigkeit nach Größe' },
    ]},
    { type: 'tip', html: 'Verwenden Sie immer die Körpergröße als Hauptreferenz zur Größenwahl, nicht das Alter. Zwei gleichaltrige Babys können einen Größenunterschied von bis zu 8–10 cm haben, was eine ganze Konfektionsgröße ausmacht.' },
    { type: 'title', text: 'Größen nach Alter, Größe und Gewicht', level: 3 },
    { type: 'table', headers: ['Ca. Alter', 'Größe (cm)', 'Gewicht (kg)', 'Übliche Größe', 'Geschätzte Dauer'], rows: [
      ['Neugeborenes', '50–56', '3–4,5', '50 / RN', '4–6 Wochen'],
      ['1–3 Monate', '56–62', '4,5–6', '56–62', '6–8 Wochen'],
      ['3–6 Monate', '62–68', '6–8', '62–68', '6–8 Wochen'],
      ['6–9 Monate', '68–74', '8–9,5', '68–74', '6–8 Wochen'],
      ['9–12 Monate', '74–80', '9,5–11', '74–80', '6–8 Wochen'],
      ['12–18 Monate', '80–86', '11–13', '80–86', '3–4 Monate'],
      ['18–24 Monate', '86–92', '13–15', '86–92', '3–4 Monate'],
    ]},
    { type: 'title', text: 'Marken, die groß oder klein ausfallen', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Fallen groß aus (kleinere Größe wählen)',
        description: 'Diese Marken verwenden weitere Schnitte; wählen Sie eine Größe kleiner als üblich.',
        points: [
          'H&M: fällt oft eine Nummer größer aus',
          'Primark: generell weiter Schnitt',
          'Lupilu (Lidl): lockerer Schnitt',
          'Empfohlen für Babys im niedrigen Perzentilbereich',
        ],
      },
      {
        title: 'Fallen klein aus (größere Größe wählen)',
        description: 'Diese Marken verwenden engere Schnitte; wählen Sie eine Größe größer als üblich.',
        points: [
          "Carter's: enger amerikanischer Schnitt",
          'Mayoral: enger europäischer Schnitt',
          'Neck & Neck: reduzierte Größen',
          'Empfohlen für Babys im hohen Perzentilbereich',
        ],
      },
    ]},
    { type: 'title', text: 'Babygrößen Umrechner: Wie man die richtige Größe wählt', level: 3 },
    { type: 'list', items: [
      'Messen Sie das Baby immer vor dem Kauf, verlassen Sie sich nicht nur auf das Alter',
      'Wählen Sie bei Grenzwerten zwischen zwei Größen immer die größere Größe',
      'Berücksichtigen Sie bei Einteilern den Platz für die Windel',
      'Europäische Größen (50, 56, 62...) entsprechen der Körpergröße in cm',
      'Vor Gebrauch immer waschen: Baumwolle kann bis zu 5 % einlaufen',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Größe 50 / Neugeborenes',
        definition: 'Gedacht für Babys bis 50 cm Körpergröße und ca. 3,5 kg. Viele Babys wachsen sehr schnell daraus heraus, oft schon in den ersten Wochen.',
      },
      {
        term: 'Schrittlänge',
        definition: 'Abstand vom Schritt bis zur Taille. Wichtig bei Bodys und Stramplern: Ein zu kurzer Schritt schränkt die Bewegung des Babys ein, auch wenn der Rest passt.',
      },
      {
        term: 'Referenz nach Gewicht',
        definition: "Einige amerikanische Marken wie Carter's verwenden das Gewicht als Primärreferenz. Hilfreich für Babys mit Proportionen außerhalb des Standardperzentils.",
      },
      {
        term: 'Schlupfausschnitt',
        definition: 'Design des Ausschnitts bei Bodys und T-Shirts, das es ermöglicht, das Baby anzuziehen, indem man das Kleidungsstück nach unten schiebt, anstatt es über den Kopf zu ziehen. Unerlässlich in den ersten Monaten.',
      },
    ]},
    { type: 'summary', title: 'Was man beachten sollte', items: [
      'Die Körpergröße ist der zuverlässigste Indikator zur Größenwahl, noch vor dem Alter.',
      "H&M und Primark fallen tendenziell groß aus; Carter's und Mayoral eher klein.",
      'Numerische europäische Größen (50, 56, 62...) entsprechen der Körpergröße in cm.',
      'Im Zweifelsfall die größere Größe wählen, um eine längere Nutzbarkeit zu gewährleisten.',
      'Schlupfausschnitte und ein weiter Schritt sind entscheidende Komfortmerkmale.',
    ]},
  ],
  faqTitle: "Häufig gestellte Fragen",
  faq,
  bibliographyTitle: "Referenzen",
  bibliography: [
    {
      name: 'Zara - Kindergrößentabelle',
      url: 'https://www.zara.com/de/de/size-guide.html',
    },
    {
      name: 'H&M - Babygrößentabelle',
      url: 'https://www2.hm.com/de_de/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - Kinderwachstumsstandards',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Größentabelle',
      url: 'https://www.mayoral.com/de-de/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

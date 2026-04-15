import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'perzentilrechner-baby';
const title = 'WHO Perzentilrechner für Babys';
const description = 'Berechnen Sie das Perzentil für Gewicht, Größe und BMI Ihres Babys anhand der WHO-Tabellen (0-5 Jahre).';
const faq = [
  {
    question: 'Was bedeutet das 50. Perzentil?',
    answer: 'Das 50. Perzentil gibt an, dass das Baby genau im Median liegt, d. h. die Hälfte der Babys gleichen Alters und Geschlechts wiegt oder misst mehr und die andere Hälfte weniger. Es bedeutet nicht, dass dies der ideale Wert ist, sondern der zentrale Wert der Verteilung.',
  },
  {
    question: 'Ist ein niedriges Perzentil ein Zeichen für ein Problem?',
    answer: 'Nicht unbedingt. Ein niedriges Perzentil (z. B. P10) kann vollkommen normal sein, wenn es über die Zeit stabil bleibt. Wichtig ist der Wachstumstrend, nicht ein isolierter Wert. Konsultieren Sie immer Ihren Kinderarzt.',
  },
  {
    question: 'Welche Wachstumstabellen verwendet dieser Rechner?',
    answer: 'Dieser Rechner verwendet die Wachstumsstandards der Weltgesundheitsorganisation (WHO) für Kinder von 0 bis 5 Jahren, basierend auf der Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Was ist der BMI bei Babys?',
    answer: 'Der Body-Mass-Index (BMI) bei Babys ist das Verhältnis von Gewicht zu Quadrat der Größe. Die BMI-Perzentile für Babys unterscheiden sich von denen für Erwachsene und müssen mit den spezifischen Tabellen für jedes Alter und Geschlecht interpretiert werden.',
  },
  {
    question: 'Wie oft sollte ich mein Baby messen?',
    answer: 'In den ersten Monaten kontrolliert der Kinderarzt das Wachstum normalerweise bei jedem Besuch. Zu Hause können Sie Gewicht und Größe monatlich protokollieren, um den Wachstumstrend zu beobachten.',
  },
];
const howTo = [
  {
    name: 'Wählen Sie das Geschlecht des Babys',
    text: 'Wählen Sie zwischen Junge oder Mädchen, um die entsprechenden WHO-Tabellen anzuwenden.',
  },
  {
    name: 'Geben Sie das Alter ein',
    text: 'Verwenden Sie den Schieberegler oder die Pfeile, um das Alter in Monaten anzugeben (0-60 Monate).',
  },
  {
    name: 'Geben Sie Gewicht und Größe ein',
    text: 'Geben Sie das Gewicht in Kilogramm und die Größe in Zentimetern ein.',
  },
  {
    name: 'Konsultieren Sie die Perzentile',
    text: 'Die Perzentile für Gewicht, Größe und BMI werden automatisch nach den WHO-Tabellen berechnet.',
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

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Messdaten',
    labelSex: 'Geschlecht des Babys',
    sexBoy: 'Junge',
    sexGirl: 'Mädchen',
    unitMonths: 'Nur Monate',
    unitYearsMonths: 'Jahre + Monate',
    labelWeight: 'Gewicht (kg)',
    labelHeight: 'Größe (cm)',
    btnAddHistory: 'Zu meinem Verlauf hinzufügen',
    btnClearHistory: 'Daten löschen',
    labelDashboard: 'Wachstums-Dashboard',
    labelWeight2: 'Gewicht',
    labelHeight2: 'Größe',
    labelBMI: 'BMI',
    labelCalculating: 'Berechnung...',
    disclaimer: 'Perzentile sind nur ein statistisches Instrument. Konsultieren Sie zur Interpretation der Ergebnisse immer Ihren Kinderarzt.',
    labelLowRange: 'Niedriger Bereich',
    labelLowNormal: 'Niedrig normal',
    labelNormal: 'Normal',
    labelHighNormal: 'Hoch normal',
    labelHighRange: 'Hoher Bereich',
    alertOutOfRange: 'Wert außerhalb des Bereichs P3-P97. Konsultieren Sie Ihren Kinderarzt.',
    labelMonths: 'Monate',
    labelYears: 'Jahre',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO Perzentilrechner: Leitfaden zum Verständnis des Wachstums Ihres Babys',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 Schlüssel zur Interpretation der Perzentile Ihres Babys',
      items: [
        'Kein einzelnes Perzentil definiert die Gesundheit Ihres Babys: Wichtig ist der Trend über die Zeit.',
        'Perzentile zwischen P3 und P97 gelten als innerhalb des statistischen Normalbereichs.',
        'Der BMI bei Babys folgt eigenen Kurven und sollte nicht mit Referenzwerten für Erwachsene verglichen werden.',
        'Die WHO-Kurven basieren auf Babys, die unter optimalen Bedingungen aufgewachsen sind, einschließlich ausschließlichem Stillen in den ersten Monaten.',
        'Teilen Sie Wachstumsaufzeichnungen immer mit Ihrem Kinderarzt für eine angemessene klinische Interpretation.',
      ],
    },
    {
      type: 'title',
      text: 'So messen Sie Ihr Baby richtig',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Wiegen Sie das Baby nach Möglichkeit ohne Kleidung und immer auf derselben Waage.',
        'Messen Sie die Länge in horizontaler Position bis zum Alter von 24 Monaten.',
        'Messen Sie ab 2 Jahren die Größe in vertikaler Position.',
        'Führen Sie die Messungen zur gleichen Tageszeit durch, um eine größere Konsistenz zu gewährleisten.',
      ],
    },
    {
      type: 'tip',
      html: 'Ein Perzentil unter P3 bedeutet nicht automatisch ein Gesundheitsproblem. Das Wichtigste ist zu beobachten, ob die Wachstumskurve ihren Trend über die Zeit beibehält.',
    },
    {
      type: 'title',
      text: 'Interpretation der Perzentile',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Perzentil', 'Interpretation', 'Empfohlene Aktion'],
      rows: [
        ['P97 oder höher', 'Hoher Bereich', 'Besprechen Sie dies beim nächsten Besuch mit dem Kinderarzt'],
        ['P85 bis P97', 'Hoch normal', 'Normales Follow-up'],
        ['P15 bis P85', 'Normal', 'Keine besondere Aktion erforderlich'],
        ['P3 bis P15', 'Niedrig normal', 'Normales Follow-up'],
        ['P3 oder niedriger', 'Niedriger Bereich', 'Konsultieren Sie den Kinderarzt'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs. Orbegozo Kurven',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO Kurven',
          description: 'Internationaler Standard basierend auf Babys aus 6 Ländern, die unter optimalen Bedingungen aufgewachsen sind.',
          points: [
            'Validierter internationaler Standard',
            'Basierend auf Babys aus 6 Ländern und optimalen Bedingungen',
            'Aktualisiert und mit aktueller wissenschaftlicher Unterstützung',
            'Spiegelt möglicherweise keine lokalen genetischen Variationen wider',
          ],
        },
        {
          title: 'Orbegozo Kurven',
          description: 'An die spanische Bevölkerung angepasste Kurven, die in früheren Jahrzehnten weit verbreitet waren.',
          points: [
            'An die spanische Bevölkerung angepasst',
            'In Spanien in früheren Jahrzehnten weit verbreitet',
            'Basierend auf einer älteren Referenzpopulation',
            'Geringere internationale Akzeptanz',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 Jahre', label: 'Referenzstandard' },
        { value: 'Trendkurve', label: 'Schlüsselvariable' },
        { value: 'LMS-Parameter', label: 'Technische Präzision' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Anzahl der Standardabweichungen, um die ein Wert vom Mittelwert der Referenzpopulation abweicht. Ein Z-Score von 0 entspricht dem 50. Perzentil.',
        },
        {
          term: 'Harmonie',
          definition: 'Angemessenes Verhältnis zwischen Gewicht und Größe. Ein Baby kann ein niedriges Gewichtsperzentil haben, aber harmonisch sein, wenn seine Größe im gleichen Verhältnis ebenfalls niedrig ist.',
        },
        {
          term: 'Anthropometrie',
          definition: 'Satz von Körpermaßen (Gewicht, Größe, Kopfumfang, BMI), die zur Bewertung von Wachstum und Ernährungszustand verwendet werden.',
        },
        {
          term: 'LMS-Parameter',
          definition: 'Statistische Methode (L=Box-Cox, M=Median, S=Variationskoeffizient), die von der WHO verwendet wird, um Perzentiltabellen zu erstellen und jede Messung in einen Z-Score umzuwandeln.',
        },
      ],
    },
  ],
  faqTitle: "Häufig gestellte Fragen",
  faq,
  bibliographyTitle: "Referenzen",
  bibliography: [
    {
      name: 'WHO Child Growth Standards: Methods and development',
      url: 'https://www.who.int/publications/i/item/924154693X',
    },
    {
      name: 'WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age',
      url: 'https://www.who.int/tools/child-growth-standards/standards',
    },
    {
      name: 'Comparison of the WHO Child Growth Standards and the CDC 2000 Growth Charts - de Onis M et al.',
      url: 'https://doi.org/10.1093/jn/137.1.144S',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

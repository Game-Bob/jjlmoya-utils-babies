import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calcolatore-poppate-neonato';
const title = 'Calcolatore delle Poppate del Neonato';
const description = 'Calcola quanta latte ha bisogno il tuo bambino in base al suo peso e all\'età. Poppate raccomandate, millilitri per poppata e segnali di fame e sazietà.';

const faq = [
  {
    question: 'Quanto latte ha bisogno un neonato?',
    answer: 'Nel primo giorno di vita, lo stomaco del bambino ha le dimensioni di una ciliegia e ha bisogno solo di 5-7 ml per poppata. A partire dal quinto giorno la capacità cresce fino a 45–60 ml e le necessità aumentano progressivamente.',
  },
  {
    question: 'Con quale frequenza deve mangiare un bambino?',
    answer: 'I neonati hanno bisogno di 8-12 poppate al giorno. A 3 mesi di solito si distanziano a 7–8 poppate, e a 6 mesi a circa 5 poppate giornaliere.',
  },
  {
    question: 'Come so se il mio bambino sta mangiando a sufficienza?',
    answer: 'Gli indicatori più affidabili sono: aumento di peso adeguato, almeno 5–6 pannolini bagnati al giorno e il bambino che mostra segnali di sazietà dopo le poppate.',
  },
  {
    question: 'L\'allattamento al seno e la formula hanno le stesse quantità?',
    answer: 'Con l\'allattamento al seno si raccomanda di alimentare a richiesta senza misurare i volumi. Con la formula, il riferimento abituale è 150 ml per kg di peso al giorno, distribuiti nel numero di poppate in base all\'età.',
  },
];

const howTo = [
  {
    name: 'Seleziona l\'età del bambino',
    text: 'Scegli l\'unità (giorni, settimane o mesi) e regola il valore con lo slider o i tasti.',
  },
  {
    name: 'Inserisci il peso del bambino',
    text: 'Usa lo slider del peso o i tasti per regolare il peso attuale del bambino in chilogrammi.',
  },
  {
    name: 'Seleziona il tipo di alimentazione',
    text: 'Scegli tra seno, mista o formula per ottenere la guida più adattata.',
  },
  {
    name: 'Consulta il piano raccomandato',
    text: 'Il calcolatore mostra il numero di poppate, i millilitri per poppata e il totale giornaliero stimato.',
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
  inLanguage: 'it',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Configurazione attuale',
    labelPlan: 'Piano raccomandato',
    unitDays: 'giorni',
    unitWeeks: 'settimane',
    unitMonths: 'mesi',
    labelWeight: 'Peso del bambino',
    labelFeedType: 'Tipo di alimentazione',
    feedBreast: 'Seno',
    feedMixed: 'Mista',
    feedFormula: 'Formula',
    labelFreeDemand: 'A richiesta',
    labelMlPerFeed: 'ml per ogni poppata',
    labelFeedsCount: 'Poppate / 24h',
    labelDailyTotal: 'Totale giornaliero (stim.)',
    labelHunger: 'Segnali di fame',
    labelFullness: 'Segnali di sazietà',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti',
  },
  seo: [
    { type: 'summary', title: 'Riepilogo: Alimentazione del bambino', items: [
      'La capacità gastrica del neonato è di appena 5–7 ml nel primo giorno.',
      'Il riferimento generale per la formula è 150 ml per kg di peso al giorno.',
      'L\'allattamento al seno si offre a richiesta senza volumi fissi.',
      'La frequenza diminuisce con l\'età: da 8–12 poppate a 4–5 in 6 mesi.',
    ]},
    { type: 'title', text: 'Quanta latte ha bisogno il mio bambino secondo il suo peso e l\'età?', level: 2 },
    { type: 'paragraph', html: 'Le necessità di latte cambiano rapidamente nei primi mesi. Il calcolatore stima la quantità secondo il peso attuale e l\'età del bambino, seguendo le linee guida pediatriche dell\'OMS e dell\'AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Giorno 1 (ciliegia)' },
      { value: '150 ml/kg', label: 'Riferimento formula' },
      { value: '8–12', label: 'Poppate/giorno neonato' },
    ]},
    { type: 'title', text: 'Dimensione dello stomaco per età', level: 3 },
    { type: 'table', headers: ['Età', 'Dimensione rif.', 'Capacità', 'Poppate/giorno'], rows: [
      ['Giorno 1', 'Ciliegia', '5–7 ml', '8–12'],
      ['Giorni 2–4', 'Noce', '22–27 ml', '8–12'],
      ['Giorni 5–30', 'Uovo', '45–60 ml', '8–10'],
      ['1–3 mesi', 'Massima', '90–120 ml', '7–8'],
      ['3–6 mesi', 'Massima', '120–150 ml', '5–6'],
      ['6+ mesi', 'Massima', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Un indicatore affidabile di alimentazione adeguata è il numero di pannolini bagnati: tra 5 e 6 al giorno a partire dal quinto giorno indicano una buona idratazione.' },
    { type: 'title', text: 'Allattamento al seno vs formula', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Allattamento al seno', description: 'Alimentazione naturale a richiesta.', points: ['Senza orario fisso', 'Anticorpi attivi', 'Composizione variabile', 'Difficile quantificare'] },
      { title: 'Latte di formula', description: 'Poppate programmate con volume calcolabile.', points: ['Ogni 3–4 ore', 'Composizione stabile', 'Facile controllare l\'assunzione', 'Richiede preparazione sterile'] },
    ]},
    { type: 'list', items: [
      'Aumento di peso adeguato: 150–200 g/settimana nel primo mese',
      'Almeno 5–6 pannolini bagnati al giorno',
      'Il bambino appare tranquillo dopo le poppate',
      'Urina chiara o giallo molto pallido',
    ]},
  ],
  faqTitle: "Domande frequenti",
  faq,
  bibliographyTitle: "Riferimenti",
  bibliography: [
    {
      name: 'OMS - Alimentazione del lattante e del bambino piccolo',
      url: 'https://www.who.int/it/health-topics/infant-nutrition',
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
      name: 'Ministero della Salute (Italia) - Allattamento',
      url: 'https://www.salute.gov.it/portale/allattamento/homeAllattamento.jsp',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

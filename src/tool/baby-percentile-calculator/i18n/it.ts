import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calcolatore-percentili-neonati';
const title = 'Calcolatore Percentili OMS per Neonati';
const description = 'Calcola il percentile di peso, altezza e IMC del tuo bambino in base alle tabelle OMS (0-5 anni).';
const faq = [
  {
    question: 'Cosa significa il 50° percentile?',
    answer: 'Il 50° percentile indica che il bambino si trova esattamente nella mediana, ovvero la metà dei bambini della stessa età e sesso pesa o misura di più, e l\'altra metà meno. Non significa che sia il valore ideale, ma il valore centrale della distribuzione.',
  },
  {
    question: 'Un percentile basso è segno di un problema?',
    answer: 'Non necessariamente. Un percentile basso (ad esempio, P10) può essere perfettamente normale se si mantiene stabile nel tempo. L\'importante è la tendenza di crescita, non un valore isolato. Consulta sempre il tuo pediatra.',
  },
  {
    question: 'Quali tabelle di crescita utilizza questo calcolatore?',
    answer: 'Questo calcolatore utilizza gli standard di crescita dell\'Organizzazione Mondiale della Sanità (OMS) per bambini da 0 a 5 anni, basati sul Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Cos\'è l\'IMC nei neonati?',
    answer: 'L\'Indice di Massa Corporea (IMC) nei neonati è il rapporto tra il peso e l\'altezza al quadrato. I percentili di IMC per i neonati differiscono da quelli degli adulti e devono essere interpretati con le tabelle specifiche per ogni età e sesso.',
  },
  {
    question: 'Con quale frequenza devo misurare il mio bambino?',
    answer: 'Nei primi mesi, il pediatra solitamente controlla la crescita a ogni visita. A casa puoi registrare il peso e l\'altezza mensilmente per osservare la tendenza di crescita.',
  },
];
const howTo = [
  {
    name: 'Seleziona il sesso del bambino',
    text: 'Scegli tra bambino o bambina per applicare le tabelle OMS corrispondenti.',
  },
  {
    name: 'Inserisci l\'età',
    text: 'Usa il cursore o le frecce per indicare l\'età in mesi (0-60 mesi).',
  },
  {
    name: 'Inserisci peso e altezza',
    text: 'Scrivi il peso in chilogrammi e l\'altezza in centimetri.',
  },
  {
    name: 'Consulta i percentili',
    text: 'I percentili di peso, altezza e IMC vengono calcolati automaticamente secondo le tabelle OMS.',
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

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Dati della Misurazione',
    labelSex: 'Sesso del bambino',
    sexBoy: 'Bambino',
    sexGirl: 'Bambina',
    unitMonths: 'Solo mesi',
    unitYearsMonths: 'Anni + mesi',
    labelWeight: 'Peso (kg)',
    labelHeight: 'Altezza (cm)',
    btnAddHistory: 'Aggiungi alla mia cronologia',
    btnClearHistory: 'Cancella dati',
    labelDashboard: 'Dashboard di Crescita',
    labelWeight2: 'Peso',
    labelHeight2: 'Altezza',
    labelBMI: 'IMC',
    labelCalculating: 'Calcolo in corso...',
    disclaimer: 'I percentili sono solo uno strumento statistico. Consulta sempre il tuo pediatra per interpretare i risultati.',
    labelLowRange: 'Intervallo basso',
    labelLowNormal: 'Normale basso',
    labelNormal: 'Normalità',
    labelHighNormal: 'Normale alto',
    labelHighRange: 'Intervallo alto',
    alertOutOfRange: 'Valore fuori dagli intervalli P3-P97. Consulta il tuo pediatra.',
    labelMonths: 'Mesi',
    labelYears: 'Anni',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore Percentili OMS: Guida per capire la crescita del tuo bambino',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 chiavi per interpretare i percentili del tuo bambino',
      items: [
        'Nessun percentile isolato definisce la salute del tuo bambino: l\'importante è la tendenza nel tempo.',
        'I percentili tra P3 e P97 sono considerati entro l\'intervallo di normalità statistica.',
        'L\'IMC nei neonati segue curve proprie e non deve essere confrontato con i valori di riferimento per gli adulti.',
        'Le curve OMS sono basate su bambini cresciuti in condizioni ottimali, incluso l\'allattamento al seno esclusivo durante i primi mesi.',
        'Condividi sempre i registri di crescita con il tuo pediatra per un\'adeguata interpretazione clinica.',
      ],
    },
    {
      type: 'title',
      text: 'Come misurare correttamente il tuo bambino',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pesa il bambino senza vestiti e, se possibile, sempre sulla stessa bilancia.',
        'Misura la lunghezza in posizione orizzontale fino ai 24 mesi.',
        'A partire dai 2 anni, misura l\'altezza in posizione verticale.',
        'Esegui le misurazioni alla stessa ora del giorno per una maggiore coerenza.',
      ],
    },
    {
      type: 'tip',
      html: 'Un percentile al di sotto di P3 non implica automaticamente un problema di salute. La cosa più importante è osservare se la curva di crescita mantiene la sua tendenza nel tempo.',
    },
    {
      type: 'title',
      text: 'Interpretazione dei percentili',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentile', 'Interpretazione', 'Azione raccomandata'],
      rows: [
        ['P97 o superiore', 'Intervallo alto', 'Parlarne con il pediatra alla prossima visita'],
        ['P85 a P97', 'Normale alto', 'Monitoraggio normale'],
        ['P15 a P85', 'Normalità', 'Nessuna azione speciale necessaria'],
        ['P3 a P15', 'Normale basso', 'Monitoraggio normale'],
        ['P3 o inferiore', 'Intervallo basso', 'Consultare il pediatra'],
      ],
    },
    {
      type: 'title',
      text: 'OMS vs Curve di Orbegozo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Curve OMS',
          description: 'Standard internazionale basato su bambini di 6 paesi cresciuti in condizioni ottimali.',
          points: [
            'Standard internazionale validato',
            'Basato su bambini di 6 paesi e condizioni ottimali',
            'Aggiornate e con supporto scientifico attuale',
            'Potrebbe non riflettere variazioni genetiche locali',
          ],
        },
        {
          title: 'Curve di Orbegozo',
          description: 'Curve adattate alla popolazione spagnola, molto usate nei decenni passati.',
          points: [
            'Adattate alla popolazione spagnola',
            'Molto usate in Spagna nei decenni passati',
            'Basate su una popolazione di riferimento più vecchia',
            'Minore adozione internazionale',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'OMS 0-5 anni', label: 'Standard di riferimento' },
        { value: 'Curva di tendenza', label: 'Variabile chiave' },
        { value: 'Parametri LMS', label: 'Precisione tecnica' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Numero di deviazioni standard che un valore si allontana dalla media della popolazione di riferimento. Uno Z-Score di 0 equivale al 50° percentile.',
        },
        {
          term: 'Armonia',
          definition: 'Proporzione adeguata tra peso e altezza. Un bambino può avere un percentile basso di peso ma essere armonico se anche la sua altezza è bassa nella stessa proporzione.',
        },
        {
          term: 'Antropometria',
          definition: 'Insieme di misurazioni corporee (peso, altezza, circonferenza cranica, IMC) utilizzate per valutare la crescita e lo stato nutrizionale.',
        },
        {
          term: 'Parametri LMS',
          definition: 'Metodo statistico (L=Box-Cox, M=mediana, S=coefficiente di variazione) utilizzato dall\'OMS per costruire le tabelle dei percentili e trasformare qualsiasi misurazione in uno Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Domande frequenti",
  faq,
  bibliographyTitle: "Riferimenti",
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

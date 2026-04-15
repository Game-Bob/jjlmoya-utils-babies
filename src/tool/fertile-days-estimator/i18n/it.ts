import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calcolatore-giorni-fertili';
const title = 'Calcolatore di Giorni Fertili';
const description = 'Calcola la tua finestra fertile e la data di ovulazione in base al tuo ciclo mestruale.';
const faq = [
  {
    question: 'Come si calcola la finestra fertile?',
    answer: 'La finestra fertile si calcola a partire dal primo giorno del tuo ultimo ciclo. L\'ovulazione avviene circa 14 giorni prima dell\'inizio del ciclo successivo. I giorni fertili includono i 5 giorni precedenti l\'ovulazione e il giorno dell\'ovulazione stessa.',
  },
  {
    question: 'Che precisione ha questo calcolatore?',
    answer: 'Il calcolatore è una stima basata sul modello standard di ciclo di 28 giorni (o quello che indichi tu). È orientativo e potrebbe non riflettere variazioni individuali. Per maggiore precisione, combinalo con il monitoraggio della temperatura basale o test di ovulazione.',
  },
  {
    question: 'Cosa succede se il mio ciclo è irregolare?',
    answer: 'Se i tuoi cicli variano molto da un mese all\'altro, il calcolo potrebbe essere meno preciso. In tal caso, il monitoraggio della temperatura basale o i test LH sono metodi più affidabili per identificare l\'ovulazione.',
  },
  {
    question: 'Quanto tempo sopravvive l\'ovulo dopo l\'ovulazione?',
    answer: 'L\'ovulo ha una vita utile da 12 a 24 ore. Tuttavia, gli spermatozoi possono sopravvivere fino a 5 giorni nel tratto riproduttivo femminile, motivo per cui la finestra fertile reale copre diversi giorni prima dell\'ovulazione.',
  },
  {
    question: 'Si può usare questo calcolatore per evitare la gravidanza?',
    answer: 'Non è consigliabile usare questo calcolatore come metodo contraccettivo. I metodi basati sul calendario hanno un tasso di fallimento significativo. Consulta il tuo medico o ginecologo per metodi contraccettivi sicuri e adatti a te.',
  },
];
const howTo = [
  {
    name: 'Seleziona il primo giorno del tuo ultimo ciclo',
    text: 'Fai clic sul giorno del calendario corrispondente all\'inizio della tua ultima mestruazione.',
  },
  {
    name: 'Regola la durata del tuo ciclo',
    text: 'Sposta il cursore per indicare quanti giorni dura abitualmente il tuo ciclo mestruale.',
  },
  {
    name: 'Consulta i risultati',
    text: 'Il calcolatore mostra automaticamente la data di ovulazione stimata, la finestra fertile e l\'inizio del ciclo successivo.',
  },
  {
    name: 'Naviga nel calendario',
    text: 'Usa le frecce di navigazione per vedere i giorni evidenziati nei mesi precedenti o successivi.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Quando è iniziato il tuo ultimo ciclo?',
    step1Desc: 'Seleziona nel calendario il primo giorno della tua ultima mestruazione.',
    pulseHint: 'Fai clic su un giorno del calendario per continuare',
    step1Indicator: 'Data di Inizio',
    step2Indicator: 'Il Tuo Calendario',
    sidebarTitle: 'Il Tuo Ciclo',
    sidebarDesc: 'Personalizza i risultati regolando la durata del tuo ciclo.',
    labelCycleLength: 'Durata del Ciclo',
    unitDays: 'giorni',
    labelOvulation: 'Prossima Ovulazione',
    labelFertileWindow: 'Finestra Fertile',
    labelNextPeriod: 'Prossimo Ciclo',
    legendSelection: 'La tua selezione',
    legendPeriod: 'Ciclo',
    legendFertile: 'Fertile',
    legendOvulation: 'Ovulazione',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcolatore di Giorni Fertili: Guida Completa su Ciclo e Ovulazione',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 punti chiave sulla finestra fertile',
      items: [
        'L\'ovulazione avviene circa 14 giorni prima dell\'inizio del ciclo successivo.',
        'La finestra fertile include i 5 giorni precedenti l\'ovulazione più il giorno dell\'ovulazione stessa.',
        'Gli spermatozoi possono sopravvivere fino a 5 giorni nel tratto riproduttivo femminile.',
        'I cicli irregolari riducono l\'affidabilità del calcolo basato sul calendario.',
        'Combinando questo strumento con la temperatura basale o i test LH si aumenta la precisione.',
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il calcolo della finestra fertile',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il metodo si basa sulla regola di Ogino-Knaus e sul modello standard di ovulazione. Con un ciclo di 28 giorni, l\'ovulazione avviene solitamente intorno al giorno 14. Il calcolatore identifica questo punto ed evidenzia i giorni di maggiore fertilità circostanti.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 giorni', label: 'Prima del ciclo successivo' },
        { value: '5 giorni', label: 'Durata della finestra fertile' },
        { value: '12-24 h', label: 'Vita utile dell\'ovulo' },
      ],
    },
    {
      type: 'title',
      text: 'Fasi del ciclo mestruale',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase follicolare',
          description: 'Inizia con la mestruazione e dura fino all\'ovulazione.',
          points: [
            'I follicoli ovarici maturano sotto l\'influenza dell\'FSH.',
            'Dura tra i 10 e i 14 giorni nei cicli regolari.',
            'I livelli di estrogeni aumentano progressivamente.',
          ],
        },
        {
          title: 'Fase luteale',
          description: 'Inizia dopo l\'ovulazione e termina con la mestruazione.',
          points: [
            'Il corpo luteo produce progesterone per preparare l\'endometrio.',
            'Dura circa 14 giorni nei cicli normali.',
            'In assenza di fertilizzazione, il corpo luteo degenera.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Sebbene il calcolatore utilizzi un modello standard, i cicli mestruali possono variare di mese in mese. Per una maggiore precisione, combina questo strumento con il monitoraggio della temperatura basale o i test di ovulazione.',
    },
    {
      type: 'title',
      text: 'Segni biologici dell\'ovulazione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Cambiamenti nel muco cervicale: nei giorni fertili diventa trasparente ed elastico, simile all\'albume d\'uovo.',
        'Lieve aumento della temperatura basale corporea (0,2–0,4 °C) subito dopo l\'ovulazione.',
        'Lieve dolore o fastidio sul lato dell\'ovaio attivo (Mittelschmerz) durante l\'ovulazione.',
        'Leggero aumento della libido in prossimità dell\'ovulazione, mediato dai cambiamenti ormonali.',
        'Sensazione di gonfiore o pienezza addominale durante i giorni fertili.',
      ],
    },
    {
      type: 'title',
      text: 'Stile di vita e fertilità',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Lo stress cronico può alterare l\'ovulazione e allungare o accorciare il ciclo mestruale.',
        'Il peso corporeo influisce direttamente: sia il sottopeso che il sovrappeso impattano sull\'ovulazione.',
        'L\'esercizio fisico moderato favorisce la regolarità del ciclo; l\'esercizio estremo può sopprimerlo.',
        'Il fumo riduce la riserva ovarica e anticipa la menopausa di diversi anni.',
        'Una dieta ricca di acido folico, ferro e antiossidanti supporta la salute riproduttiva.',
      ],
    },
    {
      type: 'title',
      text: 'Metodi di monitoraggio del ciclo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Metodo', 'Affidabilità', 'Costo'],
      rows: [
        ['Calcolatore calendario', 'Media', 'Gratuito'],
        ['Temperatura basale', 'Alta con pratica', 'Basso'],
        ['Test LH nelle urine', 'Alta', 'Moderato'],
        ['Monitor di fertilità digitale', 'Molto alta', 'Alto'],
        ['Ecografia follicolare', 'Massima', 'Clinica'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulazione',
          definition: 'Rilascio dell\'ovulo maturo dal follicolo ovarico, innescato da un picco di ormone luteinizzante (LH). Avviene una volta per ciclo.',
        },
        {
          term: 'Finestra fertile',
          definition: 'Periodo di massima probabilità di concepimento, che comprende i 5 giorni precedenti l\'ovulazione più il giorno dell\'ovulazione stessa.',
        },
        {
          term: 'Muco cervicale',
          definition: 'Secrezione del collo dell\'utero la cui consistenza varia durante il ciclo. Nei giorni fertili diventa trasparente ed elastico, facilitando il passaggio degli spermatozoi.',
        },
        {
          term: 'Temperatura basale',
          definition: 'Temperatura corporea a riposo assoluto, misurata al risveglio prima di ogni attività. Aumenta leggermente (0,2–0,4 °C) dopo l\'ovulazione per effetto del progesterone.',
        },
      ],
    },
  ],
  faqTitle: "Domande frequenti",
  faq,
  bibliographyTitle: "Riferimenti",
  bibliography: [
    {
      name: 'OMS - Pianificazione familiare',
      url: 'https://www.who.int/it/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Società Italiana di Ginecologia ed Ostetricia',
      url: 'https://www.sigo.it',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

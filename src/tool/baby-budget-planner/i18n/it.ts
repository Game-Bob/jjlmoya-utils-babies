import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Pianificatore Budget Neonato';
export const description = 'Lo strumento definitivo per pianificare le spese del primo anno del tuo bambino. Calcola l\'attrezzatura iniziale, i costi mensili e le spese nascoste con consigli per risparmiare.';

export const faq = [
  {
    question: 'Quanto costa un bambino nel primo anno?',
    answer: 'In media, il primo anno può costare tra i 5.000 € e i 15.000 €, a seconda dello stile di vita, delle necessità di assistenza e della scelta tra articoli nuovi o di seconda mano.',
  },
  {
    question: 'Quali sono gli articoli più costosi per un neonato?',
    answer: 'Le spese iniziali più rilevanti sono solitamente il passeggino, l\'arredamento della cameretta (culla, cassettiera) e il seggiolino auto. L\'asilo nido o la babysitter rappresentano la spesa mensile ricorrente più elevata.',
  },
  {
    question: 'Come posso risparmiare sulle spese del bambino?',
    answer: 'Acquistare articoli di seconda mano per l\'attrezzatura e l\'abbigliamento, preferire l\'allattamento al seno (se possibile) e utilizzare una lista nascita per ricevere regali utili sono le strategie più efficaci.',
  },
  {
    question: 'Cosa sono le "Spese Fantasma" nella pianificazione per un bambino?',
    answer: 'Sono costi nascosti come l\'aumento delle bollette (riscaldamento/aria condizionata), premi assicurativi familiari più alti e vaccini non obbligatori o forniture mediche che spesso mancano nelle liste standard.',
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

export const howTo = [
  {
    name: 'Configura il tuo profilo',
    text: 'Seleziona il tuo stile di vita (Risparmio, Equilibrato o Premium), il metodo di alimentazione e la strategia per l\'assistenza all\'infanzia.',
  },
  {
    name: 'Controlla gli articoli',
    text: 'Esplora le categorie (Investimento iniziale, Spese mensili e Prossime tappe) e personalizza i prezzi o segna gli articoli come di seconda mano.',
  },
  {
    name: 'Monitora il budget',
    text: 'Visualizza il totale necessario per il primo anno e tieni traccia dei tuoi progressi man mano che acquisti gli articoli.',
  },
];

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
  operatingSystem: 'Any',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'pianificatore-budget-neonato',
  faqTitle: 'Domande Frequenti',
  bibliographyTitle: 'Bibliografia',
  seo: [
    { type: 'summary', title: 'Riepilogo: Budget Neonato', items: [
      'Il primo anno può costare tra i 5.000 € e i 15.000 €.',
      'L\'investimento iniziale (cameretta, passeggino) è la voce di spesa più alta all\'inizio.',
      'L\'assistenza all\'infanzia può incidere fino al 50% del budget mensile.',
      'Gli articoli di seconda mano possono ridurre il budget totale fino al 60%.',
    ]},
    { type: 'title', text: 'Quanto costa davvero un bambino nel primo anno?', level: 2 },
    { type: 'paragraph', html: 'Pianificare l\'arrivo di un bambino va oltre l\'acquisto dei pannolini. Richiede una visione strategica degli investimenti una tantum rispetto ai costi mensili ricorrenti. Il nostro pianificatore ti aiuta a visualizzare questa curva e a prepararti alla transizione finanziaria verso la genitorialità.' },
    { type: 'stats', columns: 3, items: [
      { value: '2.000 €+', label: 'Attrezzatura Iniziale' },
      { value: '100-150 €', label: 'Pannolini/Igiene Mensili' },
      { value: '40%+', label: 'Risparmio con l\'Usato' },
    ]},
    { type: 'title', text: 'Suddivisione per Categoria: Dove finiscono i soldi?', level: 3 },
    { type: 'table', headers: ['Categoria', 'Articoli Tipici', 'Frequenza', 'Impatto Costo'], rows: [
      ['Investimento Iniziale', 'Culla, Passeggino, Seggiolino', 'Una tantum', 'Alto'],
      ['Spese Mensili', 'Pannolini, Latte, Igiene', 'Ogni mese', 'Medio'],
      ['Prossime Tappe', 'Seggiolone, Svezzamento, Vestiti', 'Occasionale', 'Medio'],
      ['Assistenza', 'Asilo Nido / Babysitter', 'Ogni mese', 'Molto Alto'],
    ]},
    { type: 'tip', html: '<strong>Consiglio per Risparmiare:</strong> Passeggini di alta qualità e mobili per la cameretta hanno un ottimo valore di rivendita. Acquistarli di seconda mano può farti risparmiare migliaia di euro senza rinunciare a sicurezza o stile.' },
    { type: 'title', text: 'Confronto Stili di Vita', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Risparmio', 
        description: 'Focus sull\'essenziale e sull\'usato.', 
        points: ['Vestiti regalati o usati', 'Attrezzatura ricondizionata', 'Allattamento al seno', 'Asilo nido pubblico'] 
      },
      { 
        title: 'Premium', 
        description: 'Ultimi modelli e massimo comfort.', 
        points: ['Attrezzatura high-tech', 'Latte bio', 'Cameretta di design', 'Babysitter dedicata'] 
      },
    ]},
    { type: 'title', text: 'Checklist Pianificazione Intelligente', level: 3 },
    { type: 'list', items: [
      'Controlla gli aggiornamenti delle coperture assicurative familiari.',
      'Prevedi un budget per vaccini facoltativi e prodotti farmaceutici specifici.',
      'Anticipa un aumento del 20% nelle bollette domestiche (energia/riscaldamento).',
      'Crea presto una lista nascita per farti aiutare da amici e parenti con le spese grandi.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Inizia il tuo Piano',
    lifestyleLabel: 'Scelta Stile di Vita',
    lifestyleSaving: 'Risparmio Totale',
    lifestyleBalanced: 'Equilibrato',
    lifestylePremium: 'Premium',
    feedingLabel: 'Metodo Alimentazione',
    feedingBreast: 'Allattamento al Seno',
    feedingFormula: 'Latte in Polvere',
    feedingMixed: 'Misto',
    childcareLabel: 'Strategia Assistenza',
    childcareHome: 'Resta a Casa',
    childcarePublic: 'Asilo Nido Pubblico',
    childcarePrivate: 'Asilo Nido Privato',
    startBtn: 'Genera il mio Budget',
    categoryBeforeBirth: 'Investimento Iniziale',
    categoryMonthByMonth: 'Spese Mensili',
    categoryMilestones: 'Prossime Tappe',
    totalNeededLabel: 'Obiettivo Totale 1° Anno',
    savingsProgressLabel: 'Pronto / Risparmiato',
    chartTitle: 'Curva Spesa Mensile',
    ghostAlertsTitle: 'Avvisi Spese Fantasma',
    ghostInsurance: 'Controlla Assicurazioni Vita/Salute',
    ghostHeating: 'Prevedi +20% Energia/Riscaldamento',
    ghostVaccines: 'Budget Vaccini Facoltativi',
    diaperCalcTitle: 'Controllo Prezzo Pannolini',
    diaperPriceLabel: 'Prezzo Pacco',
    diaperUnitsLabel: 'Unità per Pacco',
    secondHandLabel: 'Usato / Regalo',
    wishlistLabel: 'Nella Lista',
    itemNursery: 'Allestimento Cameretta',
    itemStroller: 'Passeggino e Sistemi Viaggio',
    itemHospitalBag: 'Essenziali Borsa Ospedale',
    itemDiapers: 'Pannolini e Salviettine',
    itemPharmacy: 'Farmacia e Igiene',
    itemDaycare: 'Asilo Nido / Assistenza',
    itemSolidFood: 'Transizione Svezzamento',
    itemClothes: 'Abbigliamento Stagionale',
    itemHighChair: 'Seggiolone e Pappa',
    editLabel: 'Modifica Prezzo',
    saveBtn: 'Salva',
    exportBtn: 'Esporta JSON',
    importBtn: 'Importa JSON',
    resetBtn: 'Reinizializza Piano',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Inizio',
  },
};

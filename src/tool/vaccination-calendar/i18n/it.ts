import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calendario-vaccinazione-spagna-neonati';
const title = 'Calendario Vaccinale in Spagna';
const description = 'Calcola le date esatte delle vaccinazioni del tuo bambino secondo il calendario AEP 2026.';
const faq = [
  {
    question: 'Cos\'è il calendario vaccinale AEP 2026?',
    answer: 'È il calendario delle vaccinazioni raccomandato dall\'Associazione Spagnola di Pediatria per l\'anno 2026. Include tutti i vaccini sistematici e opzionali per neonati e bambini dalla nascita fino ai 14 anni.',
  },
  {
    question: 'È obbligatorio vaccinare il mio bambino secondo questo calendario?',
    answer: 'In Spagna la vaccinazione non è legalmente obbligatoria, ma è fortemente raccomandata. I vaccini del calendario sistematico sono gratuiti e vengono somministrati nei centri sanitari pubblici.',
  },
  {
    question: 'Cosa succede se saltiamo una dose?',
    answer: 'Se una dose viene ritardata non è necessario ricominciare da capo. Il tuo pediatra ti indicherà come riprendere il calendario da dove era stato interrotto. L\'importante è completare il ciclo il prima possibile.',
  },
  {
    question: 'Posso somministrare più vaccini lo stesso giorno?',
    answer: 'Sì, è comune e sicuro somministrare più vaccini nella stessa visita. I vaccini combinati come l\'esavalente proteggono già contro sei malattie in un\'unica iniezione.',
  },
  {
    question: 'I vaccini sono sicuri per i nati prematuri?',
    answer: 'I neonati prematuri devono essere vaccinati secondo la loro età cronologica (dalla nascita), non l\'età corretta, salvo indicazione specifica del neonatologo. Hanno priorità in quanto più vulnerabili.',
  },
];
const howTo = [
  {
    name: 'Inserisci la data di nascita',
    text: 'Scrivi il giorno, il mese e l\'anno di nascita del tuo bambino nei campi corrispondenti.',
  },
  {
    name: 'Consulta il prossimo appuntamento',
    text: 'Il calcolatore ti mostra automaticamente quando sarà la prossima vaccinazione e quali vaccini corrispondono.',
  },
  {
    name: 'Controlla il calendario completo',
    text: 'Apri le sezioni degli appuntamenti passati e futuri per vedere tutto il calendario vaccinale.',
  },
  {
    name: 'Esporta i promemoria',
    text: 'Premi il pulsante per scaricare un file .ics con tutti i prossimi appuntamenti e aggiungerli al calendario del tuo cellulare.',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Data di nascita del bambino',
    placeholderDD: 'GG',
    placeholderMM: 'MM',
    placeholderAAAA: 'AAAA',
    emptyMsg: 'Inserisci il giorno, il mese e l\'anno di nascita del tuo bambino per vedere il calendario vaccinale.',
    invalidMsg: 'La data inserita non è valida.',
    futureMsg: 'Un bambino non può essere nato nel futuro.',
    labelNextAppointment: 'Prossimo appuntamento calcolato',
    btnAddReminder: 'Aggiungi promemoria al cellulare',
    btnToday: 'È oggi! Non dimenticare il libretto',
    labelPassed: 'Appuntamenti passati',
    labelFuture: 'Calendario futuro',
    labelStatusOk: 'OK',
    labelStatusPending: 'PEND.',
    labelSource: 'Fonte: AEP 2026',
    labelShare: 'Condividi queste date',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti',
    labelMonth: 'mese',
    labelMonths: 'mesi',
    labelYear: 'anno',
    labelYears: 'anni',
    labelDay: 'giorno',
    labelDays: 'giorni',
    labelAnd: 'e',
    labelVaccination: 'Vaccinazione',
    labelAppointment: 'Appuntamento vaccinale',
    vac_hexavalente: 'Esavalente',
    vac_neumococo: 'Pneumococco (VCN15/20)',
    vac_meningococo_b: 'Meningococco B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningococco ACWY',
    vac_triple_virica: 'MPR (Morbillo, Parotite, Rosolia)',
    vac_varicela: 'Varicella',
    vac_gripe: 'Influenza (Stagionale)',
    vac_vph: 'HPV (Papilloma)',
    vac_tdpa: 'dTpa (Tetano, Difterite, Pertosse)',
    vac_polio_booster: 'Polio (Richiamo)',
  },
  seo: [
    { type: 'title', text: 'Calcolatore Vaccini: Quando tocca il prossimo a mio figlio?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Efficacia' },
      { value: '14', label: 'Dosi totali' },
      { value: 'Pubblico', label: 'Costo AEP' },
      { value: 'Alta', label: 'Sicurezza' },
    ]},
    { type: 'tip', html: 'Il calendario AEP 2026 include novità importanti come l\'estensione del vaccino contro il meningococco B e l\'aggiornamento delle raccomandazioni per l\'HPV in entrambi i sessi dai 12 anni.' },
    { type: 'title', text: 'Novità del Calendario AEP 2026', level: 3 },
    { type: 'list', items: [
      'Meningococco B (Bexsero): ciclo 2+1 consolidato con dosi a 2, 4 e 12 mesi.',
      'HPV esteso a tutti gli adolescenti dai 12 anni, indipendentemente dal sesso.',
      'Pneumococco: raccomandazione aggiornata con VCN15 o VCN20 a seconda della disponibilità regionale.',
      'Rotavirus: vaccino orale incluso nel calendario sistematico in tutte le comunità.',
      'dTpa: richiamo raccomandato a 6 e 12 anni per mantenere l\'immunità contro la pertosse.',
    ]},
    { type: 'title', text: 'Differenze tra le comunità autonome', level: 3 },
    { type: 'list', items: [
      'Alcune comunità includono vaccini aggiuntivi non previsti dal calendario nazionale.',
      'Il finanziamento del rotavirus varia a seconda della comunità, sebbene la tendenza sia la copertura universale.',
      'Il meningococco ACWY può essere somministrato a età leggermente diverse a seconda del protocollo autonomo.',
      'Consulta sempre il tuo pediatra o il centro sanitario della tua comunità per confermare il calendario vigente.',
    ]},
    { type: 'title', text: 'Come esportare il calendario sul tuo cellulare', level: 3 },
    { type: 'list', items: [
      'Inserisci la data di nascita del tuo bambino nel calcolatore.',
      'Premi il pulsante "Aggiungi promemoria al cellulare" per scaricare il file .ics.',
      'Apri il file con la tua applicazione di calendario (Google Calendar, Apple Calendar, ecc.).',
      'Tutti gli eventi vaccinali verranno salvati con la data e i vaccini corrispondenti.',
    ]},
    { type: 'title', text: 'Effetti collaterali comuni', level: 3 },
    { type: 'list', items: [
      'Arrossamento o gonfiore nel punto di iniezione: scompare in 1-2 giorni.',
      'Febbre lieve (37.5–38.5 °C): normale nelle prime 24-48 ore.',
      'Irritabilità o pianto: frequente nei neonati dopo le prime dosi.',
      'Sonnolenza o mancanza di appetito transitoria: non richiede trattamento.',
      'Reazioni gravi come l\'anafilassi sono estremamente rare (meno di 1 su un milione di dosi).',
    ]},
    { type: 'tip', html: 'Portare il bambino ben nutrito e con vestiti comodi agevola la visita. Dopo il vaccino, il contatto pelle a pelle o l\'allattamento al seno aiutano a calmare il dolore e l\'infiammazione in modo naturale.' },
    { type: 'summary', title: 'Cosa ricordare', items: [
      'Il calendario AEP 2026 include 14 dosi fino ai 12 anni per una protezione completa.',
      'I vaccini del primo anno proteggono simultaneamente contro fino a 9 malattie gravi.',
      'Gli effetti collaterali lievi sono normali e scompaiono in 1-2 giorni.',
      'Puoi esportare tutti gli appuntamenti vaccinali nel calendario del tuo cellulare con un solo clic.',
      'Consulta sempre il tuo pediatra in caso di dubbi sul calendario della tua comunità.',
    ]},
  ],
  faqTitle: "Domande frequenti",
  faq,
  bibliographyTitle: "Riferimenti",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendario Vaccinale 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Ministero della Salute Spagnolo - Calendario Vaccinale',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'OMS - Immunizzazione',
      url: 'https://www.who.int/it/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Programma di immunizzazione raccomandato per bambini e adolescenti',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Timer per le Contrazioni';
export const description = 'Monitora durata e frequenza delle contrazioni con un grande pulsante a sfioramento, respirazione guidata, storico e avviso per il pattern 5-1-1.';

export const faq = [
  {
    question: 'Cos\'è la regola del 5-1-1 per le contrazioni?',
    answer: 'La regola del 5-1-1 di solito significa che le contrazioni sono distanziate di circa 5 minuti, durano circa 1 minuto e si mantengono per circa 1 ora. Molte équipe ostetriche la usano come segnale pratico per chiamare e ricevere indicazioni, ma il tuo piano personale può essere diverso.',
  },
  {
    question: 'Quando devo contattare l\'ostetrica o l\'ospedale?',
    answer: 'Contatta la tua équipe ostetrica quando le contrazioni diventano regolari, intense o corrispondono alle indicazioni sui tempi che ti sono state date. Chiama urgentemente in caso di sanguinamento abbondante, riduzione dei movimenti fetali, febbre, dolore intenso, rottura delle acque con dubbi o se senti che qualcosa non va.',
  },
  {
    question: 'Questo timer diagnostica il travaglio attivo?',
    answer: 'No. Registra i tempi ed evidenzia un pattern di contrazioni comune. Le modifiche cervicali, la posizione del feto, lo stato delle membrane, i sintomi e la tua storia clinica devono essere valutati da un operatore sanitario qualificato.',
  },
  {
    question: 'Come si calcola la frequenza delle contrazioni?',
    answer: 'La frequenza si calcola dall\'inizio di una contrazione all\'inizio della contrazione precedente. La durata si calcola dal momento in cui premi avvia al momento in cui premi ferma.',
  },
  {
    question: 'Posso usarlo durante il travaglio prodromico?',
    answer: 'Sì. Può aiutarti a vedere se le contrazioni stanno diventando più regolari o se si stanno attenuando. Se le contrazioni restano irregolari, cambiano con il riposo o l\'idratazione, o non si intensificano, potrebbero essere ancora prodromiche, ma la tua équipe può guidarti.',
  },
  {
    question: 'Perché è inclusa la respirazione guidata?',
    answer: 'Una respirazione lenta e costante può aiutare a ridurre la tensione, a concentrarsi e a gestire meglio ogni contrazione. L\'animazione è solo un aiuto per il comfort e non sostituisce l\'accompagnamento alla nascita.',
  },
  {
    question: 'Devo aspettare il 5-1-1 se non è il mio primo bambino?',
    answer: 'Non sempre. Il travaglio può progredire più rapidamente dopo un parto vaginale precedente. Segui il piano della tua ostetrica o del ginecologo, specialmente in caso di gravidanza a rischio, se abiti lontano dall\'ospedale o hai avuto travagli rapidi in passato.',
  },
  {
    question: 'Lo storico delle contrazioni viene salvato?',
    answer: 'Il timer memorizza i dati recenti nel tuo browser in modo da poter aggiornare la pagina senza perdere la sessione. Usa il pulsante di ripristino per cancellare lo storico locale.',
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
    name: 'Avvia il cronometro',
    text: 'Premi il pulsante principale quando inizia una contrazione.',
  },
  {
    name: 'Usa la guida alla respirazione',
    text: 'Segui il cerchio che si espande e si contrae mentre la contrazione è attiva.',
  },
  {
    name: 'Ferma il cronometro',
    text: 'Premi di nuovo il pulsante quando la contrazione finisce per registrare durata e intervallo.',
  },
  {
    name: 'Valuta il pattern',
    text: 'Controlla lo storico e il pannello degli avvisi per decidere se contattare la tua équipe ostetrica.',
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
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<LaborContractionTimerUI> = {
  title,
  description,
  slug: 'timer-contrazioni-parto',
  faqTitle: 'Domande frequenti',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Fatti chiave sul monitoraggio delle contrazioni',
      items: [
        'La durata si misura dall\'inizio di una contrazione alla sua fine.',
        'La frequenza si misura dall\'inizio di una contrazione all\'inizio della successiva.',
        'Il pattern 5-1-1 significa circa 5 minuti di distanza, 1 minuto di durata, per 1 ora.',
        'Il monitoraggio delle contrazioni supporta le decisioni ma non può confermare da solo la dilatazione cervicale o il travaglio attivo.',
        'Segui sempre le indicazioni della tua ostetrica, ginecologo o unità di maternità.',
      ],
    },
    {
      type: 'title',
      text: 'Timer per le Contrazioni: Monitora Durata, Frequenza e Pattern 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un timer per le contrazioni aiuta le famiglie a trasformare un momento stressante e difficile da valutare in un registro chiaro. Durante la fase finale della gravidanza è comune chiedersi se le contrazioni siano ancora contrazioni di prova irregolari, travaglio prodromico, travaglio iniziale o un pattern che merita una chiamata all\'unità di maternità. Premendo avvia quando inizia una contrazione e ferma quando finisce, questo strumento calcola la <strong>durata</strong> in secondi e la <strong>frequenza</strong> in minuti dall\'inizio di una contrazione all\'inizio della successiva.',
    },
    {
      type: 'paragraph',
      html: 'L\'obiettivo non è diagnosticare il travaglio. L\'obiettivo è aiutarti a descrivere ciò che accade in termini concreti: quanto dura ogni contrazione, quanto sono ravvicinate, se il pattern si sta rafforzando e se è rimasto costante abbastanza a lungo da corrispondere a linee guida comuni come la regola del 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Segnale di frequenza comune' },
        { value: '60 s', label: 'Durata tipica 5-1-1' },
        { value: '1 ora', label: 'Finestra di stabilità del pattern' },
      ],
    },
    {
      type: 'title',
      text: 'Come interpretare l\'avviso 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La regola del 5-1-1 è una regola empirica molto usata: le contrazioni sono distanziate di circa 5 minuti, durano circa 1 minuto e si mantengono per circa 1 ora. Molte équipe di parto usano quel pattern come segnale pratico per chiamare e ricevere consigli personalizzati, specialmente per un primo travaglio. Questo timer evidenzia il pattern quando le contrazioni recenti sono distanziate 5 minuti o meno, durano almeno 60 secondi e si sono mantenu\u200be per tutta la sessione.',
    },
    {
      type: 'table',
      headers: ['Pattern osservato', 'Cosa può suggerire', 'Prossimo passo utile'],
      rows: [
        ['Ritmo irregolare, durata variabile', 'Possibile travaglio prodromico o travaglio iniziale', 'Riposa, idratati, cambia posizione e continua a osservare a meno che non compaiano sintomi d\'allarme'],
        ['Si avvicinano ma ancora sotto i 60 secondi', 'Il travaglio potrebbe essere in costruzione ma non corrisponde ancora al 5-1-1', 'Continua a monitorare e segui le indicazioni del tuo piano di nascita'],
        ['Circa 5 min di distanza, 60 s di durata, per circa 1 ora', 'Pattern di chiamata 5-1-1 comune', 'Contatta l\'ostetrica, il ginecologo o la tua unità di maternità per indicazioni personalizzate'],
        ['Contrazioni intense e improvvise, pressione o stimolo a spingere', 'Il travaglio potrebbe progredire rapidamente', 'Chiama subito, specialmente se non è il tuo primo bambino'],
      ],
    },
    {
      type: 'title',
      text: 'Come cronometrare correttamente le contrazioni',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Premi avvia all\'inizio della sensazione di tensione, crampo o onda.',
        'Premi ferma quando la contrazione svanisce chiaramente e puoi rilassarti di nuovo.',
        'Non misurare la frequenza dalla fine di una contrazione all\'inizio della successiva. Clinicamente, la frequenza si conta da inizio a inizio.',
        'Registra diverse contrazioni prima di interpretare il pattern, perché una contrazione isolata può essere fuorviante.',
        'Usa prima le indicazioni della tua équipe ostetrica se ti hanno dato una soglia diversa dal 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Travaglio prodromico e travaglio attivo: schemi a confronto',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Spesso prodromico o travaglio iniziale',
          description: 'Le contrazioni possono essere fastidiose e reali, ma il pattern potrebbe non essere ancora in progressione costante verso il parto.',
          points: [
            'Gli intervalli variano invece di accorciarsi in modo costante',
            'Le contrazioni possono attenuarsi con il riposo, l\'idratazione, un bagno o i cambi di posizione',
            'L\'intensità può restare simile invece di aumentare nel tempo',
            'Il collo dell\'utero può modificarsi lentamente o ancora poco, cosa che solo un medico può valutare',
          ],
        },
        {
          title: 'Più suggestivo di travaglio attivo',
          description: 'Il pattern diventa più regolare, più difficile da sopportare mentre si parla e progressivamente più forte.',
          points: [
            'Le contrazioni si avvicinano tra loro nel corso di diverse registrazioni',
            'Ogni contrazione dura circa 45-70 secondi o più',
            'Devi fermarti, respirare o concentrarti durante il picco',
            'Il pattern continua anche dopo il riposo, l\'idratazione o il cambio di posizione',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quando non aspettare il timer',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Nota di sicurezza:</strong> Non aspettare l\'avviso del timer in caso di sanguinamento abbondante, riduzione dei movimenti fetali, forte mal di testa, febbre, liquido verde o maleodorante, dolore intenso e costante, sintomi di preeclampsia o qualsiasi preoccupazione urgente. Chiama l\'équipe ostetrica o i servizi di emergenza secondo le indicazioni locali.',
    },
    {
      type: 'title',
      text: 'Cosa mostra lo storico',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ora di inizio: l\'orario in cui è iniziata la contrazione.',
        'Durata: ora di fine meno ora di inizio, approssimata in secondi.',
        'Intervallo: ora di inizio attuale meno l\'ora di inizio della contrazione precedente, mostrato in minuti.',
        'Andamento recente: se le contrazioni si stanno distanziando, restano irregolari o diventano più regolari.',
      ],
    },
    {
      type: 'title',
      text: 'Errori comuni di cronometraggio',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Fermare il timer al picco invece di quando la contrazione svanisce del tutto.',
        'Iniziare tardi perché la contrazione era lieve all\'inizio, facendo apparire la durata più breve.',
        'Contare solo le contrazioni più forti e ignorare quelle più piccole in mezzo.',
        'Dare per scontato che il 5-1-1 significhi sempre ricovero immediato. Di solito significa chiamare per ricevere indicazioni, non autodiagnosticare il travaglio attivo.',
        'Aspettare troppo nel secondo travaglio o successivi, dove la progressione può essere più rapida rispetto al primo parto.',
      ],
    },
    {
      type: 'title',
      text: 'Limiti clinici',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il cronometraggio delle contrazioni è solo una parte della valutazione del travaglio. La dilatazione cervicale, il benessere fetale, la gestione del dolore, la rottura delle membrane, l\'età gestazionale, i precedenti parti, lo stato dello streptococco di gruppo B, la distanza dall\'ospedale, i fattori di rischio della gravidanza e i sintomi materni possono influenzare ciò che l\'équipe raccomanda. Usa lo storico come registro chiaro da condividere con la tua ostetrica, ginecologo, doula o infermiera di triage.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Durata',
          definition: 'La lunghezza di una contrazione, misurata dal momento in cui inizia fino a quando finisce.',
        },
        {
          term: 'Frequenza',
          definition: 'Il tempo dall\'inizio di una contrazione all\'inizio della contrazione successiva.',
        },
        {
          term: 'Regola del 5-1-1',
          definition: 'Un pattern comune di cronometraggio del travaglio: contrazioni ogni 5 minuti circa, di circa 1 minuto di durata, che si mantengono per circa 1 ora.',
        },
        {
          term: 'Travaglio prodromico',
          definition: 'Un periodo di contrazioni reali che possono essere fastidiose e ricorrenti ma che non sempre progredisce costantemente verso il travaglio attivo.',
        },
        {
          term: 'Travaglio attivo',
          definition: 'Una fase del travaglio con contrazioni più forti e regolari e modifiche cervicali, confermata dalla valutazione clinica.',
        },
      ],
    },
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    safetyTitle: 'Usa con il tuo piano di nascita',
    safetyBody: 'Questo timer è per monitoraggio e informazione. Contatta l\'ostetrica, il ginecologo o l\'unità di maternità se hai dubbi, i sintomi ti preoccupano o ti sono state date istruzioni diverse.',
    idleStatus: 'Pronto a cronometrare la prossima contrazione',
    activeStatus: 'Contrazione in corso',
    accidentalTapStatus: 'Troppo breve',
    shortRecordLabel: 'Tocco breve o di prova',
    activeRowLabel: 'Attiva ora',
    startButton: 'Avvia contrazione',
    stopButton: 'Ferma contrazione',
    activeLabel: 'Contrazione attiva',
    breathingLabel: 'Respira lentamente',
    breatheIn: 'Inspira',
    breatheOut: 'Espira',
    currentDurationLabel: 'Durata attuale',
    lastIntervalLabel: 'Ultimo intervallo',
    contractionCountLabel: 'Registrate',
    patternStatusTitle: 'Stato del pattern',
    patternStatusIdle: 'Pronto a registrare',
    patternStatusTracking: 'Continua a registrare',
    patternStatusBuilding: 'Il pattern sta crescendo',
    patternStatusCall: 'Chiama l\'équipe ostetrica',
    patternStatusActiveBody: 'Hai iniziato a registrare. Servono ancora alcune contrazioni prima che il pattern sia significativo.',
    patternStatusBuildingBody: 'Le contrazioni recenti si stanno avvicinando o durando di più. Continua a cronometrare e preparati a chiamare se continuano.',
    patternStatusCallBody: 'Le contrazioni recenti si avvicinano al pattern 5-1-1. Contatta ora l\'ostetrica, il ginecologo o l\'unità di maternità per indicazioni personalizzate.',
    averageLastThreeLabel: 'Media ultime 3',
    averageLastSixLabel: 'Media ultime 6',
    regularityLabel: 'Regolarità',
    regularityNotEnough: 'Dati insufficienti',
    regularityIrregular: 'Irregolare',
    regularityVariable: 'Variabile',
    regularityRegular: 'Regolare',
    summaryTitle: 'Riepilogo per telefono',
    summaryEmpty: 'Registra almeno tre contrazioni per creare un riepilogo utile per la tua équipe ostetrica.',
    copySummaryButton: 'Copia riepilogo',
    copiedSummaryButton: 'Copiato',
    undoButton: 'Annulla ultima',
    sessionOverviewTitle: 'Panoramica sessione',
    sessionOverviewBody: 'Inizia a cronometrare quando comincia una contrazione. La contrazione attiva apparirà subito qui.',
    lastContractionLabel: 'Ultima contrazione',
    historyTitle: 'Storico contrazioni',
    emptyHistory: 'Nessuna contrazione ancora registrata.',
    startTimeHeader: 'Ora di inizio',
    durationHeader: 'Durata',
    intervalHeader: 'Intervallo',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Ripristina',
    alertTitle: 'Pattern 5-1-1 rilevato',
    alertBody: 'Le tue contrazioni recenti si avvicinano al comune pattern 5-1-1. Valuta di contattare ora l\'ostetrica o l\'unità di maternità per indicazioni personalizzate.',
    patternTitle: 'Cosa controlla l\'avviso',
    patternBody: 'Il pannello appare quando le contrazioni recenti sono distanziate 5 minuti o meno, durano almeno 60 secondi e mantengono quel pattern per circa 1 ora.',
  },
};

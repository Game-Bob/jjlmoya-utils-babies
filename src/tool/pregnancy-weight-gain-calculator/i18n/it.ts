import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Calcolatore dell\'Aumento di Peso in Gravidanza';
const description = 'Stima l\'intervallo di aumento di peso sano in gravidanza per settimana gestazionale utilizzando le linee guida IOM e ACOG sull\'aumento di peso prenatale.';

const faq = [
  {
    question: 'Quanto peso dovrei aumentare durante la gravidanza?',
    answer: 'Dipende dal BMI pre-gravidanza. Le linee guida IOM raccomandano 12,5-18 kg (28-40 lb) per il sottopeso, 11,5-16 kg (25-35 lb) per il normopeso, 7-11,5 kg (15-25 lb) per il sovrappeso e 5-9 kg (11-20 lb) per l\'obesità nelle gravidanze singole. Conferma sempre il tuo obiettivo personale con il tuo team di cura prenatale.',
  },
  {
    question: 'Una gravidanza gemellare utilizza le stesse linee guida sull\'aumento di peso?',
    answer: 'No. Le gravidanze gemellari hanno obiettivi più elevati in tutte le categorie di BMI. Per il normopeso, l\'intervallo raccomandato è 17-25 kg (37-54 lb). Per il sovrappeso, 14-23 kg (31-50 lb), e per l\'obesità, 11-19 kg (25-42 lb). Non esiste un intervallo IOM stabilito per le donne sottopeso con gravidanza gemellare; il team clinico individua il piano.',
  },
  {
    question: 'Perché l\'aumento atteso cambia poco nel primo trimestre?',
    answer: 'Le linee guida IOM prevedono un aumento totale molto modesto nel primo trimestre, circa 0,5-2 kg, perché il feto, la placenta e il liquido amniotico pesano ancora pochissimo. L\'aumento settimanale più costante, da 0,17 a 0,58 kg secondo il BMI, inizia nel secondo trimestre.',
  },
  {
    question: 'Sto perdendo peso nel primo trimestre a causa della nausea. Devo preoccuparmi?',
    answer: 'Una leggera perdita di peso nel primo trimestre è frequente per nausea e avversioni alimentari. Finché rimani idratata e non perdi più di qualche chilogrammo, di solito non è un motivo di allarme. Se il vomito è grave, persistente o causa disidratazione, contatta il tuo medico: potrebbe trattarsi di iperemesi gravidica che richiede trattamento.',
  },
  {
    question: 'Qual è il ritmo ideale di aumento di peso a settimana?',
    answer: 'Dopo la settimana 13, gli obiettivi settimanali sono: 0,44-0,58 kg per il sottopeso, 0,35-0,50 kg per il normopeso, 0,23-0,33 kg per il sovrappeso e 0,17-0,27 kg per l\'obesità. Sono medie: l\'aumento reale oscilla settimana per settimana in base alla ritenzione idrica, ai pasti e ad altri fattori.',
  },
  {
    question: 'Fare esercizio fisico per controllare l\'aumento di peso in gravidanza è sicuro?',
    answer: 'Sì, per la maggior parte delle donne con gravidanza non complicata. L\'ACOG raccomanda almeno 150 minuti a settimana di attività aerobica di intensità moderata. L\'esercizio favorisce un aumento sano, riduce il rischio di diabete gestazionale e migliora il sonno e l\'umore. Consulta sempre il tuo team prima di iniziare o continuare un\'attività intensa.',
  },
  {
    question: 'Quanto tempo occorre per perdere il peso della gravidanza dopo il parto?',
    answer: 'La maggior parte delle donne perde circa 4,5-5,5 kg immediatamente dopo il parto (bambino, placenta, liquido amniotico). Nella prima settimana avviene un ulteriore calo di liquidi. Tornare al peso pre-gravidanza richiede solitamente 6-12 mesi con dieta sana ed esercizio graduale. L\'allattamento può aiutare, consumando circa 300-500 kcal aggiuntive al giorno.',
  },
  {
    question: 'Questo calcolatore può diagnosticare un problema in gravidanza?',
    answer: 'No. Si tratta di una stima educativa basata su linee guida a livello di popolazione. Non può valutare la crescita fetale, la funzione placentare, la pressione arteriosa, la glicemia o qualsiasi sintomo medico. Qualsiasi variazione di peso inspiegabile, gonfiore, vomito persistente o preoccupazione deve essere sempre discussa con un ostetrico, un\'ostetrica o un clinico prenatale qualificato.',
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

const howTo = [
  {
    name: 'Inserisci le misure pre-gravidanza',
    text: 'Aggiungi altezza e peso pre-gravidanza così che lo strumento possa stimare il BMI pregravidico.',
  },
  {
    name: 'Aggiungi i dati attuali della gravidanza',
    text: 'Inserisci il peso attuale, la settimana gestazionale e se la gravidanza è singola o gemellare.',
  },
  {
    name: 'Esamina la curva',
    text: 'Confronta l\'aumento attuale con la fascia di aumento sano stimata per la settimana selezionata.',
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
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'calcolatore-aumento-peso-gravidanza',
  faqTitle: 'Domande frequenti',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Fatti chiave sull\'aumento di peso in gravidanza',
      items: [
        'L\'aumento di peso totale raccomandato dipende esclusivamente dal BMI pre-gravidanza, non da un valore unico per tutte.',
        'Le linee guida IOM vanno da 11 a 20 lb per l\'obesità fino a 28 a 40 lb per il sottopeso nelle gravidanze singole.',
        'L\'aumento di peso non è lineare: nel primo trimestre si attende solo 0,5-2 kg in totale, poi inizia un ritmo settimanale più costante.',
        'Le gravidanze gemellari hanno obiettivi più elevati in tutte le categorie di BMI.',
        'Questo calcolatore è uno strumento educativo. Discuti sempre i tuoi obiettivi personali con il tuo team di cura prenatale.',
      ],
    },
    {
      type: 'title',
      text: 'Calcolatore dell\'aumento di peso in gravidanza: comprendi la tua curva di crescita prenatale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aumentare il peso corretto in gravidanza è uno dei fattori più importanti per la salute materna e lo sviluppo fetale. Un aumento insufficiente aumenta il rischio di parto pretermine, basso peso alla nascita e restrizione della crescita intrauterina. Un aumento eccessivo è associato a diabete gestazionale, parto cesareo, ritenzione di peso post-partum e macrosomia. Questo calcolatore utilizza le linee guida stabilite dell\'<strong>IOM (Institute of Medicine)</strong> e dell\'<strong>ACOG (American College of Obstetricians and Gynecologists)</strong> per tracciare la tua curva personalizzata settimana per settimana.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 settimane', label: 'Durata di una gravidanza a termine' },
        { value: '4 categorie', label: 'Intervalli di aumento basati sul BMI (IOM)' },
        { value: '±0,5 kg/sett', label: 'Ritmo tipico nel 2° trimestre' },
      ],
    },
    {
      type: 'title',
      text: 'Come funziona il calcolatore',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Inserisci altezza e peso pre-gravidanza affinché lo strumento calcoli il tuo BMI pregravidico.',
        'Il tuo BMI viene classificato in una delle quattro categorie IOM: sottopeso, normopeso, sovrappeso o obesità.',
        'Ogni categoria corrisponde a un intervallo di aumento totale raccomandato e a un ritmo settimanale per il secondo e terzo trimestre.',
        'Il calcolatore accetta anche il peso attuale e la settimana gestazionale per mostrare dove ti trovi rispetto alla fascia stimata.',
        'Le gravidanze singole e gemellari usano obiettivi separati perché le esigenze fetali e placentari differiscono significativamente.',
      ],
    },
    {
      type: 'title',
      text: 'Raccomandazioni IOM per l\'aumento di peso secondo il BMI pregravidico',
      level: 3,
    },
    {
      type: 'table',
      headers: ['BMI pre-gravidanza', 'Categoria', 'Aumento totale gravidanza singola', 'Aumento totale gravidanza gemellare', 'Ritmo settimanale (sett. 14-40)'],
      rows: [
        ['< 18,5', 'Sottopeso', '12,5-18 kg / 28-40 lb', 'Nessun intervallo IOM stabilito', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normopeso', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Sovrappeso', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesità', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Importante:</strong> Questi sono intervalli di screening a livello di popolazione. Il tuo medico può stabilire un obiettivo personalizzato in base alla tua anamnesi nutrizionale, alle gravidanze precedenti, alle ecografie di crescita fetale o a condizioni mediche. Segui sempre le indicazioni individualizzate del tuo clinico.',
    },
    {
      type: 'title',
      text: 'Aumento di peso trimestre per trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Primo trimestre (settimane 1 to 13)',
          description: 'Si attende un aumento modesto. Molte donne aumentano pochissimo o perdono peso a causa della nausea.',
          points: [
            'Obiettivo IOM: circa 0,5-2 kg (1-4,4 lb) in totale',
            'Nausea e avversioni alimentari sono frequenti e possono limitare l\'assunzione',
            'Embrione e placenta pesano ancora pochissimo in questa fase',
            'Privilegia la qualità dell\'alimentazione rispetto alla quantità',
          ],
        },
        {
          title: 'Secondo trimestre (settimane 14 to 26)',
          description: 'Il periodo di aumento settimanale più costante. L\'appetito migliora solitamente dopo la remissione della nausea.',
          points: [
            'Ritmo settimanale: circa 0,23-0,58 kg secondo la categoria di BMI',
            'Il feto cresce rapidamente in lunghezza e sviluppo degli organi',
            'Il volume plasmatico aumenta, contribuendo al peso',
            'Il fabbisogno di ferro e calcio aumenta significativamente',
          ],
        },
        {
          title: 'Terzo trimestre (settimane 27 to 40)',
          description: 'L\'aumento di peso continua a un ritmo simile al secondo trimestre e può rallentare vicino al termine.',
          points: [
            'Il deposito di grasso fetale aumenta sostanzialmente dalla settimana 28',
            'Il volume del liquido amniotico raggiunge il picco intorno alle settimane 34-36',
            'Gonfiori e ritenzione idrica possono temporaneamente alterare le letture',
            'Alcune donne aumentano poco nelle ultime 1-2 settimane prima del parto',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'A cosa è dovuto questo aumento di peso?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Componente', 'Peso approssimativo a termine'],
      rows: [
        ['Bambino', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Liquido amniotico', '0,8 kg / 1,8 lb'],
        ['Utero (crescita)', '0,9 kg / 2 lb'],
        ['Tessuto mammario', '0,5 kg / 1,1 lb'],
        ['Aumento del volume ematico', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Liquido extracellulare', '1,5 kg / 3,3 lb'],
        ['Riserve di grasso e proteine materne', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Come mostra questa ripartizione, la maggior parte del peso acquisito in una gravidanza sana è tessuto funzionale - liquidi, sangue, feto, placenta e utero - non semplice grasso. Comprendere questo aiuta a capire perché un aumento adeguato è necessario anche per le donne in sovrappeso prima della gravidanza.',
    },
    {
      type: 'title',
      text: 'Consigli nutrizionali per sostenere un aumento di peso sano',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Aggiungi circa 340 kcal/giorno nel secondo trimestre e 450 kcal/giorno nel terzo rispetto al fabbisogno pre-gravidanza.',
        'Privilegia le proteine: punta ad almeno 70-80 g al giorno per sostenere la crescita del tessuto fetale e l\'espansione del volume ematico materno.',
        'Includi alimenti ricchi di ferro (carne magra, lenticchie, cereali arricchiti) per prevenire l\'anemia, più frequente in gravidanza.',
        'Il fabbisogno di calcio aumenta a 1.000 mg/giorno: latticini, latti vegetali arricchiti, mandorle e verdure a foglia verde sono buone fonti.',
        'Gli acidi grassi omega-3 del pesce grasso (2 porzioni a settimana) o integratori di alghe sostengono lo sviluppo cerebrale fetale.',
        'L\'acido folico (400-600 mcg/giorno) riduce il rischio di difetti del tubo neurale, soprattutto nel primo trimestre.',
        'Mantieniti ben idratata: punta a circa 2-3 litri di liquidi al giorno, di più in climi caldi o durante l\'attività fisica.',
        'Limita cibi ultra-processati, zuccheri aggiunti e grassi trans, che contribuiscono a un aumento gestazionale eccessivo.',
      ],
    },
    {
      type: 'title',
      text: 'Attività fisica e gestione del peso in gravidanza',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'ACOG raccomanda almeno <strong>150 minuti a settimana</strong> di attività aerobica di intensità moderata per le donne con gravidanza non complicata. L\'esercizio regolare favorisce un aumento di peso sano, riduce il rischio di diabete gestazionale e preeclampsia, migliora il sonno e allevia il mal di schiena. Camminare, nuotare, lo yoga prenatale e la bicicletta da camera sono ben tollerati per tutta la gravidanza. Consulta sempre il tuo team prima di iniziare o continuare un\'attività intensa.',
    },
    {
      type: 'title',
      text: 'Segnali d\'allarme legati alle variazioni di peso in gravidanza',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Un aumento improvviso di oltre 1 kg in una settimana, soprattutto dopo la settimana 20, può indicare ritenzione idrica correlata alla preeclampsia.',
        'Un gonfiore rapido di mani, viso o caviglie con mal di testa o disturbi visivi richiede attenzione medica immediata.',
        'Una perdita di peso persistente oltre il primo trimestre, o l\'incapacità di trattenere cibo o liquidi, può indicare iperemesi gravidica.',
        'Un aumento di peso molto lento o stagnante nonostante un\'assunzione adeguata può richiedere un\'ecografia di crescita fetale per valutare la restrizione della crescita intrauterina.',
        'Qualsiasi variazione di peso inspiegabile deve essere discussa con un ostetrico o un\'ostetrica piuttosto che gestita in autonomia.',
      ],
    },
    {
      type: 'title',
      text: 'Gravidanza singola vs. gemellare: differenze chiave',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gravidanza singola',
          description: 'Un feto, una placenta. Lo scenario più comune con obiettivi IOM ben definiti.',
          points: [
            'Aumento totale: da 5 a 18 kg secondo il BMI pre-gravidanza',
            'Ritmo settimanale costante di 0,17-0,58 kg dalla settimana 14',
            'Surplus calorico minore necessario (340-450 kcal/giorno)',
            'Tasso di parto pretermine: circa il 10%',
          ],
        },
        {
          title: 'Gravidanza gemellare',
          description: 'Due feti, richieste generalmente più elevate su tutti i fronti. Gli obiettivi sono maggiori in tutte le categorie di BMI.',
          points: [
            'Aumento totale: da 11 a 25 kg secondo il BMI pre-gravidanza',
            'Ritmo settimanale più elevato soprattutto nel secondo trimestre',
            'Maggiori fabbisogni calorici e proteici',
            'I team clinici individualizzano gli obiettivi più da vicino',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Aspetti spesso fraintesi dell\'aumento di peso prenatale',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'L\'aumento di peso non equivale ad accumulo di grasso. La maggior parte è sangue, liquidi, placenta e bambino, non grasso immagazzinato.',
        'Mangiare per due non significa raddoppiare l\'assunzione. Il fabbisogno calorico extra nel secondo trimestre equivale circa a un bicchiere di latte e una banana.',
        'Essere al di sopra dell\'intervallo raccomandato non implica automaticamente che tu o il tuo bambino siate a rischio: gli intervalli sono linee guida statistiche, non soglie assolute.',
        'Le donne con obesità devono comunque aumentare di peso in gravidanza. L\'IOM raccomanda ancora un aumento netto di 5-9 kg.',
        'La bilancia non è la misura più importante di una gravidanza sana: la crescita fetale, la pressione arteriosa, la glicemia e le valutazioni cliniche contano di più.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Indice di Massa Corporea)',
          definition: 'Rapporto tra peso e quadrato dell\'altezza utilizzato per classificare le categorie di peso corporeo. In ambito prenatale, il BMI pre-gravidanza determina l\'intervallo di aumento di peso adeguato.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Oggi la National Academy of Medicine. Ha pubblicato nel 2009 le linee guida di riferimento sull\'aumento di peso gestazionale, ampiamente utilizzate dai clinici di tutto il mondo.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Il principale organismo professionale statunitense per le cure ostetrico-ginecologiche. Supporta le linee guida IOM sull\'aumento di peso e fornisce ulteriori indicazioni cliniche.',
        },
        {
          term: 'Età gestazionale',
          definition: 'L\'età della gravidanza misurata in settimane dal primo giorno dell\'ultima mestruazione. Una gravidanza a termine dura solitamente 39-40 settimane.',
        },
        {
          term: 'Macrosomia',
          definition: 'Condizione in cui il bambino cresce più del previsto, generalmente definita come peso alla nascita superiore a 4 kg. Associata a un aumento gestazionale eccessivo e al diabete gestazionale.',
        },
        {
          term: 'Restrizione della crescita intrauterina (IUGR)',
          definition: 'Condizione in cui il feto cresce più lentamente del previsto. Può essere correlata a un aumento di peso insufficiente, a problemi placentari o ad altri fattori di salute materna.',
        },
        {
          term: 'Preeclampsia',
          definition: 'Complicanza della gravidanza caratterizzata da ipertensione arteriosa e segni di danno ad altri organi. Un aumento di peso rapido e improvviso per ritenzione idrica è un possibile segnale d\'allarme.',
        },
        {
          term: 'Iperemesi gravidica',
          definition: 'Nausea e vomito gravi e persistenti in gravidanza, oltre la normale nausea mattutina, che possono portare a perdita di peso e disidratazione richiedendo trattamento medico.',
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
    educationalWarningTitle: 'Avvertenza educativa',
    educationalWarningBody: 'Questo calcolatore è destinato esclusivamente all\'educazione prenatale. Non diagnostica la salute materna o fetale, non sostituisce il consiglio medico personalizzato e non tiene conto di sintomi, ritenzione idrica, rischio di diabete, crescita fetale, anamnesi nutrizionale o obiettivi indicati dal clinico.',
    inputsTitle: 'Profilo della gravidanza',
    unitsLabel: 'Unità',
    metricLabel: 'Metrico',
    imperialLabel: 'Imperiale',
    heightCmLabel: 'Altezza (cm)',
    heightFtLabel: 'Altezza (ft)',
    heightInLabel: 'Altezza (in)',
    preWeightKgLabel: 'Peso pre-gravidanza (kg)',
    currentWeightKgLabel: 'Peso attuale (kg)',
    preWeightLbLabel: 'Peso pre-gravidanza (lb)',
    currentWeightLbLabel: 'Peso attuale (lb)',
    weekLabel: 'Settimana gestazionale',
    pregnancyTypeLabel: 'Tipo di gravidanza',
    singletonLabel: 'Singola',
    twinsLabel: 'Gemellare',
    bmiCardTitle: 'BMI pre-gravidanza',
    recommendationTitle: 'Aumento raccomandato',
    currentGainTitle: 'Aumento attuale',
    chartTitle: 'Curva di aumento di peso prenatale',
    weekShortLabel: 'sett',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Intervallo totale',
    weeklyRangeLabel: 'Ritmo settimanale dopo la settimana 13',
    firstTrimesterLabel: 'Primo trimestre: aumento totale di circa 0,5-2 kg',
    statusBelow: 'Sotto la fascia stimata',
    statusWithin: 'Nella fascia stimata',
    statusAbove: 'Sopra la fascia stimata',
    statusBelowBody: 'Il tuo aumento attuale è sotto la fascia stimata per questa settimana. Chiedi al tuo clinico prenatale se è il caso di rivedere alimentazione, nausea, crescita fetale o datazione.',
    statusWithinBody: 'Il tuo aumento attuale rientra nella fascia stimata per questa settimana. Continua a seguire il tuo piano prenatale personalizzato.',
    statusAboveBody: 'Il tuo aumento attuale è sopra la fascia stimata per questa settimana. Valuta l\'andamento con il tuo clinico, specialmente se l\'aumento è improvviso o accompagnato da gonfiore o sintomi.',
    categoryUnderweight: 'Sottopeso',
    categoryNormal: 'Normopeso',
    categoryOverweight: 'Sovrappeso',
    categoryObesity: 'Obesità',
    totalGainSuffix: 'aumento totale',
    perWeekSuffix: 'a settimana',
    chartLowLabel: 'Fascia inferiore',
    chartHighLabel: 'Fascia superiore',
    chartCurrentLabel: 'Attuale',
  },
};

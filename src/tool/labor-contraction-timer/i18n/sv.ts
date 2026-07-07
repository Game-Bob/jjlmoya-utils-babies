import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'F\u00f6rlossningstimer';
export const description = 'F\u00f6lj v\u00e4rkarnas varaktighet och frekvens med en stor touchknapp, guidad andning, historik och 5-1-1-m\u00f6nstervarning.';

export const faq = [
  {
    question: 'Vad \u00e4r 5-1-1-regeln f\u00f6r v\u00e4rkar?',
    answer: '5-1-1-regeln brukar betyda att v\u00e4rkarna kommer ungef\u00e4r var 5:e minut, varar ungef\u00e4r 1 minut och p\u00e5g\u00e5r i ungef\u00e4r 1 timme. M\u00e5nga f\u00f6rlossningsteam anv\u00e4nder det som en praktisk signal f\u00f6r att ringa och f\u00e5 r\u00e5d, men din egen plan kan se annorlunda ut.',
  },
  {
    question: 'N\u00e4r ska jag kontakta min barnmorska eller sjukhuset?',
    answer: 'Kontakta ditt f\u00f6rlossningsteam n\u00e4r v\u00e4rkarna blir regelbundna, intensiva eller motsvarar de tidsanvisningar du f\u00e5tt. Ring akut vid riklig bl\u00f6dning, minskade fosterr\u00f6relser, feber, sv\u00e5r sm\u00e4rta, vattenavg\u00e5ng med oro eller om du k\u00e4nner att n\u00e5got \u00e4r fel.',
  },
  {
    question: 'Diagnostiserar den h\u00e4r timern aktiv f\u00f6rlossning?',
    answer: 'Nej. Den registrerar tider och markerar ett vanligt v\u00e4rkm\u00f6nster. Cervikala f\u00f6r\u00e4ndringar, fosterl\u00e4ge, membranstatus, symtom och din kliniska historik kr\u00e4ver bed\u00f6mning av en kvalificerad v\u00e5rdgivare.',
  },
  {
    question: 'Hur ber\u00e4knas v\u00e4rkfrekvensen?',
    answer: 'Frekvensen ber\u00e4knas fr\u00e5n b\u00f6rjan av en v\u00e4rk till b\u00f6rjan av f\u00f6reg\u00e5ende v\u00e4rk. Varaktigheten ber\u00e4knas fr\u00e5n det att du trycker p\u00e5 start tills du trycker p\u00e5 stopp.',
  },
  {
    question: 'Kan jag anv\u00e4nda den under prodromala v\u00e4rkar?',
    answer: 'Ja. Den kan hj\u00e4lpa dig att se om v\u00e4rkarna blir mer regelbundna eller klingar av. Om v\u00e4rkarna forts\u00e4tter att vara oregelbundna, f\u00f6r\u00e4ndras vid vila eller v\u00e4tskeintag, eller inte \u00f6kar i intensitet, kan de fortfarande vara prodromala, men ditt v\u00e5rdteam kan v\u00e4gleda dig.',
  },
  {
    question: 'Varf\u00f6r ing\u00e5r guidad andning?',
    answer: 'L\u00e5ngsam, j\u00e4mn andning kan bidra till att minska sp\u00e4nningar, hj\u00e4lpa dig att fokusera och st\u00f6dja hanteringen under varje v\u00e4rk. Animationen \u00e4r endast ett komforthj\u00e4lpmedel och ers\u00e4tter inte f\u00f6rlossningsst\u00f6d.',
  },
  {
    question: 'Ska jag v\u00e4nta p\u00e5 5-1-1 om det inte \u00e4r mitt f\u00f6rsta barn?',
    answer: 'Inte alltid. F\u00f6rlossningen kan g\u00e5 snabbare efter en tidigare vaginal f\u00f6rlossning. F\u00f6lj planen fr\u00e5n din barnmorska eller obstetriker, s\u00e4rskilt vid en riskgraviditet, om du bor l\u00e5ngt fr\u00e5n sjukhuset eller har haft snabba f\u00f6rlossningar tidigare.',
  },
  {
    question: 'Sparas min v\u00e4rkhistorik?',
    answer: 'Timern sparar aktuella data i din webbl\u00e4sare s\u00e5 att du kan uppdatera sidan utan att f\u00f6rlora sessionen. Anv\u00e4nd \u00e5terst\u00e4llningsknappen f\u00f6r att rensa den lokala historiken.',
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
    name: 'Starta tidtagningen',
    text: 'Tryck p\u00e5 huvudknappen n\u00e4r en v\u00e4rk b\u00f6rjar.',
  },
  {
    name: 'Anv\u00e4nd andningsguiden',
    text: 'F\u00f6lj den expanderande och sammandragande cirkeln medan v\u00e4rken \u00e4r aktiv.',
  },
  {
    name: 'Stoppa tidtagningen',
    text: 'Tryck p\u00e5 knappen igen n\u00e4r v\u00e4rken slutar s\u00e5 att varaktigheten och intervallet registreras.',
  },
  {
    name: 'Granska m\u00f6nstret',
    text: 'Kontrollera historiken och varningspanelen f\u00f6r att avg\u00f6ra om du ska kontakta ditt f\u00f6rlossningsteam.',
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
  slug: 'forlossningstimer',
  faqTitle: 'Vanliga fr\u00e5gor',
  bibliographyTitle: 'Referenser',
  seo: [
    {
      type: 'summary',
      title: 'Viktiga fakta om att m\u00e4ta v\u00e4rkar',
      items: [
        'Varaktigheten m\u00e4ts fr\u00e5n b\u00f6rjan av en v\u00e4rk till dess slut.',
        'Frekvensen m\u00e4ts fr\u00e5n b\u00f6rjan av en v\u00e4rk till b\u00f6rjan av n\u00e4sta.',
        '5-1-1-m\u00f6nstret inneb\u00e4r ungef\u00e4r 5 minuters mellanrum, 1 minuts varaktighet, under 1 timme.',
        'Att m\u00e4ta v\u00e4rkar st\u00f6der beslutsfattandet men kan inte p\u00e5 egen hand bekr\u00e4fta cervikal dilatation eller aktiv f\u00f6rlossning.',
        'F\u00f6lj alltid anvisningarna fr\u00e5n din egen barnmorska, obstetriker eller f\u00f6rlossningsavdelning.',
      ],
    },
    {
      type: 'title',
      text: 'F\u00f6rlossningstimer: F\u00f6lj Varaktighet, Frekvens och 5-1-1-M\u00f6nster',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En f\u00f6rlossningstimer hj\u00e4lper familjer att omvandla en stressig, sv\u00e5rbed\u00f6md stund till en tydlig journal. Under slutet av graviditeten \u00e4r det vanligt att undra om v\u00e4rkarna fortfarande \u00e4r oregelbundna sammandragningar, prodromala v\u00e4rkar, tidiga v\u00e4rkar eller ett m\u00f6nster som f\u00f6rtj\u00e4nar ett samtal till f\u00f6rlossningsavdelningen. Genom att trycka p\u00e5 start n\u00e4r en v\u00e4rk b\u00f6rjar och stopp n\u00e4r den slutar ber\u00e4knar detta verktyg <strong>varaktigheten</strong> i sekunder och <strong>frekvensen</strong> i minuter fr\u00e5n b\u00f6rjan av en v\u00e4rk till b\u00f6rjan av n\u00e4sta.',
    },
    {
      type: 'paragraph',
      html: 'M\u00e5let \u00e4r inte att diagnostisera f\u00f6rlossningen. M\u00e5let \u00e4r att hj\u00e4lpa dig att beskriva vad som h\u00e4nder i konkreta termer: hur l\u00e4nge varje v\u00e4rk varar, hur t\u00e4ta de \u00e4r, om m\u00f6nstret blir starkare och om det har varit tillr\u00e4ckligt konsekvent f\u00f6r att matcha vanliga riktlinjer som 5-1-1-regeln.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Vanlig frekvenssignal' },
        { value: '60 s', label: 'Typisk 5-1-1-varaktighet' },
        { value: '1 timme', label: 'F\u00f6nster f\u00f6r m\u00f6nsterstabilitet' },
      ],
    },
    {
      type: 'title',
      text: 'Hur du tolkar 5-1-1-varningen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '5-1-1-regeln \u00e4r en mycket anv\u00e4nd tumregel: v\u00e4rkarna kommer ungef\u00e4r var 5:e minut, varar ungef\u00e4r 1 minut och p\u00e5g\u00e5r i ungef\u00e4r 1 timme. M\u00e5nga f\u00f6rlossningsteam anv\u00e4nder det m\u00f6nstret som en praktisk signal f\u00f6r att ringa och f\u00e5 individuell r\u00e5dgivning, s\u00e4rskilt vid en f\u00f6rsta f\u00f6rlossning. Denna timer markerar m\u00f6nstret n\u00e4r de senaste v\u00e4rkarna kommer med 5 minuters mellanrum eller mindre, varar minst 60 sekunder och har uppr\u00e4tth\u00e5llits under sessionen.',
    },
    {
      type: 'table',
      headers: ['M\u00f6nster du ser', 'Vad det kan tyda p\u00e5', 'Anv\u00e4ndbart n\u00e4sta steg'],
      rows: [
        ['Oregelbunden tid, varierande l\u00e4ngd', 'Prodromala v\u00e4rkar eller tidiga v\u00e4rkar \u00e4r m\u00f6jliga', 'Vila, drick vatten, byt st\u00e4llning och forts\u00e4tt observera om du inte har varningssymtom'],
        ['N\u00e4rmar sig varandra men fortfarande under 60 sekunder', 'F\u00f6rlossningen kan vara p\u00e5 g\u00e5ng men motsvarar \u00e4nnu inte 5-1-1', 'Forts\u00e4tt m\u00e4ta och f\u00f6lj din egen f\u00f6rlossningsplan'],
        ['Ungef\u00e4r 5 min mellanrum, 60 s varaktighet, i ungef\u00e4r 1 timme', 'Vanligt 5-1-1-uppringningsm\u00f6nster', 'Kontakta din barnmorska, obstetriker eller f\u00f6rlossningsavdelning f\u00f6r personlig r\u00e5dgivning'],
        ['Pl\u00f6tsligt intensiva v\u00e4rkar, tryckk\u00e4nsla eller krystningsbehov', 'F\u00f6rlossningen kan g\u00e5 snabbt', 'Ring omedelbart, s\u00e4rskilt om detta inte \u00e4r ditt f\u00f6rsta barn'],
      ],
    },
    {
      type: 'title',
      text: 'Hur man tidtar v\u00e4rkar korrekt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tryck p\u00e5 start i b\u00f6rjan av den sp\u00e4nnande, krampande eller v\u00e5gliknande k\u00e4nslan.',
        'Tryck p\u00e5 stopp n\u00e4r v\u00e4rken tydligt avtar och du kan slappna av igen.',
        'M\u00e4t inte frekvens fr\u00e5n slutet av en v\u00e4rk till b\u00f6rjan av n\u00e4sta. Kliniskt r\u00e4knas frekvensen vanligtvis fr\u00e5n b\u00f6rjan till b\u00f6rjan.',
        'Registrera flera v\u00e4rkar innan du tolkar m\u00f6nstret, eftersom en isolerad v\u00e4rk kan vara missvisande.',
        'Anv\u00e4nd f\u00f6rst anvisningarna fr\u00e5n ditt f\u00f6rlossningsteam om de har gett dig en annan tr\u00f6skel \u00e4n 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Prodromala v\u00e4rkar och aktiv f\u00f6rlossning: j\u00e4mf\u00f6relse av m\u00f6nster',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ofta prodromala eller tidiga v\u00e4rkar',
          description: 'V\u00e4rkarna kan vara obehagliga och verkliga, men m\u00f6nstret r\u00f6r sig \u00e4nnu inte stadigt mot f\u00f6rlossningen.',
          points: [
            'Intervallerna hoppar runt ist\u00e4llet f\u00f6r att f\u00f6rkortas konsekvent',
            'V\u00e4rkarna kan avta med vila, v\u00e4tskeintag, ett bad eller l\u00e4ges\u00e4ndringar',
            'Intensiteten kan vara likartad ist\u00e4llet f\u00f6r att \u00f6ka \u00f6ver tid',
            'Livmoderhalsen kan f\u00f6r\u00e4ndras l\u00e5ngsamt eller \u00e4nnu inte mycket, vilket endast en l\u00e4kare kan bed\u00f6ma',
          ],
        },
        {
          title: 'Mer talande f\u00f6r aktiv f\u00f6rlossning',
          description: 'M\u00f6nstret blir mer regelbundet, sv\u00e5rare att prata igenom och allt starkare.',
          points: [
            'V\u00e4rkarna kommer n\u00e4rmare varandra \u00f6ver flera registreringar',
            'Varje v\u00e4rk varar ungef\u00e4r 45 till 70 sekunder eller l\u00e4ngre',
            'Du beh\u00f6ver pausa, andas eller fokusera under toppen',
            'M\u00f6nstret forts\u00e4tter \u00e4ven efter vila, v\u00e4tskeintag eller l\u00e4ges\u00e4ndring',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'N\u00e4r du inte ska v\u00e4nta p\u00e5 timern',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>S\u00e4kerhetsanm\u00e4rkning:</strong> V\u00e4nta inte p\u00e5 en timervarning om du har riklig bl\u00f6dning, minskade fosterr\u00f6relser, sv\u00e5r huvudv\u00e4rk, feber, gr\u00f6nt eller illaluktande fostervatten, intensiv konstant sm\u00e4rta, symtom p\u00e5 preeklampsi eller andra akuta problem. Ring ditt f\u00f6rlossningsteam eller larmtj\u00e4nsten enligt dina lokala anvisningar.',
    },
    {
      type: 'title',
      text: 'Vad historiken visar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Starttid: klocktiden d\u00e5 v\u00e4rken b\u00f6rjade.',
        'Varaktighet: sluttid minus starttid, avrundat till sekunder.',
        'Intervall: aktuell starttid minus den f\u00f6reg\u00e5ende v\u00e4rkens starttid, visas i minuter.',
        'Senaste trend: om v\u00e4rkarna glesar ut, f\u00f6rblir oregelbundna eller blir mer regelbundna.',
      ],
    },
    {
      type: 'title',
      text: 'Vanliga misstag vid tidtagning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Stoppa timern vid toppen ist\u00e4llet f\u00f6r n\u00e4r v\u00e4rken helt klingar av.',
        'Starta f\u00f6r sent eftersom v\u00e4rken var mild i b\u00f6rjan, vilket f\u00e5r varaktigheten att verka kortare.',
        'Att bara r\u00e4kna de starkaste v\u00e4rkarna och ignorera de mindre d\u00e4remellan.',
        'Anta att 5-1-1 alltid betyder omedelbar sjukhusinl\u00e4ggning. Det betyder oftast ring f\u00f6r r\u00e5dgivning, inte sj\u00e4lvdiagnostisera aktiv f\u00f6rlossning.',
        'V\u00e4nta f\u00f6r l\u00e4nge vid en andra eller senare f\u00f6rlossning, d\u00e4r f\u00f6rloppet kan vara snabbare \u00e4n vid den f\u00f6rsta f\u00f6rlossningen.',
      ],
    },
    {
      type: 'title',
      text: 'Kliniska begr\u00e4nsningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att m\u00e4ta v\u00e4rkar \u00e4r bara en del av f\u00f6rlossningsbed\u00f6mningen. Cervikal dilatation, fosterh\u00e4lsa, sm\u00e4rthantering, hinneruptur, gestations\u00e5lder, tidigare f\u00f6rlossningshistorik, grupp B-streptokockstatus, avst\u00e5nd till sjukhuset, graviditetsriskfaktorer och maternella symtom kan alla f\u00f6r\u00e4ndra vad ditt team rekommenderar. Anv\u00e4nd historiken som en tydlig journal att dela med din barnmorska, obstetriker, doula eller triagesjuksk\u00f6terska.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Varaktighet',
          definition: 'L\u00e4ngden p\u00e5 en v\u00e4rk, m\u00e4tt fr\u00e5n det \u00f6gonblick den b\u00f6rjar tills den slutar.',
        },
        {
          term: 'Frekvens',
          definition: 'Tiden fr\u00e5n b\u00f6rjan av en v\u00e4rk till b\u00f6rjan av n\u00e4sta v\u00e4rk.',
        },
        {
          term: '5-1-1-regeln',
          definition: 'Ett vanligt v\u00e4rkm\u00f6nster: v\u00e4rkar ungef\u00e4r var 5:e minut, som varar ungef\u00e4r 1 minut och p\u00e5g\u00e5r i ungef\u00e4r 1 timme.',
        },
        {
          term: 'Prodromala v\u00e4rkar',
          definition: 'En period av verkliga v\u00e4rkar som kan vara obehagliga och \u00e5terkommande men som inte alltid \u00f6verg\u00e5r stadigt i aktiv f\u00f6rlossning.',
        },
        {
          term: 'Aktiv f\u00f6rlossning',
          definition: 'En fas av f\u00f6rlossningen med starkare, mer regelbundna v\u00e4rkar och cervikala f\u00f6r\u00e4ndringar, bekr\u00e4ftad genom klinisk bed\u00f6mning.',
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
    safetyTitle: 'Anv\u00e4nd med din f\u00f6rlossningsplan',
    safetyBody: 'Denna timer \u00e4r avsedd f\u00f6r sp\u00e5rning och information. Kontakta din barnmorska, obstetriker eller f\u00f6rlossningsavdelning om du \u00e4r os\u00e4ker, symtomen oroar dig eller du har f\u00e5tt andra instruktioner.',
    idleStatus: 'Redo att tidta n\u00e4sta v\u00e4rk',
    activeStatus: 'V\u00e4rk p\u00e5g\u00e5r',
    accidentalTapStatus: 'F\u00f6r kort',
    shortRecordLabel: 'Kort eller testtryckning',
    activeRowLabel: 'Aktiv nu',
    startButton: 'Starta v\u00e4rk',
    stopButton: 'Stoppa v\u00e4rk',
    activeLabel: 'Aktiv v\u00e4rk',
    breathingLabel: 'Andas l\u00e5ngsamt',
    breatheIn: 'Andas in',
    breatheOut: 'Andas ut',
    currentDurationLabel: 'Aktuell varaktighet',
    lastIntervalLabel: 'Senaste intervall',
    contractionCountLabel: 'Registrerade',
    patternStatusTitle: 'M\u00f6nsterstatus',
    patternStatusIdle: 'Redo att registrera',
    patternStatusTracking: 'Forts\u00e4tt registrera',
    patternStatusBuilding: 'M\u00f6nstret byggs upp',
    patternStatusCall: 'Ring ditt f\u00f6rlossningsteam',
    patternStatusActiveBody: 'Du har b\u00f6rjat registrera. N\u00e5gra fler v\u00e4rkar beh\u00f6vs innan m\u00f6nstret blir meningsfullt.',
    patternStatusBuildingBody: 'De senaste v\u00e4rkarna kommer n\u00e4rmare eller varar l\u00e4ngre. Forts\u00e4tt m\u00e4ta och var beredd att ringa om de forts\u00e4tter.',
    patternStatusCallBody: 'De senaste v\u00e4rkarna n\u00e4rmar sig 5-1-1-m\u00f6nstret. Kontakta nu din barnmorska, obstetriker eller f\u00f6rlossningsavdelning f\u00f6r personlig r\u00e5dgivning.',
    averageLastThreeLabel: 'Genomsnitt senaste 3',
    averageLastSixLabel: 'Genomsnitt senaste 6',
    regularityLabel: 'Regelbundenhet',
    regularityNotEnough: 'Otillr\u00e4ckligt med data',
    regularityIrregular: 'Oregelbunden',
    regularityVariable: 'Varierande',
    regularityRegular: 'Regelbunden',
    summaryTitle: 'Sammanfattning f\u00f6r telefon',
    summaryEmpty: 'Registrera minst tre v\u00e4rkar f\u00f6r att bygga en anv\u00e4ndbar sammanfattning f\u00f6r ditt f\u00f6rlossningsteam.',
    copySummaryButton: 'Kopiera sammanfattning',
    copiedSummaryButton: 'Kopierad',
    undoButton: '\u00c5ngra senaste',
    sessionOverviewTitle: 'Sessions\u00f6versikt',
    sessionOverviewBody: 'B\u00f6rja tidta n\u00e4r en v\u00e4rk b\u00f6rjar. Den aktiva v\u00e4rken visas h\u00e4r omedelbart.',
    lastContractionLabel: 'Senaste v\u00e4rken',
    historyTitle: 'V\u00e4rkhistorik',
    emptyHistory: 'Inga v\u00e4rkar registrerade \u00e4n.',
    startTimeHeader: 'Starttid',
    durationHeader: 'Varaktighet',
    intervalHeader: 'Intervall',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: '\u00c5terst\u00e4ll',
    alertTitle: '5-1-1-m\u00f6nster uppt\u00e4ckt',
    alertBody: 'Dina senaste v\u00e4rkar n\u00e4rmar sig det vanliga 5-1-1-m\u00f6nstret. \u00d6verv\u00e4g att kontakta din barnmorska eller f\u00f6rlossningsavdelning nu f\u00f6r personlig r\u00e5dgivning.',
    patternTitle: 'Vad varningen kontrollerar',
    patternBody: 'Panelen visas n\u00e4r de senaste v\u00e4rkarna kommer med 5 minuters mellanrum eller mindre, varar minst 60 sekunder och bibeh\u00e5ller det m\u00f6nstret i ungef\u00e4r 1 timme.',
  },
};

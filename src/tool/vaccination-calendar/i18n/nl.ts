import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'vaccinatieschema-spanje-babys';
const title = 'Vaccinatieschema in Spanje';
const description = 'Bereken de exacte vaccinatiedata voor je baby volgens het AEP 2026-schema.';
const faq = [
  {
    question: 'Wat is het AEP 2026 vaccinatieschema?',
    answer: 'Het is het vaccinatieschema aanbevolen door de Spaanse Vereniging voor Pediatrie voor het jaar 2026. Het bevat alle systematische en optionele vaccins voor baby\'s en kinderen vanaf de geboorte tot 14 jaar.',
  },
  {
    question: 'Is het verplicht om mijn baby volgens dit schema te vaccineren?',
    answer: 'In Spanje is vaccinatie wettelijk niet verplicht, maar wel sterk aanbevolen. De vaccins uit het systematische schema zijn gratis en worden toegediend in openbare gezondheidscentra.',
  },
  {
    question: 'Wat gebeurt er als we een dosis overslaan?',
    answer: 'Als een dosis vertraagd is, is het niet nodig om opnieuw te beginnen. Je kinderarts zal je vertellen hoe je het schema kunt hervatten waar je gebleven bent. Belangrijk is om het schema zo snel mogelijk te voltooien.',
  },
  {
    question: 'Kan ik meerdere vaccins op dezelfde dag laten toedienen?',
    answer: 'Ja, het is gebruikelijk en veilig om meerdere vaccins tijdens hetzelfde bezoek toe te dienen. Combinatievaccins zoals de hexavalente beschermen al tegen zes ziekten in één enkele injectie.',
  },
  {
    question: 'Zijn vaccins veilig voor premature baby\'s?',
    answer: 'Premature baby\'s moeten worden gevaccineerd volgens hun chronologische leeftijd (vanaf de geboorte), niet de gecorrigeerde leeftijd, tenzij de neonatoloog anders aangeeft. Ze hebben prioriteit omdat ze kwetsbaarder zijn.',
  },
];
const howTo = [
  {
    name: 'Voer de geboortedatum in',
    text: 'Voer de dag, maand en het jaar van de geboorte van je baby in de betreffende velden in.',
  },
  {
    name: 'Bekijk de volgende afspraak',
    text: 'De calculator laat je automatisch zien wanneer de volgende vaccinatie is en welke vaccins daarbij horen.',
  },
  {
    name: 'Bekijk het volledige schema',
    text: 'Open de secties voor voorbijgaande en toekomstige afspraken om het hele vaccinatieschema te bekijken.',
  },
  {
    name: 'Exporteer de herinneringen',
    text: 'Klik op de knop om een .ics-bestand te downloaden met alle toekomstige afspraken en voeg deze toe aan de kalender van je telefoon.',
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
  inLanguage: 'nl',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Geboortedatum van de baby',
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'JJJJ',
    emptyMsg: 'Voer de dag, maand en het jaar van de geboorte van je baby in om het vaccinatieschema te bekijken.',
    invalidMsg: 'De ingevoerde datum is niet geldig.',
    futureMsg: 'Een baby kan niet in de toekomst geboren zijn.',
    labelNextAppointment: 'Volgende berekende afspraak',
    btnAddReminder: 'Herinnering toevoegen aan mobiel',
    btnToday: 'Het is vandaag! Vergeet het vaccinatieboekje niet',
    labelPassed: 'Vorige afspraken',
    labelFuture: 'Toekomstig schema',
    labelStatusOk: 'OK',
    labelStatusPending: 'WACHT',
    labelSource: 'Bron: AEP 2026',
    labelShare: 'Deel deze data',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties',
    labelMonth: 'maand',
    labelMonths: 'maanden',
    labelYear: 'jaar',
    labelYears: 'jaar',
    labelDay: 'dag',
    labelDays: 'dagen',
    labelAnd: 'en',
    labelVaccination: 'Vaccinatie',
    labelAppointment: 'Vaccinatieafspraak',
    vac_hexavalente: 'Hexavalent',
    vac_neumococo: 'Pneumokokken (VCN15/20)',
    vac_meningococo_b: 'Meningokokken B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningokokken ACWY',
    vac_triple_virica: 'BMR (Bof, Mazelen, Rodehond)',
    vac_varicela: 'Waterpokken',
    vac_gripe: 'Griep (Seizoensgebonden)',
    vac_vph: 'HPV (Humaan papillomavirus)',
    vac_tdpa: 'DTPa (Difterie, Tetanus, Kinkhoest)',
    vac_polio_booster: 'Polio (Herhaling)',
  },
  seo: [
    { type: 'title', text: 'Vaccinatiecalculator: Wanneer is de volgende vaccinatie van mijn kind?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Effectiviteit' },
      { value: '14', label: 'Totaal aantal doses' },
      { value: 'Publiek', label: 'Kosten AEP' },
      { value: 'Hoog', label: 'Veiligheid' },
    ]},
    { type: 'tip', html: 'Het AEP 2026-schema bevat belangrijke wijzigingen, zoals de uitbreiding van de meningokokken B-vaccinatie en de bijgewerkte aanbevelingen voor HPV voor beide geslachten vanaf 12 jaar.' },
    { type: 'title', text: 'Vernieuwingen in het AEP 2026-schema', level: 3 },
    { type: 'list', items: [
      'Meningokokken B (Bexsero): geconsolideerd 2+1 schema met doses bij 2, 4 en 12 maanden.',
      'HPV uitgebreid naar alle adolescenten vanaf 12 jaar, ongeacht geslacht.',
      'Pneumokokken: bijgewerkte aanbeveling met VCN15 of VCN20 afhankelijk van regionale beschikbaarheid.',
      'Rotavirus: oraal vaccin opgenomen in het systematische schema in alle regio\'s.',
      'DTPa: aanbevolen herhaling op 6 en 12 jarige leeftijd om immuniteit tegen kinkhoest te behouden.',
    ]},
    { type: 'title', text: 'Verschillen per regio', level: 3 },
    { type: 'list', items: [
      'Sommige regio\'s bevatten extra vaccins die niet in het nationale schema staan.',
      'De financiering van het rotavirus-vaccin varieert per regio, hoewel de trend naar universele dekking gaat.',
      'Meningokokken ACWY kan op licht verschillende leeftijden worden toegediend, afhankelijk van het regionale protocol.',
      'Raadpleeg altijd je kinderarts of het gezondheidscentrum in je regio om het huidige schema te bevestigen.',
    ]},
    { type: 'title', text: 'Hoe het schema naar je mobiel te exporteren', level: 3 },
    { type: 'list', items: [
      'Voer de geboortedatum van je baby in de calculator in.',
      'Klik op de knop "Herinnering toevoegen aan mobiel" om het .ics-bestand te downloaden.',
      'Open het bestand met je kalender-app (Google Calendar, Apple Calendar, etc.).',
      'Alle vaccinatieafspraken worden opgeslagen met de datum en bijbehorende vaccins.',
    ]},
    { type: 'title', text: 'Veelvoorkomende bijwerkingen', level: 3 },
    { type: 'list', items: [
      'Roodheid of zwelling op de plaats van injectie: verdwijnt na 1-2 dagen.',
      'Lichte koorts (37,5–38,5 °C): normaal in de eerste 24-48 uur.',
      'Prikkelbaarheid of huilen: komt vaak voor bij baby\'s na de eerste doses.',
      'Slaperigheid of tijdelijk gebrek aan eetlust: behoeft geen behandeling.',
      'Ernstige reacties zoals anafylaxie zijn uiterst zeldzaam (minder dan 1 per miljoen doses).',
    ]},
    { type: 'tip', html: 'Een goed gevoede baby in comfortabele kleding vergemakkelijkt het bezoek. Na de vaccinatie helpen huid-op-huid contact of borstvoeding om pijn en ontsteking op natuurlijke wijze te verzachten.' },
    { type: 'summary', title: 'Wat je moet onthouden', items: [
      'Het AEP 2026-schema omvat 14 doses tot 12 jaar voor een volledige bescherming.',
      'De vaccins in het eerste jaar beschermen tegelijkertijd tegen tot 9 ernstige ziekten.',
      'Lichte bijwerkingen zijn normaal en verdwijnen in 1-2 dagen.',
      'Je kunt alle vaccinatieafspraken met één klik exporteren naar je mobiele kalender.',
      'Raadpleeg altijd je kinderarts als je vragen hebt over het schema in jouw regio.',
    ]},
  ],
  faqTitle: "Veelgestelde vragen",
  faq,
  bibliographyTitle: "Referenties",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Vaccinatieschema 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Spaans Ministerie van Volksgezondheid - Vaccinatieschema',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Immunisatie',
      url: 'https://www.who.int/news-room/fact-sheets/detail/vaccines-and-immunization',
    },
    {
      name: 'CDC - Aanbevolen immunisatieschema voor kinderen en adolescenten',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

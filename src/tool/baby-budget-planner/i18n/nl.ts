import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Baby Budget Planner';
export const description = 'De ultieme tool om de kosten voor het eerste jaar van je baby te plannen. Bereken de inrichting van de babykamer, maandelijkse kosten en verborgen uitgaven met slimme bespaartips.';

export const faq = [
  {
    question: 'Hoeveel kost een baby in het eerste jaar?',
    answer: 'Gemiddeld kan het eerste jaar tussen de € 5.000 en € 15.000 kosten, afhankelijk van je levensstijl, kinderopvang en of je spullen nieuw of tweedehands koopt.',
  },
  {
    question: 'Wat zijn de duurste items voor een pasgeborene?',
    answer: 'De grootste eenmalige kosten zijn meestal de kinderwagen, de inrichting van de babykamer (ledikant, commode) en het autostoeltje. Kinderopvang is de grootste terugkerende maandelijkse uitgave.',
  },
  {
    question: 'Hoe kan ik besparen op babyuitgaven?',
    answer: 'Tweedehands kopen voor uitrusting en kleding, borstvoeding geven (indien mogelijk) en een geboortelijst gebruiken zodat vrienden en familie essentiële items cadeau kunnen doen, zijn de meest effectieve strategieën.',
  },
  {
    question: 'Wat zijn "Spookuitgaven" bij het plannen van een baby?',
    answer: 'Dit zijn verborgen kosten zoals een hogere energierekening (verwarming/koeling), hogere premies voor de gezinsverzekering en niet-verplichte vaccins of medische benodigdheden die meestal niet op standaard checklists staan.',
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
    name: 'Configureer je profiel',
    text: 'Selecteer je levensstijl (Besparend, Gebalanceerd of Premium), voedingsmethode en kinderopvangstrategie.',
  },
  {
    name: 'Bekijk je items',
    text: 'Doorloop de categorieën (Eerste investeringen, Maandelijks en Mijlpalen) en pas prijzen aan of markeer items als tweedehands.',
  },
  {
    name: 'Volg je budget',
    text: 'Zie het totaalbedrag dat nodig is voor het eerste jaar en houd je voortgang bij terwijl je items aanschaft.',
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
  slug: 'baby-budget-planner-berekenen',
  faqTitle: 'Veelgestelde Vragen',
  bibliographyTitle: 'Bibliografie',
  seo: [
    { type: 'summary', title: 'Samenvatting: Baby Budgettering', items: [
      'Het eerste jaar kan tussen de € 5.000 en € 15.000 kosten.',
      'Eenmalige opstartkosten (babykamer, kinderwagen) zijn de grootste eerste hobbel.',
      'Kinderopvang kan tot 50% van het terugkerende maandelijkse budget uitmaken.',
      'Tweedehands items kunnen het totale budget met tot wel 60% verlagen.',
    ]},
    { type: 'title', text: 'Wat kost een baby echt in het eerste jaar?', level: 2 },
    { type: 'paragraph', html: 'Het plannen voor een baby houdt meer in dan alleen luiers kopen. Het vereist een strategische kijk op eenmalige investeringen versus terugkerende maandelijkse kosten. Onze planner helpt je deze curve te visualiseren en je voor te bereiden op de financiële overgang naar het ouderschap.' },
    { type: 'stats', columns: 3, items: [
      { value: '€ 2.000+', label: 'Eerste uitrusting' },
      { value: '€ 100-150', label: 'Maandluiers/Verzorging' },
      { value: '40%+', label: 'Besparingen via 2e hands' },
    ]},
    { type: 'title', text: 'Categorie Breakdown: Waar gaat het geld heen?', level: 3 },
    { type: 'table', headers: ['Categorie', 'Typische Items', 'Frequentie', 'Impact op kosten'], rows: [
      ['Opstartkosten', 'Wieg, Kinderwagen, Autostoeltje', 'Eenmalig', 'Hoog'],
      ['Maandelijks', 'Luiers, Flesvoeding, Apotheek', 'Elke maand', 'Gemiddeld'],
      ['Mijlpalen', 'Kinderstoel, Vaste voeding, Kleding', 'Af en toe', 'Gemiddeld'],
      ['Opvang', 'Kinderdagverblijf / Gastouder', 'Elke maand', 'Zeer Hoog'],
    ]},
    { type: 'tip', html: '<strong>Pro bespaartip:</strong> Kwalitatieve kinderwagens en babykamermeubels hebben een uitstekende herverkoopwaarde. Door deze tweedehands te kopen kun je duizenden euro\'s besparen zonder in te leveren op veiligheid of stijl.' },
    { type: 'title', text: 'Vergelijking van levensstijl', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Besparend', 
        description: 'Focus op tweedehands en essentiële zaken.', 
        points: ['Gekregen kleding', 'Refurbished uitrusting', 'Focus op borstvoeding', 'Publieke opvang'] 
      },
      { 
        title: 'Premium', 
        description: 'Nieuwste modellen en maximaal gemak.', 
        points: ['High-tech uitrusting', 'Biologische voeding', 'Designer babykamer', 'Privé opvang aan huis'] 
      },
    ]},
    { type: 'title', text: 'Slimme planning checklist', level: 3 },
    { type: 'list', items: [
      'Controleer updates voor de gezinsdekking van je verzekeringen.',
      'Budgetteer voor niet-verplichte vaccins en gespecialiseerde apotheekitems.',
      'Houd rekening met een stijging van 20% in de energierekening (verwarming/koeling).',
      'Maak vroegtijdig een geboortelijst aan zodat familie kan helpen bij grote aankopen.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Start je Plan',
    lifestyleLabel: 'Levensstijl Keuze',
    lifestyleSaving: 'Maximaal Besparen',
    lifestyleBalanced: 'Gebalanceerd',
    lifestylePremium: 'Premium',
    feedingLabel: 'Voedingsmethode',
    feedingBreast: 'Borstvoeding',
    feedingFormula: 'Flesvoeding',
    feedingMixed: 'Gemengd',
    childcareLabel: 'Opvangstrategie',
    childcareHome: 'Thuis blijven',
    childcarePublic: 'Openbare Opvang',
    childcarePrivate: 'Privé Opvang',
    startBtn: 'Genereer mijn Budget',
    categoryBeforeBirth: 'Eerste Investeringen',
    categoryMonthByMonth: 'Maandelijkse Kosten',
    categoryMilestones: 'Toekomstige Mijlpalen',
    totalNeededLabel: 'Totaaldoel Eerste Jaar',
    savingsProgressLabel: 'Klaar / Gespaard',
    chartTitle: 'Maandelijkse Uitgavencurve',
    ghostAlertsTitle: 'Spookuitgaven Meldingen',
    ghostInsurance: 'Check Gezinsverzekeringen',
    ghostHeating: 'Houd rekening met +20% Energie',
    ghostVaccines: 'Budget voor Extra Vaccins',
    diaperCalcTitle: 'Luiers Prijscheck',
    diaperPriceLabel: 'Prijs per Pak',
    diaperUnitsLabel: 'Aantal per Pak',
    secondHandLabel: '2e Hands / Cadeau',
    wishlistLabel: 'Op Verlanglijst',
    itemNursery: 'Inrichting Babykamer',
    itemStroller: 'Kinderwagen & Reissysteem',
    itemHospitalBag: 'Inhoud Ziekenhuistas',
    itemDiapers: 'Luiers & Doekjes',
    itemPharmacy: 'Apotheek & Hygiëne',
    itemDaycare: 'Kinderopvang',
    itemSolidFood: 'Overgang Vaste Voeding',
    itemClothes: 'Seizoenskleding',
    itemHighChair: 'Kinderstoel & Eetset',
    editLabel: 'Prijs bewerken',
    saveBtn: 'Opslaan',
    exportBtn: 'Exporteer JSON',
    importBtn: 'Importeer JSON',
    resetBtn: 'Plan Resetten',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Start',
    perMonthLabel: '/maand',
    confirmReset: 'Weet je het zeker?',
    currencyMultiplier: 1,
  },
};

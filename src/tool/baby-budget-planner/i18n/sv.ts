import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Budgetplanerare för Bebis';
export const description = 'Det ultimata verktyget för att planera utgifterna under bebisens första år. Beräkna kostnader för barnrummet, månatliga utgifter och dolda kostnader med smarta spartips.';

export const faq = [
  {
    question: 'Hur mycket kostar en bebis under första året?',
    answer: 'I genomsnitt kan det första året kosta mellan 50 000 kr och 150 000 kr beroende på din livsstil, behov av barnomsorg och om du köper saker nya eller begagnade.',
  },
  {
    question: 'Vilka är de dyraste sakerna för en nyfödd?',
    answer: 'De största engångskostnaderna är vanligtvis barnvagnen, möbler till barnrummet (spjälsäng, byrå) och bilbarnstol. Barnomsorg är den största återkommande månatliga utgiften.',
  },
  {
    question: 'Hur kan jag spara på bebisutgifterna?',
    answer: 'Att köpa begagnat för utrustning och kläder, amma (om möjligt) och använda en önskelista så att vänner och familj kan ge bort nödvändiga saker är de mest effektiva strategierna.',
  },
  {
    question: 'Vad är "spökutgifter" i bebisplaneringen?',
    answer: 'Dessa är dolda kostnader som ökade elräkningar (värme/kyla), högre försäkringspremier för familjen och icke-obligatoriska vacciner eller medicinska förnödenheter som oftast inte finns på vanliga checklistor.',
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
    name: 'Konfigurera din profil',
    text: 'Välj din livsstil (Sparsam, Balanserad eller Premium), matningsmetod och strategi för barnomsorg.',
  },
  {
    name: 'Gå igenom dina saker',
    text: 'Gå igenom kategorierna (Startinvesteringar, Månatliga och Milstolpar) och justera priser eller markera saker som begagnade.',
  },
  {
    name: 'Följ din budget',
    text: 'Se det totala beloppet som behövs för det första året och följ dina framsteg allteftersom du skaffar sakerna.',
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
    priceCurrency: 'SEK',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'budgetplanerare-bebis',
  faqTitle: 'Vanliga Frågor',
  bibliographyTitle: 'Bibliografi',
  seo: [
    { type: 'summary', title: 'Sammanfattning: Bebisbudgetering', items: [
      'Första året kan kosta mellan 50 000 kr och 150 000 kr.',
      'Engångskostnader för start (barnrum, vagn) är det största hindret i början.',
      'Barnomsorg kan stå för upp till 50 % av den återkommande månadsbudgeten.',
      'Begagnade saker kan sänka den totala budgeten med upp till 60 %.',
    ]},
    { type: 'title', text: 'Vad kostar en bebis egentligen under första året?', level: 2 },
    { type: 'paragraph', html: 'Planering för en bebis innebär mer än att bara köpa blöjor. Det krävs en strategisk blick på engångsinvesteringar jämfört med återkommande månadskostnader. Vår planerare hjälper dig att visualisera denna kurva och förbereda dig för den ekonomiska övergången till föräldraskap.' },
    { type: 'stats', columns: 3, items: [
      { value: '20 000 kr+', label: 'Startutrustning' },
      { value: '1 000-1 500 kr', label: 'Blöjor/Hygien per månad' },
      { value: '40%+', label: 'Besparing med begagnat' },
    ]},
    { type: 'title', text: 'Kategorier: Vart tar pengarna vägen?', level: 3 },
    { type: 'table', headers: ['Kategori', 'Typiska saker', 'Frekvens', 'Kostnadspåverkan'], rows: [
      ['Startinvestering', 'Säng, Vagn, Bilbarnstol', 'Engångs', 'Hög'],
      ['Månatligt', 'Blöjor, Ersättning, Apotek', 'Varje månad', 'Medel'],
      ['Milstolpar', 'Matstol, Matintroduktion, Kläder', 'Ibland', 'Medel'],
      ['Omsorg', 'Förskola / Barnflicka', 'Varje månad', 'Mycket hög'],
    ]},
    { type: 'tip', html: '<strong>Spartips:</strong> Kvalitetsvagnar och barnmöbler har ett utmärkt andrahandsvärde. Att köpa dessa begagnade kan spara dig tiotusentals kronor utan att pruta på säkerhet eller stil.' },
    { type: 'title', text: 'Jämförelse av livsstil', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Sparsam', 
        description: 'Fokus på begagnat och det nödvändigaste.', 
        points: ['Ärvda kläder', 'Renoverad utrustning', 'Fokus på amning', 'Kommunal förskola'] 
      },
      { 
        title: 'Premium', 
        description: 'Senaste modellerna och maximal bekvämlighet.', 
        points: ['Högteknologisk utrustning', 'Ekologisk ersättning', 'Designmöbler', 'Privat barnomsorg'] 
      },
    ]},
    { type: 'title', text: 'Checklista för smart planering', level: 3 },
    { type: 'list', items: [
      'Kontrollera uppdateringar för familjeskydd i dina försäkringar.',
      'Budgetera för icke-obligatoriska vacciner och specialartiklar från apoteket.',
      'Räkna med 20 % ökning av hushållens elräkningar (värme/kyla).',
      'Skapa en önskelista tidigt så att familjen kan hjälpa till med stora inköp.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Starta din plan',
    lifestyleLabel: 'Livsstilsval',
    lifestyleSaving: 'Maximal sparsamhet',
    lifestyleBalanced: 'Balanserad',
    lifestylePremium: 'Premium',
    feedingLabel: 'Matningsmetod',
    feedingBreast: 'Amning',
    feedingFormula: 'Ersättning',
    feedingMixed: 'Blandat',
    childcareLabel: 'Barnomsorgsstrategi',
    childcareHome: 'Stanna hemma',
    childcarePublic: 'Kommunal förskola',
    childcarePrivate: 'Privat barnomsorg',
    startBtn: 'Generera min budget',
    categoryBeforeBirth: 'Startinvestering',
    categoryMonthByMonth: 'Månatliga utgifter',
    categoryMilestones: 'Framtida milstolpar',
    totalNeededLabel: 'Totalmål första året',
    savingsProgressLabel: 'Klart / Sparat',
    chartTitle: 'Månatlig utgiftskurva',
    ghostAlertsTitle: 'Varningar för dolda kostnader',
    ghostInsurance: 'Kolla liv/sjukförsäkring',
    ghostHeating: 'Räkna med +20% för el/värme',
    ghostVaccines: 'Budget för tilläggsvaccin',
    diaperCalcTitle: 'Priskoll blöjor',
    diaperPriceLabel: 'Pris per paket',
    diaperUnitsLabel: 'Antal per paket',
    secondHandLabel: 'Begagnat / Gåva',
    wishlistLabel: 'På önskelistan',
    itemNursery: 'Inredning barnrum',
    itemStroller: 'Barnvagn & resesystem',
    itemHospitalBag: 'Innehåll i BB-väskan',
    itemDiapers: 'Blöjor & våtservetter',
    itemPharmacy: 'Apotek & hygien',
    itemDaycare: 'Förskola / Omsorg',
    itemSolidFood: 'Matintroduktion',
    itemClothes: 'Säsongskläder',
    itemHighChair: 'Matstol & servispaket',
    editLabel: 'Redigera pris',
    saveBtn: 'Spara',
    exportBtn: 'Exportera JSON',
    importBtn: 'Importera JSON',
    resetBtn: 'Återställ plan',
    currencySymbol: 'kr',
    monthPrefix: 'M',
    initialMonthLabel: 'Start',
  },
};

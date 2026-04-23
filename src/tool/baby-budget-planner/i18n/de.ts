import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Baby Budgetplaner';
export const description = 'Das ultimative Tool zur Planung der Ausgaben für das erste Jahr mit Ihrem Baby. Berechnen Sie die Erstausstattung, monatliche Kosten und versteckte Ausgaben mit Spartipps.';

export const faq = [
  {
    question: 'Wie viel kostet ein Baby im ersten Jahr?',
    answer: 'Im Durchschnitt kann das erste Jahr zwischen 5.000 € und 15.000 € kosten, abhängig von Ihrem Lebensstil, der Form der Kinderbetreuung und davon, ob Sie Dinge neu oder gebraucht kaufen.',
  },
  {
    question: 'Was sind die teuersten Anschaffungen für ein Neugeborenes?',
    answer: 'Die größten Einmalkosten sind in der Regel der Kinderwagen, die Kinderzimmermöbel (Bett, Wickelkommode) und der Autositz. Die Kinderbetreuung ist die größte wiederkehrende monatliche Ausgabe.',
  },
  {
    question: 'Wie kann ich bei den Baby-Ausgaben sparen?',
    answer: 'Gebrauchtkauf von Ausstattung und Kleidung, Stillen (falls möglich) und das Erstellen einer Wunschliste für Geschenke von Freunden und Familie sind die effektivsten Strategien.',
  },
  {
    question: 'Was sind "Geisterausgaben" bei der Babyplanung?',
    answer: 'Dies sind versteckte Kosten wie steigende Nebenkosten (Heizung/Kühlung), höhere Beiträge zur Familienversicherung sowie nicht obligatorische Impfungen oder medizinischer Bedarf, der oft nicht auf Standard-Checklisten steht.',
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
    name: 'Profil konfigurieren',
    text: 'Wählen Sie Ihren Lebensstil (Sparen, Ausgewogen oder Premium), die Ernährungsmethode und die Kinderbetreuungsstrategie.',
  },
  {
    name: 'Artikel prüfen',
    text: 'Gehen Sie die Kategorien (Erstausstattung, Monatlich und Meilensteine) durch und passen Sie Preise an oder markieren Sie Dinge als gebraucht.',
  },
  {
    name: 'Budget im Blick behalten',
    text: 'Sehen Sie den Gesamtbedarf für das erste Jahr und verfolgen Sie Ihren Fortschritt beim Kauf der Artikel.',
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
  slug: 'baby-budget-planer',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Bibliografie',
  seo: [
    { type: 'summary', title: 'Zusammenfassung: Baby Budgetierung', items: [
      'Das erste Jahr kann zwischen 5.000 € und 15.000 € kosten.',
      'Einmalige Startkosten (Zimmer, Kinderwagen) sind die größte Hürde zu Beginn.',
      'Kinderbetreuung kann bis zu 50% des monatlichen Budgets ausmachen.',
      'Gebrauchte Artikel können das Gesamtbudget um bis zu 60% senken.',
    ]},
    { type: 'title', text: 'Was kostet ein Baby wirklich im ersten Jahr?', level: 2 },
    { type: 'paragraph', html: 'Die Planung für ein Baby umfasst mehr als nur den Kauf von Windeln. Es erfordert einen strategischen Blick auf Einmalinvestitionen im Vergleich zu monatlich wiederkehrenden Kosten. Unser Planer hilft Ihnen, diese Kurve zu visualisieren und sich auf den finanziellen Übergang zur Elternschaft vorzubereiten.' },
    { type: 'stats', columns: 3, items: [
      { value: '2.000 €+', label: 'Erstausstattung' },
      { value: '100-150 €', label: 'Windeln/Pflege monatlich' },
      { value: '40%+', label: 'Ersparnis durch Second Hand' },
    ]},
    { type: 'title', text: 'Kategorien-Übersicht: Wohin fließt das Geld?', level: 3 },
    { type: 'table', headers: ['Kategorie', 'Typische Artikel', 'Häufigkeit', 'Kostenfaktor'], rows: [
      ['Erstausstattung', 'Bett, Kinderwagen, Autositz', 'Einmalig', 'Hoch'],
      ['Monatlich', 'Windeln, Nahrung, Apotheke', 'Jeden Monat', 'Mittel'],
      ['Meilensteine', 'Hochstuhl, Beikost, Kleidung', 'Gelegentlich', 'Mittel'],
      ['Betreuung', 'Kita / Tagesmutter', 'Jeden Monat', 'Sehr hoch'],
    ]},
    { type: 'tip', html: '<strong>Profi-Spartipp:</strong> Hochwertige Kinderwagen und Kindermöbel haben einen exzellenten Wiederverkaufswert. Der Gebrauchtkauf kann Ihnen Tausende Euro sparen, ohne Abstriche bei Sicherheit oder Stil zu machen.' },
    { type: 'title', text: 'Lebensstil-Vergleich', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Sparfokus', 
        description: 'Fokus auf Gebrauchtes und das Wesentliche.', 
        points: ['Geliehene Kleidung', 'Überholte Ausstattung', 'Still-Fokus', 'Öffentliche Betreuung'] 
      },
      { 
        title: 'Premium', 
        description: 'Neueste Modelle und maximaler Komfort.', 
        points: ['Smart-Tech Ausstattung', 'Bio-Nahrung', 'Designer-Kinderzimmer', 'Private 1-zu-1 Betreuung'] 
      },
    ]},
    { type: 'title', text: 'Checkliste für intelligente Planung', level: 3 },
    { type: 'list', items: [
      'Prüfen Sie Upgrades der Familienversicherung.',
      'Planen Sie Budget für nicht-obligatorische Impfungen und Apothekenbedarf ein.',
      'Rechnen Sie mit 20% höheren Nebenkosten (Heizung/Strom).',
      'Erstellen Sie frühzeitig eine Wunschliste für Freunde und Verwandte.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Planung starten',
    lifestyleLabel: 'Lebensstil-Wahl',
    lifestyleSaving: 'Maximal Sparen',
    lifestyleBalanced: 'Ausgewogen',
    lifestylePremium: 'Premium',
    feedingLabel: 'Ernährung',
    feedingBreast: 'Stillen',
    feedingFormula: 'Fläschchen',
    feedingMixed: 'Gemischt',
    childcareLabel: 'Betreuung',
    childcareHome: 'Zu Hause bleiben',
    childcarePublic: 'Öffentliche Kita',
    childcarePrivate: 'Private Betreuung',
    startBtn: 'Budget generieren',
    categoryBeforeBirth: 'Erstausstattung',
    categoryMonthByMonth: 'Monatliche Kosten',
    categoryMilestones: 'Kommende Meilensteine',
    totalNeededLabel: 'Gesamtziel 1. Jahr',
    savingsProgressLabel: 'Bereit / Gespart',
    chartTitle: 'Monatliche Ausgabenkurve',
    ghostAlertsTitle: 'Geisterausgaben-Warnungen',
    ghostInsurance: 'Versicherungs-Check',
    ghostHeating: '+20% Heizung/Strom einplanen',
    ghostVaccines: 'Budget für Zusatzimpfungen',
    diaperCalcTitle: 'Windel-Preischeck',
    diaperPriceLabel: 'Paketpreis',
    diaperUnitsLabel: 'Stück pro Paket',
    secondHandLabel: 'Gebraucht / Geschenk',
    wishlistLabel: 'Auf Wunschliste',
    itemNursery: 'Kinderzimmer-Vorbereitung',
    itemStroller: 'Kinderwagen & Reisesystem',
    itemHospitalBag: 'Kliniktasche Basics',
    itemDiapers: 'Windeln & Feuchttücher',
    itemPharmacy: 'Apotheke & Hygiene',
    itemDaycare: 'Kita / Betreuung',
    itemSolidFood: 'Beikost-Einführung',
    itemClothes: 'Saisonale Kleidung',
    itemHighChair: 'Hochstuhl & Esslernset',
    editLabel: 'Preis bearbeiten',
    saveBtn: 'Speichern',
    exportBtn: 'JSON Export',
    importBtn: 'JSON Import',
    resetBtn: 'Plan zurücksetzen',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Start',
  },
};

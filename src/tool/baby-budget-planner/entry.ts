export interface BabyBudgetPlannerUI {
  title: string;
  onboardingTitle: string;
  lifestyleLabel: string;
  lifestyleSaving: string;
  lifestyleBalanced: string;
  lifestylePremium: string;
  feedingLabel: string;
  feedingBreast: string;
  feedingFormula: string;
  feedingMixed: string;
  childcareLabel: string;
  childcareHome: string;
  childcarePublic: string;
  childcarePrivate: string;
  startBtn: string;
  categoryBeforeBirth: string;
  categoryMonthByMonth: string;
  categoryMilestones: string;
  totalNeededLabel: string;
  savingsProgressLabel: string;
  chartTitle: string;
  ghostAlertsTitle: string;
  ghostInsurance: string;
  ghostHeating: string;
  ghostVaccines: string;
  diaperCalcTitle: string;
  diaperPriceLabel: string;
  diaperUnitsLabel: string;
  secondHandLabel: string;
  wishlistLabel: string;
  itemNursery: string;
  itemStroller: string;
  itemHospitalBag: string;
  itemDiapers: string;
  itemPharmacy: string;
  itemDaycare: string;
  itemSolidFood: string;
  itemClothes: string;
  itemHighChair: string;
  editLabel: string;
  saveBtn: string;
  exportBtn: string;
  importBtn: string;
  resetBtn: string;
  currencySymbol: string;
  monthPrefix: string;
  initialMonthLabel: string;
}

export const babyBudgetPlanner = {
  id: 'baby-budget-planner',
  icons: {
    bg: 'mdi:finance',
    fg: 'mdi:baby-face-outline',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content,
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

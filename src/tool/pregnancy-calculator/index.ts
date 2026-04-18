import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';

export interface MilestoneI18n {
  analogies: { fruits: string; geek: string; sweets: string };
  size: string;
  biolook: string;
  mom: string;
  partner: string;
  symptoms: string[];
  alerts: string[];
  wonder: string;
}

export interface PregnancyCalculatorUI {
  [key: string]: string;
  btnFUR: string;
  btnConception: string;
  labelPartnerMode: string;
  labelFUR: string;
  labelConception: string;
  labelCycleLength: string;
  unitDays: string;
  labelWeeks: string;
  labelTrimester: string;
  labelEDD: string;
  eddPlaceholder: string;
  eddNote: string;
  btnCalendar: string;
  labelFruits: string;
  labelGeek: string;
  labelSweets: string;
  labelBioLabel: string;
  labelMomKey: string;
  labelPartnerKey: string;
  labelNormalMolestias: string;
  labelAlert: string;
  labelTimeline: string;
  labelStartHere: string;
  labelStartBody: string;
  labelSem: string;
  labelWeekBadge: string;
  weeksFormat: string;
  trimesterSuffix: string;
  eggFutureTitle: string;
  eggFutureBody: string;
  eggTooOldTitle: string;
  eggTooOldBody: string;
  faqTitle: string;
  bibliographyTitle: string;
  dayLabel: string;
  monthLabel: string;
  yearLabel: string;
  icsSummary: string;
  icsDescription: string;
  icsFilename: string;
  monthsData: string;
  milestonesData: string;
  timelineLabelsData: string;
}

export type PregnancyCalculatorLocaleContent = ToolLocaleContent<PregnancyCalculatorUI>;





export const pregnancyCalculator: BabiesToolEntry<PregnancyCalculatorUI> = {
  id: 'pregnancy-calculator',
  icons: { bg: 'mdi:human-pregnant', fg: 'mdi:calendar-heart' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};


export const PREGNANCY_CALCULATOR_TOOL: ToolDefinition = {
  entry: pregnancyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

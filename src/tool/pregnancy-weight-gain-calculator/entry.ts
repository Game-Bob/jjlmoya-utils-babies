import type { BabiesToolEntry, ToolLocaleContent } from '../../types';

export interface PregnancyWeightGainCalculatorUI {
  [key: string]: string;
  title: string;
  educationalWarningTitle: string;
  educationalWarningBody: string;
  inputsTitle: string;
  unitsLabel: string;
  metricLabel: string;
  imperialLabel: string;
  heightCmLabel: string;
  heightFtLabel: string;
  heightInLabel: string;
  preWeightKgLabel: string;
  currentWeightKgLabel: string;
  preWeightLbLabel: string;
  currentWeightLbLabel: string;
  weekLabel: string;
  pregnancyTypeLabel: string;
  singletonLabel: string;
  twinsLabel: string;
  bmiCardTitle: string;
  recommendationTitle: string;
  currentGainTitle: string;
  chartTitle: string;
  weekShortLabel: string;
  kgLabel: string;
  lbLabel: string;
  totalRangeLabel: string;
  weeklyRangeLabel: string;
  firstTrimesterLabel: string;
  statusBelow: string;
  statusWithin: string;
  statusAbove: string;
  statusBelowBody: string;
  statusWithinBody: string;
  statusAboveBody: string;
  categoryUnderweight: string;
  categoryNormal: string;
  categoryOverweight: string;
  categoryObesity: string;
  totalGainSuffix: string;
  perWeekSuffix: string;
  chartLowLabel: string;
  chartHighLabel: string;
  chartCurrentLabel: string;
}

export type PregnancyWeightGainCalculatorLocaleContent = ToolLocaleContent<PregnancyWeightGainCalculatorUI>;

export const pregnancyWeightGainCalculator: BabiesToolEntry<PregnancyWeightGainCalculatorUI> = {
  id: 'pregnancy-weight-gain-calculator',
  icons: { bg: 'mdi:scale-bathroom', fg: 'mdi:human-pregnant' },
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

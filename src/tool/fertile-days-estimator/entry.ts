import type { BabiesToolEntry, ToolLocaleContent } from '../../types';

export interface FertileDaysEstimatorUI {
  [key: string]: string;
  step1Title: string;
  step1Desc: string;
  pulseHint: string;
  step1Indicator: string;
  step2Indicator: string;
  sidebarTitle: string;
  sidebarDesc: string;
  labelCycleLength: string;
  unitDays: string;
  labelOvulation: string;
  labelFertileWindow: string;
  labelNextPeriod: string;
  legendSelection: string;
  legendPeriod: string;
  legendFertile: string;
  legendOvulation: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type FertileDaysEstimatorLocaleContent = ToolLocaleContent<FertileDaysEstimatorUI>;

export const fertileDaysEstimator: BabiesToolEntry<FertileDaysEstimatorUI> = {
  id: 'fertile-days-estimator',
  icons: { bg: 'mdi:calendar-heart', fg: 'mdi:calendar-heart' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

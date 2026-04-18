import type { BabiesCategoryEntry } from '../types';
import { babyFeedingCalculator } from '../tool/baby-feeding-calculator/entry';
import { babySizeConverter } from '../tool/baby-size-converter/entry';
import { vaccinationCalendar } from '../tool/vaccination-calendar/entry';
import { fertileDaysEstimator } from '../tool/fertile-days-estimator/entry';
import { babyPercentileCalculator } from '../tool/baby-percentile-calculator/entry';
import { pregnancyCalculator } from '../tool/pregnancy-calculator/entry';

export const babiesCategory: BabiesCategoryEntry = {
  icon: 'mdi:baby-carriage',
  tools: [
    babyFeedingCalculator,
    babySizeConverter,
    vaccinationCalendar,
    fertileDaysEstimator,
    babyPercentileCalculator,
    pregnancyCalculator,
  ],
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

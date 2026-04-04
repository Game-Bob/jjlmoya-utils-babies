import type { BabiesCategoryEntry } from '../types';
import { babyFeedingCalculator } from '../tool/baby-feeding-calculator';
import { babySizeConverter } from '../tool/baby-size-converter';
import { vaccinationCalendar } from '../tool/vaccination-calendar';
import { fertileDaysEstimator } from '../tool/fertile-days-estimator';
import { babyPercentileCalculator } from '../tool/baby-percentile-calculator';
import { pregnancyCalculator } from '../tool/pregnancy-calculator';

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
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

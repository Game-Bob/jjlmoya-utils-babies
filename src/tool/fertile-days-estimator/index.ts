import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import FertileDaysEstimatorComponent from './component.astro';
import FertileDaysEstimatorSEO from './seo.astro';
import FertileDaysEstimatorBibliography from './bibliography.astro';

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
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { FertileDaysEstimatorComponent, FertileDaysEstimatorSEO, FertileDaysEstimatorBibliography };

export const FERTILE_DAYS_ESTIMATOR_TOOL: ToolDefinition = {
  entry: fertileDaysEstimator,
  Component: FertileDaysEstimatorComponent,
  SEOComponent: FertileDaysEstimatorSEO,
  BibliographyComponent: FertileDaysEstimatorBibliography,
};

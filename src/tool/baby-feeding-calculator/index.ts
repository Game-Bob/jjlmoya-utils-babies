import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import BabyFeedingCalculatorComponent from './component.astro';
import BabyFeedingCalculatorSEO from './seo.astro';
import BabyFeedingCalculatorBibliography from './bibliography.astro';

export interface BabyFeedingCalculatorUI {
  [key: string]: string;
  labelConfig: string;
  labelPlan: string;
  unitDays: string;
  unitWeeks: string;
  unitMonths: string;
  labelWeight: string;
  labelFeedType: string;
  feedBreast: string;
  feedMixed: string;
  feedFormula: string;
  labelFreeDemand: string;
  labelMlPerFeed: string;
  labelFeedsCount: string;
  labelDailyTotal: string;
  labelHunger: string;
  labelFullness: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type BabyFeedingCalculatorLocaleContent = ToolLocaleContent<BabyFeedingCalculatorUI>;

export const babyFeedingCalculator: BabiesToolEntry<BabyFeedingCalculatorUI> = {
  id: 'baby-feeding-calculator',
  icons: { bg: 'mdi:baby-bottle', fg: 'mdi:baby-bottle-outline' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BabyFeedingCalculatorComponent, BabyFeedingCalculatorSEO, BabyFeedingCalculatorBibliography };

export const BABY_FEEDING_CALCULATOR_TOOL: ToolDefinition = {
  entry: babyFeedingCalculator,
  Component: BabyFeedingCalculatorComponent,
  SEOComponent: BabyFeedingCalculatorSEO,
  BibliographyComponent: BabyFeedingCalculatorBibliography,
};

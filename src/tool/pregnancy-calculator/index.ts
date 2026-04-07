import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import PregnancyCalculatorComponent from './component.astro';
import PregnancyCalculatorSEO from './seo.astro';
import PregnancyCalculatorBibliography from './bibliography.astro';

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
  // JSON stringified data
  monthsData: string;
  milestonesData: string;
  timelineLabelsData: string;
}

export type PregnancyCalculatorLocaleContent = ToolLocaleContent<PregnancyCalculatorUI>;





export const pregnancyCalculator: BabiesToolEntry<PregnancyCalculatorUI> = {
  id: 'pregnancy-calculator',
  icons: { bg: 'mdi:human-pregnant', fg: 'mdi:calendar-heart' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { PregnancyCalculatorComponent, PregnancyCalculatorSEO, PregnancyCalculatorBibliography };

export const PREGNANCY_CALCULATOR_TOOL: ToolDefinition = {
  entry: pregnancyCalculator,
  Component: PregnancyCalculatorComponent,
  SEOComponent: PregnancyCalculatorSEO,
  BibliographyComponent: PregnancyCalculatorBibliography,
};

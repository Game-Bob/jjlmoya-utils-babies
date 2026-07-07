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
    en: () => import('./i18n/en').then((m) => m.content),
  },
};

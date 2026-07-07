import type { BabiesToolEntry, ToolLocaleContent } from '../../types';

export interface LaborContractionTimerUI {
  [key: string]: string;
  title: string;
  safetyTitle: string;
  safetyBody: string;
  idleStatus: string;
  activeStatus: string;
  accidentalTapStatus: string;
  shortRecordLabel: string;
  activeRowLabel: string;
  startButton: string;
  stopButton: string;
  activeLabel: string;
  breathingLabel: string;
  breatheIn: string;
  breatheOut: string;
  currentDurationLabel: string;
  lastIntervalLabel: string;
  contractionCountLabel: string;
  patternStatusTitle: string;
  patternStatusIdle: string;
  patternStatusTracking: string;
  patternStatusBuilding: string;
  patternStatusCall: string;
  patternStatusActiveBody: string;
  patternStatusBuildingBody: string;
  patternStatusCallBody: string;
  averageLastThreeLabel: string;
  averageLastSixLabel: string;
  regularityLabel: string;
  regularityNotEnough: string;
  regularityIrregular: string;
  regularityVariable: string;
  regularityRegular: string;
  summaryTitle: string;
  summaryEmpty: string;
  copySummaryButton: string;
  copiedSummaryButton: string;
  undoButton: string;
  sessionOverviewTitle: string;
  sessionOverviewBody: string;
  lastContractionLabel: string;
  historyTitle: string;
  emptyHistory: string;
  startTimeHeader: string;
  durationHeader: string;
  intervalHeader: string;
  secondsSuffix: string;
  minutesSuffix: string;
  noInterval: string;
  resetButton: string;
  alertTitle: string;
  alertBody: string;
  patternTitle: string;
  patternBody: string;
}

export type LaborContractionTimerLocaleContent = ToolLocaleContent<LaborContractionTimerUI>;

export const laborContractionTimer: BabiesToolEntry<LaborContractionTimerUI> = {
  id: 'labor-contraction-timer',
  icons: { bg: 'mdi:timer-outline', fg: 'mdi:heart-pulse' },
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

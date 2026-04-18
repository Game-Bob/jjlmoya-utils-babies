import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';

export interface VaccinationCalendarUI {
  [key: string]: string;
  labelBirthDate: string;
  placeholderDD: string;
  placeholderMM: string;
  placeholderAAAA: string;
  emptyMsg: string;
  invalidMsg: string;
  futureMsg: string;
  labelNextAppointment: string;
  btnAddReminder: string;
  btnToday: string;
  labelPassed: string;
  labelFuture: string;
  labelStatusOk: string;
  labelStatusPending: string;
  labelSource: string;
  labelShare: string;
  faqTitle: string;
  bibliographyTitle: string;
  labelMonth: string;
  labelMonths: string;
  labelYear: string;
  labelYears: string;
  labelDay: string;
  labelDays: string;
  labelAnd: string;
  labelVaccination: string;
  labelAppointment: string;
  vac_hexavalente: string;
  vac_neumococo: string;
  vac_meningococo_b: string;
  vac_rotavirus: string;
  vac_meningococo_acwy: string;
  vac_triple_virica: string;
  vac_varicela: string;
  vac_gripe: string;
  vac_vph: string;
  vac_tdpa: string;
  vac_polio_booster: string;
}

export type VaccinationCalendarLocaleContent = ToolLocaleContent<VaccinationCalendarUI>;

export const vaccinationCalendar: BabiesToolEntry<VaccinationCalendarUI> = {
  id: 'vaccination-calendar',
  icons: { bg: 'mdi:needle', fg: 'mdi:needle' },
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


export const VACCINATION_CALENDAR_TOOL: ToolDefinition = {
  entry: vaccinationCalendar,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import VaccinationCalendarComponent from './component.astro';
import VaccinationCalendarSEO from './seo.astro';
import VaccinationCalendarBibliography from './bibliography.astro';

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
}

export type VaccinationCalendarLocaleContent = ToolLocaleContent<VaccinationCalendarUI>;

export const vaccinationCalendar: BabiesToolEntry<VaccinationCalendarUI> = {
  id: 'vaccination-calendar',
  icons: { bg: 'mdi:needle', fg: 'mdi:needle' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { VaccinationCalendarComponent, VaccinationCalendarSEO, VaccinationCalendarBibliography };

export const VACCINATION_CALENDAR_TOOL: ToolDefinition = {
  entry: vaccinationCalendar,
  Component: VaccinationCalendarComponent,
  SEOComponent: VaccinationCalendarSEO,
  BibliographyComponent: VaccinationCalendarBibliography,
};

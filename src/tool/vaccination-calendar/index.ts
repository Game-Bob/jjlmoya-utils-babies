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
  // Age labels
  labelMonth: string;
  labelMonths: string;
  labelYear: string;
  labelYears: string;
  labelDay: string;
  labelDays: string;
  labelAnd: string;
  labelVaccination: string;
  labelAppointment: string;
  // Vaccine IDs
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

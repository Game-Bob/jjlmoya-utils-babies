import { vaccinationCalendar } from './entry';
export * from './entry';
export const VACCINATION_CALENDAR_TOOL: ToolDefinition = {
  entry: vaccinationCalendar,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

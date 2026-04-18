import { pregnancyCalculator } from './entry';
export * from './entry';
export const PREGNANCY_CALCULATOR_TOOL: ToolDefinition = {
  entry: pregnancyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

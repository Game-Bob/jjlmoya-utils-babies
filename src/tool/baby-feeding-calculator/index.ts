export * from './entry';
export const BABY_FEEDING_CALCULATOR_TOOL: ToolDefinition = {
  entry: babyFeedingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

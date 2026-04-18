export * from './entry';
export const BABY_PERCENTILE_CALCULATOR_TOOL: ToolDefinition = {
  entry: babyPercentileCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

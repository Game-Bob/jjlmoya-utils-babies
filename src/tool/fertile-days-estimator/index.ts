import { fertileDaysEstimator } from './entry';
export * from './entry';
export const FERTILE_DAYS_ESTIMATOR_TOOL: ToolDefinition = {
  entry: fertileDaysEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

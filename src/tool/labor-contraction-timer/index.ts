import { laborContractionTimer } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const LABOR_CONTRACTION_TIMER_TOOL: ToolDefinition = {
  entry: laborContractionTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

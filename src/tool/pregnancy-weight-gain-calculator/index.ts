import { pregnancyWeightGainCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const PREGNANCY_WEIGHT_GAIN_CALCULATOR_TOOL: ToolDefinition = {
  entry: pregnancyWeightGainCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

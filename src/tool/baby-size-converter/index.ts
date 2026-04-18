import { babySizeConverter } from './entry';
export * from './entry';
export const BABY_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: babySizeConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { BabiesToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import BabySizeConverterComponent from './component.astro';
import BabySizeConverterSEO from './seo.astro';
import BabySizeConverterBibliography from './bibliography.astro';

export interface BabySizeConverterUI {
  [key: string]: string;
  labelInput: string;
  labelResults: string;
  labelHeight: string;
  labelWeight: string;
  labelPresets: string;
  unitMetric: string;
  unitImperial: string;
  labelCm: string;
  labelKg: string;
  labelIn: string;
  labelLb: string;
  labelBrandFit: string;
  labelSuggested: string;
  labelChest: string;
  labelWaist: string;
  labelGarmentMeasures: string;
  fitRegular: string;
  fitLarge: string;
  fitSmall: string;
  tipTitle: string;
  tipText: string;
  shareAriaLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export type BabySizeConverterLocaleContent = ToolLocaleContent<BabySizeConverterUI>;

export const babySizeConverter: BabiesToolEntry<BabySizeConverterUI> = {
  id: 'baby-size-converter',
  icons: { bg: 'mdi:tshirt-crew', fg: 'mdi:tshirt-crew-outline' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export { BabySizeConverterComponent, BabySizeConverterSEO, BabySizeConverterBibliography };

export const BABY_SIZE_CONVERTER_TOOL: ToolDefinition = {
  entry: babySizeConverter,
  Component: BabySizeConverterComponent,
  SEOComponent: BabySizeConverterSEO,
  BibliographyComponent: BabySizeConverterBibliography,
};

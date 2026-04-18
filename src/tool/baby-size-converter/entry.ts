import type { BabiesToolEntry, ToolLocaleContent } from '../../types';

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
    de: () => import('./i18n/de').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

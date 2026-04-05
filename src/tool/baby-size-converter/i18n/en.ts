import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-size-converter';
const title = 'Baby Size Converter';
const description = "Convert baby clothing sizes between Zara, H&M, Primark, Carter's, Kiabi, Mango, and Mayoral. Enter your baby's height and weight to get the exact size for each brand.";
const faq = [
  {
    question: "How do I know what clothing size my baby needs?",
    answer: "The most reliable approach is to use your baby's height as the main reference. European sizes (50, 56, 62...) correspond directly to height in centimeters. Enter the baby's height and weight in the converter to get the recommended size for each brand.",
  },
  {
    question: 'Why do sizes vary so much between brands?',
    answer: "Each brand has its own cut pattern. H&M and Primark tend to run large, while Carter's and Mayoral run slim. Always use the baby's measurements, not just their age.",
  },
  {
    question: 'What should I do if the baby is between two sizes?',
    answer: 'Always choose the larger size. Babies grow very quickly and a larger size ensures better durability and comfort.',
  },
  {
    question: 'Do inch-based sizes work the same way?',
    answer: "American brands like Carter's use inches and weight as their primary reference. The converter automatically shows equivalents in the imperial system when you activate it.",
  },
];
const howTo = [
  {
    name: "Enter the baby's height",
    text: "Use the slider or buttons to adjust the baby's current height in centimeters or inches.",
  },
  {
    name: "Enter the baby's weight",
    text: 'Adjust the weight in kg or pounds to refine results, as some brands use weight as a complementary reference.',
  },
  {
    name: 'Select a brand',
    text: 'Choose the clothing brand to see the suggested size and estimated garment measurements.',
  },
  {
    name: 'Review equivalents',
    text: 'The right panel shows equivalent sizes for all available brands at a glance.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Baby measurements',
    labelResults: 'Estimated equivalents',
    labelHeight: "Baby's height",
    labelWeight: "Baby's current weight",
    labelPresets: 'Presets by typical age',
    unitMetric: 'Metric (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Brand & Fit',
    labelSuggested: 'Suggested size',
    labelChest: 'Chest',
    labelWaist: 'Waist',
    labelGarmentMeasures: 'Estimated garment measurements',
    fitRegular: 'Regular fit',
    fitLarge: 'Large fit',
    fitSmall: 'Slim fit',
    tipTitle: 'Expert tip',
    tipText: 'Babies grow in very rapid development spurts. If the result is at the upper limit of a size, always choose the next size up to ensure durability and comfort for your baby.',
    shareAriaLabel: 'Share size',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    { type: 'title', text: 'Baby Size Guide: Zara, H&M, Primark and International Brands', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Monthly growth' },
      { value: '3 months', label: 'Duration per size' },
      { value: '95%', label: 'Reliability by height' },
    ]},
    { type: 'tip', html: 'Always use height as the primary reference for choosing a size, not age. Two babies of the same age can differ by up to 8–10 cm, which means jumping a full size.' },
    { type: 'title', text: 'Sizes by age, height and weight', level: 3 },
    { type: 'table', headers: ['Approx. age', 'Height (cm)', 'Weight (kg)', 'Usual size', 'Estimated use'], rows: [
      ['Newborn', '50–56', '3–4.5', '50 / NB', '4–6 weeks'],
      ['1–3 months', '56–62', '4.5–6', '56–62', '6–8 weeks'],
      ['3–6 months', '62–68', '6–8', '62–68', '6–8 weeks'],
      ['6–9 months', '68–74', '8–9.5', '68–74', '6–8 weeks'],
      ['9–12 months', '74–80', '9.5–11', '74–80', '6–8 weeks'],
      ['12–18 months', '80–86', '11–13', '80–86', '3–4 months'],
      ['18–24 months', '86–92', '13–15', '86–92', '3–4 months'],
    ]},
    { type: 'title', text: 'Brands that run large vs. slim', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Run large (size down)',
        description: 'These brands use wider cuts; go one size smaller than usual.',
        points: [
          'H&M: typically runs one size larger',
          'Primark: generally wide cut',
          'Lupilu (Lidl): loose fit overall',
          'Recommended for babies in lower percentiles',
        ],
      },
      {
        title: 'Run slim (size up)',
        description: 'These brands use narrower cuts; go one size larger than usual.',
        points: [
          "Carter's: American slim cut",
          'Mayoral: fitted European cut',
          'Neck & Neck: reduced sizing',
          'Recommended for babies in higher percentiles',
        ],
      },
    ]},
    { type: 'title', text: 'Keys to getting the right size', level: 3 },
    { type: 'list', items: [
      'Always measure the baby before buying — do not rely solely on age',
      'If the result falls between two sizes, always choose the larger one',
      'Account for nappy room in bodysuits and all-in-ones',
      'European sizes (50, 56, 62...) correspond to height in cm',
      'Always wash before use: cotton can shrink up to 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Size 50 / Newborn',
        definition: 'Designed for babies up to 50 cm tall and around 3.5 kg. Many babies outgrow it very quickly, even within the first weeks.',
      },
      {
        term: 'Crotch length (rise)',
        definition: 'Distance from the crotch to the waist. Critical in bodysuits and rompers: a short rise restricts the baby\'s movement even if the rest of the garment fits well.',
      },
      {
        term: 'Weight-based sizing',
        definition: "American brands like Carter's use weight as the primary reference. Useful for babies with proportions outside the standard percentile.",
      },
      {
        term: 'Envelope neckline',
        definition: 'Neckline design on bodysuits and T-shirts that allows dressing the baby by sliding the garment downward rather than over the head. Essential in the first months.',
      },
    ]},
    { type: 'summary', title: 'What to remember', items: [
      'Height is the most reliable indicator for choosing size, above age.',
      "H&M and Primark tend to run large; Carter's and Mayoral run slim.",
      'Numerical European sizes (50, 56, 62...) correspond to height in cm.',
      'When between sizes, choosing the larger one ensures better durability.',
      'Envelope necklines and a generous rise are the key comfort details.',
    ]},
  ],
  faq,
  bibliography: [
    {
      name: 'Zara - Children\'s size guide',
      url: 'https://www.zara.com/en/size-guide.html',
    },
    {
      name: 'H&M - Baby size guide',
      url: 'https://www2.hm.com/en_gb/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - Child growth standards',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: "Carter's - Size guide",
      url: 'https://www.carters.com/size-chart',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

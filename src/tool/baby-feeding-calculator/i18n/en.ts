import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-feeding-calculator';
const title = 'Baby Feeding Calculator';
const description = 'Calculate how much milk your baby needs based on weight and age. Recommended feeds, milliliters per feed, and hunger and fullness cues.';
  ui: {
    labelConfig: 'Current settings',
    labelPlan: 'Recommended plan',
    unitDays: 'days',
    unitWeeks: 'weeks',
    unitMonths: 'months',
    labelWeight: 'Baby weight',
    labelFeedType: 'Feed type',
    feedBreast: 'Breast',
    feedMixed: 'Mixed',
    feedFormula: 'Formula',
    labelFreeDemand: 'On demand',
    labelMlPerFeed: 'ml per feed',
    labelFeedsCount: 'Feeds / 24h',
    labelDailyTotal: 'Daily total (est.)',
    labelHunger: 'Hunger cues',
    labelFullness: 'Fullness cues',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    { type: 'summary', title: 'Summary: Baby feeding', items: [
      'A newborn\'s stomach capacity is only 5–7 ml on day one.',
      'The general formula reference is 150 ml per kg of body weight per day.',
      'Breastfeeding is offered on demand without fixed volumes.',
      'Feed frequency decreases with age: from 8–12 feeds to 4–5 by 6 months.',
    ]},
    { type: 'title', text: 'How much milk does my baby need by weight and age?', level: 2 },
    { type: 'paragraph', html: 'Milk needs change rapidly in the first months. The calculator estimates the amount based on current weight and age, following WHO and AAP paediatric guidelines.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Day 1 (cherry size)' },
      { value: '150 ml/kg', label: 'Daily formula reference' },
      { value: '8–12', label: 'Feeds/day newborn' },
    ]},
    { type: 'title', text: 'Stomach size by age', level: 3 },
    { type: 'table', headers: ['Age', 'Size ref.', 'Capacity', 'Feeds/day'], rows: [
      ['Day 1', 'Cherry', '5–7 ml', '8–12'],
      ['Days 2–4', 'Walnut', '22–27 ml', '8–12'],
      ['Days 5–30', 'Egg', '45–60 ml', '8–10'],
      ['1–3 months', 'Full', '90–120 ml', '7–8'],
      ['3–6 months', 'Full', '120–150 ml', '5–6'],
      ['6+ months', 'Full', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'A reliable sign of adequate feeding is wet nappy count: 5–6 heavy nappies per day from day five indicate good hydration.' },
    { type: 'title', text: 'Breastfeeding vs formula', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Breastfeeding', description: 'Natural on-demand feeding.', points: ['No fixed schedule', 'Active antibodies', 'Variable composition', 'Hard to quantify'] },
      { title: 'Formula', description: 'Scheduled feeds with measurable volume.', points: ['Every 3–4 hours', 'Stable composition', 'Easy to track intake', 'Requires sterile preparation'] },
    ]},
    { type: 'list', items: [
      'Adequate weight gain: 150–200 g/week in the first month',
      'At least 5–6 wet nappies per day',
      'Baby is calm after feeds',
      'Urine is clear or very pale yellow',
    ]},
  ],
  faq: [
    {
      question: 'How much milk does a newborn need?',
      answer: 'On day one, a newborn\'s stomach is the size of a cherry and needs only 5–7 ml per feed. By day five, capacity grows to 45–60 ml and needs increase progressively.',
    },
    {
      question: 'How often should a baby eat?',
      answer: 'Newborns need 8–12 feeds per day. By 3 months this typically spaces out to 7–8 feeds, and by 6 months around 5 feeds daily.',
    },
    {
      question: 'How do I know if my baby is eating enough?',
      answer: 'The most reliable indicators are: adequate weight gain, at least 5–6 wet diapers per day, and the baby showing fullness cues after feeds.',
    },
    {
      question: 'Are breastfeeding and formula amounts the same?',
      answer: 'With breastfeeding, on-demand feeding without measuring volumes is recommended. With formula, the common reference is 150 ml per kg of body weight per day, distributed across the number of feeds appropriate for the baby\'s age.',
    },
  ],
  bibliography: [
    {
      name: 'WHO - Infant and young child feeding',
      url: 'https://www.who.int/health-topics/infant-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: 'UNICEF - Breastfeeding',
      url: 'https://www.unicef.org/nutrition/index_24824.html',
    },
  ],
  howTo: [
    {
      name: 'Select the baby\'s age',
      text: 'Choose the unit (days, weeks, or months) and adjust the value with the slider or buttons.',
    },
    {
      name: 'Enter the baby\'s weight',
      text: 'Use the weight slider or buttons to adjust the baby\'s current weight in kilograms.',
    },
    {
      name: 'Select the feed type',
      text: 'Choose between breast, mixed, or formula to get the most tailored guide.',
    },
    {
      name: 'Review the recommended plan',
      text: 'The calculator shows number of feeds, milliliters per feed, and estimated daily total.',
    },
  ],
  schemas: [],
};

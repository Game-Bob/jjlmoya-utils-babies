import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Pregnancy Weight Gain Calculator';
export const description = 'Estimate a healthy pregnancy weight gain range by gestational week using IOM and ACOG prenatal weight gain guidance.';

export const faq = [
  {
    question: 'How much weight should I gain during pregnancy?',
    answer: 'Recommended total gain depends on pre-pregnancy BMI. IOM guidance ranges from 28 to 40 lb for underweight, 25 to 35 lb for normal BMI, 15 to 25 lb for overweight, and 11 to 20 lb for obesity in singleton pregnancies.',
  },
  {
    question: 'Does twin pregnancy use the same weight gain range?',
    answer: 'Twin pregnancies generally use higher total gain ranges after BMI classification. This calculator shows commonly cited IOM ranges for normal BMI, overweight, and obesity, while clinical teams should individualize care.',
  },
  {
    question: 'Why does the curve change after the first trimester?',
    answer: 'IOM guidance expects modest first trimester gain, about 0.5 to 2 kg, followed by steadier weekly gain in the second and third trimesters.',
  },
  {
    question: 'Can this calculator diagnose a pregnancy problem?',
    answer: 'No. It is an educational estimate only. Sudden weight change, swelling, vomiting, diabetes risk, fetal growth concerns, or any medical symptom should be discussed with a prenatal clinician.',
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

export const howTo = [
  {
    name: 'Enter pre-pregnancy measurements',
    text: 'Add height and pre-pregnancy weight so the tool can estimate pre-pregnancy BMI.',
  },
  {
    name: 'Add current pregnancy details',
    text: 'Enter current weight, gestational week, and whether the pregnancy is singleton or twin.',
  },
  {
    name: 'Review the curve',
    text: 'Compare current gain with the estimated healthy gain band for the selected week.',
  },
];

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
  operatingSystem: 'Any',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'pregnancy-weight-gain-calculator',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
  seo: [
    { type: 'summary', title: 'Summary: Prenatal Weight Gain', items: [
      'Pre-pregnancy BMI determines the recommended total gain range.',
      'The first trimester usually has a modest gain target of about 0.5 to 2 kg.',
      'Second and third trimester gain is modeled as a weekly range.',
      'The result is educational and should be interpreted with prenatal clinical care.',
    ]},
    { type: 'title', text: 'How the pregnancy weight gain calculator works', level: 2 },
    { type: 'paragraph', html: 'This tool estimates pre-pregnancy BMI, maps it to IOM and ACOG weight gain guidance, then plots a week-by-week gain band across 40 gestational weeks.' },
    { type: 'table', headers: ['Pre-pregnancy BMI', 'Category', 'Singleton total gain'], rows: [
      ['< 18.5', 'Underweight', '12.5 to 18 kg / 28 to 40 lb'],
      ['18.5 to 24.9', 'Normal', '11.5 to 16 kg / 25 to 35 lb'],
      ['25.0 to 29.9', 'Overweight', '7 to 11.5 kg / 15 to 25 lb'],
      ['>= 30.0', 'Obesity', '5 to 9 kg / 11 to 20 lb'],
    ]},
    { type: 'tip', html: '<strong>Educational warning:</strong> Weight gain targets are screening and counseling ranges, not a diagnosis. Always review concerns with an obstetrician, midwife, or qualified prenatal clinician.' },
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    educationalWarningTitle: 'Educational warning',
    educationalWarningBody: 'This calculator is for prenatal education only. It does not diagnose maternal or fetal health, replace individualized medical advice, or account for symptoms, fluid retention, diabetes risk, fetal growth, nutrition history, or clinician-directed targets.',
    inputsTitle: 'Pregnancy profile',
    unitsLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Height (cm)',
    heightFtLabel: 'Height (ft)',
    heightInLabel: 'Height (in)',
    preWeightKgLabel: 'Pre-pregnancy weight (kg)',
    currentWeightKgLabel: 'Current weight (kg)',
    preWeightLbLabel: 'Pre-pregnancy weight (lb)',
    currentWeightLbLabel: 'Current weight (lb)',
    weekLabel: 'Gestational week',
    pregnancyTypeLabel: 'Pregnancy type',
    singletonLabel: 'Singleton',
    twinsLabel: 'Twins',
    bmiCardTitle: 'Pre-pregnancy BMI',
    recommendationTitle: 'Recommended gain',
    currentGainTitle: 'Current gain',
    chartTitle: 'Prenatal weight gain curve',
    weekShortLabel: 'wk',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Total range',
    weeklyRangeLabel: 'Weekly pace after week 13',
    firstTrimesterLabel: 'First trimester: about 0.5 to 2 kg total gain',
    statusBelow: 'Below estimated band',
    statusWithin: 'Within estimated band',
    statusAbove: 'Above estimated band',
    statusBelowBody: 'Your current gain is below the estimated band for this week. Ask your prenatal clinician whether nutrition, nausea, fetal growth, or dating should be reviewed.',
    statusWithinBody: 'Your current gain is inside the estimated band for this week. Keep following your individualized prenatal plan.',
    statusAboveBody: 'Your current gain is above the estimated band for this week. Review trends with your clinician, especially if gain is sudden or accompanied by swelling or symptoms.',
    categoryUnderweight: 'Underweight',
    categoryNormal: 'Normal BMI',
    categoryOverweight: 'Overweight',
    categoryObesity: 'Obesity',
    totalGainSuffix: 'total gain',
    perWeekSuffix: 'per week',
    chartLowLabel: 'Lower band',
    chartHighLabel: 'Upper band',
    chartCurrentLabel: 'Current',
  },
};

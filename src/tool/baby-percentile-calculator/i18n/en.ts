import type { BabyPercentileCalculatorLocaleContent } from '../index';

export const content: BabyPercentileCalculatorLocaleContent = {
  slug: 'baby-weight-height-percentile',
  title: 'WHO Percentile Calculator for Babies',
  description: 'Calculate your baby\'s weight, height and BMI percentile using WHO growth charts (0-5 years).',
  ui: {
    labelMeasurements: 'Measurement Data',
    labelSex: 'Baby\'s sex',
    sexBoy: 'Boy',
    sexGirl: 'Girl',
    unitMonths: 'Months only',
    unitYearsMonths: 'Years + months',
    labelWeight: 'Weight (kg)',
    labelHeight: 'Height (cm)',
    btnAddHistory: 'Add to history',
    btnClearHistory: 'Clear data',
    labelDashboard: 'Growth Dashboard',
    labelWeight2: 'Weight',
    labelHeight2: 'Height',
    labelBMI: 'BMI',
    labelCalculating: 'Calculating...',
    disclaimer: 'Percentiles are a statistical tool only. Always consult your pediatrician to interpret results.',
    labelLowRange: 'Low range',
    labelLowNormal: 'Low normal',
    labelNormal: 'Normal',
    labelHighNormal: 'High normal',
    labelHighRange: 'High range',
    alertOutOfRange: 'Value outside P3-P97 range. Please consult your pediatrician.',
    labelMonths: 'Months',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO Percentile Calculator: Guide to Understanding Your Baby\'s Growth',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 key points for interpreting your baby\'s percentiles',
      items: [
        'No single percentile defines your baby\'s health: the growth trend over time is what matters.',
        'Percentiles between P3 and P97 are considered within the statistical normal range.',
        'BMI in babies follows its own curves and should not be compared with adult reference values.',
        'WHO charts are based on babies raised in optimal conditions, including exclusive breastfeeding in the first months.',
        'Always share growth records with your paediatrician for proper clinical interpretation.',
      ],
    },
    {
      type: 'title',
      text: 'How to measure your baby correctly',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Weigh the baby without clothes and on the same scale whenever possible.',
        'Measure length lying down (recumbent) until 24 months.',
        'From 2 years of age, measure height in a standing position.',
        'Take measurements at the same time of day for greater consistency.',
      ],
    },
    {
      type: 'tip',
      html: 'A percentile below P3 does not automatically indicate a health problem. The most important thing is to observe whether the growth curve maintains its trend over time.',
    },
    {
      type: 'title',
      text: 'Interpreting percentiles',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentile', 'Interpretation', 'Recommended action'],
      rows: [
        ['P97 or above', 'High range', 'Discuss with the paediatrician at the next visit'],
        ['P85 to P97', 'High normal', 'Routine follow-up'],
        ['P15 to P85', 'Normal', 'No special action required'],
        ['P3 to P15', 'Low normal', 'Routine follow-up'],
        ['P3 or below', 'Low range', 'Consult the paediatrician'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs Orbegozo Charts',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO Charts',
          description: 'International standard based on babies from 6 countries raised in optimal conditions.',
          points: [
            'Validated international standard',
            'Based on babies from 6 countries in optimal conditions',
            'Up to date with current scientific support',
            'May not reflect local genetic variations',
          ],
        },
        {
          title: 'Orbegozo Charts',
          description: 'Charts adapted to the Spanish population, widely used in previous decades.',
          points: [
            'Adapted to the Spanish population',
            'Widely used in Spain in previous decades',
            'Based on older reference population',
            'Lower international adoption',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 years', label: 'Reference standard' },
        { value: 'Growth trend', label: 'Key variable' },
        { value: 'LMS parameters', label: 'Technical precision' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Number of standard deviations a value is from the mean of the reference population. A Z-Score of 0 is equivalent to the 50th percentile.',
        },
        {
          term: 'Harmony',
          definition: 'Appropriate proportion between weight and height. A baby may have a low weight percentile but still be harmonious if their height percentile is similarly low.',
        },
        {
          term: 'Anthropometry',
          definition: 'Set of body measurements (weight, height, head circumference, BMI) used to evaluate growth and nutritional status.',
        },
        {
          term: 'LMS parameters',
          definition: 'Statistical method (L=Box-Cox, M=median, S=coefficient of variation) used by the WHO to build percentile tables and convert any measurement into a Z-Score.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'What does the 50th percentile mean?',
      answer: 'The 50th percentile means the baby is exactly at the median: half of babies the same age and sex weigh or measure more, and half weigh or measure less. It does not mean it is the ideal value, just the central value of the distribution.',
    },
    {
      question: 'Is a low percentile a sign of a problem?',
      answer: 'Not necessarily. A low percentile (for example P10) can be perfectly normal if it remains stable over time. The growth trend is what matters, not an isolated value. Always consult your pediatrician.',
    },
    {
      question: 'Which growth charts does this calculator use?',
      answer: 'This calculator uses the WHO Child Growth Standards for children aged 0 to 5 years, based on the Multicentre Growth Reference Study (MGRS).',
    },
    {
      question: 'What is BMI in babies?',
      answer: 'Body Mass Index (BMI) in babies is the ratio of weight to height squared. Baby BMI percentiles differ from adult ones and must be interpreted using age- and sex-specific charts.',
    },
    {
      question: 'How often should I measure my baby?',
      answer: 'In the first months, the pediatrician usually monitors growth at each visit. At home you can record weight and height monthly to observe the growth trend.',
    },
  ],
  bibliography: [
    {
      name: 'WHO Child Growth Standards: Methods and development',
      url: 'https://www.who.int/publications/i/item/924154693X',
    },
    {
      name: 'WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age',
      url: 'https://www.who.int/tools/child-growth-standards/standards',
    },
    {
      name: 'Comparison of the WHO Child Growth Standards and the CDC 2000 Growth Charts - de Onis M et al.',
      url: 'https://doi.org/10.1093/jn/137.1.144S',
    },
  ],
  howTo: [
    {
      name: 'Select the baby\'s sex',
      text: 'Choose boy or girl to apply the corresponding WHO charts.',
    },
    {
      name: 'Enter the age',
      text: 'Use the slider or arrows to set the age in months (0-60 months).',
    },
    {
      name: 'Enter weight and height',
      text: 'Type the weight in kilograms and height in centimetres.',
    },
    {
      name: 'Check the percentiles',
      text: 'Weight, height and BMI percentiles are calculated automatically using WHO charts.',
    },
  ],
  schemas: [],
};

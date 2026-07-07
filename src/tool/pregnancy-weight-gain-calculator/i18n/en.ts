import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Pregnancy Weight Gain Calculator';
export const description = 'Estimate a healthy pregnancy weight gain range by gestational week using IOM and ACOG prenatal weight gain guidance.';

export const faq = [
  {
    question: 'How much weight should I gain during pregnancy?',
    answer: 'It depends on your pre-pregnancy BMI. IOM guidelines recommend 12.5-18 kg (28-40 lb) for underweight women, 11.5-16 kg (25-35 lb) for normal BMI, 7-11.5 kg (15-25 lb) for overweight, and 5-9 kg (11-20 lb) for obesity in singleton pregnancies. Always confirm your personal target with your prenatal provider.',
  },
  {
    question: 'Does twin pregnancy use the same weight gain guidelines?',
    answer: 'No. Twin pregnancies have higher targets across all BMI categories. For normal BMI, the recommended range is 17-25 kg (37-54 lb). For overweight, it is 14-23 kg (31-50 lb), and for obesity, 11-19 kg (25-42 lb). There is no established IOM range for underweight women with twins, so clinical teams individualize care.',
  },
  {
    question: 'Why does my expected weight gain change so little in the first trimester?',
    answer: 'IOM guidance expects very modest total gain in the first trimester - about 0.5 to 2 kg - because the fetus, placenta, and amniotic fluid are still very small. Steady weekly gain of 0.17 to 0.58 kg (depending on BMI) then begins in the second trimester.',
  },
  {
    question: 'I am losing weight in the first trimester due to nausea. Should I be worried?',
    answer: 'Mild weight loss in the first trimester is common due to nausea and food aversions. As long as you can stay hydrated and are not losing more than a few kilograms, this is usually not a concern. If vomiting is severe, persistent, or causing dehydration, contact your provider - this may be hyperemesis gravidarum, which requires treatment.',
  },
  {
    question: 'What is the ideal rate of weight gain per week?',
    answer: 'After week 13, weekly gain targets are: 0.44-0.58 kg for underweight, 0.35-0.50 kg for normal BMI, 0.23-0.33 kg for overweight, and 0.17-0.27 kg for obesity. These are averages - actual gain fluctuates week to week due to fluid, food timing, and other factors.',
  },
  {
    question: 'Is it safe to exercise to control weight gain during pregnancy?',
    answer: 'Yes, for most women with uncomplicated pregnancies. ACOG recommends at least 150 minutes of moderate-intensity aerobic activity per week. Exercise helps maintain healthy weight gain, reduces the risk of gestational diabetes, and improves mood and sleep. Always discuss your specific exercise plan with your care team, especially if you have any pregnancy complications.',
  },
  {
    question: 'How quickly will I lose the pregnancy weight after delivery?',
    answer: 'Most women lose about 4.5-5.5 kg immediately after birth (baby, placenta, and amniotic fluid). Additional fluid loss occurs in the first week. Returning to pre-pregnancy weight typically takes 6 to 12 months with healthy diet and gradual exercise. Breastfeeding can help, as it uses approximately 300-500 extra kcal per day.',
  },
  {
    question: 'Can this calculator diagnose a pregnancy problem?',
    answer: 'No. This is an educational estimate based on population-level guidelines. It cannot assess fetal growth, placental function, blood pressure, blood sugar, or any medical symptom. Sudden weight changes, swelling, persistent vomiting, or any concern should always be discussed with an obstetrician, midwife, or qualified prenatal clinician.',
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
    {
      type: 'summary',
      title: 'Key facts about pregnancy weight gain',
      items: [
        'Your recommended total weight gain depends entirely on your pre-pregnancy BMI, not on a one-size-fits-all number.',
        'IOM guidelines set ranges from 11 to 20 lb for obesity up to 28 to 40 lb for underweight women in singleton pregnancies.',
        'Weight gain is not linear: the first trimester expects only 0.5 to 2 kg total, then a steadier weekly pace begins.',
        'Twin pregnancies carry higher targets across all BMI categories.',
        'This calculator is an educational tool - always discuss your personal targets with your prenatal care team.',
      ],
    },
    {
      type: 'title',
      text: 'Pregnancy Weight Gain Calculator: Understanding Your Prenatal Growth Curve',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gaining the right amount of weight during pregnancy is one of the most important factors for both maternal health and fetal development. Too little weight gain raises the risk of preterm birth, low birth weight, and intrauterine growth restriction. Too much gain is associated with gestational diabetes, cesarean delivery, postpartum weight retention, and macrosomia. This calculator uses established <strong>IOM (Institute of Medicine)</strong> and <strong>ACOG (American College of Obstetricians and Gynecologists)</strong> guidelines to plot your personalized week-by-week gain curve.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 weeks', label: 'Duration of a full-term pregnancy' },
        { value: '4 categories', label: 'BMI-based gain ranges per IOM' },
        { value: '±0.5 kg/wk', label: 'Typical second trimester pace' },
      ],
    },
    {
      type: 'title',
      text: 'How the calculator works',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'You enter your height and pre-pregnancy weight so the tool can calculate your pre-pregnancy BMI.',
        'Your BMI is classified into one of four IOM categories: underweight, normal, overweight, or obesity.',
        'Each category maps to a recommended total gain range and a weekly pace for the second and third trimesters.',
        'The calculator also accepts current weight and gestational week to plot where you are relative to the estimated band.',
        'Singleton and twin pregnancies use separate gain targets because fetal and placental demands differ significantly.',
      ],
    },
    {
      type: 'title',
      text: 'IOM weight gain recommendations by pre-pregnancy BMI',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Pre-pregnancy BMI', 'Category', 'Singleton total gain', 'Twin total gain', 'Weekly pace (wks 14-40)'],
      rows: [
        ['< 18.5', 'Underweight', '12.5-18 kg / 28-40 lb', 'No established IOM range', '0.44-0.58 kg'],
        ['18.5-24.9', 'Normal weight', '11.5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0.35-0.50 kg'],
        ['25.0-29.9', 'Overweight', '7-11.5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0.23-0.33 kg'],
        ['≥ 30.0', 'Obesity', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0.17-0.27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Important:</strong> These are population-level screening ranges. Your provider may set a personalized target based on your nutritional history, previous pregnancies, fetal growth scans, or medical conditions. Always follow your clinician\'s individual guidance.',
    },
    {
      type: 'title',
      text: 'Weight gain trimester by trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'First trimester (weeks 1 to 13)',
          description: 'Modest gain is expected. Many women gain very little or even lose weight due to nausea.',
          points: [
            'IOM target: approximately 0.5 to 2 kg (1 to 4.4 lb) total',
            'Nausea and food aversions are common and may limit intake',
            'The embryo and placenta account for very little mass at this stage',
            'Focus on quality rather than quantity of food',
          ],
        },
        {
          title: 'Second trimester (weeks 14 to 26)',
          description: 'The period of steadiest weekly gain. Appetite typically improves after nausea subsides.',
          points: [
            'Weekly pace: roughly 0.23 to 0.58 kg depending on BMI category',
            'The fetus grows rapidly in length and organ development',
            'Plasma volume increases, contributing to weight',
            'Iron and calcium needs rise significantly',
          ],
        },
        {
          title: 'Third trimester (weeks 27 to 40)',
          description: 'Weight gain continues at a similar pace to the second trimester, then may slow near term.',
          points: [
            'Fetal fat deposition increases substantially from week 28',
            'Amniotic fluid volume peaks around weeks 34-36',
            'Swelling and fluid retention can temporarily inflate readings',
            'Some women gain little in the final 1 to 2 weeks before delivery',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Where does the weight actually go?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Component', 'Approximate weight at term'],
      rows: [
        ['Baby', '3.0-3.5 kg / 6.6-7.7 lb'],
        ['Placenta', '0.7 kg / 1.5 lb'],
        ['Amniotic fluid', '0.8 kg / 1.8 lb'],
        ['Uterus (growth)', '0.9 kg / 2 lb'],
        ['Breast tissue', '0.5 kg / 1.1 lb'],
        ['Blood volume increase', '1.2-1.5 kg / 2.6-3.3 lb'],
        ['Extracellular fluid', '1.5 kg / 3.3 lb'],
        ['Maternal fat and protein stores', '3.0-4.0 kg / 6.6-8.8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'As this breakdown shows, the bulk of weight gained in a healthy pregnancy is functional tissue - fluid, blood, fetus, placenta, and uterus - not simply fat. Understanding this helps contextualize why adequate gain is necessary even for women who are overweight before pregnancy.',
    },
    {
      type: 'title',
      text: 'Nutrition tips to support healthy weight gain',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Add roughly 340 kcal per day in the second trimester and 450 kcal per day in the third trimester above your pre-pregnancy needs.',
        'Prioritize protein: aim for at least 70-80 g per day to support fetal tissue growth and maternal blood volume expansion.',
        'Include iron-rich foods (lean meat, lentils, fortified cereals) to prevent anemia, which is more common in pregnancy.',
        'Calcium needs increase to 1,000 mg per day - dairy, fortified plant milks, almonds, and leafy greens are good sources.',
        'Omega-3 fatty acids from fatty fish (2 servings per week) or algae-based supplements support fetal brain development.',
        'Folic acid (400-600 mcg daily) reduces neural tube defect risk, especially in the first trimester.',
        'Stay well-hydrated - aim for about 2-3 liters of fluid daily, more in hot weather or if exercising.',
        'Limit ultra-processed foods, added sugars, and trans fats, which contribute to excess gestational weight gain.',
      ],
    },
    {
      type: 'title',
      text: 'Physical activity and weight management during pregnancy',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG recommends at least <strong>150 minutes per week</strong> of moderate-intensity aerobic activity for women with uncomplicated pregnancies. Regular exercise supports healthy weight gain, reduces the risk of gestational diabetes and preeclampsia, improves sleep, and eases back pain. Walking, swimming, prenatal yoga, and stationary cycling are well-tolerated throughout pregnancy. Always discuss your exercise plan with your provider before starting or continuing intense activity.',
    },
    {
      type: 'title',
      text: 'Warning signs related to weight changes in pregnancy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sudden weight gain of more than 1 kg in a single week, especially after week 20, may indicate fluid retention related to preeclampsia.',
        'Rapid swelling of the hands, face, or ankles combined with headache or visual changes requires immediate medical attention.',
        'Persistent weight loss beyond the first trimester, or an inability to keep food or fluids down, may indicate hyperemesis gravidarum.',
        'Very slow or stalled weight gain despite adequate intake may warrant a fetal growth scan to assess intrauterine growth restriction.',
        'Any unexplained weight change should be discussed with an obstetrician or midwife rather than self-managed.',
      ],
    },
    {
      type: 'title',
      text: 'Singleton vs. twin pregnancies: key differences',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Singleton pregnancy',
          description: 'One fetus, one placenta. The most common scenario with well-established IOM targets.',
          points: [
            'Total gain: 5 to 18 kg depending on pre-pregnancy BMI',
            'Steady weekly pace of 0.17 to 0.58 kg from week 14',
            'Lower caloric surplus needed (340-450 kcal/day)',
            'Preterm birth rate: approximately 10%',
          ],
        },
        {
          title: 'Twin pregnancy',
          description: 'Two fetuses, typically higher demands on all fronts. Targets are higher across all BMI categories.',
          points: [
            'Total gain: 11 to 25 kg depending on pre-pregnancy BMI',
            'Higher weekly pace especially in the second trimester',
            'Greater caloric and protein requirements',
            'Clinical teams individualize targets more closely',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Frequently misunderstood aspects of prenatal weight gain',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Weight gain is not the same as fat gain. Most gained weight is blood, fluid, placenta, and baby - not stored fat.',
        'Eating for two does not mean doubling your intake. The extra caloric need in the second trimester is roughly equivalent to a glass of milk and a banana.',
        'Being above the recommended range does not automatically mean you or your baby are at risk - ranges are statistical guidelines, not absolute thresholds.',
        'Women with obesity do need to gain weight during pregnancy. A net gain of 5 to 9 kg is still recommended by IOM.',
        'The scale is not the most important measure of a healthy pregnancy - fetal growth, blood pressure, blood sugar, and clinical assessments matter more.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Body Mass Index)',
          definition: 'A ratio of weight to height squared used to classify body weight categories. In prenatal care, pre-pregnancy BMI determines the appropriate weight gain target range.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Now the National Academy of Medicine. Published the landmark 2009 guidelines on gestational weight gain that are widely used by clinicians worldwide.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'The leading US professional body for obstetric and gynecological care. Endorses IOM weight gain guidelines and provides additional clinical guidance.',
        },
        {
          term: 'Gestational age',
          definition: 'The age of the pregnancy measured in weeks from the first day of the last menstrual period. A full-term pregnancy is typically 39 to 40 weeks.',
        },
        {
          term: 'Macrosomia',
          definition: 'A condition where the baby grows larger than expected, typically defined as a birth weight above 4 kg. Associated with excessive gestational weight gain and gestational diabetes.',
        },
        {
          term: 'Intrauterine growth restriction (IUGR)',
          definition: 'A condition where the fetus grows more slowly than expected. Can be related to inadequate weight gain, placental issues, or other maternal health factors.',
        },
        {
          term: 'Preeclampsia',
          definition: 'A pregnancy complication marked by high blood pressure and signs of damage to other organ systems. Sudden rapid weight gain from fluid retention is one potential warning sign.',
        },
        {
          term: 'Hyperemesis gravidarum',
          definition: 'Severe and persistent nausea and vomiting during pregnancy, beyond typical morning sickness, that can lead to weight loss and dehydration requiring medical treatment.',
        },
      ],
    },
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

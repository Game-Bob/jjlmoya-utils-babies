import type { PregnancyCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'pregnancy-weeks-calculator';
const title = 'Pregnancy Weeks Calculator';
const description = 'Calculate exactly which week of pregnancy you are in, your trimester, and your estimated due date.';
const faq = [
  {
    question: 'How is the pregnancy week calculated?',
    answer: 'It is counted from the first day of your last period. 280 days are added to that date to get the estimated due date. If your cycle differs from 28 days, the calculation adjusts automatically.',
  },
  {
    question: 'What is the difference between LMP and conception date?',
    answer: 'LMP (Last Menstrual Period) is the standard method used by doctors. The conception date is more accurate if you know it, as it avoids the 14-day ovulation estimate. Both methods give very similar results for regular cycles.',
  },
  {
    question: 'Why is my doctor\'s due date different from this calculator?',
    answer: 'Your doctor may have corrected the date based on a first-trimester ultrasound, which is the most accurate method. Irregular cycles can also justify differences.',
  },
  {
    question: 'When does the second trimester start?',
    answer: 'The second trimester starts at week 13 and ends at the end of week 26. Most mothers feel more energetic during this period and the baby bump becomes visible.',
  },
  {
    question: 'What is the EDD and how accurate is it?',
    answer: 'The Estimated Due Date (EDD) is a statistical estimate. Only 3–5% of babies are born exactly on that day. Most babies are born between weeks 38 and 42.',
  },
];
const howTo = [
  {
    name: 'Select the calculation method',
    text: 'Choose whether to calculate from your last menstrual period or from your conception date.',
  },
  {
    name: 'Enter the date',
    text: 'Select the day, month and year using the dropdown menus.',
  },
  {
    name: 'Adjust cycle length',
    text: 'If your cycle is not 28 days, move the slider to get a more accurate estimate.',
  },
  {
    name: 'Check the week and trimester',
    text: 'The result shows the exact week, trimester and estimated due date.',
  },
  {
    name: 'Explore weekly milestones',
    text: 'Discover the baby\'s size, biological changes and personalised tips for each week.',
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

export const content: PregnancyCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    btnFUR: 'Last Period',
    btnConception: 'Conception Date',
    labelPartnerMode: 'Partner mode',
    labelFUR: 'Last menstrual period',
    labelConception: 'Conception date',
    labelCycleLength: 'Cycle length',
    unitDays: 'days',
    labelWeeks: 'Weeks',
    labelTrimester: 'Trimester',
    labelEDD: 'Estimated Due Date',
    eddPlaceholder: 'Enter your date',
    eddNote: 'Only 3–5% of babies are born on this exact day',
    btnCalendar: 'Save to Calendar',
    labelFruits: 'Fruits',
    labelGeek: 'Geek',
    labelSweets: 'Sweets',
    labelBioLabel: 'Biological development',
    labelMomKey: 'Your body today',
    labelPartnerKey: 'How to support her today',
    labelNormalMolestias: 'Normal discomforts',
    labelAlert: 'Consult if you have...',
    labelTimeline: 'Timeline',
    labelStartHere: 'Start here',
    labelStartBody: 'Select the date of your last period to discover which week you are in.',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    {
      type: 'summary',
      title: 'Key takeaways',
      items: [
        'Calculate your pregnancy week from your LMP or your conception date.',
        'The EDD is an estimate — only 3–5% of babies are born on that exact day.',
        'Each trimester has its own biological milestones and typical discomforts.',
        'Contact your doctor or midwife immediately if you notice any warning signs.',
        'Partner mode shows how to support your partner week by week.',
      ],
    },
    {
      type: 'title',
      text: 'Pregnancy Weeks Calculator: More Than Just a Due Date',
      level: 2,
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 weeks', label: 'Average pregnancy duration' },
        { value: '280 days', label: 'Days of gestation' },
        { value: '±14 days', label: 'EDD margin of error' },
      ],
    },
    {
      type: 'title',
      text: 'How is the pregnancy week calculated?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'The most common method uses the first day of your last menstrual period (LMP) as the starting point.',
        '280 days are added to the LMP to obtain the estimated due date (EDD).',
        'If your cycle differs from 28 days, the EDD is adjusted automatically.',
        'The conception method subtracts 14 days from the count to approximate the EDD from fertilisation.',
        'A first-trimester ultrasound can correct gestational age with greater precision.',
      ],
    },
    {
      type: 'tip',
      html: 'If your doctor gives a different date from the one calculated here, it is most likely due to an irregular cycle or a first-trimester ultrasound correction. Both dates are valid.',
    },
    {
      type: 'title',
      text: 'The three trimesters of pregnancy',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Trimester', 'Weeks', 'Key milestone', 'Mother\'s body'],
      rows: [
        ['1st', '1 – 12', 'Organ formation', 'Nausea, fatigue, implantation'],
        ['2nd', '13 – 26', 'Foetal movements, morphology scan', 'Energy restored, bump visible'],
        ['3rd', '27 – 40', 'Lung maturation, engagement', 'Pelvic pressure, birth preparation'],
      ],
    },
    {
      type: 'title',
      text: 'Biological milestones week by week',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Week', 'Approx. size', 'Biological milestone', 'What the mother feels'],
      rows: [
        ['4', '~1 mm', 'Implantation in the endometrium', 'Light spotting possible'],
        ['8', '~18 mm', 'Heart beats 150–170 times/min', 'Nausea at its peak'],
        ['12', '~55 mm', 'Main organs formed', 'Miscarriage risk drops sharply'],
        ['20', '~25 cm', 'Baby can hear voices clearly', 'Morphology ultrasound'],
        ['28', '~37 cm', 'Sleep and wake cycles', 'Third trimester begins'],
        ['36', '~47 cm', 'Lungs nearly mature', 'Head engages in pelvis'],
        ['40', '~50 cm', 'Ready to be born', 'EDD: estimated due date'],
      ],
    },
    {
      type: 'title',
      text: 'Common symptoms by trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'First trimester (wks 1–12)',
          description: 'The phase of greatest hormonal change.',
          points: [
            'Nausea and vomiting, especially in the mornings',
            'Extreme fatigue and drowsiness',
            'Breast tenderness',
            'Frequent urination',
            'Mood swings',
          ],
        },
        {
          title: 'Second trimester (wks 13–26)',
          description: 'The trimester most mothers feel best in.',
          points: [
            'Nausea subsides',
            'Energy levels improve',
            'Visible bump from around week 18–20',
            'First foetal movements (wks 18–22)',
            'Increasing heartburn',
          ],
        },
        {
          title: 'Third trimester (wks 27–40)',
          description: 'Preparation for birth.',
          points: [
            'Pelvic pressure and back pain',
            'Braxton Hicks contractions',
            'Swollen feet and ankles',
            'Difficulty sleeping',
            'Baby engagement (wks 36–38)',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Warning signs that require immediate medical attention',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Heavy vaginal bleeding at any week: seek medical attention immediately.',
        'Regular contractions before week 37: risk of preterm labour.',
        'Loss of amniotic fluid: ruptured membranes — go to the emergency room.',
        'Severe headache with blurred vision: possible pre-eclampsia.',
        'No foetal movements after week 20: an urgent warning sign.',
      ],
    },
    {
      type: 'title',
      text: 'Essential medical appointments',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Week 8–12: first ultrasound and first-trimester blood tests.',
        'Week 12: first-trimester combined screening (nuchal translucency + blood panel).',
        'Week 18–22: morphology scan (20-week scan).',
        'Week 24–28: glucose tolerance test (GCT / O\'Sullivan).',
        'Week 36: growth scan and Group B Streptococcus culture.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'LMP (Last Menstrual Period)',
          definition: 'The first day of your last period. Used as the reference point for calculating gestational age.',
        },
        {
          term: 'EDD (Estimated Due Date)',
          definition: 'The expected delivery date, calculated by adding 280 days to the LMP.',
        },
        {
          term: 'Amniotic Fluid',
          definition: 'The fluid surrounding the baby in the uterus. It protects the foetus, regulates temperature and allows movement.',
        },
        {
          term: 'Mucus Plug',
          definition: 'A thick secretion that seals the cervix during pregnancy. Losing it indicates labour is approaching.',
        },
        {
          term: 'Pre-eclampsia',
          definition: 'A pregnancy complication characterised by high blood pressure and organ damage. Requires urgent medical attention.',
        },
      ],
    },
  ],
  faq,
  bibliographyTitle: "References",
  bibliography: [
    {
      name: 'WHO – Antenatal care',
      url: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality',
    },
    {
      name: 'ACOG – Methods for Estimating the Due Date',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date',
    },
    {
      name: 'UpToDate – Prenatal care: Initial assessment',
      url: 'https://www.uptodate.com/contents/prenatal-care-initial-assessment',
    },
    {
      name: 'Naegele\'s rule – Dugoff L. et al., Obstetrics & Gynecology',
      url: 'https://journals.lww.com/greenjournal/fulltext/2017/05000/methods_for_estimating_the_due_date.43.aspx',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

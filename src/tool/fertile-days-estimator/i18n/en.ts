import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'fertile-days-calculator';
const title = 'Fertile Days Calculator';
const description = 'Calculate your fertile window and ovulation date based on your menstrual cycle.';
const faq = [
  {
    question: 'How is the fertile window calculated?',
    answer: 'The fertile window is calculated from the first day of your last period. Ovulation occurs approximately 14 days before the start of the next cycle. Fertile days include the 5 days before ovulation and the day of ovulation itself.',
  },
  {
    question: 'How accurate is this calculator?',
    answer: 'The calculator is an estimate based on the standard 28-day cycle model (or whichever you specify). It is a guide and may not reflect individual variations. For greater accuracy, combine it with basal body temperature tracking or ovulation tests.',
  },
  {
    question: 'What if my cycle is irregular?',
    answer: 'If your cycles vary greatly from month to month, the calculation may be less accurate. In that case, basal body temperature tracking or LH tests are more reliable methods for identifying ovulation.',
  },
  {
    question: 'How long does the egg survive after ovulation?',
    answer: 'The egg has a lifespan of 12 to 24 hours. However, sperm can survive up to 5 days in the female reproductive tract, which is why the actual fertile window spans several days before ovulation.',
  },
];
const howTo = [
  {
    name: 'Select the first day of your last period',
    text: 'Click on the calendar day that corresponds to the start of your last menstruation.',
  },
  {
    name: 'Adjust your cycle length',
    text: 'Move the slider to indicate how many days your menstrual cycle usually lasts.',
  },
  {
    name: 'Check the results',
    text: 'The calculator automatically shows the estimated ovulation date, fertile window and the start of the next period.',
  },
  {
    name: 'Navigate the calendar',
    text: 'Use the navigation arrows to see the marked days in previous or future months.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'When did your last period start?',
    step1Desc: 'Select the first day of your last menstrual period on the calendar.',
    pulseHint: 'Click on a day in the calendar to continue',
    step1Indicator: 'Start Date',
    step2Indicator: 'Your Calendar',
    sidebarTitle: 'Your Cycle',
    sidebarDesc: 'Customise the results by adjusting your cycle length.',
    labelCycleLength: 'Cycle Length',
    unitDays: 'days',
    labelOvulation: 'Next Ovulation',
    labelFertileWindow: 'Fertile Window',
    labelNextPeriod: 'Next Period',
    legendSelection: 'Your selection',
    legendPeriod: 'Period',
    legendFertile: 'Fertile',
    legendOvulation: 'Ovulation',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    {
      type: 'title',
      text: 'Fertile Days Calculator: Complete Guide to Your Cycle and Ovulation',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 key facts about the fertile window',
      items: [
        'Ovulation occurs approximately 14 days before the start of the next period.',
        'The fertile window includes the 5 days before ovulation plus the day of ovulation itself.',
        'Sperm can survive up to 5 days in the female reproductive tract.',
        'Irregular cycles reduce the reliability of calendar-based calculations.',
        'Combining this tool with basal body temperature or LH tests increases accuracy.',
      ],
    },
    {
      type: 'title',
      text: 'How the fertile window calculation works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The method is based on the Ogino-Knaus rule and the standard ovulation model. With a 28-day cycle, ovulation typically occurs around day 14. The calculator identifies this point and marks the days of highest fertility around it.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 days', label: 'Before the next period' },
        { value: '5 days', label: 'Fertile window duration' },
        { value: '12-24 h', label: 'Egg lifespan' },
      ],
    },
    {
      type: 'title',
      text: 'Phases of the menstrual cycle',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Follicular phase',
          description: 'Begins with menstruation and lasts until ovulation.',
          points: [
            'Ovarian follicles mature under the influence of FSH.',
            'Lasts between 10 and 14 days in regular cycles.',
            'Oestrogen levels rise progressively.',
          ],
        },
        {
          title: 'Luteal phase',
          description: 'Begins after ovulation and ends with menstruation.',
          points: [
            'The corpus luteum produces progesterone to prepare the endometrium.',
            'Lasts approximately 14 days in normal cycles.',
            'If fertilisation does not occur, the corpus luteum degenerates.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Although the calculator uses a standard model, menstrual cycles can vary from month to month. For greater accuracy, combine this tool with basal body temperature tracking or ovulation tests.',
    },
    {
      type: 'title',
      text: 'Biological signs of ovulation',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Changes in cervical mucus: during fertile days it becomes clear and stretchy, similar to raw egg white.',
        'Slight rise in basal body temperature (0.2–0.4 °C) immediately after ovulation.',
        'Mild pain or discomfort on the side of the active ovary (Mittelschmerz) during ovulation.',
        'Slight increase in libido near ovulation, driven by hormonal changes.',
        'Mild bloating or feeling of abdominal fullness during fertile days.',
      ],
    },
    {
      type: 'title',
      text: 'Lifestyle and fertility',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Chronic stress can disrupt ovulation and lengthen or shorten the menstrual cycle.',
        'Body weight has a direct impact: both underweight and overweight can affect ovulation.',
        'Moderate exercise supports cycle regularity; extreme exercise can suppress it.',
        'Smoking reduces ovarian reserve and brings forward menopause by several years.',
        'A diet rich in folic acid, iron and antioxidants supports reproductive health.',
      ],
    },
    {
      type: 'title',
      text: 'Cycle monitoring methods',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Method', 'Reliability', 'Cost'],
      rows: [
        ['Calendar calculator', 'Medium', 'Free'],
        ['Basal body temperature', 'High with practice', 'Low'],
        ['Urine LH test', 'High', 'Moderate'],
        ['Digital fertility monitor', 'Very high', 'High'],
        ['Follicular ultrasound', 'Maximum', 'Clinic'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulation',
          definition: 'Release of the mature egg from the ovarian follicle, triggered by a surge in luteinising hormone (LH). It occurs once per cycle.',
        },
        {
          term: 'Fertile window',
          definition: 'The period of highest likelihood of conception, covering the 5 days before ovulation plus the day of ovulation.',
        },
        {
          term: 'Cervical mucus',
          definition: 'Secretion from the cervix whose texture varies throughout the cycle. During fertile days it becomes clear, stretchy and slippery, facilitating sperm passage.',
        },
        {
          term: 'Basal body temperature',
          definition: 'Body temperature at complete rest, measured upon waking before any activity. It rises slightly (0.2–0.4 °C) after ovulation due to the effect of progesterone.',
        },
      ],
    },
  ],
  faqTitle: "Frequently asked questions",
  faq,
  bibliographyTitle: "References",
  bibliography: [
    {
      name: 'WHO - Family Planning',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
    {
      name: 'NICE - Fertility problems: assessment and treatment',
      url: 'https://www.nice.org.uk/guidance/cg156',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

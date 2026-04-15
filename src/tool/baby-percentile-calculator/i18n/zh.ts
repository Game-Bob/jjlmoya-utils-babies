import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-growth-percentile-calculator';
const title = 'WHO婴儿成长曲线（百分位）计算器';
const description = '根据世卫组织（WHO）成长标准（0-5岁）计算宝宝的体重、身长和BMI百分位数。';
const faq = [
  {
    question: '50百分位是什么意思？',
    answer: '50百分位表示宝宝正处于中位数，即同年龄、同性别的宝宝中，有一半比这个数值重（或高），另一半比这个数值轻（或矮）。这并不代表理想值，而是分布的中心值。',
  },
  {
    question: '百分位偏低预示着有问题吗？',
    answer: '不一定。如果长期保持稳定，较低的百分位（如P10）也可能是完全正常的。重要的是成长的趋势，而非单一的数值。请务必咨询您的儿科医生。',
  },
  {
    question: '这个计算器使用什么成长图表？',
    answer: '本计算器采用世界卫生组织（WHO）针对0至5岁儿童的成长标准，该标准基于多中心生长参考研究（MGRS）。',
  },
  {
    question: '婴儿的BMI是什么？',
    answer: '婴儿的体质指数（BMI）是体重与身长平方的比值。婴儿的BMI百分位与成人不同，必须通过针对每个年龄段和性别的特定图表进行评估。',
  },
  {
    question: '我应该多频繁地为宝宝测量？',
    answer: '在最初的几个月里，儿科医生通常会在每次就诊时检查生长情况。在家里，您可以每月记录一次体重和身长，以观察成长趋势。',
  },
];
const howTo = [
  {
    name: '选择宝宝性别',
    text: '选择男孩或女孩以应用相应的WHO图表。',
  },
  {
    name: '输入年龄',
    text: '使用滑块或箭头指定年龄（月数，0-60个月）。',
  },
  {
    name: '输入体重和身长',
    text: '输入体重（公斤）和身长（厘米）。',
  },
  {
    name: '查看百分位',
    text: '系统将根据WHO图表自动计算体重、身长和BMI百分位。',
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

const appSchema: WithContext<WithContext<SoftwareApplication>> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: '测量数据',
    labelSex: '宝宝性别',
    sexBoy: '男孩',
    sexGirl: '女孩',
    unitMonths: '仅月数',
    unitYearsMonths: '岁 + 月',
    labelWeight: '体重 (kg)',
    labelHeight: '身长 (cm)',
    btnAddHistory: '添加到我的记录',
    btnClearHistory: '清除数据',
    labelDashboard: '成长看板',
    labelWeight2: '体重',
    labelHeight2: '身长',
    labelBMI: 'BMI',
    labelCalculating: '计算中...',
    disclaimer: '百分位数仅是一种统计工具。请务必咨询您的儿科医生以解读结果。',
    labelLowRange: '低范围',
    labelLowNormal: '偏低',
    labelNormal: '正常',
    labelHighNormal: '偏高',
    labelHighRange: '高范围',
    alertOutOfRange: '数值超出P3-P97范围。请咨询您的儿科医生。',
    labelMonths: '个月',
    labelYears: '岁',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO成长曲线计算器：解读宝宝成长的指南',
      level: 2,
    },
    {
      type: 'summary',
      title: '解读宝宝百分位数的5个关键点',
      items: [
        '单一的百分位数不能定义宝宝的健康状况：重要的是长期的成长趋势。',
        '处于P3到P97之间的百分位数被认为在统计学正常范围内。',
        '婴儿的BMI遵循其独特的曲线，不应与成人的参考值进行比较。',
        'WHO成长曲线基于在理想条件下生长的婴儿，包括最初几个月的纯母乳喂养。',
        '务必与您的儿科医生分享成长记录，以获得专业的临床评估。',
      ],
    },
    {
      type: 'title',
      text: '如何正确测量宝宝',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '尽可能在不穿衣服的情况下、使用同一台体重秤称重。',
        '24个月前，请在仰卧位测量身长。',
        '2岁以后，请在站立位测量身高。',
        '为了保证准确性，请在每天的同一时间进行测量。',
      ],
    },
    {
      type: 'tip',
      html: '百分位数低于P3并不一定意味着健康问题。最重要的是观察成长曲线是否在较长时间内保持稳定的趋势。',
    },
    {
      type: 'title',
      text: '百分位数的解读',
      level: 3,
    },
    {
      type: 'table',
      headers: ['百分位', '解读', '建议操作'],
      rows: [
        ['P97或更高', '高范围', '在下次就诊时咨询儿科医生'],
        ['P85至P97', '偏高', '常规随访'],
        ['P15至P85', '正常', '无需特殊操作'],
        ['P3至P15', '偏低', '常规随访'],
        ['P3或更低', '低范围', '咨询儿科医生'],
      ],
    },
    {
      type: 'title',
      text: 'WHO曲线 vs Orbegozo曲线',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO曲线',
          description: '基于6个国家在理想条件下生长的婴儿的国际标准。',
          points: [
            '经过验证的国际标准',
            '基于6个国家及理想生长条件',
            '更新及时且具有学术支撑',
            '可能无法反映当地的遗传差异',
          ],
        },
        {
          title: 'Orbegozo曲线',
          description: '针对西班牙人口调整的曲线，在过去几十年中被广泛使用。',
          points: [
            '针对西班牙人口优化',
            '曾被西班牙广泛采用',
            '基于较旧的参考人群',
            '国际化程度较低',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5岁', label: '参考标准' },
        { value: '趋势曲线', label: '核心变量' },
        { value: 'LMS参数', label: '技术精度' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z评分 (Z-Score)',
          definition: '一个数值偏离参考人群平均值的标准差次数。Z评分为0等同于第50百分位数。',
        },
        {
          term: '协调性 (Harmony)',
          definition: '体重与身长之间的比例。即使宝宝的体重百分位较低，但如果身长也以同样的比例偏低，则可视为“协调”。',
        },
        {
          term: '人体测量学 (Antropometry)',
          definition: '用于评估生长和营养状况的一系列身体测量指标（体重、身长、头围、BMI）。',
        },
        {
          term: 'LMS参数',
          definition: 'WHO用于构建百分位表并将测量值转换为Z评分的统计方法（L=Box-Cox变换，M=中位数，S=变异系数）。',
        },
      ],
    },
  ],
  faqTitle: "常见问题",
  faq,
  bibliographyTitle: "参考文献",
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
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};

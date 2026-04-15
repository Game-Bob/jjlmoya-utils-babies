import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'fertile-days-calculator';
const title = '排卵期及排卵日计算器';
const description = '根据您的月经周期计算您的育龄窗口和预计排卵日期。';
const faq = [
  {
    question: '育龄窗口是如何计算的？',
    answer: '育龄窗口是从您上次月经的第一天开始计算的。排卵通常发生在下一个周期开始前的约14天。育龄期包括排卵前的5天以及排卵日当天。',
  },
  {
    question: '这个计算器的准确性如何？',
    answer: '该计算器是基于28天标准周期模型（或您指定的周期）进行的估算。它仅供参考，可能无法反映个体的生理差异。为了获得更高的准确性，请结合基础体温监测或排卵测试进行跟踪。',
  },
  {
    question: '如果我的月经周期不规律怎么办？',
    answer: '如果您的月经周期每个月差异很大，计算的准确性可能会降低。在这种情况下，监测基础体温或使用LH排卵试纸是识别排卵更可靠的方法。',
  },
  {
    question: '排卵后卵子能存活多久？',
    answer: '卵子的寿命约为12至24小时。然而，精子在女性生殖道中可以存活长达5天，因此实际的育龄窗口涵盖了排卵前的几天。',
  },
  {
    question: '我可以使用这个计算器来避孕吗？',
    answer: '不建议将此计算器作为避孕手段。基于日历的方法有较高的失败率。请咨询您的医生或妇产科专家，选择安全且适合您的避孕方法。',
  },
];
const howTo = [
  {
    name: '选择您上次月经的第一天',
    text: '在日历上点击您上次月经开始的那一天。',
  },
  {
    name: '调整您的月经周期长度',
    text: '移动滑块以指定您的月经周期通常持续的天数。',
  },
  {
    name: '查看结果',
    text: '计算器会自动显示预计排卵日期、育龄窗口以及下次月经的开始日期。',
  },
  {
    name: '浏览日历',
    text: '使用导航箭头查看之前或之后月份中标记的日期。',
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
  inLanguage: 'zh',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: '您上次月经是什么时候开始的？',
    step1Desc: '请在日历中选择您上次月经周期的第一天。',
    pulseHint: '点击日历上的日期开始',
    step1Indicator: '开始日期',
    step2Indicator: '您的日历',
    sidebarTitle: '您的周期',
    sidebarDesc: '通过调整月经周期长度来自定义结果。',
    labelCycleLength: '周期长度',
    unitDays: '天',
    labelOvulation: '下次预计排卵日',
    labelFertileWindow: '育龄窗口（易受孕期）',
    labelNextPeriod: '下次月经日期',
    legendSelection: '您的选择',
    legendPeriod: '经期',
    legendFertile: '易受孕期',
    legendOvulation: '排卵日',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献',
  },
  seo: [
    {
      type: 'title',
      text: '排卵期计算器：排卵日、受孕期及月经周期全攻略',
      level: 2,
    },
    {
      type: 'summary',
      title: '关于易受孕期的5个核心重点',
      items: [
        '排卵通常发生在下次月经开始前的约14天。',
        '易受孕期包括排卵前的5天加上排卵日当天。',
        '精子在女性生殖道内最长可存活5天。',
        '周期不规律会降低日历计算法的可靠性。',
        '结合基础体温监测或LH测试可提高预测准确度。',
      ],
    },
    {
      type: 'title',
      text: '受孕期计算的工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本方法基于奥吉诺公式以及标准排卵模型。在28天的周期中，排卵通常发生在第14天左右。计算器会定位这一时间点，并标注出其前后生育能力最强的日子。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 天', label: '下次月经开始前' },
        { value: '6 天', label: '育龄窗口时长' },
        { value: '12-24 小时', label: '卵子寿命' },
      ],
    },
    {
      type: 'title',
      text: '月经周期的不同阶段',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '卵泡期',
          description: '从月经开始持续到排卵的一段时期。',
          points: [
            '卵巢卵泡在FSH（促卵泡激素）的作用下发育成熟。',
            '在规律周期中通常持续10至14天。',
            '雌激素水平逐渐升高。',
          ],
        },
        {
          title: '黄体期',
          description: '从排卵后开始，到下一次月经来临前结束。',
          points: [
            '黄体分泌孕酮，为子宫内膜接受受精卵做准备。',
            '在正常的周期中该阶段非常固定，约为14天。',
            '若未受精，黄体退化，随后月经来潮。',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '虽然计算器使用标准模型，但每个月的周期可能会有所不同。如需更高精准度，请配合记录基础体温或使用排卵试纸。',
    },
    {
      type: 'title',
      text: '排卵期的生理征兆',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '宫颈粘液变化：在易受孕期，粘液会变得透明且具有弹性，类似于蛋清。',
        '基础体温轻微升高：排卵后体温会立即上升（0.2-0.4°C）并保持高温。',
        '排卵痛：排卵时，在活跃的卵巢一侧可能会感到轻微阵痛或不适。',
        '性欲增强：受激素变化影响，排卵期前后性欲趋于增加。',
        '腹部胀感：在育龄期，下腹部可能会有轻微的坠胀或充实感。',
      ],
    },
    {
      type: 'title',
      text: '生活方式与生育能力',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '长期压力过大会导致排卵紊乱，进而使周期延长或缩短。',
        '体重的影响因素：体重过轻或肥胖都会直接干扰正常的排卵。',
        '适度运动有助手周期规律；而过度极端运动可能会抑制排卵。',
        '吸烟会降低卵巢储备功能，使绝经期提前数年。',
        '富含叶酸、铁和抗氧化剂的饮食能有效支持生殖系统健康。',
      ],
    },
    {
      type: 'title',
      text: '周期监测方法对比',
      level: 3,
    },
    {
      type: 'table',
      headers: ['方法', '可靠性', '成本'],
      rows: [
        ['日历计算法', '中', '免费'],
        ['基础体温监测', '高（需持续记录）', '低'],
        ['尿液LH测试', '高', '中等'],
        ['电子生育监控仪', '极高', '高'],
        ['B超卵泡监测', '最高', '需前往门诊'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '排卵',
          definition: '在促黄体生成素（LH）峰值的驱动下，成熟卵子从卵泡中释放。每个周期发生一次。',
        },
        {
          term: '育龄窗口',
          definition: '怀孕几率最高的时间段，包括排卵前的5天以及排卵日当天。',
        },
        {
          term: '宫颈粘液',
          definition: '子宫颈分泌的粘液，其质地随周期变化。在排卵期变得透明且富有弹性，有利于精子通过。',
        },
        {
          term: '基础体温',
          definition: '完全休息状态下的体温，通常在早晨醒来且未进行任何活动前测量。在排卵后受孕酮影响略微上升（0.2-0.4°C）。',
        },
      ],
    },
  ],
  faqTitle: "常见问题",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: '世卫组织 - 计划生育',
      url: 'https://www.who.int/zh/health-topics/family-planning-contraception',
    },
    {
      name: '美国产科医学院 (ACOG) - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: '中华医学会妇产科学分会',
      url: 'https://www.cma.org.cn',
    },
    {
      name: 'Wilcox AJ et al. - 性行为时机与排卵的关系 (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

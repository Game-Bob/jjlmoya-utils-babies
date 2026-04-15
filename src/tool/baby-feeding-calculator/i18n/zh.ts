import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'akachan-feeding-calculator';
const title = '婴儿喂养计算器';
const description = '根据宝宝的体重和月龄计算其需要的奶量。推荐喂养次数、每餐毫升数以及饥饿和饱腹信号。';

const faq = [
  {
    question: '新生儿需要多少奶？',
    answer: '出生后第一天，宝宝的胃只有樱桃大小，每餐只需要 5 至 7 毫升。从第五天开始，胃容量增加到 45–60 毫升，需求量也随之逐渐增加。',
  },
  {
    question: '宝宝应该多久吃一次奶？',
    answer: '新生儿每天需要 8 到 12 次喂养。到 3 个月时，间隔通常会拉开到 7–8 次，到 6 个月时每天约为 5 次。',
  },
  {
    question: '我如何知道宝宝是否吃饱了？',
    answer: '最可靠的指标包括：体重的合理增长、每天至少 5–6 次尿布排尿，以及喂完后宝宝表现出饱腹感信号。',
  },
  {
    question: '母乳和配方奶的量是一样的吗？',
    answer: '母乳喂养建议按需喂养（随要随给），无需测量奶量。配方奶的通用参考标准是每天每公斤体重 150 毫升，并根据月龄分配至喂奶次数中。',
  },
];

const howTo = [
  {
    name: '选择宝宝月龄',
    text: '选择单位（天、周、月）并使用滑块或按钮调整数值。',
  },
  {
    name: '输入宝宝体重',
    text: '使用体重滑块或按钮，以公斤为单位输入宝宝的当前体重。',
  },
  {
    name: '选择喂养方式',
    text: '在母乳、混合或配方奶中进行选择，以获取最合适的指南。',
  },
  {
    name: '查看推荐方案',
    text: '计算器将显示喂养次数、每餐毫升数以及估计的每日总量。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: '当前设置',
    labelPlan: '推荐方案',
    unitDays: '天',
    unitWeeks: '周',
    unitMonths: '个月',
    labelWeight: '宝宝体重',
    labelFeedType: '喂养方式',
    feedBreast: '母乳',
    feedMixed: '混合',
    feedFormula: '配方奶',
    labelFreeDemand: '按需喂养',
    labelMlPerFeed: '每餐毫升数',
    labelFeedsCount: '喂奶次数 / 24小时',
    labelDailyTotal: '每日总量（预估）',
    labelHunger: '饥饿信号',
    labelFullness: '饱腹信号',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献',
  },
  seo: [
    { type: 'summary', title: '总结：宝宝喂养', items: [
      '新生儿胃容量在出生第一天仅为 5–7 毫升。',
      '配方奶的通用标准是每天每公斤体重 150 毫升。',
      '母乳喂方建议按需喂养，不设固定量。',
      '喂奶频率随月龄增长而降低：6 个月内从 8–12 次降至 4–5 次。',
    ]},
    { type: 'title', text: '根据体重和月龄，我的宝宝需要多少奶？', level: 2 },
    { type: 'paragraph', html: '奶量需求在前几个月变化迅速。喂养计算器根据宝宝当前的体重和月龄，参考世卫组织（WHO）和美国儿科学会（AAP）的指南估算。' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: '1天龄（樱桃大）' },
      { value: '150 ml/kg', label: '配方奶每日参考' },
      { value: '8–12', label: '新生儿喂奶次数/天' },
    ]},
    { type: 'title', text: '按年龄划分的胃容量', level: 3 },
    { type: 'table', headers: ['年龄', '参考尺寸', '胃容量', '喂奶次数/天'], rows: [
      ['出生1天', '樱桃', '5–7 毫升', '8–12 次'],
      ['2–4天龄', '核桃', '22–27 毫升', '8–12 次'],
      ['5–30天龄', '鸡蛋', '45–60 毫升', '8–10 次'],
      ['1–3个月', '最大值', '90–120 毫升', '7–8 次'],
      ['3–6个月', '最大值', '120–150 毫升', '5–6 次'],
      ['6个月以上', '最大值', '150–180 毫升', '4–5 次'],
    ]},
    { type: 'tip', html: '判断喂养充分的可靠指标是尿布排尿次数：自第 5 天起，每天有 5 到 6 次表示水分充足。' },
    { type: 'title', text: '母乳喂养 vs 配方奶', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '母乳喂养', description: '自然的按需喂养。', points: ['无固定时间', '包含活性抗体', '成分动态变化', '难以量化总量'] },
      { title: '配方奶', description: '按计算量进行的计划喂养。', points: ['每 3–4 小时一次', '成分稳定', '易于控制摄入量', '需要无菌制备'] },
    ]},
    { type: 'list', items: [
      '合理的体重增长：第一个月每周 150–200 克',
      '每天至少 5–6 次尿布排尿',
      '喂奶后宝宝表现安静平稳',
      '尿液清亮或呈淡黄色',
    ]},
  ],
  faqTitle: "常见问题",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: '世卫组织 - 婴幼儿喂养',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: '美国儿科学会 - 母乳喂养指南',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: '国际母乳会',
      url: 'https://www.llli.org',
    },
    {
      name: '中国营养学会 - 婴幼儿喂养指南',
      url: 'https://www.cnsoc.org',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-size-converter';
const title = '婴儿衣服尺码转换器';
const description = '在 Zara、H&M、Primark、Carter\'s、Kiabi、Mango 和 Mayoral 等品牌之间转换婴儿衣服尺码。输入身高和体重，即可获得每个品牌的精确尺码建议。';
const faq = [
  {
    question: '我如何知道我的宝宝适合什么尺码的衣服？',
    answer: '最可靠的方法是将宝宝的身高作为主要参考。欧洲尺码（50、56、62...）直接对应于以厘米为单位的身高。在转换器中输入宝宝的身高和体重，即可获得每个品牌推荐的尺码。',
  },
  {
    question: '为什么不同品牌的尺码差异如此之大？',
    answer: '每个品牌都有自己的剪裁版型。H&M 和 Primark 的尺码通常偏大，而 Carter\'s 和 Mayoral 的剪裁则更加修身。请始终参考宝宝的实际测量数据，而不仅仅是年龄。',
  },
  {
    question: '如果宝宝处于两个尺码之间，该选哪一个？',
    answer: '请始终选择较大的尺码。婴儿成长速度非常快，较大的尺码可以确保更长的穿着时间以及更好的舒适度。',
  },
  {
    question: '英寸单位的尺码计算方式一样吗？',
    answer: '美国品牌（如 Carter\'s）使用英寸和重量作为参考。如果您激活了英制系统，转换器会自动为您显示对应的换算结果。',
  },
];
const howTo = [
  {
    name: '输入宝宝身高',
    text: '使用滑块或按钮以厘米（cm）或英寸（in）为单位调整宝宝的当前身高。',
  },
  {
    name: '输入宝宝体重',
    text: '调整以公斤（kg）或磅（lb）为单位的体重以精细化结果，因为某些品牌会将体重作为补充参考。',
  },
  {
    name: '选择品牌',
    text: '选择服装品牌以查看建议尺码及衣物的预计测量数据。',
  },
  {
    name: '查看对照结果',
    text: '在右侧面板中，您可以一眼看全所有可用品牌的等效尺码。',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: '宝宝测量数据',
    labelResults: '预计等效尺码',
    labelHeight: '宝宝身高',
    labelWeight: '宝宝当前体重',
    labelPresets: '按典型月龄预设',
    unitMetric: '公制 (cm/kg)',
    unitImperial: '英制 (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: '品牌与版型',
    labelSuggested: '建议尺码',
    labelChest: '胸围',
    labelWaist: '腰围',
    labelGarmentMeasures: '衣物预计测量数据',
    fitRegular: '标准版型',
    fitLarge: '宽松版型',
    fitSmall: '贴身版型',
    tipTitle: '专家建议',
    tipText: '婴儿的成长处于快速爆发期。如果测量结果处于尺码的上限边缘，请务必选择较大的尺码，以确保穿着寿命和宝宝的舒适度。',
    shareAriaLabel: '分享尺码',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献',
  },
  seo: [
    { type: 'title', text: '婴儿尺码指南：Zara、H&M、Primark 及国际品牌对照', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: '月均增长参考' },
      { value: '3 个月', label: '每个尺码的穿着时长' },
      { value: '95%', label: '按身高计算的可靠性' },
    ]},
    { type: 'tip', html: '始终使用身高作为选择尺码的主要参考，而非年龄。同月龄的两个宝宝身高差异可达8-10厘米，这意味着需要跨越一个完整的尺码。' },
    { type: 'title', text: '按年龄、身高和体重划分的尺码', level: 3 },
    { type: 'table', headers: ['大概月龄', '身高 (cm)', '体重 (kg)', '常用尺码', '预计时长'], rows: [
      ['新生儿', '50–56', '3–4.5', '50 / RN', '4–6 周'],
      ['1–3 个月', '56–62', '4.5–6', '56–62', '6–8 周'],
      ['3–6 个月', '62–68', '6–8', '62–68', '6–8 周'],
      ['6–9 个月', '68–74', '8–9.5', '68–74', '6–8 周'],
      ['9–12 个月', '74–80', '9.5–11', '74–80', '6–8 周'],
      ['12–18 个月', '80–86', '11–13', '80–86', '3–4 个月'],
      ['18–24 个月', '86–92', '13–15', '86–92', '3–4 个月'],
    ]},
    { type: 'title', text: '偏大品牌 vs 偏小品牌', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: '尺码偏大 (建议选小一码)',
        description: '这些品牌的剪裁较为宽松；建议比平时选小一个尺码。',
        points: [
          'H&M：通常比标称大一个尺码',
          'Primark：普遍的宽松剪裁',
          'Lupilu (Lidl)：休闲活泼版型',
          '推荐给处于低百分位数的宝宝',
        ],
      },
      {
        title: '尺码偏小 (建议选大一码)',
        description: '这些品牌的剪裁较为贴身；建议比平时选大一个尺码。',
        points: [
          "Carter's：美式贴身剪裁",
          'Mayoral：欧式修身剪裁',
          'Neck & Neck：缩小型版型',
          '推荐给处于高百分位数的宝宝',
        ],
      },
    ]},
    { type: 'title', text: '准确选择尺码的关键', level: 3 },
    { type: 'list', items: [
      '购买前务必测量宝宝数据，不要只凭年龄判断',
      '如果处于两个尺码的边缘，请选择较大的尺码',
      '对于连体衣，请考虑到尿布所占的空间',
      '欧洲尺码（50、56、62...）对应于身高（厘米）',
      '穿前请务必清洗：棉质衣物可能会缩水达5%',
    ]},
    { type: 'glossary', items: [
      {
        term: '尺码 50 / 新生儿级',
        definition: '专为身高50厘米以下、体重约3.5公斤的宝宝设计。由于生长期非常快，许多宝宝在最初几周就会穿不下。',
      },
      {
        term: '裆部长度',
        definition: '从裆部到腰部的距离。在连体衣和平脚裤中至关重要：裆部过短会限制宝宝的活动，即使衣服的其他部分很合身。',
      },
      {
        term: '按体重参考',
        definition: "某些美国品牌（如 Carter's）将体重作为首要参考。适用于身材比例超出标准百分位数的宝宝。",
      },
      {
        term: '信封领',
        definition: '连体衣和T恤的领口设计，允许通过向下向外拉开衣物的方式为宝宝穿衣，避免直接通过头部。在出生后的最初几个月里不可或缺。',
      },
    ]},
    { type: 'summary', title: '核心要点回顾', items: [
      '身高是选择尺码最可靠的指标，优于年龄参考。',
      'H&M 和 Primark 倾向于偏大；Carter\'s 和 Mayoral 则更贴身。',
      '数字形式的欧洲尺码（50、56、62...）直接对应身高厘米数。',
      '处于尺码交叉点时，选大一码能确保穿着时间更长。',
      '信封领和充裕的裆部空间是衡量舒适度的关键细节。',
    ]},
  ],
  faqTitle: "常见问题",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: 'Zara - 童装尺码指南',
      url: 'https://www.zara.com/cn/zh/size-guide.html',
    },
    {
      name: 'H&M - 婴儿尺码对照表',
      url: 'https://www2.hm.com/zh_cn/customer-service/sizeguide.html',
    },
    {
      name: '世卫组织 - 儿童生长标准',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - 尺码对照指南',
      url: 'https://www.mayoral.com/int/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = '婴儿预算规划器';
export const description = '规划宝宝第一年开销的必备工具。计算育儿室准备、每月成本及隐藏开支，并提供智能省钱建议。';

export const faq = [
  {
    question: '宝宝第一年大约需要花费多少钱？',
    answer: '平均而言，第一年的花费可能在 5 万到 15 万元人民币之间，具体取决于您的生活方式、托育需求以及您选择购买新品还是二手物品。',
  },
  {
    question: '新生儿最昂贵的开支有哪些？',
    answer: '最大的单次支出通常是婴儿车、育儿室家具（婴儿床、五斗柜）和安全座椅。托育费用则是最高的每月固定开支。',
  },
  {
    question: '如何节省育儿开支？',
    answer: '购买二手的设备和衣物、尽可能选择母乳喂养，以及利用礼品清单让亲友赠送必需品，都是非常有效的省钱策略。',
  },
  {
    question: '婴儿预算中的“隐形成本”是什么？',
    answer: '这些是隐藏的支出，例如能源账单（冷暖气）的增加、家庭保险费的上涨，以及非强制性疫苗或医疗用品，这些内容通常不在标准清单上。',
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
    name: '配置您的资料',
    text: '选择您的生活方式（节省型、均衡型或豪华型）、喂养方式和托育策略。',
  },
  {
    name: '核对您的物品',
    text: '浏览各个类别（初期投入、每月开销及成长里程碑），调整价格或将物品标记为二手。',
  },
  {
    name: '追踪您的预算',
    text: '查看第一年所需的总金额，并在添置物品的过程中随时监控进度。',
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
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'baby-budget-planner',
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献',
  seo: [
    { type: 'summary', title: '核心摘要：育儿预算', items: [
      '第一年的成本通常在 5 万至 15 万元人民币之间。',
      '初期启动成本（育儿室、婴儿车）是最初最大的支出门槛。',
      '托育费用可能占每月固定预算的 50% 以上。',
      '选择二手物品最高可降低总预算的 60%。',
    ]},
    { type: 'title', text: '宝宝第一年到底要花多少钱？', level: 2 },
    { type: 'paragraph', html: '养育宝宝不仅仅是买尿布。它需要战略性地审视一次性投资与每月固定支出的关系。我们的规划器可以帮助您可视化这一支出曲线，为向为人父母的经济转型做好准备。' },
    { type: 'stats', columns: 3, items: [
      { value: '2万元+', label: '初期装备配置' },
      { value: '1-1.5千元', label: '每月尿布/洗护' },
      { value: '40%+', label: '二手物品节省' },
    ]},
    { type: 'title', text: '类别细分：钱都花在了哪里？', level: 3 },
    { type: 'table', headers: ['类别', '典型物品', '频率', '成本影响'], rows: [
      ['初期投入', '婴儿床、婴儿车、安全座椅', '单次', '高'],
      ['每月开销', '尿布、奶粉、药房用品', '每月', '中'],
      ['里程碑', '高脚椅、辅食工具、衣物', '偶发', '中'],
      ['托育', '幼儿园 / 月嫂 / 保姆', '每月', '极高'],
    ]},
    { type: 'tip', html: '<strong>专家省钱建议：</strong> 高品质的婴儿车和育儿室家具具有极高的二手价值。购买二手的此类物品可以为您节省数千元，且不会在安全性或风格上妥协。' },
    { type: 'title', text: '生活方式对比', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: '节省型', 
        description: '关注二手物品和必需品。', 
        points: ['接手亲友旧衣物', '翻新后的装备', '以母乳喂养为主', '选择公立托育'] 
      },
      { 
        title: '豪华型', 
        description: '追求最新款和极致便利。', 
        points: ['高科技育儿产品', '有机奶粉', '设计师款育儿室', '私人家教式保姆'] 
      },
    ]},
    { type: 'title', text: '明智规划清单', level: 3 },
    { type: 'list', items: [
      '检查并更新家庭医疗和人寿保险的覆盖范围。',
      '为非强制性疫苗和专业药房用品预留预算。',
      '预估家庭能源账单（冷暖气）将增加约 20%。',
      '尽早创建礼物清单，以便亲友在大型物品上提供帮助。',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: '开启您的计划',
    lifestyleLabel: '生活方式选择',
    lifestyleSaving: '极限省钱',
    lifestyleBalanced: '均衡型',
    lifestylePremium: '豪华型',
    feedingLabel: '喂养方式',
    feedingBreast: '母乳喂养',
    feedingFormula: '配方奶喂养',
    feedingMixed: '混合喂养',
    childcareLabel: '托育策略',
    childcareHome: '居家照顾',
    childcarePublic: '公立幼儿园',
    childcarePrivate: '私立托育 / 月嫂',
    startBtn: '生成我的预算',
    categoryBeforeBirth: '初期投入',
    categoryMonthByMonth: '每月开销',
    categoryMilestones: '成长里程碑',
    totalNeededLabel: '第一年总目标',
    savingsProgressLabel: '已准备 / 已节省',
    chartTitle: '每月支出曲线',
    ghostAlertsTitle: '隐形成本警示',
    ghostInsurance: '检查人寿/健康保险',
    ghostHeating: '预留 +20% 能源费预算',
    ghostVaccines: '非强制疫苗预算',
    diaperCalcTitle: '尿布价格测算',
    diaperPriceLabel: '每包价格',
    diaperUnitsLabel: '每包片数',
    secondHandLabel: '二手 / 赠送',
    wishlistLabel: '在清单中',
    itemNursery: '育儿室布置',
    itemStroller: '婴儿车与出行系统',
    itemHospitalBag: '待产包必备品',
    itemDiapers: '尿布与湿纸巾',
    itemPharmacy: '个护与卫生用品',
    itemDaycare: '托育 / 照顾费用',
    itemSolidFood: '辅食过渡准备',
    itemClothes: '季节性衣物',
    itemHighChair: '餐椅与餐具套装',
    editLabel: '编辑价格',
    saveBtn: '保存',
    exportBtn: '导出 JSON',
    importBtn: '导入 JSON',
    resetBtn: '重置计划',
    currencySymbol: '¥',
    monthPrefix: 'M',
    initialMonthLabel: '开始',
  },
};

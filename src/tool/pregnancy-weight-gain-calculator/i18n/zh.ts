import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = '孕期体重增长计算器';
const description = '使用IOM和ACOG产前体重增长指南，按孕周估算健康的孕期体重增长范围。';

const faq = [
  {
    question: '孕期应该增重多少？',
    answer: '推荐的总增重取决于孕前BMI。IOM指南建议单胎妊娠中，体重不足为12.5至18公斤（28至40磅），BMI正常为11.5至16公斤（25至35磅），超重为7至11.5公斤（15至25磅），肥胖为5至9公斤（11至20磅）。个人目标请务必与产前保健医生讨论。',
  },
  {
    question: '双胎妊娠使用相同的增重范围吗？',
    answer: '不是。双胎妊娠在所有的BMI分类中目标更高。BMI正常时推荐范围为17至25公斤（37至54磅）。超重为14至23公斤（31至50磅），肥胖为11至19公斤（25至42磅）。对于体重不足女性的双胎妊娠，IOM没有既定的范围，因此临床团队会进行个体化护理。',
  },
  {
    question: '为什么孕早期之后的曲线会发生变化？',
    answer: 'IOM指南预计孕早期的总增重非常少，仅为约0.5至2公斤，因为此时胎儿、胎盘和羊水的质量仍然很小。从孕中期开始，根据BMI每周增重0.17至0.58公斤，进入更平稳的每周增长阶段。',
  },
  {
    question: '我因为孕吐在孕早期体重下降了，应该担心吗？',
    answer: '孕早期轻微体重下降在孕吐和食物厌恶的情况下很常见。只要保持水分摄入，且体重下降不超过几公斤，通常不构成问题。如果呕吐严重、持续不断或导致脱水，请联系您的医疗提供者 - 这可能是妊娠剧吐，需要治疗。',
  },
  {
    question: '每周增重的理想速度是多少？',
    answer: '第13周之后的每周目标是：体重不足0.44至0.58公斤，BMI正常0.35至0.50公斤，超重0.23至0.33公斤，肥胖0.17至0.27公斤。这些是平均值 - 实际增重会因体液、进餐时间和其他因素每周有所波动。',
  },
  {
    question: '孕期通过运动来控制体重增长安全吗？',
    answer: '对于大多数无并发症妊娠的女性来说是安全的。ACOG建议无并发症的孕妇每周至少进行150分钟中等强度有氧运动。规律运动有助于健康增重，降低妊娠期糖尿病风险，并改善情绪和睡眠。尤其是有妊娠并发症时，请务必与医疗团队讨论您的具体运动计划。',
  },
  {
    question: '产后多久能减掉孕期增长的体重？',
    answer: '大多数女性在分娩后立即减掉约4.5至5.5公斤（婴儿、胎盘、羊水）。第一周内会额外流失体液。恢复到孕前体重通常需要6至12个月的健康饮食和循序渐进运动。母乳喂养有帮助，因为每天额外消耗约300至500千卡热量。',
  },
  {
    question: '这个计算器能诊断妊娠问题吗？',
    answer: '不能。它仅是基于人群指南的教育性估算。无法评估胎儿生长、胎盘功能、血压、血糖或任何医学症状。突然的体重变化、水肿、持续呕吐或任何担忧的迹象都应与产科医生、助产士或合格的产前临床医生讨论。',
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

const howTo = [
  {
    name: '输入孕前测量数据',
    text: '添加身高和孕前体重，以便工具估算孕前BMI。',
  },
  {
    name: '添加当前怀孕信息',
    text: '输入当前体重、孕周以及是单胎还是双胎。',
  },
  {
    name: '查看曲线',
    text: '将当前增重与所选孕周的估算健康增重带进行比较。',
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
    priceCurrency: 'CNY',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'pregnancy-weight-gain-calculator',
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献',
  seo: [
    {
      type: 'summary',
      title: '关于孕期体重增长的关键事实',
      items: [
        '推荐的总增重完全取决于您的孕前BMI，而非一刀切的数字。',
        'IOM指南给出的单胎妊娠范围从肥胖时的11至20磅到体重不足时的28至40磅。',
        '体重增长不是线性的：孕早期预计总共仅增长0.5至2公斤，之后进入更稳定的每周增长阶段。',
        '双胎妊娠在所有BMI分类中都有更高的目标。',
        '本计算器是教育工具 - 个人目标请务必与产前保健团队讨论。',
      ],
    },
    {
      type: 'title',
      text: '孕期体重增长计算器：了解您的产前生长曲线',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '孕期增长适量的体重是影响母体健康和胎儿发育的最重要因素之一。增重过少会增加早产、低出生体重和宫内生长受限的风险。增重过多则与妊娠期糖尿病、剖宫产、产后体重滞留和巨大儿相关。本计算器使用<strong>IOM（美国医学研究所）</strong>和<strong>ACOG（美国妇产科医师学会）</strong>制定的既定指南，为您绘制个性化的逐周增重曲线。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40周', label: '足月妊娠时长' },
        { value: '4个类别', label: 'IOM基于BMI的增重范围' },
        { value: '±0.5公斤/周', label: '孕中期典型速度' },
      ],
    },
    {
      type: 'title',
      text: '计算器工作原理',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '您输入身高和孕前体重，以便工具计算出孕前BMI。',
        '您的BMI被归类到IOM的四个类别之一：体重不足、正常、超重或肥胖。',
        '每个类别对应一个推荐的总增重范围以及孕中期和孕晚期的每周增速。',
        '计算器还会接收当前体重和孕周，以判断您相对于估算带的位置。',
        '单胎和双胎妊娠使用不同的增重目标，因为胎儿和胎盘的需求差异显著。',
      ],
    },
    {
      type: 'title',
      text: '基于孕前BMI的IOM增重推荐',
      level: 3,
    },
    {
      type: 'table',
      headers: ['孕前BMI', '分类', '单胎总增重', '双胎总增重', '每周增速（第14至40周）'],
      rows: [
        ['< 18.5', '体重不足', '12.5至18 公斤 / 28至40 磅', '无IOM既定范围', '0.44至0.58 公斤'],
        ['18.5至24.9', '正常体重', '11.5至16 公斤 / 25至35 磅', '17至25 公斤 / 37至54 磅', '0.35至0.50 公斤'],
        ['25.0至29.9', '超重', '7至11.5 公斤 / 15至25 磅', '14至23 公斤 / 31至50 磅', '0.23至0.33 公斤'],
        ['≥ 30.0', '肥胖', '5至9 公斤 / 11至20 磅', '11至19 公斤 / 25至42 磅', '0.17至0.27 公斤'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>重要提示：</strong>这些是人群层面的筛查范围。您的医疗提供者可能会根据营养史、既往妊娠、胎儿生长超声检查或医疗状况设定个性化目标。请务必遵循临床医生的个体化指导。',
    },
    {
      type: 'title',
      text: '孕早中晚期增重情况',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '孕早期（第1至13周）',
          description: '预计增重较少。许多女性因孕吐增重极少甚至体重下降。',
          points: [
            'IOM目标：总计约0.5至2公斤（1至4.4磅）',
            '孕吐和食物厌恶很常见，可能限制摄入量',
            '此时胚胎和胎盘的质量仍然非常小',
            '关注营养质量而非数量',
          ],
        },
        {
          title: '孕中期（第14至26周）',
          description: '每周增重最平稳的阶段。孕吐缓解后食欲通常会改善。',
          points: [
            '每周增速：根据BMI类别约0.23至0.58公斤',
            '胎儿在身长和器官发育方面快速增长',
            '血浆容量增加，贡献体重',
            '铁和钙的需求量显著上升',
          ],
        },
        {
          title: '孕晚期（第27至40周）',
          description: '体重增长以与孕中期相似的速度继续，到末期可能放缓。',
          points: [
            '第28周后胎儿脂肪堆积明显增加',
            '羊水量在第34至36周左右达到峰值',
            '水肿和体液潴留可能暂时提高测量值',
            '一些女性在分娩前最后1至2周增重很少',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '增长的体重实际去向',
      level: 3,
    },
    {
      type: 'table',
      headers: ['组成部分', '足月估计重量'],
      rows: [
        ['婴儿', '3.0至3.5 公斤 / 6.6至7.7 磅'],
        ['胎盘', '0.7 公斤 / 1.5 磅'],
        ['羊水', '0.8 公斤 / 1.8 磅'],
        ['子宫（增长）', '0.9 公斤 / 2 磅'],
        ['乳房组织', '0.5 公斤 / 1.1 磅'],
        ['血容量增加', '1.2至1.5 公斤 / 2.6至3.3 磅'],
        ['细胞外液', '1.5 公斤 / 3.3 磅'],
        ['母体脂肪和蛋白质储备', '3.0至4.0 公斤 / 6.6至8.8 磅'],
      ],
    },
    {
      type: 'paragraph',
      html: '如该明细表所示，健康孕期增长的大部分体重是功能性组织 - 体液、血液、胎儿、胎盘和子宫，而非单纯的脂肪。这一认识有助于理解为什么孕前超重的女性也需要充分增重。',
    },
    {
      type: 'title',
      text: '健康增重的营养建议',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '孕中期在孕前需求基础上每天增加约340千卡，孕晚期每天增加约450千卡。',
        '优先摄入蛋白质：目标为每天至少70至80克，以支持胎儿组织生长和母体血容量扩张。',
        '摄入富含铁的食物（瘦肉、小扁豆、强化谷物）以预防贫血，这在孕期更为常见。',
        '钙需求升至每天1,000毫克 - 乳制品、强化植物奶、杏仁和绿叶蔬菜是良好来源。',
        '来自多脂鱼（每周2份）或藻类补充剂的Omega-3脂肪酸支持胎儿大脑发育。',
        '叶酸（每天400至600微克）可降低神经管缺陷风险，尤其在孕早期。',
        '保持充足水分 - 目标每天约2至3升，炎热天气或运动时增加摄入。',
        '限制高度加工食品、添加糖和反式脂肪，它们会导致过度增重。',
      ],
    },
    {
      type: 'title',
      text: '孕期体力活动与体重管理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG建议无并发症妊娠的女性每周至少进行<strong>150分钟</strong>中等强度有氧运动。规律运动有助于健康增重，降低妊娠期糖尿病和子痫前期的风险，改善睡眠并缓解背痛。散步、游泳、孕期瑜伽和固定自行车在整个孕期都耐受良好。在开始或继续高强度活动之前，请务必与您的医疗提供者讨论运动计划。',
    },
    {
      type: 'title',
      text: '孕期体重变化的警示信号',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '一周内体重突然增加超过1公斤，尤其在20周之后，可能表明与子痫前期相关的体液潴留。',
        '手、脸或脚踝迅速肿胀并伴有头痛或视觉变化，需要立即就医。',
        '孕早期后持续体重下降，或无法进食及保持水分摄入，可能提示妊娠剧吐。',
        '尽管摄入充足但体重增长极慢或停滞不前，可能需要胎儿生长超声检查以评估宫内生长受限。',
        '任何不明原因的体重变化都应与产科医生或助产士讨论，而非自行处理。',
      ],
    },
    {
      type: 'title',
      text: '单胎与双胎妊娠：主要差异',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '单胎妊娠',
          description: '一个胎儿，一个胎盘。最常见的情况，有IOM既定目标。',
          points: [
            '总增重：根据孕前BMI为5至18公斤',
            '从第14周起每周0.17至0.58公斤的平稳速度',
            '需要的额外热量较低（340至450千卡/天）',
            '早产率：约10%',
          ],
        },
        {
          title: '双胎妊娠',
          description: '两个胎儿，通常在各方面需求更高。所有BMI类别中的目标都更高。',
          points: [
            '总增重：根据孕前BMI为11至25公斤',
            '尤其在孕中期每周增速更高',
            '更大的热量和蛋白质需求',
            '临床团队更密切地个性化设定目标',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '关于产前增重的常见误解',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '体重增长不等于脂肪增长。增长的大部分体重是血液、体液、胎盘和婴儿 - 而非储存的脂肪。',
        '一人吃两人份并不意味着摄入量翻倍。孕中期额外需要的热量大约相当于一杯牛奶和一根香蕉。',
        '超过推荐范围并不自动意味着您或宝宝处于危险之中 - 范围是统计指南，而非绝对阈值。',
        '肥胖女性在孕期也需要增重。IOM仍建议净增重5至9公斤。',
        '体重秤不是衡量健康孕期的最重要指标 - 胎儿生长、血压、血糖和临床评估更为重要。',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI（体重指数）',
          definition: '体重与身高平方的比值，用于分类体重类别。在产前保健中，孕前BMI决定合适的增重目标。',
        },
        {
          term: 'IOM（医学研究所）',
          definition: '现为美国国家医学科学院。于2009年发布了全球临床医生使用的里程碑式孕期体重增长指南。',
        },
        {
          term: 'ACOG（美国妇产科医师学会）',
          definition: '美国领先的产科和妇科保健专业组织。认可IOM的体重增长指南并提供额外的临床指导。',
        },
        {
          term: '孕周',
          definition: '从末次月经第一天起按周计算的妊娠时间。足月妊娠通常为39至40周。',
        },
        {
          term: '巨大儿',
          definition: '婴儿生长超过预期，通常定义为出生体重超过4公斤。与过度增重和妊娠期糖尿病相关。',
        },
        {
          term: '宫内生长受限（IUGR）',
          definition: '胎儿生长慢于预期的情况。可能与增重不足、胎盘问题或其他母体健康因素有关。',
        },
        {
          term: '子痫前期',
          definition: '以高血压和其他器官系统受损迹象为特征的妊娠并发症。体液潴留导致的突然快速增重可能是一个警示信号。',
        },
        {
          term: '妊娠剧吐',
          definition: '超出正常孕吐范围的严重且持续的孕期恶心呕吐，可导致体重下降和脱水，需要医疗治疗。',
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
    educationalWarningTitle: '教育性提示',
    educationalWarningBody: '本计算器仅用于产前教育。它不诊断母体或胎儿健康，不能替代个体化医疗建议，也不考虑症状、体液潴留、糖尿病风险、胎儿生长、营养史或临床医生指定的目标。',
    inputsTitle: '怀孕档案',
    unitsLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '英制',
    heightCmLabel: '身高 (cm)',
    heightFtLabel: '身高 (ft)',
    heightInLabel: '身高 (in)',
    preWeightKgLabel: '孕前体重 (kg)',
    currentWeightKgLabel: '当前体重 (kg)',
    preWeightLbLabel: '孕前体重 (lb)',
    currentWeightLbLabel: '当前体重 (lb)',
    weekLabel: '孕周',
    pregnancyTypeLabel: '怀孕类型',
    singletonLabel: '单胎',
    twinsLabel: '双胎',
    bmiCardTitle: '孕前BMI',
    recommendationTitle: '推荐增重',
    currentGainTitle: '当前增重',
    chartTitle: '产前体重增长曲线',
    weekShortLabel: '周',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: '总范围',
    weeklyRangeLabel: '第13周后的每周增速',
    firstTrimesterLabel: '孕早期：总增重约0.5至2 kg',
    statusBelow: '低于估算带',
    statusWithin: '在估算带内',
    statusAbove: '高于估算带',
    statusBelowBody: '您当前增重低于本周估算带。请咨询产检医生是否需要复查营养、孕吐、胎儿生长或孕周确认。',
    statusWithinBody: '您当前增重处于本周估算带内。请继续按照个体化产前计划执行。',
    statusAboveBody: '您当前增重高于本周估算带。尤其是增重过快或伴有水肿等症状时，请与您的医生一起评估趋势。',
    categoryUnderweight: '体重不足',
    categoryNormal: 'BMI正常',
    categoryOverweight: '超重',
    categoryObesity: '肥胖',
    totalGainSuffix: '总增重',
    perWeekSuffix: '每周',
    chartLowLabel: '下带',
    chartHighLabel: '上带',
    chartCurrentLabel: '当前',
  },
};

import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'xibanya-yingers-yimiaojiezhong-rili';
const title = '西班牙儿童疫苗接种时间表';
const description = '根据 AEP 2026 最新标准，精确计算您宝宝的疫苗接种日期。';
const faq = [
  {
    question: '什么是 AEP 2026 疫苗接种时间表？',
    answer: '这是西班牙儿科学会 (AEP) 为 2026 年推荐的疫苗接种计划。它包括从出生到 14 岁婴幼儿和儿童的所有常规及可选疫苗。',
  },
  {
    question: '按照这个时间表接种是强制性的吗？',
    answer: '在西班牙，疫苗接种虽然在法律上不是强制性的，但受到强烈推荐。常规时间表内的疫苗是免费的，由公共卫生中心负责接种。',
  },
  {
    question: '如果错过了一剂疫苗怎么办？',
    answer: '如果延迟接种，无需从头开始。您的儿科医生会告知您如何从中断的地方继续进行。重要的是要尽快完成规定的接种程序。',
  },
  {
    question: '一天可以接种几种疫苗吗？',
    answer: '是的，同一次就诊接种多种疫苗是很常见且安全的。像六联疫苗这类联合疫苗，一针即可预防六种疾病。',
  },
  {
    question: '早产儿接种疫苗安全吗？',
    answer: '除非新生儿专家有特殊说明，早产儿应根据其实际出生年龄（日历年龄）而非纠正年龄进行接种。由于他们更脆弱，应优先考虑接种。',
  },
];
const howTo = [
  {
    name: '输入出生日期',
    text: '在相应字段中填写您宝宝出生的年、月、日。',
  },
  {
    name: '查询下次预约',
    text: '计算器会自动显示下次接种的时间以及对应的疫苗种类。',
  },
  {
    name: '查看完整时间表',
    text: '展开“过去”和“未来”预约部分，查看完整的接种计划。',
  },
  {
    name: '导出提醒',
    text: '点击按钮下载 .ics 文件，将所有未来的接种计划添加到您的手机日历中。',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: '宝宝出生日期',
    placeholderDD: '日',
    placeholderMM: '月',
    placeholderAAAA: '年',
    emptyMsg: '请输入宝宝的出生日期以查看疫苗接种时间表。',
    invalidMsg: '输入日期无效。',
    futureMsg: '出生日期不能是未来日期。',
    labelNextAppointment: '下次预测接种日期',
    btnAddReminder: '添加到手机日历',
    btnToday: '就是今天！别忘了带接种本',
    labelPassed: '已完成的接种',
    labelFuture: '未来的接种计划',
    labelStatusOk: '已完成',
    labelStatusPending: '待接种',
    labelSource: '来源：AEP 2026',
    labelShare: '分享这些日期',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献',
    labelMonth: '月',
    labelMonths: '个月',
    labelYear: '岁',
    labelYears: '岁',
    labelDay: '日',
    labelDays: '天',
    labelAnd: '和',
    labelVaccination: '疫苗接种',
    labelAppointment: '接种预约',
    vac_hexavalente: '六联疫苗',
    vac_neumococo: '肺炎球菌 (VCN15/20)',
    vac_meningococo_b: 'B群脑膜炎球菌 (Bexsero)',
    vac_rotavirus: '轮状病毒',
    vac_meningococo_acwy: 'ACWY群脑膜炎球菌',
    vac_triple_virica: '麻腮风三联疫苗 (SRP)',
    vac_varicela: '水痘',
    vac_gripe: '流感 (季节性)',
    vac_vph: 'HPV (人乳头瘤病毒)',
    vac_tdpa: '白破一联 (百日咳、白喉、破伤风)',
    vac_polio_booster: '脊髓灰质炎 (加强针)',
  },
  seo: [
    { type: 'title', text: '疫苗接种计算器：我孩子下次什么时候打预防针？', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '95% 以上', label: '有效性' },
      { value: '14 剂', label: '总接种剂数' },
      { value: '免费 (AEP)', label: '费用' },
      { value: '高', label: '安全性' },
    ]},
    { type: 'tip', html: 'AEP 2026 时间表包含重要更新，例如扩大 B 群脑膜炎球菌疫苗的接种范围，以及更新自 12 岁起男女两性接种 HPV 疫苗的建议。' },
    { type: 'title', text: 'AEP 2026 时间表新政', level: 3 },
    { type: 'list', items: [
      'B 群脑膜炎球菌 (Bexsero)：整合为 2+1 程序，分别在 2、4 和 12 个月接种。',
      'HPV 疫苗：扩大到所有 12 岁以上的青少年，无论性别。',
      '肺炎球菌：根据地区供应情况，更新了使用 VCN15 或 VCN20 的建议。',
      '轮状病毒：口服疫苗已被西班牙所有自治区的常规时间表采纳。',
      '白破一联 (Tdpa)：建议在 6 岁和 12 岁进行加强接种，以保持对百日咳的免疫力。',
    ]},
    { type: 'title', text: '西班牙各自治区之间的差异', level: 3 },
    { type: 'list', items: [
      '部分自治区可能会包含国家时间表之外的额外疫苗。',
      '轮状病毒疫苗的资助情况因州而异，但普及趋势已非常明显。',
      'ACWY 群脑膜炎球菌的接种年龄可能会根据该自治区的方案略有不同。',
      '请务必咨询您的儿科医生或当地卫生中心，以确认您所在区域现行的接种计划。',
    ]},
    { type: 'title', text: '如何将时间表导出到手机', level: 3 },
    { type: 'list', items: [
      '在计算器中输入宝宝的出生日期。',
      '点击“添加到手机日历”按钮下载 .ics 文件。',
      '使用日历应用（Google 日历、Apple 日历等）打开文件。',
      '所有的接种事项将连同日期和疫苗名称一起存入日历。',
    ]},
    { type: 'title', text: '常见的副作用', level: 3 },
    { type: 'list', items: [
      '接种部位红肿：通常在 1-2 天内消失。',
      '轻微发烧 (37.5–38.5 °C)：在最初的 24-48 小时内属于正常现象。',
      '烦躁或哭闹：常见于宝宝接种前几剂次后。',
      '嗜睡或暂时性食欲不振：无需特殊处理。',
      '由于过敏性反应导致的严重不良反应极其罕见（发生率低于百万分之一）。',
    ]},
    { type: 'tip', html: '带宝宝接种前让其吃饱并穿上宽松舒适的衣服。接种后，拥抱（肌肤接触）或母乳喂养有助于自然缓解疼痛和炎症。' },
    { type: 'summary', title: '核心要点', items: [
      'AEP 2026 时间表共计 14 剂疫苗，直至 12 岁，以提供全面保护。',
      '第一年的疫苗可同时预防多达 9 种严重的疾病。',
      '轻微副作用是正常的，通常 1-2 天内消失。',
      '点击一次即可将所有接种日期导出到手机日历。',
      '如果您对所在区域的时间表有疑问，请务必咨询您的儿科医生。',
    ]},
  ],
  faqTitle: "常见问题",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: '西班牙儿科学会 (AEP) - 2026 年疫苗接种时间表',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: '西班牙卫生部 - 疫苗接种日历',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: '世界卫生组织 (WHO) - 免疫接种',
      url: 'https://www.who.int/zh/health-topics/vaccines-and-immunization',
    },
    {
      name: '美国疾病控制与预防中心 (CDC) - 儿童和青少年推荐免疫程序',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

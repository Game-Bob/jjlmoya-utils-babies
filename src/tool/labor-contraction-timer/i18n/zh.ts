import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = '宫缩计时器';
export const description = '使用大触摸按钮、呼吸引导、历史记录和5-1-1模式提醒来跟踪宫缩的持续时间和频率。';

export const faq = [
  {
    question: '什么是宫缩的5-1-1规则？',
    answer: '5-1-1规则通常意味着宫缩大约每5分钟一次，持续约1分钟，并持续约1小时。许多产科团队将其作为寻求指导的实用信号，但您自己的计划可能有所不同。',
  },
  {
    question: '我应该在什么时候联系助产士或医院？',
    answer: '当宫缩变得规律、强烈或符合您收到的计时指示时，请联系您的产科团队。如果出现大量出血、胎动减少、发热、剧烈疼痛、破水并有顾虑，或感觉有些不对劲，请立即致电。',
  },
  {
    question: '这个计时器能诊断活跃分娩吗？',
    answer: '不能。它记录时间并突出显示常见的宫缩模式。宫颈变化、胎儿位置、羊膜状态、症状和您的临床病史需要由合格的临床医生进行评估。',
  },
  {
    question: '宫缩频率是如何计算的？',
    answer: '频率是从一次宫缩的开始到上一次宫缩的开始计算的。持续时间是从您按下开始到按下停止的时间计算的。',
  },
  {
    question: '我可以在前驱分娩期间使用吗？',
    answer: '可以。它可以帮助您观察宫缩是变得更加规律还是逐渐减弱。如果宫缩仍然不规律、随休息或补水而变化，或不增强，可能仍然是前驱分娩，但您的护理团队可以指导您。',
  },
  {
    question: '为什么包含呼吸引导？',
    answer: '缓慢、稳定的呼吸有助于减少紧张、集中注意力并支持应对每次宫缩。动画只是舒适辅助工具，不能替代分娩支持。',
  },
  {
    question: '如果不是第一个宝宝，我应该等待5-1-1吗？',
    answer: '不总是如此。之前的阴道分娩后，分娩可能会进展得更快。请遵循助产士或产科医生的计划，特别是如果您有高风险妊娠、住在离医院较远的地方或有快速分娩史。',
  },
  {
    question: '我的宫缩历史会被保存吗？',
    answer: '计时器将最近的记录存储在浏览器中，因此您可以刷新页面而不会丢失会话。使用重置按钮清除本地历史记录。',
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
    name: '开始计时',
    text: '宫缩开始时按下主按钮。',
  },
  {
    name: '使用呼吸引导',
    text: '在宫缩活跃期间跟随扩张和收缩的圆圈。',
  },
  {
    name: '停止计时',
    text: '宫缩结束时再次按下按钮，以记录持续时间和间隔。',
  },
  {
    name: '查看模式',
    text: '检查历史记录和提醒面板，以决定是否联系您的产科团队。',
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

export const content: ToolLocaleContent<LaborContractionTimerUI> = {
  title,
  description,
  slug: 'labor-contraction-timer',
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献',
  seo: [
    {
      type: 'summary',
      title: '关于宫缩计时的关键事实',
      items: [
        '持续时间从宫缩开始到结束进行测量。',
        '频率从一次宫缩开始到下一次宫缩开始进行测量。',
        '5-1-1模式意味着大约5分钟间隔，持续1分钟，持续1小时。',
        '宫缩计时支持决策，但不能自行确认宫颈扩张或活跃分娩。',
        '始终遵循您自己的助产士、产科医生或产房的指示。',
      ],
    },
    {
      type: 'title',
      text: '宫缩计时器：跟踪持续时间、频率和5-1-1模式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '宫缩计时器帮助家庭将紧张、难以判断的时刻转化为清晰的记录。在怀孕后期，人们常常想知道宫缩是否仍然是不规则的练习宫缩、前驱分娩、早期分娩，还是值得打电话给产房的模式。通过在宫缩开始时按下开始按钮，在结束时按下停止按钮，此工具计算从一次宫缩开始到下一次宫缩开始的<strong>持续时间</strong>（秒）和<strong>频率</strong>（分钟）。',
    },
    {
      type: 'paragraph',
      html: '目标不是诊断分娩。目标是帮助您用具体的术语描述正在发生的事情：每次宫缩持续多长时间、它们之间有多近、模式是否在增强，以及它是否保持了足够长的一致性以匹配常见的指导，如5-1-1规则。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5分钟', label: '常见频率信号' },
        { value: '60秒', label: '典型的5-1-1持续时间' },
        { value: '1小时', label: '模式稳定性窗口' },
      ],
    },
    {
      type: 'title',
      text: '如何解读5-1-1提醒',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '5-1-1规则是一个广泛使用的经验法则：宫缩大约每5分钟一次，持续约1分钟，并持续约1小时。许多分娩团队使用该模式作为寻求个性化建议的实用信号，特别是对于第一次分娩。当最近的宫缩间隔为5分钟或更少、持续至少60秒并在整个会话中保持时，此计时器会突出显示该模式。',
    },
    {
      type: 'table',
      headers: ['您看到的模式', '可能意味着什么', '有用的下一步'],
      rows: [
        ['不规则的计时、可变的长度', '可能是前驱分娩或早期分娩', '休息、补水、改变姿势，除非有警示症状，否则继续观察'],
        ['间隔越来越近但仍在60秒以下', '分娩可能在进展但尚未达到5-1-1', '继续计时并遵循您自己的分娩计划指示'],
        ['大约5分钟间隔，持续60秒，持续约1小时', '常见的5-1-1联系模式', '联系您的助产士、产科医生或产房以获得个性化指导'],
        ['突然剧烈的宫缩、压力或想推的感觉', '分娩可能进展迅速', '立即打电话，特别是如果不是第一个宝宝'],
      ],
    },
    {
      type: 'title',
      text: '如何正确计时宫缩',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在收紧、痉挛或波浪感开始时按下开始键。',
        '当宫缩明显消退且您可以再次放松时，按下停止键。',
        '不要从一次宫缩的结束到下一次宫缩的开始来测量频率。临床上，频率通常从开始到开始计算。',
        '在解读模式之前记录几次宫缩，因为一次孤立的宫缩可能会产生误导。',
        '如果您的产科团队给出了与5-1-1不同的阈值，请优先使用他们的指导。',
      ],
    },
    {
      type: 'title',
      text: '前驱分娩与活跃分娩模式对比',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '通常是前驱分娩或早期分娩',
          description: '宫缩可能不舒服且真实，但模式可能尚未稳定地向分娩推进。',
          points: [
            '间隔波动而不是持续缩短',
            '休息、补水、洗澡或改变姿势后宫缩可能缓解',
            '强度可能保持相似而不是随时间增强',
            '宫颈可能变化缓慢或尚未明显，这只有临床医生可以评估',
          ],
        },
        {
          title: '更提示活跃分娩',
          description: '模式变得更加规律，说话时难以应对，并逐渐加强。',
          points: [
            '多次记录后宫缩越来越接近',
            '每次宫缩持续约45至70秒或更长',
            '在高峰期需要暂停、呼吸或集中注意力',
            '即使在休息、补水或改变姿势后模式仍持续',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '何时不要等待计时器',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>安全提示：</strong>如果您有大量出血、胎动减少、严重头痛、发热、绿色或有异味的液体、剧烈持续疼痛、先兆子痫症状或任何紧急担忧，请不要等待计时器提醒。根据当地指示联系您的产科团队或紧急服务。',
    },
    {
      type: 'title',
      text: '历史记录显示的内容',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '开始时间：宫缩开始的时钟时间。',
        '持续时间：停止时间减去开始时间，四舍五入到秒。',
        '间隔：当前开始时间减去上一次宫缩开始时间，以分钟显示。',
        '最近趋势：宫缩是在拉开间距、保持不规则还是变得更加规律。',
      ],
    },
    {
      type: 'title',
      text: '常见的计时错误',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在高峰期停止计时器，而不是在宫缩完全消退时。',
        '由于一开始宫缩轻微而延迟开始，使持续时间看起来更短。',
        '只计算最强的宫缩，忽略中间较小的宫缩。',
        '假设5-1-1总是意味着立即入院。通常意味着打电话寻求指导，而不是自我诊断活跃分娩。',
        '在第二次或之后的产程中等待太久，进展可能比第一次分娩更快。',
      ],
    },
    {
      type: 'title',
      text: '临床局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '宫缩计时只是产程评估的一部分。宫颈扩张、胎儿健康状况、疼痛应对、羊膜破裂、孕周、既往分娩史、B族链球菌状态、距医院的距离、妊娠风险因素和母体症状都可能改变团队的建议。将记录作为清晰的记录与您的助产士、产科医生、导乐或分诊护士分享。',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '持续时间',
          definition: '一次宫缩的长度，从开始的那一刻到最后进行测量。',
        },
        {
          term: '频率',
          definition: '从一次宫缩开始到下一次宫缩开始的时间。',
        },
        {
          term: '5-1-1规则',
          definition: '一种常见的产程计时模式：宫缩大约每5分钟一次，持续约1分钟，持续约1小时。',
        },
        {
          term: '前驱分娩',
          definition: '一段真实宫缩期，可能不适且反复出现，但不一定稳定地进展到活跃分娩。',
        },
        {
          term: '活跃分娩',
          definition: '产程的一个阶段，宫缩更强、更规律，并伴有宫颈变化，通过临床评估确认。',
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
    safetyTitle: '与您的分娩计划一起使用',
    safetyBody: '此计时器用于跟踪和教育。如果您不确定、症状让您担心或收到了不同的指示，请联系您的助产士、产科医生或产房。',
    idleStatus: '准备计时下一次宫缩',
    activeStatus: '宫缩进行中',
    accidentalTapStatus: '太短',
    shortRecordLabel: '短按或测试点击',
    activeRowLabel: '当前活跃',
    startButton: '开始宫缩',
    stopButton: '停止宫缩',
    activeLabel: '活跃宫缩',
    breathingLabel: '缓慢呼吸',
    breatheIn: '吸气',
    breatheOut: '呼气',
    currentDurationLabel: '当前持续时间',
    lastIntervalLabel: '上次间隔',
    contractionCountLabel: '已记录',
    patternStatusTitle: '模式状态',
    patternStatusIdle: '准备跟踪',
    patternStatusTracking: '继续跟踪',
    patternStatusBuilding: '模式正在形成',
    patternStatusCall: '致电您的产科团队',
    patternStatusActiveBody: '您已开始记录。在模式有意义之前，还需要几次宫缩。',
    patternStatusBuildingBody: '最近的宫缩越来越近或持续时间更长。继续计时，如果持续则准备好致电。',
    patternStatusCallBody: '最近的宫缩接近5-1-1模式。现在联系您的助产士、产科医生或产房以获得个性化指导。',
    averageLastThreeLabel: '最近3次平均',
    averageLastSixLabel: '最近6次平均',
    regularityLabel: '规律性',
    regularityNotEnough: '数据不足',
    regularityIrregular: '不规律',
    regularityVariable: '可变',
    regularityRegular: '规律',
    summaryTitle: '电话摘要',
    summaryEmpty: '记录至少三次宫缩，为您的产科团队建立有用的摘要。',
    copySummaryButton: '复制摘要',
    copiedSummaryButton: '已复制',
    undoButton: '撤销上次',
    sessionOverviewTitle: '会话概览',
    sessionOverviewBody: '宫缩开始时开始计时。活跃宫缩将立即显示在这里。',
    lastContractionLabel: '上次宫缩',
    historyTitle: '宫缩历史',
    emptyHistory: '尚未记录宫缩。',
    startTimeHeader: '开始时间',
    durationHeader: '持续时间',
    intervalHeader: '间隔',
    secondsSuffix: '秒',
    minutesSuffix: '分钟',
    noInterval: '-',
    resetButton: '重置',
    alertTitle: '检测到5-1-1模式',
    alertBody: '您最近的宫缩看起来接近常见的5-1-1模式。考虑现在就联系您的助产士或产房以获得个性化指导。',
    patternTitle: '提醒检查的内容',
    patternBody: '当最近的宫缩间隔为5分钟或更少、持续至少60秒并保持该模式约1小时时，此面板会出现。',
  },
};

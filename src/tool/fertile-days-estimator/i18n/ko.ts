import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'fertile-days-calculator';
const title = '가임기 및 배란일 계산기';
const description = '생리 주기를 바탕으로 가장 임신 가능성이 높은 가임기(가임 윈도우)와 배란 예정일을 계산합니다.';
const faq = [
  {
    question: '가임기는 어떻게 계산되나요?',
    answer: '가임기는 마지막 생리 시작일을 기준으로 계산됩니다. 일반적으로 배란은 다음 생리 예정일로부터 약 14일 전에 발생합니다. 가임기는 배란 전 5일과 배란 당일을 포함한 기간을 의미합니다.',
  },
  {
    question: '이 계산기의 정확도는 어느 정도인가요?',
    answer: '이 계산기는 표준 28일 주기(또는 사용자가 입력한 주기)를 바탕으로 한 예측값입니다. 개인의 컨디션이나 환경에 따라 변동될 수 있으므로 참고용으로 활용하시길 권장합니다. 더 정확한 결과를 원하신다면 기초체온 측정이나 배란 테스트기 사용을 병행하는 것이 좋습니다.',
  },
  {
    question: '생리 주기가 불규칙한 경우는 어떻게 하나요?',
    answer: '주기 변화가 큰 경우, 달력 방식의 계산은 정확도가 떨어질 수 있습니다. 이런 경우 기초체온 측정 또는 LH 호르몬을 확인하는 배란 테스트기를 사용하는 것이 배란일을 식별하는 데 더 신뢰할 수 있는 방법입니다.',
  },
  {
    question: '배란 후 난자는 얼마나 생존하나요?',
    answer: '난자의 생존 기간은 배란 후 약 12~24시간입니다. 반면 정자는 여성의 체내에서 최대 5일까지 생존할 수 있으므로, 실제 가임기는 배란일 수일 전부터 시작됩니다.',
  },
  {
    question: '피임을 위해 이 계산기를 사용해도 될까요?',
    answer: '이 계산기를 피임 목적으로 사용하는 것은 권장하지 않습니다. 달력 기반 방식은 실패율이 높기 때문입니다. 자신에게 맞는 안전하고 확실한 피임법에 대해서는 전문의와 상담하시기 바랍니다.',
  },
];
const howTo = [
  {
    name: '마지막 생리 시작일 선택',
    text: '달력에서 마지막 생리가 시작된 날짜를 클릭하세요.',
  },
  {
    name: '생리 주기 조절',
    text: '슬라이더를 움직여 평소 본인의 평균적인 생리 주기 일수를 설정하세요.',
  },
  {
    name: '결과 확인',
    text: '예상 배란일, 가임기, 그리고 다음 생리 예정일이 자동으로 표시됩니다.',
  },
  {
    name: '달력 탐색',
    text: '내비게이션 화살표를 사용하여 이전 또는 다음 달의 예측 일정을 확인할 수 있습니다.',
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
  inLanguage: 'ko',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: '마지막 생리는 언제 시작되었나요?',
    step1Desc: '달력에서 마지막 생리 주기 첫날을 선택해 주세요.',
    pulseHint: '달력의 날짜를 클릭하여 시작하세요',
    step1Indicator: '시작일',
    step2Indicator: '나의 달력',
    sidebarTitle: '나의 주기',
    sidebarDesc: '생리 주기 일수를 조절하여 결과를 최적화하세요.',
    labelCycleLength: '생리 주기 일수',
    unitDays: '일',
    labelOvulation: '다음 배란 예정일',
    labelFertileWindow: '가임기 (임신 가능성 높음)',
    labelNextPeriod: '다음 생리 예정일',
    legendSelection: '선택한 날짜',
    legendPeriod: '생리 기간',
    legendFertile: '가임일',
    legendOvulation: '배란일',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 자료',
  },
  seo: [
    {
      type: 'title',
      text: '배란일 및 가임기 계산: 생리 주기와 임신을 위한 완전 가이드',
      level: 2,
    },
    {
      type: 'summary',
      title: '가임기에 관한 5가지 핵심 포인트',
      items: [
        '배란은 보통 다음 생리 시작일 약 14일 전에 발생합니다.',
        '가장 임신 확률이 높은 가임기는 배란 전 5일부터 배란 당일까지입니다.',
        '정자는 여성 체내에서 최대 5일 동안 생존할 수 있습니다.',
        '불규칙한 주기의 경우 달력 방식의 예측 신뢰도가 낮아집니다.',
        '더 정확한 예측을 위해서는 기초체온이나 배란 테스트기 활용이 효과적입니다.',
      ],
    },
    {
      type: 'title',
      text: '가임기 계산 원리',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구는 오기노 방식과 표준 배란 모델을 기반으로 합니다. 28일 주기의 경우 배란은 대략 14일째에 발생하며, 계산기는 이 시점을 중심으로 임신 가능성이 가장 높은 기간을 표시합니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14일 전', label: '다음 생리 시작일 기준' },
        { value: '6일간', label: '가임기 지속 기간' },
        { value: '12-24시간', label: '난자 생존 기간' },
      ],
    },
    {
      type: 'title',
      text: '생리 주기의 단계별 특징',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '여포기 (Follicular Phase)',
          description: '생리 시작부터 배란 전까지의 단계입니다.',
          points: [
            'FSH 호르몬의 영향으로 난포가 성숙합니다.',
            '규칙적인 주기에서 보통 10~14일간 지속됩니다.',
            '에스트로겐 수치가 점진적으로 상승합니다.',
          ],
        },
        {
          title: '황체기 (Luteal Phase)',
          description: '배란 이후부터 다음 생리 전까지의 단계입니다.',
          points: [
            '황체에서 프로게스테론이 분비되어 자궁 내막을 두껍게 만듭니다.',
            '정상적인 생리 주기에서 약 14일로 매우 일정합니다.',
            '수정이 이루어지지 않으면 황체가 퇴화하며 생리가 시작됩니다.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '계산기는 표준 모델을 따르지만, 실제 주기는 매달 다를 수 있습니다. 정확도를 높이려면 기초체온 기록이나 배란 테스트기를 함께 사용하는 것을 추천합니다.',
    },
    {
      type: 'title',
      text: '배란을 알리는 신체적 신호',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '자궁경부 점액 변화: 가임기에는 달걀 흰자처럼 투명하고 잘 늘어나는 점액이 나옵니다.',
        '기초체온의 변화: 배란 직후 체온이 미세하게(0.2~0.4℃) 상승하며 고온기에 진입합니다.',
        '배란통: 배란이 일어나는 쪽 하복부에 가벼운 통증이나 불편함을 느낄 수 있습니다.',
        '성욕 증대: 호르몬 변화로 인해 배란기 근처에 성욕이 일시적으로 높아질 수 있습니다.',
        '복부 팽만감: 배란기에 아랫배가 묵직하거나 팽팽한 느낌을 받을 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '생활 습관과 가임력',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '만성적인 스트레스는 배란 장애를 일으키거나 주기를 불규칙하게 만듭니다.',
        '체중의 영향: 저체중이나 과체중 모두 호르몬 불균형을 유발해 배란에 영향을 줍니다.',
        '적당한 운동은 주기를 일정하게 돕지만, 과도한 고강도 운동은 배란을 억제할 수 있습니다.',
        '흡연은 난소 기능을 저하시키고 폐경 시기를 앞당기는 요인이 됩니다.',
        '엽산, 철분, 항산화제가 풍부한 식단은 건강한 가임력 유지에 도움을 줍니다.',
      ],
    },
    {
      type: 'title',
      text: '주기 모니터링 방법 비교',
      level: 3,
    },
    {
      type: 'table',
      headers: ['방법', '신뢰도', '비용'],
      rows: [
        ['달력 계산법', '중', '무료'],
        ['기초체온법', '상 (지속적 기록 필요)', '하'],
        ['배란 테스트기 (LH)', '상', '중'],
        ['디지털 가임기 모니터', '최상', '상'],
        ['난포 추적 초음파', '가장 정확', '임상 확인'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '배란 (Ovulation)',
          definition: '황체형성호르몬(LH)이 급증하며 성숙한 난자가 난포 밖으로 배출되는 현상입니다. 한 주기에 한 번 발생합니다.',
        },
        {
          term: '가임 윈도우 (Fertile Window)',
          definition: '가장 임신 확률이 높은 기간으로, 배란 전 5일과 배란 당일까지를 포함합니다.',
        },
        {
          term: '자궁경부 점액',
          definition: '자궁 입구에서 분비되는 액체로, 배란기에는 정자가 잘 통과할 수 있도록 투명하고 끈적이는 상태로 변합니다.',
        },
        {
          term: '기초체온',
          definition: '충분한 휴식을 취한 후 깨어나자마자 측정하는 최소 체온입니다. 배란 후 프로게스테론의 영향으로 약간 상승합니다.',
        },
      ],
    },
  ],
  faqTitle: "자주 묻는 질문",
  faq,
  bibliographyTitle: "참고 자료",
  bibliography: [
    {
      name: 'WHO (세계보건기구) - 가족 계획',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'ACOG (미국산부인과학회) - 가임력 인식',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: '대한산부인과학회',
      url: 'https://www.ksog.org',
    },
    {
      name: 'Wilcox AJ et al. (NEJM, 1995) - 배란과 성관계 시점의 연관성',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

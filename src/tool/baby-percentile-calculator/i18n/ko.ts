import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-weight-height-percentile';
const title = 'WHO 영유아 성장도표(백분위) 계산기';
const description = 'WHO(세계보건기구) 성장도표(0-5세)를 기준으로 아기의 체중, 신장, BMI 백분위를 계산합니다.';
const faq = [
  {
    question: '50 백분위수는 무엇을 의미하나요?',
    answer: '50 백분위수는 중앙값을 나타냅니다. 즉, 같은 연령과 성별의 아기들 중 절반은 그보다 무겁거나(또는 크거나) 절반은 가볍다는(또는 작다는) 것을 의미합니다. 이것은 이상적인 값이라기보다 분포의 중심이 되는 값입니다.',
  },
  {
    question: '백분위가 낮으면 건강에 문제가 있는 건가요?',
    answer: '꼭 그렇지는 않습니다. 낮은 백분위(예: P10)라 하더라도 시간이 지남에 따라 안정적으로 유지된다면 지극히 정상일 수 있습니다. 중요한 것은 단일 수치가 아니라 성장 추세입니다. 항상 소아과 전문의와 상담하십시오.',
  },
  {
    question: '이 계산기는 어떤 성장 도표를 사용하나요?',
    answer: '이 계산기는 Multicentre Growth Reference Study(MGRS)를 기반으로 작성된 0~5세 어린이를 위한 세계보건기구(WHO) 성장 기준을 사용합니다.',
  },
  {
    question: '영유아 BMI란 무엇인가요?',
    answer: '영유아 체질량지수(BMI)는 체중을 신장의 제곱으로 나눈 값입니다. 아기의 BMI 백분위는 성인과 다르며 각 연령과 성별에 맞는 전용 도표를 통해 해석해야 합니다.',
  },
  {
    question: '아기를 얼마나 자주 측정해야 하나요?',
    answer: '생후 초기 몇 달 동안은 보통 정기 검진 때마다 소아과 의사가 성장을 확인합니다. 집에서는 성장 추세를 관찰하기 위해 매달 한 번씩 체중과 신장을 기록하는 것이 좋습니다.',
  },
];
const howTo = [
  {
    name: '아기의 성별 선택',
    text: '적절한 WHO 도표를 적용하기 위해 남아 또는 여아를 선택하세요.',
  },
  {
    name: '연령 입력',
    text: '슬라이더나 화살표를 사용하여 개월 수(0~60개월)를 입력하세요.',
  },
  {
    name: '체중과 신장 입력',
    text: '체중(kg)과 신장(cm)을 입력하세요.',
  },
  {
    name: '백분위 확인',
    text: '체중, 신장, BMI 백분위가 WHO 도표에 따라 자동 계산됩니다.',
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
  inLanguage: 'ko',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: '측정 데이터',
    labelSex: '아기의 성별',
    sexBoy: '남아',
    sexGirl: '여아',
    unitMonths: '개월 수만 표시',
    unitYearsMonths: '년 + 개월',
    labelWeight: '체중 (kg)',
    labelHeight: '신장 (cm)',
    btnAddHistory: '기록에 추가',
    btnClearHistory: '데이터 삭제',
    labelDashboard: '성장 대시보드',
    labelWeight2: '체중',
    labelHeight2: '신장',
    labelBMI: 'BMI',
    labelCalculating: '계산 중...',
    disclaimer: '백분위수는 통계적인 도구일 뿐입니다. 결과 해석에 대해서는 항상 소아과 의사와 상담하십시오.',
    labelLowRange: '낮은 범위',
    labelLowNormal: '평균보다 낮음',
    labelNormal: '정상 범위',
    labelHighNormal: '평균보다 높음',
    labelHighRange: '높은 범위',
    alertOutOfRange: '수치가 P3~P97 범위를 벗어났습니다. 소아과 의사와 상담하세요.',
    labelMonths: '개월',
    labelYears: '세',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고문헌',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO 성장도표 계산기: 아기의 성장을 이해하기 위한 가이드',
      level: 2,
    },
    {
      type: 'summary',
      title: '아기의 백분위를 해석하는 5가지 핵심',
      items: [
        '단일 백분위 수치 하나가 아기의 건강을 정의하지 않습니다. 중요한 것은 시간에 따른 추세입니다.',
        'P3에서 P97 사이의 백분위는 통계적 정상 범위 내에 있는 것으로 간주됩니다.',
        '아기의 BMI는 독자적인 곡선을 따르므로 성인 기준치와 비교해서는 안 됩니다.',
        'WHO 성장 곡선은 생후 초기 독점적 모유 수유를 포함하여 최적의 조건에서 자란 아기들을 기반으로 합니다.',
        '적절한 임상적 해석을 위해 항상 성장 기록을 소아과 의사와 공유하세요.',
      ],
    },
    {
      type: 'title',
      text: '아기를 올바르게 측정하는 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '가능하다면 항상 같은 체중계를 사용하고, 옷을 입히지 않은 상태에서 체중을 재세요.',
        '24개월까지는 누운 자세(신장)로 측정하세요.',
        '2세 이후부터는 선 자세(신장)로 측정하세요.',
        '일관성을 위해 매일 같은 시간에 측정하세요.',
      ],
    },
    {
      type: 'tip',
      html: 'P3 미만이라고 해서 자동으로 건강 문제가 있다는 의미는 아닙니다. 가장 중요한 것은 성장 곡선이 시간이 지나도 꾸준한 추세를 유지하는지 관찰하는 것입니다.',
    },
    {
      type: 'title',
      text: '백분위 해석',
      level: 3,
    },
    {
      type: 'table',
      headers: ['백분위', '해석', '권장 조치'],
      rows: [
        ['P97 이상', '높은 범위', '다음 방문 시 소아과 의사와 상의'],
        ['P85 ~ P97', '평균보다 높음', '정상적인 추적 관찰'],
        ['P15 ~ P85', '정상 범위', '특별한 조치 필요 없음'],
        ['P3 ~ P15', '평균보다 낮음', '정상적인 추적 관찰'],
        ['P3 이하', '낮은 범위', '소아과 의사와 상담'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs Orbegozo 곡선',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO 성장 곡선',
          description: '최적의 조건에서 자란 6개국 아기들을 기반으로 한 국제 표준.',
          points: [
            '검증된 국제 표준',
            '6개국 아기 및 최적 조건 기반',
            '최신 과학적 근거에 따른 업데이트',
            '지역적 유전적 변이를 반영하지 못할 수 있음',
          ],
        },
        {
          title: 'Orbegozo 곡선',
          description: '스페인 인구에 맞게 조정된 곡선으로, 이전 수십 년 동안 널리 사용되었습니다.',
          points: [
            '스페인 인구에 최적화',
            '과거 스페인에서 널리 채택됨',
            '오래된 기준 인구 기반',
            '국제적 활용도 낮음',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5세', label: '참조 표준' },
        { value: '성장 추세 곡선', label: '핵심 변수' },
        { value: 'LMS 파라미터', label: '기술적 정밀도' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: '어떤 수치가 참조 집단의 평균에서 몇 표준 편차만큼 떨어져 있는지를 나타내는 수치입니다. Z-Score 0은 50 백분위수와 같습니다.',
        },
        {
          term: '균형(Harmony)',
          definition: '체중과 신장 사이의 적절한 비율. 아기의 체중 백분위가 낮더라도 신장 역시 같은 비율로 낮다면 "균형이 잡혔다"고 볼 수 있습니다.',
        },
        {
          term: '신체 계측',
          definition: '성장 및 영양 상태를 평가하는 데 사용되는 신체 측정값(체중, 신장, 머리 둘레, BMI)의 집합입니다.',
        },
        {
          term: 'LMS 파라미터',
          definition: 'WHO가 백분위표를 작성하고 측정값을 Z-Score로 변환하는 데 사용하는 통계적 방법(L=Box-Cox 변환, M=중앙값, S=변동 계수)입니다.',
        },
      ],
    },
  ],
  faqTitle: "자주 묻는 질문",
  faq,
  bibliographyTitle: "참고문헌",
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

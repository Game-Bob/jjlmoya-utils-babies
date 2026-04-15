import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'akachan-feeding-calculator';
const title = '아기 수유 계산기';
const description = '몸무게와 월령에 따라 아기에게 필요한 수유량을 계산합니다. 권장 수유 횟수, 1회당 수유량(ml), 그리고 배고픔과 포만감의 신호.';

const faq = [
  {
    question: '신생아는 얼마나 많은 우유가 필요한가요?',
    answer: '태어난 첫날 아기의 위는 체리 크기 정도로, 1회 수유당 5~7ml만 필요합니다. 5일째부터 위 용량은 45~60ml로 늘어나며, 수유량은 점진적으로 증가합니다.',
  },
  {
    question: '아기는 얼마나 자주 먹어야 하나요?',
    answer: '신생아는 하루에 8~12번의 수유가 필요합니다. 3개월이 되면 보통 7~8번으로 간격이 벌어지며, 6개월이 되면 하루 약 5번 정도 수유하게 됩니다.',
  },
  {
    question: '아기가 충분히 먹고 있는지 어떻게 알 수 있나요?',
    answer: '가장 신뢰할 수 있는 지표는 적절한 체중 증가, 하루에 최소 5~6번의 소변 기저귀, 그리고 수유 후 아기가 보여주는 포만감 신호입니다.',
  },
  {
    question: '모유와 분유의 양은 같나요?',
    answer: '모유 수유의 경우, 양을 측정하지 않고 아기가 원할 때마다 먹이는 것이 권장됩니다. 분유의 경우, 일반적인 기준은 체중 1kg당 하루 150ml이며, 이를 월령에 따른 수유 횟수로 나눕니다.',
  },
];

const howTo = [
  {
    name: '아기 월령 선택',
    text: '단위(일, 주, 월)를 선택하고 슬라이더나 버튼을 사용하여 아이의 연령을 조절하세요.',
  },
  {
    name: '아기 몸무게 입력',
    text: '몸무게 슬라이더나 버튼을 사용하여 아기의 현재 몸무게(kg)를 입력하세요.',
  },
  {
    name: '수유 방식 선택',
    text: '가장 적합한 가이드를 확인하기 위해 모유, 혼합 또는 분유 중에서 선택하세요.',
  },
  {
    name: '권장 수유 계획 확인',
    text: '계산기는 수유 횟수, 1회당 수유량, 그리고 추정된 하루 총 수유량을 보여줍니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: '현재 설정',
    labelPlan: '권장 계획',
    unitDays: '일',
    unitWeeks: '주',
    unitMonths: '개월',
    labelWeight: '아기 몸무게',
    labelFeedType: '수유 방식',
    feedBreast: '모유',
    feedMixed: '혼합',
    feedFormula: '분유',
    labelFreeDemand: '자율 수유',
    labelMlPerFeed: '1회당 ml',
    labelFeedsCount: '수유 횟수 / 24시간',
    labelDailyTotal: '하루 총량 (추정)',
    labelHunger: '배고픔 신호',
    labelFullness: '포만감 신호',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고문헌',
  },
  seo: [
    { type: 'summary', title: '요약: 아기 수유', items: [
      '신생아의 위 용량은 첫날 단 5~7ml에 불과합니다.',
      '분유의 일반적인 기준은 하루 체중 1kg당 150ml입니다.',
      '모유는 정해진 양 없이 아기가 원할 때 수시로 수유합니다.',
      '수유 횟수는 성장함에 따라 감소하여 6개월경 4~5회로 줄어듭니다.',
    ]},
    { type: 'title', text: '몸무게와 월령에 따른 우리 아기 수유량은 얼마인가요?', level: 2 },
    { type: 'paragraph', html: '수유 요구량은 처음 몇 달간 급격히 변합니다. 수유 계산기는 WHO 및 AAP의 소아과 가이드라인에 따라 현재 몸무게와 월령에 기초하여 수유량을 추정합니다.' },
    { type: 'stats', columns: 3, items: [
      { value: '5~7 ml', label: '1일차 (체리 크기)' },
      { value: '150 ml/kg', label: '분유 하루 기준' },
      { value: '8~12 회', label: '신생아 수유 횟수' },
    ]},
    { type: 'title', text: '월령별 아기 위 크기', level: 3 },
    { type: 'table', headers: ['월령', '기준 크기', '위 용량', '수유 횟수/일'], rows: [
      ['1일차', '체리', '5~7 ml', '8~12 회'],
      ['2~4일차', '호두', '22~27 ml', '8~12 회'],
      ['5~30일차', '달걀', '45~60 ml', '8~10 회'],
      ['1~3개월', '최대', '90~120 ml', '7~8 회'],
      ['3~6개월', '최대', '120~150 ml', '5~6 회'],
      ['6개월 이상', '최대', '150~180 ml', '4~5 회'],
    ]},
    { type: 'tip', html: '적절한 수유의 신뢰할 수 있는 지표는 소변 기저귀 횟수입니다. 5일차 이후 하루 5~6회 이상이면 수분이 잘 유지되고 있음을 의미합니다.' },
    { type: 'title', text: '모유 수유 vs 분유 수유', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '모유 수유', description: '자율 수유를 통한 자연스러운 영양 공급.', points: ['정해진 시간표 없음', '활성 항체 포함', '성분의 가변성', '수치화하기 어려움'] },
      { title: '분유 수유', description: '계산된 양에 따른 계획적인 수유.', points: ['3~4시간 간격', '안정적인 성분', '섭취량 조절 용이', '멸균 준비 필요'] },
    ]},
    { type: 'list', items: [
      '적절한 체중 증가: 첫 한 달간 주당 150~200g',
      '하루 최소 5~6번 이상의 소변 기저귀',
      '수유 후 아기가 편안하고 조용한 모습',
      '투명하거나 아주 연한 노란색의 소변',
    ]},
  ],
  faqTitle: "자주 묻는 질문",
  faq,
  bibliographyTitle: "참고문헌",
  bibliography: [
    {
      name: 'WHO - 영유아 영양 가이드',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: '대한소아청소년과학회 - 수유 및 영양 가이드',
      url: 'https://www.pediatric.or.kr',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

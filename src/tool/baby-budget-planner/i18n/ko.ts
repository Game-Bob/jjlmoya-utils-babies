import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = '아기 예산 시뮬레이터';
export const description = '아기의 첫 1년 지출을 계획하기 위한 필수 도구입니다. 육아용품 준비, 월간 비용, 숨겨진 지출을 스마트한 절약 팁과 함께 계산해 보세요.';

export const faq = [
  {
    question: '아기 첫 1년 비용은 얼마나 드나요?',
    answer: '라이프스타일, 보육 필요성, 새 제품 또는 중고 제품 구매 여부에 따라 다르지만, 평균적으로 1,000만 원에서 3,000만 원 정도가 소요될 수 있습니다.',
  },
  {
    question: '신생아를 위한 가장 비싼 품목은 무엇인가요?',
    answer: '가장 큰 일회성 지출은 일반적으로 유모차, 아기방 가구(침대, 서랍장), 카시트입니다. 보육료는 매월 반복되는 지출 중 가장 비중이 큽니다.',
  },
  {
    question: '육아 비용을 어떻게 절약할 수 있나요?',
    answer: '용품과 의류를 중고로 구매하고, 가능하다면 모유 수유를 선택하며, 출산 선물 리스트를 활용해 가족과 지인들로부터 필수품을 선물 받는 것이 가장 효과적인 전략입니다.',
  },
  {
    question: '아기 예산 계획에서 "숨겨진 비용"이란 무엇인가요?',
    answer: '공공요금(냉난방비) 증가, 가족 보험료 인상, 비급여 예방접종이나 표준 리스트에 잘 포함되지 않는 위생용품 등 예상치 못한 비용을 의미합니다.',
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
    name: '프로필 설정하기',
    text: '라이프스타일(절약형, 균형형, 프리미엄), 수유 방식, 보육 전략을 선택합니다.',
  },
  {
    name: '품목 확인하기',
    text: '카테고리(초기 투자, 월간 비용, 주요 마일스톤)를 훑어보며 가격을 조정하거나 중고 품목으로 표시합니다.',
  },
  {
    name: '예산 추적하기',
    text: '첫 1년에 필요한 총액을 확인하고, 품목을 마련해 나가면서 진행 상황을 모니터링합니다.',
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
    priceCurrency: 'KRW',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'baby-budget-planner',
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 문헌',
  seo: [
    { type: 'summary', title: '핵심 요약: 아기 예산', items: [
      '첫 1년 비용은 보통 1,000만 원에서 3,000만 원 사이입니다.',
      '초기 세팅 비용(아기방, 유모차)이 시작 단계에서 가장 큰 부담이 됩니다.',
      '보육료는 매월 반복되는 예산의 최대 50%를 차지할 수 있습니다.',
      '중고 물품을 활용하면 총 예산을 최대 60%까지 줄일 수 있습니다.',
    ]},
    { type: 'title', text: '아기 첫 1년, 실제로 얼마나 드나요?', level: 2 },
    { type: 'paragraph', html: '아기를 맞이할 준비는 단순히 기저귀를 사는 것 그 이상입니다. 일회성 투자와 매월 반복되는 비용을 전략적으로 살펴봐야 합니다. 저희 시뮬레이터는 이러한 지출 곡선을 시각화하고 부모가 되는 과정에서의 재정적 변화에 대비할 수 있도록 도와줍니다.' },
    { type: 'stats', columns: 3, items: [
      { value: '500만 원+', label: '초기 장비 세팅' },
      { value: '15-20만 원', label: '월간 기저귀/위생' },
      { value: '40%+', label: '중고 활용 시 절약' },
    ]},
    { type: 'title', text: '카테고리별 상세: 돈이 어디로 나가나요?', level: 3 },
    { type: 'table', headers: ['카테고리', '주요 품목', '주기', '비용 영향'], rows: [
      ['초기 투자', '아기침대, 유모차, 카시트', '1회성', '높음'],
      ['월간 지출', '기저귀, 분유, 약국용품', '매월', '중간'],
      ['마일스톤', '이유식 의자, 식기, 의류', '수시', '중간'],
      ['보육 비용', '어린이집 / 베이비시터', '매월', '매우 높음'],
    ]},
    { type: 'tip', html: '<strong>전문가 절약 팁:</strong> 고품질 유모차와 아기방 가구는 재판매 가치가 뛰어납니다. 이를 중고로 구매하면 안전이나 스타일을 포기하지 않고도 수백만 원을 절약할 수 있습니다.' },
    { type: 'title', text: '라이프스타일 비교', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: '절약형', 
        description: '중고 물품과 필수품에 집중합니다.', 
        points: ['물려받은 옷 활용', '리퍼브 장비 구매', '모유 수유 중심', '국공립 보육 시설'] 
      },
      { 
        title: '프리미엄', 
        description: '최신 모델과 최대의 편리함을 추구합니다.', 
        points: ['하이테크 육아 가전', '유기농 분유', '디자이너 가구', '1대1 프라이빗 보육'] 
      },
    ]},
    { type: 'title', text: '스마트한 계획 체크리스트', level: 3 },
    { type: 'list', items: [
      '가족 보험 보장 범위 업데이트를 확인하세요.',
      '비급여 예방접종 및 특수 위생용품 예산을 책정하세요.',
      '냉난방비 등 공공요금이 약 20% 증가할 것에 대비하세요.',
      '큰 지출 항목은 가족들의 도움을 받을 수 있도록 미리 선물 리스트를 만드세요.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: '계획 시작하기',
    lifestyleLabel: '라이프스타일 선택',
    lifestyleSaving: '최대한 절약',
    lifestyleBalanced: '균형 잡힌 선택',
    lifestylePremium: '프리미엄',
    feedingLabel: '수유 방식',
    feedingBreast: '모유 수유',
    feedingFormula: '분유 수유',
    feedingMixed: '혼합 수유',
    childcareLabel: '보육 전략',
    childcareHome: '가정 양육',
    childcarePublic: '어린이집',
    childcarePrivate: '사립 보육 / 시터',
    startBtn: '내 예산 생성하기',
    categoryBeforeBirth: '초기 투자 비용',
    categoryMonthByMonth: '매월 반복 지출',
    categoryMilestones: '주요 성장 단계',
    totalNeededLabel: '첫 1년 총 목표액',
    savingsProgressLabel: '준비됨 / 저축됨',
    chartTitle: '월간 지출 곡선',
    ghostAlertsTitle: '숨겨진 비용 알림',
    ghostInsurance: '생명/건강 보험 확인',
    ghostHeating: '냉난방비 +20% 대비',
    ghostVaccines: '선택 예방접종 예산',
    diaperCalcTitle: '기저귀 가격 체크',
    diaperPriceLabel: '팩당 가격',
    diaperUnitsLabel: '팩당 수량',
    secondHandLabel: '중고 / 선물',
    wishlistLabel: '위시리스트 포함',
    itemNursery: '아기방 꾸미기',
    itemStroller: '유모차 및 트래블 시스템',
    itemHospitalBag: '출산 가방 필수품',
    itemDiapers: '기저귀 및 물티슈',
    itemPharmacy: '약국 및 위생용품',
    itemDaycare: '보육료 / 시터 비용',
    itemSolidFood: '이유식 준비기',
    itemClothes: '계절별 의류',
    itemHighChair: '식탁 의자 및 식기 세트',
    editLabel: '가격 수정',
    saveBtn: '저장',
    exportBtn: 'JSON 내보내기',
    importBtn: 'JSON 가져오기',
    resetBtn: '계획 초기화',
    currencySymbol: '원',
    monthPrefix: 'M',
    initialMonthLabel: '시작',
    perMonthLabel: '/월',
    confirmReset: '확실합니까?',
    currencyMultiplier: 1450,
  },
};

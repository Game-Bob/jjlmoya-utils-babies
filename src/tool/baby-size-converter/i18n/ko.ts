import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-size-converter';
const title = '아기 옷 사이즈 변환기';
const description = 'Zara, H&M, Primark, Carter\'s, Kiabi, Mango, Mayoral 등 주요 브랜드의 아기 옷 사이즈를 변환합니다. 키와 몸무게를 입력하여 브랜드별 정확한 사이즈를 확인하세요.';
const faq = [
  {
    question: '아기에게 맞는 옷 사이즈를 어떻게 알 수 있나요?',
    answer: '가장 신뢰할 수 있는 방법은 아기의 키를 기준으로 삼는 것입니다. 유럽 사이즈(50, 56, 62...)는 아기의 키(cm)와 직접 대응됩니다. 변환기에 키와 몸무게를 입력하면 브랜드별 추천 사이즈를 바로 확인할 수 있습니다.',
  },
  {
    question: '브랜드마다 사이즈가 왜 이렇게 다른가요?',
    answer: '브랜드별로 사용하는 패턴(본)이 다르기 때문입니다. H&M과 Primark는 크게 나오는 편이며, Carter\'s와 Mayoral은 다소 타이트하게 나오는 경향이 있습니다. 월령보다는 실제 아기의 치수를 기준으로 선택하세요.',
  },
  {
    question: '두 사이즈 사이에 걸쳐있을 때는 어떤 것을 선택해야 하나요?',
    answer: '항상 큰 사이즈를 선택하는 것이 좋습니다. 아기는 매우 빠르게 성장하며, 넉넉한 사이즈가 아기에게 더 편안하고 오래 입힐 수 있습니다.',
  },
  {
    question: '인치 단위 사이즈도 변환 가능한가요?',
    answer: 'Carter\'s와 같은 미국 브랜드는 인치(in)와 파운드(lb)를 기준으로 합니다. 설정에서 단위를 \'임페리얼\'로 변경하면 자동으로 정확하게 변환됩니다.',
  },
];
const howTo = [
  {
    name: '아기의 키 입력',
    text: '슬라이더나 버튼을 사용하여 아기의 현재 키(cm 또는 in)를 입력합니다.',
  },
  {
    name: '아기의 몸무게 입력',
    text: '아기의 현재 몸무게(kg 또는 lb)를 입력합니다. 일부 브랜드는 몸무게를 기준으로 사이즈를 권장하기도 합니다.',
  },
  {
    name: '브랜드 선택',
    text: '특정 의류 브랜드를 선택하면 추천 사이즈와 의류 상세 치수를 확인할 수 있습니다.',
  },
  {
    name: '사이즈 대조 확인',
    text: '우측 패널에서 모든 가용 브랜드의 대응 사이즈를 한눈에 비교할 수 있습니다.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: '아기 신체 치수',
    labelResults: '추천 대응 사이즈',
    labelHeight: '아기의 키',
    labelWeight: '아기의 몸무게',
    labelPresets: '연령별 권장값',
    unitMetric: '미터법 (cm/kg)',
    unitImperial: '야드 파운드법 (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: '브랜드 및 핏',
    labelSuggested: '추천 사이즈',
    labelChest: '가슴 둘레',
    labelWaist: '허리 둘레',
    labelGarmentMeasures: '의류 예상 치수',
    fitRegular: '일반 핏',
    fitLarge: '루즈 핏',
    fitSmall: '슬림 핏',
    tipTitle: '전문가 조언',
    tipText: '아기는 급격히 성장합니다. 사이즈가 중간에 걸려 있다면, 아기의 활동성을 보장하고 더 오래 입힐 수 있도록 큰 사이즈를 선택하세요.',
    shareAriaLabel: '사이즈 공유',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 자료',
  },
  seo: [
    { type: 'title', text: '아기 옷 사이즈 가이드: Zara, H&M, Primark 등 해외 브랜드 총정리', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: '월평균 성장 예상' },
      { value: '3 개월', label: '한 사이즈 착용 기간' },
      { value: '95%', label: '키 기준 정확도' },
    ]},
    { type: 'tip', html: '월령이 아닌 키를 기준으로 사이즈를 선택하는 것이 가장 정확합니다. 같은 월령이라도 키 차이가 최대 8~10cm까지 날 수 있으며, 이는 한 단계 이상의 사이즈 차이를 의미합니다.' },
    { type: 'title', text: '연령, 키, 몸무게별 사이즈표', level: 3 },
    { type: 'table', headers: ['예상 연령', '키 (cm)', '몸무게 (kg)', '일반 사이즈', '착용 기간'], rows: [
      ['신생아', '50–56', '3–4.5', '50 / RN', '4–6 주'],
      ['1–3 개월', '56–62', '4.5–6', '56–62', '6–8 주'],
      ['3–6 개월', '62–68', '6–8', '62–68', '6–8 주'],
      ['6–9 개월', '68–74', '8–9.5', '68–74', '6–8 주'],
      ['9–12 개월', '74–80', '9.5–11', '74–80', '6–8 주'],
      ['12–18 개월', '80–86', '11–13', '80–86', '3–4 개월'],
      ['18–24 개월', '86–92', '13–15', '86–92', '3–4 개월'],
    ]},
    { type: 'title', text: '브랜드별 사이즈 경향 (크게 vs 작게)', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: '사이즈가 큰 브랜드 (한 단계 작게 선택)',
        description: '여유 있게 제작되는 브랜드로 보통보다 작게 선택하는 것이 맞을 수 있습니다.',
        points: [
          'H&M: 보통 한 사이즈 정도 크게 나옴',
          'Primark: 전체적으로 넉넉한 루즈 핏',
          'Lupilu (Lidl): 편안하고 헐렁한 스타일',
          '성장 곡선이 완만한 아기에게 추천',
        ],
      },
      {
        title: '사이즈가 작은 브랜드 (한 단계 크게 선택)',
        description: '다소 타이트하게 제작되는 브랜드로 보통보다 크게 선택하는 것이 좋습니다.',
        points: [
          "Carter's: 미국식 슬림 핏",
          'Mayoral: 유럽식 슬림 핏',
          'Neck & Neck: 전체적으로 피트되는 사이즈',
          '성장 곡선이 가파른 아기에게 추천',
        ],
      },
    ]},
    { type: 'title', text: '아기 옷 사이즈 실패하지 않는 방법', level: 3 },
    { type: 'list', items: [
      '구매 전 반드시 실제 치수를 측정하고, 월령만 믿지 말 것',
      '사이즈 경계에 있다면 무조건 큰 사이즈를 선택할 것',
      '바디수트 등은 기저귀 공간을 충분히 고려할 것',
      '유럽 사이즈(50, 56, 62...)는 키(cm)와 동일함',
      '세탁 후 수축을 고려할 것 (면 소재는 최대 5%까지 줄어들 수 있음)',
    ]},
    { type: 'glossary', items: [
      {
        term: '사이즈 50 / 신생아용 (RN)',
        definition: '키 50cm, 몸무게 3.5kg까지의 신생아를 위한 사이즈입니다. 대부분의 아기가 첫 며칠 만에 작아질 만큼 매우 작게 나옵니다.',
      },
      {
        term: '밑위 길이',
        definition: '사타구니에서 허리까지의 길이입니다. 바디수트 등에서 매우 중요하며, 밑위가 짧으면 아기의 움직임이 불편해집니다.',
      },
      {
        term: '몸무게 기준 선택',
        definition: "Carter's 등 미국 브랜드에서 주로 사용하는 기준입니다. 키와 몸무게의 비율이 표준과 다른 아기들에게 유용한 기준입니다.",
      },
      {
        term: '백 스트레치 (어깨 겹침 디자인)',
        definition: '머리로 입히지 않고 아래로 내려서 입힐 수 있도록 설계된 목 부분 디자인입니다. 목을 가누지 못하는 초기 개월 수에 필수적입니다.',
      },
    ]},
    { type: 'summary', title: '꼭 기억할 점', items: [
      '월령보다는 키가 사이즈 선택의 가장 정확한 기준입니다.',
      'H&M, Primark는 크게, Carter\'s, Mayoral은 작게 나옵니다.',
      '숫자로 된 유럽 사이즈(50, 56...)는 아기의 키(cm)를 뜻합니다.',
      '사이즈 경계에서는 무조건 크게 사는 것이 아기에게 더 좋습니다.',
      '어깨 겹침 디자인과 넉넉한 밑위 길이는 아기 옷의 핵심 체크 포인트입니다.',
    ]},
  ],
  faqTitle: "자주 묻는 질문",
  faq,
  bibliographyTitle: "참고 자료",
  bibliography: [
    {
      name: 'Zara - 키즈 사이즈 가이드',
      url: 'https://www.zara.com/kr/ko/size-guide.html',
    },
    {
      name: 'H&M - 베이비 사이즈 가이드',
      url: 'https://www2.hm.com/ko_kr/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - 아동 성장 표준',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - 사이즈 가이드',
      url: 'https://www.mayoral.com/int/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

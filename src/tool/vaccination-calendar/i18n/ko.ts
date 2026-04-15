import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-vaccination-calendar-spain';
const title = '스페인 영유아 예방접종 일정표';
const description = 'AEP 2026 일정에 따라 아기의 정확한 예방접종 날짜를 계산해 보세요.';
const faq = [
  {
    question: 'AEP 2026 예방접종 일정표란 무엇인가요?',
    answer: '스페인 소아과학회(AEP)에서 2026년을 위해 권장하는 예방접종 일정입니다. 출생부터 14세까지 영유아 및 어린이를 위한 모든 정기 및 선택 예방접종이 포함되어 있습니다.',
  },
  {
    question: '일정표대로 접종하는 것이 의무인가요?',
    answer: '스페인에서 예방접종은 법적 의무는 아니지만 강력히 권장됩니다. 정기 일정에 포함된 백신은 무료이며 공공 보건 센터에서 접종받을 수 있습니다.',
  },
  {
    question: '접종 시기를 놓치면 어떻게 하나요?',
    answer: '접종이 늦어지더라도 처음부터 다시 시작할 필요는 없습니다. 소아과 의사가 중단된 부분부터 어떻게 재개할지 안내해 줄 것입니다. 중요한 것은 가능한 한 빨리 권장 횟수를 완료하는 것입니다.',
  },
  {
    question: '같은 날 여러 개의 백신을 접종할 수 있나요?',
    answer: '네, 같은 날 여러 백신을 접종하는 것은 일반적이며 안전합니다. 6가 혼합 백신과 같이 한 번의 주사로 6가지 질병을 동시에 예방할 수 있는 백신도 있습니다.',
  },
  {
    question: '미숙아에게 예방접종은 안전한가요?',
    answer: '미숙아는 신생아 전문의의 특별한 지시가 없는 한 교정 연령이 아닌 출생 시 연령(역연령)에 따라 접종해야 합니다. 전염병에 더 취약하므로 우선적으로 접종받아야 합니다.',
  },
];
const howTo = [
  {
    name: '생년월일 입력',
    text: '아기의 생년월일(일, 월, 년)을 해당 필드에 입력합니다.',
  },
  {
    name: '다음 접종 일정 확인',
    text: '계산기가 자동으로 다음 예방접종 시기와 해당 백신을 보여줍니다.',
  },
  {
    name: '전체 일정 검토',
    text: '과거 및 미래 일정 섹션을 열어 전체 예방접종 일정표를 확인할 수 있습니다.',
  },
  {
    name: '일정 내보내기',
    text: '버튼을 눌러 .ics 파일을 다운로드하면 향후 모든 일정을 휴대폰 캘린더에 추가할 수 있습니다.',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: '아기 생년월일',
    placeholderDD: '일',
    placeholderMM: '월',
    placeholderAAAA: '년',
    emptyMsg: '예방접종 일정표를 보려면 아기의 생년월일을 입력해 주세요.',
    invalidMsg: '입력하신 날짜가 유효하지 않습니다.',
    futureMsg: '미래의 날짜는 입력할 수 없습니다.',
    labelNextAppointment: '계산된 다음 접종 일정',
    btnAddReminder: '휴대폰 캘린더에 추가',
    btnToday: '오늘 접종일입니다! 아기 수첩을 챙기세요',
    labelPassed: '지난 접종 일정',
    labelFuture: '향후 일정표',
    labelStatusOk: '완료',
    labelStatusPending: '예정',
    labelSource: '출처: AEP 2026',
    labelShare: '이 일정 공유하기',
    faqTitle: '자주 묻는 질문',
    bibliographyTitle: '참고 문헌',
    labelMonth: '개월',
    labelMonths: '개월',
    labelYear: '세',
    labelYears: '세',
    labelDay: '일',
    labelDays: '일',
    labelAnd: '그리고',
    labelVaccination: '예방접종',
    labelAppointment: '접종 예약',
    vac_hexavalente: '6가 혼합 백신',
    vac_neumococo: '폐렴구균 (VCN15/20)',
    vac_meningococo_b: '수막구균 B형 (Bexsero)',
    vac_rotavirus: '로타바이러스',
    vac_meningococo_acwy: '수막구균 ACWY형',
    vac_triple_virica: 'MMR (홍역, 볼거리, 풍진)',
    vac_varicela: '수두',
    vac_gripe: '독감 (계절성 독감)',
    vac_vph: 'HPV (인유두종바이러스)',
    vac_tdpa: 'Tdpa (파상풍, 디프테리아, 백일해)',
    vac_polio_booster: '폴리오 (참조용 추가 접종)',
  },
  seo: [
    { type: 'title', text: '예방접종 계산기: 우리 아이 다음 접종은 언제인가요?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '95% 이상', label: '예방 효과' },
      { value: '14회', label: '전체 접종 횟수' },
      { value: '공비 지원', label: '스페인 AEP 비용' },
      { value: '높음', label: '안전성' },
    ]},
    { type: 'tip', html: 'AEP 2026 일정표에는 수막구균 B형 백신 대상 확대 및 12세 이상 남녀 모두를 위한 HPV 권장 사항 업데이트 등 중요한 변경 사항이 포함되어 있습니다.' },
    { type: 'title', text: 'AEP 2026 일정표 주요 변경 사항', level: 3 },
    { type: 'list', items: [
      '수막구균 B형 (Bexsero): 2, 4, 12개월 차에 접종하는 2+1 일정 확정.',
      'HPV 백신: 성별과 관계없이 12세 이상의 모든 청소년으로 대상 확대.',
      '폐렴구균: 지역별 가용 상황에 따라 VCN15 또는 VCN20을 사용하도록 권장 업데이트.',
      '로타바이러스: 스페인 전역의 정기 일정표에 경구용 백신이 공식 포함.',
      'Tdpa: 백일해 면역 유지를 위해 6세와 12세에 추가 접종 권장.',
    ]},
    { type: 'title', text: '스페인 자치주별 차이점', level: 3 },
    { type: 'list', items: [
      '일부 자치주에서는 국가 일정표에 없는 추가 백신을 포함할 수 있습니다.',
      '로타바이러스 백신의 지원 여부는 주마다 다르지만, 보편적 지원으로 확대되는 추세입니다.',
      '수막구균 ACWY형은 지역 프로토콜에 따라 약간 다른 연령대에 접종될 수 있습니다.',
      '현재 거주 지역의 정확한 일정을 확인하려면 반드시 소아과나 보건소에 문의하세요.',
    ]},
    { type: 'title', text: '휴대폰으로 일정을 내보내는 방법', level: 3 },
    { type: 'list', items: [
      '계산기에 아기의 생년월일을 입력합니다.',
      ' 휴대폰 캘린더에 추가 버튼을 눌러 .ics 파일을 다운로드합니다.',
      '구글 캘린더, 애플 캘린더 등의 앱으로 파일을 엽니다.',
      '날짜와 해당 백신 정보가 포함된 예방접종 일정이 캘린더에 저장됩니다.',
    ]},
    { type: 'title', text: '일반적인 부작용', level: 3 },
    { type: 'list', items: [
      '접종 부위의 붉어짐 또는 부어오름: 보통 1-2일 이내에 사라집니다.',
      '미열(37.5–38.5 °C): 접종 후 처음 24-48시간 동안 흔히 나타납니다.',
      '칭얼거림 또는 보채기: 초기 접종 후 영아들에게서 자주 나타납니다.',
      '졸음 또는 일시적인 식욕 부진: 별도의 치료가 필요하지 않습니다.',
      '아나필락시스와 같은 심각한 반응은 극히 드뭅니다(100만 건당 1건 미만).',
    ]},
    { type: 'tip', html: '접종 전 아기를 잘 먹이고 편안한 옷을 입히는 것이 도움이 됩니다. 접종 후 피부 접촉(캥거루 케어)이나 모유 수유는 통증과 염증을 자연스럽게 진정시키는 데 도움이 됩니다.' },
    { type: 'summary', title: '꼭 기억해야 할 사항', items: [
      'AEP 2026 일정표는 완전한 보호를 위해 12세까지 총 14회 접종을 포함합니다.',
      '생후 1년 동안의 백신은 동시에 최대 9가지의 심각한 질병으로부터 아기를 보호합니다.',
      '가벼운 부작용은 정상이지만 1-2일 내에 사라집니다.',
      '클릭 한 번으로 모든 예방접종 일정을 휴대폰 캘린더로 내보낼 수 있습니다.',
      '현재 거주하시는 지역의 일정에 대해 궁금한 점이 있으면 항상 소아과 의사와 상담하세요.',
    ]},
  ],
  faqTitle: "자주 묻는 질문",
  faq,
  bibliographyTitle: "참고 문헌",
  bibliography: [
    {
      name: '스페인 소아과학회 (AEP) - 2026년 예방접종 일정표',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: '스페인 보건부 - 예방접종 캘린더',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: '세계보건기구(WHO) - 예방접종',
      url: 'https://www.who.int/ko/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - 소아 및 청소년 권장 예방접종 일정',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

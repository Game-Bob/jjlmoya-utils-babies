import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = '진통 타이머';
export const description = '큰 터치 버튼, 호흡 가이드, 기록 및 5-1-1 패턴 알림으로 진통의 지속 시간과 빈도를 추적하세요.';

export const faq = [
  {
    question: '진통의 5-1-1 규칙이란 무엇인가요?',
    answer: '5-1-1 규칙은 보통 진통이 약 5분 간격으로 발생하고, 약 1분 동안 지속되며, 약 1시간 동안 계속되는 것을 의미합니다. 많은 산부인과 팀이 조언을 구하기 위한 실용적인 신호로 사용하지만, 개인의 계획은 다를 수 있습니다.',
  },
  {
    question: '언제 조산사나 병원에 연락해야 하나요?',
    answer: '진통이 규칙적이고 강해지거나 지시받은 타이밍 지침과 일치할 때 산부인과 팀에 연락하세요. 심한 출혈, 태동 감소, 발열, 심한 통증, 양막 파수와 함께 우려되는 증상이 있거나 무언가 이상하다고 느껴지면 즉시 전화하세요.',
  },
  {
    question: '이 타이머가 활발한 진통을 진단하나요?',
    answer: '아니요. 시간을 기록하고 일반적인 진통 패턴을 강조할 뿐입니다. 자궁경부 변화, 태아 위치, 양막 상태, 증상 및 임상 병력은 자격을 갖춘 의료 전문가의 평가가 필요합니다.',
  },
  {
    question: '진통 빈도는 어떻게 계산되나요?',
    answer: '빈도는 한 진통의 시작부터 이전 진통의 시작까지 계산됩니다. 지속 시간은 시작 버튼을 누른 순간부터 정지 버튼을 누를 때까지 계산됩니다.',
  },
  {
    question: '전구 진통 중에도 사용할 수 있나요?',
    answer: '네. 진통이 더 규칙적으로 변하는지 아니면 약해지는지 확인하는 데 도움이 됩니다. 진통이 계속 불규칙하거나 휴식이나 수분 섭취로 변화하거나 강해지지 않는다면 여전히 전구 진통일 수 있지만, 의료팀이 안내해 줄 수 있습니다.',
  },
  {
    question: '왜 호흡 가이드가 포함되어 있나요?',
    answer: '느리고 꾸준한 호흡은 긴장을 줄이고 주의력을 집중시키며 각 진통 중 대처를 돕습니다. 애니메이션은 편안함을 위한 보조 도구일 뿐이며 출산 지원을 대체하지 않습니다.',
  },
  {
    question: '첫째 아이가 아닌데도 5-1-1을 기다려야 하나요?',
    answer: '항상 그렇지는 않습니다. 이전 질식 분만 후에는 진통이 더 빨리 진행될 수 있습니다. 특히 고위험 임신이거나 병원에서 멀리 살거나 이전 진통이 빨랐던 경우에는 조산사나 산부인과 의사의 계획을 따르세요.',
  },
  {
    question: '진통 기록이 저장되나요?',
    answer: '타이머는 최근 기록을 브라우저에 저장하므로 세션을 잃지 않고 페이지를 새로 고칠 수 있습니다. 초기화 버튼을 사용하여 로컬 기록을 지우세요.',
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
    name: '타이밍 시작',
    text: '진통이 시작되면 메인 버튼을 누르세요.',
  },
  {
    name: '호흡 가이드 사용',
    text: '진통이 활성화된 동안 확장 및 수축하는 원을 따라가세요.',
  },
  {
    name: '타이밍 중지',
    text: '진통이 끝나면 버튼을 다시 눌러 지속 시간과 간격을 기록하세요.',
  },
  {
    name: '패턴 검토',
    text: '기록과 알림 패널을 확인하여 산부인과 팀에 연락할지 결정하세요.',
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
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고문헌',
  seo: [
    {
      type: 'summary',
      title: '진통 타이밍에 관한 주요 사실',
      items: [
        '지속 시간은 진통의 시작부터 끝까지 측정됩니다.',
        '빈도는 한 진통의 시작부터 다음 진통의 시작까지 측정됩니다.',
        '5-1-1 패턴은 약 5분 간격, 1분 지속, 1시간 동안을 의미합니다.',
        '진통 타이밍은 의사 결정을 지원하지만 자궁경부 개대나 활발한 진통을 자체적으로 확인할 수는 없습니다.',
        '항상 담당 조산사, 산부인과 의사 또는 분만실의 지침을 따르세요.',
      ],
    },
    {
      type: 'title',
      text: '진통 타이머: 지속 시간, 빈도 및 5-1-1 패턴 추적',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '진통 타이머는 가족이 스트레스 많고 판단하기 어려운 순간을 명확한 기록으로 전환하는 데 도움이 됩니다. 임신 후기에는 진통이 여전히 불규칙한 연습 진통인지, 전구 진통인지, 초기 진통인지, 아니면 분만실에 전화할 만한 패턴인지 궁금해하는 것이 일반적입니다. 진통이 시작될 때 시작 버튼을 누르고 끝날 때 정지 버튼을 누르면, 이 도구는 한 진통 시작부터 다음 진통 시작까지 <strong>지속 시간</strong>을 초 단위로, <strong>빈도</strong>를 분 단위로 계산합니다.',
    },
    {
      type: 'paragraph',
      html: '목표는 진통을 진단하는 것이 아닙니다. 목표는 구체적인 용어로 무슨 일이 일어나고 있는지 설명하는 데 도움을 주는 것입니다: 각 진통이 얼마나 오래 지속되는지, 얼마나 가까이 붙어 있는지, 패턴이 더 강해지고 있는지, 그리고 5-1-1 규칙과 같은 일반적인 지침과 일치할 만큼 충분히 오래 일관되게 유지되었는지 여부입니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5분', label: '일반적인 빈도 신호' },
        { value: '60초', label: '전형적인 5-1-1 지속 시간' },
        { value: '1시간', label: '패턴 안정성 윈도우' },
      ],
    },
    {
      type: 'title',
      text: '5-1-1 알림 해석 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '5-1-1 규칙은 널리 사용되는 경험 법칙입니다: 진통이 약 5분 간격으로 발생하고, 약 1분 동안 지속되며, 약 1시간 동안 계속됩니다. 많은 출산 팀이 이 패턴을 개별 조언을 구하기 위한 실용적인 신호로 사용하며, 특히 첫 진통 시에 그렇습니다. 이 타이머는 최근 진통이 5분 이하 간격이고, 최소 60초 동안 지속되며, 세션 전반에 걸쳐 유지되었을 때 패턴을 강조합니다.',
    },
    {
      type: 'table',
      headers: ['관찰되는 패턴', '의미할 수 있는 것', '유용한 다음 단계'],
      rows: [
        ['불규칙한 타이밍, 다양한 길이', '전구 진통 또는 초기 진통 가능성', '휴식, 수분 섭취, 자세 변경 후 경고 증상이 없으면 계속 관찰하세요'],
        ['간격이 좁아지고 있지만 여전히 60초 미만', '진통이 진행 중일 수 있지만 아직 5-1-1에 해당하지 않음', '계속 타이밍을 재고 개인 출산 계획 지침을 따르세요'],
        ['약 5분 간격, 60초 지속, 약 1시간 동안', '일반적인 5-1-1 연락 패턴', '조산사, 산부인과 의사 또는 분만실에 연락하여 개인 맞춤 지침을 받으세요'],
        ['갑작스러운 강한 진통, 압박감 또는 밀어내고 싶은 충동', '진통이 빠르게 진행 중일 수 있음', '특히 첫째 아이가 아니라면 즉시 전화하세요'],
      ],
    },
    {
      type: 'title',
      text: '진통 시간을 올바르게 측정하는 방법',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '조임, 경련 또는 파도 같은 감각이 시작될 때 시작 버튼을 누르세요.',
        '진통이 분명히 사라지고 다시 이완될 수 있을 때 정지 버튼을 누르세요.',
        '한 진통의 끝에서 다음 진통의 시작까지 빈도를 측정하지 마세요. 임상적으로 빈도는 보통 시작부터 시작까지 계산됩니다.',
        '한 번의 고립된 진통은 오해의 소지가 있을 수 있으므로 패턴을 해석하기 전에 여러 번의 진통을 기록하세요.',
        '의료팀이 5-1-1과 다른 기준을 제시했다면 먼저 그 지침을 사용하세요.',
      ],
    },
    {
      type: 'title',
      text: '전구 진통과 활발한 진통 패턴 비교',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '흔히 전구 진통 또는 초기 진통',
          description: '진통이 불편하고 실제일 수 있지만, 패턴이 아직 출산을 향해 꾸준히 진행되지 않을 수 있습니다.',
          points: [
            '간격이 일관되게 좁혀지지 않고 변동합니다',
            '휴식, 수분 섭취, 목욕 또는 자세 변경으로 진통이 완화될 수 있습니다',
            '강도가 시간이 지남에 따라 증가하지 않고 비슷하게 유지될 수 있습니다',
            '자궁경부가 천천히 변하거나 아직 많이 변하지 않았을 수 있으며, 이는 의료 전문가만 평가할 수 있습니다',
          ],
        },
        {
          title: '활발한 진통에 더 가까운 경우',
          description: '패턴이 더 규칙적이 되고, 말하기 어려워지며, 점점 더 강해집니다.',
          points: [
            '여러 기록에서 진통 간격이 점점 좁아집니다',
            '각 진통이 약 45초에서 70초 이상 지속됩니다',
            '정점에서 멈추거나, 숨을 쉬거나, 집중해야 합니다',
            '휴식, 수분 섭취 또는 자세 변경 후에도 패턴이 지속됩니다',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '타이머를 기다리지 말아야 할 때',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>안전 참고 사항:</strong> 심한 출혈, 태동 감소, 심한 두통, 발열, 녹색 또는 악취가 나는 액체, 심한 지속적 통증, 임신중독증 증상 또는 기타 긴급한 우려 사항이 있는 경우 타이머 알림을 기다리지 마세요. 현지 지침에 따라 산부인과 팀이나 응급 서비스에 연락하세요.',
    },
    {
      type: 'title',
      text: '기록에 표시되는 내용',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '시작 시간: 진통이 시작된 시계 시간.',
        '지속 시간: 정지 시간에서 시작 시간을 뺀 값으로, 초 단위로 반올림됩니다.',
        '간격: 현재 시작 시간에서 이전 진통 시작 시간을 뺀 값으로, 분 단위로 표시됩니다.',
        '최근 추세: 진통이 간격이 벌어지고 있는지, 불규칙하게 유지되는지, 아니면 더 규칙적으로 변하고 있는지.',
      ],
    },
    {
      type: 'title',
      text: '일반적인 타이밍 실수',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '진통이 완전히 사라질 때가 아니라 정점에서 타이머를 멈추는 것.',
        '처음에 진통이 약해서 늦게 시작하여 지속 시간이 더 짧아 보이게 하는 것.',
        '가장 강한 진통만 세고 중간의 작은 진통을 무시하는 것.',
        '5-1-1이 항상 즉시 입원을 의미한다고 가정하는 것. 보통은 조언을 구하라는 의미이지, 스스로 활발한 진통을 진단하라는 의미가 아닙니다.',
        '둘째 이후 진통에서 너무 오래 기다리는 것. 첫째 출산보다 진행이 더 빠를 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '임상적 한계',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '진통 타이밍은 진통 평가의 일부일 뿐입니다. 자궁경부 개대, 태아 건강 상태, 통증 대처, 양막 파열, 임신 주수, 이전 출산 이력, B군 연쇄상구균 상태, 병원까지의 거리, 임신 위험 요소 및 산모 증상은 모두 팀이 권장하는 바를 변경할 수 있습니다. 조산사, 산부인과 의사, 둘라 또는 분류 간호사와 공유할 명확한 기록으로 기록을 사용하세요.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: '지속 시간',
          definition: '한 번의 진통 길이로, 시작된 순간부터 끝날 때까지 측정됩니다.',
        },
        {
          term: '빈도',
          definition: '한 진통의 시작부터 다음 진통의 시작까지의 시간.',
        },
        {
          term: '5-1-1 규칙',
          definition: '일반적인 진통 타이밍 패턴: 약 5분 간격, 약 1분 지속, 약 1시간 동안 계속.',
        },
        {
          term: '전구 진통',
          definition: '불편하고 반복적일 수 있지만 항상 꾸준히 활발한 진통으로 진행되지는 않는 실제 진통의 기간.',
        },
        {
          term: '활발한 진통',
          definition: '더 강하고 규칙적인 진통과 자궁경부 변화가 있는 진통 단계로, 임상 평가를 통해 확인됩니다.',
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
    safetyTitle: '출산 계획과 함께 사용하세요',
    safetyBody: '이 타이머는 추적 및 교육용입니다. 확신이 없거나 증상이 걱정되거나 다른 지침을 받은 경우 조산사, 산부인과 의사 또는 분만실에 연락하세요.',
    idleStatus: '다음 진통을 측정할 준비 완료',
    activeStatus: '진통 진행 중',
    accidentalTapStatus: '너무 짧음',
    shortRecordLabel: '짧은 또는 테스트 탭',
    activeRowLabel: '현재 활성',
    startButton: '진통 시작',
    stopButton: '진통 중지',
    activeLabel: '활성 진통',
    breathingLabel: '천천히 호흡하세요',
    breatheIn: '들숨',
    breatheOut: '날숨',
    currentDurationLabel: '현재 지속 시간',
    lastIntervalLabel: '마지막 간격',
    contractionCountLabel: '기록됨',
    patternStatusTitle: '패턴 상태',
    patternStatusIdle: '추적 준비 완료',
    patternStatusTracking: '계속 추적 중',
    patternStatusBuilding: '패턴 형성 중',
    patternStatusCall: '산부인과 팀에 연락하세요',
    patternStatusActiveBody: '기록을 시작했습니다. 패턴이 의미 있게 되려면 몇 번의 진통이 더 필요합니다.',
    patternStatusBuildingBody: '최근 진통이 더 가까워지거나 더 오래 지속되고 있습니다. 계속 타이밍을 재고 지속되면 전화할 준비를 하세요.',
    patternStatusCallBody: '최근 진통이 5-1-1 패턴에 가깝습니다. 지금 조산사, 산부인과 의사 또는 분만실에 연락하여 개인 맞춤 지침을 받으세요.',
    averageLastThreeLabel: '최근 3회 평균',
    averageLastSixLabel: '최근 6회 평균',
    regularityLabel: '규칙성',
    regularityNotEnough: '데이터 부족',
    regularityIrregular: '불규칙',
    regularityVariable: '가변적',
    regularityRegular: '규칙적',
    summaryTitle: '전화 요약',
    summaryEmpty: '산부인과 팀을 위한 유용한 요약을 만들려면 최소 세 번의 진통을 기록하세요.',
    copySummaryButton: '요약 복사',
    copiedSummaryButton: '복사됨',
    undoButton: '마지막 실행 취소',
    sessionOverviewTitle: '세션 개요',
    sessionOverviewBody: '진통이 시작되면 타이밍을 시작하세요. 활성 진통이 여기에 즉시 표시됩니다.',
    lastContractionLabel: '마지막 진통',
    historyTitle: '진통 기록',
    emptyHistory: '아직 기록된 진통이 없습니다.',
    startTimeHeader: '시작 시간',
    durationHeader: '지속 시간',
    intervalHeader: '간격',
    secondsSuffix: '초',
    minutesSuffix: '분',
    noInterval: '-',
    resetButton: '초기화',
    alertTitle: '5-1-1 패턴 감지됨',
    alertBody: '최근 진통이 일반적인 5-1-1 패턴에 가깝게 보입니다. 지금 조산사나 분만실에 연락하여 개인 맞춤 지침을 받는 것을 고려하세요.',
    patternTitle: '알림 확인 내용',
    patternBody: '최근 진통이 5분 이하 간격이고, 최소 60초 동안 지속되며, 약 1시간 동안 해당 패턴을 유지할 때 패널이 나타납니다.',
  },
};

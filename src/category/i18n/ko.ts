import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'babies',
  title: '아기용 계산기',
  description: '아기 케어 및 발달 모니터링을 위한 도구와 계산기.',
  seo: [
    {
      type: 'summary',
      title: '제공 도구',
      items: [
        '월령과 몸무게별 수유 계산기',
        '성장 백분위 계산기 (WHO)',
        '브랜드별 아기 옷 사이즈 변환',
        '배란일 예측',
        '맞춤형 예방접종 일정',
        '임신 및 주수 계산기',
      ],
    },
    {
      type: 'title',
      text: '아기 발달 모니터링',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '아기용 계산기는 자녀의 성장과 발달을 정확하게 추적하는 데 도움이 됩니다. 월령과 몸무게에 따른 수유량 계산부터 WHO 백분위 확인까지, 이 도구들은 모든 단계에서 유용한 정보를 제공하도록 설계되었습니다.',
    },
    {
      type: 'title',
      text: '수유 및 영양',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '수유 계산기는 일수, 주수 또는 개월 수에 따른 월령과 현재 몸무게를 기준으로 아기에게 필요한 모유 또는 분유량을 추정합니다. 계산은 적절한 영양 공급을 위한 소아과 가이드라인을 따릅니다.',
    },
    {
      type: 'title',
      text: '성장 및 백분위',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '백분위 계산기는 세계보건기구(WHO)의 참조 차트를 사용하여 아동 인구 분포 내에서 아기의 몸무게, 키, BMI를 표시합니다. 50번째 백분위수는 아기가 평균임을 나타냅니다.',
    },
  ],
};

import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'fertile-days-calculator';
const title = '排卵日・妊娠しやすい日計算機';
const description = '月経周期に基づいて、あなたの排卵予定日と妊娠しやすい期間（フェルタイルウィンドウ）を算出します。';
const faq = [
  {
    question: '「妊娠しやすい期間」はどのように計算されますか？',
    answer: '最後に生理が始まった日を基準に計算します。一般的に、排卵は次の生理予定日の約14日前に起こります。「妊娠しやすい期間」は、排卵日の5日前から排卵当日までを指します。',
  },
  {
    question: 'この計算機の正確性はどのくらいですか？',
    answer: 'この計算機は、標準的な28日周期（または指定された周期）に基づいた予測です。個人の体調や変動によってずれる可能性があるため、あくまで目安としてご利用ください。より正確に知るには、基礎体温の記録や排卵検査薬との併用をお勧めします。',
  },
  {
    question: '生理周期が不規則な場合はどうすればいいですか？',
    answer: '周期が大きく変動する場合、カレンダー方式の計算の精度は下がります。その場合、基礎体温の計測や、排卵検査薬（LH検査）で排卵日の兆候を捉える方法がより確実です。',
  },
  {
    question: '排卵後、卵子の寿命はどれくらいですか？',
    answer: '卵子の寿命は排卵後約12〜24時間です。一方で精子は女性の体内で最大5日間生存できるため、排卵日の数日前から「妊娠しやすい期間」が始まります。',
  },
  {
    question: '避妊のためにこの計算機を使ってもいいですか？',
    answer: 'この計算機を避妊目的で使用することはお勧めしません。カレンダーに基づいた予測は失敗の確率が高いため、確実な避妊については医師や専門家にご相談ください。',
  },
];
const howTo = [
  {
    name: '前回の生理開始日を選択',
    text: 'カレンダー上で、最後に生理が始まった日をクリックしてください。',
  },
  {
    name: '生理周期を調整',
    text: 'スライダーを動かして、あなたの平均的な生理周期の日数を設定してください。',
  },
  {
    name: '結果を確認',
    text: '予測される排卵日、妊娠しやすい期間、および次の生理予定日が自動的に表示されます。',
  },
  {
    name: 'カレンダーを操作',
    text: 'ナビゲーション矢印を使って、前後の月の予定を確認できます。',
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
  inLanguage: 'ja',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: '前回の生理はいつ始まりましたか？',
    step1Desc: 'カレンダーから前回の生理初日を選択してください。',
    pulseHint: 'カレンダーの日付をクリックして開始',
    step1Indicator: '開始日',
    step2Indicator: 'あなたのカレンダー',
    sidebarTitle: 'あなたの周期',
    sidebarDesc: '生理周期の日数を調整して結果をカスタマイズします。',
    labelCycleLength: '生理周期の日数',
    unitDays: '日間',
    labelOvulation: '次回の排卵予定日',
    labelFertileWindow: '妊娠しやすい期間',
    labelNextPeriod: '次回の生理予定日',
    legendSelection: '選択した日',
    legendPeriod: '生理期間',
    legendFertile: '妊娠しやすい日',
    legendOvulation: '排卵日',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
  },
  seo: [
    {
      type: 'title',
      text: '排卵日計算：妊娠しやすい時期と生理周期の完全ガイド',
      level: 2,
    },
    {
      type: 'summary',
      title: '妊娠しやすい期間に関する5つのポイント',
      items: [
        '排卵は通常、次の生理が始まる約14日前に起こります。',
        '最も妊娠しやすいのは、排卵日の5日前から排卵当日までの6日間です。',
        '精子は女性の体内で最大5日間生存することができます。',
        '不規則な周期の場合、カレンダーによる予測の信頼性は低下します。',
        '正確な予測には、基礎体温や排卵検査薬との併用が有効です。',
      ],
    },
    {
      type: 'title',
      text: '妊娠しやすい期間の計算の仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールは、オギノ式や標準的な排卵モデルに基づいています。28日周期の場合、排卵は14日目前後に発生します。計算機はこのポイントを特定し、その前後で最も妊娠の可能性が高い期間をマークします。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 日前', label: '次の生理の開始から' },
        { value: '6 日間', label: '妊娠しやすい期間' },
        { value: '12-24 時間', label: '卵子の寿命' },
      ],
    },
    {
      type: 'title',
      text: '月経周期の各フェーズ',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '卵胞期',
          description: '生理の開始から排卵までの期間です。',
          points: [
            'FSH（卵胞刺激ホルモン）の働きで卵胞が成熟します。',
            '規則的な周期では10〜14日間続きます。',
            'エストロゲンの分泌量が徐々に増加します。',
          ],
        },
        {
          title: '黄体期',
          description: '排卵後から生理が始まるまでの期間です。',
          points: [
            '黄体からプロゲステロンが分泌され、子宮内膜を整えます。',
            '通常の周期では約14日間で一定しています。',
            '受精が起こらなければ、黄体は退化し生理が始まります。',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '計算機は標準モデルを使用していますが、周期は月によって変動することがあります。より高い精度を求める場合は、基礎体温の記録や排卵検査薬を併用してください。',
    },
    {
      type: 'title',
      text: '排卵を示す体のサイン',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'おりものの変化：排卵期には卵白のように透明でよく伸びるようになります。',
        '基礎体温の変化：排卵直後に体温がわずかに上昇（0.2〜0.4℃）し、高温期に入ります。',
        '排卵痛：排卵が行われる側の卵巣付近に軽い痛みを感じることがあります。',
        '性欲の変化：ホルモンの影響で排卵期に性欲が高まることがあります。',
        '腹部の張り：排卵期に下腹部の張りや軽い不快感を感じる場合があります。',
      ],
    },
    {
      type: 'title',
      text: '生活習慣と妊活',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '慢性的なストレスは排卵を妨げたり、周期を乱す原因になります。',
        '体重バランスの影響：痩せすぎも肥満も排卵障害の原因になり得ます。',
        '適度な運動は周期を整えますが、過度な運動は排卵を止める可能性があります。',
        '喫煙は卵巣の予備能を低下させ、閉経を早めるリスクがあります。',
        '葉酸、鉄分、抗酸化物質を豊富に含む食事は生殖健康をサポートします。',
      ],
    },
    {
      type: 'title',
      text: '周期モニタリングの方法',
      level: 3,
    },
    {
      type: 'table',
      headers: ['方法', '信頼性', 'コスト'],
      rows: [
        ['カレンダー計算', '中', '無料'],
        ['基礎体温計測', '高（継続が必要）', '低'],
        ['排卵検査薬（LH）', '高', '中'],
        ['デジタル妊活モニター', '非常に高', '高'],
        ['卵胞計測（超音波）', '最大', 'クリニック受診'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '排卵',
          definition: 'LH（黄体形成ホルモン）の急上昇により、成熟した卵子が卵胞から放出されること。通常1周期に1度起こります。',
        },
        {
          term: '妊娠しやすい期間',
          definition: '最も受精が成立しやすい時期。排卵の5日前から排卵当日までを指します。',
        },
        {
          term: '頸管粘液（おりもの）',
          definition: '子宮頸部からの分泌物。排卵期には精子が通過しやすいように、透明で粘りけのある質感に変化します。',
        },
        {
          term: '基礎体温',
          definition: '最低限のエネルギーしか使っていない安静時の体温。排卵後のプロゲステロンの影響で、低温期から0.2〜0.4℃程度上昇します。',
        },
      ],
    },
  ],
  faqTitle: "よくある質問",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: 'WHO (世界保健機関) - 家族計画',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'ACOG (米国産科婦人科学会) - 妊活',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: '日本産科婦人科学会',
      url: 'http://www.jsog.or.jp',
    },
    {
      name: 'Wilcox AJ et al. (NEJM, 1995) - 排卵と性交渉のタイミング',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

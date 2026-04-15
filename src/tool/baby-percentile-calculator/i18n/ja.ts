import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-growth-percentile-calculator';
const title = 'WHO乳幼児成長曲線（パーセンタイル）計算機';
const description = 'WHO（世界保健機関）の成長曲線（0〜5歳）に基づき、赤ちゃんの体重、身長、BMIのパーセンタイルを計算します。';
const faq = [
  {
    question: '50パーセンタイルとはどういう意味ですか？',
    answer: '50パーセンタイルは中央値を表します。同じ月齢・性別の赤ちゃんの半分がその値より重い（あるいは高い）か、あるいは軽い（低い）ことを意味します。理想的な値というわけではなく、分布の中心となる値です。',
  },
  {
    question: 'パーセンタイルが低いと問題がありますか？',
    answer: '必ずしもそうではありません。低いパーセンタイル（例えばP10）であっても、時間の経過とともに安定していれば、全く正常な場合があります。重要なのは一時の値ではなく、成長の傾向です。常に小児科医に相談してください。',
  },
  {
    question: 'この計算機はどの成長チャートを使用していますか？',
    answer: 'この計算機は、WHO（世界保健機関）の「Multicentre Growth Reference Study (MGRS)」に基づく0〜5歳児向けの成長基準を使用しています。',
  },
  {
    question: '乳幼児のBMIとは何ですか？',
    answer: '乳幼児のBMI（体格指数）は、体重を身長の2乗で割った値です。赤ちゃんのBMIパーセンタイルは大人とは異なり、月齢や性別ごとの専用のチャートで解釈する必要があります。',
  },
  {
    question: 'どのくらいの頻度で測定すべきですか？',
    answer: '生後数ヶ月間は、通常、健診のたびに小児科医が成長を確認します。家庭では、成長の傾向を把握するために、月に1回程度体重と身長を記録することをお勧めします。',
  },
];
const howTo = [
  {
    name: '赤ちゃんの性別を選択',
    text: '適切なWHOチャートを適用するために、男の子か女の子を選択してください。',
  },
  {
    name: '月齢を入力',
    text: 'スライダーまたは矢印を使用して、月齢（0〜60ヶ月）を指定してください。',
  },
  {
    name: '体重と身長を入力',
    text: '体重（kg）と身長（cm）を入力してください。',
  },
  {
    name: 'パーセンタイルを確認',
    text: 'WHOチャートに基づき、体重、身長、BMIのパーセンタイルが自動的に算出されます。',
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
  inLanguage: 'ja',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: '測定データ',
    labelSex: '赤ちゃんの性別',
    sexBoy: '男の子',
    sexGirl: '女の子',
    unitMonths: '月数のみ',
    unitYearsMonths: '年 + 月',
    labelWeight: '体重 (kg)',
    labelHeight: '身長 (cm)',
    btnAddHistory: '履歴に追加',
    btnClearHistory: 'データをクリア',
    labelDashboard: '成長ダッシュボード',
    labelWeight2: '体重',
    labelHeight2: '身長',
    labelBMI: 'BMI',
    labelCalculating: '計算中...',
    disclaimer: 'パーセンタイルは統計的なツールに過ぎません。結果の解釈については、必ず小児科医にご相談ください。',
    labelLowRange: '低い範囲',
    labelLowNormal: 'やや低め',
    labelNormal: '平均的',
    labelHighNormal: 'やや高め',
    labelHighRange: '高い範囲',
    alertOutOfRange: '値がP3〜P97の範囲外です。小児科医にご相談ください。',
    labelMonths: 'ヶ月',
    labelYears: '歳',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO成長曲線計算機：赤ちゃんの成長を理解するためのガイド',
      level: 2,
    },
    {
      type: 'summary',
      title: '赤ちゃんのパーセンタイルを解釈するための5つのポイント',
      items: [
        '単一のパーセンタイルだけで健康状態が決まるわけではありません。長期的な傾向が重要です。',
        'P3からP97の間のパーセンタイルは、統計的な正常範囲内と見なされます。',
        '赤ちゃんのBMIは独自の曲線を描くため、大人の基準値と比較してはいけません。',
        'WHOの成長曲線は、生後数ヶ月間の完全母乳育児を含む、最適な条件下で育った赤ちゃんに基づいています。',
        '適切な診断のために、成長の記録は必ず小児科医と共有してください。',
      ],
    },
    {
      type: 'title',
      text: '赤ちゃんを正しく測定する方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '可能であれば、常に同じ体重計を使い、裸の状態で測定してください。',
        '24ヶ月までは、仰向けの姿勢（身長）で測定してください。',
        '2歳以降は、立った姿勢（身長）で測定してください。',
        '一貫性を保つため、毎日同じ時間帯に測定を行ってください。',
      ],
    },
    {
      type: 'tip',
      html: 'P3を下回るからといって、直ちに健康上の問題があるわけではありません。最も重要なのは、成長曲線が時間の経過とともに一定の傾向を維持しているかどうかを確認することです。',
    },
    {
      type: 'title',
      text: 'パーセンタイルの解釈',
      level: 3,
    },
    {
      type: 'table',
      headers: ['パーセンタイル', '解釈', '推奨される対応'],
      rows: [
        ['P97以上', '高い範囲', '次回の受診時に小児科医に相談する'],
        ['P85〜P97', 'やや高め', '通常の経過観察'],
        ['P15〜P85', '平均的', '特になし'],
        ['P3〜P15', 'やや低め', '通常の経過観察'],
        ['P3以下', '低い範囲', '小児科医に相談する'],
      ],
    },
    {
      type: 'title',
      text: 'WHO成長曲線 vs Orbegozo曲線',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO成長曲線',
          description: '最適な環境で育った6カ国の乳幼児に基づく国際基準。',
          points: [
            '検証済みの国際基準',
            '最適な環境で育った6カ国の児に基づく',
            '最新の科学的根拠に基づく更新',
            '地域の遺伝的差異が反映されない場合がある',
          ],
        },
        {
          title: 'Orbegozo曲線',
          description: 'スペインの人口に合わせて作成された、以前広く使われていた曲線。',
          points: [
            'スペインの人口に最適化',
            '過去数十年間スペインで広く採用',
            '古い基準人口に基づいている',
            '国際的な普及度は低い',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5歳', label: '参照基準' },
        { value: '成長トレンド', label: '重要な変数' },
        { value: 'LMSパラメータ', label: '技術的精度' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Zスコア',
          definition: 'その値が参照集団の平均からどの程度標準偏差離れているかを示す数値。Zスコア0は50パーセンタイルに相当します。',
        },
        {
          term: '調和（ハーモニー）',
          definition: '体重と身長の適切なバランス。たとえ体重のパーセンタイルが低くても、身長も同様の割合で低ければ「調和が取れている」とみなされます。',
        },
        {
          term: '身体計測',
          definition: '成長や栄養状態を評価するために行われる、体重、身長、頭囲、BMIなどの一連の測定。',
        },
        {
          term: 'LMSパラメータ',
          definition: 'WHOがパーセンタイル表を作成し、測定値をZスコアに変換するために使用する統計手法（L=Box-Cox変換、M=中央値、S=変動係数）。',
        },
      ],
    },
  ],
  faqTitle: "よくある質問",
  faq,
  bibliographyTitle: "参考文献",
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

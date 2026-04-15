import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'akachan-feeding-calculator';
const title = '赤ちゃんの授乳計算機';
const description = '体重と月齢に基づいて、赤ちゃんがどれだけのミルクを必要としているかを計算します。推奨される授乳回数、1回あたりのミリリットル、空腹と満腹のサイン。';

const faq = [
  {
    question: '新生児はどのくらいのミルクが必要ですか？',
    answer: '生後1日目の赤ちゃんの胃はさくらんぼほどの大きさで、1回あたり5〜7mlしか必要ありません。5日目以降、容量は45〜60mlに増え、必要量は徐々に増加します。',
  },
  {
    question: '赤ちゃんはどのくらいの頻度で食べるべきですか？',
    answer: '新生児は1日に8〜12回の授乳が必要です。3ヶ月になると通常7〜8回に間隔が空き、6ヶ月になると1日約5回になります。',
  },
  {
    question: '赤ちゃんが十分に食べているかどうか、どうすればわかりますか？',
    answer: '最も信頼できる指標は、適切な体重増加、1日に少なくとも5〜6回のおむつの濡れ、そして授乳後に赤ちゃんが満腹のサインを示すことです。',
  },
  {
    question: '母乳と粉ミルクの量は同じですか？',
    answer: '母乳の場合は、量を測らずに自律授乳（欲しがるだけ与える）が推奨されます。粉ミルクの場合、一般的な基準は体重1kgあたり1日150mlで、月齢に応じた授乳回数で分割します。',
  },
];

const howTo = [
  {
    name: '赤ちゃんの月齢を選択',
    text: '単位（日、週、月）を選択し、スライダーまたはボタンで値を調整します。',
  },
  {
    name: '赤ちゃんの体重を入力',
    text: '体重スライダーまたはボタンを使用して、赤ちゃんの現在の体重をキログラムで設定します。',
  },
  {
    name: '授乳タイプを選択',
    text: '母乳、混合、または粉ミルクから選択して、最も適したガイドを取得します。',
  },
  {
    name: '推奨プランを確認',
    text: '計算機には授乳回数、1回あたりのミリリットル、および推定の1日合計量が表示されます。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: '現在の設定',
    labelPlan: '推奨プラン',
    unitDays: '日',
    unitWeeks: '週',
    unitMonths: 'ヶ月',
    labelWeight: '赤ちゃんの体重',
    labelFeedType: '授乳タイプ',
    feedBreast: '母乳',
    feedMixed: '混合',
    feedFormula: '粉ミルク',
    labelFreeDemand: '自律授乳',
    labelMlPerFeed: '1回あたりのml',
    labelFeedsCount: '授乳回数 / 24h',
    labelDailyTotal: '1日の合計（推定）',
    labelHunger: '空腹のサイン',
    labelFullness: '満腹のサイン',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
  },
  seo: [
    { type: 'summary', title: 'まとめ：赤ちゃんの食事', items: [
      '新生児の胃の容量は、初日はわずか5〜7mlです。',
      '粉ミルクの一般的な基準は、1日あたり体重1kgにつき150mlです。',
      '母乳は、固定量なしで自律授乳で与えられます。',
      '頻度は成長とともに減少します：6ヶ月で8〜12回から4〜5回へ。',
    ]},
    { type: 'title', text: '体重と月齢に基づいて赤ちゃんはどのくらいのミルクが必要ですか？', level: 2 },
    { type: 'paragraph', html: 'ミルクの必要量は最初の数ヶ月で急速に変化します。計算機は、WHOおよびAAPの小児科ガイドラインに従い、赤ちゃんの現在の体重と月齢に基づいて量を推定します。' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: '1日目（さくらんぼ大）' },
      { value: '150 ml/kg', label: '粉ミルク1日基準' },
      { value: '8–12', label: '新生児授乳回数/日' },
    ]},
    { type: 'title', text: '月齢別の胃の大きさ', level: 3 },
    { type: 'table', headers: ['月齢', '基準サイズ', '容量', '授乳回数/日'], rows: [
      ['1日目', 'さくらんぼ', '5–7 ml', '8–12'],
      ['2–4日目', 'くるみ', '22–27 ml', '8–12'],
      ['5–30日目', '卵', '45–60 ml', '8–10'],
      ['1–3ヶ月', '最大', '90–120 ml', '7–8'],
      ['3–6ヶ月', '最大', '120–150 ml', '5–6'],
      ['6ヶ月以上', '最大', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: '適切な授乳の信頼できる指標はおむつの濡れ回数です。5日目以降、1日に5〜6回あれば、良好な水分補給が示されています。' },
    { type: 'title', text: '母乳 vs 粉ミルク', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: '母乳授乳', description: '自然な自律授乳。', points: ['固定スケジュールなし', '活性抗体', '成分の変化', '量の数値化が難しい'] },
      { title: '粉ミルク', description: '計算された量での計画的な授乳。', points: ['3〜4時間おき', '安定した成分', '摂取量の管理が容易', '滅菌された準備が必要'] },
    ]},
    { type: 'list', items: [
      '適切な体重増加：最初の1ヶ月で週150〜200g',
      '少なくとも1日に5〜6回のおむつの濡れ',
      '授乳後、赤ちゃんが落ち着いている',
      '尿が透明または非常に薄い黄色',
    ]},
  ],
  faqTitle: "よくある質問",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: 'WHO - 乳幼児の食事',
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
      name: '日本小児科学会 - 授乳・離乳の支援ガイド',
      url: 'https://www.jpeds.or.jp',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

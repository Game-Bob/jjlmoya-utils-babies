import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = '赤ちゃん予算シミュレーター';
export const description = '赤ちゃんの最初の1年間の支出を計画するための決定版ツール。ベビー用品の準備、毎月のコスト、隠れた支出を賢い節約術とともに計算します。';

export const faq = [
  {
    question: '赤ちゃんの最初の1年間にいくらかかりますか？',
    answer: 'ライフスタイルや保育の必要性、新品か中古品かによって異なりますが、平均して50万円から150万円ほどかかると言われています。',
  },
  {
    question: '新生児向けで最も高価なアイテムは何ですか？',
    answer: '一般的に、ベビーカー、ベビー家具（ベビーベッド、チェスト）、チャイルドシートが大きな一時的支出となります。保育料は、毎月の継続的な支出の中で最も高額になります。',
  },
  {
    question: '赤ちゃんの支出を節約するにはどうすればよいですか？',
    answer: '備品や衣類を中古で購入したり、可能であれば母乳育児を選択したり、出産祝いのリストを活用して親戚や友人から必要なものを贈ってもらうのが最も効果的な戦略です。',
  },
  {
    question: 'ベビー予算における「ゴースト支出」とは何ですか？',
    answer: '光熱費（冷暖房）の増加、家族保険料の増額、任意接種のワクチン代、標準的なリストには載っていない衛生用品などの隠れたコストのことです。',
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
    name: 'プロフィールを設定',
    text: 'ライフスタイル（節約、バランス、プレミアム）、授乳方法、保育戦略を選択します。',
  },
  {
    name: 'アイテムを確認',
    text: 'カテゴリー（初期投資、月額コスト、節目）を確認し、価格を調整したり、中古品としてチェックを入れたりします。',
  },
  {
    name: '予算を管理',
    text: '1年間に必要な総額を確認し、アイテムを揃えていく際の実績を把握します。',
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
    priceCurrency: 'JPY',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'baby-budget-planner',
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  seo: [
    { type: 'summary', title: 'まとめ：赤ちゃんの予算', items: [
      '最初の1年間のコストは50万円から150万円程度です。',
      '初期投資（ベビー部屋、ベビーカー）が最初の大きな壁となります。',
      '保育料は毎月の予算の最大50%を占めることがあります。',
      '中古品を活用することで、総予算を最大60%削減可能です。',
    ]},
    { type: 'title', text: '赤ちゃんの最初の1年間に、実際いくらかかるのか？', level: 2 },
    { type: 'paragraph', html: '赤ちゃんを迎える準備は、単におむつを買うだけではありません。一時的な投資と毎月の継続コストを戦略的に把握する必要があります。当シミュレーターは、支出曲線を可視化し、親としての経済的な変化に備えるお手伝いをします。' },
    { type: 'stats', columns: 3, items: [
      { value: '20万円〜', label: '初期備品セット' },
      { value: '1万〜1.5万円', label: '毎月のおむつ・衛生用品' },
      { value: '40%+', label: '中古活用による節約' },
    ]},
    { type: 'title', text: 'カテゴリー別内訳：お金はどこに消えるのか？', level: 3 },
    { type: 'table', headers: ['カテゴリー', '代表的なアイテム', '頻度', 'コストへの影響'], rows: [
      ['初期投資', 'ベビーベッド、ベビーカー、チャイルドシート', '単発', '高'],
      ['月額支出', 'おむつ、粉ミルク、衛生用品', '毎月', '中'],
      ['節目・成長', 'ハイチェア、離乳食用品、衣類', '随時', '中'],
      ['保育・教育', '保育園 / ベビーシッター', '毎月', '極めて高'],
    ]},
    { type: 'tip', html: '<strong>節約のプロのコツ：</strong> 高品質なベビーカーやベビー家具はリセールバリューが高いです。これらを中古で購入することで、安全性やスタイルを損なうことなく数万円を節約できます。' },
    { type: 'title', text: 'ライフスタイルの比較', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: '節約重視', 
        description: '中古品と必需品にフォーカスします。', 
        points: ['お下がり衣類', '中古備品', '母乳育児メイン', '認可保育園'] 
      },
      { 
        title: 'プレミアム', 
        description: '最新モデルと最大限の利便性を追求します。', 
        points: ['ハイテク育児家電', 'オーガニック粉ミルク', 'デザイナーズ家具', '認可外・個別シッター'] 
      },
    ]},
    { type: 'title', text: 'スマートな計画のためのチェックリスト', level: 3 },
    { type: 'list', items: [
      '家族向け保険のカバー内容の更新を確認しましょう。',
      '任意接種のワクチンや専門的な衛生用品の予算を確保しましょう。',
      '光熱費（冷暖房）の20%程度の増加を予測しておきましょう。',
      '大きな買い物は親戚や友人からのプレゼントとして相談できるよう、早めにリストを作りましょう。',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'プランを作成',
    lifestyleLabel: 'ライフスタイルの選択',
    lifestyleSaving: '節約重視',
    lifestyleBalanced: 'バランス',
    lifestylePremium: 'プレミアム',
    feedingLabel: '授乳方法',
    feedingBreast: '母乳',
    feedingFormula: '粉ミルク',
    feedingMixed: '混合',
    childcareLabel: '保育戦略',
    childcareHome: '在宅（育休など）',
    childcarePublic: '認可保育園',
    childcarePrivate: '認可外・個別保育',
    startBtn: '予算をシミュレーション',
    categoryBeforeBirth: '初期投資',
    categoryMonthByMonth: '毎月の支出',
    categoryMilestones: '成長の節目',
    totalNeededLabel: '最初の1年の目標総額',
    savingsProgressLabel: '準備完了 / 貯蓄済',
    chartTitle: '月別支出曲線',
    ghostAlertsTitle: 'ゴースト支出のアラート',
    ghostInsurance: '生命・医療保険の確認',
    ghostHeating: '光熱費+20%の予測',
    ghostVaccines: '任意接種ワクチンの予算',
    diaperCalcTitle: 'おむつ価格チェック',
    diaperPriceLabel: 'パック価格',
    diaperUnitsLabel: 'パックあたりの枚数',
    secondHandLabel: '中古 / プレゼント',
    wishlistLabel: 'ほしい物リスト',
    itemNursery: 'ベビー部屋の準備',
    itemStroller: 'ベビーカーと移動用品',
    itemHospitalBag: '入院バッグの必需品',
    itemDiapers: 'おむつとおしりふき',
    itemPharmacy: '衛生用品とケア用品',
    itemDaycare: '保育料・シッター代',
    itemSolidFood: '離乳食への移行準備',
    itemClothes: '季節の衣類',
    itemHighChair: 'ハイチェアと食器セット',
    editLabel: '価格を編集',
    saveBtn: '保存',
    exportBtn: 'JSONエクスポート',
    importBtn: 'JSONインポート',
    resetBtn: 'プランをリセット',
    currencySymbol: '円',
    monthPrefix: 'M',
    initialMonthLabel: '開始',
  },
};

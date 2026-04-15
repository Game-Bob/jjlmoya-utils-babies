import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'supein-yobo-sesshu-karenda-bebi';
const title = 'スペインの予防接種スケジュール計算';
const description = 'AEP 2026スケジュールに基づき、お子様の予防接種日を正確に計算します。';
const faq = [
  {
    question: 'AEP 2026予防接種スケジュールとは何ですか？',
    answer: 'スペイン小児科学会（AEP）が2026年に推奨する予防接種スケジュールです。出生から14歳までの赤ちゃんや子供を対象とした、すべての定期および任意の予防接種が含まれています。',
  },
  {
    question: 'このスケジュール通りに接種させるのは義務ですか？',
    answer: 'スペインでは予防接種は法的な義務ではありませんが、強く推奨されています。定期接種のワクチンは無料であり、公的な保健センターで接種を受けられます。',
  },
  {
    question: '接種を1回逃してしまった場合はどうすればいいですか？',
    answer: '接種が遅れても、最初からやり直す必要はありません。かかりつけの小児科医が、中断したところからどのように再開するかを指示してくれます。重要なのは、できるだけ早く規定の回数を完了することです。',
  },
  {
    question: '同じ日に複数のワクチンを接種できますか？',
    answer: 'はい、同じ日に複数のワクチンを接種することは一般的であり、安全です。6種混合ワクチンのように、1回の注射で6つの病気を防ぐことができる混合ワクチンもあります。',
  },
  {
    question: '早産児にとっても予防接種は安全ですか？',
    answer: '早産児は、新生児科医から特定の指示がない限り、修正月齢ではなく暦年齢（出生からの日数）に基づいて接種を受ける必要があります。感染症のリスクが高いため、優先的に接種を受けるべきです。',
  },
];
const howTo = [
  {
    name: '生年月日を入力する',
    text: 'お子様の生年月日（日、月、年）を対応するフィールドに入力します。',
  },
  {
    name: '次の接種予定を確認する',
    text: '計算機が自動的に次の予防接種の時期と、対象となるワクチンを表示します。',
  },
  {
    name: '全スケジュールを確認する',
    text: '「過去」および「将来」のセクションを開くと、全予防接種スケジュールを確認できます。',
  },
  {
    name: 'リマインダーを書き出す',
    text: 'ボタンを押して.icsファイルをダウンロードすると、将来のすべての予定をスマホのカレンダーに追加できます。',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'お子様の生年月日',
    placeholderDD: '日',
    placeholderMM: '月',
    placeholderAAAA: '年',
    emptyMsg: '予防接種スケジュールを表示するには、お子様の生年月日を入力してください。',
    invalidMsg: '入力された日付は無効です。',
    futureMsg: '未来の生年月日は入力できません。',
    labelNextAppointment: '計算された次の予定日',
    btnAddReminder: 'スマホのカレンダーに追加',
    btnToday: '今日です！母子手帳を忘れずに',
    labelPassed: '過去の予定',
    labelFuture: '将来のスケジュール',
    labelStatusOk: '完了',
    labelStatusPending: '予定',
    labelSource: '出典: AEP 2026',
    labelShare: 'この日程を共有する',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献・出典',
    labelMonth: 'ヶ月',
    labelMonths: 'ヶ月',
    labelYear: '歳',
    labelYears: '歳',
    labelDay: '日',
    labelDays: '日',
    labelAnd: 'と',
    labelVaccination: '予防接種',
    labelAppointment: '接種予定',
    vac_hexavalente: '6種混合',
    vac_neumococo: '肺炎球菌 (VCN15/20)',
    vac_meningococo_b: '髄膜炎菌B型 (Bexsero)',
    vac_rotavirus: 'ロタウイルス',
    vac_meningococo_acwy: '髄膜炎菌ACWY型',
    vac_triple_virica: 'MR (麻疹・風疹) / おたふくかぜ混合',
    vac_varicela: '水痘 (水ぼうそう)',
    vac_gripe: 'インフルエンザ (季節性)',
    vac_vph: 'HPV (ヒトパピローマウイルス)',
    vac_tdpa: '三種混合 (百日咳・ジフテリア・破傷風)',
    vac_polio_booster: 'ポリオ (追加接種)',
  },
  seo: [
    { type: 'title', text: '予防接種計算機：次の接種はいつ？', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '95%以上', label: '有効性' },
      { value: '14回', label: '合計接種回数' },
      { value: '公費', label: 'AEP 費用' },
      { value: '高', label: '安全性' },
    ]},
    { type: 'tip', html: 'AEP 2026スケジュールには、髄膜炎菌B型ワクチンの対象拡大や、12歳以降の男女両方を対象としたHPVワクチンの推奨事項の更新など、重要な変更が含まれています。' },
    { type: 'title', text: 'AEP 2026 スケジュールの新着情報', level: 3 },
    { type: 'list', items: [
      '髄膜炎菌B型 (Bexsero): 2、4、12ヶ月での「2+1回」接種が定着。',
      'HPVワクチン: 性別を問わず、12歳以上のすべての思春期男女に対象を拡大。',
      '肺炎球菌: 地域の在庫状況に応じ、VCN15またはVCN20を使用するよう推奨を更新。',
      'ロタウイルス: スペイン全州で定期接種のカレンダーに経口ワクチンが導入。',
      '三種混合 (Tdpa): 百日咳への免疫を維持するため、6歳と12歳での追加接種を推奨。',
    ]},
    { type: 'title', text: 'スペイン自治州による違い', level: 3 },
    { type: 'list', items: [
      '一部の州では、全国的なスケジュールに含まれていない追加のワクチンを実施している場合があります。',
      'ロタウイルスワクチンの公費負担については州によって異なりますが、全域でカバーされる傾向にあります。',
      '髄膜炎菌ACWY型は、州のプロトコルにより接種年齢が若干異なる場合があります。',
      '常に小児科医またはお住まいの地域の保健センターで最新のスケジュールを確認してください。',
    ]},
    { type: 'title', text: 'カレンダーをスマホに書き出す方法', level: 3 },
    { type: 'list', items: [
      '計算機にお子様の生年月日を入力します。',
      '「スマホのカレンダーに追加」ボタンを押して.icsファイルをダウンロードします。',
      'GoogleカレンダーやAppleカレンダーなどのアプリでファイルを開きます。',
      '日付とワクチン名が記載された予定がカレンダーに保存されます。',
    ]},
    { type: 'title', text: '一般的な副反応', level: 3 },
    { type: 'list', items: [
      '接種部位の赤みや腫れ：通常1〜2日で消失します。',
      '微熱 (37.5〜38.5 °C)：接種後24〜48時間は一般的です。',
      '不機嫌や泣き：初期の接種後の赤ちゃんによく見られます。',
      '一時的な眠気や食欲不振：特別な治療は必要ありません。',
      'アナフィラキシーなどの重篤な反応は極めて稀です（100万回に1回未満）。',
    ]},
    { type: 'tip', html: '接種前にお腹を満たし、着脱しやすい服を着せておくとスムーズです。接種後は抱っこや授乳をすることで、痛みを和らげ心を落ち着かせることができます。' },
    { type: 'summary', title: 'ポイント', items: [
      'AEP 2026スケジュールでは、12歳までに計14回の接種を受けることで完全な保護を目指します。',
      '生後1年間のワクチンは、同時に最大9つの重大な病気から赤ちゃんを守ります。',
      '軽度の副反応は一般的で、1〜2日で治まります。',
      'ワンクリックですべての予定をスマホのカレンダーに書き出すことができます。',
      'お住まいの地域のスケジュールに不明点がある場合は、必ず小児科医に相談してください。',
    ]},
  ],
  faqTitle: "よくある質問",
  faq,
  bibliographyTitle: "参考文献・出典",
  bibliography: [
    {
      name: 'スペイン小児科学会 (AEP) - 2026年予防接種スケジュール',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'スペイン保健省 - 予防接種カレンダー',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - 予防接種について',
      url: 'https://www.who.int/ja/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - 子供と思春期の推奨予防接種スケジュール',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

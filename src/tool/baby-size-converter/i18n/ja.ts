import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-size-converter';
const title = 'ベビー服サイズ変換機';
const description = 'Zara, H&M, Primark, Carter\'s, Kiabi, Mango, Mayoralなどのブランド間でベビー服のサイズを変換します。身長と体重を入力するだけで、各ブランドの最適なサイズが表示されます。';
const faq = [
  {
    question: '赤ちゃんにぴったりの服のサイズはどうやって選べばいいですか？',
    answer: '最も信頼できるのは、赤ちゃんの身長を基準にすることです。ヨーロッパサイズ（50, 56, 62...）は、そのままセンチメートル単位の身長に対応しています。身長と体重を入力すれば、各ブランドが推奨するサイズが表示されます。',
  },
  {
    question: 'ブランドによってサイズが大きく違うのはなぜですか？',
    answer: 'ブランドごとに独自の型紙（パターン）を使用しているためです。H&MやPrimarkは大きめ、Carter\'sやMayoralは細身に作られる傾向があります。月齢だけでなく、実際の赤ちゃんのサイズを参考にしてください。',
  },
  {
    question: '2つのサイズで迷ったときはどうすればいいですか？',
    answer: '常に大きい方のサイズを選んでください。赤ちゃんは成長が早いため、大きめを選ぶことで長く快適に着せることができます。',
  },
  {
    question: 'インチ単位のサイズも同じように計算できますか？',
    answer: 'Carter\'sなどのアメリカのブランドは、インチとポンドを基準にしています。単位設定を「インペリアル」に切り替えることで、自動的に換算されます。',
  },
];
const howTo = [
  {
    name: '赤ちゃんの身長を入力',
    text: 'スライダーまたはボタンを使って、赤ちゃんの現在の身長（cmまたはインチ）を入力します。',
  },
  {
    name: '赤ちゃんの体重を入力',
    text: 'kgまたはポンドで体重を入力します。一部のブランドでは体重もサイズ選定の基準になります。',
  },
  {
    name: 'ブランドを選択',
    text: '特定のブランドを選択すると、推奨サイズと衣服の推定寸法が表示されます。',
  },
  {
    name: 'サイズ対応表を確認',
    text: '右側のパネルで、対応する全ブランドのサイズ一覧をひと目で確認できます。',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: '赤ちゃんのサイズ',
    labelResults: '推定対応サイズ',
    labelHeight: '身長',
    labelWeight: '現在の体重',
    labelPresets: '月齢別プリセット',
    unitMetric: 'メートル法 (cm/kg)',
    unitImperial: 'ヤード・ポンド法 (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'ブランドとフィット感',
    labelSuggested: '推奨サイズ',
    labelChest: '胸囲',
    labelWaist: '胴囲',
    labelGarmentMeasures: '衣服の推定寸法',
    fitRegular: '標準的',
    fitLarge: 'ゆったりめ',
    fitSmall: '細身',
    tipTitle: '専門家のアドバイス',
    tipText: '赤ちゃんは急激に成長します。もしサイズ選びで境界線上にいる場合は、長く着られ、赤ちゃんの動きを妨げない大きい方のサイズを選ぶことをお勧めします。',
    shareAriaLabel: 'サイズを共有',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献',
  },
  seo: [
    { type: 'title', text: 'ベビー服サイズガイド：Zara, H&M, Primarkなど海外ブランド対応', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: '月間成長目安' },
      { value: '3 ヶ月', label: '1サイズの着用期間' },
      { value: '95%', label: '身長基準の信頼度' },
    ]},
    { type: 'tip', html: 'サイズ選びには月齢ではなく、常に身長を基準にしてください。同じ月齢でも身長が8〜10cm異なることがあり、それは1サイズ分の差に相当します。' },
    { type: 'title', text: '月齢・身長・体重別サイズ一覧', level: 3 },
    { type: 'table', headers: ['月齢目安', '身長 (cm)', '体重 (kg)', '一般的サイズ', '着用期間'], rows: [
      ['新生児', '50–56', '3–4.5', '50 / RN', '4–6 週間'],
      ['1–3 ヶ月', '56–62', '4.5–6', '56–62', '6–8 週間'],
      ['3–6 ヶ月', '62–68', '6–8', '62–68', '6–8 週間'],
      ['6–9 ヶ月', '68–74', '8–9.5', '68–74', '6–8 週間'],
      ['9–12 ヶ月', '74–80', '9.5–11', '74–80', '6–8 週間'],
      ['12–18 ヶ月', '80–86', '11–13', '80–86', '3–4 ヶ月'],
      ['18–24 ヶ月', '86–92', '13–15', '86–92', '3–4 ヶ月'],
    ]},
    { type: 'title', text: 'ブランド別のサイズ感（大きめ vs 小さめ）', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'サイズ感：大きめ（小さめを選択）',
        description: 'ゆったりした作りのため、通常より1つ下のサイズが適している場合があります。',
        points: [
          'H&M：1サイズ分大きいことが多い',
          'Primark：全体的にゆったりめ',
          'Lupilu (Lidl)：余裕のある作り',
          '成長曲線が緩やかな赤ちゃんにおすすめ',
        ],
      },
      {
        title: 'サイズ感：小さめ（大きめを選択）',
        description: 'フィット感重視のため、通常より1つ上のサイズが適している場合があります。',
        points: [
          "Carter's：アメリカ仕様で細身",
          'Mayoral：ヨーロッパ仕様でタイト目',
          'Neck & Neck：全体的に小さめ',
          '成長曲線が急な赤ちゃんにおすすめ',
        ],
      },
    ]},
    { type: 'title', text: '失敗しないサイズ選びのコツ', level: 3 },
    { type: 'list', items: [
      '購入前に必ず実際に測り、月齢だけで判断しない',
      '2つのサイズの中間なら、迷わず大きい方を選ぶ',
      'ロンパースなどの繋ぎ服は、おむつの厚みも考慮する',
      'ヨーロッパサイズ（50, 56, 62...）はcm単位の身長に対応',
      '洗濯後の縮みを考慮する（綿素材は最大5%程度縮むことがあります）',
    ]},
    { type: 'glossary', items: [
      {
        term: 'サイズ50 / 新生児用 (RN)',
        definition: '身長50cm、体重3.5kgまでの赤ちゃん用。多くの赤ちゃんが最初の数週間でサイズアウトしてしまいます。',
      },
      {
        term: '股上の寸法',
        definition: '股からウエストまでの長さ。ボディスーツやカバーオールでは重要で、股上が短いと動きが制限されてしまいます。',
      },
      {
        term: '体重基準',
        definition: "Carter'sなどの米国ブランドでよく使われる基準。平均的な成長曲線とは異なる体格の赤ちゃんに役立ちます。",
      },
      {
        term: 'エンベロープネック（合わせ襟）',
        definition: '襟ぐりが広く開くデザイン。頭から通さず、足の方へスライドさせて脱ぎ着させることができるため、新生児期に非常に便利です。',
      },
    ]},
    { type: 'summary', title: 'サイズ選びの基本', items: [
      '月齢よりも身長が最も信頼できる判断基準です。',
      "H&MとPrimarkは大きめ、Carter'sとMayoralは小さめの作りです。",
      '欧州表記（50, 56, 62...）は身長に直結しています。',
      '境界線では大きめを選ぶのが鉄則です。',
      '合わせ襟や股上の余裕が快適さのポイントです。',
    ]},
  ],
  faqTitle: "よくある質問",
  faq,
  bibliographyTitle: "参考文献",
  bibliography: [
    {
      name: 'Zara - キッズサイズガイド',
      url: 'https://www.zara.com/jp/ja/size-guide.html',
    },
    {
      name: 'H&M - ベビーサイズガイド',
      url: 'https://www2.hm.com/ja_jp/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - 乳幼児成長基準',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - サイズガイド',
      url: 'https://www.mayoral.com/int/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

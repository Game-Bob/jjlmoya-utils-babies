import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'bebek-kiyafet-beden-donusturucu';
const title = 'Bebek Kıyafet Bedeni Dönüştürücü';
const description = 'Zara, H&M, Primark, Carter\'s, Kiabi, Mango ve Mayoral arasındaki bebek kıyafeti bedenlerini dönüştürün. Her marka için tam bedeni almak üzere boy ve ağırlığı girin.';
const faq = [
  {
    question: 'Bebeğime hangi kıyafet bedeninin uygun olduğunu nasıl anlarım?',
    answer: 'En güvenilir yöntem, bebeğin boyunu ana referans olarak kullanmaktır. Avrupa bedenleri (50, 56, 62...) doğrudan santimetre cinsinden boya karşılık gelir. Her marka tarafından önerilen bedeni almak için bebeğin boyunu ve ağırlığını dönüştürücüye girin.',
  },
  {
    question: 'Bedenler markalar arasında neden bu kadar çok değişiyor?',
    answer: 'Her markanın kendi kesim kalıbı vardır. H&M ve Primark daha geniş kalıplı olma eğilimindeyken, Carter\'s ve Mayoral daha dar kesimlere sahiptir. Sadece yaşı değil, her zaman bebeğin ölçülerini kullanın.',
  },
  {
    question: 'Bebeğim iki beden arasındaysa hangisini almalıyım?',
    answer: 'Her zaman bir üst bedeni seçin. Bebekler çok hızlı büyür ve bir üst beden daha uzun kullanım ömrü ve konfor sağlar.',
  },
  {
    question: 'İnç cinsinden bedenler de aynı şekilde mi çalışıyor?',
    answer: 'Carter\'s gibi Amerikan markaları inç ve ağırlığı referans alır. Dönüştürücü, etkinleştirirseniz size otomatik olarak emperyal sistemdeki karşılıkları gösterir.',
  },
];
const howTo = [
  {
    name: 'Bebeğin boyunu girin',
    text: 'Bebeğin güncel boyunu santimetre veya inç cinsinden ayarlamak için kaydırıcıyı veya düğmeleri kullanın.',
  },
  {
    name: 'Bebeğin ağırlığını girin',
    text: 'Bazı markalar ağırlığı tamamlayıcı bir referans olarak kullandığından, sonuçları hassaslaştırmak için ağırlığı kg veya libre cinsinden ayarlayın.',
  },
  {
    name: 'Bir marka seçin',
    text: 'Önerilen bedeni ve giysinin tahmini ölçülerini görmek için giyim markasını seçin.',
  },
  {
    name: 'Karşılıklara göz atın',
    text: 'Sağ panelde mevcut tüm markaların eşdeğer bedenlerini bir bakışta göreceksiniz.',
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
  inLanguage: 'tr',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Bebek ölçüleri',
    labelResults: 'Tahmini karşılıklar',
    labelHeight: 'Bebeğin boyu',
    labelWeight: 'Bebeğin güncel ağırlığı',
    labelPresets: 'Tipik yaşa göre ön ayarlar',
    unitMetric: 'Metrik (cm/kg)',
    unitImperial: 'Emperyal (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marka ve Kesim',
    labelSuggested: 'Önerilen beden',
    labelChest: 'Göğüs',
    labelWaist: 'Bel',
    labelGarmentMeasures: 'Giysinin tahmini ölçüleri',
    fitRegular: 'Standart kesim',
    fitLarge: 'Geniş kesim',
    fitSmall: 'Dar kesim',
    tipTitle: 'Uzman tavsiyesi',
    tipText: 'Bebekler çok hızlı gelişim dönemlerinden geçerler. Eğer sonuç bir bedenin üst sınırındaysa, kullanım ömrünü ve bebeğin konforunu garanti altına almak için her zaman bir üst bedeni seçin.',
    shareAriaLabel: 'Bedeni paylaş',
    faqTitle: 'Sıkça sorulan sorular',
    bibliographyTitle: 'Referanslar',
  },
  seo: [
    { type: 'title', text: 'Bebek beden rehberi: Zara, H&M, Primark ve uluslararası markalar', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Aylık büyüme' },
      { value: '3 ay', label: 'Her bedenin süresi' },
      { value: '95%', label: 'Boy bazlı güvenilirlik' },
    ]},
    { type: 'tip', html: 'Beden seçerken yaşı değil, her zaman boyu ana referans olarak kullanın. Aynı aydaki iki bebek arasında 8–10 cm boy farkı olabilir, bu da tam bir beden atlamak bünlamına gelir.' },
    { type: 'title', text: 'Yaş, boy ve ağırlığa göre bedenler', level: 3 },
    { type: 'table', headers: ['Yaklaşık yaş', 'Boy (cm)', 'Ağırlık (kg)', 'Alışılmış beden', 'Tahmini kullanım'], rows: [
      ['Yeni doğan', '50–56', '3–4.5', '50 / RN', '4–6 hafta'],
      ['1–3 ay', '56–62', '4.5–6', '56–62', '6–8 hafta'],
      ['3–6 ay', '62–68', '6–8', '62–68', '6–8 hafta'],
      ['6–9 ay', '68–74', '8–9.5', '68–74', '6–8 hafta'],
      ['9–12 ay', '74–80', '9.5–11', '74–80', '6–8 hafta'],
      ['12–18 ay', '80–86', '11–13', '80–86', '3–4 ay'],
      ['18–24 ay', '86–92', '13–15', '86–92', '3–4 ay'],
    ]},
    { type: 'title', text: 'Geniş vs dar kalıplı markalar', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Büyük kalıplılar (bir alt bedeni seçin)',
        description: 'Bu markalar daha geniş kesimler kullanır; alışılmış bedenden bir küçüğünü tercih edin.',
        points: [
          'H&M: Genelde bir beden büyük gelir',
          'Primark: Genel bir geniş kesim hakimdir',
          'Lupilu (Lidl): Bol kesim',
          'Düşük persentildeki bebekler için önerilir',
        ],
      },
      {
        title: 'Dar kalıplılar (bir üst bedeni seçin)',
        description: 'Bu markalar daha dar kesimler kullanır; alışılmış bedenden bir büyüğünü tercih edin.',
        points: [
          "Carter's: Dar Amerikan kesimi",
          'Mayoral: Dar Avrupa kesimi',
          'Neck & Neck: Küçük kalıplar',
          'Yüksek persentildeki bebekler için önerilir',
        ],
      },
    ]},
    { type: 'title', text: 'Doğru bedeni bulmanın anahtarları', level: 3 },
    { type: 'list', items: [
      'Satın almadan önce her zaman bebeği ölçün, sadece yaşa güvenmeyin',
      'Eğer iki beden sınırındaysa, üst bedeni seçin',
      'Tulumlarda bez payını hesaba katın',
      'Avrupa bedenleri (50, 56, 62...) cm cinsinden boya karşılık gelir',
      'Kullanmadan önce her zaman yıkayın: Pamuklular %5\'e kadar çekebilir',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Beden 50 / Yeni Doğan',
        definition: '50 cm boya ve yaklaşık 3.5 kg ağırlığa kadar olan bebekler için tasarlanmıştır. Birçok bebek bunu ilk haftalarda bile hızla geçer.',
      },
      {
        term: 'Ağ ölçüsü',
        definition: 'Ağ ile bel arasındaki mesafe. Body ve tulumlarda kritiktir: Kısa bir ağ ölçüsü, giysinin geri kalanı uysa bile bebeğin hareketini kısıtlar.',
      },
      {
        term: 'Ağırlık bazlı referans',
        definition: "Carter's gibi bazı Amerikan markaları ağırlığı birincil referans olarak kullanır. Standart persentil dışındaki oranlara sahip bebekler için kullanışlıdır.",
      },
      {
        term: 'Zarf yaka',
        definition: 'Body ve tişörtlerin yakasının, bebeğin başından geçirmek yerine giysiyi aşağı doğru kaydırarak giydirilmesini sağlayan tasarımıdır. İlk aylarda vazgeçilmezdir.',
      },
    ]},
    { type: 'summary', title: 'Unutulmaması gerekenler', items: [
      'Boy, beden seçiminde yaştan daha güvenilir bir göstergedir.',
      "H&M ve Primark genellikle büyük kalıplıdır; Carter's ve Mayoral dar kalıplıdır.",
      'Sayısal Avrupa bedenleri (50, 56, 62...) boya karşılık gelir.',
      'Bedenler arasında kalındığında, üst bedeni seçmek uzun kullanım sağlar.',
      'Zarf yaka ve geniş ağ ölçüsü, konfor için kilit detaylardır.',
    ]},
  ],
  faqTitle: "Sıkça sorulan sorular",
  faq,
  bibliographyTitle: "Referanslar",
  bibliography: [
    {
      name: 'Zara - Çocuk beden rehberi',
      url: 'https://www.zara.com/tr/tr/size-guide.html',
    },
    {
      name: 'H&M - Bebek beden rehberi',
      url: 'https://www2.hm.com/tr_tr/musteri-hizmetleri/beden-tablosu.html',
    },
    {
      name: 'WHO - Çocuk büyüme standartları',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Beden rehberi',
      url: 'https://www.mayoral.com/tr-tr/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

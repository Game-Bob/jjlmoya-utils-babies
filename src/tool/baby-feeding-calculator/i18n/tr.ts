import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'bebek-beslenme-hesaplayici';
const title = 'Bebek Beslenme Hesaplayıcı';
const description = 'Bebeğinizin ağırlığına ve yaşına göre ne kadar süte ihtiyacı olduğunu hesaplayın. Önerilen öğünler, öğün başına mililitre ve açlık/tokluk sinyalleri.';

const faq = [
  {
    question: 'Yeni doğan bir bebeğin ne kadar süte ihtiyacı vardır?',
    answer: 'Yaşamın ilk gününde bebeğin midesi bir kiraz büyüklüğündedir ve her öğünde yalnızca 5 ila 7 ml süte ihtiyaç duyar. Beşinci günden itibaren kapasite 45–60 ml\'ye çıkar ve ihtiyaçlar kademeli olarak artar.',
  },
  {
    question: 'Bir bebek ne sıklıkla beslenmelidir?',
    answer: 'Yeni doğanların günde 8 ila 12 kez beslenmesi gerekir. 3 aylıkken bu sayı genellikle 7–8 öğüne, 6 aylıkken ise günde yaklaşık 5 öğüne düşer.',
  },
  {
    question: 'Bebeğimin yeterince beslendiğini nasıl anlarım?',
    answer: 'En güvenilir göstergeler şunlardır: uygun kilo alımı, günde en az 5–6 ıslak bez ve bebeğin beslenmeden sonra tokluk belirtileri göstermesi.',
  },
  {
    question: 'Anne sütü ile mama miktarları aynı mıdır?',
    answer: 'Emzirme döneminde hacim ölçülmeden bebeğin isteğine göre beslenmesi önerilir. Mama ile beslenmede genel kıstas, yaşa göre öğün sayısına bölünmüş günlük vücut ağırlığı başına 150 ml\'dir.',
  },
];

const howTo = [
  {
    name: 'Bebeğin yaşını seçin',
    text: 'Birimi (gün, hafta veya ay) seçin ve sürgü veya düğmelerle değeri ayarlayın.',
  },
  {
    name: 'Bebeğin ağırlığını girin',
    text: 'Bebeğin güncel ağırlığını kilogram cinsinden ayarlamak için ağırlık sürgüsünü veya düğmeleri kullanın.',
  },
  {
    name: 'Beslenme türünü seçin',
    text: 'Size en uygun kılavuzu almak için emzirme, karma veya mama seçeneklerinden birini belirleyin.',
  },
  {
    name: 'Önerilen planı inceleyin',
    text: 'Hesaplayıcı; öğün sayısını, öğün başına mililitreyi ve tahmini günlük toplamı gösterir.',
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

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Mevcut ayarlar',
    labelPlan: 'Önerilen plan',
    unitDays: 'gün',
    unitWeeks: 'hafta',
    unitMonths: 'aylık',
    labelWeight: 'Bebeğin ağırlığı',
    labelFeedType: 'Beslenme türü',
    feedBreast: 'Emzirme',
    feedMixed: 'Karma',
    feedFormula: 'Mama',
    labelFreeDemand: 'Serbest talep',
    labelMlPerFeed: 'öğün başına ml',
    labelFeedsCount: 'Öğün / 24saat',
    labelDailyTotal: 'Günlük toplam (tahmini)',
    labelHunger: 'Açlık sinyalleri',
    labelFullness: 'Tokluk sinyalleri',
    faqTitle: 'Sıkça sorulan sorular',
    bibliographyTitle: 'Referanslar',
  },
  seo: [
    { type: 'summary', title: 'Özet: Bebek beslenmesi', items: [
      'Yeni doğan bir bebeğin mide kapasitesi ilk gün sadece 5–7 ml\'dir.',
      'Mama için genel kıstas günlük vücut ağırlığı başına 150 ml\'dir.',
      'Emzirme, sabit hacimler olmadan bebeğin her isteğinde sunulur.',
      'Sıklık yaşla birlikte azalır: 6 ayda 8–12 öğünden 4–5 öğüne.',
    ]},
    { type: 'title', text: 'Bebeğimin ağırlığına ve yaşına göre ne kadar süte ihtiyacı var?', level: 2 },
    { type: 'paragraph', html: 'Süt ihtiyacı ilk aylarda hızla değişir. Hesaplayıcı; WHO ve AAP pediatrik yönergelerini izleyerek bebeğin güncel ağırlığına ve yaşına göre miktarı tahmin eder.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: '1. Gün (kiraz boyutu)' },
      { value: '150 ml/kg', label: 'Günlük mama kıstası' },
      { value: '8–12', label: 'Yeni doğan öğün sayısı' },
    ]},
    { type: 'title', text: 'Yaşa göre mide boyutu', level: 3 },
    { type: 'table', headers: ['Yaş', 'Ref. boyutu', 'Kapasite', 'Öğün/gün'], rows: [
      ['1. Gün', 'Kiraz', '5–7 ml', '8–12'],
      ['2–4. Gün', 'Ceviz', '22–27 ml', '8–12'],
      ['5–30. Gün', 'Yumurta', '45–60 ml', '8–10'],
      ['1–3 Aylık', 'Maksimum', '90–120 ml', '7–8'],
      ['3–6 Aylık', 'Maksimum', '120–150 ml', '5–6'],
      ['6+ Aylık', 'Maksimum', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Yeterli beslenmenin güvenilir bir göstergesi günlük ıslak bez sayısıdır: 5. günden itibaren günde 5 ila 6 bez, iyi bir hidrasyona işaret eder.' },
    { type: 'title', text: 'Emzirme vs mama', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Emzirme', description: 'Bebeğin talebine göre doğal beslenme.', points: ['Sabit saat yok', 'Aktif antikorlar', 'Değişken bileşim', 'Miktarı ölçmek zor'] },
      { title: 'Mama ile beslenme', description: 'Hesaplanabilir hacimle planlanmış öğünler.', points: ['Her 3–4 saatte bir', 'Stabil bileşim', 'Alımı kontrol etmek kolay', 'Steril hazırlık gerektirir'] },
    ]},
    { type: 'list', items: [
      'Uygun kilo alımı: ilk ayda haftalık 150–200 gr',
      'Günde en az 5–6 ıslak bez',
      'Öğünlerden sonra bebek huzurludur',
      'Berrak veya çok açık sarı idrar',
    ]},
  ],
  faqTitle: "Sıkça sorulan sorular",
  faq,
  bibliographyTitle: "Referanslar",
  bibliography: [
    {
      name: 'DSÖ - Bebek ve küçük çocuk beslenmesi',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Emzirme Rehberi',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: 'Türk Pediatri Kurumu - Beslenme Kılavuzu',
      url: 'https://turkpediatri.org.tr',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

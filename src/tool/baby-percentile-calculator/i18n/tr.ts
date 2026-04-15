import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'bebek-persentil-hesaplama';
const title = 'Bebekler İçin WHO Persentil Hesaplayıcı';
const description = 'Bebeğinizin ağırlık, boy ve BMI persentilini WHO (DSÖ) tablolarına (0-5 yaş) göre hesaplayın.';
const faq = [
  {
    question: '50. persentil ne anlama gelir?',
    answer: '50. persentil, bebeğin tam olarak medyanda olduğunu gösterir; yani aynı yaştaki ve cinsiyetteki bebeklerin yarısı daha ağır veya daha uzun, diğer yarısı ise daha hafiftir. Bu ideal değer olduğu anlamına gelmez, sadece dağılımın merkez değeridir.',
  },
  {
    question: 'Düşük persentil bir sorun belirtisi midir?',
    answer: 'Şart değil. Düşük bir persentil (örneğin P10), zaman içinde sabit kaldığı sürece tamamen normal olabilir. Önemli olan büyüme trendidir, izole bir değer değildir. Her zaman çocuk doktorunuza danışın.',
  },
  {
    question: 'Bu hesaplayıcı hangi büyüme tablolarını kullanıyor?',
    answer: 'Bu hesaplayıcı, Multicentre Growth Reference Study (MGRS) temel alınarak hazırlanan, 0-5 yaş arası çocuklar için Dünya Sağlık Örgütü (WHO) büyüme standartlarını kullanmaktadır.',
  },
  {
    question: 'Bebeklerde BMI nedir?',
    answer: 'Bebeklerde Vücut Kitle İndeksi (BMI), ağırlığın boyun karesine oranıdır. Bebekler için BMI persentilleri yetişkinlerinkinden farklıdır ve her yaş ve cinsiyet için spesifik tablolarla yorumlanmalıdır.',
  },
  {
    question: 'Bebeğimi ne sıklıkla ölçmeliyim?',
    answer: 'İlk aylarda çocuk doktoru genellikle her ziyarette büyümeyi kontrol eder. Evde, büyüme trendini gözlemlemek için ağırlık ve boyu aylık olarak kaydedebilirsiniz.',
  },
];
const howTo = [
  {
    name: 'Bebeğin cinsiyetini seçin',
    text: 'Uygun WHO tablolarını uygulamak için erkek veya kız arasında seçim yapın.',
  },
  {
    name: 'Yaşı girin',
    text: 'Ay olarak yaşı belirtmek için kaydırıcıyı veya okları kullanın (0-60 ay).',
  },
  {
    name: 'Ağırlık ve boyu girin',
    text: 'Ağırlığı kilogram, boyu ise santimetre cinsinden yazın.',
  },
  {
    name: 'Persentilleri inceleyin',
    text: 'Ağırlık, boy ve BMI persentilleri WHO tablolarına göre otomatik olarak hesaplanır.',
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
  inLanguage: 'tr',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Ölçüm Verileri',
    labelSex: 'Bebeğin cinsiyeti',
    sexBoy: 'Erkek',
    sexGirl: 'Kız',
    unitMonths: 'Sadece ay',
    unitYearsMonths: 'Yıl + ay',
    labelWeight: 'Ağırlık (kg)',
    labelHeight: 'Boy (cm)',
    btnAddHistory: 'Geçmişime ekle',
    btnClearHistory: 'Verileri temizle',
    labelDashboard: 'Büyüme Paneli',
    labelWeight2: 'Ağırlık',
    labelHeight2: 'Boy',
    labelBMI: 'BMI',
    labelCalculating: 'Hesaplanıyor...',
    disclaimer: 'Persentiller sadece istatistiksel bir araçtır. Sonuçları yorumlamak için her zaman çocuk doktorunuza danışın.',
    labelLowRange: 'Düşük aralık',
    labelLowNormal: 'Düşük normal',
    labelNormal: 'Normallik',
    labelHighNormal: 'Yüksek normal',
    labelHighRange: 'Yüksek aralık',
    alertOutOfRange: 'Değer P3-P97 aralıklarının dışında. Çocuk doktorunuza danışın.',
    labelMonths: 'Ay',
    labelYears: 'Yıl',
    faqTitle: 'Sıkça sorulan sorular',
    bibliographyTitle: 'Referanslar',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO Persentil Hesaplayıcı: Bebeğinizin büyümesini anlamak için kılavuz',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Bebeğinizin persentillerini yorumlamak için 5 anahtar',
      items: [
        'Hiçbir izole persentil bebeğinizin sağlığını tanımlamaz: Önemli olan zaman içindeki trenddir.',
        'P3 ile P97 arasındaki persentiller istatistiksel normal aralık içinde kabul edilir.',
        'Bebeklerde BMI kendi eğrilerini takip eder ve yetişkin referans değerleriyle karşılaştırılmamalıdır.',
        'WHO eğrileri, ilk aylarda sadece anne sütü ile beslenme de dahil olmak üzere optimal koşullarda yetiştirilen bebeklere dayanmaktadır.',
        'Uygun bir klinik yorum için büyüme kayıtlarını her zaman çocuk doktorunuzla paylaşın.',
      ],
    },
    {
      type: 'title',
      text: 'Bebeğinizi nasıl doğru ölçersiniz?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bebeği kıyafetsiz ve mümkünse her zaman aynı tartıda tartın.',
        '24 aya kadar uzunluğu yatay pozisyonda ölçün.',
        '2 yaşından itibaren boyu dikey pozisyonda ölçün.',
        'Daha fazla tutarlılık için ölçümleri günün aynı saatinde yapın.',
      ],
    },
    {
      type: 'tip',
      html: 'P3\'ün altındaki bir persentil otomatik olarak bir sağlık sorunu olduğu anlamına gelmez. En önemlisi, büyüme eğrisinin zaman içindeki trendini koruyup korumadığını gözlemlemektir.',
    },
    {
      type: 'title',
      text: 'Persentillerin yorumlanması',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Persentil', 'Yorum', 'Önerilen eylem'],
      rows: [
        ['P97 veya üzeri', 'Yüksek aralık', 'Bir sonraki ziyarette çocuk doktoruyla görüşün'],
        ['P85 - P97', 'Yüksek normal', 'Normal takip'],
        ['P15 - P85', 'Normallik', 'Özel bir eylem gerekmez'],
        ['P3 - P15', 'Düşük normal', 'Normal takip'],
        ['P3 veya altı', 'Düşük aralık', 'Çocuk doktoruna danışın'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs Orbegozo Eğrileri',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO Eğrileri',
          description: 'Optimal koşullarda yetiştirilen 6 ülkeden bebeklere dayanan uluslararası standart.',
          points: [
            'Doğrulanmış uluslararası standart',
            '6 ülkeden bebeklere ve optimal koşullara dayanır',
            'Güncel ve bilimsel destekli',
            'Yerel genetik varyasyonları yansıtmayabilir',
          ],
        },
        {
          title: 'Orbegozo Eğrileri',
          description: 'İspanyol nüfusuna uyarlanmış, önceki on yıllarda yaygın olarak kullanılan eğriler.',
          points: [
            'İspanyol nüfusuna uyarlanmış',
            'Önceki on yıllarda İspanya\'da yaygın olarak kullanıldı',
            'Daha eski bir referans nüfusa dayanır',
            'Daha düşük uluslararası benimseme',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 yaş', label: 'Referans standart' },
        { value: 'Trend eğrisi', label: 'Anahtar değişken' },
        { value: 'LMS parametreleri', label: 'Teknik hassasiyet' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Bir değerin referans nüfusun ortalamasından ne kadar standart sapma uzaklaştığını gösteren sayıdır. 0 değerindeki bir Z-Score, 50. persentile eşittir.',
        },
        {
          term: 'Uyum',
          definition: 'Ağırlık ve boy arasındaki uygun oran. Bir bebeğin ağırlık persentili düşük olabilir ancak boyu da aynı oranda düşükse uyumlu olabilir.',
        },
        {
          term: 'Antropometri',
          definition: 'Büyüme ve beslenme durumunu değerlendirmek için kullanılan vücut ölçümleri bütünüdür (ağırlık, boy, baş çevresi, BMI).',
        },
        {
          term: 'LMS parametreleri',
          definition: 'Persentil tablolarını oluşturmak ve herhangi bir ölçümü Z-Score\'a dönüştürmek için WHO tarafından kullanılan istatistiksel yöntemdir (L=Box-Cox, M=medyan, S=varyasyon katsayısı).',
        },
      ],
    },
  ],
  faqTitle: "Sıkça sorulan sorular",
  faq,
  bibliographyTitle: "Referanslar",
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

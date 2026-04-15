import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'yumurtlama-gunu-hesaplama';
const title = 'Yumurtlama Günü Hesaplama';
const description = 'Adet döngünüze göre doğurganlık pencerenizi ve yumurtlama tarihinizi hesaplayın.';
const faq = [
  {
    question: 'Doğurganlık penceresi nasıl hesaplanır?',
    answer: 'Doğurganlık penceresi, son adetinizin ilk gününden itibaren hesaplanır. Yumurtlama, bir sonraki döngünün başlamasından yaklaşık 14 gün önce gerçekleşir. Doğurgan günler, yumurtlamadan önceki 5 günü ve yumurtlama gününün kendisini içerir.',
  },
  {
    question: 'bu hesaplayıcı ne kadar hassastır?',
    answer: 'Hesaplayıcı, 28 günlük standart döngü modeline (veya sizin belirttiğiniz süreye) dayanan bir tahmindir. Rehberlik amaçlıdır ve bireysel varyasyonları yansıtmayabilir. Daha fazla hassasiyet için bazal vücut ısısı takibi veya ovülasyon testleri ile birlikte kullanın.',
  },
  {
    question: 'Döngüm düzensizse ne olur?',
    answer: 'Döngüleriniz aydan aya çok değişiyorsa, hesaplama daha az doğru olabilir. Bu durumda, bazal vücut ısısı takibi veya LH testleri, yumurtlamayı belirlemek için daha güvenilir yöntemlerdir.',
  },
  {
    question: 'Yumurtlamadan sonra yumurta ne kadar süre hayatta kalır?',
    answer: 'Yumurtanın ömrü 12 ila 24 saattir. Ancak spermler kadın üreme sisteminde 5 güne kadar hayatta kalabilir, bu nedenle gerçek doğurganlık penceresi yumurtlamadan birkaç gün öncesini kapsar.',
  },
  {
    question: 'Bu hesaplayıcı hamileliği önlemek için kullanılabilir mi?',
    answer: 'Bu hesaplayıcının bir doğum kontrol yöntemi olarak kullanılması önerilmez. Takvim tabanlı yöntemlerin önemli bir hata oranı vardır. Sizin için güvenli ve uygun doğum kontrol yöntemleri için doktorunuza veya jinekoloğunuza danışın.',
  },
];
const howTo = [
  {
    name: 'Son adetinizin ilk gününü seçin',
    text: 'Takvimde son adet kanamanızın başladığı güne tıklayın.',
  },
  {
    name: 'Döngü sürenizi ayarlayın',
    text: 'Adet döngünüzün genellikle kaç gün sürdüğünü belirtmek için sürgüyü hareket ettirin.',
  },
  {
    name: 'Sonuçları kontrol edin',
    text: 'Hesaplayıcı, tahmini yumurtlama tarihini, doğurganlık penceresini ve bir sonraki adet başlangıcını otomatik olarak gösterir.',
  },
  {
    name: 'Takvimde gezinin',
    text: 'Önceki veya sonraki aylardaki işaretli günleri görmek için navigasyon oklarını kullanın.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Son adetiniz ne zaman başladı?',
    step1Desc: 'Takvimde son adet döngünüzün ilk gününü seçin.',
    pulseHint: 'Devam etmek için takvimde bir güne tıklayın',
    step1Indicator: 'Başlangıç Tarihi',
    step2Indicator: 'Takviminiz',
    sidebarTitle: 'Döngünüz',
    sidebarDesc: 'Döngü sürenizi ayarlayarak sonuçları kişiselleştirin.',
    labelCycleLength: 'Döngü Süresi',
    unitDays: 'gün',
    labelOvulation: 'Gelecek Yumurtlama',
    labelFertileWindow: 'Doğurganlık Penceresi',
    labelNextPeriod: 'Gelecek Adet',
    legendSelection: 'Seçiminiz',
    legendPeriod: 'Adet',
    legendFertile: 'Doğurgan',
    legendOvulation: 'Yumurtlama',
    faqTitle: 'Sıkça sorulan sorular',
    bibliographyTitle: 'Referanslar',
  },
  seo: [
    {
      type: 'title',
      text: 'Yumurtlama Günü Hesaplama: Döngü ve Ovülasyon Hakkında Kapsamlı Rehber',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Doğurganlık penceresi hakkında 5 anahtar bilgi',
      items: [
        'Yumurtlama, bir sonraki adetin başlamasından yaklaşık 14 gün önce gerçekleşir.',
        'Doğurganlık penceresi, yumurtlamadan önceki 5 günü ve yumurtlama gününü içerir.',
        'Spermler kadın üreme sisteminde 5 güne kadar hayatta kalabilir.',
        'Düzensiz döngüler, takvim bazlı hesaplamanın güvenilirliğini azaltır.',
        'Bu aracı bazal vücut ısısı veya LH testleri ile birleştirmek hassasiyeti artırır.',
      ],
    },
    {
      type: 'title',
      text: 'Doğurganlık penceresi hesaplaması nasıl çalışır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yöntem, Ogino-Knaus kuralına ve standart yumurtlama modeline dayanır. 28 günlük bir döngüde yumurtlama genellikle 14. gün civarında gerçekleşir. Hesaplayıcı bu noktayı belirler ve etrafındaki en yüksek doğurganlığa sahip günleri işaretler.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 gün', label: 'Sonraki adetten önce' },
        { value: '5 gün', label: 'Pencere süresi' },
        { value: '12-24 sa', label: 'Yumurtanın ömrü' },
      ],
    },
    {
      type: 'title',
      text: 'Adet döngüsünün evreleri',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Foliküler evre',
          description: 'Adet kanaması ile başlar ve yumurtlamaya kadar sürer.',
          points: [
            'Yumurtalık folikülleri FSH hormonu etkisiyle olgunlaşır.',
            'Düzenli döngülerde 10 ile 14 gün arasında sürer.',
            'Östrojen seviyeleri kademeli olarak artar.',
          ],
        },
        {
          title: 'Luteal evre',
          description: 'Yumurtlamadan sonra başlar ve adetle sona erer.',
          points: [
            'Korpus luteum, endometriyumu hazırlamak için progesteron üretir.',
            'Normal döngülerde yaklaşık 14 gün sürer.',
            'Döllenme olmazsa korpus luteum dejenere olur.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Hesaplayıcı standart bir model kullansa da, adet döngüleri aydan aya değişebilir. Daha fazla hassasiyet için bu aracı bazal vücut ısısı takibi veya ovülasyon testleri ile birleştirin.',
    },
    {
      type: 'title',
      text: 'Yumurtlamanın biyolojik işaretleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Servikal mukus değişiklikleri: Doğurgan günlerde yumurta akı gibi şeffaf ve esnek hale gelir.',
        'Yumurtlamadan hemen sonra bazal vücut ısısında hafif artış (0,2–0,4 °C).',
        'Yumurtlama sırasında aktif yumurtalık tarafında hafif ağrı veya rahatsızlık (Mittelschmerz).',
        'Hormonal değişikliklerin etkisiyle yumurtlama yakınında libidoda hafif artış.',
        'Doğurgan günlerde karında hafif şişkinlik veya dolgunluk hissi.',
      ],
    },
    {
      type: 'title',
      text: 'Yaşam tarzı ve doğurganlık',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kronik stres yumurtlamayı bozabilir, döngüyü uzatabilir veya kısaltabilir.',
        'Vücut ağırlığının doğrudan etkisi vardır: Hem düşük hem de aşırı kilo yumurtlamayı etkiler.',
        'Orta düzeyde egzersiz döngü düzenini destekler; aşırı egzersiz döngüyü baskılayabilir.',
        'Sigara yumurtalık rezervini azaltır ve menopozu birkaç yıl öne çeker.',
        'Folik asit, demir ve antioksidanlar açısından zengin bir diyet üreme sağlığını destekler.',
      ],
    },
    {
      type: 'title',
      text: 'Döngü izleme yöntemleri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Yöntem', 'Güvenilirlik', 'Maliyet'],
      rows: [
        ['Takvim hesaplayıcı', 'Orta', 'Ücretsiz'],
        ['Bazal vücut ısısı', 'Uygulama ile yüksek', 'Düşük'],
        ['İdrarda LH testi', 'Yüksek', 'Makul'],
        ['Dijital doğurganlık monitörü', 'Çok yüksek', 'Yüksek'],
        ['Folikül ultrasonu', 'Maksimum', 'Klinik'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Yumurtlama (Ovülasyon)',
          definition: 'Olgunlaşmış yumurtanın, luteinize edici hormon (LH) artışıyla tetiklenerek yumurtalık folikülünden serbest kalmasıdır. Her döngüde bir kez gerçekleşir.',
        },
        {
          term: 'Doğurganlık penceresi',
          definition: 'Yumurtlamadan önceki 5 günü ve yumurtlama gününü kapsayan, gebe kalma olasılığının en yüksek olduğu dönemdir.',
        },
        {
          term: 'Servikal mukus',
          definition: 'Rahim ağzından salgılanan ve dokusu döngü boyunca değişen sıvıdır. Doğurgan günlerde şeffaf ve esnek hale gelerek spermlerin geçişini kolaylaştırır.',
        },
        {
          term: 'Bazal vücut ısısı',
          definition: 'Herhangi bir aktiviteden önce, uyanır uyanmaz ölçülen dinlenme halindeki vücut ısısıdır. Yumurtlamadan sonra progesteron etkisiyle hafifçe artar (0,2–0,4 °C).',
        },
      ],
    },
  ],
  faqTitle: "Sıkça sorulan sorular",
  faq,
  bibliographyTitle: "Referanslar",
  bibliography: [
    {
      name: 'DSÖ - Aile planlaması',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Türk Jinekoloji ve Obstetrik Derneği',
      url: 'https://www.tjod.org',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

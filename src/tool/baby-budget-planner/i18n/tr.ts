import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Bebek Bütçe Planlayıcı';
export const description = 'Bebeğinizin ilk yıl masraflarını planlamak için nihai araç. Oda hazırlığı, aylık giderler ve gizli masrafları akıllı tasarruf ipuçlarıyla hesaplayın.';

export const faq = [
  {
    question: 'Bir bebek ilk yılında ne kadar maliyet çıkarır?',
    answer: 'Ortalama olarak, ilk yıl yaşam tarzınıza, çocuk bakım ihtiyaçlarınıza ve ürünleri yeni mi yoksa ikinci el mi aldığınıza bağlı olarak 150.000 TL ile 450.000 TL arasında maliyet çıkarabilir.',
  },
  {
    question: 'Yeni doğan bir bebek için en pahalı ürünler nelerdir?',
    answer: 'En büyük tek seferlik masraflar genellikle bebek arabası, oda mobilyaları (beşik, şifonyer) ve oto koltuğudur. Kreş veya bakıcı masrafları ise en yüksek aylık giderdir.',
  },
  {
    question: 'Bebek masraflarından nasıl tasarruf edebilirim?',
    answer: 'Ekipman ve giysiler için ikinci el alım yapmak, mümkünse anne sütü ile beslemek ve arkadaşlardan/aileden hediye almak için bir ihtiyaç listesi oluşturmak en etkili stratejilerdir.',
  },
  {
    question: 'Bebek planlamasında "Hayalet Giderler" nelerdir?',
    answer: 'Bunlar artan faturalar (ısıtma/soğutma), daha yüksek aile sigortası primleri ve standart listelerde pek bulunmayan zorunlu olmayan aşılar veya tıbbi malzemeler gibi gizli maliyetlerdir.',
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
    name: 'Profilinizi Yapılandırın',
    text: 'Yaşam tarzınızı (Tasarruflu, Dengeli veya Premium), besleme yöntemini ve çocuk bakım stratejinizi seçin.',
  },
  {
    name: 'Ürünlerinizi İnceleyin',
    text: 'Kategoriler arasında gezinin (İlk Yatırım, Aylık ve Önemli Adımlar) ve fiyatları ayarlayın veya ürünleri ikinci el olarak işaretleyin.',
  },
  {
    name: 'Bütçenizi Takip Edin',
    text: 'İlk yıl için gereken toplam tutarı görün ve ürünleri aldıkça ilerlemenizi takip edin.',
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
    priceCurrency: 'TRY',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'bebek-butce-planlayici',
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Bibliyografya',
  seo: [
    { type: 'summary', title: 'Özet: Bebek Bütçesi', items: [
      'İlk yıl masrafları yaşam tarzına göre büyük değişiklik gösterir.',
      'Tek seferlik başlangıç maliyetleri (oda, araba) ilk büyük engeldir.',
      'Çocuk bakımı, aylık bütçenin %50\'sine kadarını oluşturabilir.',
      'İkinci el ürünler toplam bütçeyi %60\'a kadar azaltabilir.',
    ]},
    { type: 'title', text: 'Bir bebek ilk yılında gerçekte ne kadara mal olur?', level: 2 },
    { type: 'paragraph', html: 'Bir bebek için plan yapmak sadece bez almaktan ibaret değildir. Tek seferlik yatırımlarla aylık giderleri karşılaştıran stratejik bir bakış gerektirir. Planlayıcımız bu eğriyi görselleştirmenize ve ebeveynliğe finansal geçişe hazırlanmanıza yardımcı olur.' },
    { type: 'stats', columns: 3, items: [
      { value: '50.000 TL+', label: 'Başlangıç Ekipmanı' },
      { value: '2.500-4.000 TL', label: 'Aylık Bez/Bakım' },
      { value: '%40+', label: '2. El ile Tasarruf' },
    ]},
    { type: 'title', text: 'Kategori Dağılımı: Para Nereye Gidiyor?', level: 3 },
    { type: 'table', headers: ['Kategori', 'Tipik Ürünler', 'Sıklık', 'Maliyet Etkisi'], rows: [
      ['Başlangıç Yatırımı', 'Beşik, Bebek Arabası, Oto Koltuğu', 'Tek seferlik', 'Yüksek'],
      ['Aylık Giderler', 'Bez, Mama, Eczane', 'Her ay', 'Orta'],
      ['Önemli Adımlar', 'Mama Sandalyesi, Ek Gıda, Kıyafet', 'Ara sıra', 'Orta'],
      ['Bakım', 'Kreş / Bakıcı', 'Her ay', 'Çok Yüksek'],
    ]},
    { type: 'tip', html: '<strong>Profesyonel Tasarruf İpucu:</strong> Kaliteli bebek arabaları ve oda mobilyalarının ikinci el değeri yüksektir. Bunları ikinci el almak, güvenlik veya stilden ödün vermeden binlerce lira tasarruf etmenizi sağlayabilir.' },
    { type: 'title', text: 'Yaşam Tarzı Karşılaştırması', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Tasarruflu', 
        description: 'İkinci el ve temel ihtiyaçlara odaklanın.', 
        points: ['Elden ele kıyafetler', 'Yenilenmiş ekipman', 'Anne sütü odaklı', 'Kamu destekli bakım'] 
      },
      { 
        title: 'Premium', 
        description: 'En yeni modeller ve maksimum konfor.', 
        points: ['Yüksek teknoloji ürünler', 'Organik mamalar', 'Tasarım bebek odası', 'Özel bakıcı desteği'] 
      },
    ]},
    { type: 'title', text: 'Akıllı Planlama Kontrol Listesi', level: 3 },
    { type: 'list', items: [
      'Aile sigortası kapsamı güncellemelerini kontrol edin.',
      'Zorunlu olmayan aşılar ve özel eczane ürünleri için bütçe ayırın.',
      'Ev faturalarında (ısıtma/soğutma) %20\'lik bir artış öngörün.',
      'Ailenin büyük alımlarda yardımcı olması için erkenden bir ihtiyaç listesi oluşturun.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Planını Başlat',
    lifestyleLabel: 'Yaşam Tarzı Seçimi',
    lifestyleSaving: 'Maksimum Tasarruf',
    lifestyleBalanced: 'Dengeli',
    lifestylePremium: 'Premium',
    feedingLabel: 'Beslenme Yöntemi',
    feedingBreast: 'Anne Sütü',
    feedingFormula: 'Mama',
    feedingMixed: 'Karışık',
    childcareLabel: 'Bakım Stratejisi',
    childcareHome: 'Evde Bakım',
    childcarePublic: 'Devlet Kreşi',
    childcarePrivate: 'Özel Kreş / Bakıcı',
    startBtn: 'Bütçemi Oluştur',
    categoryBeforeBirth: 'Başlangıç Yatırımı',
    categoryMonthByMonth: 'Aylık Giderler',
    categoryMilestones: 'Önemli Adımlar',
    totalNeededLabel: '1. Yıl Toplam Hedef',
    savingsProgressLabel: 'Hazır / Biriktirildi',
    chartTitle: 'Aylık Gider Eğrisi',
    ghostAlertsTitle: 'Hayalet Gider Uyarıları',
    ghostInsurance: 'Sigorta Poliçe Kontrolü',
    ghostHeating: 'Faturalarda +%20 Artış Öngör',
    ghostVaccines: 'Opsiyonel Aşı Bütçesi',
    diaperCalcTitle: 'Bez Fiyat Kontrolü',
    diaperPriceLabel: 'Paket Fiyatı',
    diaperUnitsLabel: 'Paketteki Adet',
    secondHandLabel: '2. El / Hediye',
    wishlistLabel: 'İhtiyaç Listesinde',
    itemNursery: 'Bebek Odası Hazırlığı',
    itemStroller: 'Bebek Arabası & Seyahat Seti',
    itemHospitalBag: 'Hastane Çantası İhtiyaçları',
    itemDiapers: 'Bez & Islak Mendil',
    itemPharmacy: 'Eczane & Hijyen',
    itemDaycare: 'Kreş / Çocuk Bakımı',
    itemSolidFood: 'Ek Gıdaya Geçiş',
    itemClothes: 'Mevsimlik Kıyafetler',
    itemHighChair: 'Mama Sandalyesi & Seti',
    editLabel: 'Fiyatı Düzenle',
    saveBtn: 'Kaydet',
    exportBtn: 'JSON Dışa Aktar',
    importBtn: 'JSON İçe Aktar',
    resetBtn: 'Planı Sıfırla',
    currencySymbol: '₺',
    monthPrefix: 'A',
    initialMonthLabel: 'Başlat',
    perMonthLabel: '/ay',
    confirmReset: 'Emin misiniz?',
    currencyMultiplier: 35,
  },
};

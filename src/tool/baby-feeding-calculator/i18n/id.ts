import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-asupan-bayi';
const title = 'Kalkulator Asupan Bayi';
const description = 'Hitung berapa banyak susu yang dibutuhkan bayi Anda berdasarkan berat badan dan usia. Rekomendasi asupan, mililiter per sesi, serta sinyal lapar dan kenyang.';

const faq = [
  {
    question: 'Berapa banyak susu yang dibutuhkan bayi baru lahir?',
    answer: 'Pada hari pertama kehidupan, lambung bayi berukuran sebesar buah ceri dan hanya membutuhkan antara 5 hingga 7 ml per sesi asupan. Sejak hari kelima, kapasitas tumbuh hingga 45–60 ml dan kebutuhan meningkat secara progresif.',
  },
  {
    question: 'Seberapa sering bayi harus makan?',
    answer: 'Bayi baru lahir membutuhkan antara 8 hingga 12 sesi asupan per hari. Pada usia 3 bulan biasanya menjadi 7–8 sesi, dan pada usia 6 bulan menjadi sekitar 5 sesi harian.',
  },
  {
    question: 'Bagaimana saya tahu jika bayi saya cukup makan?',
    answer: 'Indikator yang paling dapat diandalkan adalah: penambahan berat badan yang memadai, setidaknya 5–6 popok basah per hari, dan bayi menunjukkan sinyal kenyang setelah asupan.',
  },
  {
    question: 'Apakah jumlah ASI dan susu formula sama?',
    answer: 'Dengan ASI, disarankan untuk memberikan asupan sesuai permintaan (ad libitum) tanpa mengukur volume. Dengan susu formula, referensi umum adalah 150 ml per kg berat badan per hari, didistribusikan ke jumlah sesi asupan sesuai usia.',
  },
];

const howTo = [
  {
    name: 'Pilih usia bayi',
    text: 'Pilih satuan (hari, minggu atau bulan) dan sesuaikan nilai dengan slider atau tombol.',
  },
  {
    name: 'Masukkan berat badan bayi',
    text: 'Gunakan slider berat badan atau tombol untuk menyesuaikan berat badan bayi saat ini dalam kilogram.',
  },
  {
    name: 'Pilih jenis asupan',
    text: 'Pilih antara ASI, campuran, atau formula untuk mendapatkan panduan yang paling sesuai.',
  },
  {
    name: 'Lihat rencana yang direkomendasikan',
    text: 'Kalkulator menampilkan jumlah sesi asupan, mililiter per sesi, dan perkiraan total harian.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Konfigurasi saat ini',
    labelPlan: 'Rencana rekomendasi',
    unitDays: 'hari',
    unitWeeks: 'minggu',
    unitMonths: 'bulan',
    labelWeight: 'Berat badan bayi',
    labelFeedType: 'Jenis asupan',
    feedBreast: 'ASI',
    feedMixed: 'Campuran',
    feedFormula: 'Formula',
    labelFreeDemand: 'Sesuai permintaan',
    labelMlPerFeed: 'ml per sesi',
    labelFeedsCount: 'Sesi / 24 jam',
    labelDailyTotal: 'Total harian (est.)',
    labelHunger: 'Sinyal lapar',
    labelFullness: 'Sinyal kenyang',
    faqTitle: 'Pertanyaan umum',
    bibliographyTitle: 'Referensi',
  },
  seo: [
    { type: 'summary', title: 'Ringkasan: Asupan bayi', items: [
      'Kapasitas lambung bayi baru lahir hanya sekitar 5–7 ml pada hari pertama.',
      'Referensi umum untuk formula adalah 150 ml per kg berat badan per hari.',
      'ASI diberikan sesuai permintaan tanpa volume tetap.',
      'Frekuensi menurun seiring usia: dari 8–12 sesi ke 4–5 dalam 6 bulan.',
    ]},
    { type: 'title', text: 'Berapa banyak susu yang dibutuhkan bayi saya menurut berat dan usianya?', level: 2 },
    { type: 'paragraph', html: 'Kebutuhan susu berubah dengan cepat di bulan-bulan pertama. Kalkulator memperkirakan jumlah berdasarkan berat saat ini dan usia bayi, mengikuti pedoman pediatrik WHO dan AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Hari 1 (ukuran ceri)' },
      { value: '150 ml/kg', label: 'Referensi harian formula' },
      { value: '8–12', label: 'Sesi/hari bayi baru lahir' },
    ]},
    { type: 'title', text: 'Ukuran lambung berdasarkan usia', level: 3 },
    { type: 'table', headers: ['Usia', 'Ukuran ref.', 'Kapasitas', 'Sesi/hari'], rows: [
      ['Hari 1', 'Ceri', '5–7 ml', '8–12'],
      ['Hari 2–4', 'Kacang kenari', '22–27 ml', '8–12'],
      ['Hari 5–30', 'Telur', '45–60 ml', '8–10'],
      ['1–3 bulan', 'Maksimal', '90–120 ml', '7–8'],
      ['3–6 bulan', 'Maksimal', '120–150 ml', '5–6'],
      ['6+ bulan', 'Maksimal', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Indikator yang dapat diandalkan untuk asupan yang cukup adalah jumlah popok basah: antara 5 dan 6 popok per hari dari hari kelima menunjukkan hidrasi yang baik.' },
    { type: 'title', text: 'ASI vs susu formula', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'ASI', description: 'Asupan alami sesuai permintaan.', points: ['Tanpa jadwal tetap', 'Antibodi aktif', 'Komposisi variabel', 'Sulit diukur volumenya'] },
      { title: 'Susu formula', description: 'Asupan terjadwal dengan volume yang dapat dihitung.', points: ['Setiap 3–4 jam', 'Komposisi stabil', 'Mudah mengontrol asupan', 'Memerlukan persiapan steril'] },
    ]},
    { type: 'list', items: [
      'Penambahan berat badan memadai: 150–200 g/minggu di bulan pertama',
      'Setidaknya 5–6 popok basah per hari',
      'Bayi terlihat tenang setelah asupan',
      'Urin jernih atau kuning pucat',
    ]},
  ],
  faqTitle: "Pertanyaan umum",
  faq,
  bibliographyTitle: "Referensi",
  bibliography: [
    {
      name: 'WHO - Infant and young child feeding',
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
      name: 'Ikatan Dokter Anak Indonesia (IDAI) - Nutrisi',
      url: 'https://www.idai.or.id',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

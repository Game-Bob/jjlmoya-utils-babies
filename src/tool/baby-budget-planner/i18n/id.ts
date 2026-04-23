import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Perencana Anggaran Bayi';
export const description = 'Alat definitif untuk merencanakan pengeluaran tahun pertama bayi Anda. Hitung persiapan kamar bayi, biaya bulanan, dan biaya tersembunyi dengan tips hemat yang cerdas.';

export const faq = [
  {
    question: 'Berapa biaya bayi di tahun pertama?',
    answer: 'Rata-rata, tahun pertama bisa memakan biaya antara Rp 50.000.000 hingga Rp 150.000.000 tergantung pada gaya hidup, kebutuhan pengasuhan, dan apakah Anda membeli barang baru atau bekas.',
  },
  {
    question: 'Apa saja barang termahal untuk bayi baru lahir?',
    answer: 'Pengeluaran awal terbesar biasanya adalah kereta bayi (stroller), furnitur kamar bayi (tempat tidur, lemari), dan kursi mobil (car seat). Biaya penitipan anak adalah pengeluaran bulanan rutin yang paling tinggi.',
  },
  {
    question: 'Bagaimana cara menghemat pengeluaran bayi?',
    answer: 'Membeli perlengkapan dan pakaian bekas, memilih menyusui (jika memungkinkan), dan menggunakan daftar kado (wishlist) agar teman dan keluarga bisa memberikan barang-barang penting adalah strategi yang paling efektif.',
  },
  {
    question: 'Apa itu "Biaya Hantu" dalam perencanaan anggaran bayi?',
    answer: 'Ini adalah biaya tersembunyi seperti kenaikan tagihan listrik (AC/pemanas), premi asuransi keluarga yang lebih tinggi, serta vaksin non-wajib atau perlengkapan medis yang biasanya tidak ada dalam daftar standar.',
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
    name: 'Atur profil Anda',
    text: 'Pilih gaya hidup Anda (Hemat, Seimbang, atau Premium), metode pemberian makan, dan strategi pengasuhan anak.',
  },
  {
    name: 'Tinjau item Anda',
    text: 'Telusuri kategori (Investasi awal, Bulanan, dan Tahapan penting) dan sesuaikan harga atau tandai barang sebagai barang bekas.',
  },
  {
    name: 'Pantau anggaran',
    text: 'Lihat total dana yang dibutuhkan untuk tahun pertama dan pantau kemajuan Anda saat mengumpulkan barang-barang tersebut.',
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
    priceCurrency: 'IDR',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'perencana-anggaran-bayi',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Bibliografi',
  seo: [
    { type: 'summary', title: 'Ringkasan: Anggaran Bayi', items: [
      'Tahun pertama bisa menelan biaya Rp 50jt hingga Rp 150jt.',
      'Biaya awal (kamar bayi, stroller) adalah hambatan terbesar di awal.',
      'Pengasuhan anak bisa memakan hingga 50% dari anggaran bulanan rutin.',
      'Barang bekas dapat memangkas total anggaran hingga 60%.',
    ]},
    { type: 'title', text: 'Berapa sebenarnya biaya bayi di tahun pertama?', level: 2 },
    { type: 'paragraph', html: 'Merencanakan kehadiran bayi lebih dari sekadar membeli popok. Ini membutuhkan pandangan strategis tentang investasi awal dibandingkan dengan biaya bulanan rutin. Perencana kami membantu Anda memvisualisasikan kurva ini dan bersiap untuk transisi keuangan menuju peran orang tua.' },
    { type: 'stats', columns: 3, items: [
      { value: 'Rp 20jt+', label: 'Perlengkapan Awal' },
      { value: 'Rp 1-1,5jt', label: 'Popok/Higiene Bulanan' },
      { value: '40%+', label: 'Hemat dengan Barang Bekas' },
    ]},
    { type: 'title', text: 'Rincian Kategori: Ke mana uang mengalir?', level: 3 },
    { type: 'table', headers: ['Kategori', 'Item Umum', 'Frekuensi', 'Dampak Biaya'], rows: [
      ['Investasi Awal', 'Tempat Tidur, Stroller, Car Seat', 'Satu kali', 'Tinggi'],
      ['Biaya Bulanan', 'Popok, Susu Formula, Farmasi', 'Setiap bulan', 'Sedang'],
      ['Tahapan Penting', 'Kursi Makan, Makanan Padat, Baju', 'Sesekali', 'Sedang'],
      ['Pengasuhan', 'Daycare / Pengasuh', 'Setiap bulan', 'Sangat Tinggi'],
    ]},
    { type: 'tip', html: '<strong>Tips Hemat Profesional:</strong> Stroller berkualitas tinggi dan furnitur kamar bayi memiliki nilai jual kembali yang sangat baik. Membelinya secara bekas dapat menghemat jutaan rupiah tanpa mengorbankan keamanan atau gaya.' },
    { type: 'title', text: 'Perbandingan Gaya Hidup', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Fokus Hemat', 
        description: 'Fokus pada barang bekas dan kebutuhan pokok.', 
        points: ['Pakaian lungsuran', 'Peralatan rekondisi', 'Fokus menyusui', 'Penitipan anak umum'] 
      },
      { 
        title: 'Premium', 
        description: 'Model terbaru dan kenyamanan maksimal.', 
        points: ['Peralatan teknologi tinggi', 'Susu formula organik', 'Kamar bayi desainer', 'Pengasuh pribadi 1-on-1'] 
      },
    ]},
    { type: 'title', text: 'Daftar Periksa Perencanaan Cerdas', level: 3 },
    { type: 'list', items: [
      'Periksa pembaruan cakupan asuransi kesehatan keluarga.',
      'Anggarkan untuk vaksin non-wajib dan item farmasi khusus.',
      'Antisipasi kenaikan 20% dalam tagihan listrik rumah (AC/pemanas).',
      'Buat wishlist lebih awal agar keluarga bisa membantu pembelian barang besar.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Mulai Rencana Anda',
    lifestyleLabel: 'Pilihan Gaya Hidup',
    lifestyleSaving: 'Hemat Maksimal',
    lifestyleBalanced: 'Seimbang',
    lifestylePremium: 'Premium',
    feedingLabel: 'Metode Pemberian Makan',
    feedingBreast: 'Menyusui',
    feedingFormula: 'Susu Formula',
    feedingMixed: 'Campuran',
    childcareLabel: 'Strategi Pengasuhan',
    childcareHome: 'Tetap di Rumah',
    childcarePublic: 'Daycare Umum',
    childcarePrivate: 'Daycare Swasta / Pengasuh',
    startBtn: 'Buat Anggaran Saya',
    categoryBeforeBirth: 'Investasi Awal',
    categoryMonthByMonth: 'Biaya Bulanan',
    categoryMilestones: 'Tahapan Berikutnya',
    totalNeededLabel: 'Target Total Tahun ke-1',
    savingsProgressLabel: 'Siap / Tersimpan',
    chartTitle: 'Kurva Pengeluaran Bulanan',
    ghostAlertsTitle: 'Peringatan Biaya Hantu',
    ghostInsurance: 'Cek Asuransi Jiwa/Kesehatan',
    ghostHeating: 'Antisipasi +20% Biaya Listrik',
    ghostVaccines: 'Anggaran Vaksin Opsional',
    diaperCalcTitle: 'Cek Harga Popok',
    diaperPriceLabel: 'Harga per Pak',
    diaperUnitsLabel: 'Isi per Pak',
    secondHandLabel: 'Bekas / Kado',
    wishlistLabel: 'Dalam Daftar',
    itemNursery: 'Persiapan Kamar Bayi',
    itemStroller: 'Stroller & Travel System',
    itemHospitalBag: 'Isi Tas Rumah Sakit',
    itemDiapers: 'Popok & Tisu Basah',
    itemPharmacy: 'Farmasi & Higiene',
    itemDaycare: 'Pengasuhan / Daycare',
    itemSolidFood: 'Transisi Makanan Padat',
    itemClothes: 'Pakaian Musiman',
    itemHighChair: 'Kursi Makan & Perlengkapan',
    editLabel: 'Edit Harga',
    saveBtn: 'Simpan',
    exportBtn: 'Ekspor JSON',
    importBtn: 'Impor JSON',
    resetBtn: 'Atur Ulang Rencana',
    currencySymbol: 'Rp',
    monthPrefix: 'B',
    initialMonthLabel: 'Mulai',
    perMonthLabel: '/bulan',
    confirmReset: 'Apakah Anda yakin?',
    currencyMultiplier: 17000,
  },
};

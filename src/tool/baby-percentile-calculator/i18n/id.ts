import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-persentil-bayi';
const title = 'Kalkulator Persentil WHO untuk Bayi';
const description = 'Hitung persentil berat badan, tinggi badan, dan BMI bayi Anda berdasarkan tabel WHO (0-5 tahun).';
const faq = [
  {
    question: 'Apa arti dari persentil ke-50?',
    answer: 'Persentil ke-50 menunjukkan bahwa bayi berada tepat di median, artinya separuh dari bayi dengan usia dan jenis kelamin yang sama memiliki berat atau tinggi yang lebih besar, dan separuh lainnya lebih kecil. Ini bukan berarti nilai ideal, melainkan nilai tengah dari distribusi.',
  },
  {
    question: 'Apakah persentil rendah merupakan tanda masalah?',
    answer: 'Belum tentu. Persentil rendah (misalnya P10) bisa jadi sangat normal jika tetap stabil dari waktu ke waktu. Yang terpenting adalah tren pertumbuhan, bukan satu nilai yang berdiri sendiri. Selalu konsultasikan dengan dokter anak Anda.',
  },
  {
    question: 'Tabel pertumbuhan mana yang digunakan kalkulator ini?',
    answer: 'Kalkulator ini menggunakan standar pertumbuhan dari Organisasi Kesehatan Dunia (WHO) untuk anak usia 0 hingga 5 tahun, berdasarkan Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Apa itu BMI pada bayi?',
    answer: 'Indeks Massa Tubuh (BMI) pada bayi adalah rasio antara berat badan dan kuadrat tinggi badan. Persentil BMI untuk bayi berbeda dari orang dewasa dan harus diinterpretasikan dengan tabel spesifik untuk setiap usia dan jenis kelamin.',
  },
  {
    question: 'Seberapa sering saya harus mengukur bayi saya?',
    answer: 'Pada bulan-bulan pertama, dokter anak biasanya memantau pertumbuhan pada setiap kunjungan. Di rumah, Anda dapat mencatat berat dan tinggi badan setiap bulan untuk mengamati tren pertumbuhan.',
  },
];
const howTo = [
  {
    name: 'Pilih jenis kelamin bayi',
    text: 'Pilih laki-laki atau perempuan untuk menerapkan tabel WHO yang sesuai.',
  },
  {
    name: 'Masukkan usia',
    text: 'Gunakan slider atau panah untuk menunjukkan usia dalam bulan (0-60 bulan).',
  },
  {
    name: 'Masukkan berat dan tinggi badan',
    text: 'Tuliskan berat badan dalam kilogram dan tinggi badan dalam sentimeter.',
  },
  {
    name: 'Lihat persentilnya',
    text: 'Persentil berat, tinggi, dan BMI dihitung secara otomatis sesuai dengan tabel WHO.',
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
  inLanguage: 'id',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Data Pengukuran',
    labelSex: 'Jenis kelamin bayi',
    sexBoy: 'Laki-laki',
    sexGirl: 'Perempuan',
    unitMonths: 'Bulan saja',
    unitYearsMonths: 'Tahun + bulan',
    labelWeight: 'Berat (kg)',
    labelHeight: 'Tinggi (cm)',
    btnAddHistory: 'Tambah ke riwayat saya',
    btnClearHistory: 'Hapus data',
    labelDashboard: 'Dashboard Pertumbuhan',
    labelWeight2: 'Berat',
    labelHeight2: 'Tinggi',
    labelBMI: 'BMI',
    labelCalculating: 'Menghitung...',
    disclaimer: 'Persentil hanyalah alat statistik. Selalu konsultasikan dengan dokter anak Anda untuk menginterpretasikan hasilnya.',
    labelLowRange: 'Rentang rendah',
    labelLowNormal: 'Normal rendah',
    labelNormal: 'Normal',
    labelHighNormal: 'Normal tinggi',
    labelHighRange: 'Rentang tinggi',
    alertOutOfRange: 'Nilai di luar rentang P3-P97. Konsultasikan dengan dokter anak Anda.',
    labelMonths: 'Bulan',
    labelYears: 'Tahun',
    faqTitle: 'Pertanyaan umum',
    bibliographyTitle: 'Referensi',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Persentil WHO: Panduan memahami pertumbuhan bayi Anda',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 kunci untuk menginterpretasikan persentil bayi Anda',
      items: [
        'Tidak ada satu pun persentil yang mendefinisikan kesehatan bayi Anda: yang penting adalah tren dari waktu ke waktu.',
        'Persentil antara P3 dan P97 dianggap berada dalam rentang normal statistik.',
        'BMI pada bayi mengikuti kurva sendiri dan tidak boleh dibandingkan dengan nilai acuan untuk orang dewasa.',
        'Kurva WHO didasarkan pada bayi yang dibesarkan dalam kondisi optimal, termasuk pemberian ASI eksklusif selama bulan-bulan pertama.',
        'Selalu bagikan catatan pertumbuhan dengan dokter anak Anda untuk interpretasi klinis yang tepat.',
      ],
    },
    {
      type: 'title',
      text: 'Cara mengukur bayi Anda dengan benar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Timbang bayi tanpa pakaian dan sebisa mungkin selalu pada timbangan yang sama.',
        'Ukur panjang badan dalam posisi horizontal hingga usia 24 bulan.',
        'Mulai usia 2 tahun, ukur tinggi badan dalam posisi vertikal.',
        'Lakukan pengukuran pada waktu yang sama dalam sehari untuk konsistensi yang lebih baik.',
      ],
    },
    {
      type: 'tip',
      html: 'Persentil di bawah P3 tidak secara otomatis menunjukkan masalah kesehatan. Yang paling penting adalah mengamati apakah kurva pertumbuhan mempertahankan trennya dari waktu ke waktu.',
    },
    {
      type: 'title',
      text: 'Interpretasi persentil',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Persentil', 'Interpretasi', 'Tindakan yang disarankan'],
      rows: [
        ['P97 atau lebih tinggi', 'Rentang tinggi', 'Diskusikan dengan dokter anak pada kunjungan berikutnya'],
        ['P85 ke P97', 'Normal tinggi', 'Pemantauan normal'],
        ['P15 ke P85', 'Normal', 'Tidak diperlukan tindakan khusus'],
        ['P3 ke P15', 'Normal rendah', 'Pemantauan normal'],
        ['P3 atau lebih rendah', 'Rentang rendah', 'Konsultasikan dengan dokter anak'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs Kurva Orbegozo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kurva WHO',
          description: 'Standar internasional berdasarkan bayi dari 6 negara yang dibesarkan dalam kondisi optimal.',
          points: [
            'Standar internasional yang telah divalidasi',
            'Berdasarkan bayi dari 6 negara dan kondisi optimal',
            'Diperbarui dan dengan dukungan ilmiah terkini',
            'Mungkin tidak mencerminkan variasi genetik lokal',
          ],
        },
        {
          title: 'Kurva Orbegozo',
          description: 'Kurva yang disesuaikan dengan populasi Spanyol, banyak digunakan pada dekade-dekade sebelumnya.',
          points: [
            'Disesuaikan dengan populasi Spanyol',
            'Banyak digunakan di Spanyol pada dekade sebelumnya',
            'Berdasarkan populasi acuan yang lebih tua',
            'Adopsi internasional yang lebih rendah',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 tahun', label: 'Standar referensi' },
        { value: 'Kurva tren', label: 'Variabel kunci' },
        { value: 'Parameter LMS', label: 'Presisi teknis' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Jumlah standar deviasi suatu nilai dari rata-rata populasi acuan. Z-Score 0 setara dengan persentil ke-50.',
        },
        {
          term: 'Harmoni',
          definition: 'Proporsi yang memadai antara berat dan tinggi badan. Bayi mungkin memiliki persentil berat badan yang rendah tetapi tetap harmonis jika tinggi badannya juga rendah dalam proporsi yang sama.',
        },
        {
          term: 'Antropometri',
          definition: 'Kumpulan pengukuran tubuh (berat, tinggi, lingkar kepala, BMI) yang digunakan untuk mengevaluasi pertumbuhan dan status gizi.',
        },
        {
          term: 'Parameter LMS',
          definition: 'Metode statistik (L=Box-Cox, M=median, S=koefisien variasi) yang digunakan oleh WHO untuk menyusun tabel persentil dan mengubah setiap pengukuran menjadi Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Pertanyaan umum",
  faq,
  bibliographyTitle: "Referensi",
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

import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-masa-subur';
const title = 'Kalkulator Masa Subur';
const description = 'Hitung jendela subur dan tanggal ovulasi Anda sesuai dengan siklus menstruasi Anda.';
const faq = [
  {
    question: 'Bagaimana jendela subur dihitung?',
    answer: 'Jendela subur dihitung mulai dari hari pertama menstruasi terakhir Anda. Ovulasi terjadi sekitar 14 hari sebelum dimulainya siklus berikutnya. Hari subur mencakup 5 hari sebelum ovulasi dan hari ovulasi itu sendiri.',
  },
  {
    question: 'Seberapa akurat kalkulator ini?',
    answer: 'Kalkulator ini merupakan estimasi berdasarkan model standar siklus 28 hari (atau sesuai masukan Anda). Ini hanya sebagai panduan dan mungkin tidak mencerminkan variasi individu. Untuk akurasi lebih tinggi, kombinasikan dengan pemantauan suhu basal tubuh atau tes ovulasi.',
  },
  {
    question: 'Bagaimana jika siklus saya tidak teratur?',
    answer: 'Jika siklus Anda sangat bervariasi dari satu bulan ke bulan lainnya, perhitungannya mungkin kurang akurat. Dalam hal ini, pemantauan suhu basal atau tes LH adalah metode yang lebih andal untuk mengidentifikasi ovulasi.',
  },
  {
    question: 'Berapa lama sel telur bertahan setelah ovulasi?',
    answer: 'Sel telur memiliki masa hidup 12 hingga 24 jam. Namun, sperma dapat bertahan hingga 5 hari di saluran reproduksi wanita, sehingga jendela subur yang sebenarnya mencakup beberapa hari sebelum ovulasi.',
  },
  {
    question: 'Bisakah kalkulator ini digunakan untuk mencegah kehamilan?',
    answer: 'Tidak disarankan menggunakan kalkulator ini sebagai metode kontrasepsi. Metode berbasis kalender memiliki tingkat kegagalan yang signifikan. Konsultasikan dengan dokter atau ginekolog Anda untuk metode kontrasepsi yang aman dan sesuai bagi Anda.',
  },
];
const howTo = [
  {
    name: 'Pilih hari pertama menstruasi terakhir Anda',
    text: 'Klik pada hari di kalender yang sesuai dengan dimulainya menstruasi terakhir Anda.',
  },
  {
    name: 'Sesuaikan durasi siklus Anda',
    text: 'Geser pengatur untuk menunjukkan berapa hari siklus menstruasi Anda biasanya berlangsung.',
  },
  {
    name: 'Lihat hasilnya',
    text: 'Kalkulator secara otomatis menampilkan estimasi tanggal ovulasi, jendela subur, dan awal menstruasi berikutnya.',
  },
  {
    name: 'Navigasi kalender',
    text: 'Gunakan panah navigasi untuk melihat hari-hari yang ditandai pada bulan sebelumnya atau sesudahnya.',
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
  inLanguage: 'id',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Kapan menstruasi terakhir Anda dimulai?',
    step1Desc: 'Pilih hari pertama siklus menstruasi terakhir Anda pada kalender.',
    pulseHint: 'Klik pada hari di kalender untuk melanjutkan',
    step1Indicator: 'Tanggal Mulai',
    step2Indicator: 'Kalender Anda',
    sidebarTitle: 'Siklus Anda',
    sidebarDesc: 'Personalisasikan hasil dengan menyesuaikan durasi siklus Anda.',
    labelCycleLength: 'Durasi Siklus',
    unitDays: 'hari',
    labelOvulation: 'Ovulasi Berikutnya',
    labelFertileWindow: 'Jendela Subur',
    labelNextPeriod: 'Menstruasi Berikutnya',
    legendSelection: 'Pilihan Anda',
    legendPeriod: 'Menstruasi',
    legendFertile: 'Subur',
    legendOvulation: 'Ovulasi',
    faqTitle: 'Pertanyaan umum',
    bibliographyTitle: 'Referensi',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Masa Subur: Panduan Lengkap Siklus dan Ovulasi',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 kunci tentang jendela subur',
      items: [
        'Ovulasi terjadi sekitar 14 hari sebelum dimulainya periode berikutnya.',
        'Jendela subur mencakup 5 hari sebelum ovulasi ditambah hari ovulasi itu sendiri.',
        'Sperma dapat bertahan hingga 5 hari dalam saluran reproduksi wanita.',
        'Siklus tidak teratur mengurangi keandalan perhitungan kalender.',
        'Menggabungkan alat ini dengan suhu basal atau tes LH meningkatkan akurasi.',
      ],
    },
    {
      type: 'title',
      text: 'Cara kerja perhitungan jendela subur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Metode ini didasarkan pada aturan Ogino-Knaus dan model standar ovulasi. Pada siklus 28 hari, ovulasi biasanya terjadi sekitar hari ke-14. Kalkulator mengidentifikasi titik ini dan menandai hari-hari dengan kesuburan tertinggi di sekitarnya.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 hari', label: 'Sebelum periode berikutnya' },
        { value: '5 hari', label: 'Durasi jendela subur' },
        { value: '12-24 j', label: 'Masa hidup sel telur' },
      ],
    },
    {
      type: 'title',
      text: 'Fase siklus menstruasi',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase folikuler',
          description: 'Dimulai dengan menstruasi dan berlangsung hingga ovulasi.',
          points: [
            'Folikel ovarium matang di bawah pengaruh FSH.',
            'Berlangsung antara 10 hingga 14 hari dalam siklus teratur.',
            'Kadar estrogen meningkat secara progresif.',
          ],
        },
        {
          title: 'Fase luteal',
          description: 'Dimulai setelah ovulasi dan berakhir dengan menstruasi.',
          points: [
            'Corpus luteum memproduksi progesteron untuk mempersiapkan endometrium.',
            'Berlangsung sekitar 14 hari dalam siklus normal.',
            'Jika tidak ada pembuahan, corpus luteum akan luruh.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Meskipun kalkulator menggunakan model standar, siklus menstruasi dapat bervariasi dari bulan ke bulan. Untuk akurasi lebih tinggi, gabungkan alat ini dengan pemantauan suhu basal atau tes ovulasi.',
    },
    {
      type: 'title',
      text: 'Tanda-tanda biologis ovulasi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Perubahan lendir serviks: pada hari subur menjadi bening dan elastis, mirip putih telur.',
        'Sedikit peningkatan suhu basal tubuh (0,2–0,4 °C) tepat setelah ovulasi.',
        'Nyeri atau ketidaknyamanan ringan pada sisi ovarium yang aktif (Mittelschmerz) selama ovulasi.',
        'Sedikit peningkatan libido menjelang ovulasi, dipicu oleh perubahan hormonal.',
        'Perut terasa kembung atau sensasi penuh selama hari-hari subur.',
      ],
    },
    {
      type: 'title',
      text: 'Gaya hidup dan kesuburan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Stres kronis dapat mengganggu ovulasi dan memperpanjang atau memperpendek siklus.',
        'Berat badan berpengaruh langsung: baik berat badan rendah maupun berlebih mempengaruhi ovulasi.',
        'Olahraga sedang mendukung keteraturan siklus; olahraga ekstrem dapat menekannya.',
        'Merokok mengurangi cadangan ovarium dan mempercepat menopause selama beberapa tahun.',
        'Diet kaya asam folat, zat besi, dan antioksidan mendukung kesehatan reproduksi.',
      ],
    },
    {
      type: 'title',
      text: 'Metode pemantauan siklus',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Metode', 'Keandalan', 'Biaya'],
      rows: [
        ['Kalkulator kalender', 'Sedang', 'Gratis'],
        ['Suhu basal tubuh', 'Tinggi dengan latihan', 'Rendah'],
        ['Tes LH urin', 'Tinggi', 'Sedang'],
        ['Monitor kesuburan digital', 'Sangat tinggi', 'Tinggi'],
        ['USG folikel', 'Maksimal', 'Klinis'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulasi',
          definition: 'Pelepasan sel telur yang matang dari folikel ovarium, dipicu oleh lonjakan hormon luteinizing (LH). Terjadi sekali per siklus.',
        },
        {
          term: 'Jendela subur',
          definition: 'Periode dengan probabilitas pembuahan tertinggi, yang mencakup 5 hari sebelum ovulasi ditambah hari ovulasi.',
        },
        {
          term: 'Lendir serviks',
          definition: 'Sekresi dari leher rahim yang teksturnya bervariasi sepanjang siklus. Pada hari subur menjadi bening dan elastis, memudahkan jalannya sperma.',
        },
        {
          term: 'Suhu basal tubuh',
          definition: 'Suhu tubuh saat istirahat total, diukur saat bangun tidur sebelum aktivitas apa pun. Meningkat sedikit (0,2–0,4 °C) setelah ovulasi karena efek progesteron.',
        },
      ],
    },
  ],
  faqTitle: "Pertanyaan umum",
  faq,
  bibliographyTitle: "Referensi",
  bibliography: [
    {
      name: 'WHO - Keluarga berencana',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Indonesian Society of Obstetrics and Gynecology',
      url: 'https://pogiorid.org',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

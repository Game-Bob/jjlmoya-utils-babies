import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Kalkulator Kenaikan Berat Badan Saat Hamil';
const description = 'Perkirakan kisaran kenaikan berat badan yang sehat selama kehamilan per minggu gestasi menggunakan panduan kenaikan berat badan prenatal IOM dan ACOG.';

const faq = [
  {
    question: 'Berapa kenaikan berat badan yang seharusnya selama kehamilan?',
    answer: 'Kenaikan total yang dianjurkan tergantung pada IMT sebelum hamil. Panduan IOM berkisar antara 12,5 hingga 18 kg (28-40 lb) untuk berat badan kurang, 11,5 hingga 16 kg (25-35 lb) untuk IMT normal, 7 hingga 11,5 kg (15-25 lb) untuk kelebihan berat badan, dan 5 hingga 9 kg (11-20 lb) untuk obesitas pada kehamilan tunggal. Selalu diskusikan target pribadi Anda dengan tenaga kesehatan prenatal.',
  },
  {
    question: 'Apakah kehamilan kembar menggunakan kisaran kenaikan berat yang sama?',
    answer: 'Tidak. Kehamilan kembar memiliki target lebih tinggi di semua kategori IMT. Untuk IMT normal, kisaran yang dianjurkan adalah 17-25 kg (37-54 lb). Untuk kelebihan berat badan 14-23 kg (31-50 lb) dan untuk obesitas 11-19 kg (25-42 lb). Tidak ada kisaran IOM yang ditetapkan untuk wanita dengan berat badan kurang pada kehamilan kembar, sehingga tim klinis akan menyesuaikan perawatan secara individual.',
  },
  {
    question: 'Mengapa kurva berubah setelah trimester pertama?',
    answer: 'Panduan IOM memperkirakan kenaikan yang sangat moderat pada trimester pertama - sekitar 0,5 hingga 2 kg - karena janin, plasenta, dan cairan ketuban masih memiliki massa yang sangat kecil. Mulai trimester kedua, kenaikan mingguan yang lebih stabil dimulai antara 0,17 hingga 0,58 kg (tergantung IMT).',
  },
  {
    question: 'Berat badan saya turun di trimester pertama karena mual. Haruskah saya khawatir?',
    answer: 'Penurunan berat badan ringan di trimester pertama cukup umum karena mual dan aversi makanan. Selama Anda tetap terhidrasi dan tidak kehilangan lebih dari beberapa kilogram, biasanya tidak perlu dikhawatirkan. Jika muntah parah, terus-menerus, atau menyebabkan dehidrasi, hubungi tenaga kesehatan Anda - ini bisa jadi hiperemesis gravidarum yang memerlukan penanganan.',
  },
  {
    question: 'Berapa laju kenaikan berat badan ideal per minggu?',
    answer: 'Setelah minggu ke-13, target mingguan adalah: 0,44-0,58 kg untuk berat badan kurang, 0,35-0,50 kg untuk IMT normal, 0,23-0,33 kg untuk kelebihan berat badan, dan 0,17-0,27 kg untuk obesitas. Ini adalah rata-rata - kenaikan aktual berfluktuasi dari minggu ke minggu karena retensi cairan, waktu makan, dan faktor lainnya.',
  },
  {
    question: 'Apakah aman berolahraga untuk mengontrol kenaikan berat badan selama kehamilan?',
    answer: 'Ya, untuk sebagian besar wanita dengan kehamilan tanpa komplikasi. ACOG merekomendasikan setidaknya 150 menit per minggu aktivitas aerobik intensitas sedang. Olahraga teratur mendukung kenaikan berat badan yang sehat, mengurangi risiko diabetes gestasional, serta memperbaiki suasana hati dan tidur. Selalu diskusikan rencana olahraga spesifik Anda dengan tim kesehatan, terutama jika ada komplikasi kehamilan.',
  },
  {
    question: 'Seberapa cepat berat badan kehamilan turun setelah melahirkan?',
    answer: 'Sebagian besar wanita kehilangan sekitar 4,5-5,5 kg segera setelah melahirkan (bayi, plasenta, dan cairan ketuban). Pada minggu pertama, terjadi kehilangan cairan tambahan. Kembali ke berat badan sebelum hamil biasanya membutuhkan waktu 6 hingga 12 bulan dengan pola makan sehat dan aktivitas fisik bertahap. Menyusui dapat membantu karena membakar sekitar 300-500 kkal ekstra per hari.',
  },
  {
    question: 'Bisakah kalkulator ini mendiagnosis masalah kehamilan?',
    answer: 'Tidak. Ini hanya perkiraan edukatif berdasarkan panduan populasi. Kalkulator ini tidak dapat menilai pertumbuhan janin, fungsi plasenta, tekanan darah, gula darah, atau gejala medis apa pun. Perubahan berat badan mendadak, pembengkakan, muntah terus-menerus, atau kekhawatiran apa pun sebaiknya selalu didiskusikan dengan dokter kandungan, bidan, atau klinisi prenatal yang berkualifikasi.',
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

const howTo = [
  {
    name: 'Masukkan ukuran sebelum hamil',
    text: 'Tambahkan tinggi badan dan berat badan sebelum hamil agar alat dapat memperkirakan IMT sebelum hamil.',
  },
  {
    name: 'Tambahkan detail kehamilan saat ini',
    text: 'Masukkan berat badan saat ini, minggu gestasi, dan apakah kehamilan tunggal atau kembar.',
  },
  {
    name: 'Tinjau kurva',
    text: 'Bandingkan kenaikan saat ini dengan pita kenaikan sehat yang diperkirakan untuk minggu yang dipilih.',
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
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'IDR',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'kalkulator-kenaikan-berat-badan-hamil',
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Daftar Pustaka',
  seo: [
    {
      type: 'summary',
      title: 'Fakta Penting tentang Kenaikan Berat Badan Selama Kehamilan',
      items: [
        'Kenaikan berat badan total yang dianjurkan sepenuhnya bergantung pada IMT sebelum hamil, bukan angka yang berlaku untuk semua.',
        'Panduan IOM memberikan kisaran dari 11 hingga 20 lb untuk obesitas hingga 28-40 lb untuk berat badan kurang pada kehamilan tunggal.',
        'Kenaikan berat badan tidak linear: trimester pertama hanya diharapkan 0,5-2 kg total, setelah itu laju mingguan yang lebih stabil dimulai.',
        'Kehamilan kembar memiliki target lebih tinggi di semua kategori IMT.',
        'Kalkulator ini adalah alat edukatif - selalu diskusikan target pribadi Anda dengan tim kesehatan prenatal.',
      ],
    },
    {
      type: 'title',
      text: 'Kalkulator Kenaikan Berat Badan Saat Hamil: Pahami Kurva Pertumbuhan Prenatal Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menambah berat badan dalam jumlah yang tepat selama kehamilan adalah salah satu faktor terpenting bagi kesehatan ibu dan perkembangan janin. Kenaikan berat badan yang tidak mencukupi meningkatkan risiko kelahiran prematur, berat lahir rendah, dan hambatan pertumbuhan intrauterin. Kenaikan berlebihan dikaitkan dengan diabetes gestasional, persalinan sesar, retensi berat badan pascapersalinan, dan makrosomia. Kalkulator ini menggunakan panduan yang ditetapkan oleh <strong>IOM (Institute of Medicine)</strong> dan <strong>ACOG (American College of Obstetricians and Gynecologists)</strong> untuk memplot kurva kenaikan minggu demi minggu yang dipersonalisasi.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 minggu', label: 'Durasi kehamilan cukup bulan' },
        { value: '4 kategori', label: 'Kisaran kenaikan berbasis IMT menurut IOM' },
        { value: '±0,5 kg/mg', label: 'Laju tipikal di trimester kedua' },
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Kalkulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Anda memasukkan tinggi badan dan berat badan sebelum hamil agar alat dapat menghitung IMT sebelum hamil.',
        'IMT Anda diklasifikasikan ke dalam salah satu dari empat kategori IOM: berat badan kurang, normal, kelebihan berat badan, atau obesitas.',
        'Setiap kategori sesuai dengan kisaran kenaikan total yang dianjurkan dan laju mingguan untuk trimester kedua dan ketiga.',
        'Kalkulator juga menerima berat badan saat ini dan minggu gestasi untuk menentukan posisi Anda relatif terhadap pita estimasi.',
        'Kehamilan tunggal dan kembar menggunakan target kenaikan yang berbeda karena kebutuhan janin dan plasenta berbeda secara signifikan.',
      ],
    },
    {
      type: 'title',
      text: 'Rekomendasi IOM untuk Kenaikan Berat Badan Berdasarkan IMT Sebelum Hamil',
      level: 3,
    },
    {
      type: 'table',
      headers: ['IMT sebelum hamil', 'Kategori', 'Kenaikan total tunggal', 'Kenaikan total kembar', 'Laju mingguan (mg. 14-40)'],
      rows: [
        ['< 18,5', 'Berat badan kurang', '12,5-18 kg / 28-40 lb', 'Tidak ada kisaran IOM', '0,44-0,58 kg'],
        ['18,5-24,9', 'Berat badan normal', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Kelebihan berat badan', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesitas', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Penting:</strong> Ini adalah kisaran skrining pada tingkat populasi. Tenaga kesehatan Anda dapat menetapkan target yang dipersonalisasi berdasarkan riwayat gizi, kehamilan sebelumnya, ultrasonografi pertumbuhan janin, atau kondisi medis. Selalu ikuti panduan individual dari klinisi Anda.',
    },
    {
      type: 'title',
      text: 'Kenaikan Berat Badan per Trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Trimester pertama (minggu 1 to 13)',
          description: 'Kenaikan yang moderat diharapkan. Banyak wanita hanya naik sangat sedikit atau bahkan turun karena mual.',
          points: [
            'Target IOM: sekitar 0,5 hingga 2 kg (1 hingga 4,4 lb) total',
            'Mual dan aversi makanan umum terjadi dan dapat membatasi asupan',
            'Embrio dan plasenta masih memiliki massa yang sangat kecil pada tahap ini',
            'Fokus pada kualitas gizi daripada kuantitas',
          ],
        },
        {
          title: 'Trimester kedua (minggu 14 to 26)',
          description: 'Periode kenaikan mingguan paling stabil. Nafsu makan biasanya membaik setelah mual mereda.',
          points: [
            'Laju mingguan: sekitar 0,23 hingga 0,58 kg tergantung kategori IMT',
            'Janin tumbuh cepat dalam panjang dan perkembangan organ',
            'Volume plasma meningkat, berkontribusi pada berat badan',
            'Kebutuhan zat besi dan kalsium meningkat secara signifikan',
          ],
        },
        {
          title: 'Trimester ketiga (minggu 27 to 40)',
          description: 'Kenaikan berat badan berlanjut dengan laju serupa trimester kedua dan mungkin melambat menjelang akhir.',
          points: [
            'Penyimpanan lemak janin meningkat signifikan mulai minggu ke-28',
            'Volume cairan ketuban mencapai puncak sekitar minggu 34-36',
            'Pembengkakan dan retensi cairan dapat menaikkan pengukuran sementara',
            'Beberapa wanita hanya naik sedikit dalam 1-2 minggu terakhir sebelum persalinan',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ke Mana Sebenarnya Berat Badan Tersebut Pergi?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Komponen', 'Perkiraan berat saat cukup bulan'],
      rows: [
        ['Bayi', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Plasenta', '0,7 kg / 1,5 lb'],
        ['Cairan ketuban', '0,8 kg / 1,8 lb'],
        ['Rahim (pertumbuhan)', '0,9 kg / 2 lb'],
        ['Jaringan payudara', '0,5 kg / 1,1 lb'],
        ['Peningkatan volume darah', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Cairan ekstraseluler', '1,5 kg / 3,3 lb'],
        ['Cadangan lemak dan protein ibu', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Seperti yang ditunjukkan oleh rincian ini, sebagian besar berat badan yang diperoleh dalam kehamilan sehat adalah jaringan fungsional - cairan, darah, janin, plasenta, dan rahim - bukan sekadar lemak. Wawasan ini membantu memahami mengapa kenaikan berat badan yang cukup juga diperlukan bagi wanita yang sudah kelebihan berat badan sebelum hamil.',
    },
    {
      type: 'title',
      text: 'Tips Gizi untuk Kenaikan Berat Badan yang Sehat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tambahkan sekitar 340 kkal per hari di trimester kedua dan 450 kkal per hari di trimester ketiga di atas kebutuhan sebelum hamil.',
        'Prioritaskan protein: targetkan setidaknya 70-80 g per hari untuk mendukung pertumbuhan jaringan janin dan ekspansi volume darah ibu.',
        'Konsumsi makanan kaya zat besi (daging tanpa lemak, kacang lentil, sereal yang difortifikasi) untuk mencegah anemia yang lebih umum terjadi selama kehamilan.',
        'Kebutuhan kalsium meningkat menjadi 1.000 mg per hari - produk susu, susu nabati yang difortifikasi, kacang almond, dan sayuran hijau adalah sumber yang baik.',
        'Asam lemak omega-3 dari ikan berlemak (2 porsi per minggu) atau suplemen alga mendukung perkembangan otak janin.',
        'Folat (400-600 mcg per hari) menurunkan risiko defek tabung saraf, terutama di trimester pertama.',
        'Jaga hidrasi yang baik - targetkan sekitar 2-3 liter cairan per hari, lebih banyak saat cuaca panas atau berolahraga.',
        'Batasi makanan yang sangat diproses, gula tambahan, dan lemak trans yang berkontribusi pada kenaikan berat badan berlebihan.',
      ],
    },
    {
      type: 'title',
      text: 'Aktivitas Fisik dan Manajemen Berat Badan Selama Kehamilan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG merekomendasikan setidaknya <strong>150 menit per minggu</strong> aktivitas aerobik intensitas sedang untuk wanita dengan kehamilan tanpa komplikasi. Olahraga teratur mendukung kenaikan berat badan yang sehat, mengurangi risiko diabetes gestasional dan preeklamsia, memperbaiki tidur, serta meredakan nyeri punggung. Jalan kaki, berenang, yoga prenatal, dan sepeda statis dapat ditoleransi dengan baik sepanjang kehamilan. Selalu diskusikan rencana olahraga Anda dengan tenaga kesehatan sebelum memulai atau melanjutkan aktivitas intensif.',
    },
    {
      type: 'title',
      text: 'Tanda Peringatan Terkait Perubahan Berat Badan dalam Kehamilan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kenaikan berat badan mendadak lebih dari 1 kg dalam satu minggu, terutama setelah minggu ke-20, dapat mengindikasikan retensi cairan terkait preeklamsia.',
        'Pembengkakan cepat pada tangan, wajah, atau pergelangan kaki disertai sakit kepala atau perubahan penglihatan memerlukan perhatian medis segera.',
        'Penurunan berat badan terus-menerus setelah trimester pertama, atau ketidakmampuan menahan makanan atau cairan, dapat mengindikasikan hiperemesis gravidarum.',
        'Kenaikan berat badan yang sangat lambat atau stagnan meskipun asupan cukup mungkin memerlukan ultrasonografi pertumbuhan janin untuk menilai hambatan pertumbuhan intrauterin.',
        'Setiap perubahan berat badan yang tidak dapat dijelaskan harus didiskusikan dengan dokter kandungan atau bidan, bukan dikelola sendiri.',
      ],
    },
    {
      type: 'title',
      text: 'Kehamilan Tunggal vs. Kembar: Perbedaan Utama',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kehamilan tunggal',
          description: 'Satu janin, satu plasenta. Skenario paling umum dengan target IOM yang mapan.',
          points: [
            'Kenaikan total: 5 hingga 18 kg tergantung IMT sebelum hamil',
            'Laju mingguan stabil dari 0,17 hingga 0,58 kg mulai minggu ke-14',
            'Kebutuhan surplus kalori lebih rendah (340-450 kkal/hari)',
            'Angka kelahiran prematur: sekitar 10%',
          ],
        },
        {
          title: 'Kehamilan kembar',
          description: 'Dua janin, umumnya kebutuhan lebih tinggi di semua aspek. Target lebih tinggi di semua kategori IMT.',
          points: [
            'Kenaikan total: 11 hingga 25 kg tergantung IMT sebelum hamil',
            'Laju mingguan lebih tinggi, terutama di trimester kedua',
            'Kebutuhan kalori dan protein lebih besar',
            'Tim klinis menyesuaikan target secara lebih individual',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kesalahpahaman Umum tentang Kenaikan Berat Badan Prenatal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kenaikan berat badan tidak sama dengan kenaikan lemak. Sebagian besar berat yang bertambah adalah darah, cairan, plasenta, dan bayi - bukan lemak yang disimpan.',
        'Makan untuk dua orang bukan berarti menggandakan asupan. Kebutuhan kalori tambahan di trimester kedua kira-kira setara dengan segelas susu dan satu pisang.',
        'Berada di atas kisaran yang dianjurkan tidak otomatis berarti Anda atau bayi berisiko - kisaran adalah panduan statistik, bukan ambang mutlak.',
        'Wanita dengan obesitas tetap perlu menambah berat badan selama kehamilan. IOM tetap merekomendasikan kenaikan bersih 5 hingga 9 kg.',
        'Timbangan bukanlah ukuran terpenting dari kehamilan yang sehat - pertumbuhan janin, tekanan darah, gula darah, dan penilaian klinis lebih penting.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IMT (Indeks Massa Tubuh)',
          definition: 'Rasio berat badan terhadap tinggi badan kuadrat yang digunakan untuk mengklasifikasikan kategori berat badan. Dalam perawatan prenatal, IMT sebelum hamil menentukan kisaran kenaikan berat badan yang tepat.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Sekarang bernama National Academy of Medicine. Menerbitkan panduan penting untuk kenaikan berat badan selama kehamilan pada tahun 2009 yang digunakan oleh klinisi di seluruh dunia.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Organisasi profesional terkemuka di AS untuk perawatan obstetri dan ginekologi. Mendukung panduan kenaikan berat badan IOM dan memberikan panduan klinis tambahan.',
        },
        {
          term: 'Usia gestasi',
          definition: 'Usia kehamilan yang diukur dalam minggu sejak hari pertama menstruasi terakhir. Kehamilan cukup bulan biasanya 39 hingga 40 minggu.',
        },
        {
          term: 'Makrosomia',
          definition: 'Kondisi di mana bayi tumbuh lebih besar dari yang diharapkan, biasanya didefinisikan sebagai berat lahir di atas 4 kg. Terkait dengan kenaikan berat badan berlebihan dan diabetes gestasional.',
        },
        {
          term: 'Hambatan Pertumbuhan Intrauterin (IUGR)',
          definition: 'Kondisi di mana janin tumbuh lebih lambat dari yang diharapkan. Dapat terkait dengan kenaikan berat badan yang tidak mencukupi, masalah plasenta, atau faktor kesehatan ibu lainnya.',
        },
        {
          term: 'Preeklamsia',
          definition: 'Komplikasi kehamilan yang ditandai dengan tekanan darah tinggi dan tanda-tanda kerusakan pada sistem organ lain. Kenaikan berat badan mendadak yang cepat akibat retensi cairan adalah tanda peringatan yang mungkin.',
        },
        {
          term: 'Hiperemesis gravidarum',
          definition: 'Mual dan muntah parah dan terus-menerus selama kehamilan, melebihi morning sickness biasa, yang dapat menyebabkan penurunan berat badan dan dehidrasi serta memerlukan penanganan medis.',
        },
      ],
    },
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    educationalWarningTitle: 'Peringatan edukatif',
    educationalWarningBody: 'Kalkulator ini hanya untuk edukasi prenatal. Alat ini tidak mendiagnosis kesehatan ibu atau janin, tidak menggantikan saran medis individual, dan tidak memperhitungkan gejala, retensi cairan, risiko diabetes, pertumbuhan janin, riwayat gizi, atau target yang ditentukan oleh klinisi.',
    inputsTitle: 'Profil kehamilan',
    unitsLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Tinggi (cm)',
    heightFtLabel: 'Tinggi (ft)',
    heightInLabel: 'Tinggi (in)',
    preWeightKgLabel: 'Berat sebelum hamil (kg)',
    currentWeightKgLabel: 'Berat saat ini (kg)',
    preWeightLbLabel: 'Berat sebelum hamil (lb)',
    currentWeightLbLabel: 'Berat saat ini (lb)',
    weekLabel: 'Minggu gestasi',
    pregnancyTypeLabel: 'Jenis kehamilan',
    singletonLabel: 'Tunggal',
    twinsLabel: 'Kembar',
    bmiCardTitle: 'IMT sebelum hamil',
    recommendationTitle: 'Kenaikan yang dianjurkan',
    currentGainTitle: 'Kenaikan saat ini',
    chartTitle: 'Kurva kenaikan berat badan prenatal',
    weekShortLabel: 'mg',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Kisaran total',
    weeklyRangeLabel: 'Laju mingguan setelah minggu ke-13',
    firstTrimesterLabel: 'Trimester pertama: sekitar 0,5 hingga 2 kg kenaikan total',
    statusBelow: 'Di bawah pita estimasi',
    statusWithin: 'Dalam pita estimasi',
    statusAbove: 'Di atas pita estimasi',
    statusBelowBody: 'Kenaikan Anda saat ini berada di bawah pita estimasi untuk minggu ini. Tanyakan kepada klinisi prenatal Anda apakah nutrisi, mual, pertumbuhan janin, atau penanggalan perlu ditinjau ulang.',
    statusWithinBody: 'Kenaikan Anda saat ini berada dalam pita estimasi untuk minggu ini. Lanjutkan mengikuti rencana prenatal individual Anda.',
    statusAboveBody: 'Kenaikan Anda saat ini berada di atas pita estimasi untuk minggu ini. Tinjau tren dengan klinisi Anda, terutama jika kenaikan mendadak atau disertai pembengkakan atau gejala.',
    categoryUnderweight: 'Berat badan kurang',
    categoryNormal: 'IMT normal',
    categoryOverweight: 'Kelebihan berat badan',
    categoryObesity: 'Obesitas',
    totalGainSuffix: 'kenaikan total',
    perWeekSuffix: 'per minggu',
    chartLowLabel: 'Pita bawah',
    chartHighLabel: 'Pita atas',
    chartCurrentLabel: 'Saat ini',
  },
};

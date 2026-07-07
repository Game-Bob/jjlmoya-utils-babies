import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Penghitung Kontraksi Persalinan';
export const description = 'Lacak durasi dan frekuensi kontraksi dengan tombol sentuh besar, panduan pernapasan, riwayat, dan peringatan pola 5-1-1.';

export const faq = [
  {
    question: 'Apa itu aturan 5-1-1 untuk kontraksi?',
    answer: 'Aturan 5-1-1 biasanya berarti kontraksi berjarak sekitar 5 menit, berlangsung sekitar 1 menit, dan terus berlanjut selama sekitar 1 jam. Banyak tim persalinan menggunakannya sebagai sinyal praktis untuk menelepon dan meminta panduan, tetapi rencana Anda sendiri mungkin berbeda.',
  },
  {
    question: 'Kapan saya harus menghubungi bidan atau rumah sakit?',
    answer: 'Hubungi tim persalinan Anda saat kontraksi menjadi teratur, intens, atau sesuai dengan petunjuk waktu yang diberikan kepada Anda. Segera hubungi jika terjadi perdarahan berat, gerakan janin berkurang, demam, nyeri hebat, ketuban pecah dengan kekhawatiran, atau jika Anda merasa ada yang tidak beres.',
  },
  {
    question: 'Apakah penghitung ini mendiagnosis persalinan aktif?',
    answer: 'Tidak. Alat ini mencatat waktu dan menyoroti pola kontraksi yang umum. Perubahan serviks, posisi janin, status selaput ketuban, gejala, dan riwayat klinis Anda memerlukan penilaian oleh tenaga medis yang berkualifikasi.',
  },
  {
    question: 'Bagaimana frekuensi kontraksi dihitung?',
    answer: 'Frekuensi dihitung dari awal satu kontraksi hingga awal kontraksi sebelumnya. Durasi dihitung dari saat Anda menekan mulai hingga saat Anda menekan berhenti.',
  },
  {
    question: 'Bisakah saya menggunakannya selama persalinan prodromal?',
    answer: 'Ya. Ini dapat membantu Anda melihat apakah kontraksi menjadi lebih teratur atau mereda. Jika kontraksi tetap tidak teratur, berubah dengan istirahat atau hidrasi, atau tidak meningkat intensitasnya, mungkin masih prodromal, tetapi tim perawatan Anda dapat membimbing Anda.',
  },
  {
    question: 'Mengapa pernapasan terpandu disertakan?',
    answer: 'Pernapasan yang lambat dan stabil dapat membantu mengurangi ketegangan, memfokuskan perhatian, dan mendukung penanganan selama setiap kontraksi. Animasi ini hanyalah alat bantu kenyamanan dan tidak menggantikan dukungan persalinan.',
  },
  {
    question: 'Haruskah saya menunggu 5-1-1 jika ini bukan bayi pertama saya?',
    answer: 'Tidak selalu. Persalinan dapat berlangsung lebih cepat setelah persalinan pervaginam sebelumnya. Ikuti rencana dari bidan atau dokter kandungan Anda, terutama jika Anda memiliki kehamilan berisiko tinggi, tinggal jauh dari rumah sakit, atau memiliki riwayat persalinan cepat sebelumnya.',
  },
  {
    question: 'Apakah riwayat kontraksi saya disimpan?',
    answer: 'Penghitung menyimpan catatan terbaru di peramban Anda sehingga Anda dapat menyegarkan halaman tanpa kehilangan sesi. Gunakan tombol reset untuk menghapus riwayat lokal.',
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
    name: 'Mulai penghitungan',
    text: 'Tekan tombol utama saat kontraksi dimulai.',
  },
  {
    name: 'Gunakan panduan pernapasan',
    text: 'Ikuti lingkaran yang mengembang dan menyusut saat kontraksi aktif.',
  },
  {
    name: 'Hentikan penghitungan',
    text: 'Tekan tombol lagi saat kontraksi berakhir agar durasi dan interval tercatat.',
  },
  {
    name: 'Tinjau polanya',
    text: 'Periksa riwayat dan panel peringatan untuk memutuskan apakah perlu menghubungi tim persalinan Anda.',
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
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<LaborContractionTimerUI> = {
  title,
  description,
  slug: 'penghitung-kontraksi-persalinan',
  faqTitle: 'Pertanyaan Umum',
  bibliographyTitle: 'Daftar Pustaka',
  seo: [
    {
      type: 'summary',
      title: 'Fakta penting tentang pencatatan waktu kontraksi',
      items: [
        'Durasi diukur dari awal kontraksi hingga akhirnya.',
        'Frekuensi diukur dari awal satu kontraksi hingga awal kontraksi berikutnya.',
        'Pola 5-1-1 berarti sekitar 5 menit jarak, berlangsung 1 menit, selama 1 jam.',
        'Pencatatan waktu kontraksi mendukung pengambilan keputusan tetapi tidak dapat mengonfirmasi pembukaan serviks atau persalinan aktif dengan sendirinya.',
        'Selalu ikuti petunjuk dari bidan, dokter kandungan, atau unit persalinan Anda sendiri.',
      ],
    },
    {
      type: 'title',
      text: 'Penghitung Kontraksi Persalinan: Lacak Durasi, Frekuensi, dan Pola 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Penghitung kontraksi membantu keluarga mengubah momen yang menegangkan dan sulit dinilai menjadi catatan yang jelas. Selama akhir kehamilan, wajar jika bertanya-tanya apakah kontraksi masih merupakan kontraksi latihan yang tidak teratur, persalinan prodromal, persalinan awal, atau pola yang pantas untuk menelepon unit persalinan. Dengan menekan mulai saat kontraksi dimulai dan berhenti saat berakhir, alat ini menghitung <strong>durasi</strong> dalam detik dan <strong>frekuensi</strong> dalam menit dari awal satu kontraksi ke awal kontraksi berikutnya.',
    },
    {
      type: 'paragraph',
      html: 'Tujuannya bukan untuk mendiagnosis persalinan. Tujuannya adalah membantu Anda menggambarkan apa yang terjadi dalam istilah yang konkret: berapa lama setiap kontraksi berlangsung, seberapa dekat jaraknya, apakah polanya semakin kuat, dan apakah sudah cukup konsisten untuk sesuai dengan panduan umum seperti aturan 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 mnt', label: 'Sinyal frekuensi umum' },
        { value: '60 dtk', label: 'Durasi khas 5-1-1' },
        { value: '1 jam', label: 'Jendela stabilitas pola' },
      ],
    },
    {
      type: 'title',
      text: 'Cara menafsirkan peringatan 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aturan 5-1-1 adalah pedoman praktis yang banyak digunakan: kontraksi berjarak sekitar 5 menit, berlangsung sekitar 1 menit, dan terus berlanjut selama sekitar 1 jam. Banyak tim persalinan menggunakan pola itu sebagai sinyal praktis untuk menelepon dan meminta saran individual, terutama untuk persalinan pertama. Penghitung ini menyoroti pola tersebut saat kontraksi terbaru berjarak 5 menit atau kurang, berlangsung setidaknya 60 detik, dan telah bertahan sepanjang sesi.',
    },
    {
      type: 'table',
      headers: ['Pola yang terlihat', 'Apa yang mungkin disarankan', 'Langkah selanjutnya yang berguna'],
      rows: [
        ['Waktu tidak teratur, durasi bervariasi', 'Kemungkinan persalinan prodromal atau persalinan awal', 'Istirahat, minum, ubah posisi, dan terus amati kecuali Anda memiliki gejala peringatan'],
        ['Semakin dekat tetapi masih di bawah 60 detik', 'Persalinan mungkin sedang membangun tetapi belum sesuai 5-1-1', 'Lanjutkan pencatatan dan ikuti petunjuk rencana persalinan Anda sendiri'],
        ['Sekitar 5 mnt jarak, 60 dtk durasi, selama sekitar 1 jam', 'Pola panggilan 5-1-1 yang umum', 'Hubungi bidan, dokter kandungan, atau unit persalinan Anda untuk panduan yang dipersonalisasi'],
        ['Kontraksi intens tiba-tiba, tekanan, atau dorongan untuk mengejan', 'Persalinan mungkin berlangsung cepat', 'Segera hubungi, terutama jika ini bukan bayi pertama Anda'],
      ],
    },
    {
      type: 'title',
      text: 'Cara mencatat waktu kontraksi dengan benar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tekan mulai di awal sensasi mengencang, kram, atau seperti gelombang.',
        'Tekan berhenti saat kontraksi jelas mereda dan Anda bisa rileks kembali.',
        'Jangan mengukur frekuensi dari akhir satu kontraksi ke awal kontraksi berikutnya. Secara klinis, frekuensi biasanya dihitung dari awal ke awal.',
        'Catat beberapa kontraksi sebelum menafsirkan polanya, karena satu kontraksi yang terisolasi bisa menyesatkan.',
        'Gunakan catatan dari tim persalinan Anda terlebih dahulu jika mereka memberi Anda ambang batas yang berbeda dari 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Persalinan prodromal vs pola persalinan aktif',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Seringkali prodromal atau persalinan awal',
          description: 'Kontraksi mungkin terasa tidak nyaman dan nyata, tetapi polanya mungkin belum bergerak mantap menuju kelahiran.',
          points: [
            'Interval melompat-lompat bukannya menyempit secara konsisten',
            'Kontraksi dapat mereda dengan istirahat, minum, mandi, atau perubahan posisi',
            'Intensitas mungkin tetap sama bukannya meningkat seiring waktu',
            'Serviks mungkin berubah perlahan atau belum banyak, yang hanya dapat dinilai oleh tenaga medis',
          ],
        },
        {
          title: 'Lebih menunjukkan persalinan aktif',
          description: 'Polanya menjadi lebih teratur, lebih sulit diajak bicara, dan semakin kuat.',
          points: [
            'Kontraksi semakin dekat satu sama lain dalam beberapa catatan',
            'Setiap kontraksi berlangsung sekitar 45 hingga 70 detik atau lebih',
            'Anda perlu berhenti sejenak, bernapas, atau fokus selama puncaknya',
            'Pola berlanjut bahkan setelah istirahat, minum, atau perubahan posisi',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kapan tidak perlu menunggu penghitung',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Catatan keamanan:</strong> Jangan menunggu peringatan penghitung jika Anda mengalami perdarahan berat, gerakan janin berkurang, sakit kepala parah, demam, cairan hijau atau berbau tidak sedap, nyeri konstan yang intens, gejala preeklamsia, atau kekhawatiran mendesak apa pun. Hubungi tim persalinan atau layanan darurat Anda sesuai petunjuk setempat.',
    },
    {
      type: 'title',
      text: 'Apa yang ditunjukkan riwayat',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Waktu mulai: waktu jam saat kontraksi dimulai.',
        'Durasi: waktu selesai dikurangi waktu mulai, dibulatkan ke detik.',
        'Interval: waktu mulai saat ini dikurangi waktu mulai kontraksi sebelumnya, ditampilkan dalam menit.',
        'Tren terkini: apakah kontraksi semakin menjauh, tetap tidak teratur, atau menjadi lebih teratur.',
      ],
    },
    {
      type: 'title',
      text: 'Kesalahan umum dalam pencatatan waktu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Menghentikan penghitung di puncak alih-alih saat kontraksi benar-benar mereda.',
        'Mulai terlambat karena kontraksi ringan di awal, membuat durasi tampak lebih pendek.',
        'Hanya menghitung kontraksi terkuat dan mengabaikan yang lebih kecil di antaranya.',
        'Mengasumsikan 5-1-1 selalu berarti masuk rumah sakit segera. Biasanya berarti menelepon untuk meminta panduan, bukan mendiagnosis sendiri persalinan aktif.',
        'Menunggu terlalu lama pada persalinan kedua atau selanjutnya, di mana perkembangan bisa lebih cepat daripada kelahiran pertama.',
      ],
    },
    {
      type: 'title',
      text: 'Batasan klinis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pencatatan waktu kontraksi hanyalah satu bagian dari penilaian persalinan. Pembukaan serviks, kesejahteraan janin, penanganan nyeri, pecahnya selaput ketuban, usia kehamilan, riwayat persalinan sebelumnya, status streptokokus Grup B, jarak ke rumah sakit, faktor risiko kehamilan, dan gejala ibu semuanya dapat mengubah rekomendasi tim Anda. Gunakan riwayat sebagai catatan yang jelas untuk dibagikan dengan bidan, dokter kandungan, doula, atau perawat triase Anda.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Durasi',
          definition: 'Panjang satu kontraksi, diukur dari saat dimulai hingga berakhir.',
        },
        {
          term: 'Frekuensi',
          definition: 'Waktu dari awal satu kontraksi hingga awal kontraksi berikutnya.',
        },
        {
          term: 'Aturan 5-1-1',
          definition: 'Pola waktu persalinan yang umum: kontraksi sekitar setiap 5 menit, berlangsung sekitar 1 menit, berlanjut selama sekitar 1 jam.',
        },
        {
          term: 'Persalinan prodromal',
          definition: 'Periode kontraksi nyata yang mungkin tidak nyaman dan berulang tetapi tidak selalu berkembang mantap menjadi persalinan aktif.',
        },
        {
          term: 'Persalinan aktif',
          definition: 'Fase persalinan dengan kontraksi yang lebih kuat dan teratur serta perubahan serviks, dikonfirmasi oleh penilaian klinis.',
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
    safetyTitle: 'Gunakan dengan rencana persalinan Anda',
    safetyBody: 'Penghitung ini untuk pencatatan dan edukasi. Hubungi bidan, dokter kandungan, atau unit persalinan Anda jika Anda ragu, gejala mengkhawatirkan, atau Anda diberi instruksi yang berbeda.',
    idleStatus: 'Siap mencatat kontraksi berikutnya',
    activeStatus: 'Kontraksi sedang berlangsung',
    accidentalTapStatus: 'Terlalu singkat',
    shortRecordLabel: 'Ketukan singkat atau uji coba',
    activeRowLabel: 'Aktif sekarang',
    startButton: 'Mulai Kontraksi',
    stopButton: 'Hentikan Kontraksi',
    activeLabel: 'Kontraksi aktif',
    breathingLabel: 'Bernapaslah perlahan',
    breatheIn: 'Tarik napas',
    breatheOut: 'Buang napas',
    currentDurationLabel: 'Durasi saat ini',
    lastIntervalLabel: 'Interval terakhir',
    contractionCountLabel: 'Tercatat',
    patternStatusTitle: 'Status pola',
    patternStatusIdle: 'Siap mencatat',
    patternStatusTracking: 'Lanjutkan mencatat',
    patternStatusBuilding: 'Pola sedang terbentuk',
    patternStatusCall: 'Hubungi tim persalinan Anda',
    patternStatusActiveBody: 'Anda sudah mulai mencatat. Perlu beberapa kontraksi lagi sebelum polanya bermakna.',
    patternStatusBuildingBody: 'Kontraksi terbaru semakin dekat atau berlangsung lebih lama. Lanjutkan mencatat dan bersiaplah untuk menelepon jika berlanjut.',
    patternStatusCallBody: 'Kontraksi terbaru mendekati pola 5-1-1. Hubungi bidan, dokter kandungan, atau unit persalinan Anda sekarang untuk panduan yang dipersonalisasi.',
    averageLastThreeLabel: 'Rata-rata 3 terakhir',
    averageLastSixLabel: 'Rata-rata 6 terakhir',
    regularityLabel: 'Keteraturan',
    regularityNotEnough: 'Data tidak cukup',
    regularityIrregular: 'Tidak teratur',
    regularityVariable: 'Bervariasi',
    regularityRegular: 'Teratur',
    summaryTitle: 'Ringkasan telepon',
    summaryEmpty: 'Catat setidaknya tiga kontraksi untuk membuat ringkasan yang berguna bagi tim persalinan Anda.',
    copySummaryButton: 'Salin ringkasan',
    copiedSummaryButton: 'Tersalin',
    undoButton: 'Batalkan yang terakhir',
    sessionOverviewTitle: 'Ikhtisar sesi',
    sessionOverviewBody: 'Mulai mencatat saat kontraksi dimulai. Kontraksi aktif akan muncul di sini segera.',
    lastContractionLabel: 'Kontraksi terakhir',
    historyTitle: 'Riwayat kontraksi',
    emptyHistory: 'Belum ada kontraksi yang tercatat.',
    startTimeHeader: 'Waktu mulai',
    durationHeader: 'Durasi',
    intervalHeader: 'Interval',
    secondsSuffix: 'dtk',
    minutesSuffix: 'mnt',
    noInterval: '-',
    resetButton: 'Reset',
    alertTitle: 'Pola 5-1-1 terdeteksi',
    alertBody: 'Kontraksi terbaru Anda mendekati pola 5-1-1 yang umum. Pertimbangkan untuk menghubungi bidan atau unit persalinan Anda sekarang untuk panduan yang dipersonalisasi.',
    patternTitle: 'Apa yang diperiksa peringatan',
    patternBody: 'Panel muncul saat kontraksi terbaru berjarak 5 menit atau kurang, berlangsung setidaknya 60 detik, dan mempertahankan pola tersebut selama sekitar 1 jam.',
  },
};

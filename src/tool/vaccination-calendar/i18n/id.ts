import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalender-vaksinasi-spanyol-bayi';
const title = 'Kalender Vaksinasi di Spanyol';
const description = 'Hitung tanggal pasti vaksinasi bayi Anda sesuai dengan kalender AEP 2026.';
const faq = [
  {
    question: 'Apa itu kalender vaksinasi AEP 2026?',
    answer: 'Ini adalah kalender vaksinasi yang direkomendasikan oleh Asosiasi Pediatri Spanyol (AEP) untuk tahun 2026. Mencakup semua vaksin sistematis dan opsional untuk bayi dan anak-anak dari lahir hingga usia 14 tahun.',
  },
  {
    question: 'Apakah wajib memvaksinasi bayi saya sesuai kalender ini?',
    answer: 'Di Spanyol, vaksinasi tidak diwajibkan secara hukum, namun sangat direkomendasikan. Vaksin dalam kalender sistematis gratis dan diberikan di pusat kesehatan masyarakat.',
  },
  {
    question: 'Apa yang terjadi jika kita melewatkan satu dosis?',
    answer: 'Jika dosis terlambat, tidak perlu mengulang dari awal. Dokter anak Anda akan memberi tahu cara melanjutkan kalender dari tempat yang terhenti. Yang penting adalah melengkapi jadwal sesegera mungkin.',
  },
  {
    question: 'Dapatkah saya memberikan beberapa vaksin pada hari yang sama?',
    answer: 'Ya, memberikan beberapa vaksin dalam satu kunjungan adalah hal yang umum dan aman. Vaksin kombinasi seperti hexavalent sudah melindungi terhadap enam penyakit dalam satu suntikan.',
  },
  {
    question: 'Apakah vaksin aman untuk bayi prematur?',
    answer: 'Bayi prematur harus divaksinasi sesuai dengan usia kronologis mereka (sejak lahir), bukan usia koreksi, kecuali ada instruksi khusus dari neonatologis. Mereka memiliki prioritas karena lebih rentan.',
  },
];
const howTo = [
  {
    name: 'Masukkan tanggal lahir',
    text: 'Tuliskan hari, bulan, dan tahun kelahiran bayi Anda pada kolom yang tersedia.',
  },
  {
    name: 'Cek jadwal berikutnya',
    text: 'Kalkulator akan secara otomatis menunjukkan kapan vaksinasi berikutnya dan vaksin apa yang sesuai.',
  },
  {
    name: 'Tinjau kalender lengkap',
    text: 'Buka bagian jadwal masa lalu dan masa depan untuk melihat seluruh kalender vaksinasi.',
  },
  {
    name: 'Ekspor pengingat',
    text: 'Tekan tombol untuk mengunduh file .ics berisi semua jadwal mendatang dan tambahkan ke kalender ponsel Anda.',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Tanggal lahir bayi',
    placeholderDD: 'HH',
    placeholderMM: 'BB',
    placeholderAAAA: 'TTTT',
    emptyMsg: 'Masukkan hari, bulan, dan tahun lahir bayi Anda untuk melihat kalender vaksinasi.',
    invalidMsg: 'Tanggal yang dimasukkan tidak valid.',
    futureMsg: 'Seorang bayi tidak bisa lahir di masa depan.',
    labelNextAppointment: 'Jadwal berikutnya yang dihitung',
    btnAddReminder: 'Tambah pengingat ke ponsel',
    btnToday: 'Hari ini saatnya! Jangan lupa buku kesehatan',
    labelPassed: 'Jadwal masa lalu',
    labelFuture: 'Kalender masa depan',
    labelStatusOk: 'OK',
    labelStatusPending: 'TUNDA',
    labelSource: 'Sumber: AEP 2026',
    labelShare: 'Bagikan tanggal ini',
    faqTitle: 'Pertanyaan yang sering diajukan',
    bibliographyTitle: 'Referensi',
    labelMonth: 'bulan',
    labelMonths: 'bulan',
    labelYear: 'tahun',
    labelYears: 'tahun',
    labelDay: 'hari',
    labelDays: 'hari',
    labelAnd: 'dan',
    labelVaccination: 'Vaksinasi',
    labelAppointment: 'Janji temu vaksinasi',
    vac_hexavalente: 'Heksavalen',
    vac_neumococo: 'Pneumokokus (VCN15/20)',
    vac_meningococo_b: 'Meningokokus B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningokokus ACWY',
    vac_triple_virica: 'Campak, Gondongan, Rubela (MMR)',
    vac_varicela: 'Cacar air',
    vac_gripe: 'Flu (Musiman)',
    vac_vph: 'HPV (Papiloma)',
    vac_tdpa: 'Tdpa (Tetanus, Difteri, Pertusis)',
    vac_polio_booster: 'Polio (Penguat)',
  },
  seo: [
    { type: 'title', text: 'Kalkulator Vaksin: Kapan jadwal berikutnya untuk anak saya?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Efektivitas' },
      { value: '14', label: 'Total dosis' },
      { value: 'Gratis', label: 'Biaya AEP' },
      { value: 'Tinggi', label: 'Keamanan' },
    ]},
    { type: 'tip', html: 'Kalender AEP 2026 mencakup pembaruan penting seperti perluasan vaksin meningokokus B dan pembaruan rekomendasi untuk HPV pada kedua jenis kelamin mulai usia 12 tahun.' },
    { type: 'title', text: 'Pembaruan Kalender AEP 2026', level: 3 },
    { type: 'list', items: [
      'Meningokokus B (Bexsero): jadwal 2+1 terkonsolidasi dengan dosis pada usia 2, 4, dan 12 bulan.',
      'HPV diperluas ke semua remaja mulai usia 12 tahun, tanpa memandang jenis kelamin.',
      'Pneumokokus: rekomendasi terbaru dengan VCN15 atau VCN20 tergantung ketersediaan wilayah.',
      'Rotavirus: vaksin oral termasuk dalam kalender sistematis di seluruh wilayah Spanyol.',
      'Tdpa: penguat direkomendasikan pada usia 6 dan 12 tahun untuk menjaga imunitas terhadap pertusis.',
    ]},
    { type: 'title', text: 'Perbedaan antar wilayah otonom', level: 3 },
    { type: 'list', items: [
      'Beberapa wilayah menyertakan vaksin tambahan yang tidak tercantum dalam kalender nasional.',
      'Pembiayaan vaksin rotavirus bervariasi menurut wilayah, meskipun trennya mengarah pada cakupan universal.',
      'Meningokokus ACWY dapat diberikan pada usia yang sedikit berbeda tergantung pada protokol wilayah.',
      'Selalu berkonsultasi dengan dokter anak atau pusat kesehatan di wilayah Anda untuk mengonfirmasi kalender yang berlaku.',
    ]},
    { type: 'title', text: 'Cara mengekspor kalender ke ponsel Anda', level: 3 },
    { type: 'list', items: [
      'Masukkan tanggal lahir bayi Anda ke dalam kalkulator.',
      'Tekan tombol "Tambah pengingat ke ponsel" untuk mengunduh file .ics.',
      'Buka file dengan aplikasi kalender Anda (Google Calendar, Apple Calendar, dll).',
      'Semua jadwal vaksinasi akan disimpan dengan tanggal dan vaksin yang sesuai.',
    ]},
    { type: 'title', text: 'Efek samping umum', level: 3 },
    { type: 'list', items: [
      'Kemerahan atau bengkak di lokasi suntikan: hilang dalam 1-2 hari.',
      'Demam ringan (37.5–38.5 °C): normal dalam 24-48 jam pertama.',
      'Rewel atau menangis: sering terjadi pada bayi setelah dosis pertama.',
      'Mengantuk atau kurang nafsu makan sementara: tidak memerlukan perawatan khusus.',
      'Reaksi serius seperti anafilaksis sangat jarang terjadi (kurang dari 1 per sejuta dosis).',
    ]},
    { type: 'tip', html: 'Membawa bayi dalam keadaan kenyang dan mengenakan pakaian yang nyaman memudahkan kunjungan. Setelah vaksin, kontak kulit ke kulit atau menyusui membantu meredakan nyeri dan peradangan secara alami.' },
    { type: 'summary', title: 'Yang harus Anda ingat', items: [
      'Kalender AEP 2026 mencakup 14 dosis hingga usia 12 tahun untuk perlindungan lengkap.',
      'Vaksin di tahun pertama melindungi terhadap hingga 9 penyakit serius secara bersamaan.',
      'Efek samping ringan adalah normal dan hilang dalam 1-2 hari.',
      'Anda dapat mengekspor semua jadwal vaksinasi ke kalender ponsel Anda dengan satu klik.',
      'Selalu berkonsultasi dengan dokter anak Anda jika Anda memiliki pertanyaan tentang kalender di wilayah Anda.',
    ]},
  ],
  faqTitle: "Pertanyaan yang sering diajukan",
  faq,
  bibliographyTitle: "Referensi",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Kalender Vaksinasi 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Kementerian Kesehatan Spanyol - Kalender Vaksinasi',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Imunisasi',
      url: 'https://www.who.int/id/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Jadwal Imunisasi yang Direkomendasikan untuk Anak dan Remaja',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

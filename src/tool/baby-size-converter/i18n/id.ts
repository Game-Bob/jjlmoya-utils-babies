import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'konverter-ukuran-baju-bayi';
const title = 'Konverter Ukuran Baju Bayi';
const description = 'Konversi ukuran baju bayi antara Zara, H&M, Primark, Carter\'s, Kiabi, Mango, dan Mayoral. Masukkan tinggi dan berat badan untuk mendapatkan ukuran tepat dari setiap merek.';
const faq = [
  {
    question: 'Bagaimana cara mengetahui ukuran baju yang sesuai untuk bayi saya?',
    answer: 'Cara paling andal adalah menggunakan tinggi badan bayi sebagai referensi utama. Ukuran Eropa (50, 56, 62...) berhubungan langsung dengan tinggi badan dalam sentimeter. Masukkan tinggi dan berat badan bayi ke konverter untuk mendapatkan ukuran yang direkomendasikan oleh setiap merek.',
  },
  {
    question: 'Mengapa ukuran baju sangat bervariasi antar merek?',
    answer: 'Setiap merek memiliki pola potongannya sendiri. H&M dan Primark cenderung berukuran lebih besar, sedangkan Carter\'s dan Mayoral memiliki potongan yang lebih pas (slim fit). Selalu gunakan ukuran tubuh bayi, bukan hanya usia.',
  },
  {
    question: 'Ukuran mana yang harus saya ambil jika berada di antara dua ukuran?',
    answer: 'Selalu pilih ukuran yang lebih besar. Bayi tumbuh dengan sangat cepat dan ukuran yang lebih besar menjamin ketahanan pakai yang lebih lama serta kenyamanan bagi bayi.',
  },
  {
    question: 'Apakah ukuran dalam inci berfungsi dengan cara yang sama?',
    answer: 'Merek Amerika seperti Carter\'s menggunakan inci dan berat badan sebagai referensi. Konverter secara otomatis menunjukkan kesetaraan dalam sistem imperial jika Anda mengaktifkannya.',
  },
];
const howTo = [
  {
    name: 'Masukkan tinggi badan bayi',
    text: 'Gunakan slider atau tombol untuk menyesuaikan tinggi badan bayi saat ini dalam sentimeter atau inci.',
  },
  {
    name: 'Masukkan berat badan bayi',
    text: 'Sesuaikan berat badan dalam kg atau pound untuk memperhalus hasil, karena beberapa merek menggunakan berat badan sebagai referensi tambahan.',
  },
  {
    name: 'Pilih merek',
    text: 'Pilih merek pakaian untuk melihat saran ukuran dan estimasi ukuran pakaian tersebut.',
  },
  {
    name: 'Lihat kesetaraannya',
    text: 'Di panel kanan Anda akan melihat ukuran yang setara dari semua merek yang tersedia secara sekilas.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Ukuran tubuh bayi',
    labelResults: 'Kesetaraan estimasi',
    labelHeight: 'Tinggi badan bayi',
    labelWeight: 'Berat badan bayi saat ini',
    labelPresets: 'Preset berdasarkan usia umum',
    unitMetric: 'Metrik (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Merek dan Potongan',
    labelSuggested: 'Saran ukuran',
    labelChest: 'Dada',
    labelWaist: 'Pinggang',
    labelGarmentMeasures: 'Estimasi ukuran pakaian',
    fitRegular: 'Potongan reguler',
    fitLarge: 'Potongan longgar',
    fitSmall: 'Potongan pas (slim fit)',
    tipTitle: 'Saran Ahli',
    tipText: 'Bayi tumbuh dalam lonjakan perkembangan yang sangat cepat. Jika hasilnya berada di ambang batas suatu ukuran, selalu pilih ukuran yang lebih besar untuk menjamin ketahanan pakai dan kenyamanan bayi.',
    shareAriaLabel: 'Bagikan ukuran',
    faqTitle: 'Pertanyaan umum',
    bibliographyTitle: 'Referensi',
  },
  seo: [
    { type: 'title', text: 'Panduan ukuran baju bayi: Zara, H&M, Primark, dan merek internasional', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Pertumbuhan bulanan' },
      { value: '3 bulan', label: 'Durasi setiap ukuran' },
      { value: '95%', label: 'Keandalan berdasarkan tinggi' },
    ]},
    { type: 'tip', html: 'Selalu gunakan tinggi badan sebagai referensi utama untuk memilih ukuran, bukan usia. Dua bayi pada bulan yang sama bisa memiliki perbedaan tinggi hingga 8–10 cm, yang berarti lonjakan satu ukuran penuh.' },
    { type: 'title', text: 'Ukuran berdasarkan usia, tinggi, dan berat', level: 3 },
    { type: 'table', headers: ['Estimasi usia', 'Tinggi (cm)', 'Berat (kg)', 'Ukuran umum', 'Estimasi penggunaan'], rows: [
      ['Baru lahir', '50–56', '3–4.5', '50 / RN', '4–6 minggu'],
      ['1–3 bulan', '56–62', '4.5–6', '56–62', '6–8 minggu'],
      ['3–6 bulan', '62–68', '6–8', '62–68', '6–8 minggu'],
      ['6–9 bulan', '68–74', '8–9.5', '68–74', '6–8 minggu'],
      ['9–12 bulan', '74–80', '9.5–11', '74–80', '6–8 minggu'],
      ['12–18 bulan', '80–86', '11–13', '80–86', '3–4 bulan'],
      ['18–24 bulan', '86–92', '13–15', '86–92', '3–4 bulan'],
    ]},
    { type: 'title', text: 'Merek yang berukuran besar vs pas badan', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Ukuran besar (pilih ukuran di bawahnya)',
        description: 'Merek-merek ini menggunakan potongan yang lebih longgar; ambil satu ukuran lebih kecil dari biasanya.',
        points: [
          'H&M: biasanya berukuran satu tingkat lebih besar',
          'Primark: potongan longgar secara umum',
          'Lupilu (Lidl): potongan santai',
          'Direkomendasikan untuk bayi dengan persentil rendah',
        ],
      },
      {
        title: 'Ukuran pas badan (pilih ukuran di atasnya)',
        description: 'Merek-merek ini menggunakan potongan yang lebih ketat; ambil satu ukuran lebih besar dari biasanya.',
        points: [
          "Carter's: potongan gaya Amerika yang pas",
          'Mayoral: potongan gaya Eropa yang pas',
          'Neck & Neck: ukuran kecil/terbatas',
          'Direkomendasikan untuk bayi dengan persentil tinggi',
        ],
      },
    ]},
    { type: 'title', text: 'Kunci untuk memilih ukuran yang tepat', level: 3 },
    { type: 'list', items: [
      'Selalu ukur bayi sebelum membeli, jangan hanya mengandalkan usia',
      'Jika berada di ambang batas antara dua ukuran, pilih ukuran yang lebih besar',
      'Pertimbangkan ruang untuk popok pada pakaian terusan (jumper/one-piece)',
      'Ukuran Eropa (50, 56, 62...) sesuai dengan tinggi badan dalam cm',
      'Selalu cuci sebelum digunakan: bahan katun dapat menyusut hingga 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Ukuran 50 / Baru Lahir',
        definition: 'Dirancang untuk bayi dengan tinggi hingga 50 cm dan berat sekitar 3,5 kg. Banyak bayi melampaui ukuran ini dengan sangat cepat, bahkan dalam beberapa minggu pertama.',
      },
      {
        term: 'Ukuran Pesak (Rise)',
        definition: 'Jarak dari selangkangan hingga pinggang. Sangat penting pada body suit dan jumper: pesak yang pendek membatasi gerakan bayi meskipun bagian lain pakaian pas.',
      },
      {
        term: 'Referensi berdasarkan berat',
        definition: "Beberapa merek Amerika seperti Carter's menggunakan berat badan sebagai referensi utama. Berguna untuk bayi dengan proporsi di luar persentil standar.",
      },
      {
        term: 'Kerah Amplop (Envelope Neck)',
        definition: 'Desain lubang leher pada body suit dan kaos yang memungkinkan bayi dipakaikan baju dengan cara digeser ke bawah, bukan dimasukkan lewat kepala. Sangat penting di bulan-bulan pertama.',
      },
    ]},
    { type: 'summary', title: 'Hal yang harus diingat', items: [
      'Tinggi badan adalah indikator paling andal untuk memilih ukuran, melampaui usia.',
      "H&M dan Primark cenderung berukuran besar; Carter's dan Mayoral berukuran pas badan.",
      'Angka ukuran Eropa (50, 56, 62...) sesuai dengan tinggi badan dalam cm.',
      'Di ambang batas antar ukuran, memilih yang lebih besar menjamin penggunaan lebih lama.',
      'Kerah amplop dan pesak yang luas adalah detail kunci kenyamanan.',
    ]},
  ],
  faqTitle: "Pertanyaan umum",
  faq,
  bibliographyTitle: "Referensi",
  bibliography: [
    {
      name: 'Zara - Panduan ukuran anak',
      url: 'https://www.zara.com/id/id/size-guide.html',
    },
    {
      name: 'H&M - Panduan ukuran bayi',
      url: 'https://www2.hm.com/id_id/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - Standar pertumbuhan anak',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Panduan ukuran',
      url: 'https://www.mayoral.com/int/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

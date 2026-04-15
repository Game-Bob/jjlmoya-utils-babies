import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bayi',
  title: 'Kalkulator Bayi',
  description: 'Alat dan kalkulator untuk perawatan dan pemantauan perkembangan bayi Anda.',
  seo: [
    {
      type: 'summary',
      title: 'Alat Tersedia',
      items: [
        'Kalkulator asupan berdasarkan usia dan berat',
        'Kalkulator persentil pertumbuhan (WHO)',
        'Konverter ukuran pakaian berdasarkan merek',
        'Estimator hari subur',
        'Kalender vaksinasi yang dipersonalisasi',
        'Kalkulator kehamilan dan minggu kehamilan',
      ],
    },
    {
      type: 'title',
      text: 'Memantau Perkembangan Bayi Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator bayi membantu Anda melacak pertumbuhan dan perkembangan anak Anda secara akurat. Mulai dari menghitung takaran susu menurut usia dan berat hingga memeriksa persentil WHO, alat-alat ini dirancang untuk memberikan informasi bermanfaat di setiap tahap.',
    },
    {
      type: 'title',
      text: 'Asupan dan Nutrisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator asupan memperkirakan jumlah ASI atau susu formula yang dibutuhkan bayi Anda menurut usia dalam hari, minggu atau bulan dan berat badannya saat ini. Perhitungan mengikuti pedoman pediatrik standar untuk memastikan nutrisi yang tepat.',
    },
    {
      type: 'title',
      text: 'Pertumbuhan dan Persentil',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator persentil menggunakan grafik referensi Organisasi Kesehatan Dunia (WHO) untuk menempatkan berat badan, tinggi badan, dan BMI bayi Anda dalam distribusi populasi anak. Persentil ke-50 menunjukkan bahwa bayi berada pada rata-rata.',
    },
  ],
};

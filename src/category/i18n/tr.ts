import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bebekler',
  title: 'Bebek Hesaplayıcıları',
  description: 'Bebeğinizin gelişimini izlemek ve bakımı için araçlar ve hesaplayıcılar.',
  seo: [
    {
      type: 'summary',
      title: 'Mevcut Araçlar',
      items: [
        'Yaş ve ağırlığa göre beslenme hesaplayıcı',
        'Büyüme persentil hesaplayıcı (WHO)',
        'Markaya göre kıyafet bedeni dönüştürücü',
        'Doğurganlık günleri tahmini',
        'Kişiselleştirilmiş aşılama takvimi',
        'Hamilelik ve gestasyon haftası hesaplayıcı',
      ],
    },
    {
      type: 'title',
      text: 'Bebeğinizin Gelişimini İzleme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bebek hesaplayıcıları, çocuğunuzun büyümesini ve gelişimini doğru bir şekilde takip etmenize yardımcı olur. Yaş ve ağırlığa göre süt miktarını hesaplamaktan WHO persentillerini kontrol etmeye kadar bu araçlar, her aşamada yararlı bilgiler sağlamak üzere tasarlanmıştır.',
    },
    {
      type: 'title',
      text: 'Beslenme ve Nutrisyon',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beslenme hesaplayıcı, bebeğinizin gün, hafta veya ay cinsinden yaşına ve güncel ağırlığına göre ihtiyaç duyduğu anne sütü veya mama miktarını tahmin eder. Hesaplamalar, uygun beslenmeyi sağlamak için standart pediatrik yönergeleri takip eder.',
    },
    {
      type: 'title',
      text: 'Büyüme ve Persentiller',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Persentil hesaplayıcı, bebeğinizin ağırlığını, boyunu ve BMI\'sini (Vücut Kitle İndeksi) çocuk popülasyonu dağılımı içinde konumlandırmak için Dünya Sağlık Örgütü (WHO) referans tablolarını kullanır. 50. persentil, bebeğin ortalamada olduğunu gösterir.',
    },
  ],
};

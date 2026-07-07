import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Gebelikte Kilo Alımı Hesaplayıcı';
const description = 'IOM ve ACOG prenatal kilo alımı rehberlerini kullanarak gebelik haftasına göre sağlıklı kilo alım aralığını tahmin edin.';

const faq = [
  {
    question: 'Gebelikte ne kadar kilo almalıyım?',
    answer: 'Gebelik öncesi BKİ\'ye bağlıdır. IOM rehberleri tekil gebeliklerde düşük kiloda 12,5-18 kg (28-40 lb), normal BKİ\'de 11,5-16 kg (25-35 lb), fazla kiloda 7-11,5 kg (15-25 lb) ve obezitede 5-9 kg (11-20 lb) önermektedir. Kişisel hedefinizi her zaman prenatal bakım ekibinizle görüşün.',
  },
  {
    question: 'İkiz gebelikte aynı kilo alım aralığı mı kullanılır?',
    answer: 'Hayır. İkiz gebeliklerde tüm BKİ kategorilerinde daha yüksek hedefler vardır. Normal BKİ için önerilen aralık 17-25 kg (37-54 lb), fazla kilo için 14-23 kg (31-50 lb), obezite için 11-19 kg (25-42 lb)\'dir. İkiz gebelikte düşük kilolu kadınlar için IOM tarafından belirlenmiş bir aralık bulunmadığından klinik ekip bakımı bireyselleştirir.',
  },
  {
    question: 'İlk trimesterden sonra eğri neden değişiyor?',
    answer: 'IOM rehberi ilk trimesterde toplamda yaklaşık 0,5-2 kg gibi çok mütevazı bir alım öngörür; çünkü fetüs, plasenta ve amniyotik sıvı henüz çok küçük kütleye sahiptir. İkinci trimesterden (BKİ\'ye bağlı olarak) 0,17-0,58 kg arasında daha düzenli bir haftalık alım başlar.',
  },
  {
    question: 'İlk trimesterde bulantı nedeniyle kilo veriyorum. Endişelenmeli miyim?',
    answer: 'İlk trimesterde bulantı ve besin tiksinmeleri nedeniyle hafif kilo kaybı yaygındır. Sıvı alımınızı sürdürdüğünüz ve birkaç kilodan fazla kaybetmediğiniz sürece genellikle endişe edilecek bir durum değildir. Kusma şiddetli, inatçı veya dehidratasyona neden oluyorsa sağlık hizmeti sağlayıcınızla iletişime geçin - bu, tedavi gerektiren hiperemezis gravidarum olabilir.',
  },
  {
    question: 'Haftalık ideal kilo alım hızı nedir?',
    answer: '13. haftadan sonraki haftalık hedefler: düşük kiloda 0,44-0,58 kg, normal BKİ\'de 0,35-0,50 kg, fazla kiloda 0,23-0,33 kg ve obezitede 0,17-0,27 kg\'dır. Bunlar ortalamalardır - sıvı tutulumu, öğün zamanlaması ve diğer faktörler nedeniyle gerçek alım haftadan haftaya değişir.',
  },
  {
    question: 'Gebelikte kilo alımını kontrol etmek için egzersiz yapmak güvenli mi?',
    answer: 'Evet, komplikasyonsuz gebeliği olan çoğu kadın için. ACOG haftada en az 150 dakika orta yoğunlukta aerobik aktivite önermektedir. Düzenli egzersiz sağlıklı kilo alımını destekler, gestasyonel diyabet riskini azaltır, ruh halini ve uykuyu iyileştirir. Özellikle gebelik komplikasyonlarında egzersiz planınızı her zaman sağlık ekibinizle görüşün.',
  },
  {
    question: 'Doğumdan sonra gebelik kiloları ne kadar sürede verilir?',
    answer: 'Çoğu kadın doğumdan hemen sonra yaklaşık 4,5-5,5 kg kaybeder (bebek, plasenta ve amniyotik sıvı). İlk haftada ek sıvı kaybı gerçekleşir. Gebelik öncesi kiloya dönüş, sağlıklı beslenme ve kademeli fiziksel aktivite ile genellikle 6 ila 12 ay sürer. Emzirme, günde yaklaşık 300-500 ekstra kcal harcadığı için yardımcı olabilir.',
  },
  {
    question: 'Bu hesaplayıcı bir gebelik sorununu teşhis edebilir mi?',
    answer: 'Hayır. Bu yalnızca popülasyon rehberlerine dayalı eğitim amaçlı bir tahmindir. Fetal büyümeyi, plasenta fonksiyonunu, kan basıncını, kan şekerini veya herhangi bir tıbbi belirtiyi değerlendiremez. Ani kilo değişimi, şişlik, inatçı kusma veya herhangi bir endişe her zaman bir kadın doğum uzmanı, ebe veya yetkin bir prenatal klinisyenle görüşülmelidir.',
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
    name: 'Gebelik öncesi ölçümleri girin',
    text: 'Araç gebelik öncesi BKİ\'yi tahmin edebilsin diye boy ve gebelik öncesi kiloyu ekleyin.',
  },
  {
    name: 'Mevcut gebelik bilgilerini ekleyin',
    text: 'Mevcut kilo, gebelik haftası ve gebeliğin tekil mi ikiz mi olduğunu girin.',
  },
  {
    name: 'Eğriyi inceleyin',
    text: 'Mevcut alımı, seçilen hafta için tahmin edilen sağlıklı alım bandıyla karşılaştırın.',
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
    priceCurrency: 'TRY',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'gebelikte-kilo-alimi-hesaplayici',
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Kaynakça',
  seo: [
    {
      type: 'summary',
      title: 'Gebelikte kilo alımı hakkında temel bilgiler',
      items: [
        'Önerilen toplam kilo alımınız tamamen gebelik öncesi BKİ\'nize bağlıdır, herkese uyan tek bir rakam yoktur.',
        'IOM rehberleri tekil gebeliklerde obezitede 11-20 lb\'den düşük kiloda 28-40 lb\'ye kadar aralıklar belirler.',
        'Kilo alımı doğrusal değildir: ilk trimesterde toplamda yalnızca 0,5-2 kg beklenir, ardından daha düzenli bir haftalık tempo başlar.',
        'İkiz gebeliklerde tüm BKİ kategorilerinde daha yüksek hedefler vardır.',
        'Bu hesaplayıcı eğitim amaçlı bir araçtır - kişisel hedeflerinizi her zaman prenatal bakım ekibinizle görüşün.',
      ],
    },
    {
      type: 'title',
      text: 'Gebelikte Kilo Alımı Hesaplayıcı: Prenatal büyüme eğrinizi anlayın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebelikte doğru miktarda kilo almak hem anne sağlığı hem de fetal gelişim için en önemli faktörlerden biridir. Yetersiz kilo alımı erken doğum, düşük doğum ağırlığı ve intrauterin gelişme geriliği riskini artırır. Aşırı alım ise gestasyonel diyabet, sezaryen doğum, doğum sonrası kilo tutulumu ve makrozomi ile ilişkilendirilir. Bu hesaplayıcı, <strong>IOM (Tıp Enstitüsü)</strong> ve <strong>ACOG (Amerikan Kadın Doğum Uzmanları ve Jinekologlar Koleji)</strong> tarafından belirlenmiş rehberleri kullanarak kişiselleştirilmiş haftalık alım eğrinizi çizer.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 hafta', label: 'Miadında gebelik süresi' },
        { value: '4 kategori', label: 'BKİ\'ye dayalı alım aralıkları (IOM)' },
        { value: '±0,5 kg/hf', label: 'İkinci trimesterde tipik tempo' },
      ],
    },
    {
      type: 'title',
      text: 'Hesaplayıcı nasıl çalışır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Aracın gebelik öncesi BKİ\'nizi hesaplayabilmesi için boyunuzu ve gebelik öncesi kilonuzu girersiniz.',
        'BKİ\'niz dört IOM kategorisinden birine sınıflandırılır: düşük kilo, normal, fazla kilo veya obezite.',
        'Her kategori, önerilen toplam alım aralığına ve ikinci ile üçüncü trimester için haftalık bir tempoya karşılık gelir.',
        'Hesaplayıcı ayrıca mevcut kilonuzu ve gebelik haftanızı alarak tahmini banda göre nerede olduğunuzu belirler.',
        'Tekil ve ikiz gebelikler, fetal ve plasental gereksinimler önemli ölçüde farklılık gösterdiğinden ayrı alım hedefleri kullanır.',
      ],
    },
    {
      type: 'title',
      text: 'IOM\'un gebelik öncesi BKİ\'ye göre kilo alımı önerileri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Gebelik öncesi BKİ', 'Kategori', 'Toplam alım tekil', 'Toplam alım ikiz', 'Haftalık tempo (hf. 14-40)'],
      rows: [
        ['< 18,5', 'Düşük kilo', '12,5-18 kg / 28-40 lb', 'IOM aralığı belirlenmemiştir', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normal', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Fazla kilo', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obezite', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Önemli:</strong> Bunlar popülasyon düzeyinde tarama aralıklarıdır. Sağlık hizmeti sağlayıcınız beslenme geçmişinize, önceki gebeliklerinize, fetal büyüme ultrasonlarına veya tıbbi durumlarınıza göre kişiselleştirilmiş bir hedef belirleyebilir. Her zaman klinisyeninizin bireysel yönlendirmesine uyun.',
    },
    {
      type: 'title',
      text: 'Trimestere göre kilo alımı',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Birinci trimester (1 to 13. haftalar)',
          description: 'Mütevazı bir alım beklenir. Birçok kadın bulantı nedeniyle çok az alır veya hatta kilo verir.',
          points: [
            'IOM hedefi: toplamda yaklaşık 0,5-2 kg (1-4,4 lb)',
            'Bulantı ve besin tiksinmeleri yaygındır ve alımı kısıtlayabilir',
            'Embriyo ve plasenta bu aşamada çok az kütleye sahiptir',
            'Nicelikten çok beslenme kalitesine odaklanın',
          ],
        },
        {
          title: 'İkinci trimester (14 to 26. haftalar)',
          description: 'En düzenli haftalık alım dönemi. Bulantı geçtikten sonra iştah genellikle düzelir.',
          points: [
            'Haftalık tempo: BKİ kategorisine bağlı olarak yaklaşık 0,23-0,58 kg',
            'Fetüs boy ve organ gelişimi açısından hızla büyür',
            'Plazma hacmi artarak kiloya katkıda bulunur',
            'Demir ve kalsiyum ihtiyacı önemli ölçüde artar',
          ],
        },
        {
          title: 'Üçüncü trimester (27 to 40. haftalar)',
          description: 'Kilo alımı ikinci trimestere benzer tempoda devam eder ve doğuma yakın yavaşlayabilir.',
          points: [
            '28. haftadan itibaren fetal yağ depolanması önemli ölçüde artar',
            'Amniyotik sıvı hacmi 34-36. hafta civarında zirve yapar',
            'Şişlik ve sıvı tutulumu ölçümleri geçici olarak yükseltebilir',
            'Bazı kadınlar doğumdan önceki son 1-2 haftada çok az alır',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kilo alımı aslında nelerden oluşur?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Bileşen', 'Miadında tahmini ağırlık'],
      rows: [
        ['Bebek', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Plasenta', '0,7 kg / 1,5 lb'],
        ['Amniyotik sıvı', '0,8 kg / 1,8 lb'],
        ['Rahim (büyüme)', '0,9 kg / 2 lb'],
        ['Meme dokusu', '0,5 kg / 1,1 lb'],
        ['Kan hacmi artışı', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Hücre dışı sıvı', '1,5 kg / 3,3 lb'],
        ['Anne yağ ve protein depoları', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Bu dökümün gösterdiği gibi, sağlıklı bir gebelikte alınan kilonun büyük kısmı işlevsel dokudur - sıvı, kan, fetüs, plasenta ve rahim - yalnızca yağ değildir. Bu anlayış, gebelik öncesinde fazla kilolu olan kadınlar için bile yeterli kilo alımının neden gerekli olduğunu kavramaya yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Sağlıklı kilo alımı için beslenme önerileri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'İkinci trimesterde günde yaklaşık 340 kcal, üçüncü trimesterde günde 450 kcal\'i gebelik öncesi ihtiyacınıza ekleyin.',
        'Proteine öncelik verin: fetal doku büyümesini ve anne kan hacmi artışını desteklemek için günde en az 70-80 g hedefleyin.',
        'Gebelikte daha sık görülen anemiyi önlemek için demir açısından zengin besinler (yağsız et, mercimek, zenginleştirilmiş tahıllar) tüketin.',
        'Kalsiyum ihtiyacı günde 1000 mg\'a yükselir - süt ürünleri, zenginleştirilmiş bitkisel içecekler, badem ve yeşil yapraklı sebzeler iyi kaynaklardır.',
        'Yağlı balıklardan (haftada 2 porsiyon) veya alg takviyelerinden alınan omega-3 yağ asitleri fetal beyin gelişimini destekler.',
        'Folik asit (günde 400-600 mcg) özellikle ilk trimesterde nöral tüp defekti riskini azaltır.',
        'İyi hidrasyonu sürdürün - günde yaklaşık 2-3 litre sıvı hedefleyin, sıcak havalarda veya egzersiz yaparken daha fazla.',
        'Aşırı kilo alımına katkıda bulunan yüksek işlenmiş gıdaları, ilave şekerleri ve trans yağları sınırlayın.',
      ],
    },
    {
      type: 'title',
      text: 'Gebelikte fiziksel aktivite ve kilo yönetimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG komplikasyonsuz gebeliği olan kadınlar için haftada en az <strong>150 dakika</strong> orta yoğunlukta aerobik aktivite önermektedir. Düzenli egzersiz sağlıklı kilo alımını destekler, gestasyonel diyabet ve preeklampsi riskini azaltır, uykuyu iyileştirir ve sırt ağrısını hafifletir. Yürüyüş, yüzme, prenatal yoga ve sabit bisiklet gebelik boyunca iyi tolere edilir. Yoğun aktiviteye başlamadan veya devam etmeden önce egzersiz planınızı her zaman sağlık hizmeti sağlayıcınızla görüşün.',
    },
    {
      type: 'title',
      text: 'Gebelikte kilo değişiklikleriyle ilgili uyarı işaretleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Özellikle 20. haftadan sonra bir haftada 1 kg\'dan fazla ani kilo alımı, preeklampsiye bağlı sıvı tutulumuna işaret edebilir.',
        'Baş ağrısı veya görme değişiklikleriyle birlikte el, yüz veya ayak bileklerinde hızlı şişme acil tıbbi müdahale gerektirir.',
        'İlk trimesterden sonra inatçı kilo kaybı veya besin veya sıvı tutamama, hiperemezis gravidarum\'a işaret edebilir.',
        'Yeterli alıma rağmen çok yavaş veya durmuş kilo alımı, intrauterin gelişme geriliğini değerlendirmek için fetal büyüme ultrasonunu gerektirebilir.',
        'Açıklanamayan herhangi bir kilo değişikliği, kendi kendine yönetilmek yerine bir kadın doğum uzmanı veya ebe ile görüşülmelidir.',
      ],
    },
    {
      type: 'title',
      text: 'Tekil ve ikiz gebelik: temel farklar',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tekil gebelik',
          description: 'Tek fetüs, tek plasenta. İyi belirlenmiş IOM hedefleri olan en yaygın senaryo.',
          points: [
            'Toplam alım: Gebelik öncesi BKİ\'ye bağlı olarak 5-18 kg',
            '14. haftadan itibaren 0,17-0,58 kg arasında düzenli haftalık tempo',
            'Daha düşük kalori fazlası (340-450 kcal/gün)',
            'Erken doğum oranı: yaklaşık %10',
          ],
        },
        {
          title: 'İkiz gebelik',
          description: 'İki fetüs, tüm yönlerden genellikle daha yüksek gereksinimler. Tüm BKİ kategorilerinde hedefler daha yüksektir.',
          points: [
            'Toplam alım: Gebelik öncesi BKİ\'ye bağlı olarak 11-25 kg',
            'Özellikle ikinci trimesterde daha yüksek haftalık tempo',
            'Daha yüksek kalori ve protein ihtiyacı',
            'Klinik ekipler hedefleri daha ayrıntılı şekilde bireyselleştirir',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Prenatal kilo alımının sık yanlış anlaşılan yönleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kilo alımı yağ alımıyla aynı şey değildir. Alınan kilonun büyük kısmı kan, sıvı, plasenta ve bebektir - depolanmış yağ değildir.',
        'İki kişilik yemek, alımı iki katına çıkarmak anlamına gelmez. İkinci trimesterde ek kalori ihtiyacı yaklaşık bir bardak süt ve bir muz kadardır.',
        'Önerilen aralığın üzerinde olmak otomatik olarak sizin veya bebeğinizin risk altında olduğu anlamına gelmez - aralıklar istatistiksel rehberlerdir, mutlak eşikler değildir.',
        'Obeziteli kadınlar da gebelikte kilo almalıdır. IOM hâlâ 5-9 kg\'lık net bir alım önermektedir.',
        'Tartı, sağlıklı bir gebeliğin en önemli ölçütü değildir - fetal büyüme, kan basıncı, kan şekeri ve klinik değerlendirmeler daha önemlidir.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BKİ (Beden Kitle İndeksi)',
          definition: 'Kilonun boyun karesine oranı olup kilo kategorilerini sınıflandırmak için kullanılır. Prenatal bakımda gebelik öncesi BKİ, uygun kilo alım aralığını belirler.',
        },
        {
          term: 'IOM (Institute of Medicine - Tıp Enstitüsü)',
          definition: 'Günümüzde Ulusal Tıp Akademisi. 2009 yılında, dünya çapında klinisyenler tarafından kullanılan gebelikte kilo alımı rehberlerini yayımlamıştır.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Kadın doğum ve jinekoloji alanında önde gelen Amerikan profesyonel kuruluşu. IOM kilo alımı rehberlerini destekler ve ek klinik yönlendirme sağlar.',
        },
        {
          term: 'Gestasyonel yaş',
          definition: 'Son adet döneminin ilk gününden itibaren hafta olarak ölçülen gebelik yaşı. Miadında gebelik tipik olarak 39-40 haftadır.',
        },
        {
          term: 'Makrozomi',
          definition: 'Bebeğin beklenenden daha fazla büyüdüğü durumdur, genellikle doğum ağırlığının 4 kg\'ın üzerinde olması olarak tanımlanır. Aşırı kilo alımı ve gestasyonel diyabet ile ilişkilidir.',
        },
        {
          term: 'İntrauterin gelişme geriliği (IUGR)',
          definition: 'Fetüsün beklenenden daha yavaş büyüdüğü durumdur. Yetersiz kilo alımı, plasenta sorunları veya diğer anne sağlığı faktörleriyle ilişkili olabilir.',
        },
        {
          term: 'Preeklampsi',
          definition: 'Yüksek kan basıncı ve diğer organ sistemlerinde hasar belirtileriyle karakterize bir gebelik komplikasyonudur. Sıvı tutulumuna bağlı ani hızlı kilo alımı olası bir uyarı işaretidir.',
        },
        {
          term: 'Hiperemezis gravidarum',
          definition: 'Sıradan sabah bulantısının ötesinde, gebelikte kilo kaybı ve dehidratasyona yol açabilen, tıbbi tedavi gerektiren şiddetli ve inatçı bulantı ve kusma durumudur.',
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
    educationalWarningTitle: 'Eğitim uyarısı',
    educationalWarningBody: 'Bu hesaplayıcı yalnızca prenatal eğitim amaçlıdır. Anne veya fetüs sağlığını teşhis etmez, bireysel tıbbi tavsiyenin yerini tutmaz ve belirtileri, sıvı tutulumunu, diyabet riskini, fetal büyümeyi, beslenme geçmişini veya klinisyen tarafından belirlenen hedefleri dikkate almaz.',
    inputsTitle: 'Gebelik profili',
    unitsLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'İmperyal',
    heightCmLabel: 'Boy (cm)',
    heightFtLabel: 'Boy (ft)',
    heightInLabel: 'Boy (in)',
    preWeightKgLabel: 'Gebelik öncesi kilo (kg)',
    currentWeightKgLabel: 'Mevcut kilo (kg)',
    preWeightLbLabel: 'Gebelik öncesi kilo (lb)',
    currentWeightLbLabel: 'Mevcut kilo (lb)',
    weekLabel: 'Gebelik haftası',
    pregnancyTypeLabel: 'Gebelik türü',
    singletonLabel: 'Tekil',
    twinsLabel: 'İkiz',
    bmiCardTitle: 'Gebelik öncesi BKİ',
    recommendationTitle: 'Önerilen alım',
    currentGainTitle: 'Mevcut alım',
    chartTitle: 'Prenatal kilo alımı eğrisi',
    weekShortLabel: 'hf',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Toplam aralık',
    weeklyRangeLabel: '13. haftadan sonraki haftalık hız',
    firstTrimesterLabel: 'İlk trimester: yaklaşık 0,5-2 kg toplam alım',
    statusBelow: 'Tahmini bandın altında',
    statusWithin: 'Tahmini bandın içinde',
    statusAbove: 'Tahmini bandın üstünde',
    statusBelowBody: 'Mevcut alımınız bu hafta için tahmini bandın altında. Beslenme, bulantı, fetal büyüme veya tarihlemenin gözden geçirilmesi gerekip gerekmediğini prenatal klinisyeninize sorun.',
    statusWithinBody: 'Mevcut alımınız bu hafta için tahmini bandın içinde. Bireyselleştirilmiş prenatal planınızı uygulamaya devam edin.',
    statusAboveBody: 'Mevcut alımınız bu hafta için tahmini bandın üstünde. Özellikle alım ani veya şişlik ya da belirtilerle birlikteyse eğilimi klinisyeninizle değerlendirin.',
    categoryUnderweight: 'Düşük kilo',
    categoryNormal: 'Normal BKİ',
    categoryOverweight: 'Fazla kilo',
    categoryObesity: 'Obezite',
    totalGainSuffix: 'toplam alım',
    perWeekSuffix: 'haftada',
    chartLowLabel: 'Alt bant',
    chartHighLabel: 'Üst bant',
    chartCurrentLabel: 'Mevcut',
  },
};

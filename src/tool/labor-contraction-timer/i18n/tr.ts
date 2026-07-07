import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Do\u011fum Kas\u0131lma Sayac\u0131';
export const description = 'B\u00fcy\u00fck bir dokunmatik d\u00fc\u011fmeyle kas\u0131lma s\u00fcresini ve s\u0131kl\u0131\u011f\u0131n\u0131 takip edin, rehberli nefes egzersizi, ge\u00e7mi\u015f ve 5-1-1 deseni uyar\u0131s\u0131yla.';

export const faq = [
  {
    question: 'Kas\u0131lmalar i\u00e7in 5-1-1 kural\u0131 nedir?',
    answer: '5-1-1 kural\u0131 genellikle kas\u0131lmalar\u0131n yakla\u015f\u0131k 5 dakika arayla geldi\u011fi, yakla\u015f\u0131k 1 dakika s\u00fcrd\u00fc\u011f\u00fc ve yakla\u015f\u0131k 1 saat boyunca devam etti\u011fi anlam\u0131na gelir. Bir\u00e7ok do\u011fum ekibi bunu rehberlik almak i\u00e7in arama yapmak \u00fczere pratik bir sinyal olarak kullan\u0131r, ancak sizin plan\u0131n\u0131z farkl\u0131 olabilir.',
  },
  {
    question: 'Ebemi veya hastaneyi ne zaman aramal\u0131y\u0131m?',
    answer: 'Kas\u0131lmalar\u0131n\u0131z d\u00fczenli ve yo\u011fun hale geldi\u011finde veya size verilen zamanlama talimatlar\u0131yla e\u015fle\u015fti\u011finde do\u011fum ekibinizle ileti\u015fime ge\u00e7in. A\u015f\u0131r\u0131 kanama, azalm\u0131\u015f bebek hareketleri, ate\u015f, \u015fiddetli a\u011fr\u0131, endi\u015fe verici su gelmesi durumunda veya bir \u015feylerin yanl\u0131\u015f oldu\u011funu hissederseniz acil olarak aray\u0131n.',
  },
  {
    question: 'Bu saya\u00e7 aktif do\u011fumu te\u015fhis eder mi?',
    answer: 'Hay\u0131r. Zamanlar\u0131 kaydeder ve yayg\u0131n bir kas\u0131lma desenini vurgular. Rahim a\u011fz\u0131 de\u011fi\u015fiklikleri, bebe\u011fin pozisyonu, zarlar\u0131n durumu, semptomlar ve klinik ge\u00e7mi\u015finiz kalifiye bir sa\u011fl\u0131k uzman\u0131 taraf\u0131ndan de\u011ferlendirilmelidir.',
  },
  {
    question: 'Kas\u0131lma s\u0131kl\u0131\u011f\u0131 nas\u0131l hesaplan\u0131r?',
    answer: 'S\u0131kl\u0131k, bir kas\u0131lman\u0131n ba\u015flang\u0131c\u0131ndan bir \u00f6nceki kas\u0131lman\u0131n ba\u015flang\u0131c\u0131na kadar hesaplan\u0131r. S\u00fcre, ba\u015flat d\u00fc\u011fmesine bast\u0131\u011f\u0131n\u0131z andan durdur d\u00fc\u011fmesine bast\u0131\u011f\u0131n\u0131z ana kadar hesaplan\u0131r.',
  },
  {
    question: 'Prodromal do\u011fum s\u0131ras\u0131nda kullanabilir miyim?',
    answer: 'Evet. Kas\u0131lmalar\u0131n\u0131z\u0131n daha d\u00fczenli hale mi geldi\u011fini yoksa azalmakta m\u0131 oldu\u011funu g\u00f6rmenize yard\u0131mc\u0131 olabilir. Kas\u0131lmalar d\u00fczensiz kalmaya devam ederse, dinlenme veya su i\u00e7meyle de\u011fi\u015firse veya \u015fiddetlenmezse, hala prodromal olabilir, ancak bak\u0131m ekibiniz size rehberlik edebilir.',
  },
  {
    question: 'Rehberli nefes egzersizi neden dahil edildi?',
    answer: 'Yava\u015f ve dengeli nefes almak gerginli\u011fi azaltmaya, dikkati odaklamaya ve her kas\u0131lma s\u0131ras\u0131nda ba\u015fa \u00e7\u0131kmaya yard\u0131mc\u0131 olabilir. Animasyon yaln\u0131zca bir konfor yard\u0131mc\u0131s\u0131d\u0131r ve do\u011fum deste\u011finin yerini tutmaz.',
  },
  {
    question: 'Bu ilk bebe\u011fim de\u011filse 5-1-1 i\u00e7in beklemeli miyim?',
    answer: 'Her zaman de\u011fil. \u00d6nceki bir vajinal do\u011fumdan sonra do\u011fum daha h\u0131zl\u0131 ilerleyebilir. \u00d6zellikle y\u00fcksek riskli bir gebeli\u011finiz varsa, hastaneden uzakta ya\u015f\u0131yorsan\u0131z veya \u00f6nceki do\u011fumlar\u0131n\u0131z h\u0131zl\u0131 olduysa, ebenizin veya kad\u0131n do\u011fum uzman\u0131n\u0131z\u0131n plan\u0131n\u0131 takip edin.',
  },
  {
    question: 'Kas\u0131lma ge\u00e7mi\u015fim kaydediliyor mu?',
    answer: 'Saya\u00e7, son kay\u0131tlar\u0131 taray\u0131c\u0131n\u0131zda saklar, b\u00f6ylece oturumu kaybetmeden sayfay\u0131 yenileyebilirsiniz. Yerel ge\u00e7mi\u015fi temizlemek i\u00e7in s\u0131f\u0131rlama d\u00fc\u011fmesini kullan\u0131n.',
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
    name: 'S\u00fcre tutmay\u0131 ba\u015flat\u0131n',
    text: 'Bir kas\u0131lma ba\u015flad\u0131\u011f\u0131nda ana d\u00fc\u011fmeye bas\u0131n.',
  },
  {
    name: 'Nefes rehberini kullan\u0131n',
    text: 'Kas\u0131lma aktifken geni\u015fleyen ve daralan daireyi takip edin.',
  },
  {
    name: 'S\u00fcre tutmay\u0131 durdurun',
    text: 'Kas\u0131lma sona erdi\u011finde s\u00fcre ve aral\u0131\u011f\u0131n kaydedilmesi i\u00e7in d\u00fc\u011fmeye tekrar bas\u0131n.',
  },
  {
    name: 'Deseni g\u00f6zden ge\u00e7irin',
    text: 'Do\u011fum ekibinizle ileti\u015fime ge\u00e7ip ge\u00e7memeye karar vermek i\u00e7in ge\u00e7mi\u015fi ve uyar\u0131 panelini kontrol edin.',
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
  slug: 'dogum-kasilma-sayaci',
  faqTitle: 'S\u0131k\u00e7a Sorulan Sorular',
  bibliographyTitle: 'Kaynak\u00e7a',
  seo: [
    {
      type: 'summary',
      title: 'Kas\u0131lma zamanlamas\u0131 hakk\u0131nda \u00f6nemli bilgiler',
      items: [
        'S\u00fcre, bir kas\u0131lman\u0131n ba\u015flang\u0131c\u0131ndan sonuna kadar \u00f6l\u00e7\u00fcl\u00fcr.',
        'S\u0131kl\u0131k, bir kas\u0131lman\u0131n ba\u015flang\u0131c\u0131ndan di\u011ferinin ba\u015flang\u0131c\u0131na kadar \u00f6l\u00e7\u00fcl\u00fcr.',
        '5-1-1 deseni yakla\u015f\u0131k 5 dakika arayla, 1 dakika s\u00fcreyle, 1 saat boyunca anlam\u0131na gelir.',
        'Kas\u0131lma zamanlamas\u0131 karar vermeyi destekler ancak tek ba\u015f\u0131na rahim a\u011fz\u0131 a\u00e7\u0131kl\u0131\u011f\u0131n\u0131 veya aktif do\u011fumu do\u011frulayamaz.',
        'Her zaman kendi ebenizin, kad\u0131n do\u011fum uzman\u0131n\u0131z\u0131n veya do\u011fum \u00fcnitenizin talimatlar\u0131na uyun.',
      ],
    },
    {
      type: 'title',
      text: 'Do\u011fum Kas\u0131lma Sayac\u0131: S\u00fcreyi, S\u0131kl\u0131\u011f\u0131 ve 5-1-1 Desenlerini Takip Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir kas\u0131lma sayac\u0131, ailelerin stresli ve de\u011ferlendirmesi zor bir an\u0131 net bir kayda d\u00f6n\u00fc\u015ft\u00fcrmesine yard\u0131mc\u0131 olur. Ge\u00e7 gebelik d\u00f6neminde kas\u0131lmalar\u0131n hala d\u00fczensiz al\u0131\u015ft\u0131rma kas\u0131lmalar\u0131 m\u0131, prodromal do\u011fum mu, erken do\u011fum mu yoksa do\u011fum \u00fcnitesini aramay\u0131 gerektiren bir desen mi oldu\u011funu merak etmek yayg\u0131nd\u0131r. Bir kas\u0131lma ba\u015flad\u0131\u011f\u0131nda ba\u015flat ve bitti\u011finde durdur d\u00fc\u011fmesine basarak bu ara\u00e7, bir kas\u0131lman\u0131n ba\u015flang\u0131c\u0131ndan di\u011ferinin ba\u015flang\u0131c\u0131na kadar ge\u00e7en <strong>s\u00fcreyi</strong> saniye cinsinden ve <strong>s\u0131kl\u0131\u011f\u0131</strong> dakika cinsinden hesaplar.',
    },
    {
      type: 'paragraph',
      html: 'Ama\u00e7 do\u011fumu te\u015fhis etmek de\u011fildir. Ama\u00e7, olanlar\u0131 somut terimlerle tan\u0131mlaman\u0131za yard\u0131mc\u0131 olmakt\u0131r: her kas\u0131lman\u0131n ne kadar s\u00fcrd\u00fc\u011f\u00fc, ne kadar yak\u0131n olduklar\u0131, desenin g\u00fc\u00e7lenip g\u00fc\u00e7lenmedi\u011fi ve 5-1-1 kural\u0131 gibi yayg\u0131n k\u0131lavuzlarla e\u015fle\u015fecek kadar uzun s\u00fcre tutarl\u0131 kal\u0131p kalmad\u0131\u011f\u0131.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 dk', label: 'Yayg\u0131n s\u0131kl\u0131k sinyali' },
        { value: '60 sn', label: 'Tipik 5-1-1 s\u00fcresi' },
        { value: '1 saat', label: 'Desen kararl\u0131l\u0131k penceresi' },
      ],
    },
    {
      type: 'title',
      text: '5-1-1 uyar\u0131s\u0131 nas\u0131l yorumlan\u0131r',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '5-1-1 kural\u0131 yayg\u0131n olarak kullan\u0131lan bir pratik kurald\u0131r: kas\u0131lmalar yakla\u015f\u0131k 5 dakika arayla gelir, yakla\u015f\u0131k 1 dakika s\u00fcrer ve yakla\u015f\u0131k 1 saat boyunca devam eder. Bir\u00e7ok do\u011fum ekibi bu deseni, \u00f6zellikle ilk do\u011fumda, bireysel tavsiye almak i\u00e7in arama yapmak \u00fczere pratik bir sinyal olarak kullan\u0131r. Bu saya\u00e7, son kas\u0131lmalar 5 dakika veya daha az arayla geldi\u011finde, en az 60 saniye s\u00fcrd\u00fc\u011f\u00fcnde ve oturum boyunca bu \u015fekilde devam etti\u011finde deseni vurgular.',
    },
    {
      type: 'table',
      headers: ['G\u00f6rd\u00fc\u011f\u00fcn\u00fcz desen', 'Ne anlama gelebilir', 'Faydal\u0131 sonraki ad\u0131m'],
      rows: [
        ['D\u00fczensiz zamanlama, de\u011fi\u015fken s\u00fcre', 'Prodromal do\u011fum veya erken do\u011fum olabilir', 'Uyar\u0131 semptomlar\u0131n\u0131z yoksa dinlenin, su i\u00e7in, pozisyon de\u011fi\u015ftirin ve g\u00f6zlemlemeye devam edin'],
        ['Yakla\u015f\u0131yor ancak hala 60 saniyenin alt\u0131nda', 'Do\u011fum ilerliyor olabilir ancak hen\u00fcz 5-1-1 ile e\u015fle\u015fmiyor', 'Zamanlamaya devam edin ve kendi do\u011fum plan\u0131n\u0131z\u0131n talimatlar\u0131n\u0131 izleyin'],
        ['Yakla\u015f\u0131k 5 dk arayla, 60 sn s\u00fcreyle, yakla\u015f\u0131k 1 saattir', 'Yayg\u0131n 5-1-1 arama deseni', 'Ki\u015fiselle\u015ftirilmi\u015f rehberlik i\u00e7in ebeniz, kad\u0131n do\u011fum uzman\u0131n\u0131z veya do\u011fum \u00fcnitenizle ileti\u015fime ge\u00e7in'],
        ['Ani yo\u011fun kas\u0131lmalar, bas\u0131n\u00e7 veya \u0131k\u0131nma hissi', 'Do\u011fum h\u0131zla ilerliyor olabilir', '\u00d6zellikle bu ilk bebe\u011finiz de\u011filse hemen aray\u0131n'],
      ],
    },
    {
      type: 'title',
      text: 'Kas\u0131lmalar nas\u0131l do\u011fru \u015fekilde zamanlan\u0131r',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'S\u0131k\u0131\u015fma, kramp veya dalga benzeri hissin ba\u015flang\u0131c\u0131nda ba\u015flat d\u00fc\u011fmesine bas\u0131n.',
        'Kas\u0131lma net bir \u015fekilde azald\u0131\u011f\u0131nda ve tekrar rahatlayabildi\u011finizde durdur d\u00fc\u011fmesine bas\u0131n.',
        'S\u0131kl\u0131\u011f\u0131 bir kas\u0131lman\u0131n sonundan di\u011ferinin ba\u015flang\u0131c\u0131na kadar \u00f6l\u00e7meyin. Klinik olarak s\u0131kl\u0131k genellikle ba\u015flang\u0131\u00e7tan ba\u015flang\u0131ca say\u0131l\u0131r.',
        'Deseni yorumlamadan \u00f6nce birka\u00e7 kas\u0131lma kaydedin, \u00e7\u00fcnk\u00fc tek bir kas\u0131lma yan\u0131lt\u0131c\u0131 olabilir.',
        'E\u011fer size 5-1-1\'den farkl\u0131 bir e\u015fik verildiyse, \u00f6nce do\u011fum ekibinizin notlar\u0131n\u0131 kullan\u0131n.',
      ],
    },
    {
      type: 'title',
      text: 'Prodromal do\u011fum ve aktif do\u011fum desenleri',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Genellikle prodromal veya erken do\u011fum',
          description: 'Kas\u0131lmalar rahats\u0131z edici ve ger\u00e7ek olabilir, ancak desen hen\u00fcz do\u011fuma do\u011fru istikrarl\u0131 bir \u015fekilde ilerlemiyor olabilir.',
          points: [
            'Aral\u0131klar tutarl\u0131 bir \u015fekilde daralmak yerine s\u0131\u00e7rar',
            'Kas\u0131lmalar dinlenme, su i\u00e7me, banyo veya pozisyon de\u011fi\u015fiklikleriyle hafifleyebilir',
            'Yo\u011funluk zamanla artmak yerine benzer kalabilir',
            'Rahim a\u011fz\u0131 yava\u015f\u00e7a veya hen\u00fcz fazla de\u011fi\u015fmeyebilir, bunu yaln\u0131zca bir klinisyen de\u011ferlendirebilir',
          ],
        },
        {
          title: 'Aktif do\u011fuma daha \u00e7ok i\u015faret eder',
          description: 'Desen daha d\u00fczenli hale gelir, konu\u015farak ge\u00e7i\u015ftirilmesi zorla\u015f\u0131r ve giderek g\u00fc\u00e7lenir.',
          points: [
            'Kas\u0131lmalar birka\u00e7 kay\u0131t boyunca birbirine yakla\u015f\u0131r',
            'Her kas\u0131lma yakla\u015f\u0131k 45 ila 70 saniye veya daha uzun s\u00fcrer',
            'Zirve s\u0131ras\u0131nda duraklaman\u0131z, nefes alman\u0131z veya odaklanman\u0131z gerekir',
            'Desen dinlenme, su i\u00e7me veya pozisyon de\u011fi\u015ftirmeden sonra bile devam eder',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Saya\u00e7 i\u00e7in beklememeniz gereken durumlar',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>G\u00fcvenlik notu:</strong> A\u015f\u0131r\u0131 kanama, azalm\u0131\u015f bebek hareketleri, \u015fiddetli ba\u015f a\u011fr\u0131s\u0131, ate\u015f, ye\u015fil veya k\u00f6t\u00fc kokulu s\u0131v\u0131, yo\u011fun s\u00fcrekli a\u011fr\u0131, preeklampsi belirtileri veya herhangi bir acil endi\u015feniz varsa saya\u00e7 uyar\u0131s\u0131n\u0131 beklemeyin. Yerel talimatlar\u0131n\u0131za g\u00f6re do\u011fum ekibinizi veya acil servisleri aray\u0131n.',
    },
    {
      type: 'title',
      text: 'Ge\u00e7mi\u015f neyi g\u00f6sterir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ba\u015flang\u0131\u00e7 zaman\u0131: kas\u0131lman\u0131n ba\u015flad\u0131\u011f\u0131 saat.',
        'S\u00fcre: biti\u015f zaman\u0131 eksi ba\u015flang\u0131\u00e7 zaman\u0131, saniyeye yuvarlan\u0131r.',
        'Aral\u0131k: mevcut ba\u015flang\u0131\u00e7 zaman\u0131 eksi \u00f6nceki kas\u0131lman\u0131n ba\u015flang\u0131\u00e7 zaman\u0131, dakika olarak g\u00f6sterilir.',
        'Son e\u011filim: kas\u0131lmalar\u0131n aras\u0131 a\u00e7\u0131l\u0131yor mu, d\u00fczensiz mi kal\u0131yor yoksa daha d\u00fczenli hale mi geliyor.',
      ],
    },
    {
      type: 'title',
      text: 'Yayg\u0131n zamanlama hatalar\u0131',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kas\u0131lma tamamen azalmadan \u00f6nce, zirvede sayac\u0131 durdurmak.',
        'Kas\u0131lma ba\u015fta hafif oldu\u011fu i\u00e7in ge\u00e7 ba\u015flatmak, bu da s\u00fcrenin daha k\u0131sa g\u00f6r\u00fcnmesine neden olur.',
        'Sadece en g\u00fc\u00e7l\u00fc kas\u0131lmalar\u0131 say\u0131p aradaki k\u00fc\u00e7\u00fckleri g\u00f6z ard\u0131 etmek.',
        '5-1-1\'in her zaman hemen hastaneye yat\u0131\u015f anlam\u0131na geldi\u011fini varsaymak. Genellikle rehberlik i\u00e7in aray\u0131n anlam\u0131na gelir, aktif do\u011fumu kendi kendinize te\u015fhis etmek de\u011fil.',
        '\u0130kinci veya sonraki do\u011fumlarda \u00e7ok uzun s\u00fcre beklemek, \u00e7\u00fcnk\u00fc ilerleme ilk do\u011fuma g\u00f6re daha h\u0131zl\u0131 olabilir.',
      ],
    },
    {
      type: 'title',
      text: 'Klinik s\u0131n\u0131rlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kas\u0131lma zamanlamas\u0131 do\u011fum de\u011ferlendirmesinin yaln\u0131zca bir par\u00e7as\u0131d\u0131r. Rahim a\u011fz\u0131 a\u00e7\u0131kl\u0131\u011f\u0131, fetal iyilik hali, a\u011fr\u0131yla ba\u015fa \u00e7\u0131kma, zarlar\u0131n y\u0131rt\u0131lmas\u0131, gebelik haftas\u0131, \u00f6nceki do\u011fum ge\u00e7mi\u015fi, Grup B streptokok durumu, hastaneye uzakl\u0131k, gebelik risk fakt\u00f6rleri ve anneye ait semptomlar ekibinizin \u00f6nerisini de\u011fi\u015ftirebilir. Ge\u00e7mi\u015fi, ebeniz, kad\u0131n do\u011fum uzman\u0131n\u0131z, doula veya triyaj hem\u015firenizle payla\u015fmak i\u00e7in net bir kay\u0131t olarak kullan\u0131n.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'S\u00fcre',
          definition: 'Bir kas\u0131lman\u0131n uzunlu\u011fu, ba\u015flad\u0131\u011f\u0131 andan bitti\u011fi ana kadar \u00f6l\u00e7\u00fcl\u00fcr.',
        },
        {
          term: 'S\u0131kl\u0131k',
          definition: 'Bir kas\u0131lman\u0131n ba\u015flang\u0131c\u0131ndan di\u011fer kas\u0131lman\u0131n ba\u015flang\u0131c\u0131na kadar ge\u00e7en s\u00fcre.',
        },
        {
          term: '5-1-1 kural\u0131',
          definition: 'Yayg\u0131n bir do\u011fum zamanlama deseni: kas\u0131lmalar yakla\u015f\u0131k her 5 dakikada bir, yakla\u015f\u0131k 1 dakika s\u00fcren, yakla\u015f\u0131k 1 saat devam eden.',
        },
        {
          term: 'Prodromal do\u011fum',
          definition: 'Rahats\u0131z edici ve tekrarlayan ger\u00e7ek kas\u0131lmalar\u0131n oldu\u011fu, ancak her zaman aktif do\u011fuma istikrarl\u0131 bir \u015fekilde ilerlemeyen bir d\u00f6nem.',
        },
        {
          term: 'Aktif do\u011fum',
          definition: 'Daha g\u00fc\u00e7l\u00fc ve d\u00fczenli kas\u0131lmalar\u0131n ve rahim a\u011fz\u0131 de\u011fi\u015fikliklerinin oldu\u011fu, klinik de\u011ferlendirme ile do\u011frulanm\u0131\u015f bir do\u011fum evresi.',
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
    safetyTitle: 'Do\u011fum plan\u0131n\u0131zla birlikte kullan\u0131n',
    safetyBody: 'Bu saya\u00e7 takip ve e\u011fitim ama\u00e7l\u0131d\u0131r. Emin de\u011filseniz, semptomlar sizi endi\u015felendiriyorsa veya size farkl\u0131 talimatlar verildiyse ebeniz, kad\u0131n do\u011fum uzman\u0131n\u0131z veya do\u011fum \u00fcnitenizle ileti\u015fime ge\u00e7in.',
    idleStatus: 'Sonraki kas\u0131lmay\u0131 zamanlamaya haz\u0131r',
    activeStatus: 'Kas\u0131lma devam ediyor',
    accidentalTapStatus: '\u00c7ok k\u0131sa',
    shortRecordLabel: 'K\u0131sa veya test dokunu\u015fu',
    activeRowLabel: '\u015eu anda aktif',
    startButton: 'Kas\u0131lmay\u0131 Ba\u015flat',
    stopButton: 'Kas\u0131lmay\u0131 Durdur',
    activeLabel: 'Aktif kas\u0131lma',
    breathingLabel: 'Yava\u015f\u00e7a nefes al\u0131n',
    breatheIn: 'Nefes al',
    breatheOut: 'Nefes ver',
    currentDurationLabel: 'Mevcut s\u00fcre',
    lastIntervalLabel: 'Son aral\u0131k',
    contractionCountLabel: 'Kaydedildi',
    patternStatusTitle: 'Desen durumu',
    patternStatusIdle: 'Kaydetmeye haz\u0131r',
    patternStatusTracking: 'Kaydetmeye devam edin',
    patternStatusBuilding: 'Desen olu\u015fuyor',
    patternStatusCall: 'Do\u011fum ekibinizi aray\u0131n',
    patternStatusActiveBody: 'Kaydetmeye ba\u015flad\u0131n\u0131z. Desenin anlaml\u0131 olmas\u0131 i\u00e7in birka\u00e7 kas\u0131lma daha gerekiyor.',
    patternStatusBuildingBody: 'Son kas\u0131lmalar yakla\u015f\u0131yor veya daha uzun s\u00fcr\u00fcyor. Zamanlamaya devam edin ve devam ederlerse aramaya haz\u0131r olun.',
    patternStatusCallBody: 'Son kas\u0131lmalar 5-1-1 desenine yakla\u015f\u0131yor. Ki\u015fiselle\u015ftirilmi\u015f rehberlik i\u00e7in \u015fimdi ebeniz, kad\u0131n do\u011fum uzman\u0131n\u0131z veya do\u011fum \u00fcnitenizle ileti\u015fime ge\u00e7in.',
    averageLastThreeLabel: 'Son 3 ortalama',
    averageLastSixLabel: 'Son 6 ortalama',
    regularityLabel: 'D\u00fczenlilik',
    regularityNotEnough: 'Yeterli veri yok',
    regularityIrregular: 'D\u00fczensiz',
    regularityVariable: 'De\u011fi\u015fken',
    regularityRegular: 'D\u00fczenli',
    summaryTitle: 'Telefon \u00f6zeti',
    summaryEmpty: 'Do\u011fum ekibiniz i\u00e7in faydal\u0131 bir \u00f6zet olu\u015fturmak i\u00e7in en az \u00fc\u00e7 kas\u0131lma kaydedin.',
    copySummaryButton: '\u00d6zeti kopyala',
    copiedSummaryButton: 'Kopyaland\u0131',
    undoButton: 'Sonuncuyu geri al',
    sessionOverviewTitle: 'Oturum \u00f6zeti',
    sessionOverviewBody: 'Bir kas\u0131lma ba\u015flad\u0131\u011f\u0131nda zamanlamaya ba\u015flay\u0131n. Aktif kas\u0131lma hemen burada g\u00f6r\u00fcnecektir.',
    lastContractionLabel: 'Son kas\u0131lma',
    historyTitle: 'Kas\u0131lma ge\u00e7mi\u015fi',
    emptyHistory: 'Hen\u00fcz kas\u0131lma kaydedilmedi.',
    startTimeHeader: 'Ba\u015flang\u0131\u00e7 zaman\u0131',
    durationHeader: 'S\u00fcre',
    intervalHeader: 'Aral\u0131k',
    secondsSuffix: 'sn',
    minutesSuffix: 'dk',
    noInterval: '-',
    resetButton: 'S\u0131f\u0131rla',
    alertTitle: '5-1-1 deseni tespit edildi',
    alertBody: 'Son kas\u0131lmalar\u0131n\u0131z yayg\u0131n 5-1-1 desenine yakla\u015f\u0131yor. Ki\u015fiselle\u015ftirilmi\u015f rehberlik i\u00e7in \u015fimdi ebeniz veya do\u011fum \u00fcnitenizle ileti\u015fime ge\u00e7meyi d\u00fc\u015f\u00fcn\u00fcn.',
    patternTitle: 'Uyar\u0131 neyi kontrol eder',
    patternBody: 'Panel, son kas\u0131lmalar 5 dakika veya daha az arayla geldi\u011finde, en az 60 saniye s\u00fcrd\u00fc\u011f\u00fcnde ve bu deseni yakla\u015f\u0131k 1 saat s\u00fcrd\u00fcrd\u00fc\u011f\u00fcnde g\u00f6r\u00fcn\u00fcr.',
  },
};

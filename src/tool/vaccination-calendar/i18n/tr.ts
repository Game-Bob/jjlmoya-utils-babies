import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'ispanya-bebek-asi-takvimi';
const title = 'İspanya Aşı Takvimi';
const description = 'Bebeğinizin kesin aşı tarihlerini AEP 2026 takvimine göre hesaplayın.';
const faq = [
  {
    question: 'AEP 2026 aşı takvimi nedir?',
    answer: 'İspanya Pediatri Derneği tarafından 2026 yılı için önerilen aşı takvimidir. Doğumdan 14 yaşına kadar bebekler ve çocuklar için tüm sistematik ve isteğe bağlı aşıları içerir.',
  },
  {
    question: 'Bebeğimi bu takvime göre aşılatmak zorunlu mu?',
    answer: 'İspanya\'da aşılama yasal olarak zorunlu değildir, ancak şiddetle tavsiye edilir. Sistematik takvimdeki aşılar ücretsizdir ve kamu sağlık merkezlerinde uygulanır.',
  },
  {
    question: 'Bir dozu atlarsak ne olur?',
    answer: 'Bir doz gecikirse baştan başlamaya gerek yoktur. Çocuk doktorunuz takvime kaldığınız yerden nasıl devam edeceğinizi size söyleyecektir. Önemli olan şemayı mümkün olan en kısa sürede tamamlamaktır.',
  },
  {
    question: 'Aynı gün içinde birden fazla aşı yaptırabilir miyim?',
    answer: 'Evet, aynı ziyarette birden fazla aşı yapılması yaygın ve güvenlidir. Altılı karma aşı gibi kombine aşılar, tek bir enjeksiyonla altı hastalığa karşı koruma sağlar.',
  },
  {
    question: 'Aşılar prematüre bebekler için güvenli mi?',
    answer: 'Prematüre bebekler, neonatolog aksini belirtmedikçe, düzeltilmiş yaşa göre değil, kronolojik yaşlarına (doğumdan itibaren) göre aşılanmalıdır. Daha savunmasız oldukları için önceliklidirler.',
  },
];
const howTo = [
  {
    name: 'Doğum tarihini girin',
    text: 'Bebeğinizin doğum gününü, ayını ve yılını ilgili alanlara yazın.',
  },
  {
    name: 'Bir sonraki randevuyu kontrol edin',
    text: 'Hesaplayıcı size bir sonraki aşının ne zaman olduğunu ve hangi aşıların yapılacağını otomatik olarak gösterir.',
  },
  {
    name: 'Tüm takvimi inceleyin',
    text: 'Tüm aşı takvimini görmek için geçmiş ve gelecek randevu bölümlerini genişletin.',
  },
  {
    name: 'Hatırlatıcıları dışa aktarın',
    text: 'Tüm gelecek randevuları içeren bir .ics dosyasını indirmek ve bunları telefon takviminize eklemek için düğmeye basın.',
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
  inLanguage: 'tr',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Bebeğin doğum tarihi',
    placeholderDD: 'GG',
    placeholderMM: 'AA',
    placeholderAAAA: 'YYYY',
    emptyMsg: 'Aşı takvimini görmek için bebeğinizin doğum günü, ay ve yılını girin.',
    invalidMsg: 'Girilen tarih geçerli değil.',
    futureMsg: 'Bir bebek gelecekte doğmuş olamaz.',
    labelNextAppointment: 'Hesaplanan sonraki randevu',
    btnAddReminder: 'Telefona hatırlatıcı ekle',
    btnToday: 'Bugün o gün! Aşı kartını unutmayın',
    labelPassed: 'Geçmiş randevular',
    labelFuture: 'Gelecek takvimi',
    labelStatusOk: 'TAMAM',
    labelStatusPending: 'BEK.',
    labelSource: 'Kaynak: AEP 2026',
    labelShare: 'Bu tarihleri paylaş',
    faqTitle: 'Sıkça sorulan sorular',
    bibliographyTitle: 'Referanslar',
    labelMonth: 'aylık',
    labelMonths: 'aylık',
    labelYear: 'yaş',
    labelYears: 'yaş',
    labelDay: 'gün',
    labelDays: 'gün',
    labelAnd: 've',
    labelVaccination: 'Aşılama',
    labelAppointment: 'Aşı randevusu',
    vac_hexavalente: 'Altılı Karma',
    vac_neumococo: 'Pnömokok (KPA15/20)',
    vac_meningococo_b: 'Meningokok B (Bexsero)',
    vac_rotavirus: 'Rotavirüs',
    vac_meningococo_acwy: 'Meningokok ACWY',
    vac_triple_virica: 'KKK (Kızamık, Kabakulak, Kızamıkçık)',
    vac_varicela: 'Suçiçeği',
    vac_gripe: 'Grip (Mevsimsel)',
    vac_vph: 'HPV (Papilloma)',
    vac_tdpa: 'Tdpa (Tetanoz, Difteri, Boğmaca)',
    vac_polio_booster: 'Polio (Poliomiyelit - Hatırlatma dozu)',
  },
  seo: [
    { type: 'title', text: 'Aşı Hesaplayıcı: Çocuğumun bir sonraki aşısı ne zaman?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+%95', label: 'Etkinlik' },
      { value: '14', label: 'Toplam doz' },
      { value: 'Ücretsiz', label: 'Maliyet (AEP)' },
      { value: 'Yüksek', label: 'Güvenlik' },
    ]},
    { type: 'tip', html: 'AEP 2026 takvimi, Meningokok B aşısının kapsamının genişletilmesi ve 12 yaşından itibaren her iki cinsiyet için HPV önerilerinin güncellenmesi gibi önemli yenilikler içermektedir.' },
    { type: 'title', text: 'AEP 2026 Takvimindeki Yenilikler', level: 3 },
    { type: 'list', items: [
      'Meningokok B (Bexsero): 2, 4 ve 12. aylarda dozlarla konsolide edilmiş 2+1 şeması.',
      'HPV aşısı, cinsiyetten bağımsız olarak 12 yaşından itibaren tüm ergenleri kapsayacak şekilde genişletildi.',
      'Pnömokok: Bölgesel mevcudiyete göre KPA15 veya KPA20 ile güncellenmiş öneri.',
      'Rotavirüs: Tüm bölgelerde sistematik takvime dahil edilen oral aşı.',
      'Tdpa: Boğmacaya karşı bağışıklığı korumak için 6 ve 12 yaşlarında önerilen hatırlatma dozu.',
    ]},
    { type: 'title', text: 'Özerk bölgeler arasındaki farklar', level: 3 },
    { type: 'list', items: [
      'Bazı bölgeler, ulusal takvimde yer almayan ek aşıları içerebilir.',
      'Rotavirüs aşısının finansmanı bölgeye göre değişmekle birlikte, eğilim evrensel kapsam yönündedir.',
      'Meningokok ACWY, bölgesel protokole bağlı olarak biraz farklı yaşlarda uygulanabilir.',
      'Geçerli takvimi onaylamak için her zaman çocuk doktorunuza veya bölgenizdeki sağlık merkezine danışın.',
    ]},
    { type: 'title', text: 'Takvimi telefonunuza nasıl aktarırsınız', level: 3 },
    { type: 'list', items: [
      'Bebeğinizin doğum tarihini hesaplayıcıya girin.',
      ' .ics dosyasını indirmek için "Telefona hatırlatıcı ekle" düğmesine basın.',
      'Dosyayı takvim uygulamanızla (Google Takvim, Apple Takvim, vb.) açın.',
      'Tüm aşı etkinlikleri, tarih ve ilgili aşılarla birlikte kaydedilecektir.',
    ]},
    { type: 'title', text: 'Yaygın yan etkiler', level: 3 },
    { type: 'list', items: [
      'Enjeksiyon yerinde kızarıklık veya şişlik: 1-2 gün içinde geçer.',
      'Hafif ateş (37.5–38.5 °C): İlk 24-48 saatte normaldir.',
      'Huzursuzluk veya ağlama: İlk dozlardan sonra bebeklerde sıktır.',
      'Geçici uykululuk veya iştahsızlık: Tedavi gerektirmez.',
      'Anafilaksi gibi ciddi reaksiyonlar son derece nadirdir (milyon dozda 1\'den az).',
    ]},
    { type: 'tip', html: 'Bebeği tok ve rahat kıyafetlerle getirmek ziyareti kolaylaştırır. Aşıdan sonra ten tene temas veya emzirme, ağrı ve iltihabı doğal yoldan yatıştırmaya yardımcı olur.' },
    { type: 'summary', title: 'Unutmamanız gerekenler', items: [
      'AEP 2026 takvimi, tam koruma için 12 yaşına kadar 14 doz içerir.',
      'İlk yıl yapılan aşılar aynı anda 9 kadar ciddi hastalığa karşı koruma sağlar.',
      'Hafif yan etkiler normaldir ve 1-2 gün içinde geçer.',
      'Tüm aşı randevularını tek bir tıklamayla telefonunuzun takvimine aktarabilirsiniz.',
      'Bölgenizin takvimi hakkında şüpheniz varsa her zaman çocuk doktorunuza danışın.',
    ]},
  ],
  faqTitle: "Sıkça sorulan sorular",
  faq,
  bibliographyTitle: "Referanslar",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Aşı Takvimi 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'İspanya Sağlık Bakanlığı - Aşı Takvimi',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'DSÖ - Bağışıklama',
      url: 'https://www.who.int/news-room/fact-sheets/detail/vaccines-and-immunization',
    },
    {
      name: 'CDC - Çocuklar ve Ergenler İçin Önerilen Bağışıklama Takvimi',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalendarz-szczepien-hiszpania-niemowleta';
const title = 'Kalendarz Szczepień w Hiszpanii';
const description = 'Oblicz dokładne daty szczepień Twojego dziecka zgodnie z kalendarzem AEP 2026.';
const faq = [
  {
    question: 'Czym jest kalendarz szczepień AEP 2026?',
    answer: 'Jest to kalendarz szczepień zalecany przez Hiszpańskie Stowarzyszenie Pediatryczne na rok 2026. Obejmuje on wszystkie szczepienia obowiązkowe i zalecane dla niemowląt i dzieci od urodzenia do 14. roku życia.',
  },
  {
    question: 'Czy szczepienie dziecka zgodnie z kalendarzem jest obowiązkowe?',
    answer: 'W Hiszpanii szczepienia nie są prawnie obowiązkowe, ale są bardzo zalecane. Szczepionki z kalendarza systematycznego są bezpłatne i podawane w publicznych ośrodkach zdrowia.',
  },
  {
    question: 'Co się stanie, jeśli pominiemy dawkę?',
    answer: 'W przypadku opóźnienia dawki nie trzeba zaczynać od początku. Pediatra poinstruuje Cię, jak wznowić kalendarz od miejsca, w którym został przerwany. Ważne jest, aby jak najszybciej uzupełnić schemat.',
  },
  {
    question: 'Czy mogę podać dziecku kilka szczepionek tego samego dnia?',
    answer: 'Tak, podawanie kilku szczepionek podczas tej samej wizyty jest powszechne i bezpieczne. Szczepionki skojarzone, takie jak hexawalentna, chronią przed sześcioma chorobami w jednym zastrzyku.',
  },
  {
    question: 'Czy szczepionki są bezpieczne dla wcześniaków?',
    answer: 'Wcześniaki powinny być szczepione zgodnie z ich wiekiem chronologicznym (od urodzenia), a nie skorygowanym, chyba że neonatolog zaleci inaczej. Mają one priorytet ze względu na większą podatność na zachorowania.',
  },
];
const howTo = [
  {
    name: 'Wprowadź datę urodzenia',
    text: 'Wpisz dzień, miesiąc i rok urodzenia dziecka w odpowiednie pola.',
  },
  {
    name: 'Sprawdź kolejną wizytę',
    text: 'Kalkulator automatycznie pokaże Ci, kiedy wypada kolejne szczepienie i jakie szczepionki mu odpowiadają.',
  },
  {
    name: 'Przejrzyj pełny kalendarz',
    text: 'Rozwiń sekcje przeszłych i przyszłych wizyt, aby zobaczyć cały kalendarz szczepień.',
  },
  {
    name: 'Eksportuj przypomnienia',
    text: 'Naciśnij przycisk, aby pobrać plik .ics ze wszystkimi przyszłymi wizytami i dodać je do kalendarza w telefonie.',
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
  inLanguage: 'pl',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Data urodzenia dziecka',
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'RRRR',
    emptyMsg: 'Wprowadź dzień, miesiąc i rok urodzenia dziecka, aby zobaczyć kalendarz szczepień.',
    invalidMsg: 'Wprowadzona data jest nieprawidłowa.',
    futureMsg: 'Dziecko nie mogło urodzić się w przyszłości.',
    labelNextAppointment: 'Kolejna obliczona wizyta',
    btnAddReminder: 'Dodaj przypomnienie w telefonie',
    btnToday: 'To dzisiaj! Nie zapomnij książeczki zdrowia',
    labelPassed: 'Przeszłe wizyty',
    labelFuture: 'Przyszły kalendarz',
    labelStatusOk: 'OK',
    labelStatusPending: 'OCZEK.',
    labelSource: 'Źródło: AEP 2026',
    labelShare: 'Udostępnij te daty',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła',
    labelMonth: 'miesiąc',
    labelMonths: 'miesięcy',
    labelYear: 'rok',
    labelYears: 'lat',
    labelDay: 'dzień',
    labelDays: 'dni',
    labelAnd: 'i',
    labelVaccination: 'Szczepienie',
    labelAppointment: 'Wizyta szczepienna',
    vac_hexavalente: 'Hexawalentna (6 w 1)',
    vac_neumococo: 'Pneumokoki (VCN15/20)',
    vac_meningococo_b: 'Meningokoki B (Bexsero)',
    vac_rotavirus: 'Rotawirusy',
    vac_meningococo_acwy: 'Meningokoki ACWY',
    vac_triple_virica: 'MMR (Odra, Świnka, Różyczka)',
    vac_varicela: 'Ospa wietrzna',
    vac_gripe: 'Grypa (Sezonowa)',
    vac_vph: 'HPV (Wirus brodawczaka ludzkiego)',
    vac_tdpa: 'Tdpa (Tężec, Błonica, Krztusiec)',
    vac_polio_booster: 'Polio (Dawka przypominająca)',
  },
  seo: [
    { type: 'title', text: 'Kalkulator Szczepień: Kiedy wypada kolejne szczepienie mojego dziecka?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Skuteczność' },
      { value: '14', label: 'Łączna liczba dawek' },
      { value: 'Bezpłatne', label: 'Koszt AEP' },
      { value: 'Wysokie', label: 'Bezpieczeństwo' },
    ]},
    { type: 'tip', html: 'Kalendarz AEP 2026 zawiera ważne nowości, takie jak rozszerzenie szczepienia przeciwko meningokokom typu B oraz aktualizację zaleceń dotyczących HPV dla obu płci od 12. roku życia.' },
    { type: 'title', text: 'Nowości w kalendarzu AEP 2026', level: 3 },
    { type: 'list', items: [
      'Meningokoki B (Bexsero): utrwalony schemat 2+1 z dawkami w 2., 4. i 12. miesiącu życia.',
      'HPV rozszerzone na wszystkich nastolatków od 12. roku życia, niezależnie od płci.',
      'Pneumokoki: zaktualizowane zalecenie dotyczące VCN15 lub VCN20 w zależności od dostępności regionalnej.',
      'Rotawirusy: szczepionka doustna włączona do kalendarza systematycznego we wszystkich regionach.',
      'Tdpa: zalecana dawka przypominająca w wieku 6 i 12 lat w celu podtrzymania odporności na krztusiec.',
    ]},
    { type: 'title', text: 'Różnice między wspólnotami autonomicznymi', level: 3 },
    { type: 'list', items: [
      'Niektóre wspólnoty obejmują dodatkowe szczepionki nieuwzględnione w kalendarzu ogólnokrajowym.',
      'Finansowanie szczepionki przeciw rotawirusom zależy od wspólnoty, choć dąży się do powszechnego pokrycia kosztów.',
      'Meningokoki ACWY mogą być podawane w nieco innym wieku w zależności od protokołu danej wspólnoty.',
      'Zawsze skonsultuj się z pediatrą lub lokalnym ośrodkiem zdrowia, aby potwierdzić aktualny kalendarz.',
    ]},
    { type: 'title', text: 'Jak wyeksportować kalendarz do telefonu', level: 3 },
    { type: 'list', items: [
      'Wprowadź datę urodzenia dziecka w kalkulatorze.',
      'Naciśnij przycisk "Dodaj przypomnienie w telefonie", aby pobrać plik .ics.',
      'Otwórz plik w aplikacji kalendarza (Google Calendar, Apple Calendar itp.).',
      'Wszystkie wydarzenia dotyczące szczepień zostaną zapisane z odpowiednią datą i rodzajem szczepionki.',
    ]},
    { type: 'title', text: 'Typowe efekty uboczne', level: 3 },
    { type: 'list', items: [
      'Zaczerwienienie lub obrzęk w miejscu wstrzyknięcia: znika po 1-2 dniach.',
      'Lekka gorączka (37.5–38.5 °C): normalna w ciągu pierwszych 24-48 godzin.',
      'Drażliwość lub płacz: częste u niemowląt po pierwszych dawkach.',
      'Przejściowa senność lub brak apetytu: nie wymaga leczenia.',
      'Ciężkie reakcje, takie jak anafilaksja, są niezwykle rzadkie (mniej niż 1 na milion dawek).',
    ]},
    { type: 'tip', html: 'Zabranie dziecka najedzonego i w wygodnym ubraniu ułatwia wizytę. Po szczepieniu kontakt „skóra do skóry” lub karmienie piersią pomagają w naturalny sposób złagodzić ból i stan zapalny.' },
    { type: 'summary', title: 'O czym należy pamiętać', items: [
      'Kalendarz AEP 2026 obejmuje 14 dawek do 12. roku życia dla pełnej ochrony.',
      'Szczepionki w pierwszym roku życia chronią jednocześnie przed nawet 9 groźnymi chorobami.',
      'Łagodne efekty uboczne są normalne i znikają po 1-2 dniach.',
      'Możesz wyeksportować wszystkie wizyty szczepienne do kalendarza w telefonie jednym kliknięciem.',
      'W razie wątpliwości dotyczących kalendarza w Twojej wspólnocie, zawsze skonsultuj się z pediatrą.',
    ]},
  ],
  faqTitle: "Często zadawane pytania",
  faq,
  bibliographyTitle: "Źródła",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendario de Vacunaciones 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Hiszpańskie Ministerstwo Zdrowia - Kalendarz Szczepień',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Immunizacja',
      url: 'https://www.who.int/news-room/fact-sheets/detail/vaccines-and-immunization',
    },
    {
      name: 'CDC - Zalecany schemat szczepień dla dzieci i młodzieży',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

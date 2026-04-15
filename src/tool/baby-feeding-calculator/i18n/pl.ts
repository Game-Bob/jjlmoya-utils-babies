import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-karmienia-niemowlecia';
const title = 'Kalkulator Karmienia Niemowlęcia';
const description = 'Oblicz, ile mleka potrzebuje Twoje dziecko w zależności od jego wagi i wieku. Zalecane karmienia, mililitry na porcję oraz sygnały głodu i sytości.';

const faq = [
  {
    question: 'Ile mleka potrzebuje noworodek?',
    answer: 'W pierwszym dniu życia żołądek dziecka ma wielkość wiśni i potrzebuje tylko 5–7 ml na jedno karmienie. Od piątego dnia pojemność rośnie do 45–60 ml, a potrzeby zwiększają się stopniowo.',
  },
  {
    question: 'Jak często powinno jeść dziecko?',
    answer: 'Noworodki potrzebują od 8 do 12 karmień na dobę. W wieku 3 miesięcy przerwy zwykle się wydłużają do 7–8 karmień, a w wieku 6 miesięcy do około 5 karmień dziennie.',
  },
  {
    question: 'Skąd mam wiedzieć, czy moje dziecko je wystarczająco dużo?',
    answer: 'Najbardziej wiarygodne wskaźniki to: odpowiedni przyrost masy ciała, co najmniej 5–6 mokrych pieluch na dobę oraz wykazywanie przez dziecko oznak sytości po karmieniu.',
  },
  {
    question: 'Czy ilości przy karmieniu piersią i mlekiem modyfikowanym są takie same?',
    answer: 'Przy karmieniu piersią zaleca się karmienie na żądanie bez mierzenia objętości. Przy mleku modyfikowanym zwykłym punktem odniesienia jest 150 ml na kg masy ciała na dobę, rozłożone na liczbę karmień zależną od wieku.',
  },
];

const howTo = [
  {
    name: 'Wybierz wiek dziecka',
    text: 'Wybierz jednostkę (dni, tygodnie lub miesiące) i dostosuj wartość za pomocą suwaka lub przycisków.',
  },
  {
    name: 'Wprowadź wagę dziecka',
    text: 'Użyj suwaka wagi lub przycisków, aby ustawić aktualną wagę dziecka w kilogramach.',
  },
  {
    name: 'Wybierz rodzaj karmienia',
    text: 'Wybierz pierś, karmienie mieszane lub mleko modyfikowane, aby uzyskać najbardziej odpowiednie wskazówki.',
  },
  {
    name: 'Sprawdź zalecany plan',
    text: 'Kalkulator pokazuje liczbę karmień, mililitry na porcję oraz szacowaną całkowitą objętość dobową.',
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

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Aktualna konfiguracja',
    labelPlan: 'Zalecany plan',
    unitDays: 'dni',
    unitWeeks: 'tygodnie',
    unitMonths: 'miesiące',
    labelWeight: 'Waga dziecka',
    labelFeedType: 'Rodzaj karmienia',
    feedBreast: 'Pierś',
    feedMixed: 'Mieszane',
    feedFormula: 'Mleko modyf.',
    labelFreeDemand: 'Na żądanie',
    labelMlPerFeed: 'ml na porcję',
    labelFeedsCount: 'Karmienia / 24h',
    labelDailyTotal: 'Dobowe spożycie (szac.)',
    labelHunger: 'Sygnały głodu',
    labelFullness: 'Sygnały sytości',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła',
  },
  seo: [
    { type: 'summary', title: 'Podsumowanie: Żywienie dziecka', items: [
      'Pojemność żołądka noworodka to zaledwie 5–7 ml w pierwszym dniu życia.',
      'Ogólny punkt odniesienia dla mleka modyfikowanego to 150 ml na kg wagi na dobę.',
      'Karmienie piersią odbywa się na żądanie, bez stałych objętości.',
      'Częstotliwość spada z wiekiem: z 8–12 karmień do 4–5 w ciągu 6 miesięcy.',
    ]},
    { type: 'title', text: 'Ile mleka potrzebuje moje dziecko w zależności od wagi i wieku?', level: 2 },
    { type: 'paragraph', html: 'Zapotrzebowanie na mleko zmienia się gwałtownie w pierwszych miesiącach. Kalkulator szacuje ilość na podstawie aktualnej wagi i wieku dziecka, zgodnie z wytycznymi pediatrycznymi WHO i AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Dzień 1 (wielkość wiśni)' },
      { value: '150 ml/kg', label: 'Wzorzec mleko modyf.' },
      { value: '8–12', label: 'Karmienia/doba noworodek' },
    ]},
    { type: 'title', text: 'Wielkość żołądka w zależności od wieku', level: 3 },
    { type: 'table', headers: ['Wiek', 'Wielkość ref.', 'Pojemność', 'Karmienia/doba'], rows: [
      ['Dzień 1', 'Wiśnia', '5–7 ml', '8–12'],
      ['Dni 2–4', 'Orzech wł.', '22–27 ml', '8–12'],
      ['Dni 5–30', 'Jajko', '45–60 ml', '8–10'],
      ['1–3 mies.', 'Maksymalna', '90–120 ml', '7–8'],
      ['3–6 mies.', 'Maksymalna', '120–150 ml', '5–6'],
      ['6+ mies.', 'Maksymalna', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Wiarygodnym wskaźnikiem odpowiedniego żywienia jest liczba mokrych pieluch: od 5 do 6 na dobę, zaczynając od piątego dnia życia, wskazuje na dobre nawodnienie.' },
    { type: 'title', text: 'Karmienie piersią a mleko modyfikowane', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Karmienie piersią', description: 'Naturalne żywienie na żądanie.', points: ['Brak stałych godzin', 'Aktywne przeciwciała', 'Zmienny skład', 'Trudne do zmierzenia'] },
      { title: 'Mleko modyfikowane', description: 'Zaplanowane karmienia o obliczalnej objętości.', points: ['Co 3–4 godziny', 'Stały skład', 'Łatwa kontrola spożycia', 'Wymaga sterylnego przygotowania'] },
    ]},
    { type: 'list', items: [
      'Odpowiedni przyrost wagi: 150–200 g/tydzień w pierwszym miesiącu',
      'Co najmniej 5–6 mokrych pieluch na dobę',
      'Dziecko jest spokojne po karmieniu',
      'Mocz jasny lub bardzo jasnożółty',
    ]},
  ],
  faqTitle: "Często zadawane pytania",
  faq,
  bibliographyTitle: "Źródła",
  bibliography: [
    {
      name: 'WHO - Żywienie niemowląt i małych dzieci',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: 'Polskie Towarzystwo Gastroenterologii, Hepatologii i Żywienia Dzieci',
      url: 'https://ptp.edu.pl',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

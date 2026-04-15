import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-siatek-centylowych-niemowlat';
const title = 'Kalkulator Siatek Centylowych WHO dla Niemowląt';
const description = 'Oblicz centyl wagi, wzrostu i BMI swojego dziecka zgodnie z tabelami WHO (0-5 lat).';
const faq = [
  {
    question: 'Co oznacza 50. centyl?',
    answer: '50. centyl wskazuje, że dziecko znajduje się dokładnie w medianie, co oznacza, że połowa dzieci w tym samym wieku i tej samej płci waży lub mierzy więcej, a druga połowa mniej. Nie oznacza to wartości idealnej, lecz wartość środkową rozkładu.',
  },
  {
    question: 'Czy niski centyl jest sygnałem problemu?',
    answer: 'Niekoniecznie. Niski centyl (np. P10) może być całkowicie normalny, jeśli utrzymuje się na stabilnym poziomie w czasie. Ważny jest trend wzrostu, a nie pojedyncza wartość. Zawsze konsultuj się z pediatrą.',
  },
  {
    question: 'Z jakich siatek wzrostu korzysta ten kalkulator?',
    answer: 'Ten kalkulator wykorzystuje standardy wzrostu Światowej Organizacji Zdrowia (WHO) dla dzieci w wieku 0-5 lat, oparte na badaniu Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Co to jest BMI u niemowląt?',
    answer: 'Wskaźnik masy ciała (BMI) u niemowląt to stosunek masy ciała do kwadratu wzrostu. Siatki centylowe BMI dla niemowląt różnią się od tych dla dorosłych i muszą być interpretowane przy użyciu tabel specyficznych dla wieku i płci.',
  },
  {
    question: 'Jak często należy mierzyć dziecko?',
    answer: 'W pierwszych miesiącach pediatra zazwyczaj kontroluje wzrost podczas każdej wizyty. W domu możesz zapisywać wagę i wzrost co miesiąc, aby obserwować trend wzrostowy.',
  },
];
const howTo = [
  {
    name: 'Wybierz płeć dziecka',
    text: 'Wybierz chłopca lub dziewczynkę, aby zastosować odpowiednie tabele WHO.',
  },
  {
    name: 'Wprowadź wiek',
    text: 'Użyj suwaka lub strzałek, aby wskazać wiek w miesiącach (0-60 miesięcy).',
  },
  {
    name: 'Wprowadź wagę i wzrost',
    text: 'Wpisz wagę w kilogramach i wzrost w centymetrach.',
  },
  {
    name: 'Sprawdź centyle',
    text: 'Centyle wagi, wzrostu i BMI są obliczane automatycznie zgodnie z tabelami WHO.',
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

const appSchema: WithContext<WithContext<SoftwareApplication>> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Dane pomiarowe',
    labelSex: 'Płeć dziecka',
    sexBoy: 'Chłopiec',
    sexGirl: 'Dziewczynka',
    unitMonths: 'Tylko miesiące',
    unitYearsMonths: 'Lata + miesiące',
    labelWeight: 'Waga (kg)',
    labelHeight: 'Wzrost (cm)',
    btnAddHistory: 'Dodaj do mojej historii',
    btnClearHistory: 'Wyczyść dane',
    labelDashboard: 'Panel wzrostu',
    labelWeight2: 'Waga',
    labelHeight2: 'Wzrost',
    labelBMI: 'BMI',
    labelCalculating: 'Obliczanie...',
    disclaimer: 'Centyle są jedynie narzędziem statystycznym. Zawsze konsultuj się z pediatrą w celu interpretacji wyników.',
    labelLowRange: 'Zakres niski',
    labelLowNormal: 'Norma niska',
    labelNormal: 'Norma',
    labelHighNormal: 'Norma wysoka',
    labelHighRange: 'Zakres wysoki',
    alertOutOfRange: 'Wartość poza zakresem P3-P97. Skonsultuj się z pediatrą.',
    labelMonths: 'Miesiące',
    labelYears: 'Lata',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Siatek Centylowych WHO: Przewodnik po zrozumieniu wzrostu Twojego dziecka',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 kluczy do interpretacji centyli Twojego dziecka',
      items: [
        'Żaden pojedynczy centyl nie określa stanu zdrowia dziecka: ważny jest trend w czasie.',
        'Centyle między P3 a P97 są uważane za mieszczące się w statystycznej normie.',
        'BMI u niemowląt ma własne krzywe i nie należy go porównywać z wartościami referencyjnymi dla dorosłych.',
        'Krzywe WHO opierają się na dzieciach wychowanych w optymalnych warunkach, w tym wyłącznym karmieniu piersią w pierwszych miesiącach.',
        'Zawsze udostępniaj zapisy wzrostu pediatrze w celu właściwej interpretacji klinicznej.',
      ],
    },
    {
      type: 'title',
      text: 'Jak prawidłowo mierzyć dziecko',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Waż dziecko bez ubrań i w miarę możliwości zawsze na tej samej wadze.',
        'Mierz długość w pozycji poziomej do 24. miesiąca życia.',
        'Od 2. roku życia mierz wzrost w pozycji pionowej.',
        'Dokonuj pomiarów o tej samej porze dnia dla większej spójności.',
      ],
    },
    {
      type: 'tip',
      html: 'Centyl poniżej P3 nie oznacza automatycznie problemu zdrowotnego. Najważniejsze jest obserwowanie, czy krzywa wzrostu utrzymuje swój trend w czasie.',
    },
    {
      type: 'title',
      text: 'Interpretacja centyli',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Centyl', 'Interpretacja', 'Zalecane działanie'],
      rows: [
        ['P97 lub powyżej', 'Zakres wysoki', 'Omówienie z pediatrą podczas następnej wizyty'],
        ['P85 do P97', 'Norma wysoka', 'Normalna kontrola'],
        ['P15 do P85', 'Norma', 'Brak konieczności specjalnych działań'],
        ['P3 do P15', 'Norma niska', 'Normalna kontrola'],
        ['P3 lub poniżej', 'Zakres niski', 'Konsultacja z pediatrą'],
      ],
    },
    {
      type: 'title',
      text: 'Krzywe WHO vs Orbegozo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Krzywe WHO',
          description: 'Międzynarodowy standard oparty na dzieciach z 6 krajów wychowanych w optymalnych warunkach.',
          points: [
            'Zwalidowany międzynarodowy standard',
            'Oparty na dzieciach z 6 krajów i optymalnych warunkach',
            'Aktualny i wsparty naukowo',
            'Może nie odzwierciedlać lokalnych różnic genetycznych',
          ],
        },
        {
          title: 'Krzywe Orbegozo',
          description: 'Krzywe dostosowane do populacji hiszpańskiej, szeroko stosowane w poprzednich dekadach.',
          points: [
            'Dostosowane do populacji hiszpańskiej',
            'Szeroko stosowane w Hiszpanii w poprzednich dekadach',
            'Oparte na starszej populacji referencyjnej',
            'Mniejsze uznanie międzynarodowe',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 lat', label: 'Standard referencyjny' },
        { value: 'Krzywa trendu', label: 'Kluczowa zmienna' },
        { value: 'Parametry LMS', label: 'Precyzja techniczna' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Liczba odchyleń standardowych, o jaką wartość oddala się od średniej populacji referencyjnej. Z-Score równy 0 odpowiada 50. centylowi.',
        },
        {
          term: 'Harmonia',
          definition: 'Odpowiednia proporcja między wagą a wzrostem. Dziecko może mieć niski centyl wagi, ale być harmonijne, jeśli jego wzrost jest proporcjonalnie równie niski.',
        },
        {
          term: 'Antropometria',
          definition: 'Zbiór pomiarów ciała (waga, wzrost, obwód głowy, BMI) służących do oceny wzrostu i stanu odżywienia.',
        },
        {
          term: 'Parametry LMS',
          definition: 'Metoda statystyczna (L=Box-Cox, M=mediana, S=współczynnik zmienności) stosowana przez WHO do konstrukcji tabel centylowych i przekształcania każdego pomiaru w Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Często zadawane pytania",
  faq,
  bibliographyTitle: "Źródła",
  bibliography: [
    {
      name: 'WHO Child Growth Standards: Methods and development',
      url: 'https://www.who.int/publications/i/item/924154693X',
    },
    {
      name: 'WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age',
      url: 'https://www.who.int/tools/child-growth-standards/standards',
    },
    {
      name: 'Comparison of the WHO Child Growth Standards and the CDC 2000 Growth Charts - de Onis M et al.',
      url: 'https://doi.org/10.1093/jn/137.1.144S',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};

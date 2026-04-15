import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-dni-plodnych';
const title = 'Kalkulator Dni Płodnych';
const description = 'Oblicz swoje okno płodne i datę owulacji na podstawie cyklu menstruacyjnego.';
const faq = [
  {
    question: 'Jak oblicza się okno płodne?',
    answer: 'Okno płodne oblicza się od pierwszego dnia ostatniej miesiączki. Owulacja następuje około 14 dni przed rozpoczęciem kolejnego cyklu. Dni płodne obejmują 5 dni poprzedzających owulację oraz sam dzień owulacji.',
  },
  {
    question: 'Jaką dokładność ma ten kalkulator?',
    answer: 'Kalkulator stanowi szacunek oparty na standardowym modelu cyklu 28-dniowego (lub takim, jaki wskażesz). Jest to dane orientacyjne i może nie uwzględniać indywidualnych różnic. Dla większej dokładności połącz go z monitorowaniem podstawowej temperatury ciała lub testami owulacyjnymi.',
  },
  {
    question: 'Co jeśli mój cykl jest nieregularny?',
    answer: 'Jeśli Twoje cykle znacznie różnią się z miesiąca na miesiąc, obliczenia mogą być mniej dokładne. W takim przypadku monitorowanie temperatury podstawowej lub testy LH są bardziej wiarygodnymi metodami identyfikacji owulacji.',
  },
  {
    question: 'Jak długo komórka jajowa przeżywa po owulacji?',
    answer: 'Komórka jajowa żyje od 12 do 24 godzin. Jednak plemniki mogą przetrwać w żeńskim układzie rozrodczym do 5 dni, dlatego rzeczywiste okno płodne obejmuje kilka dni przed owulacją.',
  },
  {
    question: 'Czy można używać tego kalkulatora jako metody antykoncepcji?',
    answer: 'Nie zaleca się używania tego kalkulatora jako metody antykoncepcyjnej. Metody kalendarzowe mają znaczny wskaźnik niepowodzeń. Skonsultuj się z lekarzem lub ginekologiem w celu dobrania bezpiecznej i odpowiedniej dla Ciebie metody antykoncepcji.',
  },
];
const howTo = [
  {
    name: 'Wybierz pierwszy dzień ostatniej miesiączki',
    text: 'Kliknij na dzień w kalendarzu odpowiadający rozpoczęciu Twojej ostatniej menstruacji.',
  },
  {
    name: 'Dostosuj długość cyklu',
    text: 'Przesuń suwak, aby wskazać, ile dni zazwyczaj trwa Twój cykl menstruacyjny.',
  },
  {
    name: 'Sprawdź wyniki',
    text: 'Kalkulator automatycznie pokazuje szacowaną datę owulacji, okno płodne oraz początek kolejnej miesiączki.',
  },
  {
    name: 'Nawiguj po kalendarzu',
    text: 'Użyj strzałek nawigacyjnych, aby zobaczyć zaznaczone dni w poprzednich lub kolejnych miesiącach.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Kiedy zaczęła się Twoja ostatnia miesiączka?',
    step1Desc: 'Wybierz w kalendarzu pierwszy dzień Twojego ostatniego cyklu menstruacyjnego.',
    pulseHint: 'Kliknij dowolny dzień w kalendarzu, aby kontynuować',
    step1Indicator: 'Data rozpoczęcia',
    step2Indicator: 'Twój kalendarz',
    sidebarTitle: 'Twój cykl',
    sidebarDesc: 'Spersonalizuj wyniki, dostosowując długość cyklu.',
    labelCycleLength: 'Długość cyklu',
    unitDays: 'dni',
    labelOvulation: 'Następna owulacja',
    labelFertileWindow: 'Okno płodne',
    labelNextPeriod: 'Następna miesiączka',
    legendSelection: 'Twój wybór',
    legendPeriod: 'Miesiączka',
    legendFertile: 'Płodne',
    legendOvulation: 'Owulacja',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Dni Płodnych: Kompletny Przewodnik po Cyklu i Owulacji',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 kluczowych faktów o oknie płodnym',
      items: [
        'Owulacja następuje około 14 dni przed rozpoczęciem kolejnej miesiączki.',
        'Okno płodne obejmuje 5 dni przed owulacją plus sam dzień owulacji.',
        'Plemniki mogą przetrwać w żeńskim układzie rozrodczym do 5 dni.',
        'Nieregularne cykle zmniejszają wiarygodność obliczeń kalendarzowych.',
        'Połączenie tego narzędzia z pomiarem temperatury lub testami LH zwiększa dokładność.',
      ],
    },
    {
      type: 'title',
      text: 'Jak działają obliczenia okna płodnego',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Metoda opiera się na formule Ogino-Knausa i standardowym modelu owulacji. Przy 28-dniowym cyklu owulacja zazwyczaj przypada około 14. dnia. Kalkulator identyfikuje ten moment i wyznacza dni najwyższej płodności wokół niego.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 dni', label: 'Przed kolejną miesiączką' },
        { value: '5 dni', label: 'Czas trwania okna płodnego' },
        { value: '12-24 h', label: 'Żywotność komórki jajowej' },
      ],
    },
    {
      type: 'title',
      text: 'Fazy cyklu menstruacyjnego',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Faza folikularna',
          description: 'Zaczyna się od miesiączki i trwa do owulacji.',
          points: [
            'Pęcherzyki jajnikowe dojrzewają pod wpływem hormonu FSH.',
            'Trwa od 10 do 14 dni w regularnych cyklach.',
            'Poziom estrogenów progresywnie wzrasta.',
          ],
        },
        {
          title: 'Faza lutealna',
          description: 'Zaczyna się po owulacji i kończy miesiączką.',
          points: [
            'Ciałko żółte produkuje progesteron, aby przygotować endometrium.',
            'Trwa około 14 dni w normalnych cyklach.',
            'Jeśli nie dojdzie do zapłodnienia, ciałko żółte zanika.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Chociaż kalkulator korzysta ze standardowego modelu, cykle menstruacyjne mogą się zmieniać z miesiąca na miesiąc. Dla większej dokładności połącz to narzędzie z pomiarem podstawowej temperatury ciała lub testami owulacyjnymi.',
    },
    {
      type: 'title',
      text: 'Biologiczne objawy owulacji',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zmiany w śluzie szyjkowym: w dni płodne staje się przejrzysty i elastyczny, przypominający białko jaja.',
        'Lekki wzrost podstawowej temperatury ciała (0,2–0,4 °C) tuż po owulacji.',
        'Lekki ból lub dyskomfort po stronie aktywnego jajnika (Mittelschmerz) podczas owulacji.',
        'Niewielki wzrost libido w okolicach owulacji, wywołany zmianami hormonalnymi.',
        'Wzdęcia lub uczucie lekkiego napięcia w podbrzuszu podczas dni płodnych.',
      ],
    },
    {
      type: 'title',
      text: 'Styl życia a płodność',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Przewlekły stres może zaburzać owulację oraz wydłużać lub skracać cykl.',
        'Masa ciała ma bezpośredni wpływ: zarówno niedowaga, jak i nadwaga wpływają na owulację.',
        'Umiarkowana aktywność fizyczna sprzyja regularności cyklu; ekstremalny wysiłek może go hamować.',
        'Palenie tytoniu zmniejsza rezerwę jajnikową i przyspiesza menopauzę o kilka lat.',
        'Dieta bogata w kwas foliowy, żelazo i antyoksydanty wspiera zdrowie reprodukcyjne.',
      ],
    },
    {
      type: 'title',
      text: 'Metody monitorowania cyklu',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Metoda', 'Wiarygodność', 'Koszt'],
      rows: [
        ['Kalkulator kalendarzowy', 'Średnia', 'Bezpłatny'],
        ['Temperatura podstawowa', 'Wysoka przy wprawie', 'Niski'],
        ['Testy LH z moczu', 'Wysoka', 'Umiarkowany'],
        ['Cyfrowy monitor płodności', 'Bardzo wysoka', 'Wysoki'],
        ['Monitoring USG', 'Maksymalna', 'Kliniczny'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Owulacja (jajeczkowanie)',
          definition: 'Uwolnienie dojrzałej komórki jajowej z pęcherzyka jajnikowego, wywołane skokiem hormonu luteinizującego (LH). Występuje raz w cyklu.',
        },
        {
          term: 'Okno płodne',
          definition: 'Okres najwyższego prawdopodobieństwa poczęcia, obejmujący 5 dni przed owulacją oraz sam dzień owulacji.',
        },
        {
          term: 'Śluz szyjkowy',
          definition: 'Wydzielina szyjki macicy, której tekstura zmienia się w trakcie cyklu. W dni płodne staje się przejrzysty i rozciągliwy, ułatwiając plemnikom drogę.',
        },
        {
          term: 'Podstawowa temperatura ciała',
          definition: 'Temperatura ciała w spoczynku, mierzona rano zaraz po przebudzeniu. Wzrasta nieznacznie (0,2–0,4 °C) po owulacji pod wpływem progesteronu.',
        },
      ],
    },
  ],
  faqTitle: "Często zadawane pytania",
  faq,
  bibliographyTitle: "Źródła",
  bibliography: [
    {
      name: 'WHO - Planowanie rodziny',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Polskie Towarzystwo Ginekologów i Położników',
      url: 'https://www.ptginp.pl',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

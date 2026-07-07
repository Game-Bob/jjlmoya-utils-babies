import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Kalkulator Przyrostu Masy Ciała w Ciąży';
const description = 'Oszacuj zdrowy zakres przyrostu masy ciała w ciąży według tygodnia ciąży, korzystając z wytycznych IOM i ACOG dotyczących prenatalnego przyrostu masy ciała.';

const faq = [
  {
    question: 'Ile powinnam przytyć w ciąży?',
    answer: 'Zależy to od BMI sprzed ciąży. Wytyczne IOM zalecają 12,5-18 kg (28-40 lb) przy niedowadze, 11,5-16 kg (25-35 lb) przy prawidłowym BMI, 7-11,5 kg (15-25 lb) przy nadwadze i 5-9 kg (11-20 lb) przy otyłości w ciąży pojedynczej. Zawsze konsultuj swój indywidualny cel z zespołem opieki prenatalnej.',
  },
  {
    question: 'Czy w ciąży bliźniaczej obowiązuje ten sam zakres przyrostu?',
    answer: 'Nie. Ciąże bliźniacze mają wyższe cele we wszystkich kategoriach BMI. Przy prawidłowym BMI zalecany zakres wynosi 17-25 kg (37-54 lb). Przy nadwadze 14-23 kg (31-50 lb), a przy otyłości 11-19 kg (25-42 lb). Nie ma ustalonego zakresu IOM dla kobiet z niedowagą w ciąży bliźniaczej, dlatego zespół kliniczny indywidualizuje opiekę.',
  },
  {
    question: 'Dlaczego krzywa zmienia się po pierwszym trymestrze?',
    answer: 'Wytyczne IOM zakładają bardzo skromny przyrost w pierwszym trymestrze - około 0,5 do 2 kg - ponieważ płód, łożysko i płyn owodniowy mają jeszcze bardzo małą masę. Od drugiego trymestru rozpoczyna się bardziej równomierny przyrost tygodniowy wynoszący od 0,17 do 0,58 kg (w zależności od BMI).',
  },
  {
    question: 'Tracę na wadze w pierwszym trymestrze z powodu nudności. Czy powinnam się martwić?',
    answer: 'Niewielka utrata masy ciała w pierwszym trymestrze jest częsta z powodu nudności i awersji pokarmowych. Dopóki jesteś nawodniona i nie tracisz więcej niż kilka kilogramów, zwykle nie jest to powód do niepokoju. Jeśli wymioty są nasilone, uporczywe lub powodują odwodnienie, skonsultuj się z lekarzem - może to być hiperemesis gravidarum, która wymaga leczenia.',
  },
  {
    question: 'Jakie jest idealne tempo przyrostu masy ciała na tydzień?',
    answer: 'Po 13. tygodniu cele tygodniowe wynoszą: 0,44-0,58 kg przy niedowadze, 0,35-0,50 kg przy prawidłowym BMI, 0,23-0,33 kg przy nadwadze i 0,17-0,27 kg przy otyłości. Są to wartości średnie - rzeczywisty przyrost zmienia się z tygodnia na tydzień z powodu zatrzymania płynów, pory posiłków i innych czynników.',
  },
  {
    question: 'Czy ćwiczenia fizyczne są bezpieczne dla kontroli przyrostu masy ciała w ciąży?',
    answer: 'Tak, dla większości kobiet z niepowikłaną ciążą. ACOG zaleca co najmniej 150 minut tygodniowo aktywności aerobowej o umiarkowanej intensywności. Regularne ćwiczenia wspomagają zdrowy przyrost masy ciała, zmniejszają ryzyko cukrzycy ciążowej oraz poprawiają samopoczucie i sen. Zawsze konsultuj swój plan ćwiczeń z zespołem opieki zdrowotnej, szczególnie przy powikłaniach ciążowych.',
  },
  {
    question: 'Jak szybko traci się masę ciała po porodzie?',
    answer: 'Większość kobiet traci około 4,5-5,5 kg bezpośrednio po porodzie (dziecko, łożysko i płyn owodniowy). W pierwszym tygodniu następuje dodatkowa utrata płynów. Powrót do masy ciała sprzed ciąży trwa zazwyczaj od 6 do 12 miesięcy przy zdrowej diecie i stopniowej aktywności fizycznej. Karmienie piersią może pomóc, ponieważ zużywa około 300-500 dodatkowych kcal dziennie.',
  },
  {
    question: 'Czy ten kalkulator może zdiagnozować problem ciążowy?',
    answer: 'Nie. To wyłącznie oszacowanie edukacyjne oparte na wytycznych populacyjnych. Nie może ocenić wzrostu płodu, funkcji łożyska, ciśnienia krwi, poziomu cukru we krwi ani żadnych objawów medycznych. Nagła zmiana masy ciała, obrzęki, uporczywe wymioty lub jakiekolwiek obawy powinny być zawsze konsultowane z położnikiem, położną lub wykwalifikowanym klinicystą prenatalnym.',
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
    name: 'Wprowadź pomiary sprzed ciąży',
    text: 'Podaj wzrost i masę ciała sprzed ciąży, aby narzędzie mogło oszacować BMI sprzed ciąży.',
  },
  {
    name: 'Dodaj bieżące dane ciążowe',
    text: 'Wprowadź aktualną masę ciała, tydzień ciąży oraz informację, czy ciąża jest pojedyncza czy bliźniacza.',
  },
  {
    name: 'Przeanalizuj krzywą',
    text: 'Porównaj bieżący przyrost z szacowanym pasmem zdrowego przyrostu dla wybranego tygodnia.',
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
    priceCurrency: 'PLN',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'kalkulator-przyrostu-masy-ciazy',
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Kluczowe fakty o przyroście masy ciała w ciąży',
      items: [
        'Zalecany całkowity przyrost zależy wyłącznie od BMI sprzed ciąży, a nie od jednej uniwersalnej liczby.',
        'Wytyczne IOM określają zakresy od 11 do 20 lb przy otyłości do 28-40 lb przy niedowadze w ciąży pojedynczej.',
        'Przyrost masy ciała nie jest liniowy: w pierwszym trymestrze oczekuje się jedynie 0,5-2 kg łącznie, następnie rozpoczyna się bardziej równomierne tempo tygodniowe.',
        'Ciąże bliźniacze mają wyższe cele we wszystkich kategoriach BMI.',
        'Ten kalkulator jest narzędziem edukacyjnym - zawsze konsultuj swoje indywidualne cele z zespołem opieki prenatalnej.',
      ],
    },
    {
      type: 'title',
      text: 'Kalkulator Przyrostu Masy Ciała w Ciąży: zrozum swoją prenatalną krzywą wzrostu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przybieranie odpowiedniej ilości masy ciała w ciąży jest jednym z najważniejszych czynników zarówno dla zdrowia matki, jak i rozwoju płodu. Zbyt niski przyrost zwiększa ryzyko porodu przedwczesnego, niskiej masy urodzeniowej i wewnątrzmacicznego zahamowania wzrostu. Nadmierny przyrost wiąże się z cukrzycą ciążową, cesarskim cięciem, zatrzymaniem masy ciała po porodzie i makrosomią. Ten kalkulator wykorzystuje ustalone wytyczne <strong>IOM (Institute of Medicine)</strong> oraz <strong>ACOG (American College of Obstetricians and Gynecologists)</strong>, aby wykreślić spersonalizowaną krzywą przyrostu tydzień po tygodniu.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 tygodni', label: 'Czas trwania ciąży donoszonej' },
        { value: '4 kategorie', label: 'Zakresy przyrostu według BMI (IOM)' },
        { value: '±0,5 kg/tydz.', label: 'Typowe tempo w drugim trymestrze' },
      ],
    },
    {
      type: 'title',
      text: 'Jak działa kalkulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Wprowadzasz swój wzrost i masę ciała sprzed ciąży, aby narzędzie mogło obliczyć BMI sprzed ciąży.',
        'Twoje BMI jest klasyfikowane do jednej z czterech kategorii IOM: niedowaga, prawidłowe BMI, nadwaga lub otyłość.',
        'Każda kategoria odpowiada zalecanemu zakresowi całkowitego przyrostu oraz tygodniowemu tempu dla drugiego i trzeciego trymestru.',
        'Kalkulator przyjmuje również aktualną masę ciała i tydzień ciąży, aby określić, gdzie znajdujesz się względem szacowanego pasma.',
        'Ciąże pojedyncze i bliźniacze wykorzystują oddzielne cele przyrostu, ponieważ wymagania płodowe i łożyskowe znacznie się różnią.',
      ],
    },
    {
      type: 'title',
      text: 'Zalecenia IOM dotyczące przyrostu masy ciała według BMI sprzed ciąży',
      level: 3,
    },
    {
      type: 'table',
      headers: ['BMI sprzed ciąży', 'Kategoria', 'Całkowity przyrost ciąża pojedyncza', 'Całkowity przyrost ciąża bliźniacza', 'Tempo tygodniowe (tydz. 14-40)'],
      rows: [
        ['< 18,5', 'Niedowaga', '12,5-18 kg / 28-40 lb', 'Brak ustalonego zakresu IOM', '0,44-0,58 kg'],
        ['18,5-24,9', 'Prawidłowe BMI', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Nadwaga', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Otyłość', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Ważne:</strong> Są to zakresy przesiewowe na poziomie populacyjnym. Twój lekarz może ustalić spersonalizowany cel na podstawie historii żywieniowej, poprzednich ciąż, badań ultrasonograficznych wzrostu płodu lub schorzeń. Zawsze postępuj zgodnie z indywidualnymi zaleceniami swojego klinicysty.',
    },
    {
      type: 'title',
      text: 'Przyrost masy ciała w poszczególnych trymestrach',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pierwszy trymestr (tygodnie 1 to 13)',
          description: 'Oczekuje się skromnego przyrostu. Wiele kobiet przybiera bardzo niewiele lub nawet traci na wadze z powodu nudności.',
          points: [
            'Cel IOM: około 0,5 do 2 kg (1 do 4,4 lb) łącznie',
            'Nudności i awersje pokarmowe są częste i mogą ograniczać spożycie',
            'Zarodek i łożysko mają na tym etapie bardzo małą masę',
            'Skoncentruj się na jakości żywienia, a nie na ilości',
          ],
        },
        {
          title: 'Drugi trymestr (tygodnie 14 to 26)',
          description: 'Okres najbardziej równomiernego tygodniowego przyrostu. Apetyt zazwyczaj poprawia się po ustąpieniu nudności.',
          points: [
            'Tempo tygodniowe: około 0,23 do 0,58 kg w zależności od kategorii BMI',
            'Płód szybko rośnie pod względem długości i rozwoju narządów',
            'Objętość osocza wzrasta, przyczyniając się do masy ciała',
            'Zapotrzebowanie na żelazo i wapń znacznie wzrasta',
          ],
        },
        {
          title: 'Trzeci trymestr (tygodnie 27 to 40)',
          description: 'Przyrost masy ciała utrzymuje się w tempie podobnym do drugiego trymestru i może spowolnić pod koniec ciąży.',
          points: [
            'Odkładanie tkanki tłuszczowej u płodu znacznie wzrasta od 28. tygodnia',
            'Objętość płynu owodniowego osiąga szczyt około 34.-36. tygodnia',
            'Obrzęki i zatrzymanie płynów mogą przejściowo zawyżać odczyty',
            'Niektóre kobiety przybierają niewiele w ostatnich 1-2 tygodniach przed porodem',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Na co właściwie składa się przyrost masy ciała?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Składnik', 'Szacunkowa masa w terminie porodu'],
      rows: [
        ['Dziecko', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Łożysko', '0,7 kg / 1,5 lb'],
        ['Płyn owodniowy', '0,8 kg / 1,8 lb'],
        ['Macica (wzrost)', '0,9 kg / 2 lb'],
        ['Tkanka piersiowa', '0,5 kg / 1,1 lb'],
        ['Zwiększenie objętości krwi', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Płyn pozakomórkowy', '1,5 kg / 3,3 lb'],
        ['Rezerwy tłuszczu i białka matki', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Jak pokazuje to zestawienie, większość masy przybranej w zdrowej ciąży to tkanka funkcjonalna - płyny, krew, płód, łożysko i macica - a nie po prostu tłuszcz. Zrozumienie tego pomaga pojąć, dlaczego odpowiedni przyrost jest konieczny nawet u kobiet z nadwagą przed ciążą.',
    },
    {
      type: 'title',
      text: 'Wskazówki żywieniowe wspierające zdrowy przyrost masy ciała',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Dodaj około 340 kcal dziennie w drugim trymestrze i 450 kcal dziennie w trzecim trymestrze ponad zapotrzebowanie sprzed ciąży.',
        'Priorytetowo traktuj białko: dąż do co najmniej 70-80 g dziennie, aby wspierać wzrost tkanek płodu i zwiększenie objętości krwi matki.',
        'Spożywaj pokarmy bogate w żelazo (chude mięso, soczewica, wzbogacone płatki zbożowe), aby zapobiegać niedokrwistości, która jest częstsza w ciąży.',
        'Zapotrzebowanie na wapń wzrasta do 1000 mg dziennie - nabiał, wzbogacone napoje roślinne, migdały i zielone warzywa liściaste są dobrymi źródłami.',
        'Kwasy tłuszczowe omega-3 z tłustych ryb (2 porcje tygodniowo) lub suplementów z alg wspierają rozwój mózgu płodu.',
        'Kwas foliowy (400-600 mcg dziennie) zmniejsza ryzyko wad cewy nerwowej, szczególnie w pierwszym trymestrze.',
        'Utrzymuj dobre nawodnienie - dąż do około 2-3 litrów płynów dziennie, więcej w upalne dni lub podczas ćwiczeń.',
        'Ogranicz wysoko przetworzoną żywność, dodane cukry i tłuszcze trans, które przyczyniają się do nadmiernego przyrostu masy ciała.',
      ],
    },
    {
      type: 'title',
      text: 'Aktywność fizyczna i kontrola masy ciała w ciąży',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG zaleca co najmniej <strong>150 minut tygodniowo</strong> aktywności aerobowej o umiarkowanej intensywności dla kobiet z niepowikłaną ciążą. Regularne ćwiczenia wspomagają zdrowy przyrost masy ciała, zmniejszają ryzyko cukrzycy ciążowej i stanu przedrzucawkowego, poprawiają sen i łagodzą ból pleców. Spacery, pływanie, joga prenatalna i jazda na rowerze stacjonarnym są dobrze tolerowane przez całą ciążę. Zawsze konsultuj swój plan ćwiczeń z lekarzem przed rozpoczęciem lub kontynuowaniem intensywnej aktywności.',
    },
    {
      type: 'title',
      text: 'Sygnały ostrzegawcze związane ze zmianami masy ciała w ciąży',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Nagły przyrost powyżej 1 kg w ciągu jednego tygodnia, szczególnie po 20. tygodniu, może wskazywać na zatrzymanie płynów związane ze stanem przedrzucawkowym.',
        'Szybki obrzęk dłoni, twarzy lub kostek w połączeniu z bólem głowy lub zaburzeniami widzenia wymaga natychmiastowej pomocy medycznej.',
        'Uporczywa utrata masy ciała po pierwszym trymestrze lub niemożność utrzymania pokarmów lub płynów może wskazywać na hiperemesis gravidarum.',
        'Bardzo powolny lub zatrzymany przyrost masy ciała pomimo odpowiedniego spożycia może uzasadniać badanie ultrasonograficzne wzrostu płodu w celu oceny wewnątrzmacicznego zahamowania wzrostu.',
        'Każda niewyjaśniona zmiana masy ciała powinna być konsultowana z położnikiem lub położną, a nie zarządzana samodzielnie.',
      ],
    },
    {
      type: 'title',
      text: 'Ciąża pojedyncza a bliźniacza: kluczowe różnice',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ciąża pojedyncza',
          description: 'Jeden płód, jedno łożysko. Najczęstszy scenariusz z dobrze ustalonymi celami IOM.',
          points: [
            'Całkowity przyrost: 5 do 18 kg w zależności od BMI sprzed ciąży',
            'Równomierne tempo tygodniowe od 0,17 do 0,58 kg od 14. tygodnia',
            'Mniejsza nadwyżka kaloryczna (340-450 kcal/dzień)',
            'Wskaźnik porodów przedwczesnych: około 10%',
          ],
        },
        {
          title: 'Ciąża bliźniacza',
          description: 'Dwa płody, zazwyczaj wyższe wymagania pod każdym względem. Cele są wyższe we wszystkich kategoriach BMI.',
          points: [
            'Całkowity przyrost: 11 do 25 kg w zależności od BMI sprzed ciąży',
            'Wyższe tempo tygodniowe, szczególnie w drugim trymestrze',
            'Większe zapotrzebowanie kaloryczne i białkowe',
            'Zespoły kliniczne indywidualizują cele bardziej szczegółowo',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Często błędnie rozumiane aspekty prenatalnego przyrostu masy ciała',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Przyrost masy ciała to nie to samo co przyrost tkanki tłuszczowej. Większość przybranej masy to krew, płyny, łożysko i dziecko - a nie zmagazynowany tłuszcz.',
        'Jedzenie za dwoje nie oznacza podwajania spożycia. Dodatkowe zapotrzebowanie kaloryczne w drugim trymestrze to mniej więcej szklanka mleka i banan.',
        'Przekroczenie zalecanego zakresu nie oznacza automatycznie, że Ty lub Twoje dziecko jesteście zagrożeni - zakresy są wskazówkami statystycznymi, a nie absolutnymi progami.',
        'Kobiety z otyłością również muszą przybierać na wadze w ciąży. IOM nadal zaleca przyrost netto od 5 do 9 kg.',
        'Waga nie jest najważniejszym wskaźnikiem zdrowej ciąży - wzrost płodu, ciśnienie krwi, poziom cukru we krwi i oceny kliniczne mają większe znaczenie.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Body Mass Index - Wskaźnik Masy Ciała)',
          definition: 'Stosunek masy ciała do kwadratu wzrostu używany do klasyfikacji kategorii masy ciała. W opiece prenatalnej BMI sprzed ciąży określa odpowiedni zakres przyrostu masy ciała.',
        },
        {
          term: 'IOM (Institute of Medicine - Instytut Medycyny)',
          definition: 'Obecnie Narodowa Akademia Medycyny. W 2009 roku opublikowała przełomowe wytyczne dotyczące przyrostu masy ciała w ciąży, szeroko stosowane przez klinicystów na całym świecie.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Wiodąca amerykańska organizacja zawodowa w dziedzinie opieki położniczej i ginekologicznej. Popiera wytyczne IOM dotyczące przyrostu masy ciała i zapewnia dodatkowe wskazówki kliniczne.',
        },
        {
          term: 'Wiek ciążowy',
          definition: 'Wiek ciąży mierzony w tygodniach od pierwszego dnia ostatniej miesiączki. Ciąża donoszona trwa zazwyczaj od 39 do 40 tygodni.',
        },
        {
          term: 'Makrosomia',
          definition: 'Stan, w którym dziecko rośnie bardziej niż oczekiwano, zazwyczaj definiowany jako masa urodzeniowa powyżej 4 kg. Związana z nadmiernym przyrostem masy ciała w ciąży i cukrzycą ciążową.',
        },
        {
          term: 'Wewnątrzmaciczne zahamowanie wzrostu (IUGR)',
          definition: 'Stan, w którym płód rośnie wolniej niż oczekiwano. Może być związane z niewystarczającym przyrostem masy ciała, problemami z łożyskiem lub innymi czynnikami zdrowotnymi matki.',
        },
        {
          term: 'Stan przedrzucawkowy',
          definition: 'Powikłanie ciąży charakteryzujące się wysokim ciśnieniem krwi i oznakami uszkodzenia innych układów narządów. Nagły, szybki przyrost masy ciała spowodowany zatrzymaniem płynów jest jednym z możliwych sygnałów ostrzegawczych.',
        },
        {
          term: 'Hiperemesis gravidarum',
          definition: 'Ciężkie i uporczywe nudności i wymioty w czasie ciąży, wykraczające poza typowe poranne nudności, które mogą prowadzić do utraty masy ciała i odwodnienia oraz wymagają leczenia.',
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
    educationalWarningTitle: 'Ostrzeżenie edukacyjne',
    educationalWarningBody: 'Ten kalkulator służy wyłącznie do edukacji prenatalnej. Nie diagnozuje zdrowia matki ani płodu, nie zastępuje zindywidualizowanej porady medycznej i nie uwzględnia objawów, zatrzymania płynów, ryzyka cukrzycy, wzrostu płodu, historii żywieniowej ani celów wskazanych przez klinicystę.',
    inputsTitle: 'Profil ciąży',
    unitsLabel: 'Jednostki',
    metricLabel: 'Metryczne',
    imperialLabel: 'Imperialne',
    heightCmLabel: 'Wzrost (cm)',
    heightFtLabel: 'Wzrost (ft)',
    heightInLabel: 'Wzrost (in)',
    preWeightKgLabel: 'Masa ciała sprzed ciąży (kg)',
    currentWeightKgLabel: 'Aktualna masa ciała (kg)',
    preWeightLbLabel: 'Masa ciała sprzed ciąży (lb)',
    currentWeightLbLabel: 'Aktualna masa ciała (lb)',
    weekLabel: 'Tydzień ciąży',
    pregnancyTypeLabel: 'Rodzaj ciąży',
    singletonLabel: 'Pojedyncza',
    twinsLabel: 'Bliźniacza',
    bmiCardTitle: 'BMI sprzed ciąży',
    recommendationTitle: 'Zalecany przyrost',
    currentGainTitle: 'Aktualny przyrost',
    chartTitle: 'Krzywa prenatalnego przyrostu masy ciała',
    weekShortLabel: 'tydz.',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Zakres całkowity',
    weeklyRangeLabel: 'Tygodniowe tempo po 13. tygodniu',
    firstTrimesterLabel: 'Pierwszy trymestr: łączny przyrost około 0,5-2 kg',
    statusBelow: 'Poniżej szacowanego pasma',
    statusWithin: 'W szacowanym paśmie',
    statusAbove: 'Powyżej szacowanego pasma',
    statusBelowBody: 'Twój aktualny przyrost jest poniżej szacowanego pasma na ten tydzień. Zapytaj swojego klinicystę prenatalnego, czy należy zweryfikować odżywianie, nudności, wzrost płodu lub datowanie.',
    statusWithinBody: 'Twój aktualny przyrost mieści się w szacowanym paśmie na ten tydzień. Kontynuuj realizację swojego zindywidualizowanego planu prenatalnego.',
    statusAboveBody: 'Twój aktualny przyrost jest powyżej szacowanego pasma na ten tydzień. Omów trend ze swoim klinicystą, szczególnie jeśli przyrost jest nagły lub towarzyszą mu obrzęki bądź inne objawy.',
    categoryUnderweight: 'Niedowaga',
    categoryNormal: 'Prawidłowe BMI',
    categoryOverweight: 'Nadwaga',
    categoryObesity: 'Otyłość',
    totalGainSuffix: 'przyrost całkowity',
    perWeekSuffix: 'na tydzień',
    chartLowLabel: 'Dolne pasmo',
    chartHighLabel: 'Górne pasmo',
    chartCurrentLabel: 'Aktualny',
  },
};

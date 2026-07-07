import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Stoper Skurczy Porodowych';
export const description = 'Monitoruj czas trwania i częstotliwość skurczy za pomocą dużego przycisku dotykowego, oddychania z przewodnikiem, historii i alarmu wzorca 5-1-1.';

export const faq = [
  {
    question: 'Czym jest zasada 5-1-1 dla skurczy porodowych?',
    answer: 'Zasada 5-1-1 zazwyczaj oznacza, że skurcze występują co około 5 minut, trwają około 1 minuty i utrzymują się przez około 1 godzinę. Wiele zespołów położniczych używa jej jako praktycznego sygnału, by zadzwonić po poradę, ale Twój własny plan może być inny.',
  },
  {
    question: 'Kiedy powinnam skontaktować się z położną lub szpitalem?',
    answer: 'Skontaktuj się z zespołem położniczym, gdy skurcze staną się regularne, intensywne lub będą odpowiadać wskazówkom dotyczącym czasu, które otrzymałaś. Dzwoń pilnie w przypadku obfitego krwawienia, zmniejszonej ruchliwości płodu, gorączki, silnego bólu, odpłynięcia wód z niepokojącymi objawami lub jeśli czujesz, że coś jest nie tak.',
  },
  {
    question: 'Czy ten stoper diagnozuje aktywną fazę porodu?',
    answer: 'Nie. Rejestruje czasy i podkreśla powszechny wzorzec skurczy. Zmiany szyjki macicy, położenie płodu, stan błon płodowych, objawy i Twoja historia kliniczna wymagają oceny przez wykwalifikowanego lekarza.',
  },
  {
    question: 'Jak obliczana jest częstotliwość skurczy?',
    answer: 'Częstotliwość oblicza się od początku jednego skurczu do początku poprzedniego skurczu. Czas trwania oblicza się od momentu naciśnięcia start do momentu naciśnięcia stop.',
  },
  {
    question: 'Czy mogę go używać podczas porodu prodromalnego?',
    answer: 'Tak. Może pomóc Ci zobaczyć, czy skurcze stają się bardziej regularne czy zanikają. Jeśli skurcze pozostają nieregularne, zmieniają się po odpoczynku lub nawodnieniu albo nie nasilają się, mogą być nadal prodromalne, ale Twój zespół medyczny może Ci doradzić.',
  },
  {
    question: 'Dlaczego uwzględniono oddychanie z przewodnikiem?',
    answer: 'Powolne, równomierne oddychanie może pomóc zmniejszyć napięcie, skupić uwagę i wesprzeć radzenie sobie podczas każdego skurczu. Animacja służy wyłącznie jako pomoc w komforcie i nie zastępuje wsparcia podczas porodu.',
  },
  {
    question: 'Czy powinnam czekać na 5-1-1, jeśli to nie jest moje pierwsze dziecko?',
    answer: 'Nie zawsze. Poród może postępować szybciej po wcześniejszym porodzie drogami natury. Postępuj zgodnie z planem swojej położnej lub lekarza, zwłaszcza jeśli masz ciążę wysokiego ryzyka, mieszkasz daleko od szpitala lub miałaś wcześniej szybkie porody.',
  },
  {
    question: 'Czy moja historia skurczy jest zapisywana?',
    answer: 'Stoper przechowuje ostatnie zapisy w Twojej przeglądarce, dzięki czemu możesz odświeżyć stronę bez utraty sesji. Użyj przycisku resetowania, aby wyczyścić lokalną historię.',
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
    name: 'Rozpocznij pomiar czasu',
    text: 'Naciśnij główny przycisk, gdy zacznie się skurcz.',
  },
  {
    name: 'Skorzystaj z przewodnika oddychania',
    text: 'Podążaj za rozszerzającym się i kurczącym okręgiem, gdy skurcz jest aktywny.',
  },
  {
    name: 'Zatrzymaj pomiar czasu',
    text: 'Naciśnij przycisk ponownie, gdy skurcz się zakończy, aby zapisać czas trwania i odstęp.',
  },
  {
    name: 'Przeanalizuj wzorzec',
    text: 'Sprawdź historię i panel ostrzeżeń, aby zdecydować, czy skontaktować się z zespołem położniczym.',
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
  slug: 'stoper-skurczy-porodowych',
  faqTitle: 'Często zadawane pytania',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Najważniejsze informacje o pomiarze czasu skurczy',
      items: [
        'Czas trwania mierzy się od początku skurczu do jego końca.',
        'Częstotliwość mierzy się od początku jednego skurczu do początku następnego.',
        'Wzorzec 5-1-1 oznacza około 5 minut odstępu, 1 minutę trwania, przez 1 godzinę.',
        'Pomiar czasu skurczy wspomaga podejmowanie decyzji, ale sam nie potwierdza rozwarcia szyjki macicy ani aktywnej fazy porodu.',
        'Zawsze postępuj zgodnie z zaleceniami swojej położnej, lekarza lub oddziału położniczego.',
      ],
    },
    {
      type: 'title',
      text: 'Stoper Skurczy Porodowych: Monitoruj Czas Trwania, Częstotliwość i Wzorce 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Stoper skurczy pomaga rodzinom przekształcić stresujący, trudny do oceny moment w przejrzysty zapis. Pod koniec ciąży często zastanawiamy się, czy skurcze to wciąż nieregularne skurcze ćwiczeniowe, poród prodromalny, wczesny poród czy wzorzec, który zasługuje na telefon na oddział położniczy. Naciskając start, gdy zaczyna się skurcz, i stop, gdy się kończy, to narzędzie oblicza <strong>czas trwania</strong> w sekundach i <strong>częstotliwość</strong> w minutach od początku jednego skurczu do początku następnego.',
    },
    {
      type: 'paragraph',
      html: 'Celem nie jest diagnozowanie porodu. Celem jest pomoc w opisaniu tego, co się dzieje, w konkretnych kategoriach: jak długo trwa każdy skurcz, jak często występują, czy wzorzec się nasila i czy utrzymuje się wystarczająco długo, aby odpowiadać powszechnym wytycznym, takim jak zasada 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Powszechny sygnał częstotliwości' },
        { value: '60 s', label: 'Typowy czas trwania 5-1-1' },
        { value: '1 godz.', label: 'Okno stabilności wzorca' },
      ],
    },
    {
      type: 'title',
      text: 'Jak interpretować alarm 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zasada 5-1-1 to szeroko stosowana reguła praktyczna: skurcze występują co około 5 minut, trwają około 1 minuty i utrzymują się przez około 1 godzinę. Wiele zespołów porodowych używa tego wzorca jako praktycznego sygnału, by zadzwonić po indywidualną poradę, zwłaszcza przy pierwszym porodzie. Ten stoper podświetla wzorzec, gdy ostatnie skurcze są w odstępach 5 minut lub krótszych, trwają co najmniej 60 sekund i utrzymywały się przez cały czas sesji.',
    },
    {
      type: 'table',
      headers: ['Obserwowany wzorzec', 'Co może sugerować', 'Przydatny następny krok'],
      rows: [
        ['Nieregularny rytm, zmienna długość', 'Możliwy poród prodromalny lub wczesny', 'Odpocznij, nawodnij się, zmień pozycję i obserwuj, chyba że masz objawy ostrzegawcze'],
        ['Skurcze zbliżają się, ale wciąż poniżej 60 sekund', 'Poród może postępować, ale jeszcze nie spełnia 5-1-1', 'Kontynuuj pomiar czasu i postępuj zgodnie z instrukcjami swojego planu porodu'],
        ['Około 5 min odstępu, 60 s trwania, przez około 1 godz.', 'Powszechny wzorzec wezwania 5-1-1', 'Skontaktuj się z położną, lekarzem lub oddziałem położniczym w celu uzyskania indywidualnych wskazówek'],
        ['Nagłe intensywne skurcze, ucisk lub potrzeba parcia', 'Poród może szybko postępować', 'Zadzwoń natychmiast, zwłaszcza jeśli to nie jest Twoje pierwsze dziecko'],
      ],
    },
    {
      type: 'title',
      text: 'Jak prawidłowo mierzyć czas skurczy',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Naciśnij start na początku uczucia napinania, skurczu lub fali.',
        'Naciśnij stop, gdy skurcz wyraźnie ustępuje i możesz się ponownie zrelaksować.',
        'Nie mierz częstotliwości od końca jednego skurczu do początku następnego. Klinicznie częstotliwość liczy się od początku do początku.',
        'Zarejestruj kilka skurczy, zanim zinterpretujesz wzorzec, ponieważ pojedynczy skurcz może być mylący.',
        'Najpierw użyj zaleceń swojego zespołu położniczego, jeśli podali Ci inny próg niż 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Poród prodromalny a wzorce porodu aktywnego',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Często prodromalny lub wczesny poród',
          description: 'Skurcze mogą być niekomfortowe i prawdziwe, ale wzorzec może jeszcze nie zmierzać stale w kierunku porodu.',
          points: [
            'Odstępy skaczą zamiast stale się skracać',
            'Skurcze mogą łagodnieć po odpoczynku, nawodnieniu, kąpieli lub zmianie pozycji',
            'Intensywność może pozostawać podobna, zamiast narastać w czasie',
            'Szyjka macicy może zmieniać się powoli lub jeszcze niewiele, co może ocenić tylko lekarz',
          ],
        },
        {
          title: 'Bardziej sugerujący aktywny poród',
          description: 'Wzorzec staje się bardziej regularny, trudniej przez niego mówić i coraz silniejszy.',
          points: [
            'Skurcze zbliżają się do siebie w ciągu kilku pomiarów',
            'Każdy skurcz trwa około 45 do 70 sekund lub dłużej',
            'Musisz się zatrzymać, oddychać lub skupić podczas szczytu',
            'Wzorzec utrzymuje się nawet po odpoczynku, nawodnieniu lub zmianie pozycji',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kiedy nie czekać na stoper',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Uwaga dotycząca bezpieczeństwa:</strong> Nie czekaj na alarm stopera, jeśli masz obfite krwawienie, zmniejszoną ruchliwość płodu, silny ból głowy, gorączkę, zielony lub cuchnący płyn, intensywny stały ból, objawy stanu przedrzucawkowego lub jakiekolwiek pilne obawy. Zadzwoń do swojego zespołu położniczego lub służb ratunkowych zgodnie z lokalnymi instrukcjami.',
    },
    {
      type: 'title',
      text: 'Co pokazuje historia',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Czas rozpoczęcia: godzina zegarowa, o której rozpoczął się skurcz.',
        'Czas trwania: czas zakończenia minus czas rozpoczęcia, zaokrąglony do sekund.',
        'Odstęp: bieżący czas rozpoczęcia minus czas rozpoczęcia poprzedniego skurczu, pokazany w minutach.',
        'Ostatni trend: czy skurcze się oddalają, pozostają nieregularne czy stają się bardziej regularne.',
      ],
    },
    {
      type: 'title',
      text: 'Częste błędy w pomiarze czasu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Zatrzymanie stopera na szczycie zamiast wtedy, gdy skurcz całkowicie ustępuje.',
        'Rozpoczęcie z opóźnieniem, ponieważ skurcz był początkowo łagodny, przez co czas trwania wydaje się krótszy.',
        'Liczenie tylko najsilniejszych skurczy i ignorowanie mniejszych pomiędzy nimi.',
        'Zakładanie, że 5-1-1 zawsze oznacza natychmiastowe przyjęcie do szpitala. Zazwyczaj oznacza to wezwanie po poradę, a nie samodzielne diagnozowanie aktywnego porodu.',
        'Zbyt długie czekanie przy drugim lub kolejnym porodzie, gdzie postęp może być szybszy niż przy pierwszym porodzie.',
      ],
    },
    {
      type: 'title',
      text: 'Ograniczenia kliniczne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pomiar czasu skurczy to tylko jeden z elementów oceny porodu. Rozwarcie szyjki macicy, dobrostan płodu, radzenie sobie z bólem, pęknięcie błon płodowych, wiek ciążowy, historia poprzednich porodów, status paciorkowca grupy B, odległość do szpitala, czynniki ryzyka ciąży i objawy matczyne mogą wpłynąć na to, co zaleca Twój zespół. Używaj historii jako przejrzystego zapisu do udostępnienia swojej położnej, lekarzowi, douli lub pielęgniarce triażowej.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Czas trwania',
          definition: 'Długość jednego skurczu, mierzona od momentu jego rozpoczęcia do zakończenia.',
        },
        {
          term: 'Częstotliwość',
          definition: 'Czas od początku jednego skurczu do początku następnego skurczu.',
        },
        {
          term: 'Zasada 5-1-1',
          definition: 'Powszechny wzorzec pomiaru czasu porodu: skurcze co około 5 minut, trwające około 1 minuty, utrzymujące się przez około 1 godzinę.',
        },
        {
          term: 'Poród prodromalny',
          definition: 'Okres prawdziwych skurczy, które mogą być nieprzyjemne i nawracające, ale nie zawsze przechodzą stale w aktywną fazę porodu.',
        },
        {
          term: 'Aktywny poród',
          definition: 'Faza porodu z silniejszymi, bardziej regularnymi skurczami i zmianami szyjki macicy, potwierdzona oceną kliniczną.',
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
    safetyTitle: 'Używaj ze swoim planem porodu',
    safetyBody: 'Ten stoper służy do monitorowania i edukacji. Skontaktuj się ze swoją położną, lekarzem lub oddziałem położniczym, jeśli masz wątpliwości, objawy Cię niepokoją lub otrzymałaś inne instrukcje.',
    idleStatus: 'Gotowy do pomiaru następnego skurczu',
    activeStatus: 'Skurcz w toku',
    accidentalTapStatus: 'Zbyt krótki',
    shortRecordLabel: 'Krótkie lub testowe dotknięcie',
    activeRowLabel: 'Aktywny teraz',
    startButton: 'Rozpocznij skurcz',
    stopButton: 'Zatrzymaj skurcz',
    activeLabel: 'Aktywny skurcz',
    breathingLabel: 'Oddychaj powoli',
    breatheIn: 'Wdech',
    breatheOut: 'Wydech',
    currentDurationLabel: 'Bieżący czas trwania',
    lastIntervalLabel: 'Ostatni odstęp',
    contractionCountLabel: 'Zarejestrowano',
    patternStatusTitle: 'Stan wzorca',
    patternStatusIdle: 'Gotowy do rejestracji',
    patternStatusTracking: 'Kontynuuj rejestrację',
    patternStatusBuilding: 'Wzorzec narasta',
    patternStatusCall: 'Zadzwoń do zespołu położniczego',
    patternStatusActiveBody: 'Rozpoczęłaś rejestrację. Potrzeba jeszcze kilku skurczy, zanim wzorzec stanie się znaczący.',
    patternStatusBuildingBody: 'Ostatnie skurcze zbliżają się lub trwają dłużej. Kontynuuj pomiar czasu i przygotuj się do wezwania, jeśli się utrzymają.',
    patternStatusCallBody: 'Ostatnie skurcze zbliżają się do wzorca 5-1-1. Skontaktuj się teraz ze swoją położną, lekarzem lub oddziałem położniczym w celu uzyskania indywidualnych wskazówek.',
    averageLastThreeLabel: 'Średnia z 3 ostatnich',
    averageLastSixLabel: 'Średnia z 6 ostatnich',
    regularityLabel: 'Regularność',
    regularityNotEnough: 'Za mało danych',
    regularityIrregular: 'Nieregularne',
    regularityVariable: 'Zmienne',
    regularityRegular: 'Regularne',
    summaryTitle: 'Podsumowanie dla telefonu',
    summaryEmpty: 'Zarejestruj co najmniej trzy skurcze, aby stworzyć użyteczne podsumowanie dla swojego zespołu położniczego.',
    copySummaryButton: 'Kopiuj podsumowanie',
    copiedSummaryButton: 'Skopiowano',
    undoButton: 'Cofnij ostatni',
    sessionOverviewTitle: 'Przegląd sesji',
    sessionOverviewBody: 'Rozpocznij pomiar czasu, gdy zacznie się skurcz. Aktywny skurcz pojawi się tutaj natychmiast.',
    lastContractionLabel: 'Ostatni skurcz',
    historyTitle: 'Historia skurczy',
    emptyHistory: 'Nie zarejestrowano jeszcze żadnych skurczy.',
    startTimeHeader: 'Czas rozpoczęcia',
    durationHeader: 'Czas trwania',
    intervalHeader: 'Odstęp',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Resetuj',
    alertTitle: 'Wykryto wzorzec 5-1-1',
    alertBody: 'Twoje ostatnie skurcze zbliżają się do powszechnego wzorca 5-1-1. Rozważ skontaktowanie się teraz z położną lub oddziałem położniczym w celu uzyskania indywidualnej porady.',
    patternTitle: 'Co sprawdza alarm',
    patternBody: 'Panel pojawia się, gdy ostatnie skurcze są w odstępach 5 minut lub krótszych, trwają co najmniej 60 sekund i utrzymują ten wzorzec przez około 1 godzinę.',
  },
};

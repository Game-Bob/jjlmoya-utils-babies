import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-rozmiarow-niemowlecych';
const title = 'Kalkulator Rozmiarów Niemowlęcych';
const description = 'Przeliczaj rozmiary ubrań niemowlęcych między Zara, H&M, Primark, Carter\'s, Kiabi, Mango i Mayoral. Wprowadź wzrost i wagę, aby uzyskać dokładny rozmiar każdej marki.';
const faq = [
  {
    question: 'Jak sprawdzić, jaki rozmiar ubrania odpowiada mojemu dziecku?',
    answer: 'Najbardziej wiarygodnym punktem odniesienia jest wzrost dziecka. Europejskie rozmiary (50, 56, 62...) odpowiadają bezpośrednio wzrostowi w centymetrach. Wprowadź wzrost i wagę dziecka do kalkulatora, aby uzyskać rozmiar zalecany przez każdą markę.',
  },
  {
    question: 'Dlaczego rozmiary tak bardzo różnią się między markami?',
    answer: 'Każda marka ma własny wzorzec kroju. H&M i Primark mają tendencję do zawyżania rozmiarów, podczas gdy Carter\'s i Mayoral mają fasony bardziej dopasowane. Zawsze kieruj się wymiarami dziecka, a nie tylko wiekiem.',
  },
  {
    question: 'Jaki rozmiar wybrać, jeśli dziecko jest między dwoma rozmiarami?',
    answer: 'Zawsze wybieraj większy rozmiar. Niemowlęta rosną bardzo szybko, a większy rozmiar gwarantuje dłuższą trwałość i większy komfort.',
  },
  {
    question: 'Czy rozmiary w calach działają tak samo?',
    answer: 'Amerykańskie marki, takie jak Carter\'s, używają cali i wagi jako punktu odniesienia. Kalkulator automatycznie pokazuje odpowiedniki w systemie imperialnym, jeśli go aktywujesz.',
  },
];
const howTo = [
  {
    name: 'Wprowadź wzrost dziecka',
    text: 'Użyj suwaka lub przycisków, aby ustawić aktualny wzrost dziecka w centymetrach lub calach.',
  },
  {
    name: 'Wprowadź wagę dziecka',
    text: 'Dostosuj wagę w kg lub funtach, aby uściślić wyniki, ponieważ niektóre marki używają wagi jako uzupełniającego punktu odniesienia.',
  },
  {
    name: 'Wybierz markę',
    text: 'Wybierz markę odzieżową, aby zobaczyć sugerowany rozmiar i szacunkowe wymiary ubrania.',
  },
  {
    name: 'Sprawdzanie odpowiedników',
    text: 'W prawym panelu zobaczysz zestawienie odpowiednich rozmiarów wszystkich dostępnych marek.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Wymiary dziecka',
    labelResults: 'Szacunkowe odpowiedniki',
    labelHeight: 'Wzrost dziecka',
    labelWeight: 'Aktualna waga dziecka',
    labelPresets: 'Ustawienia dla typowego wieku',
    unitMetric: 'Metryczny (cm/kg)',
    unitImperial: 'Imperialny (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marka i Fason',
    labelSuggested: 'Sugerowany rozmiar',
    labelChest: 'Klatka piersiowa',
    labelWaist: 'Talia',
    labelGarmentMeasures: 'Szacunkowe wymiary ubrania',
    fitRegular: 'Fason regularny',
    fitLarge: 'Fason luźny',
    fitSmall: 'Fason dopasowany',
    tipTitle: 'Porada eksperta',
    tipText: 'Niemowlęta rosną skokowo w bardzo szybkim tempie. Jeśli wynik jest na granicy dwóch rozmiarów, zawsze wybieraj większy, aby zapewnić trwałość i wygodę dziecka.',
    shareAriaLabel: 'Udostępnij rozmiar',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Źródła',
  },
  seo: [
    { type: 'title', text: 'Przewodnik po rozmiarach niemowlęcych: Zara, H&M, Primark i marki międzynarodowe', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Miesięczny przyrost' },
      { value: '3 miesiące', label: 'Czas trwania rozmiaru' },
      { value: '95%', label: 'Wiarygodność wg wzrostu' },
    ]},
    { type: 'tip', html: 'Zawsze używaj wzrostu jako głównego odniesienia przy wyborze rozmiaru, a nie wieku. Dwoje dzieci w tym samym wieku może różnić się wzrostem nawet o 8–10 cm, co oznacza przeskok o cały rozmiar.' },
    { type: 'title', text: 'Rozmiary wg wieku, wzrostu i wagi', level: 3 },
    { type: 'table', headers: ['Ok. wiek', 'Wzrost (cm)', 'Waga (kg)', 'Typowy rozmiar', 'Szacowany czas'], rows: [
      ['Noworodek', '50–56', '3–4.5', '50 / RN', '4–6 tygodni'],
      ['1–3 miesiące', '56–62', '4.5–6', '56–62', '6–8 tygodni'],
      ['3–6 miesięcy', '62–68', '6–8', '62–68', '6–8 tygodni'],
      ['6–9 miesięcy', '68–74', '8–9.5', '68–74', '6–8 tygodni'],
      ['9–12 miesięcy', '74–80', '9.5–11', '74–80', '6–8 tygodni'],
      ['12–18 miesięcy', '80–86', '11–13', '80–86', '3–4 miesiące'],
      ['18–24 miesiące', '86–92', '13–15', '86–92', '3–4 miesiące'],
    ]},
    { type: 'title', text: 'Marki zawyżające vs zaniżające rozmiary', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Rozmiary duże (wybierz mniejszy)',
        description: 'Te marki stosują luźniejsze kroje; wybierz rozmiar mniejszy niż zazwyczaj.',
        points: [
          'H&M: często o rozmiar większe',
          'Primark: ogólnie luźny fason',
          'Lupilu (Lidl): luźny krój',
          'Polecane dla dzieci o niskim centylu',
        ],
      },
      {
        title: 'Rozmiary małe (wybierz większy)',
        description: 'Te marki stosują bardziej dopasowane fasony; wybierz rozmiar większy niż zazwyczaj.',
        points: [
          "Carter's: amerykański dopasowany fason",
          'Mayoral: europejski fason slim',
          'Neck & Neck: zaniżona rozmiarówka',
          'Polecane dla dzieci o wysokim centylu',
        ],
      },
    ]},
    { type: 'title', text: 'Klucze do trafnego wyboru rozmiaru', level: 3 },
    { type: 'list', items: [
      'Zawsze mierz dziecko przed zakupem, nie ufaj tylko wiekowi',
      'Jeśli wymiary są na granicy dwóch rozmiarów, wybierz większy',
      'Pamiętaj o miejscu na pieluszkę w ubrankach jednoczęściowych',
      'Europejskie rozmiary (50, 56, 62...) odpowiadają wzrostowi w cm',
      'Zawsze pierz przed użyciem: bawełna może skurczyć się do 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Rozmiar 50 / Noworodek',
        definition: 'Przeznaczony dla dzieci do 50 cm wzrostu i ok. 3.5 kg. Wiele dzieci wyrasta z niego bardzo szybko, nawet w pierwszych tygodniach.',
      },
      {
        term: 'Długość stanu',
        definition: 'Odległość od kroku do pasa. Kluczowa w bodach i pajacykach: zbyt krótki stan ogranicza ruchy dziecka, nawet jeśli reszta ubranka pasuje.',
      },
      {
        term: 'Odniesienie wg wagi',
        definition: "Niektóre amerykańskie marki, jak Carter's, używają wagi jako głównego odniesienia. Przydatne dla dzieci o proporcjach wykraczających poza standardowe centyle.",
      },
      {
        term: 'Zapięcie kopertowe',
        definition: 'Konstrukcja dekoltu w bodach i koszulkach, która pozwala na zdejmowanie ubranka przez dół, zamiast przez głowę. Niezbędne w pierwszych miesiącach.',
      },
    ]},
    { type: 'summary', title: 'O czym warto pamiętać', items: [
      'Wzrost jest bardziej wiarygodnym wskaźnikiem niż wiek przy wyborze rozmiaru.',
      "H&M i Primark zaniżają rozmiary; Carter's i Mayoral mają fasony dopasowane.",
      'Jednostki europejskie (50, 56, 62...) odpowiadają wzrostowi w cm.',
      'W przypadku granicznych wymiarów wybór większego rozmiaru to gwarancja trwałości.',
      'Dekolt kopertowy i luz w kroku to kluczowe detale zapewniające wygodę.',
    ]},
  ],
  faqTitle: "Często zadawane pytania",
  faq,
  bibliographyTitle: "Źródła",
  bibliography: [
    {
      name: 'Zara - Przewodnik po rozmiarach dziecięcych',
      url: 'https://www.zara.com/pl/pl/size-guide.html',
    },
    {
      name: 'H&M - Przewodnik po rozmiarach niemowlęcych',
      url: 'https://www2.hm.com/pl_pl/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - Standardy wzrostu dziecka',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Przewodnik po rozmiarach',
      url: 'https://www.mayoral.com/pl-pl/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

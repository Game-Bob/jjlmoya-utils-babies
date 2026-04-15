import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'storleksguide-bebis';
const title = 'Storleksguide för Bebis';
const description = 'Konvertera babystorlekar mellan Zara, H&M, Primark, Carter\'s, Kiabi, Mango och Mayoral. Ange längd och vikt för att få exakt storlek för varje märke.';
const faq = [
  {
    question: 'Hur vet jag vilken klädstorlek som passar min bebis?',
    answer: 'Det mest pålitliga är att använda bebisens längd som huvudreferens. Europeiska storlekar (50, 56, 62...) motsvarar direkt längden i centimeter. Ange bebisens längd och vikt i omvandlaren för att få den rekommenderade storleken för varje märke.',
  },
  {
    question: 'Varför varierar storlekarna så mycket mellan olika märken?',
    answer: 'Varje märke har sitt eget mönster. H&M och Primark tenderar att vara stora i storleken, medan Carter\'s och Mayoral har en smalare passform. Använd alltid bebisens mått, inte bara åldern.',
  },
  {
    question: 'Vilken storlek ska jag välja om bebisen ligger mellan två storlekar?',
    answer: 'Välj alltid den större storleken. Bebisar växer väldigt snabbt och en större storlek garanterar längre hållbarhet och bättre komfort.',
  },
  {
    question: 'Fungerar storlekar i tum på samma sätt?',
    answer: 'Amerikanska märken som Carter\'s använder tum och vikt som referens. Omvandlaren visar dig automatiskt motsvarande storlekar i det imperiala systemet om du aktiverar det.',
  },
];
const howTo = [
  {
    name: 'Ange bebisens längd',
    text: 'Använd skjutreglaget eller knapparna för att justera bebisens aktuella längd i centimeter eller tum.',
  },
  {
    name: 'Ange bebisens vikt',
    text: 'Justera vikten i kg eller lbs för att förfina resultatet, eftersom vissa märken använder vikt som en kompletterande referens.',
  },
  {
    name: 'Välj ett märke',
    text: 'Välj klädmärke för att se den föreslagna storleken och plaggets uppskattade mått.',
  },
  {
    name: 'Se motsvarigheter',
    text: 'I den högra panelen ser du de motsvarande storlekarna för alla tillgängliga märken på ett ögonblick.',
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
  inLanguage: 'sv',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Bebisens mått',
    labelResults: 'Uppskattade motsvarigheter',
    labelHeight: 'Bebisens längd',
    labelWeight: 'Bebisens aktuella vikt',
    labelPresets: 'Förinställningar efter typisk ålder',
    unitMetric: 'Metriskt (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Märke och passform',
    labelSuggested: 'Föreslagen storlek',
    labelChest: 'Bröst',
    labelWaist: 'Midja',
    labelGarmentMeasures: 'Plaggets uppskattade mått',
    fitRegular: 'Normal passform',
    fitLarge: 'Rymlig passform',
    fitSmall: 'Smal passform',
    tipTitle: 'Experttips',
    tipText: 'Bebisar växer i väldigt snabba utvecklingsfaser. Om resultatet ligger på gränsen till en storlek, välj alltid den större storleken för att garantera hållbarhet och bebisens komfort.',
    shareAriaLabel: 'Dela storlek',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser',
  },
  seo: [
    { type: 'title', text: 'Storleksguide bebis: Zara, H&M, Primark och internationella märken', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Månadsvis tillväxt' },
      { value: '3 månader', label: 'Varaktighet per storlek' },
      { value: '95%', label: 'Tillförlitlighet per längd' },
    ]},
    { type: 'tip', html: 'Använd alltid längden som huvudreferens för att välja storlek, inte åldern. Två bebisar i samma ålder kan skilja sig upp till 8–10 cm i längd, vilket innebär ett helt storlekshopp.' },
    { type: 'title', text: 'Storlekar efter ålder, längd och vikt', level: 3 },
    { type: 'table', headers: ['Ungefärlig ålder', 'Längd (cm)', 'Vikt (kg)', 'Vanlig storlek', 'Uppskattad tid'], rows: [
      ['Nyfödd', '50–56', '3–4.5', '50 / RN', '4–6 veckor'],
      ['1–3 månader', '56–62', '4.5–6', '56–62', '6–8 veckor'],
      ['3–6 månader', '62–68', '6–8', '62–68', '6–8 veckor'],
      ['6–9 månader', '68–74', '8–9.5', '68–74', '6–8 veckor'],
      ['9–12 månader', '74–80', '9.5–11', '74–80', '6–8 veckor'],
      ['12–18 månader', '80–86', '11–13', '80–86', '3–4 månader'],
      ['18–24 månader', '86–92', '13–15', '86–92', '3–4 månader'],
    ]},
    { type: 'title', text: 'Märken som är stora vs små i storleken', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Stora i storleken (välj en mindre storlek)',
        description: 'Dessa märken använder rymligare snitt; välj en storlek mindre än vanligt.',
        points: [
          'H&M: ofta en storlek större än normalt',
          'Primark: allmänt rymlig passform',
          'Lupilu (Lidl): ledig passform',
          'Rekommenderas för bebisar i lägre percentiler',
        ],
      },
      {
        title: 'Små i storleken (välj en större storlek)',
        description: 'Dessa märken använder snävare snitt; välj en storlek större än vanligt.',
        points: [
          "Carter's: amerikansk snäv passform",
          'Mayoral: europeisk smal passform',
          'Neck & Neck: små storlekar',
          'Rekommenderas för bebisar i högre percentiler',
        ],
      },
    ]},
    { type: 'title', text: 'Nycklar för att hitta rätt storlek', level: 3 },
    { type: 'list', items: [
      'Mät alltid bebisen före köp, lita inte bara på åldern',
      'Om bebisen är mellan två storlekar, välj den större',
      'Tänk på utrymme för blöjan i helkroppsplagg',
      'Europeiska storlekar (50, 56, 62...) motsvarar längden i cm',
      'Tvätta alltid före användning: bomull kan krympa upp till 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Storlek 50 / Nyfödd',
        definition: 'Avsedd för bebisar upp till 50 cm långa och ca 3.5 kg. Många bebisar växer ur den väldigt snabbt, till och med under de första veckorna.',
      },
      {
        term: 'Grenmått',
        definition: 'Avståndet från grenen till midjan. Avgörande i bodies och sparkdräkter: ett kort grenmått begränsar bebisens rörlighet även om resten av plagget passar bra.',
      },
      {
        term: 'Referens efter vikt',
        definition: "Vissa amerikanska märken som Carter's använder vikt som huvudreferens. Praktiskt för bebisar med proportioner utanför standardpercentilen.",
      },
      {
        term: 'Omlottöppning',
        definition: 'Design av halsringningen på bodies och tröjor som gör det möjligt att klä på bebisen genom att dra plagget nedåt istället för över huvudet. Oumbärligt under de första månaderna.',
      },
    ]},
    { type: 'summary', title: 'Vad du bör komma ihåg', items: [
      'Längden är den mest pålitliga indikatorn för att välja storlek, mer än åldern.',
      "H&M och Primark tenderar att vara stora; Carter's och Mayoral är små i storleken.",
      'Numeriska europeiska storlekar (50, 56, 62...) motsvarar längden i cm.',
      'Vid gränsfall, välj den större storleken för längre användningstid.',
      'Omlottöppning och rymligt grenmått är nyckeldetaljer för komfort.',
    ]},
  ],
  faqTitle: "Vanliga frågor",
  faq,
  bibliographyTitle: "Referenser",
  bibliography: [
    {
      name: 'Zara - Storleksguide barn',
      url: 'https://www.zara.com/se/sv/size-guide.html',
    },
    {
      name: 'H&M - Storleksguide bebis',
      url: 'https://www2.hm.com/se_sv/kundservice/storleksguide.html',
    },
    {
      name: 'WHO - Tillväxtstandarder barn',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Storleksguide',
      url: 'https://www.mayoral.com/se-sv/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

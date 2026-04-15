import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'percentilberaknare-bebis';
const title = 'WHO Percentilberäknare för Bebisar';
const description = 'Beräkna percentilen för vikt, längd och BMI för din bebis enligt WHO:s tabeller (0-5 år).';
const faq = [
  {
    question: 'Vad betyder den 50:e percentilen?',
    answer: 'Den 50:e percentilen indikerar att bebisen ligger exakt på medianen, vilket innebär att hälften av alla bebisar i samma ålder och av samma kön väger eller mäter mer, och den andra hälften mindre. Det betyder inte att det är det ideala värdet, utan det centrala värdet i fördelningen.',
  },
  {
    question: 'Är en låg percentil tecken på problem?',
    answer: 'Inte nödvändigtvis. En låg percentil (t.ex. P10) kan vara helt normal om den håller sig stabil över tid. Det viktiga är tillväxttrenden, inte ett enskilt värde. Konsultera alltid din barnläkare.',
  },
  {
    question: 'Vilka tillväxtkurvor använder denna beräknare?',
    answer: 'Denna beräknare använder tillväxtstandarder från Världshälsoorganisationen (WHO) för barn 0-5 år, baserat på Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Vad är BMI för bebisar?',
    answer: 'Body Mass Index (BMI) för bebisar är förhållandet mellan vikt och längden i kvadrat. BMI-percentiler för bebisar skiljer sig från de för vuxna och måste tolkas med de specifika tabellerna för varje ålder och kön.',
  },
  {
    question: 'Hur ofta ska jag mäta min bebis?',
    answer: 'Under de första månaderna kontrollerar barnläkaren vanligtvis tillväxten vid varje besök. Hemma kan du registrera vikt och längd månadsvis för att observera tillväxttrenden.',
  },
];
const howTo = [
  {
    name: 'Välj bebisens kön',
    text: 'Välj mellan pojke eller flicka för att tillämpa motsvarande WHO-tabeller.',
  },
  {
    name: 'Ange ålder',
    text: 'Använd skjutreglaget eller pilarna för att ange ålder i månader (0-60 månader).',
  },
  {
    name: 'Ange vikt och längd',
    text: 'Skriv in vikten i kilogram och längden i centimeter.',
  },
  {
    name: 'Se percentilerna',
    text: 'Percentilerna för vikt, längd och BMI beräknas automatiskt enligt WHO:s tabeller.',
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
  inLanguage: 'sv',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Mätdata',
    labelSex: 'Bebisens kön',
    sexBoy: 'Pojke',
    sexGirl: 'Flicka',
    unitMonths: 'Endast månader',
    unitYearsMonths: 'År + månader',
    labelWeight: 'Vikt (kg)',
    labelHeight: 'Längd (cm)',
    btnAddHistory: 'Lägg till i min historik',
    btnClearHistory: 'Rensa data',
    labelDashboard: 'Tillväxtöversikt',
    labelWeight2: 'Vikt',
    labelHeight2: 'Längd',
    labelBMI: 'BMI',
    labelCalculating: 'Beräknar...',
    disclaimer: 'Percentiler är endast ett statistiskt verktyg. Konsultera alltid din barnläkare för att tolka resultaten.',
    labelLowRange: 'Lågt intervall',
    labelLowNormal: 'Normalt lågt',
    labelNormal: 'Normalitet',
    labelHighNormal: 'Normalt högt',
    labelHighRange: 'Högt intervall',
    alertOutOfRange: 'Värde utanför intervallen P3-P97. Konsultera din barnläkare.',
    labelMonths: 'Månader',
    labelYears: 'År',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO Percentilberäknare: Guide för att förstå din bebis tillväxt',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 nycklar för att tolka din bebis percentiler',
      items: [
        'Ingen enskild percentil definierar din bebis hälsa: det viktiga är trenden över tid.',
        'Percentiler mellan P3 och P97 anses ligga inom det statistiskt normala intervallet.',
        'BMI för bebisar följer egna kurvor och ska inte jämföras med referensvärden för vuxna.',
        'WHO-kurvorna är baserade på bebisar uppfödda under optimala förhållanden, inklusive enbart bröstmjölk under de första månaderna.',
        'Dela alltid tillväxtjournaler med din barnläkare för en adekvat klinisk tolkning.',
      ],
    },
    {
      type: 'title',
      text: 'Hur du mäter din bebis korrekt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Väg bebisen utan kläder och om möjligt alltid på samma våg.',
        'Mät längden i liggande position upp till 24 månader.',
        'Från 2 års ålder, mät längden i stående position.',
        'Utför mätningarna vid samma tid på dygnet för bättre konsekvens.',
      ],
    },
    {
      type: 'tip',
      html: 'En percentil under P3 innebär inte automatiskt ett hälsoproblem. Det viktigaste är att observera om tillväxtkurvan bibehåller sin trend över tid.',
    },
    {
      type: 'title',
      text: 'Tolkning av percentiler',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentil', 'Tolkning', 'Rekommenderad åtgärd'],
      rows: [
        ['P97 eller högre', 'Högt intervall', 'Diskutera med barnläkaren vid nästa besök'],
        ['P85 till P97', 'Normalt högt', 'Normal uppföljning'],
        ['P15 till P85', 'Normalitet', 'Ingen speciell åtgärd krävs'],
        ['P3 till P15', 'Normalt lågt', 'Normal uppföljning'],
        ['P3 eller lägre', 'Lågt intervall', 'Konsultera barnläkaren'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs. Orbegozo kurvor',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO kurvor',
          description: 'Internationell standard baserad på bebisar från 6 länder uppfödda under optimala förhållanden.',
          points: [
            'Validerad internationell standard',
            'Baserad på bebisar från 6 länder och optimala förhållanden',
            'Uppdaterade och med aktuellt vetenskapligt stöd',
            'Kan eventuellt inte spegla lokala genetiska variationer',
          ],
        },
        {
          title: 'Orbegozo kurvor',
          description: 'Kurvor anpassade till den spanska befolkningen, mycket använda under tidigare årtionden.',
          points: [
            'Anpassade till den spanska befolkningen',
            'Mycket använda i Spanien under tidigare årtionden',
            'Baserade på en äldre referenspopulation',
            'Mindre internationell spridning',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 år', label: 'Referensstandard' },
        { value: 'Trendkurva', label: 'Nyckelvariabel' },
        { value: 'LMS-parametrar', label: 'Teknisk precision' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Antal standardavvikelser som ett värde avviker från medelvärdet i referenspopulationen. En Z-Score på 0 motsvarar den 50:e percentilen.',
        },
        {
          term: 'Harmoni',
          definition: 'Lämplig proportion mellan vikt och längd. En bebis kan ha en låg viktpercentil men vara harmonisk om längden också är låg i samma proportion.',
        },
        {
          term: 'Antropometri',
          definition: 'Uppsättning kroppsmått (vikt, längd, huvudomfång, BMI) som används för att utvärdera tillväxt och näringsstatus.',
        },
        {
          term: 'LMS-parametrar',
          definition: 'Statistisk metod (L=Box-Cox, M=median, S=variationskoefficient) som används av WHO för att konstruera percentiltabeller och omvandla mätningar till Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Vanliga frågor",
  faq,
  bibliographyTitle: "Referenser",
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

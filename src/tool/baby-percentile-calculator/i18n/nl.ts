import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'percentiel-calculator-baby';
const title = 'WHO Percentiel Calculator voor Baby\'s';
const description = 'Bereken het percentiel voor gewicht, lengte en BMI van je baby volgens de WHO-tabellen (0-5 jaar).';
const faq = [
  {
    question: 'Wat betekent het 50e percentiel?',
    answer: 'Het 50e percentiel geeft aan dat de baby precies op de mediaan zit, wat betekent dat de helft van de baby\'s van dezelfde leeftijd en hetzelfde geslacht meer weegt of meet, en de andere helft minder. Het betekent niet dat dit de ideale waarde is, maar de centrale waarde van de verdeling.',
  },
  {
    question: 'Is een laag percentiel een teken van een probleem?',
    answer: 'Niet noodzakelijkerwijs. Een laag percentiel (bijvoorbeeld P10) kan volkomen normaal zijn als het in de loop van de tijd stabiel blijft. Het belangrijkste is de groeitrend, niet een geïsoleerde waarde. Raadpleeg altijd je kinderarts.',
  },
  {
    question: 'Welke groeitabellen gebruikt deze calculator?',
    answer: 'Deze calculator gebruikt de groeistandaarden van de Wereldgezondheidsorganisatie (WHO) voor kinderen van 0 tot 5 jaar, gebaseerd op de Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'Wat is BMI bij baby\'s?',
    answer: 'De Body Mass Index (BMI) bij baby\'s is de verhouding tussen gewicht en lengte in het kwadraat. De BMI-percentielen voor baby\'s verschillen van die voor volwassenen en moeten worden geïnterpreteerd met de specifieke tabellen voor elke leeftijd en elk geslacht.',
  },
  {
    question: 'Hoe vaak moet ik mijn baby meten?',
    answer: 'In de eerste maanden controleert de kinderarts de groei meestal bij elk bezoek. Thuis kun je gewicht en lengte maandelijks registreren om de groeitrend te observeren.',
  },
];
const howTo = [
  {
    name: 'Selecteer het geslacht van de baby',
    text: 'Kies tussen jongen of meisje om de juiste WHO-tabellen toe te passen.',
  },
  {
    name: 'Voer de leeftijd in',
    text: 'Gebruik de schuifregelaar of de pijltjes om de leeftijd in maanden aan te geven (0-60 maanden).',
  },
  {
    name: 'Voer gewicht en lengte in',
    text: 'Schrijf het gewicht in kilogrammen en de lengte in centimeters.',
  },
  {
    name: 'Bekijk de percentielen',
    text: 'De percentielen voor gewicht, lengte en BMI worden automatisch berekend volgens de WHO-tabellen.',
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
  inLanguage: 'nl',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Meetgegevens',
    labelSex: 'Geslacht van de baby',
    sexBoy: 'Jongen',
    sexGirl: 'Meisje',
    unitMonths: 'Alleen maanden',
    unitYearsMonths: 'Jaren + maanden',
    labelWeight: 'Gewicht (kg)',
    labelHeight: 'Lengte (cm)',
    btnAddHistory: 'Toevoegen aan mijn geschiedenis',
    btnClearHistory: 'Gegevens wissen',
    labelDashboard: 'Groeidashboard',
    labelWeight2: 'Gewicht',
    labelHeight2: 'Lengte',
    labelBMI: 'BMI',
    labelCalculating: 'Berekenen...',
    disclaimer: 'Percentielen zijn slechts een statistisch hulpmiddel. Raadpleeg altijd je kinderarts om de resultaten te interpreteren.',
    labelLowRange: 'Laag bereik',
    labelLowNormal: 'Normaal laag',
    labelNormal: 'Normaliteit',
    labelHighNormal: 'Normaal hoog',
    labelHighRange: 'Hoog bereik',
    alertOutOfRange: 'Waarde buiten de bereiken P3-P97. Raadpleeg je kinderarts.',
    labelMonths: 'Maanden',
    labelYears: 'Jaren',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties',
  },
  seo: [
    {
      type: 'title',
      text: 'WHO Percentiel Calculator: Gids voor het begrijpen van de groei van je baby',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 sleutels voor het interpreteren van de percentielen van je baby',
      items: [
        'Geen enkel afzonderlijk percentiel definieert de gezondheid van je baby: het belangrijkste is de trend in de loop van de tijd.',
        'Percentielen tussen P3 en P97 worden beschouwd als binnen het statistische normale bereik.',
        'De BMI bij baby\'s volgt eigen curven en moet niet worden vergeleken met de referentiewaarden voor volwassenen.',
        'De WHO-curven zijn gebaseerd op baby\'s die onder optimale omstandigheden zijn opgegroeid, inclusief exclusieve borstvoeding gedurende de eerste maanden.',
        'Deel groeiregistraties altijd met je kinderarts voor een juiste klinische interpretatie.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe je je baby correct meet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Weeg de baby zonder kleding en indien mogelijk altijd op dezelfde weegschaal.',
        'Meet de lengte in horizontale positie tot 24 maanden.',
        'Meet vanaf 2 jaar de lengte in verticale positie.',
        'Voer metingen op hetzelfde tijdstip van de dag uit voor meer consistentie.',
      ],
    },
    {
      type: 'tip',
      html: 'Een percentiel onder P3 betekent niet automatisch een gezondheidsprobleem. Het belangrijkste is om te observeren of de groeicurve zijn trend in de loop van de tijd behoudt.',
    },
    {
      type: 'title',
      text: 'Interpretatie van de percentielen',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentiel', 'Interpretatie', 'Aanbevolen actie'],
      rows: [
        ['P97 of hoger', 'Hoog bereik', 'Bespreken met de kinderarts bij het volgende bezoek'],
        ['P85 tot P97', 'Normaal hoog', 'Normale opvolging'],
        ['P15 tot P85', 'Normaliteit', 'Geen speciale actie nodig'],
        ['P3 tot P15', 'Normaal laag', 'Normale opvolging'],
        ['P3 of lager', 'Laag bereik', 'Raadpleeg de kinderarts'],
      ],
    },
    {
      type: 'title',
      text: 'WHO vs. Orbegozo curven',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'WHO curven',
          description: 'Internationale standaard gebaseerd op baby\'s uit 6 landen die onder optimale omstandigheden zijn opgegroeid.',
          points: [
            'Gevalideerde internationale standaard',
            'Gebaseerd op baby\'s uit 6 landen en optimale omstandigheden',
            'Geüpdatet en met huidige wetenschappelijke ondersteuning',
            'Kan lokale genetische variaties mogelijk niet weerspiegelen',
          ],
        },
        {
          title: 'Orbegozo curven',
          description: 'Curven aangepast aan de Spaanse bevolking, veel gebruikt in voorgaande decennia.',
          points: [
            'Aangepast aan de Spaanse bevolking',
            'Veel gebruikt in Spanje in voorgaande decennia',
            'Gebaseerd op een oudere referentiepopulatie',
            'Minder internationale adoptie',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'WHO 0-5 jaar', label: 'Referentiestandaard' },
        { value: 'Trendcurve', label: 'Belangrijkste variabele' },
        { value: 'LMS-parameters', label: 'Technische precisie' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Aantal standaarddeviaties dat een waarde afwijkt van het gemiddelde van de referentiepopulatie. Een Z-Score van 0 is gelijk aan het 50e percentiel.',
        },
        {
          term: 'Harmonie',
          definition: 'Juiste verhouding tussen gewicht en lengte. Een baby kan een laag gewichtspercentiel hebben, maar harmonieus zijn als de lengte in dezelfde verhouding ook laag is.',
        },
        {
          term: 'Antropometrie',
          definition: 'Geheel van lichaamsmetingen (gewicht, lengte, hoofdomtrek, BMI) gebruikt om groei en voedingstoestand te evalueren.',
        },
        {
          term: 'LMS-parameters',
          definition: 'Statistische methode (L=Box-Cox, M=mediaan, S=variatiecoëfficiënt) gebruikt door de WHO om percentieltabellen te construeren en elke meting om te zetten in een Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Veelgestelde vragen",
  faq,
  bibliographyTitle: "Referenties",
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

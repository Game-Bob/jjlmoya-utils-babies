import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-maat-omzetter';
const title = 'Baby Maat Omzetter';
const description = 'Reken babykledingmaten om tussen Zara, H&M, Primark, Carter\'s, Kiabi, Mango en Mayoral. Voer de lengte und het gewicht in om de exacte maat van elk merk te krijgen.';
const faq = [
  {
    question: 'Hoe weet ik welke kledingmaat mijn baby heeft?',
    answer: 'Het meest betrouwbaar is om de lengte van de baby als belangrijkste referentie te gebruiken. Europese maten (50, 56, 62...) komen direct overeen met de lengte in centimeters. Voer de lengte en het gewicht van de baby in de omzetter in om de aanbevolen maat voor elk merk te krijgen.',
  },
  {
    question: 'Waarom variëren de maten per merk zo sterk?',
    answer: 'Elk merk heeft zijn eigen snit. H&M en Primark vallen meestal groter uit, terwijl Carter\'s und Mayoral een strakkere snit hebben. Gebruik altijd de maten van de baby, niet alleen de leeftijd.',
  },
  {
    question: 'Welke maat moet ik nemen als het tussen twee maten in zit?',
    answer: 'Kies altijd de grotere maat. Baby\'s groeien erg snel en een grotere maat garandeert een langere levensduur en meer comfort.',
  },
  {
    question: 'Werken de maten in inches op dezelfde manier?',
    answer: 'Amerikaanse merken zoals Carter\'s gebruiken inches en het gewicht als referentie. De omzetter toont je automatisch de equivalenten in het imperiale systeem als je dit activeert.',
  },
];
const howTo = [
  {
    name: 'Voer de lengte van de baby in',
    text: 'Gebruik de schuifregelaar of de knoppen om de huidige lengte van de baby in centimeters of inches aan te passen.',
  },
  {
    name: 'Voer het gewicht van de baby in',
    text: 'Pas het gewicht aan in kg of lbs om de resultaten te verfijnen, aangezien sommige merken het gewicht als aanvullende referentie gebruiken.',
  },
  {
    name: 'Selecteer een merk',
    text: 'Kies het kledingmerk om de voorgestelde maat en de geschatte afmetingen van het kledingstuk te zien.',
  },
  {
    name: 'Bekijk de equivalenten',
    text: 'In het rechterpaneel zie je in één oogopslag de equivalente maten van alle beschikbare merken.',
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
  inLanguage: 'nl',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Maten van de baby',
    labelResults: 'Geschatte equivalenten',
    labelHeight: 'Lengte van de baby',
    labelWeight: 'Huidig gewicht van de baby',
    labelPresets: 'Voorinstellingen per typische leeftijd',
    unitMetric: 'Metrisch (cm/kg)',
    unitImperial: 'Imperiaal (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Merk en Snit',
    labelSuggested: 'Voorgestelde maat',
    labelChest: 'Borst',
    labelWaist: 'Taille',
    labelGarmentMeasures: 'Geschatte afmetingen van het kledingstuk',
    fitRegular: 'Reguliere snit',
    fitLarge: 'Ruime snit',
    fitSmall: 'Strakke snit',
    tipTitle: 'Tip van de expert',
    tipText: 'Baby\'s groeien in zeer snelle ontwikkelingspieken. Als het resultaat op de grens van een maat ligt, kies dan altijd de grotere maat om de levensduur en het comfort van de baby te garanderen.',
    shareAriaLabel: 'Maat delen',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties',
  },
  seo: [
    { type: 'title', text: 'Gids voor babymaten: Zara, H&M, Primark en internationale merken', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Maandelijkse groei' },
      { value: '3 maanden', label: 'Duur van elke maat' },
      { value: '95%', label: 'Betrouwbaarheid per lengte' },
    ]},
    { type: 'tip', html: 'Gebruik altijd de lengte als belangrijkste referentie voor het kiezen van een maat, niet de leeftijd. Twee baby\'s van dezelfde maand kunnen wel 8–10 cm in lengte verschillen, wat neerkomt op het overslaan van een volledige maat.' },
    { type: 'title', text: 'Maten naar leeftijd, lengte en gewicht', level: 3 },
    { type: 'table', headers: ['Ca. leeftijd', 'Lengte (cm)', 'Gewicht (kg)', 'Gebruikelijke maat', 'Geschatte duur'], rows: [
      ['Pasgeboren', '50–56', '3–4.5', '50 / RN', '4–6 weken'],
      ['1–3 maanden', '56–62', '4.5–6', '56–62', '6–8 weken'],
      ['3–6 maanden', '62–68', '6–8', '62–68', '6–8 weken'],
      ['6–9 maanden', '68–74', '8–9.5', '68–74', '6–8 weken'],
      ['9–12 maanden', '74–80', '9.5–11', '74–80', '6–8 weken'],
      ['12–18 maanden', '80–86', '11–13', '80–86', '3–4 maanden'],
      ['18–24 maanden', '86–92', '13–15', '86–92', '3–4 maanden'],
    ]},
    { type: 'title', text: 'Merken die groot vs strak vallen', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Vallen groot (kies een maat kleiner)',
        description: 'Deze merken gebruiken ruimere snitten; neem een maat kleiner dan normaal.',
        points: [
          'H&M: valt vaak een maat groter uit',
          'Primark: algemeen ruime snit',
          'Lupilu (Lidl): losse snit',
          'Aanbevolen voor baby\'s in een laag percentiel',
        ],
      },
      {
        title: 'Vallen strak (kies een maat groter)',
        description: 'Deze merken gebruiken strakkere snitten; neem een maat groter dan normaal.',
        points: [
          "Carter's: strakke Amerikaanse snit",
          'Mayoral: strakke Europese snit',
          'Neck & Neck: kleine maten',
          'Aanbevolen voor baby\'s in een hoog percentiel',
        ],
      },
    ]},
    { type: 'title', text: 'Tips voor de juiste maat', level: 3 },
    { type: 'list', items: [
      'Meet de baby altijd voordat je iets koopt, vertrouw niet alleen op de leeftijd',
      'Bij een grensgeval tussen twee maten, kies de grotere maat',
      'Houd bij eendelige kleding rekening met ruimte voor de luier',
      'Europese maten (50, 56, 62...) komen overeen met de lengte in cm',
      'Altijd wassen voor gebruik: katoen kan tot 5% krimpen',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Maat 50 / Pasgeboren',
        definition: 'Bedoeld voor baby\'s tot 50 cm lang en ongeveer 3,5 kg. Veel baby\'s ontgroeien dit erg snel, zelfs in de eerste weken.',
      },
      {
        term: 'Binnenbeenlengte',
        definition: 'Afstand van het kruis tot de taille. Essentieel bij rompertjes en boxpakjes: een kort kruis beperkt de bewegingsvrijheid van de baby, zelfs als de rest goed past.',
      },
      {
        term: 'Referentie naar gewicht',
        definition: "Sommige Amerikaanse merken zoals Carter's gebruiken het gewicht als primaire referentie. Handig voor baby's met verhoudingen buiten het standaardpercentiel.",
      },
      {
        term: 'Enveloppehals',
        definition: 'Ontwerp van de halsopening bij rompertjes en shirts waarbij het kledingstuk naar beneden kan worden geschoven in plaats van over het hoofd getrokken. Onmisbaar in de eerste maanden.',
      },
    ]},
    { type: 'summary', title: 'Wat je moet onthouden', items: [
      'Lengte is de meest betrouwbare indicator voor de maat, belangrijker dan leeftijd.',
      "H&M en Primark vallen vaak groot; Carter's en Mayoral vallen strak.",
      'Numerieke Europese maten (50, 56, 62...) komen overeen met de lengte in cm.',
      'Kies bij twijfel de grotere maat voor een langere gebruiksduur.',
      'Enveloppehalsjes en een ruim kruis zijn de belangrijkste comfortkenmerken.',
    ]},
  ],
  faqTitle: "Veelgestelde vragen",
  faq,
  bibliographyTitle: "Referenties",
  bibliography: [
    {
      name: 'Zara - Maattabel voor kinderen',
      url: 'https://www.zara.com/nl/nl/size-guide.html',
    },
    {
      name: 'H&M - Maattabel voor baby\'s',
      url: 'https://www2.hm.com/nl_nl/customer-service/sizeguide.html',
    },
    {
      name: 'WHO - Groeistandaarden bij kinderen',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Maattabel',
      url: 'https://www.mayoral.com/nl-be/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

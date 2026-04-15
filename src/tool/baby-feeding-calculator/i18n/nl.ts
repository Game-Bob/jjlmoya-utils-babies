import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'voedingscalculator-baby';
const title = 'Voedingscalculator voor Baby\'s';
const description = 'Bereken hoeveel melk je baby nodig heeft op basis van gewicht en leeftijd. Aanbevolen voedingen, milliliters per voeding en signalen van honger en verzadiging.';

const faq = [
  {
    question: 'Hoeveel melk heeft een pasgeborene nodig?',
    answer: 'Op de eerste levensdag is de maag van de baby zo groot als een kers en heeft hij slechts 5 tot 7 ml per voeding nodig. Vanaf de vijfde dag groeit de capaciteit tot 45–60 ml en de behoeften nemen progressief toe.',
  },
  {
    question: 'Hoe vaak moet een baby eten?',
    answer: 'Pasgeborenen hebben tussen de 8 en 12 voedingen per dag nodig. Bij 3 maanden zijn dat er meestal 7–8, en bij 6 maanden ongeveer 5 voedingen per dag.',
  },
  {
    question: 'Hoe weet ik of mijn baby genoeg eet?',
    answer: 'De meest betrouwbare indicatoren zijn: adequate gewichtstoename, minstens 5–6 natte luiers per dag en een baby die verzadigingssignalen vertoont na de voedingen.',
  },
  {
    question: 'Zijn de hoeveelheden bij borstvoeding en flesvoeding hetzelfde?',
    answer: 'Bij borstvoeding wordt aanbevolen om op verzoek te voeden zonder volumes te meten. Bij flesvoeding is de gebruikelijke richtlijn 150 ml per kg lichaamsgewicht per dag, verdeeld over het aantal voedingen op basis van de leeftijd.',
  },
];

const howTo = [
  {
    name: 'Selecteer de leeftijd van de baby',
    text: 'Kies de eenheid (dagen, weken of maanden) en pas de waarde aan met de slider of de knoppen.',
  },
  {
    name: 'Voer het gewicht van de baby in',
    text: 'Gebruik de gewichtsslider of de knoppen om het huidige gewicht van de baby in kilogrammen in te stellen.',
  },
  {
    name: 'Selecteer de voedingswijze',
    text: 'Kies tussen borstvoeding, gemengd of flesvoeding voor de meest passende gids.',
  },
  {
    name: 'Bekijk het aanbevolen plan',
    text: 'De calculator toont het aantal voedingen, milliliters per voeding en het geschatte dagtotaal.',
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

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Huidige configuratie',
    labelPlan: 'Aanbevolen plan',
    unitDays: 'dagen',
    unitWeeks: 'weken',
    unitMonths: 'maanden',
    labelWeight: 'Gewicht van de baby',
    labelFeedType: 'Voedingswijze',
    feedBreast: 'Borstvoeding',
    feedMixed: 'Gemengd',
    feedFormula: 'Flesvoeding',
    labelFreeDemand: 'Op verzoek',
    labelMlPerFeed: 'ml per voeding',
    labelFeedsCount: 'Voedingen / 24u',
    labelDailyTotal: 'Dagtotaal (geschat)',
    labelHunger: 'Hongersignalen',
    labelFullness: 'Verzadigingssignalen',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties',
  },
  seo: [
    { type: 'summary', title: 'Samenvatting: Babyvoeding', items: [
      'De maagcapaciteit van een pasgeborene is slechts 5–7 ml op de eerste dag.',
      'De algemene richtlijn voor flesvoeding is 150 ml per kg gewicht per dag.',
      'Borstvoeding wordt op verzoek aangeboden zonder vaste volumes.',
      'De frequentie neemt af met de leeftijd: van 8–12 voedingen naar 4–5 in 6 maanden.',
    ]},
    { type: 'title', text: 'Hoeveel melk heeft mijn baby nodig op basis van gewicht en leeftijd?', level: 2 },
    { type: 'paragraph', html: 'De melkbehoefte verandert snel in de eerste maanden. De calculator schat de hoeveelheid op basis van het huidige gewicht en de leeftijd van de baby, volgens de pediatrische richtlijnen van de WHO en de AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Dag 1 (kersgrootte)' },
      { value: '150 ml/kg', label: 'Referentie flesvoeding' },
      { value: '8–12', label: 'Voedingen/dag pasgeb.' },
    ]},
    { type: 'title', text: 'Maaggrootte per leeftijd', level: 3 },
    { type: 'table', headers: ['Leeftijd', 'Ref. grootte', 'Capaciteit', 'Voedingen/dag'], rows: [
      ['Dag 1', 'Kers', '5–7 ml', '8–12'],
      ['Dagen 2–4', 'Walnoot', '22–27 ml', '8–12'],
      ['Dagen 5–30', 'Ei', '45–60 ml', '8–10'],
      ['1–3 maanden', 'Maximaal', '90–120 ml', '7–8'],
      ['3–6 maanden', 'Maximaal', '120–150 ml', '5–6'],
      ['6+ maanden', 'Maximaal', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Een betrouwbare indicator voor goede voeding is het aantal natte luiers: tussen 5 en 6 per dag vanaf de vijfde dag wijst op een goede hydratatie.' },
    { type: 'title', text: 'Borstvoeding vs. flesvoeding', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Borstvoeding', description: 'Natuurlijke voeding op verzoek.', points: ['Geen vast schema', 'Actieve antistoffen', 'Variabele samenstelling', 'Moeilijk te kwantificeren'] },
      { title: 'Flesvoeding', description: 'Geplande voedingen met berekenbaar volume.', points: ['Elke 3–4 uur', 'Stabiele samenstelling', 'Makkelijk inname te controleren', 'Vereist steriele bereiding'] },
    ]},
    { type: 'list', items: [
      'Adequate gewichtstoename: 150–200 g/week in de eerste maand',
      'Minstens 5–6 natte luiers per dag',
      'De baby is rustig na de voedingen',
      'Heldere of zeer lichtgele urine',
    ]},
  ],
  faqTitle: "Veelgestelde vragen",
  faq,
  bibliographyTitle: "Referenties",
  bibliography: [
    {
      name: 'WHO - Voeding voor zuigelingen en jonge kinderen',
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
      name: 'Voedingscentrum - Borstvoeding en flesvoeding',
      url: 'https://www.voedingscentrum.nl/nl/mijn-kind-en-ik/borstvoeding-en-flesvoeding.aspx',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

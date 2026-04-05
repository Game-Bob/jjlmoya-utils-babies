import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'convertisseur-tailles-bebe';
const title = 'Convertisseur de tailles bébé';
const description = "Convertissez les tailles de vêtements bébé entre Zara, H&M, Primark, Carter's, Kiabi, Mango et Mayoral. Entrez la taille et le poids de votre bébé pour obtenir la pointure exacte de chaque marque.";
const faq = [
  {
    question: "Comment savoir quelle taille de vêtement correspond à mon bébé ?",
    answer: "Le plus fiable est d'utiliser la taille du bébé comme référence principale. Les tailles européennes (50, 56, 62...) correspondent directement à la taille en centimètres. Entrez la taille et le poids dans le convertisseur pour obtenir la taille recommandée par chaque marque.",
  },
  {
    question: 'Pourquoi les tailles varient-elles autant selon les marques ?',
    answer: "Chaque marque a son propre patron de coupe. H&M et Primark ont tendance à tailler grand, tandis que Carter's et Mayoral ont des coupes plus ajustées. Utilisez toujours les mesures du bébé, pas seulement son âge.",
  },
  {
    question: 'Que faire si le bébé est entre deux tailles ?',
    answer: "Choisissez toujours la taille supérieure. Les bébés grandissent très vite et une taille plus grande garantit une meilleure durabilité et un meilleur confort.",
  },
  {
    question: "Les tailles en pouces fonctionnent-elles de la même façon ?",
    answer: "Les marques américaines comme Carter's utilisent les pouces et le poids comme référence principale. Le convertisseur affiche automatiquement les équivalences en système impérial lorsque vous l'activez.",
  },
];
const howTo = [
  {
    name: 'Entrez la taille du bébé',
    text: 'Utilisez le curseur ou les boutons pour ajuster la taille actuelle du bébé en centimètres ou en pouces.',
  },
  {
    name: 'Entrez le poids du bébé',
    text: 'Ajustez le poids en kg ou en livres pour affiner les résultats, car certaines marques utilisent le poids comme référence complémentaire.',
  },
  {
    name: 'Sélectionnez une marque',
    text: 'Choisissez la marque de vêtements pour voir la taille suggérée et les mesures estimées du vêtement.',
  },
  {
    name: 'Consultez les équivalences',
    text: 'Le panneau de droite affiche les tailles équivalentes de toutes les marques disponibles en un coup d\'oeil.',
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
  inLanguage: 'fr',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Mesures du bébé',
    labelResults: 'Équivalences estimées',
    labelHeight: 'Taille du bébé',
    labelWeight: 'Poids actuel du bébé',
    labelPresets: 'Préréglages par âge typique',
    unitMetric: 'Métrique (cm/kg)',
    unitImperial: 'Impérial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marque et coupe',
    labelSuggested: 'Taille suggérée',
    labelChest: 'Poitrine',
    labelWaist: 'Tour de taille',
    labelGarmentMeasures: 'Mesures estimées du vêtement',
    fitRegular: 'Coupe régulière',
    fitLarge: 'Coupe ample',
    fitSmall: 'Coupe ajustée',
    tipTitle: 'Conseil expert',
    tipText: "Les bébés grandissent très rapidement. Si le résultat se situe à la limite supérieure d'une taille, choisissez toujours la taille supérieure pour garantir la durabilité et le confort du bébé.",
    shareAriaLabel: 'Partager la taille',
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références',
  },
  seo: [
    { type: 'title', text: "Guide des tailles bébé : Zara, H&M, Primark et grandes marques", level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2,5 cm', label: 'Croissance mensuelle' },
      { value: '3 mois', label: 'Durée par taille' },
      { value: '95 %', label: 'Fiabilité par taille' },
    ]},
    { type: 'tip', html: "Utilisez toujours la taille comme référence principale pour choisir une pointure, pas l'âge. Deux bébés du même mois peuvent avoir jusqu'à 8–10 cm de différence, ce qui représente une taille complète." },
    { type: 'title', text: 'Tailles par âge, taille et poids', level: 3 },
    { type: 'table', headers: ['Âge approx.', 'Taille (cm)', 'Poids (kg)', 'Taille habituelle', 'Utilisation estimée'], rows: [
      ['Nouveau-né', '50–56', '3–4,5', '50 / NB', '4–6 semaines'],
      ['1–3 mois', '56–62', '4,5–6', '56–62', '6–8 semaines'],
      ['3–6 mois', '62–68', '6–8', '62–68', '6–8 semaines'],
      ['6–9 mois', '68–74', '8–9,5', '68–74', '6–8 semaines'],
      ['9–12 mois', '74–80', '9,5–11', '74–80', '6–8 semaines'],
      ['12–18 mois', '80–86', '11–13', '80–86', '3–4 mois'],
      ['18–24 mois', '86–92', '13–15', '86–92', '3–4 mois'],
    ]},
    { type: 'title', text: 'Marques qui taillent grand vs ajusté', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Taillent grand (prendre une taille en dessous)',
        description: "Ces marques utilisent des coupes plus amples ; prenez une taille en moins par rapport à l'habituel.",
        points: [
          'H&M : taille généralement une taille de plus',
          'Primark : coupe ample généralisée',
          'Lupilu (Lidl) : coupe large',
          'Recommandé pour les bébés en percentile bas',
        ],
      },
      {
        title: 'Taillent ajusté (prendre une taille au-dessus)',
        description: "Ces marques utilisent des coupes plus cintrées ; prenez une taille de plus par rapport à l'habituel.",
        points: [
          "Carter's : coupe américaine cintrée",
          'Mayoral : coupe européenne ajustée',
          'Neck & Neck : tailles réduites',
          'Recommandé pour les bébés en percentile élevé',
        ],
      },
    ]},
    { type: 'title', text: 'Conseils pour trouver la bonne taille', level: 3 },
    { type: 'list', items: [
      "Mesurez toujours le bébé avant d'acheter, ne vous fiez pas uniquement à l'âge",
      'Si le résultat se situe entre deux tailles, choisissez toujours la taille supérieure',
      'Tenez compte de la place pour la couche dans les bodies et combinaisons',
      'Les tailles européennes (50, 56, 62...) correspondent à la taille en cm',
      "Lavez toujours avant utilisation : le coton peut rétrécir jusqu'à 5 %",
    ]},
    { type: 'glossary', items: [
      {
        term: 'Taille 50 / Nouveau-né',
        definition: "Conçue pour les bébés jusqu'à 50 cm et environ 3,5 kg. De nombreux bébés la dépassent très rapidement, même dans les premières semaines.",
      },
      {
        term: 'Longueur entrejambe',
        definition: "Distance de l'entrejambe à la taille. Fondamentale dans les bodies et combinaisons : une longueur courte limite les mouvements du bébé même si le reste du vêtement convient.",
      },
      {
        term: 'Référence par poids',
        definition: "Certaines marques américaines comme Carter's utilisent le poids comme référence principale. Utile pour les bébés dont les proportions sortent du percentile standard.",
      },
      {
        term: 'Col enveloppe',
        definition: "Design de l'encolure des bodies et T-shirts permettant d'habiller le bébé en faisant glisser le vêtement vers le bas plutôt que par la tête. Indispensable dans les premiers mois.",
      },
    ]},
    { type: 'summary', title: "Ce qu'il faut retenir", items: [
      "La taille est l'indicateur le plus fiable pour choisir la bonne pointure, avant l'âge.",
      "H&M et Primark taillent généralement grand ; Carter's et Mayoral taillent ajusté.",
      'Les tailles européennes numériques (50, 56, 62...) correspondent à la taille en cm.',
      'En cas de doute entre deux tailles, choisir la supérieure garantit une meilleure durabilité.',
      "Le col enveloppe et un entrejambe généreux sont les détails de confort essentiels.",
    ]},
  ],
  faq,
  bibliography: [
    {
      name: 'Zara - Guide des tailles enfant',
      url: 'https://www.zara.com/fr/fr/size-guide.html',
    },
    {
      name: 'H&M - Guide des tailles bébé',
      url: 'https://www2.hm.com/fr_fr/customer-service/sizeguide.html',
    },
    {
      name: 'OMS - Normes de croissance de l\'enfant',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Kiabi - Guide des tailles',
      url: 'https://www.kiabi.com/guide-des-tailles',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

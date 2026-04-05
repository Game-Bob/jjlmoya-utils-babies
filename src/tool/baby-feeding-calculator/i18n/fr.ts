import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculateur-biberons-bebe';
const title = 'Calculateur de biberons pour bébé';
const description = "Calculez la quantité de lait dont votre bébé a besoin selon son poids et son âge. Tétées recommandées, millilitres par tétée et signaux de faim et de satiété.";

const faq = [
  {
    question: "De quelle quantité de lait un nouveau-né a-t-il besoin ?",
    answer: "Le premier jour de vie, l'estomac du nouveau-né a la taille d'une cerise et ne nécessite que 5 à 7 ml par tétée. À partir du cinquième jour, la capacité passe à 45–60 ml et les besoins augmentent progressivement.",
  },
  {
    question: 'À quelle fréquence un bébé doit-il manger ?',
    answer: 'Les nouveau-nés ont besoin de 8 à 12 tétées par jour. À 3 mois, cela se réduit généralement à 7–8 tétées, et à 6 mois à environ 5 tétées par jour.',
  },
  {
    question: 'Comment savoir si mon bébé mange suffisamment ?',
    answer: "Les indicateurs les plus fiables sont : une prise de poids adéquate, au moins 5 à 6 couches mouillées par jour et des signaux de satiété après les tétées.",
  },
  {
    question: "Les quantités sont-elles identiques pour l'allaitement et le lait maternisé ?",
    answer: "Avec l'allaitement, il est recommandé de nourrir à la demande sans mesurer les volumes. Avec le lait maternisé, la référence habituelle est de 150 ml par kg de poids corporel par jour.",
  },
];

const howTo = [
  {
    name: "Sélectionnez l'âge du bébé",
    text: "Choisissez l'unité (jours, semaines ou mois) et ajustez la valeur avec le curseur ou les boutons.",
  },
  {
    name: 'Entrez le poids du bébé',
    text: 'Utilisez le curseur de poids ou les boutons pour ajuster le poids actuel du bébé en kilogrammes.',
  },
  {
    name: "Sélectionnez le type d'alimentation",
    text: 'Choisissez entre sein, mixte ou lait maternisé pour obtenir le guide le plus adapté.',
  },
  {
    name: 'Consultez le plan recommandé',
    text: 'La calculatrice affiche le nombre de tétées, les millilitres par tétée et le total journalier estimé.',
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

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Paramètres actuels',
    labelPlan: 'Plan recommandé',
    unitDays: 'jours',
    unitWeeks: 'semaines',
    unitMonths: 'mois',
    labelWeight: 'Poids du bébé',
    labelFeedType: "Type d'alimentation",
    feedBreast: 'Sein',
    feedMixed: 'Mixte',
    feedFormula: 'Lait maternisé',
    labelFreeDemand: 'À la demande',
    labelMlPerFeed: 'ml par tétée',
    labelFeedsCount: 'Tétées / 24h',
    labelDailyTotal: 'Total journalier (est.)',
    labelHunger: 'Signaux de faim',
    labelFullness: 'Signaux de satiété',
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références',
  },
  seo: [
    { type: 'summary', title: "Résumé : Alimentation du bébé", items: [
      "La capacité gastrique du nouveau-né est de seulement 5 à 7 ml le premier jour.",
      "La référence générale pour le lait maternisé est de 150 ml par kg de poids par jour.",
      "L'allaitement maternel est proposé à la demande sans volumes fixes.",
      "La fréquence des tétées diminue avec l'âge : de 8–12 à 4–5 à 6 mois.",
    ]},
    { type: 'title', text: "De combien de lait mon bébé a-t-il besoin selon son poids et son âge ?", level: 2 },
    { type: 'paragraph', html: "Les besoins en lait évoluent rapidement au cours des premiers mois. La calculatrice estime la quantité selon le poids actuel et l'âge du bébé, en suivant les recommandations pédiatriques de l'OMS et de l'AAP." },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Jour 1 (taille cerise)' },
      { value: '150 ml/kg', label: 'Référence journalière lait maternisé' },
      { value: '8–12', label: 'Tétées/jour nouveau-né' },
    ]},
    { type: 'title', text: "Taille de l'estomac par âge", level: 3 },
    { type: 'table', headers: ['Âge', 'Taille réf.', 'Capacité', 'Tétées/jour'], rows: [
      ['Jour 1', 'Cerise', '5–7 ml', '8–12'],
      ['Jours 2–4', 'Noix', '22–27 ml', '8–12'],
      ['Jours 5–30', 'Oeuf', '45–60 ml', '8–10'],
      ['1–3 mois', 'Maximale', '90–120 ml', '7–8'],
      ['3–6 mois', 'Maximale', '120–150 ml', '5–6'],
      ['6+ mois', 'Maximale', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: "Un indicateur fiable d'une alimentation adéquate est le nombre de couches mouillées : 5 à 6 par jour à partir du cinquième jour indiquent une bonne hydratation." },
    { type: 'title', text: "Allaitement maternel vs lait maternisé", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Allaitement maternel", description: "Alimentation naturelle à la demande.", points: ["Pas d'horaire fixe", "Anticorps actifs", "Composition variable", "Difficile à quantifier"] },
      { title: "Lait maternisé", description: "Tétées programmées avec volume mesurable.", points: ["Toutes les 3–4 heures", "Composition stable", "Facile à contrôler", "Préparation stérile requise"] },
    ]},
    { type: 'list', items: [
      "Prise de poids adéquate : 150–200 g/semaine le premier mois",
      "Au moins 5–6 couches mouillées par jour",
      "Le bébé est calme après les tétées",
      "Urine claire ou jaune très pâle",
    ]},
  ],
  faq,
  bibliography: [
    {
      name: "OMS - Alimentation du nourrisson et du jeune enfant",
      url: 'https://www.who.int/fr/health-topics/infant-feeding',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: "UNICEF - Allaitement maternel",
      url: 'https://www.unicef.fr/article/lallaitement-maternel',
    },
    {
      name: "Société Française de Pédiatrie",
      url: 'https://www.sfpediatrie.com',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

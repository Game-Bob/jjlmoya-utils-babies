import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculatrice-jours-fertiles';
const title = 'Calculatrice de Jours Fertiles';
const description = "Calculez votre fenêtre fertile et la date d'ovulation en fonction de votre cycle menstruel.";
const faq = [
  {
    question: "Comment la fenêtre fertile est-elle calculée ?",
    answer: "La fenêtre fertile est calculée à partir du premier jour de vos dernières règles. L'ovulation survient environ 14 jours avant le début du cycle suivant. Les jours fertiles incluent les 5 jours précédant l'ovulation et le jour de l'ovulation lui-même.",
  },
  {
    question: "Quelle est la précision de cette calculatrice ?",
    answer: "La calculatrice est une estimation basée sur le modèle standard de cycle de 28 jours (ou celui que vous indiquez). Elle est indicative et peut ne pas refléter les variations individuelles. Pour plus de précision, combinez-la avec le suivi de la température basale ou les tests d'ovulation.",
  },
  {
    question: "Que faire si mon cycle est irrégulier ?",
    answer: "Si vos cycles varient beaucoup d'un mois à l'autre, le calcul peut être moins précis. Dans ce cas, le suivi de la température basale ou les tests de LH sont des méthodes plus fiables pour identifier l'ovulation.",
  },
  {
    question: "Combien de temps l'ovule survit-il après l'ovulation ?",
    answer: "L'ovule a une durée de vie de 12 à 24 heures. Cependant, les spermatozoïdes peuvent survivre jusqu'à 5 jours dans le tractus reproducteur féminin, ce qui explique que la fenêtre fertile réelle s'étend sur plusieurs jours avant l'ovulation.",
  },
];
const howTo = [
  {
    name: "Sélectionnez le premier jour de vos dernières règles",
    text: "Cliquez sur le jour du calendrier correspondant au début de votre dernière menstruation.",
  },
  {
    name: "Ajustez la durée de votre cycle",
    text: "Déplacez le curseur pour indiquer combien de jours dure habituellement votre cycle menstruel.",
  },
  {
    name: "Consultez les résultats",
    text: "La calculatrice affiche automatiquement la date d'ovulation estimée, la fenêtre fertile et le début des prochaines règles.",
  },
  {
    name: "Naviguez dans le calendrier",
    text: "Utilisez les flèches de navigation pour voir les jours marqués dans les mois précédents ou suivants.",
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: "Quand a commencé vos dernières règles ?",
    step1Desc: "Sélectionnez le premier jour de vos dernières règles sur le calendrier.",
    pulseHint: "Cliquez sur un jour du calendrier pour continuer",
    step1Indicator: "Date de début",
    step2Indicator: "Votre Calendrier",
    sidebarTitle: "Votre Cycle",
    sidebarDesc: "Personnalisez les résultats en ajustant la durée de votre cycle.",
    labelCycleLength: "Durée du cycle",
    unitDays: "jours",
    labelOvulation: "Prochaine ovulation",
    labelFertileWindow: "Fenêtre fertile",
    labelNextPeriod: "Prochaines règles",
    legendSelection: "Votre sélection",
    legendPeriod: "Règles",
    legendFertile: "Fertile",
    legendOvulation: "Ovulation",
    faqTitle: "Questions fréquentes",
    bibliographyTitle: "Références",
  },
  seo: [
    {
      type: 'title',
      text: "Calculatrice de Jours Fertiles : Guide Complet sur le Cycle et l'Ovulation",
      level: 2,
    },
    {
      type: 'summary',
      title: "5 points clés sur la fenêtre fertile",
      items: [
        "L'ovulation survient environ 14 jours avant le début des prochaines règles.",
        "La fenêtre fertile comprend les 5 jours précédant l'ovulation ainsi que le jour de l'ovulation.",
        "Les spermatozoïdes peuvent survivre jusqu'à 5 jours dans le tractus reproducteur féminin.",
        "Les cycles irréguliers réduisent la fiabilité du calcul basé sur le calendrier.",
        "Combiner cet outil avec la température basale ou les tests de LH améliore la précision.",
      ],
    },
    {
      type: 'title',
      text: "Comment fonctionne le calcul de la fenêtre fertile",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "La méthode repose sur la règle d'Ogino-Knaus et le modèle standard d'ovulation. Avec un cycle de 28 jours, l'ovulation survient généralement autour du 14e jour. La calculatrice identifie ce point et indique les jours de fertilité maximale autour de lui.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: "14 jours", label: "Avant les prochaines règles" },
        { value: "5 jours", label: "Durée de la fenêtre fertile" },
        { value: "12-24 h", label: "Durée de vie de l'ovule" },
      ],
    },
    {
      type: 'title',
      text: "Phases du cycle menstruel",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: "Phase folliculaire",
          description: "Commence avec les règles et dure jusqu'à l'ovulation.",
          points: [
            "Les follicules ovariens mûrissent sous l'influence de la FSH.",
            "Dure entre 10 et 14 jours dans les cycles réguliers.",
            "Les taux d'oestrogènes augmentent progressivement.",
          ],
        },
        {
          title: "Phase lutéale",
          description: "Commence après l'ovulation et se termine avec les règles.",
          points: [
            "Le corps jaune produit de la progestérone pour préparer l'endomètre.",
            "Dure environ 14 jours dans les cycles normaux.",
            "En l'absence de fécondation, le corps jaune dégénère.",
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: "Bien que la calculatrice utilise un modèle standard, les cycles menstruels peuvent varier d'un mois à l'autre. Pour plus de précision, combinez cet outil avec le suivi de la température basale ou les tests d'ovulation.",
    },
    {
      type: 'title',
      text: "Signes biologiques de l'ovulation",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Modifications de la glaire cervicale : pendant les jours fertiles, elle devient transparente et élastique, semblable au blanc d'œuf cru.",
        "Légère hausse de la température basale (0,2-0,4 °C) juste après l'ovulation.",
        "Douleur ou gêne légère du côté de l'ovaire actif (Mittelschmerz) pendant l'ovulation.",
        "Légère augmentation de la libido proche de l'ovulation, due aux changements hormonaux.",
        "Ballonnements ou légère sensation de plénitude abdominale pendant les jours fertiles.",
      ],
    },
    {
      type: 'title',
      text: "Mode de vie et fertilité",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Le stress chronique peut perturber l'ovulation et allonger ou raccourcir le cycle menstruel.",
        "Le poids corporel a un impact direct : le sous-poids comme le surpoids peuvent affecter l'ovulation.",
        "L'exercice modéré favorise la régularité du cycle ; l'exercice intense peut le supprimer.",
        "Le tabac réduit la réserve ovarienne et avance la ménopause de plusieurs années.",
        "Une alimentation riche en acide folique, en fer et en antioxydants soutient la santé reproductive.",
      ],
    },
    {
      type: 'title',
      text: "Méthodes de suivi du cycle",
      level: 3,
    },
    {
      type: 'table',
      headers: ["Méthode", "Fiabilité", "Coût"],
      rows: [
        ["Calculatrice de calendrier", "Moyenne", "Gratuit"],
        ["Température basale", "Élevée avec pratique", "Faible"],
        ["Test de LH urinaire", "Élevée", "Modéré"],
        ["Moniteur de fertilité numérique", "Très élevée", "Élevé"],
        ["Échographie folliculaire", "Maximale", "Clinique"],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: "Ovulation",
          definition: "Libération de l'ovule mature depuis le follicule ovarien, déclenchée par un pic de LH. Elle survient une fois par cycle.",
        },
        {
          term: "Fenêtre fertile",
          definition: "Période de plus grande probabilité de conception, couvrant les 5 jours précédant l'ovulation et le jour de l'ovulation lui-même.",
        },
        {
          term: "Glaire cervicale",
          definition: "Sécrétion du col utérin dont la texture varie au cours du cycle. Pendant les jours fertiles, elle devient transparente, élastique et filante, facilitant le passage des spermatozoïdes.",
        },
        {
          term: "Température basale",
          definition: "Température corporelle au repos absolu, mesurée au réveil avant toute activité. Elle augmente légèrement (0,2-0,4 °C) après l'ovulation sous l'effet de la progestérone.",
        },
      ],
    },
  ],
  faq,
  bibliographyTitle: "Références",
  bibliography: [
    {
      name: "OMS - Planification familiale",
      url: "https://www.who.int/fr/health-topics/family-planning-contraception",
    },
    {
      name: "American College of Obstetricians and Gynecologists - Fertility Awareness",
      url: "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning",
    },
    {
      name: "Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)",
      url: "https://www.nejm.org/doi/10.1056/NEJM199512073332301",
    },
    {
      name: "NICE - Fertility problems: assessment and treatment",
      url: "https://www.nice.org.uk/guidance/cg156",
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

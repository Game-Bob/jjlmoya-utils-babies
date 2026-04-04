import type { BabyPercentileCalculatorLocaleContent } from '../index';

export const content: BabyPercentileCalculatorLocaleContent = {
  slug: 'percentile-poids-taille-bebe',
  title: 'Calculateur de Percentiles OMS pour Bébés',
  description: 'Calculez le percentile de poids, taille et IMC de votre bébé selon les courbes OMS (0-5 ans).',
  ui: {
    labelMeasurements: 'Données de Mesure',
    labelSex: 'Sexe du bébé',
    sexBoy: 'Garçon',
    sexGirl: 'Fille',
    unitMonths: 'Mois seulement',
    unitYearsMonths: 'Années + mois',
    labelWeight: 'Poids (kg)',
    labelHeight: 'Taille (cm)',
    btnAddHistory: 'Ajouter à l\'historique',
    btnClearHistory: 'Effacer les données',
    labelDashboard: 'Tableau de bord de croissance',
    labelWeight2: 'Poids',
    labelHeight2: 'Taille',
    labelBMI: 'IMC',
    labelCalculating: 'Calcul en cours...',
    disclaimer: 'Les percentiles sont uniquement un outil statistique. Consultez toujours votre pédiatre pour interpréter les résultats.',
    labelLowRange: 'Plage basse',
    labelLowNormal: 'Bas habituel',
    labelNormal: 'Normalité',
    labelHighNormal: 'Haut habituel',
    labelHighRange: 'Plage haute',
    alertOutOfRange: 'Valeur hors des plages P3-P97. Consultez votre pédiatre.',
    labelMonths: 'Mois',
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références',
  },
  seo: [
    {
      type: 'title',
      text: "Calculateur de Percentiles OMS : Guide pour comprendre la croissance de votre bébé",
      level: 2,
    },
    {
      type: 'summary',
      title: "5 points essentiels pour interpréter les percentiles de votre bébé",
      items: [
        "Aucun percentile isolé ne définit la santé de votre bébé : c'est la tendance dans le temps qui compte.",
        "Les percentiles entre P3 et P97 sont considérés dans la plage de normalité statistique.",
        "L'IMC du nourrisson suit ses propres courbes et ne doit pas être comparé aux valeurs de référence adultes.",
        "Les courbes OMS sont basées sur des bébés élevés dans des conditions optimales, dont l'allaitement exclusif les premiers mois.",
        "Partagez toujours les données de croissance avec votre pédiatre pour une interprétation clinique appropriée.",
      ],
    },
    {
      type: 'title',
      text: "Comment mesurer correctement votre bébé",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Pesez le bébé sans vêtements et sur la même balance autant que possible.",
        "Mesurez la longueur en position allongée jusqu'à 24 mois.",
        "À partir de 2 ans, mesurez la taille en position debout.",
        "Effectuez les mesures à la même heure de la journée pour plus de cohérence.",
      ],
    },
    {
      type: 'tip',
      html: "Un percentile inférieur à P3 n'indique pas automatiquement un problème de santé. L'essentiel est d'observer si la courbe de croissance maintient sa tendance dans le temps.",
    },
    {
      type: 'title',
      text: "Interprétation des percentiles",
      level: 3,
    },
    {
      type: 'table',
      headers: ["Percentile", "Interprétation", "Action recommandée"],
      rows: [
        ["P97 ou plus", "Plage haute", "En parler au pédiatre lors de la prochaine visite"],
        ["P85 à P97", "Haut habituel", "Suivi normal"],
        ["P15 à P85", "Normalité", "Aucune action particulière"],
        ["P3 à P15", "Bas habituel", "Suivi normal"],
        ["P3 ou moins", "Plage basse", "Consulter le pédiatre"],
      ],
    },
    {
      type: 'title',
      text: "OMS vs Courbes d'Orbegozo",
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: "Courbes OMS",
          description: "Standard international basé sur des bébés de 6 pays élevés dans des conditions optimales.",
          points: [
            "Standard international validé",
            "Basé sur des bébés de 6 pays en conditions optimales",
            "À jour avec le soutien scientifique actuel",
            "Peut ne pas refléter les variations génétiques locales",
          ],
        },
        {
          title: "Courbes d'Orbegozo",
          description: "Courbes adaptées à la population espagnole, très utilisées dans les décennies passées.",
          points: [
            "Adaptées à la population espagnole",
            "Très utilisées en Espagne par le passé",
            "Basées sur une population de référence plus ancienne",
            "Adoption internationale limitée",
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: "OMS 0-5 ans", label: "Standard de référence" },
        { value: "Courbe de tendance", label: "Variable clé" },
        { value: "Paramètres LMS", label: "Précision technique" },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: "Z-Score",
          definition: "Nombre d'écarts-types séparant une valeur de la moyenne de la population de référence. Un Z-Score de 0 est équivalent au 50e percentile.",
        },
        {
          term: "Harmonie",
          definition: "Proportion adéquate entre poids et taille. Un bébé peut avoir un faible percentile de poids tout en étant harmonieux si sa taille est également faible dans la même proportion.",
        },
        {
          term: "Anthropométrie",
          definition: "Ensemble des mesures corporelles (poids, taille, périmètre crânien, IMC) utilisées pour évaluer la croissance et l'état nutritionnel.",
        },
        {
          term: "Paramètres LMS",
          definition: "Méthode statistique (L=Box-Cox, M=médiane, S=coefficient de variation) utilisée par l'OMS pour construire les tableaux de percentiles et convertir toute mesure en Z-Score.",
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Que signifie le 50e percentile ?',
      answer: 'Le 50e percentile indique que le bébé se trouve exactement à la médiane : la moitié des bébés du même âge et sexe pèse ou mesure plus, et l\'autre moitié moins. Cela ne signifie pas que c\'est la valeur idéale, mais simplement la valeur centrale de la distribution.',
    },
    {
      question: 'Un percentile bas est-il signe de problème ?',
      answer: 'Pas nécessairement. Un percentile bas (par exemple P10) peut être tout à fait normal s\'il reste stable dans le temps. C\'est la tendance de croissance qui importe, et non une valeur isolée. Consultez toujours votre pédiatre.',
    },
    {
      question: 'Quelles courbes de croissance cette calculatrice utilise-t-elle ?',
      answer: 'Cette calculatrice utilise les normes de croissance de l\'Organisation Mondiale de la Santé (OMS) pour les enfants de 0 à 5 ans, basées sur l\'étude MGRS (Multicentre Growth Reference Study).',
    },
    {
      question: 'Qu\'est-ce que l\'IMC chez les bébés ?',
      answer: 'L\'Indice de Masse Corporelle (IMC) chez les bébés est le rapport entre le poids et le carré de la taille. Les percentiles d\'IMC pour bébés diffèrent de ceux des adultes et doivent être interprétés à l\'aide de courbes spécifiques par âge et sexe.',
    },
    {
      question: 'À quelle fréquence dois-je mesurer mon bébé ?',
      answer: 'Dans les premiers mois, le pédiatre surveille généralement la croissance à chaque visite. À la maison, vous pouvez enregistrer le poids et la taille mensuellement pour observer la tendance de croissance.',
    },
  ],
  bibliography: [
    {
      name: "WHO Child Growth Standards: Methods and development",
      url: "https://www.who.int/publications/i/item/924154693X",
    },
    {
      name: "WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age",
      url: "https://www.who.int/tools/child-growth-standards/standards",
    },
    {
      name: "Comparison of the WHO Child Growth Standards and the CDC 2000 Growth Charts - de Onis M et al.",
      url: "https://doi.org/10.1093/jn/137.1.144S",
    },
  ],
  howTo: [
    {
      name: "Sélectionnez le sexe du bébé",
      text: "Choisissez garçon ou fille pour appliquer les courbes OMS correspondantes.",
    },
    {
      name: "Saisissez l'âge",
      text: "Utilisez le curseur ou les flèches pour indiquer l'âge en mois (0-60 mois).",
    },
    {
      name: "Saisissez poids et taille",
      text: "Entrez le poids en kilogrammes et la taille en centimètres.",
    },
    {
      name: "Consultez les percentiles",
      text: "Les percentiles de poids, taille et IMC sont calculés automatiquement selon les courbes OMS.",
    },
  ],
  schemas: [],
};

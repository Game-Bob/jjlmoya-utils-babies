import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Calculateur de Prise de Poids Pendant la Grossesse';
const description = 'Estimez une fourchette de prise de poids saine pendant la grossesse par semaine de gestation en vous appuyant sur les recommandations prénatales de l\'IOM et de l\'ACOG.';

const faq = [
  {
    question: 'Quelle quantité de poids dois-je prendre pendant la grossesse ?',
    answer: 'Cela dépend de votre IMC avant la grossesse. Les recommandations de l\'IOM prévoient 12,5-18 kg (28-40 lb) en cas d\'insuffisance pondérale, 11,5-16 kg (25-35 lb) pour un IMC normal, 7-11,5 kg (15-25 lb) en cas de surpoids et 5-9 kg (11-20 lb) en cas d\'obésité pour une grossesse unique. Confirmez toujours votre objectif personnel avec votre équipe prénatale.',
  },
  {
    question: 'Une grossesse gémellaire utilise-t-elle les mêmes recommandations ?',
    answer: 'Non. Les grossesses gémellaires ont des objectifs plus élevés dans toutes les catégories d\'IMC. Pour un IMC normal, la fourchette recommandée est de 17-25 kg (37-54 lb). Pour le surpoids, 14-23 kg (31-50 lb), et pour l\'obésité, 11-19 kg (25-42 lb). Il n\'existe pas de fourchette IOM établie pour les femmes sous-pondérales ayant une grossesse gémellaire ; l\'équipe clinique individualise le suivi.',
  },
  {
    question: 'Pourquoi la prise de poids attendue varie-t-elle si peu au premier trimestre ?',
    answer: 'Les recommandations de l\'IOM prévoient une prise totale très modérée au premier trimestre, d\'environ 0,5 à 2 kg, car le fœtus, le placenta et le liquide amniotique pèsent encore très peu. La prise hebdomadaire plus régulière, de 0,17 à 0,58 kg selon l\'IMC, commence au deuxième trimestre.',
  },
  {
    question: 'Je perds du poids au premier trimestre à cause des nausées. Dois-je m\'inquiéter ?',
    answer: 'Une légère perte de poids au premier trimestre est courante en raison des nausées et des aversions alimentaires. Tant que vous restez hydratée et ne perdez pas plus de quelques kilogrammes, cela n\'est généralement pas un sujet d\'inquiétude. Si les vomissements sont sévères, persistants ou provoquent une déshydratation, consultez votre médecin : il peut s\'agir d\'une hyperemésis gravidarum nécessitant un traitement.',
  },
  {
    question: 'Quel est le rythme idéal de prise de poids par semaine ?',
    answer: 'Après la semaine 13, les objectifs hebdomadaires sont : 0,44-0,58 kg pour l\'insuffisance pondérale, 0,35-0,50 kg pour un IMC normal, 0,23-0,33 kg pour le surpoids et 0,17-0,27 kg pour l\'obésité. Ce sont des moyennes : la prise réelle varie d\'une semaine à l\'autre selon la rétention d\'eau, les repàs et d\'autres facteurs.',
  },
  {
    question: 'Est-il sûr de faire du sport pour contrôler la prise de poids pendant la grossesse ?',
    answer: 'Oui, pour la plupart des femmes ayant une grossesse non compliquée. L\'ACOG recommande au moins 150 minutes d\'activité aérobie d\'intensité modérée par semaine. L\'exercice favorise une prise de poids saine, réduit le risque de diabète gestationnel et améliore le sommeil et l\'humeur. Consultez toujours votre équipe soignante avant de commencer ou de poursuivre une activité intense.',
  },
  {
    question: 'Combien de temps faut-il pour perdre le poids pris pendant la grossesse après l\'accouchement ?',
    answer: 'La plupart des femmes perdent environ 4,5-5,5 kg immédiatement après l\'accouchement (bébé, placenta, liquide amniotique). Une perte de liquide supplémentaire se produit durant la première semaine. Retrouver son poids d\'avant la grossesse prend généralement 6 à 12 mois avec une alimentation saine et une activité progressive. L\'allaitement peut aider, car il consomme environ 300-500 kcal supplémentaires par jour.',
  },
  {
    question: 'Ce calculateur peut-il diagnostiquer un problème de grossesse ?',
    answer: 'Non. Il s\'agit d\'une estimation éducative basée sur des recommandations à l\'échelle de la population. Il ne peut pas évaluer la croissance fœtale, la fonction placentaire, la tension artérielle, la glycémie ou tout symptôme médical. Toute variation de poids inexpliqée, tout gonflement, vomissement persistant ou toute préoccupation doivent toujours être discutés avec un obstétricien, une sage-femme ou un clinicien prénatal qualifié.',
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

const howTo = [
  {
    name: 'Saisissez les mesures d\'avant la grossesse',
    text: 'Ajoutez la taille et le poids avant la grossesse pour que l\'outil puisse estimer l\'IMC prégravidique.',
  },
  {
    name: 'Ajoutez les informations actuelles de la grossesse',
    text: 'Saisissez le poids actuel, la semaine de gestation et précisez si la grossesse est unique ou gémellaire.',
  },
  {
    name: 'Examinez la courbe',
    text: 'Comparez la prise actuelle avec la bande de prise saine estimée pour la semaine sélectionnée.',
  },
];

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
  operatingSystem: 'Any',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'calculateur-prise-poids-grossesse',
  faqTitle: 'Foire aux questions',
  bibliographyTitle: 'Bibliographie',
  seo: [
    {
      type: 'summary',
      title: 'Points essentiels sur la prise de poids pendant la grossesse',
      items: [
        'La prise de poids totale recommandée dépend exclusivement de votre IMC avant la grossesse, pas d\'un chiffre universel.',
        'Les recommandations IOM vont de 11 à 20 lb pour l\'obésité jusqu\'à 28 à 40 lb pour l\'insuffisance pondérale en grossesse unique.',
        'La prise de poids n\'est pas linéaire : le premier trimestre n\'attend que 0,5 à 2 kg au total, puis un rythme hebdomadaire plus stable commence.',
        'Les grossesses gémellaires ont des objectifs plus élevés dans toutes les catégories d\'IMC.',
        'Ce calculateur est un outil éducatif. Discutez toujours de vos objectifs personnels avec votre équipe de soins prénatals.',
      ],
    },
    {
      type: 'title',
      text: 'Calculateur de prise de poids pendant la grossesse : comprendre votre courbe de croissance prénatale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prendre le bon poids pendant la grossesse est l\'un des facteurs les plus importants pour la santé maternelle et le développement fœtal. Une prise insuffisante augmente le risque d\'accouchement prématuré, de petit poids de naissance et de restriction de croissance intra-utérine. Une prise excessive est associée au diabète gestationnel, à la césarienne, à la rétention de poids en post-partum et à la macrosomie. Ce calculateur utilise les recommandations établies de l\'<strong>IOM (Institute of Medicine)</strong> et de l\'<strong>ACOG (American College of Obstetricians and Gynecologists)</strong> pour tracer votre courbe personnalisée semaine par semaine.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 semaines', label: 'Durée d\'une grossesse à terme' },
        { value: '4 catégories', label: 'Fourchettes de prise basées sur l\'IMC (IOM)' },
        { value: '±0,5 kg/sem', label: 'Rythme typique au 2e trimestre' },
      ],
    },
    {
      type: 'title',
      text: 'Comment fonctionne le calculateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Vous saisissez votre taille et votre poids avant la grossesse pour que l\'outil calcule votre IMC prégravidique.',
        'Votre IMC est classé dans l\'une des quatre catégories IOM : insuffisance pondérale, normal, surpoids ou obésité.',
        'Chaque catégorie correspond à une fourchette de prise totale recommandée et à un rythme hebdomadaire pour le deuxième et le troisième trimestre.',
        'Le calculateur accepte également le poids actuel et la semaine de gestation pour situer où vous en êtes par rapport à la bande estimée.',
        'Les grossesses uniques et gémellaires utilisent des objectifs séparés car les besoins fœtaux et placentaires diffèrent significativement.',
      ],
    },
    {
      type: 'title',
      text: 'Recommandations IOM de prise de poids selon l\'IMC prégravidique',
      level: 3,
    },
    {
      type: 'table',
      headers: ['IMC prégravidique', 'Catégorie', 'Prise totale grossesse unique', 'Prise totale grossesse gémellaire', 'Rythme hebdomadaire (sem. 14-40)'],
      rows: [
        ['< 18,5', 'Insuffisance pondérale', '12,5-18 kg / 28-40 lb', 'Pas de fourchette IOM établie', '0,44-0,58 kg'],
        ['18,5-24,9', 'Poids normal', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Surpoids', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obésité', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Important :</strong> Ce sont des fourchettes de dépistage à l\'échelle de la population. Votre médecin peut définir un objectif personnalisé selon votre historique nutritionnel, vos grossesses précédentes, les échographies de croissance fœtale ou vos conditions médicales. Suivez toujours les conseils individualisés de votre clinicien.',
    },
    {
      type: 'title',
      text: 'Prise de poids trimestre par trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Premier trimestre (semaines 1 to 13)',
          description: 'Une prise modérée est attendue. Beaucoup de femmes prennent très peu ou même perdent du poids à cause des nausées.',
          points: [
            'Objectif IOM : environ 0,5 à 2 kg (1 à 4,4 lb) au total',
            'Les nausées et aversions alimentaires sont fréquentes et peuvent limiter les apports',
            'L\'embryon et le placenta ont encore très peu de poids à ce stade',
            'Privilégiez la qualité de l\'alimentation plutôt que la quantité',
          ],
        },
        {
          title: 'Deuxième trimestre (semaines 14 to 26)',
          description: 'La période de prise hebdomadaire la plus stable. L\'appétit s\'améliore généralement après la disparition des nausées.',
          points: [
            'Rythme hebdomadaire : environ 0,23 à 0,58 kg selon la catégorie d\'IMC',
            'Le fœtus croît rapidement en taille et en développement organique',
            'Le volume plasmatique augmente, contribuant au poids',
            'Les besoins en fer et en calcium augmentent significativement',
          ],
        },
        {
          title: 'Troisième trimestre (semaines 27 to 40)',
          description: 'La prise de poids continue à un rythme similaire au deuxième trimestre et peut ralentir à l\'approche du terme.',
          points: [
            'La déposition de graisse fœtale augmente substanciellement à partir de la semaine 28',
            'Le volume de liquide amniotique culmine autour des semaines 34-36',
            'Les œdèmes et la rétention d\'eau peuvent temporairement gonfler les lectures',
            'Certaines femmes prennent peu de poids dans les 1 à 2 dernières semaines avant l\'accouchement',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Où va réellement ce poids ?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Composante', 'Poids approximatif à terme'],
      rows: [
        ['Bébé', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Liquide amniotique', '0,8 kg / 1,8 lb'],
        ['Utérus (croissance)', '0,9 kg / 2 lb'],
        ['Tissu mammaire', '0,5 kg / 1,1 lb'],
        ['Augmentation du volume sanguin', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Liquide extracellulaire', '1,5 kg / 3,3 lb'],
        ['Réserves de graisse et de protéines maternelles', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Comme le montre cette répartition, la majeure partie du poids pris lors d\'une grossesse saine est du tissu fonctionnel - liquide, sang, fœtus, placenta et utérus - et non de la graisse. Comprendre cela aide à contextualiser pourquoi une prise suffisante est nécessaire même pour les femmes en surpoids avant la grossesse.',
    },
    {
      type: 'title',
      text: 'Conseils nutritionnels pour favoriser une prise de poids saine',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ajoutez environ 340 kcal/jour au deuxième trimestre et 450 kcal/jour au troisième, au-delà de vos besoins habituels.',
        'Privilégiez les protéines : visez au moins 70-80 g par jour pour soutenir la croissance tissulaire fœtale et l\'expansion du volume sanguin maternel.',
        'Incluez des aliments riches en fer (viande maigre, lentilles, céréales enrichies) pour prévenir l\'anémie, plus fréquente pendant la grossesse.',
        'Les besoins en calcium augmentent à 1 000 mg/jour : produits laitiers, laits végétaux enrichis, amandes et légumes verts sont de bonnes sources.',
        'Les acédes gras oméga-3 du poisson gras (2 portions par semaine) ou des suppléments d\'algues soutiennent le développement cérébral fœtal.',
        'L\'acide folique (400-600 mcg/jour) réduit le risque d\'anomalies du tube neural, surtout au premier trimestre.',
        'Restez bien hydratée : visez environ 2-3 litres de liquide par jour, davantage par chaleur ou lors d\'activité physique.',
        'Limitez les aliments ultra-transformés, les sucres ajoutés et les graisses trans, qui contribuent à une prise de poids gestationnelle excessive.',
      ],
    },
    {
      type: 'title',
      text: 'Activité physique et gestion du poids pendant la grossesse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'ACOG recommande au moins <strong>150 minutes par semaine</strong> d\'activité aérobie d\'intensité modérée pour les femmes ayant une grossesse non compliquée. L\'exercice régulier favorise une prise de poids saine, réduit le risque de diabète gestationnel et de prééclampsie, améliore le sommeil et soulève le mal de dos. La marche, la natation, le yoga prénatal et le vélo stationnaire sont bien tolérés tout au long de la grossesse. Consultez toujours votre médecin avant de commencer ou de poursuivre une activité intense.',
    },
    {
      type: 'title',
      text: 'Signes d\'alerte liés aux variations de poids pendant la grossesse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Une prise soudaine de plus de 1 kg en une seule semaine, surtout après la semaine 20, peut indiquer une rétention de liquide liée à la prééclampsie.',
        'Un gonflement rapide des mains, du visage ou des chevilles avec des maux de tête ou des troubles visuels nécessite une attention médicale immédiate.',
        'Une perte de poids persistante après le premier trimestre, ou l\'incapacité à garder nourriture et liquides, peut indiquer une hypermésis gravidarum.',
        'Une prise de poids très lente ou stagnante malgré des apports suffisants peut justifier une échographie de croissance fœtale.',
        'Tout changement de poids inexpliqé doit être discuté avec un obstétricien ou une sage-femme plutôt que géré seul.',
      ],
    },
    {
      type: 'title',
      text: 'Grossesse unique et grossesse gémellaire : différences clés',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Grossesse unique',
          description: 'Un fœtus, un placenta. Le scénario le plus courant avec des objectifs IOM bien établis.',
          points: [
            'Prise totale : 5 à 18 kg selon l\'IMC prégravidique',
            'Rythme hebdomadaire stable de 0,17 à 0,58 kg à partir de la semaine 14',
            'Surplus calorique moindre requis (340-450 kcal/jour)',
            'Taux d\'accouchement prématuré : environ 10 %',
          ],
        },
        {
          title: 'Grossesse gémellaire',
          description: 'Deux fœtus, des exigences généralement plus élevées sur tous les plans. Les objectifs sont plus hauts dans toutes les catégories d\'IMC.',
          points: [
            'Prise totale : 11 à 25 kg selon l\'IMC prégravidique',
            'Rythme hebdomadaire plus élevé, surtout au deuxième trimestre',
            'Besoins caloriques et protéiques plus importants',
            'Les équipes cliniques individualisent les objectifs plus précisément',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Idées reçues sur la prise de poids prénatale',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'La prise de poids n\'est pas équivalente à une prise de graisse. La majeure partie est du sang, du liquide, du placenta et du bébé, pas de la graisse stockée.',
        'Manger pour deux ne signifie pas doubler les apports. Le besoin calorique supplémentaire au deuxième trimestre correspond environ à un verre de lait et une banane.',
        'Être au-dessus de la fourchette recommandée n\'implique pas automatiquement que vous ou votre bébé êtes en danger : les fourchettes sont des lignes directrices statistiques, pas des seuils absolus.',
        'Les femmes obèses ont besoin de prendre du poids pendant la grossesse. L\'IOM recommande encore une prise nette de 5 à 9 kg.',
        'La balance n\'est pas la mesure la plus importante d\'une grossesse saine : la croissance fœtale, la tension artérielle, la glycémie et les évaluations cliniques comptent davantage.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IMC (Indice de Masse Corporelle)',
          definition: 'Rapport entre le poids et le carré de la taille utilisé pour classer les catégories de poids corporel. En soins prénatals, l\'IMC avant la grossesse détermine la fourchette de prise de poids adaptée.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Aujourd\'hui la National Academy of Medicine. A publié en 2009 les recommandations de référence sur la prise de poids gestationnelle, largement utilisées par les cliniciens du monde entier.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Le principal organisme professionnel américain pour les soins obstétrico-gynécologiques. Soutient les recommandations IOM et fournit des orientations cliniques complémentaires.',
        },
        {
          term: 'Âge gestationnel',
          definition: 'L\'age de la grossesse mesuré en semaines à partir du premier jour des dernières règles. Une grossesse à terme dure généralement 39 à 40 semaines.',
        },
        {
          term: 'Macrosomie',
          definition: 'Situation dans laquelle le bébé croît plus que prévu, généralement définie par un poids de naissance supérieur à 4 kg. Associée à une prise de poids gestationnelle excessive et au diabète gestationnel.',
        },
        {
          term: 'Restriction de croissance intra-utérine (RCIU)',
          definition: 'Situation dans laquelle le fœtus croît moins vite que prévu. Peut être liée à une prise de poids insuffisante, à des problèmes placentaires ou à d\'autres facteurs de santé maternelle.',
        },
        {
          term: 'Prééclampsie',
          definition: 'Complication de la grossesse caractérisée par une hypertension artérielle et des signes d\'atteinte d\'autres organes. Une prise de poids rapide et soudaine due à une rétention hydrique est un signe d\'alerte possible.',
        },
        {
          term: 'Hypermésis gravidarum',
          definition: 'Nausées et vomissements graves et persistants pendant la grossesse, allant au-delà des nausées matinales habituelles, pouvant entraîner une perte de poids et une déshydratation nécessitant un traitement médical.',
        },
      ],
    },
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    educationalWarningTitle: 'Avertissement éducatif',
    educationalWarningBody: 'Ce calculateur est destiné à l\'éducation prénatale uniquement. Il ne diagnostique pas la santé maternelle ou fœtale, ne remplace pas un avis médical individualisé et ne tient pas compte des symptômes, de la rétention d\'eau, du risque de diabète, de la croissance fœtale, des antécédents nutritionnels ou des objectifs fixés par le clinicien.',
    inputsTitle: 'Profil de grossesse',
    unitsLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    heightCmLabel: 'Taille (cm)',
    heightFtLabel: 'Taille (ft)',
    heightInLabel: 'Taille (in)',
    preWeightKgLabel: 'Poids avant grossesse (kg)',
    currentWeightKgLabel: 'Poids actuel (kg)',
    preWeightLbLabel: 'Poids avant grossesse (lb)',
    currentWeightLbLabel: 'Poids actuel (lb)',
    weekLabel: 'Semaine de gestation',
    pregnancyTypeLabel: 'Type de grossesse',
    singletonLabel: 'Unique',
    twinsLabel: 'Gémellaire',
    bmiCardTitle: 'IMC prégravidique',
    recommendationTitle: 'Prise recommandée',
    currentGainTitle: 'Prise actuelle',
    chartTitle: 'Courbe de prise de poids prénatale',
    weekShortLabel: 'sem',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Fourchette totale',
    weeklyRangeLabel: 'Rythme hebdomadaire après la semaine 13',
    firstTrimesterLabel: 'Premier trimestre: prise totale d\'environ 0,5 à 2 kg',
    statusBelow: 'En dessous de la bande estimée',
    statusWithin: 'Dans la bande estimée',
    statusAbove: 'Au-dessus de la bande estimée',
    statusBelowBody: 'Votre prise actuelle est en dessous de la bande estimée pour cette semaine. Demandez à votre clinicien prénatal si la nutrition, les nausées, la croissance fœtale ou la datation doivent être réévaluées.',
    statusWithinBody: 'Votre prise actuelle se situe dans la bande estimée pour cette semaine. Continuez à suivre votre plan prénatal individualisé.',
    statusAboveBody: 'Votre prise actuelle est au-dessus de la bande estimée pour cette semaine. Évaluez la tendance avec votre clinicien, surtout si la prise est soudaine ou accompagnée de gonflements ou de symptômes.',
    categoryUnderweight: 'Insuffisance pondérale',
    categoryNormal: 'IMC normal',
    categoryOverweight: 'Surpoids',
    categoryObesity: 'Obésité',
    totalGainSuffix: 'prise totale',
    perWeekSuffix: 'par semaine',
    chartLowLabel: 'Bande inférieure',
    chartHighLabel: 'Bande supérieure',
    chartCurrentLabel: 'Actuel',
  },
};

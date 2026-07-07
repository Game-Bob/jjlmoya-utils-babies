import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Chronomètre de Contractions';
export const description = 'Suivez la durée et la fréquence des contractions avec un grand bouton tactile, une respiration guidée, un historique et une alerte pour le schéma 5-1-1.';

export const faq = [
  {
    question: 'Qu\'est-ce que la règle du 5-1-1 pour les contractions ?',
    answer: 'La règle du 5-1-1 signifie généralement que les contractions sont espacées d\'environ 5 minutes, durent environ 1 minute et se maintiennent pendant environ 1 heure. De nombreuses équipes de maternité l\'utilisent comme signal pratique pour appeler et demander conseil, mais votre projet de naissance peut être différent.',
  },
  {
    question: 'Quand dois-je contacter ma sage-femme ou l\'hôpital ?',
    answer: 'Contactez votre équipe de maternité lorsque les contractions deviennent régulières, intenses ou correspondent aux consignes de rythme qui vous ont été données. Appelez en urgence en cas de saignements abondants, de diminution des mouvements fœtaux, de fièvre, de douleur intense, de perte des eaux avec inquiétude ou si vous sentez que quelque chose ne va pas.',
  },
  {
    question: 'Ce chronomètre diagnostique-t-il le travail actif ?',
    answer: 'Non. Il enregistre les temps et met en évidence un schéma de contractions courant. Les modifications du col, la position du bébé, l\'état des membranes, les symptômes et vos antécédents cliniques nécessitent une évaluation par un professionnel de santé qualifié.',
  },
  {
    question: 'Comment la fréquence des contractions est-elle calculée ?',
    answer: 'La fréquence est calculée du début d\'une contraction au début de la contraction précédente. La durée est calculée à partir du moment où vous appuyez sur démarrer jusqu\'au moment où vous appuyez sur arrêter.',
  },
  {
    question: 'Puis-je l\'utiliser pendant le travail prodromique ?',
    answer: 'Oui. Cela peut vous aider à voir si les contractions deviennent plus régulières ou si elles s\'estompent. Si les contractions restent irrégulières, changent avec le repos ou l\'hydratation, ou ne s\'intensifient pas, elles peuvent encore être prodromiques, mais votre équipe soignante peut vous guider.',
  },
  {
    question: 'Pourquoi la respiration guidée est-elle incluse ?',
    answer: 'Une respiration lente et régulière peut aider à réduire la tension, à se concentrer et à mieux gérer chaque contraction. L\'animation n\'est qu\'une aide au confort et ne remplace pas l\'accompagnement à la naissance.',
  },
  {
    question: 'Dois-je attendre le 5-1-1 si ce n\'est pas mon premier bébé ?',
    answer: 'Pas toujours. Le travail peut progresser plus rapidement après un accouchement vaginal antérieur. Suivez le plan de votre sage-femme ou obstétricien, surtout en cas de grossesse à risque, si vous habitez loin de l\'hôpital ou si vous avez eu des accouchements rapides auparavant.',
  },
  {
    question: 'Mon historique de contractions est-il sauvegardé ?',
    answer: 'Le chronomètre stocke les enregistrements récents dans votre navigateur afin que vous puissiez rafraîchir la page sans perdre la session. Utilisez le bouton de réinitialisation pour effacer l\'historique local.',
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

export const howTo = [
  {
    name: 'Démarrer le chronométrage',
    text: 'Appuyez sur le bouton principal lorsqu\'une contraction commence.',
  },
  {
    name: 'Utiliser le guide de respiration',
    text: 'Suivez le cercle qui s\'agrandit et se contracte pendant que la contraction est active.',
  },
  {
    name: 'Arrêter le chronométrage',
    text: 'Appuyez à nouveau sur le bouton lorsque la contraction se termine pour que la durée et l\'intervalle soient enregistrés.',
  },
  {
    name: 'Analyser le schéma',
    text: 'Consultez l\'historique et le panneau d\'alerte pour décider si vous devez contacter votre équipe de maternité.',
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
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<LaborContractionTimerUI> = {
  title,
  description,
  slug: 'chronometre-contractions',
  faqTitle: 'Questions fréquentes',
  bibliographyTitle: 'Bibliographie',
  seo: [
    {
      type: 'summary',
      title: 'Points clés sur le chronométrage des contractions',
      items: [
        'La durée se mesure du début d\'une contraction à sa fin.',
        'La fréquence se mesure du début d\'une contraction au début de la suivante.',
        'Le schéma 5-1-1 signifie environ 5 minutes d\'intervalle, 1 minute de durée, pendant 1 heure.',
        'Le chronométrage des contractions aide à la prise de décision mais ne peut pas confirmer à lui seul la dilatation du col ou le travail actif.',
        'Suivez toujours les consignes de votre propre sage-femme, obstétricien ou maternité.',
      ],
    },
    {
      type: 'title',
      text: 'Chronomètre de Contractions: Suivez Durée, Fréquence et Schémas 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un chronomètre de contractions aide les familles à transformer un moment stressant et difficile à évaluer en un enregistrement clair. En fin de grossesse, il est fréquent de se demander si les contractions sont encore des contractions d\'entraînement irrégulières, un travail prodromique, un début de travail ou un schéma qui mérite un appel à la maternité. En appuyant sur démarrer quand une contraction commence et sur arrêter quand elle se termine, cet outil calcule la <strong>durée</strong> en secondes et la <strong>fréquence</strong> en minutes du début d\'une contraction au début de la suivante.',
    },
    {
      type: 'paragraph',
      html: 'L\'objectif n\'est pas de diagnostiquer le travail. L\'objectif est de vous aider à décrire ce qui se passe en termes concrets: combien de temps dure chaque contraction, à quelle fréquence elles se produisent, si le schéma se renforce et s\'il est resté suffisamment constant pour correspondre aux repères courants comme la règle du 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Signal de fréquence courant' },
        { value: '60 s', label: 'Durée typique du 5-1-1' },
        { value: '1 heure', label: 'Fenêtre de stabilité du schéma' },
      ],
    },
    {
      type: 'title',
      text: 'Comment interpréter l\'alerte 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La règle du 5-1-1 est un repère largement utilisé: les contractions sont espacées d\'environ 5 minutes, durent environ 1 minute et se maintiennent pendant environ 1 heure. De nombreuses équipes de naissance utilisent ce schéma comme signal pratique pour appeler et recevoir des conseils personnalisés, surtout pour un premier accouchement. Ce chronomètre met en évidence le schéma lorsque les contractions récentes sont espacées de 5 minutes ou moins, durent au moins 60 secondes et se sont maintenues tout au long de la session.',
    },
    {
      type: 'table',
      headers: ['Schéma observé', 'Ce qu\'il peut suggérer', 'Prochaine étape utile'],
      rows: [
        ['Rythme irrégulier, durée variable', 'Un travail prodromique ou un début de travail est possible', 'Reposez-vous, hydratez-vous, changez de position et continuez à observer sauf en cas de symptômes d\'alerte'],
        ['Les contractions se rapprochent mais durent encore moins de 60 secondes', 'Le travail progresse peut-être mais ne correspond pas encore au 5-1-1', 'Continuez à chronométrer et suivez les consignes de votre projet de naissance'],
        ['Environ 5 min d\'intervalle, 60 s de durée, depuis environ 1 heure', 'Schéma d\'appel 5-1-1 courant', 'Contactez votre sage-femme, obstétricien ou maternité pour des conseils personnalisés'],
        ['Contractions soudaines et intenses, pression ou envie de pousser', 'Le travail progresse peut-être rapidement', 'Appelez immédiatement, surtout si ce n\'est pas votre premier bébé'],
      ],
    },
    {
      type: 'title',
      text: 'Comment chronométrer correctement les contractions',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Appuyez sur démarrer au début de la sensation de tension, de crampe ou de vague.',
        'Appuyez sur arrêter lorsque la contraction s\'estompe clairement et que vous pouvez vous détendre à nouveau.',
        'Ne mesurez pas la fréquence de la fin d\'une contraction au début de la suivante. Cliniquement, la fréquence se compte de début à début.',
        'Enregistrez plusieurs contractions avant d\'interpréter le schéma, car une contraction isolée peut être trompeuse.',
        'Utilisez d\'abord les consignes de votre équipe de maternité si elle vous a donné un seuil différent du 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Travail prodromique et travail actif: quels schémas ?',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Souvent prodromique ou début de travail',
          description: 'Les contractions peuvent être inconfortables et réelles, mais le schéma n\'avance peut-être pas encore régulièrement vers l\'accouchement.',
          points: [
            'Les intervalles varient au lieu de se raccourcir de façon constante',
            'Les contractions peuvent s\'atténuer avec le repos, l\'hydratation, un bain ou un changement de position',
            'L\'intensité peut rester similaire au lieu d\'augmenter avec le temps',
            'Le col peut changer lentement ou très peu, ce que seul un clinicien peut évaluer',
          ],
        },
        {
          title: 'Plus évocateur du travail actif',
          description: 'Le schéma devient plus régulier, plus difficile à traverser en parlant, et de plus en plus fort.',
          points: [
            'Les contractions se rapprochent sur plusieurs enregistrements',
            'Chaque contraction dure environ 45 à 70 secondes ou plus',
            'Vous devez faire une pause, respirer ou vous concentrer pendant le pic',
            'Le schéma persiste même après le repos, l\'hydratation ou le changement de position',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quand ne pas attendre le chronomètre',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Note de sécurité :</strong> N\'attendez pas l\'alerte du chronomètre si vous avez des saignements abondants, une diminution des mouvements fœtaux, des maux de tête sévères, de la fièvre, un liquide vert ou malodorant, une douleur constante et intense, des symptômes de prééclampsie ou toute autre inquiétude urgente. Appelez votre équipe de maternité ou les services d\'urgence selon les consignes locales.',
    },
    {
      type: 'title',
      text: 'Ce que montre l\'historique',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Heure de début: l\'heure à laquelle la contraction a commencé.',
        'Durée: heure de fin moins heure de début, arrondie en secondes.',
        'Intervalle: heure de début actuelle moins l\'heure de début de la contraction précédente, affiché en minutes.',
        'Tendance récente: si les contractions s\'espacent, restent irrégulières ou deviennent plus régulières.',
      ],
    },
    {
      type: 'title',
      text: 'Erreurs courantes de chronométrage',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Arrêter le chronomètre au pic au lieu d\'attendre que la contraction s\'estompe complètement.',
        'Démarrer tard parce que la contraction était légère au début, ce qui donne une durée plus courte.',
        'Ne compter que les contractions les plus fortes et ignorer les plus petites entre les deux.',
        'Supposer que le 5-1-1 signifie toujours une admission immédiate à l\'hôpital. Cela signifie généralement appeler pour obtenir des conseils, pas s\'autodiagnostiquer un travail actif.',
        'Attendre trop longtemps pour un deuxième accouchement ou les suivants, où la progression peut être plus rapide que pour le premier.',
      ],
    },
    {
      type: 'title',
      text: 'Limites cliniques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le chronométrage des contractions n\'est qu\'une partie de l\'évaluation du travail. La dilatation du col, le bien-être fœtal, la gestion de la douleur, la rupture des membranes, l\'âge gestationnel, les antécédents d\'accouchement, le statut de streptocoque du groupe B, la distance de l\'hôpital, les facteurs de risque de la grossesse et les symptômes maternels peuvent tous modifier ce que votre équipe recommande. Utilisez l\'historique comme un enregistrement clair à partager avec votre sage-femme, obstétricien, doula ou infirmière de triage.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Durée',
          definition: 'La longueur d\'une contraction, mesurée du moment où elle commence jusqu\'à son terme.',
        },
        {
          term: 'Fréquence',
          definition: 'Le temps écoulé entre le début d\'une contraction et le début de la contraction suivante.',
        },
        {
          term: 'Règle du 5-1-1',
          definition: 'Un schéma de chronométrage du travail courant: contractions toutes les 5 minutes environ, durant environ 1 minute, se maintenant pendant environ 1 heure.',
        },
        {
          term: 'Travail prodromique',
          definition: 'Une période de contractions réelles qui peuvent être inconfortables et récurrentes mais qui ne progresse pas toujours régulièrement vers le travail actif.',
        },
        {
          term: 'Travail actif',
          definition: 'Une phase du travail avec des contractions plus fortes et plus régulières et des modifications du col, confirmée par une évaluation clinique.',
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
    safetyTitle: 'À utiliser avec votre projet de naissance',
    safetyBody: 'Ce chronomètre est destiné au suivi et à l\'information. Contactez votre sage-femme, obstétricien ou maternité en cas de doute, si les symptômes vous inquiètent ou si l\'on vous a donné des consignes différentes.',
    idleStatus: 'Prêt à chronométrer la prochaine contraction',
    activeStatus: 'Contraction en cours',
    accidentalTapStatus: 'Trop court',
    shortRecordLabel: 'Appui court ou test',
    activeRowLabel: 'Active maintenant',
    startButton: 'Démarrer la contraction',
    stopButton: 'Arrêter la contraction',
    activeLabel: 'Contraction active',
    breathingLabel: 'Respirez lentement',
    breatheIn: 'Inspirez',
    breatheOut: 'Expirez',
    currentDurationLabel: 'Durée actuelle',
    lastIntervalLabel: 'Dernier intervalle',
    contractionCountLabel: 'Enregistrées',
    patternStatusTitle: 'État du schéma',
    patternStatusIdle: 'Prêt à enregistrer',
    patternStatusTracking: 'Continuez à enregistrer',
    patternStatusBuilding: 'Le schéma se renforce',
    patternStatusCall: 'Appelez votre équipe de maternité',
    patternStatusActiveBody: 'Vous avez commencé l\'enregistrement. Quelques contractions supplémentaires sont nécessaires avant que le schéma ne soit significatif.',
    patternStatusBuildingBody: 'Les contractions récentes se rapprochent ou durent plus longtemps. Continuez à chronométrer et préparez-vous à appeler si elles persistent.',
    patternStatusCallBody: 'Les contractions récentes se rapprochent du schéma 5-1-1. Contactez maintenant votre sage-femme, obstétricien ou maternité pour des conseils personnalisés.',
    averageLastThreeLabel: 'Moyenne des 3 dernières',
    averageLastSixLabel: 'Moyenne des 6 dernières',
    regularityLabel: 'Régularité',
    regularityNotEnough: 'Données insuffisantes',
    regularityIrregular: 'Irrégulier',
    regularityVariable: 'Variable',
    regularityRegular: 'Régulier',
    summaryTitle: 'Résumé pour le téléphone',
    summaryEmpty: 'Enregistrez au moins trois contractions pour constituer un résumé utile pour votre équipe de maternité.',
    copySummaryButton: 'Copier le résumé',
    copiedSummaryButton: 'Copié',
    undoButton: 'Annuler la dernière',
    sessionOverviewTitle: 'Aperçu de la session',
    sessionOverviewBody: 'Commencez à chronométrer quand une contraction débute. La contraction active apparaîtra ici immédiatement.',
    lastContractionLabel: 'Dernière contraction',
    historyTitle: 'Historique des contractions',
    emptyHistory: 'Aucune contraction enregistrée pour le moment.',
    startTimeHeader: 'Heure de début',
    durationHeader: 'Durée',
    intervalHeader: 'Intervalle',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Réinitialiser',
    alertTitle: 'Schéma 5-1-1 détecté',
    alertBody: 'Vos contractions récentes se rapprochent du schéma 5-1-1 habituel. Envisagez de contacter votre sage-femme ou votre maternité maintenant pour des conseils personnalisés.',
    patternTitle: 'Ce que vérifie l\'alerte',
    patternBody: 'Le panneau apparaît lorsque les contractions récentes sont espacées de 5 minutes ou moins, durent au moins 60 secondes et maintiennent ce schéma pendant environ 1 heure.',
  },
};

import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calendrier-vaccination-bebe-espagne';
const title = 'Calendrier de Vaccination en Espagne';
const description = 'Calculez les dates exactes de vaccination de votre bébé selon le calendrier AEP 2026.';
const faq = [
  {
    question: "Qu'est-ce que le calendrier de vaccination AEP 2026 ?",
    answer: "C'est le calendrier de vaccinations recommandé par l'Association Espagnole de Pédiatrie pour 2026. Il comprend tous les vaccins systématiques et optionnels pour les bébés et les enfants de la naissance à 14 ans.",
  },
  {
    question: "La vaccination de mon bébé est-elle obligatoire ?",
    answer: "En Espagne, la vaccination n'est pas légalement obligatoire, mais elle est fortement recommandée. Les vaccins du calendrier systématique sont gratuits et administrés dans les centres de santé publics.",
  },
  {
    question: "Que se passe-t-il si nous manquons une dose ?",
    answer: "Si une dose est retardée, il n'est pas nécessaire de recommencer depuis le début. Votre pédiatre vous indiquera comment reprendre le calendrier là où il a été interrompu. L'essentiel est de compléter le schéma le plus tôt possible.",
  },
  {
    question: "Peut-on administrer plusieurs vaccins le même jour ?",
    answer: "Oui, il est courant et sans danger d'administrer plusieurs vaccins lors de la même visite. Les vaccins combinés comme l'hexavalent protègent déjà contre six maladies en une seule injection.",
  },
];
const howTo = [
  {
    name: "Saisissez la date de naissance",
    text: "Entrez le jour, le mois et l'année de naissance de votre bébé dans les champs correspondants.",
  },
  {
    name: "Consultez le prochain rendez-vous",
    text: "La calculatrice vous indique automatiquement quand est la prochaine vaccination et quels vaccins sont prévus.",
  },
  {
    name: "Consultez le calendrier complet",
    text: "Développez les sections des rendez-vous passés et futurs pour voir l'intégralité du calendrier de vaccination.",
  },
  {
    name: "Exportez les rappels",
    text: "Appuyez sur le bouton pour télécharger un fichier .ics avec tous les rendez-vous futurs et les ajouter au calendrier de votre téléphone.",
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: "Date de naissance du bébé",
    placeholderDD: "JJ",
    placeholderMM: "MM",
    placeholderAAAA: "AAAA",
    emptyMsg: "Saisissez le jour, le mois et l'année de naissance de votre bébé pour afficher le calendrier de vaccination.",
    invalidMsg: "La date saisie n'est pas valide.",
    futureMsg: "Un bébé ne peut pas être né dans le futur.",
    labelNextAppointment: "Prochain rendez-vous calculé",
    btnAddReminder: "Ajouter un rappel sur le téléphone",
    btnToday: "C'est aujourd'hui ! N'oubliez pas le carnet",
    labelPassed: "Rendez-vous passés",
    labelFuture: "Calendrier futur",
    labelStatusOk: "OK",
    labelStatusPending: "EN ATT.",
    labelSource: "Source : AEP 2026",
    labelShare: "Partager ces dates",
    faqTitle: "Questions fréquentes",
    bibliographyTitle: "Références",
  },
  seo: [
    { type: 'title', text: "Calculateur de vaccins : quand est le prochain rendez-vous de mon enfant ?", level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95 %', label: 'Efficacité' },
      { value: '14', label: 'Doses totales' },
      { value: 'Public', label: 'Coût AEP' },
      { value: 'Élevée', label: 'Sécurité' },
    ]},
    { type: 'tip', html: "Le calendrier AEP 2026 comprend d'importantes nouveautés, notamment l'extension du vaccin contre le méningocoque B et la mise à jour des recommandations pour le HPV chez les deux sexes dès 12 ans." },
    { type: 'title', text: 'Nouveautés du calendrier AEP 2026', level: 3 },
    { type: 'list', items: [
      "Méningocoque B (Bexsero) : schéma 2+1 consolidé avec des doses à 2, 4 et 12 mois.",
      "HPV étendu à tous les adolescents à partir de 12 ans, quel que soit le sexe.",
      "Pneumocoque : recommandation mise à jour avec VPC15 ou VPC20 selon la disponibilité régionale.",
      "Rotavirus : vaccin oral inclus dans le calendrier systématique dans toutes les communautés.",
      "Tdca : rappel recommandé à 6 et 12 ans pour maintenir l'immunité contre la coqueluche.",
    ]},
    { type: 'title', text: "Différences entre les communautés autonomes d'Espagne", level: 3 },
    { type: 'list', items: [
      "Certaines communautés incluent des vaccins supplémentaires non prévus dans le calendrier national.",
      "Le financement du rotavirus varie selon la communauté, bien que la tendance soit à la couverture universelle.",
      "Le méningocoque ACWY peut être administré à des âges légèrement différents selon le protocole régional.",
      "Consultez toujours votre pédiatre ou le centre de santé local pour confirmer le calendrier en vigueur.",
    ]},
    { type: 'title', text: 'Comment exporter le calendrier sur votre téléphone', level: 3 },
    { type: 'list', items: [
      "Saisissez la date de naissance de votre bébé dans le calculateur.",
      'Appuyez sur le bouton "Ajouter un rappel sur le téléphone" pour télécharger le fichier .ics.',
      "Ouvrez le fichier avec votre application de calendrier (Google Calendar, Apple Calendar, etc.).",
      "Tous les événements de vaccination seront enregistrés avec la date et les vaccins correspondants.",
    ]},
    { type: 'title', text: 'Effets secondaires habituels', level: 3 },
    { type: 'list', items: [
      "Rougeur ou gonflement au site d'injection : disparaît en 1 à 2 jours.",
      "Fièvre légère (37,5–38,5 °C) : normale dans les premières 24 à 48 heures.",
      "Irritabilité ou pleurs : fréquents chez les bébés après les premières doses.",
      "Somnolence ou perte d'appétit transitoire : aucun traitement nécessaire.",
      "Les réactions graves comme l'anaphylaxie sont extrêmement rares (moins d'1 par million de doses).",
    ]},
    { type: 'tip', html: "Amener le bébé bien nourri et habillé confortablement facilite la visite. Après le vaccin, le contact peau à peau ou l'allaitement maternel aide à calmer la douleur et l'inflammation naturellement." },
    { type: 'summary', title: "Ce qu'il faut retenir", items: [
      "Le calendrier AEP 2026 comprend 14 doses jusqu'à 12 ans pour une protection complète.",
      "Les vaccins de la première année protègent contre jusqu'à 9 maladies graves simultanément.",
      "Les effets secondaires légers sont normaux et disparaissent en 1 à 2 jours.",
      "Vous pouvez exporter tous les rendez-vous de vaccination vers le calendrier de votre téléphone en un seul clic.",
      "Consultez toujours votre pédiatre si vous avez des questions sur le calendrier de votre région.",
    ]},
  ],
  faqTitle: "Questions fréquentes",
  faq,
  bibliographyTitle: "Références",
  bibliography: [
    {
      name: "Association Espagnole de Pédiatrie - Calendrier de Vaccination 2026",
      url: "https://www.aeped.es/comite-vacunas/calendario-vacunaciones",
    },
    {
      name: "Ministère de la Santé Espagne - Calendrier de Vaccination",
      url: "https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm",
    },
    {
      name: "OMS - Vaccination",
      url: "https://www.who.int/fr/health-topics/vaccines-and-immunization",
    },
    {
      name: "CDC - Calendrier de vaccination recommandé pour les enfants et les adolescents",
      url: "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html",
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

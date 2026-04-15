import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calendrier-vaccination-espagne-bebes';
const title = 'Calendrier de Vaccination en Espagne';
const description = 'Calculez les dates exactes de vaccination de votre bébé selon le calendrier AEP 2026.';
const faq = [
  {
    question: 'Qu\'est-ce que le calendrier de vaccination AEP 2026 ?',
    answer: 'C\'est le calendrier de vaccinations recommandé par l\'Association Espagnole de Pédiatrie pour l\'année 2026. Il inclut tous les vaccins systématiques et optionnels pour les bébés et les enfants de la naissance jusqu\'à 14 ans.',
  },
  {
    question: 'Est-il obligatoire de vacciner mon bébé selon ce calendrier ?',
    answer: 'En Espagne, la vaccination n\'est pas légalement obligatoire, mais elle est fortement recommandée. Les vaccins du calendrier systématique sont gratuits et sont administrés dans les centres de santé publics.',
  },
  {
    question: 'Que se passe-t-il si nous sautons une dose ?',
    answer: 'Si une dose est retardée, il n\'est pas nécessaire de recommencer à zéro. Votre pédiatre vous indiquera comment reprendre le calendrier là où vous vous êtes arrêté. L\'important est de compléter le schéma le plus rapidement possible.',
  },
  {
    question: 'Puis-je administrer plusieurs vaccins le même jour ?',
    answer: 'Oui, il est courant et sûr d\'administrer plusieurs vaccins lors de la même visite. Les vaccins combinés comme l\'hexavalent protègent déjà contre six maladies en une seule injection.',
  },
  {
    question: 'Les vaccins sont-ils sûrs pour les bébés prématurés ?',
    answer: 'Les bébés prématurés doivent être vaccinés selon leur âge chronologique (depuis la naissance), et non selon leur âge corrigé, sauf indication spécifique du néonatalogiste. Ils ont la priorité car ils sont plus vulnérables.',
  },
];
const howTo = [
  {
    name: 'Saisissez la date de naissance',
    text: 'Inscrivez le jour, le mois et l\'année de naissance de votre bébé dans les champs correspondants.',
  },
  {
    name: 'Consultez le prochain rendez-vous',
    text: 'Le calculateur vous indique automatiquement quand aura lieu la prochaine vaccination et quels vaccins correspondent.',
  },
  {
    name: 'Consultez le calendrier complet',
    text: 'Déployez les sections des rendez-vous passés et futurs pour voir tout le calendrier de vaccination.',
  },
  {
    name: 'Exportez les rappels',
    text: 'Appuyez sur le bouton pour télécharger un fichier .ics avec tous les futurs rendez-vous et les ajouter au calendrier de votre mobile.',
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
    labelBirthDate: 'Date de naissance du bébé',
    placeholderDD: 'JJ',
    placeholderMM: 'MM',
    placeholderAAAA: 'AAAA',
    emptyMsg: 'Saisissez le jour, le mois et l\'année de naissance de votre bébé pour voir le calendrier de vaccination.',
    invalidMsg: 'La date saisie n\'est pas valide.',
    futureMsg: 'Un bébé ne peut pas être né dans le futur.',
    labelNextAppointment: 'Prochain rendez-vous calculé',
    btnAddReminder: 'Ajouter un rappel sur mobile',
    btnToday: 'C\'est aujourd\'hui ! N\'oubliez pas le carnet',
    labelPassed: 'Rendez-vous passés',
    labelFuture: 'Calendrier futur',
    labelStatusOk: 'OK',
    labelStatusPending: 'EN ATT.',
    labelSource: 'Source : AEP 2026',
    labelShare: 'Partager ces dates',
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références',
    labelMonth: 'mois',
    labelMonths: 'mois',
    labelYear: 'an',
    labelYears: 'ans',
    labelDay: 'jour',
    labelDays: 'jours',
    labelAnd: 'et',
    labelVaccination: 'Vaccination',
    labelAppointment: 'Rendez-vous de vaccination',
    vac_hexavalente: 'Hexavalent',
    vac_neumococo: 'Pneumocoque (VCN15/20)',
    vac_meningococo_b: 'Méningocoque B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Méningocoque ACWY',
    vac_triple_virica: 'ROR (Rougeole, Oreillons, Rubéole)',
    vac_varicela: 'Varicelle',
    vac_gripe: 'Grippe (Saisonnière)',
    vac_vph: 'HPV (Papillomavirus)',
    vac_tdpa: 'dTcaP (Tétanos, Diphtérie, Coqueluche)',
    vac_polio_booster: 'Polio (Rappel)',
  },
  seo: [
    { type: 'title', text: 'Calculateur de Vaccins : Quand est le prochain pour mon enfant ?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Efficacité' },
      { value: '14', label: 'Doses totales' },
      { value: 'Public', label: 'Coût AEP' },
      { value: 'Élevée', label: 'Sécurité' },
    ]},
    { type: 'tip', html: 'Le calendrier AEP 2026 inclut des nouveautés importantes comme l\'extension du vaccin contre le méningocoque B et la mise à jour des recommandations pour le HPV pour les deux sexes dès 12 ans.' },
    { type: 'title', text: 'Nouveautés du Calendrier AEP 2026', level: 3 },
    { type: 'list', items: [
      'Méningocoque B (Bexsero) : schéma 2+1 consolidé avec des doses à 2, 4 et 12 mois.',
      'HPV étendu à tous les adolescents dès 12 ans, quel que soit le sexe.',
      'Pneumocoque : recommandation mise à jour avec VCN15 ou VCN20 selon la disponibilité régionale.',
      'Rotavirus : vaccin oral inclus dans le calendrier systématique dans toutes les communautés.',
      'dTcaP : rappel recommandé à 6 et 12 ans pour maintenir l\'immunité contre la coqueluche.',
    ]},
    { type: 'title', text: 'Différences entre les communautés autonomes', level: 3 },
    { type: 'list', items: [
      'Certaines communautés incluent des vaccins additionnels non prévus dans le calendrier national.',
      'Le financement du rotavirus varie selon la communauté, bien que la tendance soit à la couverture universelle.',
      'Le méningocoque ACWY peut être administré à des âges légèrement différents selon le protocole autonome.',
      'Consultez toujours votre pédiatre ou le centre de santé de votre communauté pour confirmer le calendrier en vigueur.',
    ]},
    { type: 'title', text: 'Comment exporter le calendrier sur votre mobile', level: 3 },
    { type: 'list', items: [
      'Saisissez la date de naissance de votre bébé dans le calculateur.',
      'Appuyez sur le bouton "Ajouter un rappel sur mobile" pour télécharger le fichier .ics.',
      'Ouvrez le fichier avec votre application de calendrier (Google Calendar, Apple Calendar, etc.).',
      'Tous les événements de vaccination seront sauvegardés avec la date et les vaccins correspondants.',
    ]},
    { type: 'title', text: 'Effets secondaires courants', level: 3 },
    { type: 'list', items: [
      'Rougeur ou gonflement au point d\'injection : disparaît en 1-2 jours.',
      'Fièvre légère (37,5–38,5 °C) : normale dans les premières 24-48 heures.',
      'Irritabilité ou pleurs : fréquents chez les bébés après les premières doses.',
      'Somnolence ou manque d\'appétit passager : ne nécessite pas de traitement.',
      'Les réactions graves comme l\'anaphylaxie sont extrêmement rares (moins d\'une sur un million de doses).',
    ]},
    { type: 'tip', html: 'Amener le bébé bien nourri et avec des vêtements confortables facilite la visite. Après le vaccin, le contact peau à peau ou l\'allaitement maternel aident à calmer la douleur et l\'inflammation de manière naturelle.' },
    { type: 'summary', title: 'Ce qu\'il faut retenir', items: [
      'Le calendrier AEP 2026 comprend 14 doses jusqu\'à 12 ans pour une protection complète.',
      'Les vaccins de la première année protègent simultanément contre jusqu\'à 9 maladies graves.',
      'Les effets secondaires légers sont normaux et disparaissent en 1-2 jours.',
      'Vous pouvez exporter tous les rendez-vous de vaccination vers le calendrier de votre mobile en un clic.',
      'Consultez toujours votre pédiatre en cas de doute sur le calendrier de votre communauté.',
    ]},
  ],
  faqTitle: "Questions fréquentes",
  faq,
  bibliographyTitle: "Références",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendrier de Vaccination 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Ministère de la Santé (Espagne) - Calendrier de Vaccination',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'OMS - Immunisation',
      url: 'https://www.who.int/fr/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Calendrier d\'immunisation recommandé pour les enfants et adolescents',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

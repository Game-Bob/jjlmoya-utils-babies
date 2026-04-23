import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Planificateur de Budget Bébé';
export const description = 'L\'outil ultime pour prévoir les dépenses de la première année de votre bébé. Calculez l\'équipement initial, les coûts mensuels et les frais cachés avec des conseils d\'économie.';

export const faq = [
  {
    question: 'Combien coûte un bébé la première année ?',
    answer: 'En moyenne, la première année peut coûter entre 5 000 € et 15 000 € selon votre style de vie, vos besoins en mode de garde et si vous achetez du neuf ou de l\'occasion.',
  },
  {
    question: 'Quels sont les articles les plus chers pour un nouveau-né ?',
    answer: 'Les dépenses initiales les plus importantes sont généralement la poussette, le mobilier de la chambre (lit, commode) et le siège auto. Le mode de garde est la dépense mensuelle récurrente la plus élevée.',
  },
  {
    question: 'Comment économiser sur les dépenses de bébé ?',
    answer: 'Acheter d\'occasion pour l\'équipement et les vêtements, privilégier l\'allaitement (si possible) et utiliser une liste de naissance pour les cadeaux essentiels sont les stratégies les plus efficaces.',
  },
  {
    question: 'Que sont les "frais fantômes" dans le budget bébé ?',
    answer: 'Il s\'agit de coûts cachés comme l\'augmentation des factures d\'énergie (chauffage/clim), les surprimes d\'assurance familiale et les vaccins non obligatoires ou fournitures médicales non listés sur les aide-mémoire standards.',
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
    name: 'Configurez votre profil',
    text: 'Sélectionnez votre style de vie (Économique, Équilibré ou Premium), votre méthode d\'allaitement et votre stratégie de garde d\'enfant.',
  },
  {
    name: 'Vérifiez vos articles',
    text: 'Parcourez les catégories (Équipement initial, Mensuel et Évolutions) et ajustez les prix ou marquez les articles comme étant d\'occasion.',
  },
  {
    name: 'Suivez votre budget',
    text: 'Visualisez le total nécessaire pour la première année et suivez vos progrès au fur et à mesure de vos achats.',
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
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'planificateur-budget-bebe',
  faqTitle: 'Foire aux Questions',
  bibliographyTitle: 'Bibliographie',
  seo: [
    { type: 'summary', title: 'Résumé : Budget Bébé', items: [
      'La première année peut coûter entre 5 000 € et 15 000 €.',
      'L\'investissement initial (chambre, poussette) est l\'obstacle le plus important.',
      'Le mode de garde peut représenter jusqu\'à 50 % du budget mensuel récurrent.',
      'L\'occasion peut réduire le budget total de près de 60 %.',
    ]},
    { type: 'title', text: 'Combien coûte réellement un bébé la première année ?', level: 2 },
    { type: 'paragraph', html: 'Prévoir l\'arrivée d\'un bébé implique bien plus que l\'achat de couches. Cela demande une vision stratégique des investissements ponctuels face aux coûts mensuels. Notre planificateur vous aide à visualiser cette courbe et à préparer la transition financière vers la parentalité.' },
    { type: 'stats', columns: 3, items: [
      { value: '2 000 €+', label: 'Équipement Initial' },
      { value: '100-150 €', label: 'Couches/Soins Mensuel' },
      { value: '40%+', label: 'Économies via Occasion' },
    ]},
    { type: 'title', text: 'Répartition par Catégories : Où va l\'argent ?', level: 3 },
    { type: 'table', headers: ['Catégorie', 'Articles Typiques', 'Fréquence', 'Impact Coût'], rows: [
      ['Équipement Initial', 'Lit, Poussette, Siège Auto', 'Ponctuel', 'Élevé'],
      ['Mensuel', 'Couches, Lait, Pharmacie', 'Chaque mois', 'Moyen'],
      ['Évolutions', 'Chaise haute, Diversification, Vêtements', 'Occasionnel', 'Moyen'],
      ['Mode de Garde', 'Crèche / Nounou', 'Chaque mois', 'Très Élevé'],
    ]},
    { type: 'tip', html: '<strong>Conseil d\'Économie :</strong> Les poussettes de qualité et les meubles de chambre ont une excellente valeur de revente. Les acheter d\'occasion peut vous faire économiser des milliers d\'euros sans compromettre la sécurité.' },
    { type: 'title', text: 'Comparaison des Styles de Vie', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Économique', 
        description: 'Priorité à l\'essentiel et à l\'occasion.', 
        points: ['Vêtements de seconde main', 'Équipement reconditionné', 'Allaitement exclusif', 'Mode de garde public'] 
      },
      { 
        title: 'Premium', 
        description: 'Derniers modèles et confort maximal.', 
        points: ['Équipement haute technologie', 'Lait bio', 'Chambre de designer', 'Garde privée à domicile'] 
      },
    ]},
    { type: 'title', text: 'Check-list pour une Planification Intelligente', level: 3 },
    { type: 'list', items: [
      'Vérifiez les mises à jour des contrats d\'assurance santé familiale.',
      'Budgétez les vaccins non obligatoires et les soins de pharmacie spécialisés.',
      'Anticipez une hausse de 20 % de vos factures d\'énergie (chauffage/clim).',
      'Créez une liste de naissance tôt pour que vos proches participent aux gros achats.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Commencez votre Plan',
    lifestyleLabel: 'Choix de Vie',
    lifestyleSaving: 'Économique',
    lifestyleBalanced: 'Équilibré',
    lifestylePremium: 'Premium',
    feedingLabel: 'Mode d\'Alimentation',
    feedingBreast: 'Allaitement',
    feedingFormula: 'Lait maternisé',
    feedingMixed: 'Mixte',
    childcareLabel: 'Mode de Garde',
    childcareHome: 'Garde à domicile',
    childcarePublic: 'Crèche publique',
    childcarePrivate: 'Crèche privée',
    startBtn: 'Générer mon Budget',
    categoryBeforeBirth: 'Équipement Initial',
    categoryMonthByMonth: 'Coûts Mensuels',
    categoryMilestones: 'Prochaines Étapes',
    totalNeededLabel: 'Objectif Total 1ère Année',
    savingsProgressLabel: 'Prêt / Économisé',
    chartTitle: 'Courbe de Dépense Mensuelle',
    ghostAlertsTitle: 'Alertes Frais Fantômes',
    ghostInsurance: 'Vérifier Assurances Vie/Santé',
    ghostHeating: 'Prévoir +20% Énergie/Chauffage',
    ghostVaccines: 'Budget Vaccins Facultatifs',
    diaperCalcTitle: 'Calculateur de Couches',
    diaperPriceLabel: 'Prix du Paquet',
    diaperUnitsLabel: 'Unités par Paquet',
    secondHandLabel: 'Occasion / Cadeau',
    wishlistLabel: 'Sur la Liste',
    itemNursery: 'Préparation de la Chambre',
    itemStroller: 'Poussette & Pack Voyage',
    itemHospitalBag: 'Sac pour la Maternité',
    itemDiapers: 'Couches & Lingettes',
    itemPharmacy: 'Pharmacie & Hygiène',
    itemDaycare: 'Garde d\'enfant',
    itemSolidFood: 'Diversification Alimentaire',
    itemClothes: 'Vêtements de Saison',
    itemHighChair: 'Chaise Haute & Repas',
    editLabel: 'Modifier le prix',
    saveBtn: 'Enregistrer',
    exportBtn: 'Exporter JSON',
    importBtn: 'Importer JSON',
    resetBtn: 'Réinitialiser le Plan',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Début',
    perMonthLabel: '/mois',
    confirmReset: 'Êtes-vous sûr ?',
    currencyMultiplier: 1,
  },
};

import type { PregnancyCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculatrice-semaines-grossesse';
const title = 'Calculatrice de Semaines de Grossesse';
const description = 'Calculez exactement à quelle semaine de grossesse vous êtes, votre trimestre et votre date prévue d\'accouchement.';
const faq = [
  {
    question: 'Comment calcule-t-on la semaine de grossesse ?',
    answer: 'On compte à partir du premier jour des dernières règles. On ajoute 280 jours à cette date pour obtenir la date prévue d\'accouchement. Si votre cycle est différent de 28 jours, le calcul s\'ajuste automatiquement.',
  },
  {
    question: 'Quelle est la différence entre la DDR et la date de conception ?',
    answer: 'La DDR (Date des Dernières Règles) est la méthode standard utilisée par les médecins. La date de conception est plus précise si vous la connaissez, car elle évite l\'estimation des 14 jours d\'ovulation.',
  },
  {
    question: 'Pourquoi la date de mon médecin est-elle différente ?',
    answer: 'Votre médecin a peut-être corrigé la date à partir de l\'échographie du premier trimestre, qui est la méthode la plus précise. Des cycles irréguliers peuvent aussi justifier des différences.',
  },
  {
    question: 'Quand commence le deuxième trimestre ?',
    answer: 'Le deuxième trimestre commence à la semaine 13 et se termine à la fin de la semaine 26. La plupart des mères se sentent plus énergiques pendant cette période.',
  },
  {
    question: 'Quelle est la précision de la date prévue d\'accouchement ?',
    answer: 'La DPA est une estimation statistique. Seulement 3 à 5 % des bébés naissent exactement ce jour-là. La plupart des bébés naissent entre les semaines 38 et 42.',
  },
];
const howTo = [
  {
    name: 'Sélectionnez la méthode de calcul',
    text: 'Choisissez si vous voulez calculer à partir de vos dernières règles ou de la date de conception.',
  },
  {
    name: 'Entrez la date',
    text: 'Sélectionnez le jour, le mois et l\'année à l\'aide des menus déroulants.',
  },
  {
    name: 'Ajustez la durée du cycle',
    text: 'Si votre cycle n\'est pas de 28 jours, déplacez le curseur pour une estimation plus précise.',
  },
  {
    name: 'Consultez la semaine et le trimestre',
    text: 'Le résultat affiche la semaine exacte, le trimestre et la date prévue d\'accouchement.',
  },
  {
    name: 'Explorez les jalons hebdomadaires',
    text: 'Découvrez la taille du bébé, les changements biologiques et des conseils personnalisés pour chaque semaine.',
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

export const content: PregnancyCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    btnFUR: 'Dernières règles',
    btnConception: 'Date de conception',
    labelPartnerMode: 'Mode partenaire',
    labelFUR: 'Date des dernières règles',
    labelConception: 'Date de conception',
    labelCycleLength: 'Durée du cycle',
    unitDays: 'jours',
    labelWeeks: 'Semaines',
    labelTrimester: 'Trimestre',
    labelEDD: 'Date Prévue d\'Accouchement',
    eddPlaceholder: 'Entrez votre date',
    eddNote: 'Seulement 3 à 5 % des bébés naissent exactement ce jour-là',
    btnCalendar: 'Enregistrer dans l\'agenda',
    labelFruits: 'Fruits',
    labelGeek: 'Geek',
    labelSweets: 'Sucreries',
    labelBioLabel: 'Développement biologique',
    labelMomKey: 'Votre corps aujourd\'hui',
    labelPartnerKey: 'Comment la soutenir aujourd\'hui',
    labelNormalMolestias: 'Inconforts normaux',
    labelAlert: 'Consulter si vous avez...',
    labelTimeline: 'Chronologie',
    labelStartHere: 'Commencez ici',
    labelStartBody: 'Sélectionnez la date de vos dernières règles pour découvrir à quelle semaine vous en êtes.',
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références',
  },
  seo: [
    {
      type: 'summary',
      title: "Points essentiels à retenir",
      items: [
        "Calculez votre semaine de grossesse à partir de la DDR ou de la date de conception.",
        "La DPA est une estimation : seulement 3 à 5 % des bébés naissent exactement ce jour-là.",
        "Chaque trimestre a ses propres jalons biologiques et inconforts caractéristiques.",
        "Consultez votre médecin ou sage-femme immédiatement si vous remarquez un signe d'alarme.",
        "Le mode partenaire vous montre comment soutenir votre compagne semaine par semaine.",
      ],
    },
    {
      type: 'title',
      text: "Calculatrice de Semaines de Grossesse : bien plus qu'une date d'accouchement",
      level: 2,
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 semaines', label: 'Durée moyenne de la grossesse' },
        { value: '280 jours', label: 'Jours de gestation' },
        { value: '±14 jours', label: "Marge d'erreur de la DPA" },
      ],
    },
    {
      type: 'title',
      text: 'Comment calcule-t-on la semaine de grossesse ?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "La méthode la plus courante utilise la date du premier jour des dernières règles (DDR) comme point de départ.",
        "On ajoute 280 jours à la DDR pour obtenir la date prévue d'accouchement (DPA).",
        "Si votre cycle est différent de 28 jours, la DPA est ajustée automatiquement.",
        "La méthode par conception soustrait 14 jours du calcul pour approximer la DPA à partir de la fécondation.",
        "L'échographie du premier trimestre peut corriger l'âge gestationnel avec plus de précision.",
      ],
    },
    {
      type: 'tip',
      html: "Si votre médecin indique une date différente de celle calculée ici, cela est probablement dû à un cycle irrégulier ou à une correction échographique du premier trimestre. Les deux dates sont valides.",
    },
    {
      type: 'title',
      text: 'Les trois trimestres de la grossesse',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Trimestre', 'Semaines', 'Jalon principal', 'Corps de la mère'],
      rows: [
        ['1er', '1 – 12', 'Formation des organes', 'Nausées, fatigue, implantation'],
        ['2e', '13 – 26', 'Mouvements foetaux, écho morphologique', 'Énergie retrouvée, ventre visible'],
        ['3e', '27 – 40', 'Maturation pulmonaire, engagement', 'Pression pelvienne, préparation à l\'accouchement'],
      ],
    },
    {
      type: 'title',
      text: 'Jalons biologiques semaine par semaine',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Semaine', 'Taille approx.', 'Jalon biologique', 'Ce que ressent la mère'],
      rows: [
        ['4', '~1 mm', "Implantation dans l'endomètre", 'Léger saignement possible'],
        ['8', '~18 mm', 'Cœur bat 150–170 fois/min', 'Nausées à leur maximum'],
        ['12', '~55 mm', 'Organes principaux formés', 'Risque de fausse couche en forte baisse'],
        ['20', '~25 cm', 'Entend les voix clairement', 'Échographie morphologique'],
        ['28', '~37 cm', 'Cycles veille-sommeil', 'Début du troisième trimestre'],
        ['36', '~47 cm', 'Poumons presque matures', "Engagement dans le bassin"],
        ['40', '~50 cm', 'Prêt à naître', "DPA : date prévue d'accouchement"],
      ],
    },
    {
      type: 'title',
      text: 'Symptômes courants par trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '1er trimestre (sem. 1–12)',
          description: 'La phase de plus grands changements hormonaux.',
          points: [
            'Nausées et vomissements, surtout le matin',
            'Fatigue extrême et somnolence',
            'Sensibilité des seins',
            'Envies fréquentes d\'uriner',
            'Sautes d\'humeur',
          ],
        },
        {
          title: '2e trimestre (sem. 13–26)',
          description: "Le trimestre où la plupart des mères se sentent le mieux.",
          points: [
            'Disparition des nausées',
            'Niveau d\'énergie amélioré',
            'Ventre visible à partir de la semaine 18–20',
            'Premiers mouvements foetaux (sem. 18–22)',
            'Brûlures d\'estomac croissantes',
          ],
        },
        {
          title: '3e trimestre (sem. 27–40)',
          description: "Préparation à l'accouchement.",
          points: [
            'Pression pelvienne et douleurs dorsales',
            'Contractions de Braxton Hicks',
            'Pieds et chevilles enflés',
            'Difficultés à dormir',
            'Engagement du bébé (sem. 36–38)',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: "Signes d'alarme nécessitant une consultation immédiate",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Saignement vaginal abondant à n'importe quelle semaine : consultez immédiatement.",
        "Contractions régulières avant la semaine 37 : risque d'accouchement prématuré.",
        "Perte de liquide amniotique : rupture de la poche des eaux, rendez-vous aux urgences.",
        "Maux de tête intenses avec vision floue : possible pré-éclampsie.",
        "Absence de mouvements foetaux après la semaine 20 : signe d'alarme urgent.",
      ],
    },
    {
      type: 'title',
      text: 'Consultations médicales indispensables',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "Semaine 8–12 : première échographie et bilan sanguin du premier trimestre.",
        "Semaine 12 : dépistage combiné du premier trimestre (clarté nucale + prise de sang).",
        "Semaine 18–22 : échographie morphologique (écho du 2e trimestre).",
        "Semaine 24–28 : test de dépistage du diabète gestationnel (test O'Sullivan).",
        "Semaine 36 : échographie de contrôle et prélèvement streptocoque B.",
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'DDR (Date des Dernières Règles)',
          definition: "Premier jour de vos dernières règles. Sert de référence pour calculer l'âge gestationnel.",
        },
        {
          term: "DPA (Date Prévue d'Accouchement)",
          definition: "Date estimée de l'accouchement, calculée en ajoutant 280 jours à la DDR.",
        },
        {
          term: 'Liquide amniotique',
          definition: "Liquide entourant le bébé dans l'utérus. Il protège le fœtus, régule la température et lui permet de bouger.",
        },
        {
          term: 'Bouchon muqueux',
          definition: "Sécrétion épaisse qui obstrue le col de l'utérus pendant la grossesse. Sa perte indique que l'accouchement approche.",
        },
        {
          term: 'Pré-éclampsie',
          definition: "Complication de la grossesse caractérisée par une hypertension artérielle et des lésions organiques. Nécessite une prise en charge médicale urgente.",
        },
      ],
    },
  ],
  faqTitle: "Questions fréquentes",
  faq,
  bibliographyTitle: "Références",
  bibliography: [
    {
      name: 'OMS – Soins prénatals',
      url: 'https://www.who.int/fr/news-room/fact-sheets/detail/maternal-mortality',
    },
    {
      name: 'ACOG – Methods for Estimating the Due Date',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date',
    },
    {
      name: 'Haute Autorité de Santé – Suivi et orientation des femmes enceintes',
      url: 'https://www.has-sante.fr/jcms/c_547976/fr/suivi-et-orientation-des-femmes-enceintes',
    },
    {
      name: 'UpToDate – Prenatal care: Initial assessment',
      url: 'https://www.uptodate.com/contents/prenatal-care-initial-assessment',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

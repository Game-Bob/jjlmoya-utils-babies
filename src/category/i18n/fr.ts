import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bebes',
  title: 'Calculatrices pour Bébés',
  description: "Outils et calculatrices pour le suivi du développement et des soins de votre bébé.",
  seo: [
    {
      type: 'summary',
      title: 'Outils disponibles',
      items: [
        "Calculatrice d'alimentation par âge et poids",
        'Calculatrice de percentiles de croissance (OMS)',
        'Convertisseur de tailles de vêtements par marque',
        'Estimateur de jours fertiles',
        'Calendrier de vaccination personnalisé',
        "Calculatrice de grossesse et semaines de gestation",
      ],
    },
    {
      type: 'title',
      text: "Suivi du développement de votre bébé",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les calculatrices pour bébés vous aident à suivre avec précision la croissance et le développement de votre enfant. Du calcul des tétées selon l'âge et le poids à la consultation des percentiles de l'OMS, ces outils sont conçus pour vous fournir des informations utiles à chaque étape.",
    },
    {
      type: 'title',
      text: 'Alimentation et nutrition',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La calculatrice d'alimentation estime la quantité de lait maternel ou de lait maternisé dont votre bébé a besoin selon son âge en jours, semaines ou mois et son poids actuel. Les calculs suivent les directives pédiatriques standard pour garantir une nutrition adéquate.",
    },
    {
      type: 'title',
      text: 'Croissance et percentiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La calculatrice de percentiles utilise les tableaux de référence de l'Organisation mondiale de la santé (OMS) pour situer le poids, la taille et l'IMC de votre bébé dans la distribution de la population infantile. Un percentile 50 indique que le bébé est dans la moyenne.",
    },
  ],
};

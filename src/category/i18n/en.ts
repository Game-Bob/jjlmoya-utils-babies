import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'babies',
  title: 'Baby Calculators',
  description: 'Tools and calculators for the care and development tracking of your baby.',
  seo: [
    {
      type: 'summary',
      title: 'Available tools',
      items: [
        'Feeding calculator by age and weight',
        'Growth percentile calculator (WHO)',
        'Baby clothing size converter by brand',
        'Fertile days estimator',
        'Personalized vaccination calendar',
        'Pregnancy and gestational weeks calculator',
      ],
    },
    {
      type: 'title',
      text: "Tracking your baby's development",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Baby calculators help you accurately track your child's growth and development. From calculating milk feeds based on age and weight to checking WHO percentiles, these tools are designed to give you useful information at every stage.",
    },
    {
      type: 'title',
      text: 'Feeding and nutrition',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The feeding calculator estimates the amount of breast milk or formula your baby needs based on their age in days, weeks, or months and their current weight. Calculations follow standard pediatric guidelines to ensure adequate nutrition.',
    },
    {
      type: 'title',
      text: 'Growth and percentiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "The percentile calculator uses the World Health Organization (WHO) reference tables to place your baby's weight, height, and BMI within the distribution of the child population. A 50th percentile indicates the baby is at the average.",
    },
  ],
};

import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'babies',
  title: 'Baby Calculators',
  description: 'Tools and calculators for the care and monitoring of your baby\'s development.',
  seo: [
    {
      type: 'summary',
      title: 'Available Tools',
      items: [
        'Feeding calculator by age and weight',
        'Growth percentile calculator (WHO)',
        'Clothing size converter by brand',
        'Fertile days estimator',
        'Personalized vaccination calendar',
        'Pregnancy and gestation weeks calculator',
      ],
    },
    {
      type: 'title',
      text: 'Monitoring Your Baby\'s Development',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Baby calculators help you accurately track your child\'s growth and development. From calculating milk feeds by age and weight to checking WHO percentiles, these tools are designed to provide helpful information at every stage.',
    },
    {
      type: 'title',
      text: 'Feeding and Nutrition',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The feeding calculator estimates the amount of breast milk or formula your baby needs based on age in days, weeks, or months and current weight. Calculations follow standard pediatric guidelines to ensure proper nutrition.',
    },
    {
      type: 'title',
      text: 'Growth and Percentiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The percentile calculator uses World Health Organization (WHO) reference charts to plot your baby\'s weight, height, and BMI within the child population distribution. A 50th percentile indicates that the baby is at the median.',
    },
  ],
};

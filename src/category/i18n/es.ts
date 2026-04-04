import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bebes',
  title: 'Calculadoras para Bebés',
  description: 'Herramientas y calculadoras para el cuidado y seguimiento del desarrollo de tu bebé.',
  seo: [
    {
      type: 'summary',
      title: 'Herramientas disponibles',
      items: [
        'Calculadora de alimentación por edad y peso',
        'Calculadora de percentiles de crecimiento (OMS)',
        'Convertidor de tallas de ropa por marca',
        'Estimador de días fértiles',
        'Calendario de vacunación personalizado',
        'Calculadora de embarazo y semanas de gestación',
      ],
    },
    {
      type: 'title',
      text: 'Seguimiento del desarrollo de tu bebé',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las calculadoras para bebés te ayudan a realizar un seguimiento preciso del crecimiento y desarrollo de tu hijo. Desde calcular las tomas de leche según la edad y el peso hasta consultar los percentiles de la OMS, estas herramientas están diseñadas para darte información útil en cada etapa.',
    },
    {
      type: 'title',
      text: 'Alimentación y nutrición',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La calculadora de alimentación estima la cantidad de leche materna o de fórmula que necesita tu bebé según su edad en días, semanas o meses y su peso actual. Los cálculos siguen las pautas pediátricas estándar para garantizar una nutrición adecuada.',
    },
    {
      type: 'title',
      text: 'Crecimiento y percentiles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La calculadora de percentiles utiliza las tablas de referencia de la Organización Mundial de la Salud (OMS) para situar el peso, la talla y el IMC de tu bebé dentro de la distribución de la población infantil. Un percentil 50 indica que el bebé está en la media.',
    },
  ],
};

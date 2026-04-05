import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculadora-tomas-bebe';
const title = 'Calculadora de Tomas del Bebé';
const description = 'Calcula cuánta leche necesita tu bebé según su peso y edad. Tomas recomendadas, mililitros por toma y señales de hambre y saciedad.';

const faq = [
  {
    question: '¿Cuánta leche necesita un recién nacido?',
    answer: 'En el primer día de vida, el estómago del bebé tiene el tamaño de una cereza y solo necesita entre 5 y 7 ml por toma. A partir del quinto día la capacidad crece hasta los 45–60 ml y las necesidades aumentan progresivamente.',
  },
  {
    question: '¿Con qué frecuencia debe comer un bebé?',
    answer: 'Los recién nacidos necesitan entre 8 y 12 tomas al día. A los 3 meses suelen espaciarse a 7–8 tomas, y a los 6 meses a unas 5 tomas diarias.',
  },
  {
    question: '¿Cómo sé si mi bebé está comiendo suficiente?',
    answer: 'Los indicadores más fiables son: ganancia de peso adecuada, al menos 5–6 pañales mojados al día y que el bebé muestre señales de saciedad tras las tomas.',
  },
  {
    question: '¿La lactancia materna y la fórmula tienen las mismas cantidades?',
    answer: 'Con lactancia materna se recomienda alimentar a libre demanda sin medir volúmenes. Con fórmula, la referencia habitual es 150 ml por kg de peso al día, distribuidos en el número de tomas según la edad.',
  },
];

const howTo = [
  {
    name: 'Selecciona la edad del bebé',
    text: 'Elige la unidad (días, semanas o meses) y ajusta el valor con el slider o los botones.',
  },
  {
    name: 'Introduce el peso del bebé',
    text: 'Usa el slider de peso o los botones para ajustar el peso actual del bebé en kilogramos.',
  },
  {
    name: 'Selecciona el tipo de alimentación',
    text: 'Elige entre pecho, mixta o fórmula para obtener la guía más adaptada.',
  },
  {
    name: 'Consulta el plan recomendado',
    text: 'La calculadora muestra el número de tomas, mililitros por toma y el total diario estimado.',
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
  inLanguage: 'es',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Configuración actual',
    labelPlan: 'Plan recomendado',
    unitDays: 'días',
    unitWeeks: 'semanas',
    unitMonths: 'meses',
    labelWeight: 'Peso del bebé',
    labelFeedType: 'Tipo de alimentación',
    feedBreast: 'Pecho',
    feedMixed: 'Mixta',
    feedFormula: 'Fórmula',
    labelFreeDemand: 'Libre demanda',
    labelMlPerFeed: 'ml por cada toma',
    labelFeedsCount: 'Tomas / 24h',
    labelDailyTotal: 'Total diario (est.)',
    labelHunger: 'Señales de hambre',
    labelFullness: 'Señales de saciedad',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
  },
  seo: [
    { type: 'summary', title: 'Resumen: Alimentación del bebé', items: [
      'La capacidad gástrica del recién nacido es de apenas 5–7 ml en el primer día.',
      'La referencia general para fórmula es 150 ml por kg de peso al día.',
      'La lactancia materna se ofrece a libre demanda sin volúmenes fijos.',
      'La frecuencia disminuye con la edad: de 8–12 tomas a 4–5 en 6 meses.',
    ]},
    { type: 'title', text: '¿Cuánta leche necesita mi bebé según su peso y edad?', level: 2 },
    { type: 'paragraph', html: 'Las necesidades de leche cambian rápidamente en los primeros meses. La calculadora estima la cantidad según el peso actual y la edad del bebé, siguiendo las pautas pediátricas de la OMS y la AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Día 1 (tamaño cereza)' },
      { value: '150 ml/kg', label: 'Referencia diaria fórmula' },
      { value: '8–12', label: 'Tomas/día recién nacido' },
    ]},
    { type: 'title', text: 'Tamaño del estómago por edad', level: 3 },
    { type: 'table', headers: ['Edad', 'Tamaño ref.', 'Capacidad', 'Tomas/día'], rows: [
      ['Día 1', 'Cereza', '5–7 ml', '8–12'],
      ['Días 2–4', 'Nuez', '22–27 ml', '8–12'],
      ['Días 5–30', 'Huevo', '45–60 ml', '8–10'],
      ['1–3 meses', 'Máxima', '90–120 ml', '7–8'],
      ['3–6 meses', 'Máxima', '120–150 ml', '5–6'],
      ['6+ meses', 'Máxima', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Un indicador fiable de alimentación adecuada es el número de pañales mojados: entre 5 y 6 al día a partir del quinto día indican buena hidratación.' },
    { type: 'title', text: 'Lactancia materna vs fórmula', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Lactancia materna', description: 'Alimentación natural a libre demanda.', points: ['Sin horario fijo', 'Anticuerpos activos', 'Composición variable', 'Difícil cuantificar'] },
      { title: 'Leche de fórmula', description: 'Tomas programadas con volumen calculable.', points: ['Cada 3–4 horas', 'Composición estable', 'Fácil controlar ingesta', 'Requiere preparación estéril'] },
    ]},
    { type: 'list', items: [
      'Ganancia de peso adecuada: 150–200 g/semana en el primer mes',
      'Al menos 5–6 pañales mojados al día',
      'El bebé se muestra tranquilo tras las tomas',
      'Orina clara o amarillo muy pálido',
    ]},
  ],
  faqTitle: "Preguntas frecuentes",
  faq,
  bibliographyTitle: "Referencias",
  bibliography: [
    {
      name: 'OMS - Alimentación del lactante y del niño pequeño',
      url: 'https://www.who.int/es/health-topics/infant-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Liga de la Leche Internacional',
      url: 'https://www.llli.org',
    },
    {
      name: 'Asociación Española de Pediatría - Lactancia materna',
      url: 'https://www.aeped.es/comite-lactancia-materna',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

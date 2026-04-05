import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'percentil-peso-talla-bebe';
const title = 'Calculadora de Percentiles OMS para Bebés';
const description = 'Calcula el percentil de peso, talla e IMC de tu bebé según las tablas OMS (0-5 años).';
const faq = [
  {
    question: '¿Qué significa el percentil 50?',
    answer: 'El percentil 50 indica que el bebé se encuentra exactamente en la mediana, es decir, la mitad de los bebés de su misma edad y sexo pesan o miden más, y la otra mitad menos. No significa que sea el valor ideal, sino el valor central de la distribución.',
  },
  {
    question: '¿Un percentil bajo es señal de problema?',
    answer: 'No necesariamente. Un percentil bajo (por ejemplo, P10) puede ser perfectamente normal si se mantiene estable a lo largo del tiempo. Lo importante es la tendencia de crecimiento, no un valor aislado. Siempre consulta a tu pediatra.',
  },
  {
    question: '¿Qué tablas de crecimiento utiliza esta calculadora?',
    answer: 'Esta calculadora utiliza los estándares de crecimiento de la Organización Mundial de la Salud (OMS) para niños de 0 a 5 años, basados en el Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: '¿Qué es el IMC en bebés?',
    answer: 'El Índice de Masa Corporal (IMC) en bebés es la relación entre el peso y la talla al cuadrado. Los percentiles de IMC para bebés difieren de los de adultos y deben interpretarse con las tablas específicas para cada edad y sexo.',
  },
  {
    question: '¿Con qué frecuencia debo medir a mi bebé?',
    answer: 'En los primeros meses, el pediatra suele controlar el crecimiento en cada visita. En casa puedes registrar el peso y la talla mensualmente para observar la tendencia de crecimiento.',
  },
];
const howTo = [
  {
    name: 'Selecciona el sexo del bebé',
    text: 'Elige entre niño o niña para aplicar las tablas OMS correspondientes.',
  },
  {
    name: 'Introduce la edad',
    text: 'Usa el deslizador o las flechas para indicar la edad en meses (0-60 meses).',
  },
  {
    name: 'Introduce peso y talla',
    text: 'Escribe el peso en kilogramos y la talla en centímetros.',
  },
  {
    name: 'Consulta los percentiles',
    text: 'Los percentiles de peso, talla e IMC se calculan automáticamente según las tablas OMS.',
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

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Datos de la Medición',
    labelSex: 'Sexo del bebé',
    sexBoy: 'Niño',
    sexGirl: 'Niña',
    unitMonths: 'Solo meses',
    unitYearsMonths: 'Años + meses',
    labelWeight: 'Peso (kg)',
    labelHeight: 'Talla (cm)',
    btnAddHistory: 'Añadir a mi historial',
    btnClearHistory: 'Limpiar datos',
    labelDashboard: 'Dashboard de Crecimiento',
    labelWeight2: 'Peso',
    labelHeight2: 'Talla',
    labelBMI: 'IMC',
    labelCalculating: 'Calculando...',
    disclaimer: 'Los percentiles son solo una herramienta estadística. Consulta siempre a tu pediatra para interpretar los resultados.',
    labelLowRange: 'Rango bajo',
    labelLowNormal: 'Habitual bajo',
    labelNormal: 'Normalidad',
    labelHighNormal: 'Habitual alto',
    labelHighRange: 'Rango alto',
    alertOutOfRange: 'Valor fuera de los rangos P3-P97. Consulta con tu pediatra.',
    labelMonths: 'Meses',
    labelYears: 'Años',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Percentiles OMS: Guía para entender el crecimiento de tu bebé',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 claves para interpretar los percentiles de tu bebé',
      items: [
        'Ningún percentil aislado define la salud de tu bebé: lo importante es la tendencia a lo largo del tiempo.',
        'Los percentiles entre P3 y P97 se consideran dentro del rango de normalidad estadística.',
        'El IMC en bebés sigue curvas propias y no debe compararse con los valores de referencia para adultos.',
        'Las curvas OMS están basadas en bebés criados en condiciones óptimas, incluyendo lactancia materna exclusiva durante los primeros meses.',
        'Comparte siempre los registros de crecimiento con tu pediatra para una interpretación clínica adecuada.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo medir correctamente a tu bebé',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pesa al bebé sin ropa y en la misma báscula siempre que sea posible.',
        'Mide la longitud en posición horizontal hasta los 24 meses.',
        'A partir de los 2 años, mide la talla en posición vertical.',
        'Realiza las mediciones a la misma hora del día para mayor consistencia.',
      ],
    },
    {
      type: 'tip',
      html: 'Un percentil por debajo de P3 no implica automáticamente un problema de salud. Lo más importante es observar si la curva de crecimiento mantiene su tendencia a lo largo del tiempo.',
    },
    {
      type: 'title',
      text: 'Interpretación de los percentiles',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentil', 'Interpretación', 'Acción recomendada'],
      rows: [
        ['P97 o superior', 'Rango alto', 'Comentar con el pediatra en la próxima visita'],
        ['P85 a P97', 'Habitual alto', 'Seguimiento normal'],
        ['P15 a P85', 'Normalidad', 'Sin acción especial necesaria'],
        ['P3 a P15', 'Habitual bajo', 'Seguimiento normal'],
        ['P3 o inferior', 'Rango bajo', 'Consultar con el pediatra'],
      ],
    },
    {
      type: 'title',
      text: 'OMS vs Curvas de Orbegozo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Curvas OMS',
          description: 'Estándar internacional basado en bebés de 6 países criados en condiciones óptimas.',
          points: [
            'Estándar internacional validado',
            'Basado en bebés de 6 países y condiciones óptimas',
            'Actualizadas y con soporte científico actual',
            'Puede no reflejar variaciones genéticas locales',
          ],
        },
        {
          title: 'Curvas de Orbegozo',
          description: 'Curvas adaptadas a la población española, muy usadas en décadas anteriores.',
          points: [
            'Adaptadas a la población española',
            'Muy usadas en España en décadas anteriores',
            'Basadas en población de referencia más antigua',
            'Menor adopción internacional',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'OMS 0-5 años', label: 'Estándar de referencia' },
        { value: 'Curva de tendencia', label: 'Variable clave' },
        { value: 'Parámetros LMS', label: 'Precisión técnica' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Número de desviaciones estándar que un valor se aleja de la media de la población de referencia. Un Z-Score de 0 equivale al percentil 50.',
        },
        {
          term: 'Armonía',
          definition: 'Proporción adecuada entre peso y talla. Un bebé puede tener un percentil bajo de peso pero ser armónico si su talla también es baja en la misma proporción.',
        },
        {
          term: 'Antropometría',
          definition: 'Conjunto de mediciones corporales (peso, talla, perímetro cefálico, IMC) utilizadas para evaluar el crecimiento y estado nutricional.',
        },
        {
          term: 'Parámetros LMS',
          definition: 'Método estadístico (L=Box-Cox, M=mediana, S=coeficiente de variación) utilizado por la OMS para construir las tablas de percentiles y transformar cualquier medición en un Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Preguntas frecuentes",
  faq,
  bibliographyTitle: "Referencias",
  bibliography: [
    {
      name: 'WHO Child Growth Standards: Methods and development',
      url: 'https://www.who.int/publications/i/item/924154693X',
    },
    {
      name: 'WHO Child Growth Standards: Length/height-for-age, weight-for-age, weight-for-length, weight-for-height and body mass index-for-age',
      url: 'https://www.who.int/tools/child-growth-standards/standards',
    },
    {
      name: 'Comparison of the WHO Child Growth Standards and the CDC 2000 Growth Charts - de Onis M et al.',
      url: 'https://doi.org/10.1093/jn/137.1.144S',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

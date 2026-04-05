import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculadora-dias-fertiles';
const title = 'Calculadora de Días Fértiles';
const description = 'Calcula tu ventana fértil y fecha de ovulación según tu ciclo menstrual.';
const faq = [
  {
    question: '¿Cómo se calcula la ventana fértil?',
    answer: 'La ventana fértil se calcula a partir del primer día de tu último periodo. La ovulación ocurre aproximadamente 14 días antes del inicio del siguiente ciclo. Los días fértiles incluyen los 5 días previos a la ovulación y el propio día de la ovulación.',
  },
  {
    question: '¿Qué precisión tiene esta calculadora?',
    answer: 'La calculadora es una estimación basada en el modelo estándar de ciclo de 28 días (o el que tú indiques). Es orientativa y puede no reflejar variaciones individuales. Para mayor precisión, combínala con el seguimiento de temperatura basal o test de ovulación.',
  },
  {
    question: '¿Qué pasa si mi ciclo es irregular?',
    answer: 'Si tus ciclos varían mucho de un mes a otro, el cálculo puede ser menos preciso. En ese caso, el seguimiento de la temperatura basal o los test de LH son métodos más fiables para identificar la ovulación.',
  },
  {
    question: '¿Cuánto tiempo sobrevive el óvulo tras la ovulación?',
    answer: 'El óvulo tiene una vida útil de 12 a 24 horas. Sin embargo, los espermatozoides pueden sobrevivir hasta 5 días en el tracto reproductivo femenino, de ahí que la ventana fértil real abarque varios días antes de la ovulación.',
  },
  {
    question: '¿Se puede usar esta calculadora para evitar el embarazo?',
    answer: 'No se recomienda usar esta calculadora como método anticonceptivo. Los métodos basados en el calendario tienen una tasa de fallo significativa. Consulta con tu médico o ginecólogo para métodos anticonceptivos seguros y adecuados para ti.',
  },
];
const howTo = [
  {
    name: 'Selecciona el primer día de tu último periodo',
    text: 'Haz clic en el día del calendario que corresponda al inicio de tu última menstruación.',
  },
  {
    name: 'Ajusta la duración de tu ciclo',
    text: 'Mueve el control deslizante para indicar cuántos días dura habitualmente tu ciclo menstrual.',
  },
  {
    name: 'Consulta los resultados',
    text: 'La calculadora muestra automáticamente la fecha de ovulación estimada, la ventana fértil y el inicio del siguiente periodo.',
  },
  {
    name: 'Navega por el calendario',
    text: 'Usa las flechas de navegación para ver los días marcados en meses anteriores o posteriores.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: '¿Cuándo empezó tu última regla?',
    step1Desc: 'Selecciona el primer día de tu último periodo menstrual en el calendario.',
    pulseHint: 'Haz clic en un día del calendario para continuar',
    step1Indicator: 'Fecha de Inicio',
    step2Indicator: 'Tu Calendario',
    sidebarTitle: 'Tu Ciclo',
    sidebarDesc: 'Personaliza los resultados ajustando la duración de tu ciclo.',
    labelCycleLength: 'Duración del Ciclo',
    unitDays: 'días',
    labelOvulation: 'Próxima Ovulación',
    labelFertileWindow: 'Ventana Fértil',
    labelNextPeriod: 'Siguiente Periodo',
    legendSelection: 'Tu selección',
    legendPeriod: 'Periodo',
    legendFertile: 'Fértil',
    legendOvulation: 'Ovulación',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Días Fértiles: Guía Completa sobre el Ciclo y la Ovulación',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 claves sobre la ventana fértil',
      items: [
        'La ovulación ocurre aproximadamente 14 días antes del inicio del siguiente periodo.',
        'La ventana fértil incluye los 5 días previos a la ovulación más el propio día de ovulación.',
        'Los espermatozoides pueden sobrevivir hasta 5 días en el tracto reproductivo femenino.',
        'Los ciclos irregulares reducen la fiabilidad del cálculo basado en el calendario.',
        'Combinar esta herramienta con temperatura basal o tests de LH aumenta la precisión.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona el cálculo de la ventana fértil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El método se basa en la regla de Ogino-Knaus y el modelo estándar de ovulación. Con un ciclo de 28 días, la ovulación suele producirse alrededor del día 14. La calculadora identifica este punto y marca los días de mayor fertilidad a su alrededor.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 días', label: 'Antes del siguiente periodo' },
        { value: '5 días', label: 'Duración de la ventana fértil' },
        { value: '12-24 h', label: 'Vida útil del óvulo' },
      ],
    },
    {
      type: 'title',
      text: 'Fases del ciclo menstrual',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase folicular',
          description: 'Comienza con la menstruación y dura hasta la ovulación.',
          points: [
            'Los folículos ováricos maduran bajo la influencia de la FSH.',
            'Dura entre 10 y 14 días en ciclos regulares.',
            'Los niveles de estrógenos aumentan progresivamente.',
          ],
        },
        {
          title: 'Fase lútea',
          description: 'Comienza tras la ovulación y finaliza con la menstruación.',
          points: [
            'El cuerpo lúteo produce progesterona para preparar el endometrio.',
            'Dura aproximadamente 14 días en ciclos normales.',
            'Si no hay fertilización, el cuerpo lúteo se degenera.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Aunque la calculadora utiliza un modelo estándar, los ciclos menstruales pueden variar mes a mes. Para una mayor precisión, combina esta herramienta con el seguimiento de la temperatura basal o los test de ovulación.',
    },
    {
      type: 'title',
      text: 'Signos biológicos de la ovulación',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Cambios en el moco cervical: en los días fértiles se vuelve transparente y elástico, similar a la clara de huevo.',
        'Aumento leve de la temperatura basal corporal (0,2–0,4 °C) justo después de la ovulación.',
        'Dolor o molestia leve en el lado del ovario activo (Mittelschmerz) durante la ovulación.',
        'Ligero aumento de la libido cerca de la ovulación, mediado por cambios hormonales.',
        'Distensión o sensación de plenitud abdominal leve durante los días fértiles.',
      ],
    },
    {
      type: 'title',
      text: 'Estilo de vida y fertilidad',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'El estrés crónico puede alterar la ovulación y alargar o acortar el ciclo menstrual.',
        'El peso corporal influye directamente: tanto el bajo peso como el sobrepeso afectan a la ovulación.',
        'El ejercicio moderado favorece la regularidad del ciclo; el ejercicio extremo puede suprimirlo.',
        'El tabaco reduce la reserva ovárica y adelanta la menopausia varios años.',
        'Una dieta rica en ácido fólico, hierro y antioxidantes apoya la salud reproductiva.',
      ],
    },
    {
      type: 'title',
      text: 'Métodos de monitorización del ciclo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Método', 'Fiabilidad', 'Coste'],
      rows: [
        ['Calculadora de calendario', 'Media', 'Gratuito'],
        ['Temperatura basal corporal', 'Alta con práctica', 'Bajo'],
        ['Test de LH en orina', 'Alta', 'Moderado'],
        ['Monitor de fertilidad digital', 'Muy alta', 'Alto'],
        ['Ecografía folicular', 'Máxima', 'Clínica'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulación',
          definition: 'Liberación del óvulo maduro desde el folículo ovárico, desencadenada por un pico de hormona luteinizante (LH). Ocurre una vez por ciclo.',
        },
        {
          term: 'Ventana fértil',
          definition: 'Período de mayor probabilidad de concepción, que abarca los 5 días previos a la ovulación más el día de la ovulación.',
        },
        {
          term: 'Moco cervical',
          definition: 'Secreción del cuello uterino cuya textura varía a lo largo del ciclo. En los días fértiles se vuelve transparente, elástico y filante, facilitando el paso de los espermatozoides.',
        },
        {
          term: 'Temperatura basal corporal',
          definition: 'Temperatura corporal en reposo absoluto, medida al despertar antes de cualquier actividad. Aumenta ligeramente (0,2–0,4 °C) tras la ovulación por efecto de la progesterona.',
        },
      ],
    },
  ],
  faq,
  bibliographyTitle: "Referencias",
  bibliography: [
    {
      name: 'OMS - Planificación familiar',
      url: 'https://www.who.int/es/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Sociedad Española de Fertilidad - Ciclo menstrual y ovulación',
      url: 'https://www.sef.es',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

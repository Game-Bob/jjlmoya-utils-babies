import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Calculadora de Presupuesto para Bebés';
export const description = 'La herramienta definitiva para planificar los gastos del primer año de tu bebé. Calcula el montaje de la habitación, costes mensuales y gastos ocultos con consejos de ahorro.';

export const faq = [
  {
    question: '¿Cuánto cuesta un bebé el primer año?',
    answer: 'De media, el primer año puede costar entre 5.000 € y 15.000 € dependiendo de tu estilo de vida, necesidades de conciliación y de si compras artículos nuevos o de segunda mano.',
  },
  {
    question: '¿Cuáles son los artículos más caros para un recién nacido?',
    answer: 'Los gastos iniciales más grandes suelen ser el cochecito, los muebles de la habitación (cuna, cómoda) y la silla de coche. El cuidado infantil es el gasto mensual recurrente más elevado.',
  },
  {
    question: '¿Cómo puedo ahorrar en los gastos del bebé?',
    answer: 'Comprar artículos de segunda mano para equipamiento y ropa, optar por la lactancia materna si es posible y usar una lista de nacimiento para que amigos y familiares te regalen lo esencial son las estrategias más efectivas.',
  },
  {
    question: '¿Qué son los "Gastos Fantasma" en la planificación del bebé?',
    answer: 'Son costes ocultos como el aumento en las facturas de suministros (calefacción/aire acondicionado), primas de seguros familiares más altas y vacunas no obligatorias o suministros médicos que no suelen estar en las listas estándar.',
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
    name: 'Configura tu perfil',
    text: 'Selecciona tu estilo de vida (Ahorro, Equilibrado o Premium), método de alimentación y estrategia de cuidado infantil.',
  },
  {
    name: 'Revisa tus artículos',
    text: 'Recorre las categorías (Inversión inicial, Gastos mensuales y Próximos hitos) y ajusta precios o marca artículos como de segunda mano.',
  },
  {
    name: 'Sigue tu presupuesto',
    text: 'Visualiza el total necesario para el primer año y monitoriza tu progreso a medida que adquieres los artículos.',
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
  slug: 'presupuesto-primer-ano-bebe',
  faqTitle: 'Preguntas Frecuentes',
  bibliographyTitle: 'Bibliografía',
  seo: [
    { type: 'summary', title: 'Resumen: Presupuesto del Bebé', items: [
      'El primer año puede costar entre 5.000 € y 15.000 €.',
      'La inversión inicial (habitación, cochecito) es el mayor obstáculo inicial.',
      'El cuidado infantil puede representar hasta el 50% del presupuesto mensual.',
      'Los artículos de segunda mano pueden reducir el presupuesto total hasta un 60%.',
    ]},
    { type: 'title', text: '¿Cuánto cuesta realmente tener un bebé el primer año?', level: 2 },
    { type: 'paragraph', html: 'Planificar la llegada de un bebé implica mucho más que comprar pañales. Requiere una mirada estratégica a las inversiones puntuales frente a los costes mensuales recurrentes. Nuestro planificador te ayuda a visualizar esta curva y prepararte para la transición financiera a la paternidad.' },
    { type: 'stats', columns: 3, items: [
      { value: '2.000 €+', label: 'Equipamiento Inicial' },
      { value: '100-150 €', label: 'Pañales/Farmacia Mensual' },
      { value: '40%+', label: 'Ahorro con 2ª Mano' },
    ]},
    { type: 'title', text: 'Desglose por Categorías: ¿A dónde va el dinero?', level: 3 },
    { type: 'table', headers: ['Categoría', 'Artículos Típicos', 'Frecuencia', 'Impacto en Coste'], rows: [
      ['Inversión Inicial', 'Cuna, Cochecito, Silla Coche', 'Puntual', 'Alto'],
      ['Gastos Mensuales', 'Pañales, Leche, Farmacia', 'Mensual', 'Medio'],
      ['Próximos Hitos', 'Trona, Comida Sólida, Ropa', 'Ocasional', 'Medio'],
      ['Conciliación', 'Guardería / Cuidado', 'Mensual', 'Muy Alto'],
    ]},
    { type: 'tip', html: '<strong>Consejo de Ahorro:</strong> Los cochecitos de alta calidad y los muebles de la habitación tienen un excelente valor de reventa. Comprar estos artículos de segunda mano puede ahorrarte miles de euros sin comprometer la seguridad o el estilo.' },
    { type: 'title', text: 'Comparativa de Estilos de Vida', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Ahorro Total', 
        description: 'Enfoque en esenciales y segunda mano.', 
        points: ['Ropa heredada', 'Equipamiento reacondicionado', 'Fomento lactancia materna', 'Conciliación pública'] 
      },
      { 
        title: 'Premium', 
        description: 'Últimos modelos y máxima comodidad.', 
        points: ['Equipamiento tecnológico', 'Leche orgánica', 'Habitación de diseño', 'Cuidado privado 1 a 1'] 
      },
    ]},
    { type: 'title', text: 'Checklist de Planificación Inteligente', level: 3 },
    { type: 'list', items: [
      'Revisa las actualizaciones de cobertura familiar de tus seguros.',
      'Presupuesta vacunas no obligatorias y artículos de farmacia especializada.',
      'Anticipa un aumento del 20% en las facturas de suministros del hogar.',
      'Crea una lista de nacimiento pronto para que la familia ayude con compras grandes.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Crea tu Plan',
    lifestyleLabel: 'Estilo de Vida',
    lifestyleSaving: 'Ahorro Total',
    lifestyleBalanced: 'Equilibrado',
    lifestylePremium: 'Premium',
    feedingLabel: 'Método Alimentación',
    feedingBreast: 'Lactancia Materna',
    feedingFormula: 'Leche de Fórmula',
    feedingMixed: 'Lactancia Mixta',
    childcareLabel: 'Estrategia de Cuidado',
    childcareHome: 'Cuidado en Casa',
    childcarePublic: 'Guardería Pública',
    childcarePrivate: 'Guardería Privada',
    startBtn: 'Generar mi Presupuesto',
    categoryBeforeBirth: 'Inversión Inicial',
    categoryMonthByMonth: 'Gastos Mensuales',
    categoryMilestones: 'Próximos Hitos',
    totalNeededLabel: 'Objetivo Total Primer Año',
    savingsProgressLabel: 'Listo / Ahorrado',
    chartTitle: 'Curva de Gasto Mensual',
    ghostAlertsTitle: 'Alertas de Gastos Fantasma',
    ghostInsurance: 'Revisar Seguros Vida/Salud',
    ghostHeating: 'Prever +20% en Calefacción/AA',
    ghostVaccines: 'Presupuesto Vacunas No Obligatorias',
    diaperCalcTitle: 'Control de Precio Pañales',
    diaperPriceLabel: 'Precio Paquete',
    diaperUnitsLabel: 'Unidades por Paquete',
    secondHandLabel: '2ª Mano / Regalo',
    wishlistLabel: 'En la Lista',
    itemNursery: 'Montaje Habitación',
    itemStroller: 'Cochecito y Silla Paseo',
    itemHospitalBag: 'Bolsa del Hospital',
    itemDiapers: 'Pañales y Toallitas',
    itemPharmacy: 'Farmacia e Higiene',
    itemDaycare: 'Guardería / Conciliación',
    itemSolidFood: 'Transición Comida Sólida',
    itemClothes: 'Ropa de Temporada',
    itemHighChair: 'Trona y Vajilla',
    editLabel: 'Editar Precio',
    saveBtn: 'Guardar',
    exportBtn: 'Exportar JSON',
    importBtn: 'Importar JSON',
    resetBtn: 'Reiniciar Plan',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Inicio',
    perMonthLabel: '/mes',
    confirmReset: '¿Estás seguro?',
    currencyMultiplier: 1,
  },
};

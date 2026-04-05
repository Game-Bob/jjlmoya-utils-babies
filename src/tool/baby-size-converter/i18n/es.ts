import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'conversor-tallas-bebe';
const title = 'Conversor de Tallas de Bebé';
const description = 'Convierte tallas de ropa de bebé entre Zara, H&M, Primark, Carter\'s, Kiabi, Mango y Mayoral. Introduce la altura y el peso para obtener la talla exacta de cada marca.';
const faq = [
  {
    question: '¿Cómo sé qué talla de ropa le corresponde a mi bebé?',
    answer: 'Lo más fiable es usar la altura del bebé como referencia principal. Las tallas europeas (50, 56, 62...) corresponden directamente a la altura en centímetros. Introduce la altura y el peso del bebé en el conversor para obtener la talla recomendada por cada marca.',
  },
  {
    question: '¿Por qué las tallas varían tanto entre marcas?',
    answer: 'Cada marca tiene su propio patrón de corte. H&M y Primark tienden a tallar más grande, mientras que Carter\'s y Mayoral tienen cortes más ajustados. Usa siempre las medidas del bebé, no solo la edad.',
  },
  {
    question: '¿Qué medida debo tomar si está entre dos tallas?',
    answer: 'Elige siempre la talla superior. Los bebés crecen muy rápidamente y una talla más grande garantiza mayor durabilidad y comodidad.',
  },
  {
    question: '¿Las tallas en pulgadas funcionan igual?',
    answer: 'Las marcas americanas como Carter\'s usan pulgadas y el peso como referencia. El conversor automáticamente te muestra las equivalencias en el sistema imperial si lo activas.',
  },
];
const howTo = [
  {
    name: 'Introduce la altura del bebé',
    text: 'Usa el slider o los botones para ajustar la altura actual del bebé en centímetros o pulgadas.',
  },
  {
    name: 'Introduce el peso del bebé',
    text: 'Ajusta el peso en kg o libras para afinar los resultados, ya que algunas marcas usan el peso como referencia complementaria.',
  },
  {
    name: 'Selecciona una marca',
    text: 'Elige la marca de ropa para ver la talla sugerida y las medidas estimadas de la prenda.',
  },
  {
    name: 'Consulta las equivalencias',
    text: 'En el panel derecho verás las tallas equivalentes de todas las marcas disponibles de un vistazo.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Medidas del bebé',
    labelResults: 'Equivalencias estimadas',
    labelHeight: 'Altura del bebé',
    labelWeight: 'Peso actual del bebé',
    labelPresets: 'Preajustes por edad típica',
    unitMetric: 'Métrico (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marca y Corte',
    labelSuggested: 'Talla sugerida',
    labelChest: 'Pecho',
    labelWaist: 'Cintura',
    labelGarmentMeasures: 'Medidas estimadas de la prenda',
    fitRegular: 'Corte regular',
    fitLarge: 'Corte amplio',
    fitSmall: 'Corte ajustado',
    tipTitle: 'Consejo de experto',
    tipText: 'Los bebés crecen en picos de desarrollo muy rápidos. Si el resultado está en el límite superior de una talla, elige siempre la talla superior para garantizar la durabilidad y comodidad del bebé.',
    shareAriaLabel: 'Compartir talla',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
  },
  seo: [
    { type: 'title', text: 'Guía de tallas de bebé: Zara, H&M, Primark y marcas españolas', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Crecimiento mensual' },
      { value: '3 meses', label: 'Duración de cada talla' },
      { value: '95%', label: 'Fiabilidad por altura' },
    ]},
    { type: 'tip', html: 'Usa siempre la altura como referencia principal para elegir talla, no la edad. Dos bebés del mismo mes pueden tener hasta 8–10 cm de diferencia, lo que supone saltar una talla completa.' },
    { type: 'title', text: 'Tallas por edad, altura y peso', level: 3 },
    { type: 'table', headers: ['Edad aprox.', 'Altura (cm)', 'Peso (kg)', 'Talla habitual', 'Uso estimado'], rows: [
      ['Recién nacido', '50–56', '3–4.5', '50 / RN', '4–6 semanas'],
      ['1–3 meses', '56–62', '4.5–6', '56–62', '6–8 semanas'],
      ['3–6 meses', '62–68', '6–8', '62–68', '6–8 semanas'],
      ['6–9 meses', '68–74', '8–9.5', '68–74', '6–8 semanas'],
      ['9–12 meses', '74–80', '9.5–11', '74–80', '6–8 semanas'],
      ['12–18 meses', '80–86', '11–13', '80–86', '3–4 meses'],
      ['18–24 meses', '86–92', '13–15', '86–92', '3–4 meses'],
    ]},
    { type: 'title', text: 'Marcas que tallan grande vs ajustado', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Tallan grande (elige talla inferior)',
        description: 'Estas marcas usan cortes más amplios; toma una talla menos de la habitual.',
        points: [
          'H&M: suele tallar una talla más',
          'Primark: corte amplio generalizado',
          'Lupilu (Lidl): corte holgado',
          'Recomendado para bebés en percentil bajo',
        ],
      },
      {
        title: 'Tallan ajustado (elige talla superior)',
        description: 'Estas marcas usan cortes más ceñidos; toma una talla más de la habitual.',
        points: [
          "Carter's: corte americano ceñido",
          'Mayoral: corte europeo ajustado',
          'Neck & Neck: tallas reducidas',
          'Recomendado para bebés en percentil alto',
        ],
      },
    ]},
    { type: 'title', text: 'Claves para acertar con la talla', level: 3 },
    { type: 'list', items: [
      'Mide siempre al bebé antes de comprar, no te fíes solo de la edad',
      'Si está en el límite entre dos tallas, elige la talla superior',
      'Ten en cuenta el margen para el pañal en prendas de cuerpo entero',
      'Las tallas europeas (50, 56, 62...) corresponden a la altura en cm',
      'Lava siempre antes de usar: el algodón puede encoger hasta un 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Talla 50 / Recién nacido',
        definition: 'Pensada para bebés de hasta 50 cm de altura y unos 3.5 kg. Muchos bebés la superan muy rápidamente, incluso en las primeras semanas.',
      },
      {
        term: 'Medida del tiro',
        definition: 'Distancia desde la entrepierna hasta la cintura. Fundamental en bodies y peleles: un tiro corto limita el movimiento del bebé aunque el resto de la prenda encaje bien.',
      },
      {
        term: 'Referencia por peso',
        definition: "Algunas marcas americanas como Carter's usan el peso como referencia primaria. Útil para bebés con proporciones fuera del percentil estándar.",
      },
      {
        term: 'Cuello de sobre',
        definition: 'Diseño del escote de bodies y camisetas que permite vestir al bebé deslizando la prenda hacia abajo en lugar de pasarla por la cabeza. Imprescindible en los primeros meses.',
      },
    ]},
    { type: 'summary', title: 'Lo que debes recordar', items: [
      'La altura es el indicador más fiable para elegir talla, por encima de la edad.',
      "H&M y Primark tienden a tallar grande; Carter's y Mayoral tallan ajustado.",
      'Las tallas europeas numéricas (50, 56, 62...) corresponden a la altura en cm.',
      'En el límite entre tallas, elegir la superior garantiza mayor durabilidad.',
      'El cuello de sobre y el tiro amplio son los detalles clave de comodidad.',
    ]},
  ],
  faq,
  bibliography: [
    {
      name: 'Zara - Guía de tallas infantiles',
      url: 'https://www.zara.com/es/es/size-guide.html',
    },
    {
      name: 'H&M - Guía de tallas para bebé',
      url: 'https://www2.hm.com/es_es/customer-service/sizeguide.html',
    },
    {
      name: 'OMS - Estándares de crecimiento infantil',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Guía de tallas',
      url: 'https://www.mayoral.com/es-es/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

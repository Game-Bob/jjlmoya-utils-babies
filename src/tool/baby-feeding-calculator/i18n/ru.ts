import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulyator-kormleniya-rebenka';
const title = 'Калькулятор Кормления Ребенка';
const description = 'Рассчитайте, сколько молока нужно вашему ребенку в зависимости от его веса и возраста. Рекомендуемые порции, миллилитры на кормление и сигналы голода и сытости.';

const faq = [
  {
    question: 'Сколько молока нужно новорожденному?',
    answer: 'В первый день жизни желудок ребенка размером с вишню и требует всего от 5 до 7 мл за одно кормление. С пятого дня объем увеличивается до 45–60 мл, и потребности постепенно растут.',
  },
  {
    question: 'Как часто должен есть ребенок?',
    answer: 'Новорожденным требуется от 8 до 12 кормлений в сутки. К 3 месяцам интервалы обычно увеличиваются до 7–8 кормлений, а к 6 месяцам — до 5 кормлений в день.',
  },
  {
    question: 'Как узнать, достаточно ли ест мой ребенок?',
    answer: 'Самые надежные показатели: адекватная прибавка в весе, минимум 5–6 мокрых подгузников в день и спокойствие ребенка после кормления.',
  },
  {
    question: 'Одинаковы ли объемы при грудном вскармливании и смеси?',
    answer: 'При грудном вскармливании рекомендуется кормить по требованию, не измеряя объемы. При кормлении смесью обычным ориентиром является 150 мл на кг веса в сутки, распределенные на количество кормлений в зависимости от возраста.',
  },
];

const howTo = [
  {
    name: 'Выберите возраст ребенка',
    text: 'Выберите единицу измерения (дни, недели или месяцы) и установите значение с помощью ползунка или кнопок.',
  },
  {
    name: 'Введите вес ребенка',
    text: 'Используйте ползунок веса или кнопки, чтобы установить текущий вес ребенка в килограммах.',
  },
  {
    name: 'Выберите тип кормления',
    text: 'Выберите грудное, смешанное или искусственное вскармливание, чтобы получить наиболее подходящее руководство.',
  },
  {
    name: 'Ознакомьтесь с рекомендуемым планом',
    text: 'Калькулятор показывает количество кормлений, миллилитры на порцию и расчетный суточный объем.',
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
  inLanguage: 'ru',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Текущая конфигурация',
    labelPlan: 'Рекомендуемый план',
    unitDays: 'дней',
    unitWeeks: 'недель',
    unitMonths: 'месяцев',
    labelWeight: 'Вес ребенка',
    labelFeedType: 'Тип вскармливания',
    feedBreast: 'Грудь',
    feedMixed: 'Смешанное',
    feedFormula: 'Смесь',
    labelFreeDemand: 'По требованию',
    labelMlPerFeed: 'мл на кормление',
    labelFeedsCount: 'Кормлений / 24ч',
    labelDailyTotal: 'Суточный объем (расч.)',
    labelHunger: 'Сигналы голода',
    labelFullness: 'Сигналы сытости',
    faqTitle: 'Часто задаваемые вопросы',
    bibliographyTitle: 'Источники',
  },
  seo: [
    { type: 'summary', title: 'Кратко: Питание ребенка', items: [
      'Объем желудка новорожденного составляет всего 5–7 мл в первый день.',
      'Общий ориентир для смеси — 150 мл на кг веса в сутки.',
      'Грудное вскармливание предлагается по требованию без фиксированных объемов.',
      'Частота снижается с возрастом: с 8–12 кормлений до 4–5 через 6 месяцев.',
    ]},
    { type: 'title', text: 'Сколько молока нужно моему ребенку по весу и возрасту?', level: 2 },
    { type: 'paragraph', html: 'Потребности в молоке быстро меняются в первые месяцы. Калькулятор оценивает количество по текущему весу и возрасту ребенка, следуя педиатрическим рекомендациям ВОЗ и AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 мл', label: 'День 1 (размер вишни)' },
      { value: '150 мл/кг', label: 'Норма смеси в сутки' },
      { value: '8–12', label: 'Кормлений в день' },
    ]},
    { type: 'title', text: 'Размер желудка по возрасту', level: 3 },
    { type: 'table', headers: ['Возраст', 'Размер', 'Объем', 'Кормлений/сут'], rows: [
      ['День 1', 'Вишня', '5–7 мл', '8–12'],
      ['Дни 2–4', 'Грецкий орех', '22–27 мл', '8–12'],
      ['Дни 5–30', 'Яйцо', '45–60 мл', '8–10'],
      ['1–3 мес.', 'Максимальный', '90–120 мл', '7–8'],
      ['3–6 мес.', 'Максимальный', '120–150 мл', '5–6'],
      ['6+ мес.', 'Максимальный', '150–180 мл', '4–5'],
    ]},
    { type: 'tip', html: 'Надежный индикатор достаточного питания — количество мокрых подгузников: от 5 до 6 в день, начиная с пятого дня жизни, указывают на хорошее увлажнение.' },
    { type: 'title', text: 'Грудное вскармливание против смеси', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Грудное вскармливание', description: 'Естественное питание по требованию.', points: ['Нет строгого графика', 'Активные антитела', 'Переменный состав', 'Трудно количественно оценить'] },
      { title: 'Искусственное вскармливание', description: 'Кормления по графику с расчетным объемом.', points: ['Каждые 3–4 часа', 'Стабильный состав', 'Легко контролировать прием', 'Требует стерильной подготовки'] },
    ]},
    { type: 'list', items: [
      'Адекватная прибавка в весе: 150–200 г в неделю в первый месяц',
      'Минимум 5–6 мокрых подгузников в день',
      'Ребенок выглядит спокойным после кормления',
      'Моча прозрачная или бледно-желтая',
    ]},
  ],
  faqTitle: "Часто задаваемые вопросы",
  faq,
  bibliographyTitle: "Источники",
  bibliography: [
    {
      name: 'ВОЗ - Кормление младенцев и детей раннего возраста',
      url: 'https://www.who.int/ru/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      name: 'American Academy of Pediatrics - Breastfeeding Guidelines',
      url: 'https://www.aap.org/en/patient-care/breastfeeding/',
    },
    {
      name: 'La Leche League International',
      url: 'https://www.llli.org',
    },
    {
      name: 'Союз педиатров России - Грудное вскармливание',
      url: 'https://www.pediatr-russia.ru',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

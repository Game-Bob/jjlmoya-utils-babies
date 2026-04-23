import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Планировщик бюджета ребенка';
export const description = 'Лучший инструмент для планирования расходов на первый год жизни вашего ребенка. Рассчитайте стоимость обустройства детской, ежемесячные траты и скрытые расходы с умными советами по экономии.';

export const faq = [
  {
    question: 'Сколько стоит ребенок в первый год жизни?',
    answer: 'В среднем первый год может стоить от 300 000 до 1 000 000 рублей в зависимости от вашего образа жизни, потребностей в присмотре и того, покупаете ли вы новые вещи или б/у.',
  },
  {
    question: 'Какие самые дорогие товары для новорожденного?',
    answer: 'Самыми большими единовременными расходами обычно являются коляска, мебель для детской (кроватка, комод) и автокресло. Присмотр за ребенком — самая высокая регулярная ежемесячная трата.',
  },
  {
    question: 'Как сэкономить на расходах на ребенка?',
    answer: 'Покупка б/у оборудования и одежды, грудное вскармливание (если возможно) и использование списка подарков для близких — самые эффективные стратегии экономии.',
  },
  {
    question: 'Что такое "Скрытые расходы" при планировании бюджета на ребенка?',
    answer: 'Это такие траты, как увеличение счетов за коммунальные услуги (отопление/охлаждение), повышенные страховые взносы для семьи, а также необязательные прививки или медицинские товары, которые редко попадают в стандартные списки.',
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
    name: 'Настройте профиль',
    text: 'Выберите ваш образ жизни (Экономный, Сбалансированный или Премиум), метод кормления и стратегию присмотра за ребенком.',
  },
  {
    name: 'Проверьте список товаров',
    text: 'Пройдите по категориям (Первоначальные траты, Ежемесячные и Этапы развития) и настройте цены или отметьте товары как б/у.',
  },
  {
    name: 'Следите за бюджетом',
    text: 'Увидьте общую сумму, необходимую на первый год, и отслеживайте прогресс по мере приобретения вещей.',
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
    priceCurrency: 'RUB',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'byudzhet-rebenka-pervyj-god',
  faqTitle: 'Часто задаваемые вопросы',
  bibliographyTitle: 'Библиография',
  seo: [
    { type: 'summary', title: 'Итог: Бюджет на ребенка', items: [
      'Первый год может стоить от 300 000 до 1 000 000 рублей.',
      'Единовременные расходы (детская, коляска) — главный барьер на старте.',
      'Присмотр за ребенком может составлять до 50% ежемесячного бюджета.',
      'Вещи б/у могут снизить общий бюджет почти на 60%.',
    ]},
    { type: 'title', text: 'Сколько на самом деле стоит ребенок в первый год?', level: 2 },
    { type: 'paragraph', html: 'Планирование бюджета на ребенка — это не просто покупка подгузников. Это требует стратегического взгляда на разовые инвестиции в сравнении с регулярными ежемесячными тратами. Наш планировщик поможет вам визуализировать эту кривую и подготовиться к финансовым переменам в жизни.' },
    { type: 'stats', columns: 3, items: [
      { value: '150 000 ₽+', label: 'Стартовый набор' },
      { value: '8-12 000 ₽', label: 'Подгузники/Гигиена в мес.' },
      { value: '40%+', label: 'Экономия с б/у вещами' },
    ]},
    { type: 'title', text: 'Разбивка по категориям: Куда уходят деньги?', level: 3 },
    { type: 'table', headers: ['Категория', 'Типичные товары', 'Частота', 'Влияние на бюджет'], rows: [
      ['Стартовые траты', 'Кроватка, Коляска, Автокресло', 'Разово', 'Высокое'],
      ['Ежемесячно', 'Подгузники, Смесь, Аптечка', 'Каждый месяц', 'Среднее'],
      ['Этапы развития', 'Стульчик, Прикорм, Одежда', 'Время от времени', 'Среднее'],
      ['Присмотр', 'Ясли / Няня', 'Каждый месяц', 'Очень высокое'],
    ]},
    { type: 'tip', html: '<strong>Совет профессионала:</strong> Качественные коляски и детская мебель имеют отличную стоимость при перепродаже. Покупка таких вещей б/у может сэкономить вам десятки тысяч рублей без ущерба для безопасности и стиля.' },
    { type: 'title', text: 'Сравнение образов жизни', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Экономный', 
        description: 'Фокус на б/у вещах и самом необходимом.', 
        points: ['Одежда "по наследству"', 'Восстановленное оборудование', 'Акцент на ГВ', 'Государственные ясли'] 
      },
      { 
        title: 'Премиум', 
        description: 'Новейшие модели и максимальный комфорт.', 
        points: ['Высокотехнологичные гаджеты', 'Органическая смесь', 'Дизайнерская детская', 'Частная няня 1-на-1'] 
      },
    ]},
    { type: 'title', text: 'Чек-лист умного планирования', level: 3 },
    { type: 'list', items: [
      'Проверьте обновления семейного страхования.',
      'Заложите бюджет на необязательные прививки и товары из аптеки.',
      'Учтите рост счетов за электричество и воду на 20%.',
      'Заранее создайте список подарков, чтобы близкие помогли с крупными покупками.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Начать планирование',
    lifestyleLabel: 'Образ жизни',
    lifestyleSaving: 'Максимальная экономия',
    lifestyleBalanced: 'Сбалансированный',
    lifestylePremium: 'Премиум',
    feedingLabel: 'Метод кормления',
    feedingBreast: 'Грудное вскармливание',
    feedingFormula: 'Смесь',
    feedingMixed: 'Смешанное',
    childcareLabel: 'Стратегия присмотра',
    childcareHome: 'Остаюсь дома',
    childcarePublic: 'Государственные ясли',
    childcarePrivate: 'Частные ясли / Няня',
    startBtn: 'Создать бюджет',
    categoryBeforeBirth: 'Стартовые траты',
    categoryMonthByMonth: 'Ежемесячные расходы',
    categoryMilestones: 'Этапы развития',
    totalNeededLabel: 'Общая цель на 1-й год',
    savingsProgressLabel: 'Готово / Накоплено',
    chartTitle: 'Кривая ежемесячных расходов',
    ghostAlertsTitle: 'Скрытые расходы',
    ghostInsurance: 'Проверка страховки',
    ghostHeating: 'Заложить +20% на коммуналку',
    ghostVaccines: 'Бюджет на доп. прививки',
    diaperCalcTitle: 'Контроль цены подгузников',
    diaperPriceLabel: 'Цена упаковки',
    diaperUnitsLabel: 'Штук в упаковке',
    secondHandLabel: 'Б/у / Подарок',
    wishlistLabel: 'В списке желаний',
    itemNursery: 'Обустройство детской',
    itemStroller: 'Коляска и системы для прогулок',
    itemHospitalBag: 'Сумка в роддом',
    itemDiapers: 'Подгузники и салфетки',
    itemPharmacy: 'Аптечка и гигиена',
    itemDaycare: 'Ясли / Присмотр',
    itemSolidFood: 'Переход на прикорм',
    itemClothes: 'Сезонная одежда',
    itemHighChair: 'Стульчик и посуда',
    editLabel: 'Изменить цену',
    saveBtn: 'Сохранить',
    exportBtn: 'Экспорт JSON',
    importBtn: 'Импорт JSON',
    resetBtn: 'Сбросить план',
    currencySymbol: '₽',
    monthPrefix: 'М',
    initialMonthLabel: 'Старт',
    perMonthLabel: '/мес',
    confirmReset: 'Вы уверены?',
    currencyMultiplier: 100,
  },
};

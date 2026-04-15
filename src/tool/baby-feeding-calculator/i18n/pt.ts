import type { BabyFeedingCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculadora-mamadas-bebe';
const title = 'Calculadora de Mamadas do Bebé';
const description = 'Calcule quanto leite o seu bebé necessita de acordo com o seu peso e idade. Mamadas recomendadas, mililitros por mamada e sinais de fome e saciedade.';

const faq = [
  {
    question: 'Quanto leite necessita um recém-nascido?',
    answer: 'No primeiro dia de vida, o estômago do bebé tem o tamanho de uma cereja e necessita apenas de 5 a 7 ml por mamada. A partir do quinto dia a capacidade cresce até aos 45–60 ml e as necessidades aumentam progressivamente.',
  },
  {
    question: 'Com que frequência deve comer um bebé?',
    answer: 'Os recém-nascidos necessitam de 8 a 12 mamadas por dia. Aos 3 meses costumam espaçar para 7–8 mamadas, e aos 6 meses para cerca de 5 mamadas diárias.',
  },
  {
    question: 'Como sei se o meu bebé está a comer o suficiente?',
    answer: 'Os indicadores mais fiáveis são: ganho de peso adequado, pelo menos 5–6 fraldas molhadas por dia e o bebé mostrar sinais de saciedade após as mamadas.',
  },
  {
    question: 'A amamentação e a fórmula têm as mesmas quantidades?',
    answer: 'Com a amamentação recomenda-se alimentar em livre demanda sem medir volumes. Com a fórmula, a referência habitual é 150 ml por kg de peso por dia, distribuídos pelo número de mamadas conforme a idade.',
  },
];

const howTo = [
  {
    name: 'Selecione a idade do bebé',
    text: 'Escolha a unidade (dias, semanas ou meses) e ajuste o valor com o slider ou os botões.',
  },
  {
    name: 'Introduza o peso do bebé',
    text: 'Use o slider de peso ou os botões para ajustar o peso atual do bebé em quilogramas.',
  },
  {
    name: 'Selecione o tipo de alimentação',
    text: 'Escolha entre peito, mista ou fórmula para obter o guia mais adaptado.',
  },
  {
    name: 'Consulte o plano recomendado',
    text: 'A calculadora mostra o número de mamadas, mililitros por mamada e o total diário estimado.',
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
  inLanguage: 'pt',
};

export const content: BabyFeedingCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelConfig: 'Configuração atual',
    labelPlan: 'Plano recomendado',
    unitDays: 'dias',
    unitWeeks: 'semanas',
    unitMonths: 'meses',
    labelWeight: 'Peso do bebé',
    labelFeedType: 'Tipo de alimentação',
    feedBreast: 'Peito',
    feedMixed: 'Mista',
    feedFormula: 'Fórmula',
    labelFreeDemand: 'Livre demanda',
    labelMlPerFeed: 'ml por mamada',
    labelFeedsCount: 'Mamadas / 24h',
    labelDailyTotal: 'Total diário (est.)',
    labelHunger: 'Sinais de fome',
    labelFullness: 'Sinais de saciedade',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências',
  },
  seo: [
    { type: 'summary', title: 'Resumo: Alimentação do bebé', items: [
      'La capacidade gástrica do recém-nascido é de apenas 5–7 ml no primeiro dia.',
      'A referência geral para fórmula é 150 ml por kg de peso por dia.',
      'A amamentação é oferecida em livre demanda sem volumes fixos.',
      'A frequência diminui com a idade: de 8–12 mamadas para 4–5 em 6 meses.',
    ]},
    { type: 'title', text: 'Quanto leite necessita o meu bebé segundo o seu peso e idade?', level: 2 },
    { type: 'paragraph', html: 'As necessidades de leite mudam rapidamente nos primeiros meses. A calculadora estima a quantidade segundo o peso atual e a idade do bebé, seguindo as diretrizes pediátricas da OMS e da AAP.' },
    { type: 'stats', columns: 3, items: [
      { value: '5–7 ml', label: 'Dia 1 (cereja)' },
      { value: '150 ml/kg', label: 'Referência fórmula' },
      { value: '8–12', label: 'Mamadas/dia recém-nascido' },
    ]},
    { type: 'title', text: 'Tamanho do estômago por idade', level: 3 },
    { type: 'table', headers: ['Idade', 'Tamanho ref.', 'Capacidade', 'Mamadas/dia'], rows: [
      ['Dia 1', 'Cereja', '5–7 ml', '8–12'],
      ['Dias 2–4', 'Noz', '22–27 ml', '8–12'],
      ['Dias 5–30', 'Ovo', '45–60 ml', '8–10'],
      ['1–3 meses', 'Máxima', '90–120 ml', '7–8'],
      ['3–6 meses', 'Máxima', '120–150 ml', '5–6'],
      ['6+ meses', 'Máxima', '150–180 ml', '4–5'],
    ]},
    { type: 'tip', html: 'Um indicador fiável de alimentação adequada é o número de fraldas molhadas: entre 5 e 6 por dia a partir do quinto dia indicam boa hidratação.' },
    { type: 'title', text: 'Amamentação vs fórmula', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Amamentação', description: 'Alimentação natural em livre demanda.', points: ['Sem horário fixo', 'Anticorpos ativos', 'Composição variável', 'Difícil quantificar'] },
      { title: 'Leite de fórmula', description: 'Mamadas programadas com volume calculável.', points: ['A cada 3–4 horas', 'Composição estável', 'Fácil controlar a ingestão', 'Requer preparação estéril'] },
    ]},
    { type: 'list', items: [
      'Ganho de peso adequado: 150–200 g/semana no primeiro mês',
      'Pelo menos 5–6 fraldas molhadas por dia',
      'O bebé mostra-se tranquilo após as mamadas',
      'Urina clara ou amarelo muito pálido',
    ]},
  ],
  faqTitle: "Perguntas frequentes",
  faq,
  bibliographyTitle: "Referências",
  bibliography: [
    {
      name: 'OMS - Alimentação do lactante e da criança pequena',
      url: 'https://www.who.int/pt/health-topics/infant-nutrition',
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
      name: 'Sociedade Portuguesa de Pediatria - Aleitamento materno',
      url: 'https://www.spp.pt',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Planeador de Orçamento do Bebé';
export const description = 'A ferramenta definitiva para planear os gastos do primeiro ano do seu bebé. Calcule o enxoval, custos mensais e despesas ocultas com dicas de poupança.';

export const faq = [
  {
    question: 'Quanto custa um bebé no primeiro ano?',
    answer: 'Em média, o primeiro ano pode custar entre 5.000 € e 15.000 €, dependendo do seu estilo de vida, necessidades de infantário e se opta por comprar artigos novos ou em segunda mão.',
  },
  {
    question: 'Quais são os artigos mais caros para um recém-nascido?',
    answer: 'Os maiores gastos iniciais são geralmente o carrinho, o mobiliário do quarto (berço, cómoda) e a cadeirinha do carro. O cuidado infantil é a despesa mensal recorrente mais elevada.',
  },
  {
    question: 'Como posso poupar nos gastos do bebé?',
    answer: 'Comprar artigos em segunda mão para equipamento e roupa, optar pelo aleitamento materno (se possível) e utilizar uma lista de nascimento para que amigos e familiares ofereçam o essencial são as estratégias mais eficazes.',
  },
  {
    question: 'O que são "Despesas Fantasma" no planeamento do bebé?',
    answer: 'São custos ocultos como o aumento nas faturas de eletricidade e gás (aquecimento/arrefecimento), prémios de seguros familiares mais altos e vacinas não obrigatórias ou material médico que não costuma estar nas listas padrão.',
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
    name: 'Configure o seu perfil',
    text: 'Selecione o seu estilo de vida (Poupança, Equilibrado ou Premium), método de alimentação e estratégia de cuidado infantil.',
  },
  {
    name: 'Reveja os seus artigos',
    text: 'Percorra as categorias (Investimento inicial, Mensal e Próximas etapas) e ajuste preços ou marque artigos como sendo de segunda mão.',
  },
  {
    name: 'Acompanhe o orçamento',
    text: 'Visualize o total necessário para o primeiro ano e monitorize o seu progresso à medida que adquire os artigos.',
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
  slug: 'planeador-orcamento-bebe',
  faqTitle: 'Perguntas Frequentes',
  bibliographyTitle: 'Bibliografia',
  seo: [
    { type: 'summary', title: 'Resumo: Orçamento do Bebé', items: [
      'O primeiro ano pode custar entre 5.000 € e 15.000 €.',
      'O investimento inicial (quarto, carrinho) é o maior obstáculo no começo.',
      'O cuidado infantil pode representar até 50% do orçamento mensal recorrente.',
      'Artigos em segunda mão podem reduzir o orçamento total em cerca de 60%.',
    ]},
    { type: 'title', text: 'Quanto custa realmente um bebé no primeiro ano?', level: 2 },
    { type: 'paragraph', html: 'Planear a chegada de um bebé envolve muito mais do que comprar fraldas. Requer uma visão estratégica dos investimentos pontuais face aos custos mensais. O nosso planeador ajuda-o a visualizar esta curva e a preparar-se para a transição financeira para a parentalidade.' },
    { type: 'stats', columns: 3, items: [
      { value: '2.000 €+', label: 'Equipamento Inicial' },
      { value: '100-150 €', label: 'Fraldas/Higiene Mensal' },
      { value: '40%+', label: 'Poupança com 2ª Mão' },
    ]},
    { type: 'title', text: 'Divisão por Categorias: Para onde vai o dinheiro?', level: 3 },
    { type: 'table', headers: ['Categoria', 'Artigos Típicos', 'Frequência', 'Impacto no Custo'], rows: [
      ['Investimento Inicial', 'Berço, Carrinho, Cadeira Auto', 'Pontual', 'Alto'],
      ['Mensal', 'Fraldas, Leite, Farmácia', 'Mensal', 'Médio'],
      ['Próximas Etapas', 'Cadeira de Papa, Introdução Alimentar, Roupa', 'Ocasional', 'Médio'],
      ['Cuidados', 'Infantário / Ama', 'Mensal', 'Muito Alto'],
    ]},
    { type: 'tip', html: '<strong>Dica de Poupança:</strong> Carrinhos de alta qualidade e mobiliário de quarto têm um excelente valor de revenda. Comprar estes artigos em segunda mão pode poupar-lhe milhares de euros sem comprometer a segurança ou o estilo.' },
    { type: 'title', text: 'Comparação de Estilos de Vida', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Poupança', 
        description: 'Foco no essencial e em segunda mão.', 
        points: ['Roupa emprestada/usada', 'Equipamento recondicionado', 'Foco no aleitamento materno', 'Infantário público'] 
      },
      { 
        title: 'Premium', 
        description: 'Últimos modelos e máximo conforto.', 
        points: ['Equipamento de alta tecnologia', 'Leite biológico', 'Quarto de designer', 'Ama privada em casa'] 
      },
    ]},
    { type: 'title', text: 'Checklist de Planeamento Inteligente', level: 3 },
    { type: 'list', items: [
      'Verifique as atualizações de cobertura familiar dos seus seguros.',
      'Reserve orçamento para vacinas não obrigatórias e farmácia especializada.',
      'Antecipe um aumento de 20% nas faturas da casa (energia/aquecimento).',
      'Crie uma lista de nascimento cedo para que a família ajude nas compras maiores.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Inicie o seu Plano',
    lifestyleLabel: 'Escolha de Estilo de Vida',
    lifestyleSaving: 'Poupança Total',
    lifestyleBalanced: 'Equilibrado',
    lifestylePremium: 'Premium',
    feedingLabel: 'Método de Alimentação',
    feedingBreast: 'Amamentação',
    feedingFormula: 'Leite de Fórmula',
    feedingMixed: 'Misto',
    childcareLabel: 'Estratégia de Cuidados',
    childcareHome: 'Ficar em Casa',
    childcarePublic: 'Infantário Público',
    childcarePrivate: 'Infantário Privado',
    startBtn: 'Gerar o meu Orçamento',
    categoryBeforeBirth: 'Investimento Inicial',
    categoryMonthByMonth: 'Gastos Mensais',
    categoryMilestones: 'Próximas Etapas',
    totalNeededLabel: 'Objetivo Total 1º Ano',
    savingsProgressLabel: 'Pronto / Poupado',
    chartTitle: 'Curva de Gasto Mensal',
    ghostAlertsTitle: 'Alertas de Gastos Fantasma',
    ghostInsurance: 'Verificar Seguros Vida/Saúde',
    ghostHeating: 'Prever +20% Energia/Aquecimento',
    ghostVaccines: 'Orçamento Vacinas Opcionais',
    diaperCalcTitle: 'Controlo de Preço de Fraldas',
    diaperPriceLabel: 'Preço do Pacote',
    diaperUnitsLabel: 'Unidades por Pacote',
    secondHandLabel: '2ª Mão / Oferta',
    wishlistLabel: 'Na Lista',
    itemNursery: 'Preparação do Quarto',
    itemStroller: 'Carrinho e Sistema de Viagem',
    itemHospitalBag: 'Essenciais Saco Maternidade',
    itemDiapers: 'Fraldas e Toalhitas',
    itemPharmacy: 'Farmácia e Higiene',
    itemDaycare: 'Infantário / Cuidados',
    itemSolidFood: 'Introdução Alimentar',
    itemClothes: 'Roupa de Estação',
    itemHighChair: 'Cadeira de Papa e Refeição',
    editLabel: 'Editar Preço',
    saveBtn: 'Guardar',
    exportBtn: 'Exportar JSON',
    importBtn: 'Importar JSON',
    resetBtn: 'Reiniciar Plano',
    currencySymbol: '€',
    monthPrefix: 'M',
    initialMonthLabel: 'Início',
  },
};

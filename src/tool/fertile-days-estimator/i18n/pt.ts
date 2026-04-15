import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculadora-dias-ferteis';
const title = 'Calculadora de Dias Férteis';
const description = 'Calcule a sua janela fértil e a data da ovulação de acordo com o seu ciclo menstrual.';
const faq = [
  {
    question: 'Como é calculada a janela fértil?',
    answer: 'A janela fértil é calculada a partir do primeiro dia do seu último período. A ovulação ocorre aproximadamente 14 dias antes do início do ciclo seguinte. Os dias férteis incluem os 5 dias anteriores à ovulação e o próprio dia da ovulação.',
  },
  {
    question: 'Qual a precisão desta calculadora?',
    answer: 'A calculadora é uma estimativa baseada no modelo padrão de ciclo de 28 dias (ou o que indicar). É orientativa e pode não refletir variações individuais. Para maior precisão, combine-a com a monitorização da temperatura basal ou testes de ovulação.',
  },
  {
    question: 'O que acontece se o meu ciclo for irregular?',
    answer: 'Se os seus ciclos variarem muito de um mês para o outro, o cálculo pode ser menos preciso. Nesse caso, a monitorização da temperatura basal ou os testes de LH são métodos mais fiáveis para identificar a ovulação.',
  },
  {
    question: 'Quanto tempo sobrevive o óvulo após a ovulação?',
    answer: 'O óvulo tem uma vida útil de 12 a 24 horas. No entanto, os espermatozoides podem sobreviver até 5 dias no trato reprodutor feminino, pelo que a janela fértil real abrange vários dias antes da ovulação.',
  },
  {
    question: 'Pode-se usar esta calculadora para evitar a gravidez?',
    answer: 'Não se recomenda usar esta calculadora como método contracetivo. Os métodos baseados no calendário têm uma taxa de falha significativa. Consulte o seu médico ou ginecologista para métodos contracetivos seguros e adequados para si.',
  },
];
const howTo = [
  {
    name: 'Selecione o primeiro dia do seu último período',
    text: 'Clique no dia do calendário que corresponde ao início da sua última menstruação.',
  },
  {
    name: 'Ajuste a duração do seu ciclo',
    text: 'Mova o seletor para indicar quantos dias dura habitualmente o seu ciclo menstrual.',
  },
  {
    name: 'Consulte os resultados',
    text: 'A calculadora mostra automaticamente a data da ovulação estimada, a janela fértil e o início do período seguinte.',
  },
  {
    name: 'Navegue pelo calendário',
    text: 'Use as setas de navegação para ver os dias marcados em meses anteriores ou posteriores.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Quando começou a sua última regra?',
    step1Desc: 'Selecione o primeiro dia do seu último período menstrual no calendário.',
    pulseHint: 'Clique num dia do calendário para continuar',
    step1Indicator: 'Data de Início',
    step2Indicator: 'O Seu Calendário',
    sidebarTitle: 'O Seu Ciclo',
    sidebarDesc: 'Personalize os resultados ajustando a duração do seu ciclo.',
    labelCycleLength: 'Duração do Ciclo',
    unitDays: 'dias',
    labelOvulation: 'Próxima Ovulação',
    labelFertileWindow: 'Janela Fértil',
    labelNextPeriod: 'Próximo Período',
    legendSelection: 'A sua seleção',
    legendPeriod: 'Período',
    legendFertile: 'Fértil',
    legendOvulation: 'Ovulação',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Dias Fértiles: Guia Completo sobre o Ciclo e a Ovulação',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 pontos chave sobre a janela fértil',
      items: [
        'A ovulação ocorre aproximadamente 14 dias antes do início do período seguinte.',
        'A janela fértil inclui os 5 dias anteriores à ovulação mais o próprio dia da ovulação.',
        'Os espermatozoides podem sobreviver até 5 dias no trato reprodutor feminino.',
        'Os ciclos irregulares reduzem a fiabilidade do cálculo baseado no calendário.',
        'Combinar esta ferramenta com temperatura basal ou testes de LH aumenta a precisão.',
      ],
    },
    {
      type: 'title',
      text: 'Como funciona o cálculo da janela fértil',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O método baseia-se na regra de Ogino-Knaus e no modelo padrão de ovulação. Com um ciclo de 28 dias, a ovulação costuma produzir-se por volta do dia 14. A calculadora identifica este ponto e marca os dias de maior fertilidade ao seu redor.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 dias', label: 'Antes do período seguinte' },
        { value: '5 dias', label: 'Duração da janela fértil' },
        { value: '12-24 h', label: 'Vida útil do óvulo' },
      ],
    },
    {
      type: 'title',
      text: 'Fases do ciclo menstrual',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Fase folicular',
          description: 'Começa com a menstruação e dura até à ovulação.',
          points: [
            'Os folículos ováricos amadurecem sob a influência da FSH.',
            'Dura entre 10 e 14 dias em ciclos regulares.',
            'Os níveis de estrogénios aumentam progressivamente.',
          ],
        },
        {
          title: 'Fase lútea',
          description: 'Começa após a ovulação e termina com a menstruação.',
          points: [
            'O corpo lúteo produz progesterona para preparar o endométrio.',
            'Dura aproximadamente 14 dias em ciclos normais.',
            'Se não houver fertilização, o corpo lúteo degenera.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Embora a calculadora utilize um modelo padrão, os ciclos menstruais podem variar mês a mês. Para uma maior precisão, combine esta ferramenta com a monitorização da temperatura basal ou os testes de ovulação.',
    },
    {
      type: 'title',
      text: 'Sinais biológicos da ovulação',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Alterações no muco cervical: nos dias férteis torna-se transparente e elástico, semelhante à clara de ovo.',
        'Aumento ligeiro da temperatura basal corporal (0,2–0,4 °C) logo após a ovulação.',
        'Dor ou desconforto ligeiro no lado do ovário activo (Mittelschmerz) durante a ovulação.',
        'Ligeiro aumento da libido perto da ovulação, mediado por alterações hormonais.',
        'Distensão ou sensação de plenitude abdominal ligeira durante os dias férteis.',
      ],
    },
    {
      type: 'title',
      text: 'Estilo de vida e fertilidade',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'O stress crónico pode alterar a ovulação e alongar ou encurtar o ciclo menstrual.',
        'O peso corporal influencia directamente: tanto o baixo peso como o excesso de peso afectam a ovulação.',
        'O exercício moderado favorece a regularidade do ciclo; o exercício extremo pode suprimi-lo.',
        'O tabaco reduz a reserva ovárica e antecipa a menopausa em vários anos.',
        'Uma dieta rica em ácido fólico, ferro e antioxidantes apoia a saúde reprodutiva.',
      ],
    },
    {
      type: 'title',
      text: 'Métodos de monitorização do ciclo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Método', 'Fiabilidade', 'Custo'],
      rows: [
        ['Calculadora de calendário', 'Média', 'Gratuito'],
        ['Temperatura basal corporal', 'Alta com prática', 'Baixo'],
        ['Teste de LH na urina', 'Alta', 'Moderado'],
        ['Monitor de fertilidade digital', 'Muito alta', 'Alto'],
        ['Ecografia folicular', 'Máxima', 'Clínica'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulação',
          definition: 'Libertação do óvulo maduro a partir do folículo ovárico, desencadeada por um pico de hormona luteinizante (LH). Ocorre uma vez por ciclo.',
        },
        {
          term: 'Janela fértil',
          definition: 'Período de maior probabilidade de conceção, que abrange os 5 dias anteriores à ovulação mais o dia da ovulação.',
        },
        {
          term: 'Muco cervical',
          definition: 'Secreção do colo uterino cuja textura varia ao longo do ciclo. Nos dias férteis torna-se transparente, elástico e filante, facilitando a passagem dos espermatozoides.',
        },
        {
          term: 'Temperatura basal corporal',
          definition: 'Temperatura corporal em repouso absoluto, medida ao acordar antes de qualquer actividade. Aumenta ligeiramente (0,2–0,4 °C) após a ovulação por efeito da progesterona.',
        },
      ],
    },
  ],
  faqTitle: "Perguntas frequentes",
  faq,
  bibliographyTitle: "Referências",
  bibliography: [
    {
      name: 'OMS - Planeamento familiar',
      url: 'https://www.who.int/pt/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Sociedade Portuguesa de Medicina da Reprodução',
      url: 'https://spmr.pt',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

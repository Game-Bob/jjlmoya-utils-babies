import type { BabyPercentileCalculatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calculadora-percentil-bebe';
const title = 'Calculadora de Percentis OMS para Bebés';
const description = 'Calcule o percentil de peso, comprimento e IMC do seu bebé de acordo com as tabelas da OMS (0-5 anos).';
const faq = [
  {
    question: 'O que significa o percentil 50?',
    answer: 'O percentil 50 indica que o bebé se encontra exatamente na mediana, ou seja, metade dos bebés da mesma idade e sexo pesam ou medem mais, e a outra metade menos. Não significa que seja o valor ideal, mas sim o valore central da distribuição.',
  },
  {
    question: 'Um percentil baixo é sinal de problema?',
    answer: 'Não necessariamente. Um percentil baixo (por exemplo, P10) pode ser perfeitamente normal se se mantiver estável ao longo do tempo. O importante é a tendência de crescimento, não um valor isolado. Consulte sempre o seu pediatra.',
  },
  {
    question: 'Que tabelas de crescimento utiliza esta calculadora?',
    answer: 'Esta calculadora utiliza os padrões de crescimento da Organização Mundial da Saúde (OMS) para crianças de 0 a 5 anos, baseados no Multicentre Growth Reference Study (MGRS).',
  },
  {
    question: 'O que é o IMC em bebés?',
    answer: 'O Índice de Massa Corporal (IMC) em bebés é a relação entre o peso e o comprimento ao quadrado. Os percentis de IMC para bebés diferem dos dos adultos e devem ser interpretados com as tabelas específicas para cada idade e sexo.',
  },
  {
    question: 'Com que frequência devo medir o meu bebé?',
    answer: 'Nos primeiros meses, o pediatra costuma controlar o crescimento em cada consulta. Em casa pode registar o peso e o comprimento mensalmente para observar a tendência de crescimento.',
  },
];
const howTo = [
  {
    name: 'Selecione o sexo do bebé',
    text: 'Escolha entre menino ou menina para aplicar as tabelas OMS correspondentes.',
  },
  {
    name: 'Introduza a idade',
    text: 'Use o seletor ou as setas para indicar a idade em meses (0-60 meses).',
  },
  {
    name: 'Introduza peso e comprimento',
    text: 'Escreva o peso em quilogramas e o comprimento em centímetros.',
  },
  {
    name: 'Consulte os percentis',
    text: 'Os percentis de peso, comprimento e IMC são calculados automaticamente segundo as tabelas OMS.',
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

const appSchema: WithContext<WithContext<SoftwareApplication>> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: BabyPercentileCalculatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelMeasurements: 'Dados da Medição',
    labelSex: 'Sexo do bebé',
    sexBoy: 'Menino',
    sexGirl: 'Menina',
    unitMonths: 'Apenas meses',
    unitYearsMonths: 'Anos + meses',
    labelWeight: 'Peso (kg)',
    labelHeight: 'Comprimento (cm)',
    btnAddHistory: 'Adicionar ao meu histórico',
    btnClearHistory: 'Limpar dados',
    labelDashboard: 'Dashboard de Crescimento',
    labelWeight2: 'Peso',
    labelHeight2: 'Comprimento',
    labelBMI: 'IMC',
    labelCalculating: 'A calcular...',
    disclaimer: 'Os percentis são apenas uma ferramenta estatística. Consulte sempre o seu pediatra para interpretar os resultados.',
    labelLowRange: 'Intervalo baixo',
    labelLowNormal: 'Habitual baixo',
    labelNormal: 'Normalidade',
    labelHighNormal: 'Habitual alto',
    labelHighRange: 'Intervalo alto',
    alertOutOfRange: 'Valor fora dos intervalos P3-P97. Consulte o seu pediatra.',
    labelMonths: 'Meses',
    labelYears: 'Anos',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Percentis OMS: Guia para entender o crescimento do seu bebé',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 chaves para interpretar os percentis do seu bebé',
      items: [
        'Nenhum percentil isolado define a saúde do seu bebé: o importante é a tendência ao longo do tempo.',
        'Os percentis entre P3 e P97 são considerados dentro do intervalo de normalidade estatística.',
        'O IMC em bebés segue curvas próprias e não deve ser comparado com os valores de referência para adultos.',
        'As curvas OMS baseiam-se em bebés criados em condições ótimas, incluindo amamentação exclusiva durante os primeiros meses.',
        'Partilhe sempre os registos de crescimento com o seu pediatra para uma interpretação clínica adequada.',
      ],
    },
    {
      type: 'title',
      text: 'Como medir corretamente o seu bebé',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pese o bebé sem roupa e, se possível, sempre na mesma balança.',
        'Meça o comprimento em posição horizontal até aos 24 meses.',
        'A partir dos 2 anos, meça a altura em posição vertical.',
        'Realize as medições à mesma hora do dia para maior consistência.',
      ],
    },
    {
      type: 'tip',
      html: 'Un percentil abaixo de P3 não implica automaticamente um problema de saúde. O mais importante é observar se a curva de crescimento mantém a sua tendência ao longo do tempo.',
    },
    {
      type: 'title',
      text: 'Interpretação dos percentis',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Percentil', 'Interpretação', 'Ação recomendada'],
      rows: [
        ['P97 ou superior', 'Intervalo alto', 'Comentar com o pediatra na próxima consulta'],
        ['P85 a P97', 'Habitual alto', 'Acompanhamento normal'],
        ['P15 a P85', 'Normalidade', 'Nenhuma ação especial necessária'],
        ['P3 a P15', 'Habitual baixo', 'Acompanhamento normal'],
        ['P3 ou inferior', 'Intervalo baixo', 'Consultar o pediatra'],
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
          description: 'Padrão internacional baseado em bebés de 6 países criados em condições ótimas.',
          points: [
            'Padrão internacional validado',
            'Baseado em bebés de 6 países e condições ótimas',
            'Actualizadas e com suporte científico atual',
            'Pode não refletir variações genéticas locais',
          ],
        },
        {
          title: 'Curvas de Orbegozo',
          description: 'Curvas adaptadas à população espanhola, muito usadas em décadas anteriores.',
          points: [
            'Adaptadas à população espanhola',
            'Muito usadas em Espanha em décadas anteriores',
            'Baseadas em população de referência mais antiga',
            'Menor adoção internacional',
          ],
        },
      ],
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'OMS 0-5 anos', label: 'Padrão de referência' },
        { value: 'Curva de tendência', label: 'Variável chave' },
        { value: 'Parâmetros LMS', label: 'Precisão técnica' },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Z-Score',
          definition: 'Número de desvios padrão que um valor se afasta da média da população de referência. Um Z-Score de 0 equivale ao percentil 50.',
        },
        {
          term: 'Harmonia',
          definition: 'Proporção adequada entre peso e comprimento. Um bebé pode ter um percentil baixo de peso mas ser harmónico se o seu comprimento também for baixo na mesma proporção.',
        },
        {
          term: 'Antropometria',
          definition: 'Conjunto de medições corporais (peso, comprimento, perímetro cefálico, IMC) utilizadas para avaliar o crescimento e estado nutricional.',
        },
        {
          term: 'Parâmetros LMS',
          definition: 'Método estatístico (L=Box-Cox, M=mediana, S=coeficiente de variação) utilizado pela OMS para construir as tabelas de percentis e transformar qualquer medição num Z-Score.',
        },
      ],
    },
  ],
  faqTitle: "Perguntas frequentes",
  faq,
  bibliographyTitle: "Referências",
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
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};

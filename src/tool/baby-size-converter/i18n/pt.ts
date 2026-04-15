import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'conversor-tamanhos-bebe';
const title = 'Conversor de Tamanhos de Bebé';
const description = 'Converta tamanhos de roupa de bebé entre Zara, H&M, Primark, Carter\'s, Kiabi, Mango e Mayoral. Introduza a altura e o peso para obter o tamanho exato de cada marca.';
const faq = [
  {
    question: 'Como sei qual o tamanho de roupa que corresponde ao meu bebé?',
    answer: 'O mais fiável é usar a altura do bebé como referência principal. Os tamanhos europeus (50, 56, 62...) correspondem diretamente à altura em centímetros. Introduza a altura e o peso do bebé no conversor para obter o tamanho recomendado por cada marca.',
  },
  {
    question: 'Porque é que os tamanhos variam tanto entre marcas?',
    answer: 'Cada marca tem o seu próprio padrão de corte. A H&M e a Primark tendem a vestir maior, enquanto a Carter\'s e a Mayoral têm cortes mais ajustados. Use sempre as medidas do bebé, não apenas a idade.',
  },
  {
    question: 'Que medida devo tomar se estiver entre dois tamanhos?',
    answer: 'Escolha sempre o tamanho superior. Os bebés crescem muito rapidamente e um tamanho maior garante maior durabilidade e conforto.',
  },
  {
    question: 'Os tamanhos em polegadas funcionam da mesma forma?',
    answer: 'As marcas americanas como a Carter\'s usam polegadas e o peso como referência. O conversor mostra-lhe automaticamente as equivalências no sistema imperial se o ativar.',
  },
];
const howTo = [
  {
    name: 'Introduza a altura do bebé',
    text: 'Use o seletor ou os botões para ajustar a altura atual do bebé em centímetros ou polegadas.',
  },
  {
    name: 'Introduza o peso do bebé',
    text: 'Ajuste o peso em kg ou libras para refinar os resultados, já que algumas marcas usam o peso como referência complementar.',
  },
  {
    name: 'Selecione uma marca',
    text: 'Escolha a marca de roupa para ver o tamanho sugerido e as medidas estimadas da peça.',
  },
  {
    name: 'Consulte as equivalências',
    text: 'No painel direito verá os tamanhos equivalentes de todas as marcas disponíveis num relance.',
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

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Medidas do bebé',
    labelResults: 'Equivalências estimadas',
    labelHeight: 'Altura do bebé',
    labelWeight: 'Peso atual do bebé',
    labelPresets: 'Predefinições por idade típica',
    unitMetric: 'Métrico (cm/kg)',
    unitImperial: 'Imperial (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marca e Corte',
    labelSuggested: 'Tamanho sugerido',
    labelChest: 'Peito',
    labelWaist: 'Cintura',
    labelGarmentMeasures: 'Medidas estimadas da peça',
    fitRegular: 'Corte regular',
    fitLarge: 'Corte amplo',
    fitSmall: 'Corte ajustado',
    tipTitle: 'Conselho de especialista',
    tipText: 'Os bebés crescem em picos de desenvolvimento muito rápidos. Se o resultado estiver no limite superior de um tamanho, escolha sempre o tamanho superior para garantir a durabilidade e o conforto do bebé.',
    shareAriaLabel: 'Partilhar tamanho',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências',
  },
  seo: [
    { type: 'title', text: 'Guia de tamanhos de bebé: Zara, H&M, Primark e marcas internacionais', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Crescimento mensal' },
      { value: '3 meses', label: 'Duração de cada tamanho' },
      { value: '95%', label: 'Fiabilidade por altura' },
    ]},
    { type: 'tip', html: 'Use sempre a altura como referência principal para escolher o tamanho, não a idade. Dois bebés do mesmo mês podem ter até 8–10 cm de diferença, o que significa saltar um tamanho completo.' },
    { type: 'title', text: 'Tamanhos por idade, altura e peso', level: 3 },
    { type: 'table', headers: ['Idade aprox.', 'Altura (cm)', 'Peso (kg)', 'Tamanho habitual', 'Uso estimado'], rows: [
      ['Recém-nascido', '50–56', '3–4.5', '50 / RN', '4–6 semanas'],
      ['1–3 meses', '56–62', '4.5–6', '56–62', '6–8 semanas'],
      ['3–6 meses', '62–68', '6–8', '62–68', '6–8 semanas'],
      ['6–9 meses', '68–74', '8–9.5', '68–74', '6–8 semanas'],
      ['9–12 meses', '74–80', '9.5–11', '74–80', '6–8 semanas'],
      ['12–18 meses', '80–86', '11–13', '80–86', '3–4 meses'],
      ['18–24 meses', '86–92', '13–15', '86–92', '3–4 meses'],
    ]},
    { type: 'title', text: 'Marcas que vestem grande vs ajustado', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Vestem grande (escolha tamanho inferior)',
        description: 'Estas marcas usam cortes mais amplos; escolha um tamanho a menos do que o habitual.',
        points: [
          'H&M: costuma vestir um tamanho a mais',
          'Primark: corte amplo generalizado',
          'Lupilu (Lidl): corte folgado',
          'Recomendado para bebés em percentil baixo',
        ],
      },
      {
        title: 'Vestem ajustado (escolha tamanho superior)',
        description: 'Estas marcas usam cortes mais cinzidos; escolha um tamanho a mais do que o habitual.',
        points: [
          "Carter's: corte americano justo",
          'Mayoral: corte europeu justo',
          'Neck & Neck: tamanhos reduzidos',
          'Recomendado para bebés em percentil alto',
        ],
      },
    ]},
    { type: 'title', text: 'Chaves para acertar no tamanho', level: 3 },
    { type: 'list', items: [
      'Meça sempre o bebé antes de comprar, não confie apenas na idade',
      'Se estiver no limite entre dois tamanhos, escolha o tamanho superior',
      'Tenha em conta o espaço para a fralda em peças de corpo inteiro',
      'Os tamanhos europeus (50, 56, 62...) correspondem à altura em cm',
      'Lave sempre antes de usar: o algodão pode encolher até 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Tamanho 50 / Recém-nascido',
        definition: 'Pensado para bebés de até 50 cm de altura e cerca de 3.5 kg. Muitos bebés superam-no muito rapidamente, mesmo nas primeiras semanas.',
      },
      {
        term: 'Medida do gancho',
        definition: 'Distância entre a entreperna e a cintura. Fundamental em bodies e babygrows: um gancho curto limita o movimento do bebé mesmo que o resto da peça sirva bem.',
      },
      {
        term: 'Referência por peso',
        definition: "Algumas marcas americanas como a Carter's usam o peso como referência primária. Útil para bebés com proporções fora do percentil padrão.",
      },
      {
        term: 'Gola de trespasse (ombros expansíveis)',
        definition: 'Design do decote de bodies e t-shirts que permite vestir o bebé deslizando a peça para baixo em vez de passá-la pela cabeça. Imprescindível nos primeiros meses.',
      },
    ]},
    { type: 'summary', title: 'O que deve recordar', items: [
      'A altura é o indicador mais fiável para escolher o tamanho, acima da idade.',
      "A H&M e a Primark tendem a vestir grande; a Carter's e a Mayoral vestem ajustado.",
      'Os tamanhos europeus numéricos (50, 56, 62...) correspondem à altura em cm.',
      'No limite entre tamanhos, escolher o superior garante maior durabilidade.',
      'A gola de trespasse e o gancho amplo são os detalhes chave de conforto.',
    ]},
  ],
  faqTitle: "Perguntas frequentes",
  faq,
  bibliographyTitle: "Referências",
  bibliography: [
    {
      name: 'Zara - Guia de tamanhos infantis',
      url: 'https://www.zara.com/pt/pt/size-guide.html',
    },
    {
      name: 'H&M - Guia de tamanhos para bebé',
      url: 'https://www2.hm.com/pt_pt/customer-service/sizeguide.html',
    },
    {
      name: 'OMS - Padrões de crescimento infantil',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Guia de tamanhos',
      url: 'https://www.mayoral.com/pt-pt/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

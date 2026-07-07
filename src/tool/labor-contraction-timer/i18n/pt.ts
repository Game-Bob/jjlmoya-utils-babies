import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Cronómetro de Contrações';
export const description = 'Registe a duração e a frequência das contrações com um grande botão tátil, respiração guiada, histórico e alerta do padrão 5-1-1.';

export const faq = [
  {
    question: 'O que é a regra do 5-1-1 para as contrações?',
    answer: 'A regra do 5-1-1 costuma significar que as contrações estão espaçadas cerca de 5 minutos, duram cerca de 1 minuto e se mantêm durante aproximadamente 1 hora. Muitas equipas de maternidade usam-na como sinal prático para telefonar e pedir orientação, mas o seu plano pessoal pode ser diferente.',
  },
  {
    question: 'Quando devo contactar a minha parteira ou o hospital?',
    answer: 'Contacte a sua equipa de maternidade quando as contrações se tornarem regulares, intensas ou corresponderem às indicações de tempo que lhe foram dadas. Ligue com urgência em caso de hemorragia abundante, diminuição dos movimentos fetais, febre, dor intensa, rotura de águas com dúvidas ou se sentir que algo não está bem.',
  },
  {
    question: 'Este cronómetro diagnostica o trabalho de parto ativo?',
    answer: 'Não. Regista os tempos e destaca um padrão comum de contrações. As alterações cervicais, a posição fetal, o estado das membranas, os sintomas e o seu historial clínico devem ser avaliados por um profissional de saúde qualificado.',
  },
  {
    question: 'Como se calcula a frequência das contrações?',
    answer: 'A frequência é calculada desde o início de uma contração até ao início da contração anterior. A duração é calculada desde o momento em que prime iniciar até ao momento em que prime parar.',
  },
  {
    question: 'Posso usá-lo durante o trabalho de parto prodrómico?',
    answer: 'Sim. Pode ajudá-la a ver se as contrações estão a tornar-se mais regulares ou a desaparecer. Se as contrações continuarem irregulares, mudarem com o repouso ou a hidratação, ou não se intensificarem, podem ainda ser prodrómicas, mas a sua equipa de saúde pode orientá-la.',
  },
  {
    question: 'Porque está incluída a respiração guiada?',
    answer: 'Uma respiração lenta e constante pode ajudar a reduzir a tensão, focar a atenção e apoiar a gestão de cada contração. A animação é apenas um auxílio de conforto e não substitui o acompanhamento durante o parto.',
  },
  {
    question: 'Devo esperar pelo 5-1-1 se este não for o meu primeiro bebé?',
    answer: 'Nem sempre. O trabalho de parto pode progredir mais rapidamente após um parto vaginal anterior. Siga o plano da sua parteira ou obstetra, especialmente se tiver uma gravidez de alto risco, viver longe do hospital ou tiver tido partos rápidos anteriores.',
  },
  {
    question: 'O meu histórico de contrações é guardado?',
    answer: 'O cronómetro armazena os registos recentes no seu navegador para que possa atualizar a página sem perder a sessão. Use o botão de reinicialização para limpar o histórico local.',
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
    name: 'Iniciar a cronometragem',
    text: 'Prima o botão principal quando começar uma contração.',
  },
  {
    name: 'Usar o guia de respiração',
    text: 'Siga o círculo que expande e contrai enquanto a contração está ativa.',
  },
  {
    name: 'Parar a cronometragem',
    text: 'Prima o botão novamente quando a contração terminar para que a duração e o intervalo sejam registados.',
  },
  {
    name: 'Analisar o padrão',
    text: 'Consulte o histórico e o painel de alerta para decidir se deve contactar a sua equipa de maternidade.',
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
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<LaborContractionTimerUI> = {
  title,
  description,
  slug: 'cronometro-contracoes-parto',
  faqTitle: 'Perguntas frequentes',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Factos essenciais sobre a cronometragem de contrações',
      items: [
        'A duração mede-se desde o início de uma contração até ao seu final.',
        'A frequência mede-se desde o início de uma contração até ao início da seguinte.',
        'O padrão 5-1-1 significa cerca de 5 minutos de intervalo, 1 minuto de duração, durante 1 hora.',
        'A cronometragem de contrações apoia a tomada de decisão mas não pode confirmar a dilatação cervical ou o trabalho de parto ativo por si só.',
        'Siga sempre as indicações da sua própria parteira, obstetra ou unidade de maternidade.',
      ],
    },
    {
      type: 'title',
      text: 'Cronómetro de Contrações: Registe Duração, Frequência e Padrões 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um cronómetro de contrações ajuda as famílias a transformar um momento stressante e difícil de avaliar num registo claro. Durante o final da gravidez é comum perguntarmo-nos se as contrações ainda são contrações de treino irregulares, trabalho de parto prodrómico, trabalho de parto inicial ou um padrão que merece uma chamada para a unidade de maternidade. Ao premir iniciar quando uma contração começa e parar quando termina, esta ferramenta calcula a <strong>duração</strong> em segundos e a <strong>frequência</strong> em minutos desde o início de uma contração até ao início da seguinte.',
    },
    {
      type: 'paragraph',
      html: 'O objetivo não é diagnosticar o trabalho de parto. O objetivo é ajudá-la a descrever o que está a acontecer em termos concretos: quanto tempo dura cada contração, de quanto em quanto tempo surgem, se o padrão está a intensificar-se e se se manteve constante durante o tempo suficiente para corresponder a orientações comuns como a regra do 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Sinal de frequência habitual' },
        { value: '60 s', label: 'Duração típica do 5-1-1' },
        { value: '1 hora', label: 'Janela de estabilidade do padrão' },
      ],
    },
    {
      type: 'title',
      text: 'Como interpretar o alerta 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A regra do 5-1-1 é uma regra prática muito utilizada: as contrações estão espaçadas cerca de 5 minutos, duram cerca de 1 minuto e mantêm-se durante aproximadamente 1 hora. Muitas equipas de parto usam esse padrão como sinal prático para telefonar e receber aconselhamento personalizado, especialmente no primeiro parto. Este cronómetro destaca o padrão quando as contrações recentes estão espaçadas 5 minutos ou menos, duram pelo menos 60 segundos e se mantiveram ao longo da sessão.',
    },
    {
      type: 'table',
      headers: ['Padrão observado', 'O que pode sugerir', 'Próximo passo útil'],
      rows: [
        ['Ritmo irregular, duração variável', 'Possível trabalho de parto prodrómico ou inicial', 'Descanse, hidrate-se, mude de posição e continue a observar, a não ser que tenha sintomas de alarme'],
        ['A aproximarem-se mas ainda abaixo dos 60 segundos', 'O trabalho de parto pode estar a evoluir mas ainda não corresponde ao 5-1-1', 'Continue a cronometrar e siga as indicações do seu plano de parto'],
        ['Cerca de 5 min de intervalo, 60 s de duração, durante 1 hora', 'Padrão de chamada 5-1-1 habitual', 'Contacte a sua parteira, obstetra ou unidade de maternidade para orientação personalizada'],
        ['Contrações súbitas e intensas, pressão ou vontade de fazer força', 'O trabalho de parto pode estar a progredir rapidamente', 'Ligue imediatamente, especialmente se não for o seu primeiro bebé'],
      ],
    },
    {
      type: 'title',
      text: 'Como cronometrar as contrações corretamente',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Prima iniciar no início da sensação de aperto, cólica ou onda.',
        'Prima parar quando a contração desaparecer claramente e puder relaxar novamente.',
        'Não meça a frequência do final de uma contração ao início da seguinte. Clinicamente, a frequência conta-se de início a início.',
        'Registe várias contrações antes de interpretar o padrão, pois uma contração isolada pode ser enganadora.',
        'Use primeiro as indicações da sua equipa de maternidade se lhe derem um limiar diferente do 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Trabalho de parto prodrómico e trabalho de parto ativo: padrões comparados',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Frequentemente prodrómico ou trabalho de parto inicial',
          description: 'As contrações podem ser desconfortáveis e reais, mas o padrão pode ainda não estar a avançar de forma constante para o nascimento.',
          points: [
            'Os intervalos variam em vez de encurtarem de forma consistente',
            'As contrações podem aliviar com repouso, hidratação, um banho ou mudanças de posição',
            'A intensidade pode manter-se semelhante em vez de aumentar ao longo do tempo',
            'O colo do útero pode modificar-se lentamente ou ainda pouco, o que só um profissional pode avaliar',
          ],
        },
        {
          title: 'Mais sugestivo de trabalho de parto ativo',
          description: 'O padrão torna-se mais regular, mais difícil de suportar enquanto se fala e progressivamente mais forte.',
          points: [
            'As contrações aproximam-se entre si ao longo de vários registos',
            'Cada contração dura cerca de 45 a 70 segundos ou mais',
            'Precisa de fazer uma pausa, respirar ou concentrar-se durante o pico',
            'O padrão continua mesmo após repouso, hidratação ou mudança de posição',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Quando não esperar pelo cronómetro',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Nota de segurança:</strong> Não espere pelo alerta do cronómetro se tiver hemorragia abundante, diminuição dos movimentos fetais, dor de cabeça intensa, febre, líquido verde ou com mau cheiro, dor intensa e constante, sintomas de pré-eclâmpsia ou qualquer preocupação urgente. Ligue para a sua equipa de maternidade ou para os serviços de emergência de acordo com as indicações locais.',
    },
    {
      type: 'title',
      text: 'O que mostra o histórico',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Hora de início: a hora do relógio em que a contração começou.',
        'Duração: hora de fim menos hora de início, arredondada em segundos.',
        'Intervalo: hora de início atual menos a hora de início da contração anterior, mostrado em minutos.',
        'Tendência recente: se as contrações estão a espaçar-se, a manter-se irregulares ou a tornar-se mais regulares.',
      ],
    },
    {
      type: 'title',
      text: 'Erros comuns de cronometragem',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Parar o cronómetro no pico em vez de quando a contração desaparece por completo.',
        'Começar tarde porque a contração era ligeira no início, fazendo a duração parecer mais curta.',
        'Contar apenas as contrações mais fortes e ignorar as mais pequenas que surgem pelo meio.',
        'Assumir que o 5-1-1 significa sempre internamento hospitalar imediato. Normalmente significa telefonar para pedir orientação, não autodiagnosticar o trabalho de parto ativo.',
        'Esperar demasiado num segundo parto ou posteriores, onde a progressão pode ser mais rápida do que no primeiro nascimento.',
      ],
    },
    {
      type: 'title',
      text: 'Limites clínicos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A cronometragem de contrações é apenas uma parte da avaliação do trabalho de parto. A dilatação cervical, o bem-estar fetal, a gestão da dor, a rotura de membranas, a idade gestacional, os antecedentes de partos anteriores, o estado de estreptococo do grupo B, a distância até ao hospital, os fatores de risco da gravidez e os sintomas maternos podem todos alterar o que a sua equipa recomenda. Use o histórico como um registo claro para partilhar com a sua parteira, obstetra, doula ou enfermeira de triagem.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Duração',
          definition: 'A duração de uma contração, medida desde o momento em que começa até ao momento em que termina.',
        },
        {
          term: 'Frequência',
          definition: 'O tempo desde o início de uma contração até ao início da contração seguinte.',
        },
        {
          term: 'Regra do 5-1-1',
          definition: 'Um padrão comum de cronometragem do trabalho de parto: contrações a cada 5 minutos aproximadamente, com cerca de 1 minuto de duração, mantendo-se durante cerca de 1 hora.',
        },
        {
          term: 'Trabalho de parto prodrómico',
          definition: 'Um período de contrações reais que podem ser desconfortáveis e recorrentes, mas que nem sempre progride de forma constante para o trabalho de parto ativo.',
        },
        {
          term: 'Trabalho de parto ativo',
          definition: 'Uma fase do trabalho de parto com contrações mais fortes e regulares e alterações cervicais, confirmada por avaliação clínica.',
        },
      ],
    },
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    safetyTitle: 'Usar com o seu plano de parto',
    safetyBody: 'Este cronómetro é para registo e informação. Contacte a sua parteira, obstetra ou unidade de maternidade se tiver dúvidas, os sintomas a preocuparem ou se lhe tiverem dado indicações diferentes.',
    idleStatus: 'Pronto para cronometrar a próxima contração',
    activeStatus: 'Contração em curso',
    accidentalTapStatus: 'Demasiado curta',
    shortRecordLabel: 'Toque curto ou de teste',
    activeRowLabel: 'Ativa agora',
    startButton: 'Iniciar contração',
    stopButton: 'Parar contração',
    activeLabel: 'Contração ativa',
    breathingLabel: 'Respire devagar',
    breatheIn: 'Inspire',
    breatheOut: 'Expire',
    currentDurationLabel: 'Duração atual',
    lastIntervalLabel: 'Último intervalo',
    contractionCountLabel: 'Registadas',
    patternStatusTitle: 'Estado do padrão',
    patternStatusIdle: 'Pronto para registar',
    patternStatusTracking: 'Continue a registar',
    patternStatusBuilding: 'O padrão está a formar-se',
    patternStatusCall: 'Ligue para a sua equipa de maternidade',
    patternStatusActiveBody: 'Começou a registar. São necessárias mais algumas contrações antes de o padrão ser significativo.',
    patternStatusBuildingBody: 'As contrações recentes estão a aproximar-se ou a durar mais. Continue a cronometrar e prepare-se para ligar se continuarem.',
    patternStatusCallBody: 'As contrações recentes aproximam-se do padrão 5-1-1. Contacte agora a sua parteira, obstetra ou unidade de maternidade para orientação personalizada.',
    averageLastThreeLabel: 'Média das últimas 3',
    averageLastSixLabel: 'Média das últimas 6',
    regularityLabel: 'Regularidade',
    regularityNotEnough: 'Dados insuficientes',
    regularityIrregular: 'Irregular',
    regularityVariable: 'Variável',
    regularityRegular: 'Regular',
    summaryTitle: 'Resumo para o telefone',
    summaryEmpty: 'Registe pelo menos três contrações para construir um resumo útil para a sua equipa de maternidade.',
    copySummaryButton: 'Copiar resumo',
    copiedSummaryButton: 'Copiado',
    undoButton: 'Desfazer última',
    sessionOverviewTitle: 'Visão geral da sessão',
    sessionOverviewBody: 'Comece a cronometrar quando iniciar uma contração. A contração ativa aparecerá aqui imediatamente.',
    lastContractionLabel: 'Última contração',
    historyTitle: 'Histórico de contrações',
    emptyHistory: 'Nenhuma contração registada ainda.',
    startTimeHeader: 'Hora de início',
    durationHeader: 'Duração',
    intervalHeader: 'Intervalo',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Reiniciar',
    alertTitle: 'Padrão 5-1-1 detetado',
    alertBody: 'As suas contrações recentes aproximam-se do padrão 5-1-1 habitual. Considere contactar agora a sua parteira ou unidade de maternidade para orientação personalizada.',
    patternTitle: 'O que o alerta verifica',
    patternBody: 'O painel aparece quando as contrações recentes estão espaçadas 5 minutos ou menos, duram pelo menos 60 segundos e mantêm esse padrão durante aproximadamente 1 hora.',
  },
};

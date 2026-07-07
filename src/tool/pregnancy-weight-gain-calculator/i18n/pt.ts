import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Calculadora de Ganho de Peso na Gravidez';
const description = 'Estime um intervalo saudável de ganho de peso na gravidez por semana gestacional utilizando as orientações de ganho de peso pré natal do IOM e ACOG.';

const faq = [
  {
    question: 'Quanto peso devo ganhar durante a gravidez?',
    answer: 'Depende do IMC pré-gravídico. As orientações do IOM recomendam 12,5-18 kg (28-40 lb) para baixo peso, 11,5-16 kg (25-35 lb) para IMC normal, 7-11,5 kg (15-25 lb) para excesso de peso e 5-9 kg (11-20 lb) para obesidade em gravidezes únicas. Confirme sempre o seu objetivo pessoal com a sua equipa de saúde pré-natal.',
  },
  {
    question: 'A gravidez gemelar usa as mesmas orientações de ganho de peso?',
    answer: 'Não. As gravidezes gemelares têm objetivos mais elevados em todas as categorias de IMC. Para IMC normal, o intervalo recomendado é de 17-25 kg (37-54 lb). Para excesso de peso, 14-23 kg (31-50 lb), e para obesidade, 11-19 kg (25-42 lb). Não existe um intervalo IOM estabelecido para mulheres com baixo peso e gravidez gemelar; a equipa clínica individualiza o acompanhamento.',
  },
  {
    question: 'Por que o ganho esperado muda pouco no primeiro trimestre?',
    answer: 'As orientações do IOM preveem um ganho total muito modesto no primeiro trimestre, de cerca de 0,5 a 2 kg, porque o feto, a placenta e o líquido amniótico pesam ainda muito pouco. O ganho semanal mais regular, de 0,17 a 0,58 kg conforme o IMC, começa no segundo trimestre.',
  },
  {
    question: 'Estou a perder peso no primeiro trimestre por causa de náuseas. Devo preocupar-me?',
    answer: 'Uma ligeira perda de peso no primeiro trimestre é frequente devido a náuseas e aversões alimentares. Enquanto se mantiver hidratada e não perder mais do que alguns quilogramas, geralmente não é motivo de alarme. Se os vómitos forem intensos, persistentes ou causarem desidratação, contacte o seu médico, pois pode tratar-se de hiperémese gravídica que requer tratamento.',
  },
  {
    question: 'Qual é o ritmo ideal de ganho de peso por semana?',
    answer: 'A partir da semana 13, os objetivos semanais são: 0,44-0,58 kg para baixo peso, 0,35-0,50 kg para IMC normal, 0,23-0,33 kg para excesso de peso e 0,17-0,27 kg para obesidade. São médias: o ganho real varia semana a semana consoante a retenção de líquidos, as refeições e outros fatores.',
  },
  {
    question: 'Fazer exercício físico para controlar o ganho de peso durante a gravidez é seguro?',
    answer: 'Sim, para a maioria das mulheres com gravidezes não complicadas. O ACOG recomenda pelo menos 150 minutos por semana de atividade aeróbica de intensidade moderada. O exercício favorece um ganho saudável, reduz o risco de diabetes gestacional e melhora o sono e o humor. Consulte sempre a sua equipa de saúde antes de iniciar ou continuar uma atividade intensa.',
  },
  {
    question: 'Quanto tempo demora a perder o peso da gravidez após o parto?',
    answer: 'A maioria das mulheres perde cerca de 4,5-5,5 kg imediatamente após o parto (bebé, placenta e líquido amniótico). Na primeira semana ocorre uma perda adicional de líquidos. Regressar ao peso anterior à gravidez demora geralmente 6 a 12 meses com alimentação saudável e exercício progressivo. O aleitamento materno pode ajudar, pois consome cerca de 300-500 kcal adicionais por dia.',
  },
  {
    question: 'Esta calculadora pode diagnosticar um problema na gravidez?',
    answer: 'Não. É uma estimativa educativa baseada em orientações a nível populacional. Não pode avaliar o crescimento fetal, a função placentar, a pressão arterial, a glicemia ou qualquer sintoma médico. Qualquer alteração de peso inexplicada, inchaudo, vómitos persistentes ou qualquer preocupação devem ser sempre discutidos com um obstetra, enfermeiro especialista ou clínico pré-natal qualificado.',
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

const howTo = [
  {
    name: 'Introduza as medidas pré gravidez',
    text: 'Adicione a altura e o peso antes da gravidez para que a ferramenta possa estimar o IMC pré gravídico.',
  },
  {
    name: 'Adicione os dados atuais da gravidez',
    text: 'Introduza o peso atual, a semana gestacional e se a gravidez é única ou gemelar.',
  },
  {
    name: 'Analise a curva',
    text: 'Compare o ganho atual com a banda de ganho saudável estimada para a semana selecionada.',
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
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'calculadora-ganho-peso-gravidez',
  faqTitle: 'Perguntas frequentes',
  bibliographyTitle: 'Bibliografia',
  seo: [
    {
      type: 'summary',
      title: 'Factos essenciais sobre o ganho de peso na gravidez',
      items: [
        'O ganho de peso total recomendado depende exclusivamente do IMC pré-gravídico, não de um valor único para todas.',
        'As orientações do IOM vão de 11 a 20 lb para a obesidade até 28 a 40 lb para baixo peso em gravidezes únicas.',
        'O ganho de peso não é linear: no primeiro trimestre esperam-se apenas 0,5 a 2 kg no total; depois começa um ritmo semanal mais constante.',
        'As gravidezes gemelares têm objetivos mais elevados em todas as categorias de IMC.',
        'Esta calculadora é uma ferramenta educativa. Discuta sempre os seus objetivos pessoais com a sua equipa de cuidados pré-natais.',
      ],
    },
    {
      type: 'title',
      text: 'Calculadora de ganho de peso na gravidez: compreenda a sua curva de crescimento pré-natal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ganhar o peso adequado durante a gravidez é um dos fatores mais importantes para a saúde materna e o desenvolvimento fetal. Um ganho insuficiente aumenta o risco de parto prematuro, baixo peso ao nascer e restrição do crescimento intrauterino. Um ganho excessivo está associado a diabetes gestacional, parto por cesárea, retenção de peso pós-parto e macrossomia. Esta calculadora utiliza as orientações estabelecidas do <strong>IOM (Institute of Medicine)</strong> e do <strong>ACOG (American College of Obstetricians and Gynecologists)</strong> para traçar a sua curva personalizada semana a semana.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 semanas', label: 'Duração de uma gravidez de termo' },
        { value: '4 categorias', label: 'Intervalos de ganho baseados no IMC (IOM)' },
        { value: '±0,5 kg/sem', label: 'Ritmo típico no 2.º trimestre' },
      ],
    },
    {
      type: 'title',
      text: 'Como funciona a calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Introduz a sua altura e o seu peso antes da gravidez para que a ferramenta calcule o seu IMC pré-gravídico.',
        'O seu IMC é classificado numa das quatro categorias IOM: baixo peso, normal, excesso de peso ou obesidade.',
        'Cada categoria corresponde a um intervalo de ganho total recomendado e a um ritmo semanal para o segundo e terceiro trimestres.',
        'A calculadora aceita também o peso atual e a semana gestacional para mostrar onde se encontra em relação à banda estimada.',
        'Gravidezes únicas e gemelares usam objetivos separados porque as exigências fetais e placentares diferem significativamente.',
      ],
    },
    {
      type: 'title',
      text: 'Recomendações do IOM para o ganho de peso conforme o IMC pré-gravídico',
      level: 3,
    },
    {
      type: 'table',
      headers: ['IMC pré-gravídico', 'Categoria', 'Ganho total gravidez única', 'Ganho total gravidez gemelar', 'Ritmo semanal (sem. 14-40)'],
      rows: [
        ['< 18,5', 'Baixo peso', '12,5-18 kg / 28-40 lb', 'Sem intervalo IOM estabelecido', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normal', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Excesso de peso', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesidade', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Importante:</strong> Estes são intervalos de rastreio a nível populacional. O seu médico pode estabelecer um objetivo personalizado com base no seu histórico nutricional, gravidezes anteriores, ecografias de crescimento fetal ou condições médicas. Siga sempre as indicações individualizadas do seu clínico.',
    },
    {
      type: 'title',
      text: 'Ganho de peso trimestre a trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Primeiro trimestre (semanas 1 to 13)',
          description: 'Espera-se um ganho modesto. Muitas mulheres ganham muito pouco ou perdem peso devido a náuseas.',
          points: [
            'Objetivo IOM: aproximadamente 0,5 a 2 kg (1 a 4,4 lb) no total',
            'Náuseas e aversões alimentares são frequentes e podem limitar a ingestão',
            'O embrião e a placenta pesam ainda muito pouco nesta fase',
            'Priorize a qualidade alimentar em detrimento da quantidade',
          ],
        },
        {
          title: 'Segundo trimestre (semanas 14 to 26)',
          description: 'O período de ganho semanal mais constante. O apetite melhora geralmente após a remissão das náuseas.',
          points: [
            'Ritmo semanal: aproximadamente 0,23 a 0,58 kg conforme a categoria de IMC',
            'O feto cresce rapidamente em comprimento e desenvolvimento orgânico',
            'O volume plasmático aumenta, contribuindo para o peso',
            'As necessidades de ferro e cálcio aumentam significativamente',
          ],
        },
        {
          title: 'Terceiro trimestre (semanas 27 to 40)',
          description: 'O ganho de peso continua a um ritmo semelhante ao do segundo trimestre e pode abrandar perto do termo.',
          points: [
            'A deposição de gordura fetal aumenta substancialmente a partir da semana 28',
            'O volume de líquido amniótico atinge o pico por volta das semanas 34-36',
            'Inchaudo e retenção de líquidos podem temporariamente inflar as leituras',
            'Algumas mulheres ganham pouco nas últimas 1 a 2 semanas antes do parto',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'A que se deve realmente o aumento de peso?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Componente', 'Peso aproximado ao termo'],
      rows: [
        ['Bebé', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Líquido amniótico', '0,8 kg / 1,8 lb'],
        ['Útero (crescimento)', '0,9 kg / 2 lb'],
        ['Tecido mamarió', '0,5 kg / 1,1 lb'],
        ['Aumento do volume sanguíneo', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Líquido extracelular', '1,5 kg / 3,3 lb'],
        ['Reservas de gordura e proteína materna', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Como mostra esta divisão, a maior parte do peso ganho numa gravidez saudável é tecido funcional - líquidos, sangue, feto, placenta e útero - não simplesmente gordura. Compreender isto ajuda a perceber por que um ganho adequado é necessário mesmo para mulheres com excesso de peso antes da gravidez.',
    },
    {
      type: 'title',
      text: 'Dicas nutricionais para apoiar um ganho de peso saudável',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Adicione cerca de 340 kcal/dia no segundo trimestre e 450 kcal/dia no terceiro acima das suas necessidades habituais.',
        'Priorize as proteínas: aponte para pelo menos 70-80 g por dia para apoiar o crescimento do tecido fetal e a expansão do volume sanguíneo materno.',
        'Inclua alimentos ricos em ferro (carne magra, lentilhas, cereais enriquecidos) para prevenir a anemia, mais frequente durante a gravidez.',
        'As necessidades de cálcio aumentam para 1.000 mg/dia: láticiniós, bebidas vegetais enriquecidas, amêndoas e vegetais de folha verde são boas fontes.',
        'Os ácidos gordos ómega-3 de peixe gordo (2 porções por semana) ou suplementos de algas apoiam o desenvolvimento cerebral fetal.',
        'O ácido fólico (400-600 mcg/dia) reduz o risco de defeitos do tubo neural, especialmente no primeiro trimestre.',
        'Mantenha-se bem hidratada: aponte para cerca de 2-3 litros de líquidos por dia, mais em climas quentes ou durante exercício.',
        'Limite alimentos ultraprocessados, açúcares adicionados e gorduras trans, que contribuem para um ganho gestacional excessivo.',
      ],
    },
    {
      type: 'title',
      text: 'Atividade física e controlo do peso durante a gravidez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O ACOG recomenda pelo menos <strong>150 minutos por semana</strong> de atividade aeróbica de intensidade moderada para mulheres com gravidezes não complicadas. O exercício regular favorece um ganho de peso saudável, reduz o risco de diabetes gestacional e pré-eclâmpsia, melhora o sono e alivia as dores nas costas. Caminhar, nadar, o yoga pré-natal e a bicicleta estática são bem tolerados durante toda a gravidez. Consulte sempre a sua equipa antes de iniciar ou continuar uma atividade intensa.',
    },
    {
      type: 'title',
      text: 'Sinais de alerta relacionados com alterações de peso na gravidez',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Um ganho súbito de mais de 1 kg numa única semana, especialmente após a semana 20, pode indicar retenção de líquidos relacionada com pré-eclâmpsia.',
        'Inchaudo rápido das mãos, rosto ou tornozelos combinado com dores de cabeça ou alterações visuais requer atenção médica imediata.',
        'Perda de peso persistente além do primeiro trimestre, ou incapacidade de reter alimentos ou líquidos, pode indicar hiperémese gravídica.',
        'Um ganho de peso muito lento ou estagnado apesar de uma ingestão adequada pode justificar uma ecografia de crescimento fetal.',
        'Qualquer alteração de peso inexplicada deve ser discutida com um obstetra ou enfermeiro especialista em vez de gerida de forma autónoma.',
      ],
    },
    {
      type: 'title',
      text: 'Gravidez única vs. gemelar: diferenças fundamentais',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Gravidez única',
          description: 'Um feto, uma placenta. O cenário mais comum com objetivos IOM bem definidos.',
          points: [
            'Ganho total: 5 a 18 kg conforme o IMC pré-gravídico',
            'Ritmo semanal constante de 0,17 a 0,58 kg a partir da semana 14',
            'Excedente calórico menor necessário (340-450 kcal/dia)',
            'Taxa de parto prematuro: aproximadamente 10%',
          ],
        },
        {
          title: 'Gravidez gemelar',
          description: 'Dois fetos, com exigências geralmente mais elevadas em todos os aspetos. Os objetivos são maiores em todas as categorias de IMC.',
          points: [
            'Ganho total: 11 a 25 kg conforme o IMC pré-gravídico',
            'Ritmo semanal mais elevado especialmente no segundo trimestre',
            'Maiores necessidades calóricas e proteicas',
            'As equipas clínicas individualizam os objetivos com maior detalhe',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Aspetos frequentemente mal compreendidos sobre o ganho de peso pré-natal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'O ganho de peso não equivale a acumulação de gordura. A maior parte é sangue, líquidos, placenta e bebé, não gordura armazenada.',
        'Comer por dois não significa duplicar a ingestão. A necessidade calórica extra no segundo trimestre equivale aproximadamente a um copo de leite e uma banana.',
        'Estar acima do intervalo recomendado não implica automaticamente que a mãe ou o bebé estão em risco; os intervalos são orientações estatísticas, não limiares absolutos.',
        'As mulheres com obesidade também precisam de ganhar peso durante a gravidez. O IOM continua a recomendar um ganho líquido de 5 a 9 kg.',
        'A balança não é a medida mais importante de uma gravidez saudável; o crescimento fetal, a pressão arterial, a glicemia e as avaliações clínicas são mais relevantes.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IMC (Índice de Massa Corporal)',
          definition: 'Relação entre o peso e o quadrado da altura utilizada para classificar as categorias de peso corporal. Nos cuidados pré-natais, o IMC pré-gravídico determina o intervalo de ganho de peso adequado.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Atualmente a National Academy of Medicine. Publicou em 2009 as orientações de referência sobre o ganho de peso gestacional, amplamente utilizadas por clínicos de todo o mundo.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'O principal organismo profissional norte-americano de cuidados obstétrico-ginecológicos. Apoia as orientações de ganho de peso do IOM e fornece orientação clínica adicional.',
        },
        {
          term: 'Idade gestacional',
          definition: 'A idade da gravidez medida em semanas desde o primeiro dia do último período menstrual. Uma gravidez de termo dura geralmente 39 a 40 semanas.',
        },
        {
          term: 'Macrossomia',
          definition: 'Condição em que o bebé cresce mais do esperado, geralmente definida como peso ao nascer superior a 4 kg. Associada a ganho gestacional excessivo e diabetes gestacional.',
        },
        {
          term: 'Restrição do crescimento intrauterino (RCIU)',
          definition: 'Condição em que o feto cresce mais lentamente do esperado. Pode estar relacionada com ganho de peso insuficiente, problemas placentares ou outros fatores de saúde materna.',
        },
        {
          term: 'Pré-eclâmpsia',
          definition: 'Complicação da gravidez caracterizada por pressão arterial elevada e sinais de lesão noutros sistemas orgânicos. Um ganho de peso rápido e súbito por retenção de líquidos é um possível sinal de alerta.',
        },
        {
          term: 'Hiperémese gravídica',
          definition: 'Náuseas e vómitos graves e persistentes durante a gravidez, além das náuseas matinais habituais, que podem provocar perda de peso e desidratação e requerem tratamento médico.',
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
    educationalWarningTitle: 'Aviso educativo',
    educationalWarningBody: 'Esta calculadora destina-se exclusivamente à educação pré natal. Não diagnostica a saúde materna ou fetal, não substitui o aconselhamento médico individualizado e não considera sintomas, retenção de líquidos, risco de diabetes, crescimento fetal, historial nutricional ou metas definidas pelo clínico.',
    inputsTitle: 'Perfil da gravidez',
    unitsLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Altura (cm)',
    heightFtLabel: 'Altura (ft)',
    heightInLabel: 'Altura (in)',
    preWeightKgLabel: 'Peso antes da gravidez (kg)',
    currentWeightKgLabel: 'Peso atual (kg)',
    preWeightLbLabel: 'Peso antes da gravidez (lb)',
    currentWeightLbLabel: 'Peso atual (lb)',
    weekLabel: 'Semana gestacional',
    pregnancyTypeLabel: 'Tipo de gravidez',
    singletonLabel: 'Única',
    twinsLabel: 'Gemelar',
    bmiCardTitle: 'IMC pré gravídico',
    recommendationTitle: 'Ganho recomendado',
    currentGainTitle: 'Ganho atual',
    chartTitle: 'Curva de ganho de peso pré natal',
    weekShortLabel: 'sem',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Intervalo total',
    weeklyRangeLabel: 'Ritmo semanal após a semana 13',
    firstTrimesterLabel: 'Primeiro trimestre: ganho total de cerca de 0,5 a 2 kg',
    statusBelow: 'Abaixo da banda estimada',
    statusWithin: 'Dentro da banda estimada',
    statusAbove: 'Acima da banda estimada',
    statusBelowBody: 'O seu ganho atual está abaixo da banda estimada para esta semana. Pergunte ao seu clínico pré natal se deve rever a nutrição, as náuseas, o crescimento fetal ou a datação.',
    statusWithinBody: 'O seu ganho atual está dentro da banda estimada para esta semana. Continue a seguir o seu plano pré natal individualizado.',
    statusAboveBody: 'O seu ganho atual está acima da banda estimada para esta semana. Avalie a tendência com o seu clínico, sobretudo se o ganho for súbito ou acompanhado de inchaço ou outros sintomas.',
    categoryUnderweight: 'Baixo peso',
    categoryNormal: 'IMC normal',
    categoryOverweight: 'Sobrepeso',
    categoryObesity: 'Obesidade',
    totalGainSuffix: 'ganho total',
    perWeekSuffix: 'por semana',
    chartLowLabel: 'Banda inferior',
    chartHighLabel: 'Banda superior',
    chartCurrentLabel: 'Atual',
  },
};

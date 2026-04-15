import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bebes',
  title: 'Calculadoras para Bebés',
  description: 'Ferramentas e calculadoras para o cuidado e acompanhamento do desenvolvimento do seu bebé.',
  seo: [
    {
      type: 'summary',
      title: 'Ferramentas Disponíveis',
      items: [
        'Calculadora de alimentação por idade e peso',
        'Calculadora de percentis de crescimento (OMS)',
        'Conversor de tamanhos de roupa por marca',
        'Estimador de dias férteis',
        'Calendário de vacinação personalizado',
        'Calculadora de gravidez e semanas de gestação',
      ],
    },
    {
      type: 'title',
      text: 'Acompanhamento do Desenvolvimento do seu Bebé',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As calculadoras para bebés ajudam-no a acompanhar com precisão o crescimento e o desenvolvimento do seu filho. Desde o cálculo das mamadas de leite de acordo com a idade e o peso até à consulta dos percentis da OMS, estas ferramentas foram concebidas para lhe dar informações úteis em cada etapa.',
    },
    {
      type: 'title',
      text: 'Alimentação e Nutrição',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A calculadora de alimentação estima a quantidade de leite materno ou de fórmula de que o seu bebé necessita de acordo com a sua idade em dias, semanas ou meses e o seu peso atual. Os cálculos seguem as diretrizes pediátricas padrão para garantir uma nutrição adequada.',
    },
    {
      type: 'title',
      text: 'Crescimento e Percentis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A calculadora de percentis utiliza as tabelas de referência da Organização Mundial da Saúde (OMS) para situar o peso, a estatura e o IMC do seu bebé dentro da distribuição da população infantil. Um percentil 50 indica que o bebé está na média.',
    },
  ],
};

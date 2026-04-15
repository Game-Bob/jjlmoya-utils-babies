import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calendario-vacinacao-espanha-bebes';
const title = 'Calendário de Vacinação em Espanha';
const description = 'Calcule as datas exatas de vacinação do seu bebé de acordo com o calendário AEP 2026.';
const faq = [
  {
    question: 'O que é o calendário de vacinação AEP 2026?',
    answer: 'É o calendário de vacinação recomendado pela Associação Espanhola de Pediatria para o ano de 2026. Inclui todas as vacinas sistemáticas e opcionais para bebés e crianças desde o nascimento até aos 14 anos.',
  },
  {
    question: 'É obrigatório vacinar o meu bebé de acordo com o calendário?',
    answer: 'Em Espanha, a vacinação não é legalmente obrigatória, mas é fortemente recomendada. As vacinas do calendário sistemático são gratuitas e administradas nos centros de saúde públicos.',
  },
  {
    question: 'O que acontece se saltarmos uma dose?',
    answer: 'Se uma dose for atrasada, não é necessário começar do zero. O seu pediatra indicará como retomar o calendário a partir de onde parou. O importante é completar o esquema o mais rápido possível.',
  },
  {
    question: 'Posso administrar várias vacinas no mesmo dia?',
    answer: 'Sim, é comum e seguro administrar várias vacinas na mesma visita. As vacinas combinadas, como a hexavalente, já protegem contra seis doenças numa única injeção.',
  },
  {
    question: 'As vacinas são seguras para bebés prematuros?',
    answer: 'Os bebés prematuros devem ser vacinados de acordo com a sua idade cronológica (desde o nascimento), não a idade corrigida, salvo indicação específica do neonatologista. Têm prioridade por serem mais vulneráveis.',
  },
];
const howTo = [
  {
    name: 'Introduza a data de nascimento',
    text: 'Escreva o dia, mês e ano de nascimento do seu bebé nos campos correspondentes.',
  },
  {
    name: 'Consulte a próxima consulta',
    text: 'A calculadora mostra automaticamente quando é a próxima vacinação e quais as vacinas correspondentes.',
  },
  {
    name: 'Reveja o calendário completo',
    text: 'Abra as secções de consultas passadas e futuras para ver todo o calendário de vacinação.',
  },
  {
    name: 'Exporte os lembretes',
    text: 'Prima o botão para descarregar um ficheiro .ics com todas as consultas futuras e adicioná-las ao calendário do seu telemóvel.',
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

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Data de nascimento do bebé',
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'AAAA',
    emptyMsg: 'Introduza o dia, mês e ano de nascimento do seu bebé para ver o calendário de vacinação.',
    invalidMsg: 'A data introduzida não é válida.',
    futureMsg: 'Um bebé não pode ter nascido no futuro.',
    labelNextAppointment: 'Próxima consulta calculada',
    btnAddReminder: 'Adicionar lembrete ao telemóvel',
    btnToday: 'É hoje! Não se esqueça do boletim',
    labelPassed: 'Consultas passadas',
    labelFuture: 'Calendário futuro',
    labelStatusOk: 'OK',
    labelStatusPending: 'PEND.',
    labelSource: 'Fonte: AEP 2026',
    labelShare: 'Partilhar estas datas',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências',
    labelMonth: 'mês',
    labelMonths: 'meses',
    labelYear: 'ano',
    labelYears: 'anos',
    labelDay: 'dia',
    labelDays: 'dias',
    labelAnd: 'e',
    labelVaccination: 'Vacinação',
    labelAppointment: 'Consulta de vacinação',
    vac_hexavalente: 'Hexavalente',
    vac_neumococo: 'Pneumococo (VCN15/20)',
    vac_meningococo_b: 'Meningococo B (Bexsero)',
    vac_rotavirus: 'Rotavírus',
    vac_meningococo_acwy: 'Meningococo ACWY',
    vac_triple_virica: 'Tríplice Viral (VASPR)',
    vac_varicela: 'Varicela',
    vac_gripe: 'Gripe (Sazonal)',
    vac_vph: 'HPV (Papiloma)',
    vac_tdpa: 'Tdpa (Tétano, Difteria, Tosse convulsa)',
    vac_polio_booster: 'Pólio (Reforço)',
  },
  seo: [
    { type: 'title', text: 'Calculadora de Vacinas: Quando toca a próxima ao meu filho?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Eficácia' },
      { value: '14', label: 'Doses totais' },
      { value: 'Público', label: 'Custo AEP' },
      { value: 'Alta', label: 'Segurança' },
    ]},
    { type: 'tip', html: 'O calendário AEP 2026 inclui novidades importantes como a extensão da vacina contra o meningococo B e a atualização das recomendações para o HPV em ambos os sexos a partir dos 12 anos.' },
    { type: 'title', text: 'Novidades do Calendário AEP 2026', level: 3 },
    { type: 'list', items: [
      'Meningococo B (Bexsero): esquema 2+1 consolidado com doses aos 2, 4 e 12 meses.',
      'HPV estendido a todos os adolescentes a partir dos 12 anos, independentemente do sexo.',
      'Pneumococo: recomendação atualizada com VCN15 ou VCN20 conforme disponibilidade regional.',
      'Rotavírus: vacina oral incluída no calendário sistemático em todas as comunidades.',
      'Tdpa: reforço recomendado aos 6 e 12 anos para manter a imunidade contra a tosse convulsa.',
    ]},
    { type: 'title', text: 'Diferenças entre comunidades autónomas', level: 3 },
    { type: 'list', items: [
      'Algumas comunidades incluem vacinas adicionais não constantes do calendário nacional.',
      'O financiamento do rotavírus varia conforme a comunidade, embora a tendência seja a cobertura universal.',
      'O meningococo ACWY pode ser administrado em idades ligeiramente diferentes de acordo com o protocolo autonómico.',
      'Consulte sempre o seu pediatra ou o centro de saúde da sua comunidade para confirmar o calendário em vigor.',
    ]},
    { type: 'title', text: 'Como exportar o calendário para o seu telemóvel', level: 3 },
    { type: 'list', items: [
      'Introduza a data de nascimento do seu bebé na calculadora.',
      'Prima o botão "Adicionar lembrete ao telemóvel" para descarregar o ficheiro .ics.',
      'Abra o ficheiro com a sua aplicação de calendário (Google Calendar, Apple Calendar, etc.).',
      'Todos os eventos de vacinação ficarão guardados com a data e as vacinas correspondentes.',
    ]},
    { type: 'title', text: 'Efeitos secundários comuns', level: 3 },
    { type: 'list', items: [
      'Vermelhidão ou inchaço no local da injeção: desaparece em 1-2 dias.',
      'Febre ligeira (37.5–38.5 °C): normal nas primeiras 24-48 horas.',
      'Irritabilidade ou choro: frequente em bebés após as primeiras doses.',
      'Sonolência ou falta de apetite transitória: não necessita de tratamento.',
      'Reações graves como anafilaxia são extremamente raras (menos de 1 por milhão de doses).',
    ]},
    { type: 'tip', html: 'Levar o bebé bem alimentado e com roupa confortável facilita a visita. Após a vacina, o contacto pele com pele ou a amamentação ajudam a acalmar a dor e a inflamação de forma natural.' },
    { type: 'summary', title: 'O que deve recordar', items: [
      'O calendário AEP 2026 inclui 14 doses até aos 12 anos para uma proteção completa.',
      'As vacinas do primeiro ano protegem simultaneamente contra até 9 doenças graves.',
      'Os efeitos secundários ligeiros são normais e desaparecem em 1-2 dias.',
      'Pode exportar todas as consultas de vacinação para o calendário do seu telemóvel com um único clique.',
      'Consulte sempre o seu pediatra em caso de dúvidas sobre o calendário da sua comunidade.',
    ]},
  ],
  faqTitle: "Perguntas frequentes",
  faq,
  bibliographyTitle: "Referências",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendario de Vacunaciones 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Ministério da Saúde (Espanha) - Calendário de Vacinação',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'OMS - Imunização',
      url: 'https://www.who.int/pt/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Plano de imunização recomendado para crianças e adolescentes',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'calendario-vacunacion-espana-bebes';
const title = 'Calendario de Vacunación en España';
const description = 'Calcula las fechas exactas de vacunación de tu bebé según el calendario AEP 2026.';
const faq = [
  {
    question: '¿Qué es el calendario de vacunación AEP 2026?',
    answer: 'Es el calendario de vacunaciones recomendado por la Asociación Española de Pediatría para el año 2026. Incluye todas las vacunas sistemáticas y opcionales para bebés y niños desde el nacimiento hasta los 14 años.',
  },
  {
    question: '¿Es obligatorio vacunar a mi bebé según el calendario?',
    answer: 'En España la vacunación no es legalmente obligatoria, pero sí muy recomendada. Las vacunas del calendario sistemático son gratuitas y se administran en los centros de salud públicos.',
  },
  {
    question: '¿Qué pasa si nos saltamos una dosis?',
    answer: 'Si se retrasa una dosis no es necesario empezar de cero. Tu pediatra te indicará cómo retomar el calendario desde donde se dejó. Lo importante es completar la pauta lo antes posible.',
  },
  {
    question: '¿Puedo administrar varias vacunas el mismo día?',
    answer: 'Sí, es habitual y seguro administrar varias vacunas en la misma visita. Las vacunas combinadas como la hexavalente ya protegen contra seis enfermedades en una sola inyección.',
  },
  {
    question: '¿Son seguras las vacunas para los bebés prematuros?',
    answer: 'Los bebés prematuros deben vacunarse según su edad cronológica (desde el nacimiento), no la edad corregida, salvo indicación específica del neonatólogo. Tienen prioridad por ser más vulnerables.',
  },
];
const howTo = [
  {
    name: 'Introduce la fecha de nacimiento',
    text: 'Escribe el día, mes y año de nacimiento de tu bebé en los campos correspondientes.',
  },
  {
    name: 'Consulta la próxima cita',
    text: 'La calculadora te muestra automáticamente cuándo es la próxima vacunación y qué vacunas corresponden.',
  },
  {
    name: 'Revisa el calendario completo',
    text: 'Despliega las secciones de citas pasadas y futuras para ver todo el calendario de vacunación.',
  },
  {
    name: 'Exporta los recordatorios',
    text: 'Pulsa el botón para descargar un archivo .ics con todas las citas futuras y añadirlas a tu calendario del móvil.',
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
  inLanguage: 'es',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Fecha de nacimiento del bebé',
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'AAAA',
    emptyMsg: 'Introduce el día, mes y año de nacimiento de tu bebé para ver el calendario de vacunación.',
    invalidMsg: 'La fecha introducida no es válida.',
    futureMsg: 'Un bebé no puede haber nacido en el futuro.',
    labelNextAppointment: 'Próxima cita calculada',
    btnAddReminder: 'Añadir recordatorio al móvil',
    btnToday: '¡Es hoy! No olvides la cartilla',
    labelPassed: 'Citas pasadas',
    labelFuture: 'Calendario futuro',
    labelStatusOk: 'OK',
    labelStatusPending: 'PEND.',
    labelSource: 'Fuente: AEP 2026',
    labelShare: 'Compartir estas fechas',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
    // Age labels
    labelMonth: 'mes',
    labelMonths: 'meses',
    labelYear: 'año',
    labelYears: 'años',
    labelDay: 'día',
    labelDays: 'días',
    labelAnd: 'y',
    labelVaccination: 'Vacunación',
    labelAppointment: 'Cita de vacunación',
    // Vaccine IDs
    vac_hexavalente: 'Hexavalente',
    vac_neumococo: 'Neumococo (VCN15/20)',
    vac_meningococo_b: 'Meningococo B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningococo ACWY',
    vac_triple_virica: 'Triple Vírica (SRP)',
    vac_varicela: 'Varicela',
    vac_gripe: 'Gripe (Estacional)',
    vac_vph: 'VPH (Papiloma)',
    vac_tdpa: 'Tdpa (Tétanos, Difteria, Tosferina)',
    vac_polio_booster: 'Polio (Refuerzo)',
  },
  seo: [
    { type: 'title', text: 'Calculadora de Vacunas: ¿Cuándo le toca la próxima a mi hijo?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Efectividad' },
      { value: '14', label: 'Dosis totales' },
      { value: 'Público', label: 'Costo AEP' },
      { value: 'Alta', label: 'Seguridad' },
    ]},
    { type: 'tip', html: 'El calendario AEP 2026 incluye novedades importantes como la extensión de la vacuna frente al meningococo B y la actualización de las recomendaciones para el VPH en ambos sexos desde los 12 años.' },
    { type: 'title', text: 'Novedades del Calendario AEP 2026', level: 3 },
    { type: 'list', items: [
      'Meningococo B (Bexsero): pauta 2+1 consolidada con dosis a los 2, 4 y 12 meses.',
      'VPH extendido a todos los adolescentes a partir de los 12 años, independientemente del sexo.',
      'Neumococo: recomendación actualizada con VCN15 o VCN20 según disponibilidad regional.',
      'Rotavirus: vacuna oral incluida en el calendario sistemático en todas las comunidades.',
      'Tdpa: refuerzo recomendado a los 6 y 12 años para mantener la inmunidad frente a tosferina.',
    ]},
    { type: 'title', text: 'Diferencias entre comunidades autónomas', level: 3 },
    { type: 'list', items: [
      'Algunas comunidades incluyen vacunas adicionales no recogidas en el calendario nacional.',
      'La financiación del rotavirus varía según la comunidad, aunque la tendencia es la cobertura universal.',
      'El meningococo ACWY puede administrarse en edades ligeramente distintas según el protocolo autonómico.',
      'Consulta siempre con tu pediatra o el centro de salud de tu comunidad para confirmar el calendario vigente.',
    ]},
    { type: 'title', text: 'Cómo exportar el calendario a tu móvil', level: 3 },
    { type: 'list', items: [
      'Introduce la fecha de nacimiento de tu bebé en la calculadora.',
      'Pulsa el botón "Añadir recordatorio al móvil" para descargar el archivo .ics.',
      'Abre el archivo con tu aplicación de calendario (Google Calendar, Apple Calendar, etc.).',
      'Todos los eventos de vacunación quedarán guardados con la fecha y vacunas correspondientes.',
    ]},
    { type: 'title', text: 'Efectos secundarios habituales', level: 3 },
    { type: 'list', items: [
      'Rojez o hinchazón en el lugar de la inyección: desaparece en 1-2 días.',
      'Fiebre leve (37.5–38.5 °C): normal en las primeras 24-48 horas.',
      'Irritabilidad o llanto: frecuente en bebés tras las primeras dosis.',
      'Somnolencia o falta de apetito transitoria: no precisa tratamiento.',
      'Reacciones graves como anafilaxia son extremadamente raras (menos de 1 por millón de dosis).',
    ]},
    { type: 'tip', html: 'Llevar al bebé bien alimentado y con ropa cómoda facilita la visita. Tras la vacuna, el contacto piel con piel o la lactancia materna ayudan a calmar el dolor y la inflamación de forma natural.' },
    { type: 'summary', title: 'Lo que debes recordar', items: [
      'El calendario AEP 2026 incluye 14 dosis hasta los 12 años para una protección completa.',
      'Las vacunas del primer año protegen contra hasta 9 enfermedades graves de forma simultánea.',
      'Los efectos secundarios leves son normales y desaparecen en 1-2 días.',
      'Puedes exportar todas las citas de vacunación al calendario de tu móvil con un solo clic.',
      'Consulta siempre a tu pediatra si tienes dudas sobre el calendario de tu comunidad.',
    ]},
  ],
  faqTitle: "Preguntas frecuentes",
  faq,
  bibliographyTitle: "Referencias",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Calendario de Vacunaciones 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Ministerio de Sanidad - Calendario de Vacunación',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'OMS - Inmunización',
      url: 'https://www.who.int/es/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Recommended Child and Adolescent Immunization Schedule',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Contador de Contracciones de Parto';
export const description = 'Registra la duración y frecuencia de las contracciones con un botón táctil grande, respiración guiada, historial y alerta del patrón 5-1-1.';

export const faq = [
  {
    question: '¿Qué es la regla del 5-1-1 para las contracciones?',
    answer: 'La regla del 5-1-1 suele significar que las contracciones están separadas por unos 5 minutos, duran alrededor de 1 minuto y se mantienen durante aproximadamente 1 hora. Muchos equipos de maternidad la usan como señal práctica para llamar y recibir orientación, pero tu plan personal puede ser distinto.',
  },
  {
    question: '¿Cuándo debo contactar con mi matrona o el hospital?',
    answer: 'Contacta con tu equipo de maternidad cuando las contracciones se vuelvan regulares, intensas o coincidan con las indicaciones de tiempo que te dieron. Llama urgentemente si hay sangrado abundante, disminución de movimientos fetales, fiebre, dolor intenso, rotura de aguas con dudas o si sientes que algo no va bien.',
  },
  {
    question: '¿Este contador diagnostica el parto activo?',
    answer: 'No. Registra los tiempos y señala un patrón frecuente de contracciones. Los cambios cervicales, la posición fetal, el estado de las membranas, los síntomas y tu historial clínico deben ser valorados por un profesional sanitario cualificado.',
  },
  {
    question: '¿Cómo se calcula la frecuencia de las contracciones?',
    answer: 'La frecuencia se calcula desde el inicio de una contracción hasta el inicio de la contracción anterior. La duración se calcula desde el momento en que pulsas iniciar hasta que pulsas detener.',
  },
  {
    question: '¿Puedo usarlo durante el parto prodrómico?',
    answer: 'Sí. Puede ayudarte a ver si las contracciones se están volviendo más regulares o si se desvanecen. Si las contracciones siguen siendo irregulares, cambian con el descanso o la hidratación, o no se intensifican, puede que sigan siendo prodrómicas, pero tu equipo médico puede orientarte.',
  },
  {
    question: '¿Por qué se incluye la respiración guiada?',
    answer: 'Una respiración lenta y constante puede ayudar a reducir la tensión, centrar la atención y facilitar el afrontamiento durante cada contracción. La animación es solo una ayuda de confort y no sustituye el acompañamiento durante el parto.',
  },
  {
    question: '¿Debo esperar al 5-1-1 si no es mi primer bebé?',
    answer: 'No siempre. El parto puede avanzar más rápido después de un parto vaginal anterior. Sigue el plan de tu matrona u obstetra, especialmente si tienes un embarazo de alto riesgo, vives lejos del hospital o has tenido partos rápidos anteriores.',
  },
  {
    question: '¿Se guarda mi historial de contracciones?',
    answer: 'El contador almacena los registros recientes en tu navegador para que puedas refrescar la página sin perder la sesión. Usa el botón de reinicio para borrar el historial local.',
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
    name: 'Iniciar el cronometraje',
    text: 'Pulsa el botón principal cuando empiece una contracción.',
  },
  {
    name: 'Usar la guía de respiración',
    text: 'Sigue el círculo que se expande y contrae mientras la contracción está activa.',
  },
  {
    name: 'Detener el cronometraje',
    text: 'Vuelve a pulsar el botón cuando termine la contracción para que se registren la duración y el intervalo.',
  },
  {
    name: 'Revisar el patrón',
    text: 'Consulta el historial y el panel de alertas para decidir si debes contactar con tu equipo de maternidad.',
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
  slug: 'contador-contracciones-parto',
  faqTitle: 'Preguntas frecuentes',
  bibliographyTitle: 'Bibliografía',
  seo: [
    {
      type: 'summary',
      title: 'Datos clave sobre el cronometraje de contracciones',
      items: [
        'La duración se mide desde el inicio de una contracción hasta su final.',
        'La frecuencia se mide desde el inicio de una contracción hasta el inicio de la siguiente.',
        'El patrón 5-1-1 significa aproximadamente 5 minutos de intervalo, 1 minuto de duración, durante 1 hora.',
        'El cronometraje de contracciones ayuda a tomar decisiones pero por sí solo no puede confirmar la dilatación cervical ni el parto activo.',
        'Sigue siempre las indicaciones de tu propia matrona, obstetra o unidad de maternidad.',
      ],
    },
    {
      type: 'title',
      text: 'Contador de Contracciones de Parto: Registra Duración, Frecuencia y Patrones 5-1-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un contador de contracciones ayuda a las familias a convertir un momento estresante y difícil de evaluar en un registro claro. Durante el final del embarazo es habitual preguntarse si las contracciones son aún contracciones de práctica irregulares, parto prodrómico, parto temprano o un patrón que merece una llamada a la unidad de maternidad. Al pulsar iniciar cuando comienza una contracción y detener cuando termina, esta herramienta calcula la <strong>duración</strong> en segundos y la <strong>frecuencia</strong> en minutos desde el inicio de una contracción hasta el inicio de la siguiente.',
    },
    {
      type: 'paragraph',
      html: 'El objetivo no es diagnosticar el parto. El objetivo es ayudarte a describir lo que está ocurriendo en términos concretos: cuánto dura cada contracción, cada cuánto se producen, si el patrón se está intensificando y si se ha mantenido constante el tiempo suficiente para coincidir con pautas habituales como la regla del 5-1-1.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Señal de frecuencia habitual' },
        { value: '60 s', label: 'Duración típica del 5-1-1' },
        { value: '1 hora', label: 'Ventana de estabilidad del patrón' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo interpretar la alerta 5-1-1',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La regla del 5-1-1 es una referencia muy utilizada: las contracciones están separadas por unos 5 minutos, duran alrededor de 1 minuto y se mantienen durante aproximadamente 1 hora. Muchos equipos de parto usan ese patrón como señal práctica para llamar y recibir asesoramiento personalizado, especialmente en un primer parto. Este contador destaca el patrón cuando las contracciones recientes están separadas por 5 minutos o menos, duran al menos 60 segundos y se han mantenido a lo largo de la sesión.',
    },
    {
      type: 'table',
      headers: ['Patrón observado', 'Lo que puede sugerir', 'Siguiente paso útil'],
      rows: [
        ['Ritmo irregular, duración variable', 'Es posible que sea parto prodrómico o parto temprano', 'Descansa, hidrátate, cambia de postura y sigue observando a menos que tengas síntomas de alarma'],
        ['Se acercan pero aún por debajo de 60 segundos', 'El parto puede estar avanzando pero quizá aún no coincida con el 5-1-1', 'Sigue cronometrando y sigue las instrucciones de tu plan de parto'],
        ['Separadas unos 5 min, 60 s de duración, durante 1 hora', 'Patrón habitual de llamada 5-1-1', 'Contacta con tu matrona, obstetra o unidad de maternidad para recibir orientación personalizada'],
        ['Contracciones intensas y repentinas, presión o ganas de empujar', 'El parto puede estar progresando rápidamente', 'Llama inmediatamente, especialmente si no es tu primer bebé'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo cronometrar las contracciones correctamente',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Pulsa iniciar al comienzo de la sensación de tensión, calambre u oleada.',
        'Pulsa detener cuando la contracción desaparezca claramente y puedas relajarte de nuevo.',
        'No midas la frecuencia desde el final de una contracción hasta el inicio de la siguiente. Clínicamente, la frecuencia se cuenta de inicio a inicio.',
        'Registra varias contracciones antes de interpretar el patrón, porque una contracción aislada puede ser engañosa.',
        'Usa primero las indicaciones de tu equipo de maternidad si te dieron un umbral diferente al 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Parto prodrómico frente a patrones de parto activo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'A menudo prodrómico o parto temprano',
          description: 'Las contracciones pueden ser molestas y reales, pero el patrón puede no estar avanzando de forma constante hacia el nacimiento.',
          points: [
            'Los intervalos varían en lugar de acortarse de forma consistente',
            'Las contracciones pueden aliviarse con descanso, hidratación, un baño o cambios de postura',
            'La intensidad puede mantenerse similar en lugar de aumentar con el tiempo',
            'El cuello uterino puede cambiar lentamente o apenas, algo que solo un profesional puede valorar',
          ],
        },
        {
          title: 'Más sugestivo de parto activo',
          description: 'El patrón se vuelve más regular, cuesta más hablar durante las contracciones y se intensifica progresivamente.',
          points: [
            'Las contracciones se acercan entre sí a lo largo de varios registros',
            'Cada contracción dura entre 45 y 70 segundos o más',
            'Necesitas hacer una pausa, respirar o concentrarte durante el pico',
            'El patrón continúa incluso después de descansar, hidratarte o cambiar de postura',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cuándo no esperar al contador',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Nota de seguridad:</strong> No esperes a la alerta del contador si tienes sangrado abundante, disminución de movimientos fetales, dolor de cabeza intenso, fiebre, líquido verde o maloliente, dolor constante e intenso, síntomas de preeclampsia o cualquier otra preocupación urgente. Llama a tu equipo de maternidad o a los servicios de emergencia según las indicaciones de tu zona.',
    },
    {
      type: 'title',
      text: 'Qué muestra el historial',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Hora de inicio: la hora del reloj en que comenzó la contracción.',
        'Duración: hora de fin menos hora de inicio, redondeada en segundos.',
        'Intervalo: hora de inicio actual menos la hora de inicio de la contracción anterior, mostrado en minutos.',
        'Tendencia reciente: si las contracciones se están espaciando, siguen siendo irregulares o se están volviendo más regulares.',
      ],
    },
    {
      type: 'title',
      text: 'Errores frecuentes al cronometrar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Detener el contador en el pico en lugar de cuando la contracción desaparece por completo.',
        'Empezar tarde porque la contracción era leve al principio, lo que hace que la duración parezca más corta.',
        'Contar solo las contracciones más fuertes e ignorar las más pequeñas que hay entre medio.',
        'Asumir que el 5-1-1 siempre significa ingreso hospitalario inmediato. Normalmente significa llamar para recibir orientación, no autodiagnosticar el parto activo.',
        'Esperar demasiado en un segundo parto o posteriores, donde la progresión puede ser más rápida que en el primer nacimiento.',
      ],
    },
    {
      type: 'title',
      text: 'Límites clínicos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El cronometraje de contracciones es solo una parte de la valoración del parto. La dilatación cervical, el bienestar fetal, el manejo del dolor, la rotura de membranas, la edad gestacional, los antecedentes de partos previos, el estado de estreptococo del grupo B, la distancia al hospital, los factores de riesgo del embarazo y los síntomas maternos pueden cambiar lo que tu equipo recomiende. Usa el historial como un registro claro para compartir con tu matrona, obstetra, doula o enfermera de triaje.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Duración',
          definition: 'La longitud de una contracción, medida desde el momento en que comienza hasta que termina.',
        },
        {
          term: 'Frecuencia',
          definition: 'El tiempo desde el inicio de una contracción hasta el inicio de la siguiente contracción.',
        },
        {
          term: 'Regla del 5-1-1',
          definition: 'Un patrón habitual de cronometraje del parto: contracciones cada 5 minutos aproximadamente, de 1 minuto de duración, mantenidas durante 1 hora.',
        },
        {
          term: 'Parto prodrómico',
          definition: 'Un periodo de contracciones reales que pueden ser molestas y recurrentes pero que no siempre progresa de forma constante hacia el parto activo.',
        },
        {
          term: 'Parto activo',
          definition: 'Una fase del parto con contracciones más fuertes y regulares y cambios cervicales, confirmada mediante valoración clínica.',
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
    safetyTitle: 'Usar con tu plan de parto',
    safetyBody: 'Este contador es para seguimiento y educación. Contacta con tu matrona, obstetra o unidad de maternidad si tienes dudas, los síntomas te preocupan o te dieron instrucciones diferentes.',
    idleStatus: 'Listo para cronometrar la siguiente contracción',
    activeStatus: 'Contracción en curso',
    accidentalTapStatus: 'Demasiado corta',
    shortRecordLabel: 'Toque corto o de prueba',
    activeRowLabel: 'Activa ahora',
    startButton: 'Iniciar contracción',
    stopButton: 'Detener contracción',
    activeLabel: 'Contracción activa',
    breathingLabel: 'Respira despacio',
    breatheIn: 'Inspira',
    breatheOut: 'Espira',
    currentDurationLabel: 'Duración actual',
    lastIntervalLabel: 'Último intervalo',
    contractionCountLabel: 'Registradas',
    patternStatusTitle: 'Estado del patrón',
    patternStatusIdle: 'Listo para registrar',
    patternStatusTracking: 'Sigue registrando',
    patternStatusBuilding: 'El patrón avanza',
    patternStatusCall: 'Llama a tu equipo de maternidad',
    patternStatusActiveBody: 'Has empezado a registrar. Se necesitan unas cuantas contracciones más para que el patrón sea significativo.',
    patternStatusBuildingBody: 'Las contracciones recientes se están acercando o durando más. Sigue cronometrando y prepárate para llamar si continúan.',
    patternStatusCallBody: 'Las contracciones recientes se aproximan al patrón 5-1-1. Contacta ahora con tu matrona, obstetra o unidad de maternidad para recibir orientación personalizada.',
    averageLastThreeLabel: 'Media últimas 3',
    averageLastSixLabel: 'Media últimas 6',
    regularityLabel: 'Regularidad',
    regularityNotEnough: 'Datos insuficientes',
    regularityIrregular: 'Irregular',
    regularityVariable: 'Variable',
    regularityRegular: 'Regular',
    summaryTitle: 'Resumen para el teléfono',
    summaryEmpty: 'Registra al menos tres contracciones para elaborar un resumen útil para tu equipo de maternidad.',
    copySummaryButton: 'Copiar resumen',
    copiedSummaryButton: 'Copiado',
    undoButton: 'Deshacer última',
    sessionOverviewTitle: 'Resumen de la sesión',
    sessionOverviewBody: 'Empieza a cronometrar cuando comience una contracción. La contracción activa aparecerá aquí inmediatamente.',
    lastContractionLabel: 'Última contracción',
    historyTitle: 'Historial de contracciones',
    emptyHistory: 'Todavía no se ha registrado ninguna contracción.',
    startTimeHeader: 'Hora de inicio',
    durationHeader: 'Duración',
    intervalHeader: 'Intervalo',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Reiniciar',
    alertTitle: 'Patrón 5-1-1 detectado',
    alertBody: 'Tus contracciones recientes se aproximan al patrón 5-1-1 habitual. Considera contactar ahora con tu matrona o unidad de maternidad para recibir orientación personalizada.',
    patternTitle: 'Qué comprueba la alerta',
    patternBody: 'El panel aparece cuando las contracciones recientes están separadas por 5 minutos o menos, duran al menos 60 segundos y mantienen ese patrón durante aproximadamente 1 hora.',
  },
};

import type { PregnancyCalculatorLocaleContent } from '../index';

export const content: PregnancyCalculatorLocaleContent = {
  slug: 'calculadora-semanas-embarazo',
  title: 'Calculadora de Semanas de Embarazo',
  description: 'Calcula exactamente en qué semana de embarazo estás, el trimestre y tu fecha probable de parto.',
  ui: {
    btnFUR: 'Última Regla',
    btnConception: 'Fecha de Concepción',
    labelPartnerMode: 'Modo pareja',
    labelFUR: 'Fecha de última regla',
    labelConception: 'Fecha de concepción',
    labelCycleLength: 'Duración del ciclo',
    unitDays: 'días',
    labelWeeks: 'Semanas',
    labelTrimester: 'Trimestre',
    labelEDD: 'Fecha Probable de Parto',
    eddPlaceholder: 'Introduce tu fecha',
    eddNote: 'Solo el 3–5% de los bebés nace ese día exacto',
    btnCalendar: 'Guardar en Calendario',
    labelFruits: 'Frutas',
    labelGeek: 'Geek',
    labelSweets: 'Dulces',
    labelBioLabel: 'Formación biológica',
    labelMomKey: 'Tu cuerpo hoy',
    labelPartnerKey: 'Como apoyarla hoy',
    labelNormalMolestias: 'Molestias normales',
    labelAlert: 'Consultar si hay...',
    labelTimeline: 'Línea de tiempo',
    labelStartHere: 'Empieza aquí',
    labelStartBody: 'Selecciona la fecha de tu última regla y descubre en qué semana estás.',
    faqTitle: 'Preguntas frecuentes',
    bibliographyTitle: 'Referencias',
  },
  seo: [
    {
      type: 'summary',
      title: 'Lo que debes recordar',
      items: [
        'Calcula tu semana de embarazo a partir de la FUR o la fecha de concepción.',
        'La FPP es una estimación: solo el 3–5% de los bebés nace exactamente ese día.',
        'Cada trimestre tiene sus propios hitos biológicos y molestias características.',
        'Ante cualquier señal de alarma, consulta con tu médico o matrona sin esperar.',
        'El modo pareja te muestra cómo apoyar a tu compañera semana a semana.',
      ],
    },
    {
      type: 'title',
      text: 'Calculadora de Semanas de Embarazo: Mucho más que una fecha de parto',
      level: 2,
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 semanas', label: 'Duración media del embarazo' },
        { value: '280 días', label: 'Días de gestación' },
        { value: '±14 días', label: 'Margen de error de la FPP' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo se calcula la semana de embarazo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'El método más habitual usa la fecha de la última regla (FUR) como punto de partida.',
        'Se suman 280 días a la FUR para obtener la fecha probable de parto (FPP).',
        'Si tu ciclo es diferente a 28 días, la FPP se ajusta automáticamente.',
        'El método de concepción resta 14 días al cómputo para aproximar la FPP desde la fecundación.',
        'La ecografía del primer trimestre puede corregir la edad gestacional con mayor precisión.',
      ],
    },
    {
      type: 'tip',
      html: 'Si tu médico indica una fecha diferente a la calculada aquí, lo más probable es que se deba a un ciclo irregular o a la corrección ecográfica del primer trimestre. Ambas fechas son válidas.',
    },
    {
      type: 'title',
      text: 'Los tres trimestres del embarazo',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Trimestre', 'Semanas', 'Hito principal', 'Cuerpo de la madre'],
      rows: [
        ['1.º', '1 – 12', 'Formación de órganos', 'Náuseas, cansancio, implantación'],
        ['2.º', '13 – 26', 'Movimientos fetales, eco morfológica', 'Energía recuperada, barriga visible'],
        ['3.º', '27 – 40', 'Maduración pulmonar, encajamiento', 'Presión pélvica, preparación al parto'],
      ],
    },
    {
      type: 'title',
      text: 'Hitos biológicos semana a semana',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Semana', 'Tamaño aprox.', 'Hito biológico', 'Qué siente la madre'],
      rows: [
        ['4', '~1 mm', 'Implantación en el endometrio', 'Sangrado leve posible'],
        ['8', '~18 mm', 'Corazón late 150–170 veces/min', 'Náuseas en su punto álgido'],
        ['12', '~55 mm', 'Órganos principales formados', 'Riesgo de aborto cae drásticamente'],
        ['20', '~25 cm', 'Oye voces con claridad', 'Ecografía morfológica'],
        ['28', '~37 cm', 'Ciclos de sueño y vigilia', 'Inicio del tercer trimestre'],
        ['36', '~47 cm', 'Pulmones casi maduros', 'Encajamiento en pelvis'],
        ['40', '~50 cm', 'Todo listo para nacer', 'FPP: fecha probable de parto'],
      ],
    },
    {
      type: 'title',
      text: 'Síntomas habituales por trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Primer trimestre (sem. 1–12)',
          description: 'La fase de mayor cambio hormonal.',
          points: [
            'Náuseas y vómitos, especialmente por las mañanas',
            'Cansancio extremo y somnolencia',
            'Sensibilidad en los pechos',
            'Micción frecuente',
            'Cambios de humor',
          ],
        },
        {
          title: 'Segundo trimestre (sem. 13–26)',
          description: 'El trimestre de mayor bienestar para la mayoría.',
          points: [
            'Desaparición de las náuseas',
            'Energía recuperada',
            'Barriga visible desde la semana 18–20',
            'Primeros movimientos fetales (sem. 18–22)',
            'Ardor de estómago creciente',
          ],
        },
        {
          title: 'Tercer trimestre (sem. 27–40)',
          description: 'Preparación para el parto.',
          points: [
            'Presión pélvica y dolor de espalda',
            'Contracciones Braxton Hicks',
            'Hinchazón de pies y tobillos',
            'Dificultad para dormir',
            'Encajamiento del bebé (sem. 36–38)',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Señales de alarma que requieren consulta inmediata',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sangrado vaginal abundante en cualquier semana: consultar de inmediato.',
        'Contracciones regulares antes de la semana 37: riesgo de parto pretérmino.',
        'Pérdida de líquido amniótico: rotura de bolsa, acudir a urgencias.',
        'Dolor de cabeza intenso con visión borrosa: posible preeclampsia.',
        'Ausencia de movimientos fetales después de la semana 20: señal de alarma.',
      ],
    },
    {
      type: 'title',
      text: 'Citas médicas imprescindibles',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Semana 8–12: primera ecografía y análisis de sangre del primer trimestre.',
        'Semana 12: cribado combinado de primer trimestre (translucencia nucal + analítica).',
        'Semana 18–22: ecografía morfológica o de la semana 20.',
        'Semana 24–28: prueba de tolerancia a la glucosa (O\'Sullivan).',
        'Semana 36: ecografía de control, cultivo de estreptococo grupo B.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'FUR / LMP',
          definition: 'Fecha de la Última Regla (Last Menstrual Period). Punto de referencia para calcular la edad gestacional.',
        },
        {
          term: 'FPP / EDD',
          definition: 'Fecha Probable de Parto (Estimated Due Date). Se calcula sumando 280 días a la FUR.',
        },
        {
          term: 'Líquido Amniótico',
          definition: 'Fluido que rodea al bebé en el útero. Protege al feto, regula la temperatura y permite el movimiento.',
        },
        {
          term: 'Tapón Mucoso',
          definition: 'Secreción espesa que sella el cuello uterino durante el embarazo. Su pérdida indica que el parto se aproxima.',
        },
        {
          term: 'Preeclampsia',
          definition: 'Complicación del embarazo caracterizada por presión arterial alta y daño a órganos. Requiere control médico urgente.',
        },
      ],
    },
  ],
  faq: [
    {
      question: '¿Cómo se calcula la semana de embarazo?',
      answer: 'Se cuenta desde el primer día de tu última regla. A esa fecha se suman 280 días para obtener la fecha probable de parto. Si tu ciclo es diferente a 28 días, el cálculo se ajusta automáticamente.',
    },
    {
      question: '¿Qué diferencia hay entre usar la FUR y la fecha de concepción?',
      answer: 'La FUR es el método estándar usado por los médicos. La fecha de concepción es más exacta si la conoces, ya que evita la estimación de los 14 días de ovulación. Ambos métodos dan resultados muy similares en ciclos regulares.',
    },
    {
      question: '¿Por qué la fecha de parto de mi médico es diferente?',
      answer: 'Tu médico puede haber corregido la fecha a partir de la ecografía del primer trimestre, que es el método más preciso. Ciclos irregulares también pueden justificar diferencias.',
    },
    {
      question: '¿Cuándo empieza el segundo trimestre?',
      answer: 'El segundo trimestre empieza en la semana 13 y termina al final de la semana 26. Es el periodo en el que la mayoría de las madres se sienten con más energía y donde la barriga se hace visible.',
    },
    {
      question: '¿Qué es la FPP y qué exactitud tiene?',
      answer: 'La Fecha Probable de Parto (FPP) es una estimación estadística. Solo el 3–5% de los bebés nace exactamente ese día. La mayoría nacen entre la semana 38 y la 42.',
    },
  ],
  bibliography: [
    {
      name: 'OMS – Cuidados en el embarazo',
      url: 'https://www.who.int/es/news-room/fact-sheets/detail/maternal-mortality',
    },
    {
      name: 'ACOG – Gestational Age and Due Date Calculation',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date',
    },
    {
      name: 'Sociedad Española de Ginecología y Obstetricia (SEGO)',
      url: 'https://www.sego.es',
    },
    {
      name: 'Naegele\'s rule – Dugoff L. et al., Obstetrics & Gynecology',
      url: 'https://journals.lww.com/greenjournal/fulltext/2017/05000/methods_for_estimating_the_due_date.43.aspx',
    },
    {
      name: 'UpToDate – Prenatal care: Initial assessment',
      url: 'https://www.uptodate.com/contents/prenatal-care-initial-assessment',
    },
  ],
  howTo: [
    {
      name: 'Selecciona el método de cálculo',
      text: 'Elige si quieres calcular desde la fecha de tu última regla o desde la fecha de concepción.',
    },
    {
      name: 'Introduce la fecha',
      text: 'Selecciona el día, mes y año usando los menús desplegables.',
    },
    {
      name: 'Ajusta la duración del ciclo',
      text: 'Si tu ciclo no es de 28 días, mueve el control deslizante para obtener una estimación más precisa.',
    },
    {
      name: 'Consulta la semana y el trimestre',
      text: 'El resultado muestra la semana exacta, el trimestre y la fecha probable de parto.',
    },
    {
      name: 'Explora los hitos semanales',
      text: 'Descubre el tamaño del bebé, los cambios biológicos y consejos personalizados para cada semana.',
    },
  ],
  schemas: [],
};

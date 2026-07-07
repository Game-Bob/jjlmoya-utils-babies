import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Calculadora de Ganancia de Peso en el Embarazo';
const description = 'Estima el rango saludable de ganancia de peso durante el embarazo por semana gestacional, usando las guías de aumento de peso prenatal del IOM y ACOG.';

const faq = [
  {
    question: '¿Cuánto peso debería ganar durante el embarazo?',
    answer: 'Depende del IMC previo al embarazo. Las guías del IOM recomiendan 12,5-18 kg (28-40 lb) para bajo peso, 11,5-16 kg (25-35 lb) para normopeso, 7-11,5 kg (15-25 lb) para sobrepeso y 5-9 kg (11-20 lb) para obesidad en embarazos únicos. Confirma siempre tu objetivo personal con tu equipo sanitario prenatal.',
  },
  {
    question: '¿En un embarazo gemelar se usan las mismas guías de ganancia de peso?',
    answer: 'No. Los embarazos gemelares tienen objetivos más altos en todas las categorías de IMC. Para normopeso el rango recomendado es de 17-25 kg (37-54 lb). Para sobrepeso, 14-23 kg (31-50 lb), y para obesidad, 11-19 kg (25-42 lb). No existe un rango IOM establecido para mujeres con bajo peso en embarazo gemelar, por lo que el equipo clínico individualiza el seguimiento.',
  },
  {
    question: '¿Por qué la ganancia esperada cambia tan poco en el primer trimestre?',
    answer: 'Las guías del IOM esperan una ganancia total muy modesta en el primer trimestre, de unos 0,5 a 2 kg, porque el feto, la placenta y el líquido amniótico aún tienen muy poco peso. La ganancia semanal más constante, de 0,17 a 0,58 kg según el IMC, comienza en el segundo trimestre.',
  },
  {
    question: 'Estoy perdiendo peso en el primer trimestre por las náuseas. ¿Debo preocuparme?',
    answer: 'La pérdida leve de peso en el primer trimestre es habitual a causa de las náuseas y las aversiones alimentarias. Mientras puedas mantenerte hidratada y no pierdas más de unos pocos kilogramos, generalmente no es motivo de alarma. Si los vómitos son intensos, persistentes o causan deshidratación, consulta con tu médico, ya que puede tratarse de hiperémesis gravídica, que requiere tratamiento.',
  },
  {
    question: '¿Cuál es el ritmo de ganancia de peso ideal por semana?',
    answer: 'A partir de la semana 13, los objetivos semanales son: 0,44-0,58 kg para bajo peso, 0,35-0,50 kg para normopeso, 0,23-0,33 kg para sobrepeso y 0,17-0,27 kg para obesidad. Son valores medios: la ganancia real fluctúa semana a semana por la retención de líquidos, el momento de la comida y otros factores.',
  },
  {
    question: '¿Es seguro hacer ejercicio para controlar la ganancia de peso durante el embarazo?',
    answer: 'Sí, para la mayoría de las mujeres con embarazos sin complicaciones. El ACOG recomienda al menos 150 minutos semanales de actividad aeróbica de intensidad moderada. El ejercicio ayuda a mantener una ganancia saludable, reduce el riesgo de diabetes gestacional y mejora el sueño y el estado de ánimo. Consulta siempre con tu equipo de atención antes de iniciar o continuar una actividad intensa.',
  },
  {
    question: '¿Con qué rapidez se pierde el peso del embarazo tras el parto?',
    answer: 'La mayoría de las mujeres pierden unos 4,5-5,5 kg inmediatamente tras el parto (bebé, placenta y líquido amniótico). Durante la primera semana se produce también pérdida adicional de líquidos. Recuperar el peso previo al embarazo suele llevar de 6 a 12 meses con una dieta saludable y ejercicio gradual. La lactancia materna puede ayudar, ya que consume aproximadamente 300-500 kcal adicionales al día.',
  },
  {
    question: '¿Puede esta calculadora diagnosticar algún problema del embarazo?',
    answer: 'No. Es una estimación educativa basada en guías de nivel poblacional. No puede evaluar el crecimiento fetal, la función placentaria, la presión arterial, el azúcar en sangre ni ningún síntoma médico. Cualquier cambio de peso inexplicado, hinchazón, vómitos persistentes o cualquier preocupación deben consultarse siempre con un obstetra, matrona o profesional sanitario prenatal cualificado.',
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
    name: 'Introduce las medidas previas al embarazo',
    text: 'Añade la altura y el peso previo al embarazo para que la herramienta pueda estimar el IMC pregestacional.',
  },
  {
    name: 'Añade los datos actuales del embarazo',
    text: 'Introduce el peso actual, la semana gestacional y si el embarazo es único o gemelar.',
  },
  {
    name: 'Revisa la curva',
    text: 'Compara la ganancia actual con la banda de ganancia saludable estimada para la semana seleccionada.',
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
  slug: 'calculadora-ganancia-peso-embarazo',
  faqTitle: 'Preguntas frecuentes',
  bibliographyTitle: 'Bibliografía',
  seo: [
    {
      type: 'summary',
      title: 'Datos clave sobre la ganancia de peso en el embarazo',
      items: [
        'La ganancia total recomendada depende exclusivamente del IMC previo al embarazo, no de un número único para todas.',
        'Las guías del IOM establecen rangos de 11 a 20 lb para obesidad y hasta 28 a 40 lb para bajo peso en embarazos únicos.',
        'La ganancia de peso no es lineal: el primer trimestre espera solo 0,5 a 2 kg en total; luego comienza un ritmo semanal más constante.',
        'Los embarazos gemelares tienen objetivos más altos en todas las categorías de IMC.',
        'Esta calculadora es una herramienta educativa. Consulta siempre tus objetivos personales con tu equipo de atención prenatal.',
      ],
    },
    {
      type: 'title',
      text: 'Calculadora de ganancia de peso en el embarazo: entiende tu curva de crecimiento prenatal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ganar el peso adecuado durante el embarazo es uno de los factores más importantes para la salud materna y el desarrollo fetal. Una ganancia insuficiente aumenta el riesgo de parto prematuro, bajo peso al nacer y restricción del crecimiento intrauterino. Un exceso de ganancia se asocia a diabetes gestacional, parto por cesárea, retención de peso posparto y macrosomía. Esta calculadora utiliza las guías establecidas del <strong>IOM (Instituto de Medicina)</strong> y el <strong>ACOG (Colegio Americano de Obstetras y Ginecólogos)</strong> para trazar tu curva personalizada semana a semana.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 semanas', label: 'Duración de un embarazo a término' },
        { value: '4 categorías', label: 'Rangos de ganancia según IMC (IOM)' },
        { value: '±0,5 kg/sem', label: 'Ritmo típico en el segundo trimestre' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona la calculadora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Introduces tu altura y tu peso previo al embarazo para que la herramienta calcule tu IMC pregestacional.',
        'Tu IMC se clasifica en una de las cuatro categorías del IOM: bajo peso, normopeso, sobrepeso u obesidad.',
        'Cada categoría se asocia a un rango de ganancia total recomendado y a un ritmo semanal para el segundo y tercer trimestre.',
        'La calculadora también acepta el peso actual y la semana gestacional para situar dónde estás respecto a la banda estimada.',
        'Los embarazos únicos y gemelares usan objetivos de ganancia separados porque las demandas fetales y placentarias difieren significativamente.',
      ],
    },
    {
      type: 'title',
      text: 'Recomendaciones de ganancia de peso del IOM según el IMC pregestacional',
      level: 3,
    },
    {
      type: 'table',
      headers: ['IMC pregestacional', 'Categoría', 'Ganancia total embarazo único', 'Ganancia total embarazo gemelar', 'Ritmo semanal (sem. 14-40)'],
      rows: [
        ['< 18,5', 'Bajo peso', '12,5-18 kg / 28-40 lb', 'Sin rango IOM establecido', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normopeso', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Sobrepeso', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesidad', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Importante:</strong> Estos son rangos de cribado a nivel poblacional. Tu profesional puede establecer un objetivo personalizado según tu historial nutricional, embarazos anteriores, ecografías de crecimiento fetal o condiciones médicas. Sigue siempre la orientación individualizada de tu clínico.',
    },
    {
      type: 'title',
      text: 'Ganancia de peso trimestre a trimestre',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Primer trimestre (semanas 1 to 13)',
          description: 'Se espera una ganancia modesta. Muchas mujeres ganan muy poco o incluso pierden peso por las náuseas.',
          points: [
            'Objetivo IOM: aproximadamente 0,5 a 2 kg (1 a 4,4 lb) en total',
            'Las náuseas y aversiones alimentarias son frecuentes y pueden limitar la ingesta',
            'El embrión y la placenta aún tienen muy poco peso en esta etapa',
            'Prioriza la calidad alimentaria sobre la cantidad',
          ],
        },
        {
          title: 'Segundo trimestre (semanas 14 to 26)',
          description: 'El período de ganancia semanal más constante. El apetito suele mejorar tras la remisión de las náuseas.',
          points: [
            'Ritmo semanal: aproximadamente 0,23 a 0,58 kg según la categoría de IMC',
            'El feto crece rápidamente en longitud y desarrollo orgánico',
            'El volumen plasmático aumenta, contribuyendo al peso',
            'Las necesidades de hierro y calcio aumentan significativamente',
          ],
        },
        {
          title: 'Tercer trimestre (semanas 27 to 40)',
          description: 'La ganancia continúa a un ritmo similar al del segundo trimestre y puede ralentizarse cerca del parto.',
          points: [
            'La deposición de grasa fetal aumenta sustancialmente a partir de la semana 28',
            'El volumen de líquido amniótico alcanza su máximo alrededor de las semanas 34-36',
            'La hinchazón y retención de líquidos pueden inflar temporalmente las lecturas',
            'Algunas mujeres ganan poco en las últimas 1 a 2 semanas antes del parto',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: '¿A qué se debe realmente el aumento de peso?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Componente', 'Peso aproximado a término'],
      rows: [
        ['Bebé', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Líquido amniótico', '0,8 kg / 1,8 lb'],
        ['Útero (crecimiento)', '0,9 kg / 2 lb'],
        ['Tejido mamario', '0,5 kg / 1,1 lb'],
        ['Aumento del volumen sanguíneo', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Líquido extracelular', '1,5 kg / 3,3 lb'],
        ['Reservas de grasa y proteína materna', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Como muestra este desglose, la mayor parte del peso ganado en un embarazo saludable es tejido funcional: líquido, sangre, feto, placenta y útero, no simplemente grasa. Entender esto ayuda a comprender por qué una ganancia adecuada es necesaria incluso para mujeres con sobrepeso antes del embarazo.',
    },
    {
      type: 'title',
      text: 'Consejos nutricionales para apoyar una ganancia de peso saludable',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Añade aproximadamente 340 kcal al día en el segundo trimestre y 450 kcal al día en el tercero por encima de tus necesidades previas al embarazo.',
        'Prioriza las proteínas: apunta a al menos 70-80 g al día para apoyar el crecimiento del tejido fetal y la expansión del volumen sanguíneo materno.',
        'Incluye alimentos ricos en hierro (carne magra, lentejas, cereales enriquecidos) para prevenir la anemia, más frecuente durante el embarazo.',
        'Las necesidades de calcio aumentan hasta 1.000 mg al día: lácteos, bebidas vegetales enriquecidas, almendras y verduras de hoja verde son buenas fuentes.',
        'Los ácidos grasos omega-3 del pescado azul (2 raciones a la semana) o suplementos de algas apoyan el desarrollo cerebral fetal.',
        'El ácido fólico (400-600 mcg diarios) reduce el riesgo de defectos del tubo neural, especialmente en el primer trimestre.',
        'Mantente bien hidratada: apunta a unos 2-3 litros de líquido al día, más en climas cálidos o si haces ejercicio.',
        'Limita los ultraprocesados, los azúcares añadidos y las grasas trans, que contribuyen a una ganancia gestacional excesiva.',
      ],
    },
    {
      type: 'title',
      text: 'Actividad física y control del peso durante el embarazo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El ACOG recomienda al menos <strong>150 minutos semanales</strong> de actividad aeróbica de intensidad moderada para mujeres con embarazos sin complicaciones. El ejercicio regular favorece una ganancia de peso saludable, reduce el riesgo de diabetes gestacional y preeclampsia, mejora el sueño y alivia el dolor de espalda. Caminar, nadar, el yoga prenatal y la bicicleta estática son bien tolerados durante todo el embarazo. Consulta siempre tu plan de ejercicio con tu profesional antes de iniciar o continuar una actividad intensa.',
    },
    {
      type: 'title',
      text: 'Señales de alerta relacionadas con los cambios de peso en el embarazo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Una ganancia súbita de más de 1 kg en una sola semana, especialmente después de la semana 20, puede indicar retención de líquidos relacionada con la preeclampsia.',
        'La hinchazón rápida de manos, cara o tobillos combinada con dolor de cabeza o cambios visuales requiere atención médica inmediata.',
        'La pérdida de peso persistente más allá del primer trimestre, o la incapacidad de retener alimentos o líquidos, puede indicar hiperémesis gravídica.',
        'Una ganancia de peso muy lenta o estancada a pesar de una ingesta adecuada puede justificar una ecografía de crecimiento fetal para evaluar la restricción del crecimiento intrauterino.',
        'Cualquier cambio de peso inexplicado debe consultarse con un obstetra o matrona en lugar de gestionarse de forma autónoma.',
      ],
    },
    {
      type: 'title',
      text: 'Embarazo único frente a gemelar: diferencias clave',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Embarazo único',
          description: 'Un feto, una placenta. El escenario más habitual con objetivos IOM bien establecidos.',
          points: [
            'Ganancia total: 5 a 18 kg según el IMC previo al embarazo',
            'Ritmo semanal constante de 0,17 a 0,58 kg desde la semana 14',
            'Superávit calórico menor necesario (340-450 kcal/día)',
            'Tasa de parto prematuro: aproximadamente el 10%',
          ],
        },
        {
          title: 'Embarazo gemelar',
          description: 'Dos fetos, con demandas generalmente más altas en todos los aspectos. Los objetivos son mayores en todas las categorías de IMC.',
          points: [
            'Ganancia total: 11 a 25 kg según el IMC previo al embarazo',
            'Ritmo semanal más elevado especialmente en el segundo trimestre',
            'Mayores necesidades calóricas y proteicas',
            'Los equipos clínicos individualizan los objetivos con mayor detalle',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Aspectos frecuentemente malentendidos sobre la ganancia de peso prenatal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'La ganancia de peso no equivale a ganancia de grasa. La mayor parte del peso ganado es sangre, líquido, placenta y bebé, no grasa almacenada.',
        'Comer por dos no significa duplicar la ingesta. La necesidad calórica extra en el segundo trimestre equivale aproximadamente a un vaso de leche y un plátano.',
        'Estar por encima del rango recomendado no implica automáticamente que tú o tu bebé estéis en riesgo; los rangos son directrices estadísticas, no umbrales absolutos.',
        'Las mujeres con obesidad también necesitan ganar peso durante el embarazo. El IOM sigue recomendando una ganancia neta de 5 a 9 kg.',
        'La báscula no es la medida más importante de un embarazo saludable; el crecimiento fetal, la presión arterial, el azúcar en sangre y las valoraciones clínicas importan más.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'IMC (Índice de Masa Corporal)',
          definition: 'Relación entre el peso y el cuadrado de la altura que se utiliza para clasificar las categorías de peso corporal. En la atención prenatal, el IMC previo al embarazo determina el rango de ganancia de peso adecuado.',
        },
        {
          term: 'IOM (Instituto de Medicina)',
          definition: 'Actualmente la Academia Nacional de Medicina. Publicó en 2009 las guías de referencia sobre la ganancia de peso gestacional, ampliamente utilizadas por los clínicos de todo el mundo.',
        },
        {
          term: 'ACOG (Colegio Americano de Obstetras y Ginecólogos)',
          definition: 'Principal organismo profesional estadounidense de atención obstétrica y ginecológica. Respalda las guías de ganancia de peso del IOM y proporciona orientación clínica adicional.',
        },
        {
          term: 'Edad gestacional',
          definition: 'La edad del embarazo medida en semanas desde el primer día de la última menstruación. Un embarazo a término suele ser de 39 a 40 semanas.',
        },
        {
          term: 'Macrosomía',
          definition: 'Afección en la que el bebé crece más de lo esperado, generalmente definida como un peso al nacer superior a 4 kg. Se asocia a una ganancia gestacional excesiva y a la diabetes gestacional.',
        },
        {
          term: 'Restricción del crecimiento intrauterino (RCIU)',
          definition: 'Afección en la que el feto crece más lentamente de lo esperado. Puede estar relacionada con una ganancia de peso insuficiente, problemas placentarios u otros factores de salud materna.',
        },
        {
          term: 'Preeclampsia',
          definition: 'Complicación del embarazo caracterizada por presión arterial elevada y signos de daño en otros sistemas orgánicos. Una ganancia de peso rápida y repentina por retención de líquidos es una de las posibles señales de alerta.',
        },
        {
          term: 'Hiperémesis gravídica',
          definition: 'Náuseas y vómitos intensos y persistentes durante el embarazo, más allá de las náuseas matutinas habituales, que pueden provocar pérdida de peso y deshidratación y requieren tratamiento médico.',
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
    educationalWarningBody: 'Esta calculadora es solo para educación prenatal. No diagnostica la salud materna ni fetal, no sustituye el consejo médico individualizado ni tiene en cuenta síntomas, retención de líquidos, riesgo de diabetes, crecimiento fetal, historial nutricional u objetivos indicados por el clínico.',
    inputsTitle: 'Perfil del embarazo',
    unitsLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Altura (cm)',
    heightFtLabel: 'Altura (ft)',
    heightInLabel: 'Altura (in)',
    preWeightKgLabel: 'Peso previo al embarazo (kg)',
    currentWeightKgLabel: 'Peso actual (kg)',
    preWeightLbLabel: 'Peso previo al embarazo (lb)',
    currentWeightLbLabel: 'Peso actual (lb)',
    weekLabel: 'Semana de gestación',
    pregnancyTypeLabel: 'Tipo de embarazo',
    singletonLabel: 'Único',
    twinsLabel: 'Gemelar',
    bmiCardTitle: 'IMC pregestacional',
    recommendationTitle: 'Ganancia recomendada',
    currentGainTitle: 'Ganancia actual',
    chartTitle: 'Curva de ganancia de peso prenatal',
    weekShortLabel: 'sem',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Rango total',
    weeklyRangeLabel: 'Ritmo semanal a partir de la semana 13',
    firstTrimesterLabel: 'Primer trimestre: ganancia total de unos 0,5 a 2 kg',
    statusBelow: 'Por debajo de la banda estimada',
    statusWithin: 'Dentro de la banda estimada',
    statusAbove: 'Por encima de la banda estimada',
    statusBelowBody: 'Tu ganancia actual está por debajo de la banda estimada para esta semana. Consulta con tu profesional sanitario si conviene revisar la nutrición, las náuseas, el crecimiento fetal o la datación.',
    statusWithinBody: 'Tu ganancia actual está dentro de la banda estimada para esta semana. Sigue con tu plan prenatal individualizado.',
    statusAboveBody: 'Tu ganancia actual está por encima de la banda estimada para esta semana. Revisa la tendencia con tu clínico, sobre todo si la ganancia es brusca o se acompaña de hinchazón u otros síntomas.',
    categoryUnderweight: 'Bajo peso',
    categoryNormal: 'Normopeso',
    categoryOverweight: 'Sobrepeso',
    categoryObesity: 'Obesidad',
    totalGainSuffix: 'ganancia total',
    perWeekSuffix: 'por semana',
    chartLowLabel: 'Banda inferior',
    chartHighLabel: 'Banda superior',
    chartCurrentLabel: 'Actual',
  },
};

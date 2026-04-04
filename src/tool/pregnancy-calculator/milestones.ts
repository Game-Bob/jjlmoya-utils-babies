export interface Milestone {
  analogies: { fruits: string; geek: string; sweets: string };
  size: string;
  biolook: string;
  mom: string;
  partner: string;
  symptoms: string[];
  alerts: string[];
  wonder: string;
}

export const milestones: Record<number, Milestone> = {
  4: {
    analogies: { fruits: 'Semilla de amapola', geek: 'Píxel solitario', sweets: 'Granito de azúcar' },
    size: '~1 mm',
    biolook: 'El blastocisto se implanta en el endometrio. Aparecen las tres capas embrionarias que formarán todos tus órganos.',
    mom: 'Tu cuerpo aún no sabe que está embarazada, pero ya produce hCG. Quizá sientas un leve sangrado de implantación.',
    partner: 'Puede que ella esté más cansada de lo habitual sin saber por qué. Es buen momento para cocinar su cena favorita.',
    symptoms: ['Fatiga temprana', 'Tensión en el pecho', 'Ligero sangrado de implantación'],
    alerts: ['Sangrado abundante rojo', 'Dolor pélvico agudo', 'Fiebre mayor de 38 grados'],
    wonder: 'En este momento se decide si habrá uno o dos bebés.'
  },
  6: {
    analogies: { fruits: 'Lenteja', geek: 'LED parpadeante', sweets: 'Lacasito' },
    size: '~6 mm',
    biolook: 'El corazón empieza a latir de forma irregular pero visible en ecografía. El tubo neural se cierra.',
    mom: 'Las náuseas matutinas pueden comenzar ahora.',
    partner: 'El olfato de ella se vuelve sobrehumano. Evita perfumes fuertes y cocinar pescado en casa.',
    symptoms: ['Náuseas', 'Hipersensibilidad al olfato', 'Somnolencia extrema'],
    alerts: ['Ausencia de latido en eco vaginal', 'Manchado oscuro persistente', 'Vómitos sin retención'],
    wonder: 'Ya tiene la misma estructura cerebral básica que tendrá de adulto.'
  },
  8: {
    analogies: { fruits: 'Frambuesa', geek: 'Memoria USB nano', sweets: 'Gominola de oso' },
    size: '~18 mm',
    biolook: 'Los dedos de manos y pies se separan. Los párpados cubren los ojos. El corazón late 150-170 veces por minuto.',
    mom: 'Tu útero tiene el tamaño de un pomelo. Las náuseas están en su punto álgido.',
    partner: 'Ella puede necesitar dormir 10-12 horas. Asume las tareas del hogar.',
    symptoms: ['Náuseas intensas', 'Aumento de saliva', 'Micción muy frecuente'],
    alerts: ['Vómitos incoercibles', 'Manchado oscuro', 'Dolor lumbar intenso'],
    wonder: 'Si tocas la barriga de ella, él ya reacciona y se mueve.'
  },
  10: {
    analogies: { fruits: 'Kumquat', geek: 'AirPod', sweets: 'Macarón' },
    size: '~31 mm',
    biolook: 'Técnicamente ya es un feto. Todos los órganos existen en forma rudimentaria. Las uñas empiezan a crecer.',
    mom: 'Tu cintura empieza a ensancharse.',
    partner: 'Acompáñala a la primera consulta del primer trimestre.',
    symptoms: ['Hinchazón abdominal', 'Cambios bruscos de humor', 'Piel más sensible al sol'],
    alerts: ['Pérdida de líquido claro', 'Calambres uterinos intensos', 'Fiebre sin causa aparente'],
    wonder: 'Ya tiene su propio tipo de sangre, diferente al de su madre.'
  },
  12: {
    analogies: { fruits: 'Ciruela', geek: 'Ratón inalámbrico', sweets: 'Mochi de fresa' },
    size: '~55 mm',
    biolook: 'Los órganos principales están formados. El bebé empieza a practicar movimientos de deglución.',
    mom: 'El riesgo de aborto espontáneo cae drásticamente.',
    partner: 'El segundo trimestre se acerca. El cansancio de ella mejorará pronto.',
    symptoms: ['Reducción de las náuseas', 'Piel más luminosa o con manchas', 'Dolores de cabeza'],
    alerts: ['Pérdida de líquido', 'Calambres fuertes', 'Fiebre persistente'],
    wonder: 'Sus reflejos ya funcionan: si le tocas la palma de la mano, cierra el puño.'
  },
  16: {
    analogies: { fruits: 'Aguacate', geek: 'Mando de PS5', sweets: 'Berlina de chocolate' },
    size: '~12 cm',
    biolook: 'Las orejas están en su posición final. El esqueleto de cartílago se convierte en hueso.',
    mom: 'Muchas mamás sienten los primeros movimientos. La energía vuelve.',
    partner: 'Puede que empiece a sentir pequeños movimientos.',
    symptoms: ['Ardor de estómago leve', 'Congestión nasal', 'Sueños muy vividos'],
    alerts: ['Ausencia total de movimientos fetales', 'Tensión alta', 'Sangrado vaginal'],
    wonder: 'Si es niña, ya tiene 6 millones de óvulos en sus ovarios.'
  },
  20: {
    analogies: { fruits: 'Plátano', geek: 'Consola de juegos portátil', sweets: 'Tarta de queso entera' },
    size: '~25 cm',
    biolook: 'El bebé ya oye tu voz con claridad. Se chupa el dedo.',
    mom: 'Semana 20, ecuador. Es el momento de la ecografía morfológica.',
    partner: 'Habla al bebé. Ya te oye.',
    symptoms: ['Ardor de estómago frecuente', 'Hinchazón de pies al final del día', 'Picor en la piel del abdomen'],
    alerts: ['Falta de movimientos fetales', 'Tensión arterial alta sostenida', 'Visión borrosa o con destellos'],
    wonder: 'Sus huellas dactilares ya están completas y son únicas en el universo.'
  },
  24: {
    analogies: { fruits: 'Mazorca de maíz', geek: 'Teclado mecánico', sweets: 'Donut gigante' },
    size: '~30 cm',
    biolook: 'Los pulmones producen surfactante. Los ojos empiezan a abrirse.',
    mom: 'Tu útero llega al ombligo. La espalda puede empezar a resentirse.',
    partner: 'Aprende los signos de parto pretérmino.',
    symptoms: ['Dolor de espalda baja', 'Calambres en las piernas por la noche', 'Línea negra en el abdomen'],
    alerts: ['Contracciones regulares antes de la semana 37', 'Pérdida de líquido amniótico', 'Sangrado vaginal'],
    wonder: 'Si nace ahora, con cuidados intensivos, tiene posibilidades de sobrevivir.'
  },
  28: {
    analogies: { fruits: 'Berenjena', geek: 'Tableta gráfica', sweets: 'Tarta de tres pisos' },
    size: '~37 cm',
    biolook: 'El bebé abre y cierra los ojos. Tiene ciclos de sueño y vigilia.',
    mom: 'Empieza el tercer trimestre. La prueba de glucosa es ahora.',
    partner: 'El insomnio puede agotarla. Acompáñala.',
    symptoms: ['Insomnio y dificultad para encontrar postura', 'Hinchazón de manos y pies', 'Contracciones Braxton Hicks esporádicas'],
    alerts: ['Reducción marcada de movimientos fetales', 'Dolor de cabeza intenso que no cede', 'Visión con luces o moscas'],
    wonder: 'Ya tiene un sabor favorito.'
  },
  32: {
    analogies: { fruits: 'Calabaza mediana', geek: 'Teclado de 60%', sweets: 'Caja de bombones entera' },
    size: '~42 cm',
    biolook: 'Practica la respiración. Sus pulmones están casi listos para el mundo exterior.',
    mom: 'Recuperar el aliento es difícil. El bebé presiona el diafragma.',
    partner: 'Prepara la bolsa del hospital.',
    symptoms: ['Falta de aliento al esfuerzo mínimo', 'Hemorroides', 'Pérdida de orina al reír o toser'],
    alerts: ['Picor intenso en palmas de manos y plantas de pies', 'Contracciones regulares', 'Dolor en boca del estómago con náuseas'],
    wonder: 'Ya gira la cabeza hacia la luz que atraviesa la barriga de su madre.'
  },
  36: {
    analogies: { fruits: 'Melón cantalupo', geek: 'Portátil de 15 pulgadas', sweets: 'Tarta de cumpleaños' },
    size: '~47 cm',
    biolook: 'El bebé suele encajarse cabeza abajo. Sus pulmones están casi maduros.',
    mom: 'Sientes presión en la pelvis al encajarse el bebé.',
    partner: 'El plan de parto debería estar listo.',
    symptoms: ['Presión pélvica intensa', 'Vuelta del ardor de estómago', 'Ansiedad anticipatoria'],
    alerts: ['Rotura de bolsa', 'Sangrado vaginal rojo', 'Ausencia de movimientos fetales'],
    wonder: 'Ya tiene las uñas tan largas que podría arañarse al nacer.'
  },
  40: {
    analogies: { fruits: 'Sandía', geek: 'PC de sobremesa completo', sweets: 'Tarta nupcial de 3 pisos' },
    size: '~50 cm',
    biolook: 'Todo está listo. Sus reflejos están coordinados, sus pulmones maduros, su cerebro activo.',
    mom: 'El cansancio es máximo. Eres increíble.',
    partner: 'Hoy puede que sea el día. Mantén el teléfono cargado y la calma que ella necesita de ti.',
    symptoms: ['Presión pélvica muy intensa', 'Pérdida del tapón mucoso', 'Contracciones irregulares'],
    alerts: ['Contracciones regulares cada 5 minutos durante 1 hora', 'Rotura de bolsa', 'Ausencia de movimientos'],
    wonder: 'Su cerebro ha creado 100 mil millones de neuronas durante estos 9 meses.'
  }
};

export const timelineLabels: Record<number, string> = {
  4: 'Implantación', 5: 'Latido', 6: 'Corazón late', 7: 'Ojos y oídos',
  8: 'Dedos', 9: 'Uñas', 10: 'Ya es feto', 11: 'Movimientos',
  12: 'Triple Screening', 13: '2º Trimestre', 14: 'Cuello de útero', 15: 'Patadas',
  16: 'Oye voces', 17: 'Grasa corporal', 18: 'Genitales visibles', 19: 'Vérnix',
  20: 'Eco morfológica', 21: 'Huellas dactilares', 22: 'Labios formados', 23: 'Párpados',
  24: 'Ojos se abren', 25: 'Capilares', 26: 'Reflejos', 27: 'Cerebro activo',
  28: '3er Trimestre', 29: 'Huesos fuertes', 30: 'Médula ósea', 31: 'Surfactante',
  32: 'Practica respirar', 33: 'Inmunidad', 34: 'Sistema nervioso', 35: 'Encajamiento',
  36: 'Pulmones maduros', 37: 'A término', 38: 'Preparado', 39: 'Esperando', 40: 'Llegó el día'
};

export function getMilestone(week: number): Milestone {
  const keys = Object.keys(milestones).map(Number).sort((a, b) => b - a);
  for (const k of keys) {
    if (week >= k) return milestones[k];
  }
  return milestones[4];
}

import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'impfkalender-spanien-babys';
const title = 'Impfkalender für Spanien';
const description = 'Berechnen Sie die exakten Impftermine für Ihr Baby gemäß dem AEP-Kalender 2026.';
const faq = [
  {
    question: 'Was ist der AEP-Impfkalender 2026?',
    answer: 'Es ist der von der Spanischen Vereinigung für Pädiatrie (AEP) für das Jahr 2026 empfohlene Impfkalender. Er enthält alle systematischen und optionalen Impfungen für Babys und Kinder von der Geburt bis zum 14. Lebensjahr.',
  },
  {
    question: 'Ist es obligatorisch, mein Baby nach diesem Kalender zu impfen?',
    answer: 'In Spanien ist das Impfen gesetzlich nicht vorgeschrieben, wird aber dringend empfohlen. Die Impfungen des systematischen Kalenders sind kostenlos und werden in den öffentlichen Gesundheitszentren durchgeführt.',
  },
  {
    question: 'Was passiert, wenn wir eine Dosis verpassen?',
    answer: 'Wenn sich eine Dosis verzögert, muss man nicht von vorne anfangen. Ihr Kinderarzt wird Ihnen sagen, wie Sie den Kalender dort fortsetzen können, wo Sie aufgehört haben. Wichtig ist, das Schema so schnell wie möglich zu vervollständigen.',
  },
  {
    question: 'Kann ich mehrere Impfstoffe am selben Tag verabreichen lassen?',
    answer: 'Ja, es ist üblich und sicher, mehrere Impfungen bei demselben Besuch zu verabreichen. Kombinationsimpfstoffe wie der hexavalente Impfstoff schützen bereits mit einer einzigen Injektion gegen sechs Krankheiten.',
  },
  {
    question: 'Sind Impfungen für Frühgeborene sicher?',
    answer: 'Frühgeborene sollten nach ihrem chronologischen Alter (ab der Geburt) geimpft werden, nicht nach dem korrigierten Alter, sofern der Neonatologe nichts anderes anordnet. Sie haben Priorität, da sie anfälliger sind.',
  },
];
const howTo = [
  {
    name: 'Geben Sie das Geburtsdatum ein',
    text: 'Geben Sie Tag, Monat und Jahr der Geburt Ihres Babys in die entsprechenden Felder ein.',
  },
  {
    name: 'Prüfen Sie den nächsten Termin',
    text: 'Der Rechner zeigt Ihnen automatisch an, wann die nächste Impfung ansteht und welche Impfstoffe erforderlich sind.',
  },
  {
    name: 'Überprüfen Sie den vollständigen Kalender',
    text: 'Öffnen Sie die Abschnitte für vergangene und zukünftige Termine, um den gesamten Impfkalender zu sehen.',
  },
  {
    name: 'Exportieren Sie die Erinnerungen',
    text: 'Klicken Sie auf den Button, um eine .ics-Datei mit allen zukünftigen Terminen herunterzuladen und Ihrem Handy-Kalender hinzuzufügen.',
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
  inLanguage: 'de',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: 'Geburtsdatum des Babys',
    placeholderDD: 'TT',
    placeholderMM: 'MM',
    placeholderAAAA: 'JJJJ',
    emptyMsg: 'Geben Sie Tag, Monat und Jahr der Geburt Ihres Babys ein, um den Impfkalender zu sehen.',
    invalidMsg: 'Das eingegebene Datum ist ungültig.',
    futureMsg: 'Ein Baby kann nicht in der Zukunft geboren sein.',
    labelNextAppointment: 'Nächster berechneter Termin',
    btnAddReminder: 'Erinnerung am Handy hinzufügen',
    btnToday: 'Es ist heute! Impfpass nicht vergessen',
    labelPassed: 'Vergangene Termine',
    labelFuture: 'Zukünftiger Kalender',
    labelStatusOk: 'OK',
    labelStatusPending: 'OFFEN',
    labelSource: 'Quelle: AEP 2026',
    labelShare: 'Diese Daten teilen',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen',
    labelMonth: 'Monat',
    labelMonths: 'Monate',
    labelYear: 'Jahr',
    labelYears: 'Jahre',
    labelDay: 'Tag',
    labelDays: 'Tage',
    labelAnd: 'und',
    labelVaccination: 'Impfung',
    labelAppointment: 'Impftermin',
    vac_hexavalente: 'Hexavalenter Impfstoff',
    vac_neumococo: 'Pneumokokken (VCN15/20)',
    vac_meningococo_b: 'Meningokokken B (Bexsero)',
    vac_rotavirus: 'Rotavirus',
    vac_meningococo_acwy: 'Meningokokken ACWY',
    vac_triple_virica: 'MMR (Masern, Mumps, Röteln)',
    vac_varicela: 'Windpocken',
    vac_gripe: 'Grippe (Saisonal)',
    vac_vph: 'HPV (Papillomaviren)',
    vac_tdpa: 'Tdpa (Tetanus, Diphtherie, Keuchhusten)',
    vac_polio_booster: 'Polio (Auffrischung)',
  },
  seo: [
    { type: 'title', text: 'Impf-Rechner: Wann ist die nächste Impfung für mein Kind?', level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '>95%', label: 'Wirksamkeit' },
      { value: '14', label: 'Gesamtdosen' },
      { value: 'Öffentlich', label: 'Kosten (AEP)' },
      { value: 'Hoch', label: 'Sicherheit' },
    ]},
    { type: 'tip', html: 'Der AEP-Kalender 2026 enthält wichtige Neuerungen wie die Ausweitung der Meningokokken-B-Impfung und die Aktualisierung der Empfehlungen für HPV bei beiden Geschlechtern ab 12 Jahren.' },
    { type: 'title', text: 'Neuerungen im AEP-Kalender 2026', level: 3 },
    { type: 'list', items: [
      'Meningokokken B (Bexsero): konsolidiertes 2+1-Schema mit Dosen im 2., 4. und 12. Monat.',
      'HPV ausgeweitet auf alle Jugendlichen ab 12 Jahren, unabhängig vom Geschlecht.',
      'Pneumokokken: aktualisierte Empfehlung mit VCN15 oder VCN20 je nach regionaler Verfügbarkeit.',
      'Rotavirus: oral verabreichter Impfstoff in allen Regionen im systematischen Kalender enthalten.',
      'Tdpa: Empfohlene Auffrischung mit 6 und 12 Jahren zur Aufrechterhaltung der Immunität gegen Keuchhusten.',
    ]},
    { type: 'title', text: 'Unterschiede zwischen den autonomen Gemeinschaften', level: 3 },
    { type: 'list', items: [
      'Einige Regionen enthalten zusätzliche Impfstoffe, die nicht im nationalen Kalender stehen.',
      'Die Finanzierung des Rotavirus-Impfstoffs variiert je nach Region, obwohl der Trend zur universellen Deckung geht.',
      'Meningokokken ACWY kann je nach regionalem Protokoll in leicht unterschiedlichen Altersstufen verabreicht werden.',
      'Konsultieren Sie immer Ihren Kinderarzt oder das Gesundheitszentrum Ihrer Region, um den aktuellen Kalender zu bestätigen.',
    ]},
    { type: 'title', text: 'So exportieren Sie den Kalender auf Ihr Handy', level: 3 },
    { type: 'list', items: [
      'Geben Sie das Geburtsdatum Ihres Babys in den Rechner ein.',
      'Klicken Sie auf "Erinnerung am Handy hinzufügen", um die .ics-Datei herunterzuladen.',
      'Öffnen Sie die Datei mit Ihrer Kalender-App (Google Calendar, Apple Calendar usw.).',
      'Alle Impftermine werden mit Datum und entsprechenden Impfstoffen gespeichert.',
    ]},
    { type: 'title', text: 'Häufige Nebenwirkungen', level: 3 },
    { type: 'list', items: [
      'Rötung oder Schwellung an der Einstichstelle: verschwindet meist nach 1-2 Tagen.',
      'Leichtes Fieber (37,5–38,5 °C): normal in den ersten 24-48 Stunden.',
      'Reizbarkeit oder Weinen: häufig bei Babys nach den ersten Dosen.',
      'Vorübergehende Schläfrigkeit oder Appetitlosigkeit: erfordert keine Behandlung.',
      'Schwere Reaktionen wie Anaphylaxie sind extrem selten (weniger als 1 von einer Million Dosen).',
    ]},
    { type: 'tip', html: 'Ein gut gesättigtes Baby in bequemer Kleidung erleichtert den Besuch. Nach der Impfung helfen Hautkontakt oder Stillen auf natürliche Weise, Schmerzen und Entzündungen zu lindern.' },
    { type: 'summary', title: 'Was Sie sich merken sollten', items: [
      'Der AEP-Kalender 2026 umfasst 14 Dosen bis zum 12. Lebensjahr für einen vollständigen Schutz.',
      'Die Impfungen im ersten Jahr schützen gleichzeitig gegen bis zu 9 schwere Krankheiten.',
      'Leichte Nebenwirkungen sind normal und verschwinden in 1-2 Tagen.',
      'Sie können alle Impftermine mit einem Klick in Ihren Handy-Kalender exportieren.',
      'Fragen Sie immer Ihren Kinderarzt bei Zweifeln am Kalender Ihrer Region.',
    ]},
  ],
  faqTitle: "Häufig gestellte Fragen",
  faq,
  bibliographyTitle: "Referenzen",
  bibliography: [
    {
      name: 'Asociación Española de Pediatría - Impfkalender 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Spanisches Gesundheitsministerium - Impfkalender',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Immunisierung',
      url: 'https://www.who.int/news-room/fact-sheets/detail/vaccines-and-immunization',
    },
    {
      name: 'CDC - Empfohlener Impfplan für Kinder und Jugendliche',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

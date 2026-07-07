import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Gewichtszunahmerechner für die Schwangerschaft';
const description = 'Schätzen Sie den gesunden Bereich der Gewichtszunahme in der Schwangerschaft pro Schwangerschaftswoche anhand der IOM- und ACOG-Empfehlungen zur pränatalen Gewichtszunahme.';

const faq = [
  {
    question: 'Wie viel Gewicht sollte ich in der Schwangerschaft zunehmen?',
    answer: 'Das hängt vom BMI vor der Schwangerschaft ab. Die IOM-Empfehlungen sehen bei Einlingsschwangerschaften 12,5-18 kg (28-40 lb) bei Untergewicht, 11,5-16 kg (25-35 lb) bei Normalgewicht, 7-11,5 kg (15-25 lb) bei Übergewicht und 5-9 kg (11-20 lb) bei Adipositas vor. Besprechen Sie Ihr persönliches Ziel immer mit Ihrem Prnatalteam.',
  },
  {
    question: 'Gelten für eine Zwillingsschwangerschaft die gleichen Empfehlungen?',
    answer: 'Nein. Zwillingsschwangerschaften haben in allen BMI-Kategorien höhere Zielwerte. Bei Normalgewicht beträgt der empfohlene Bereich 17-25 kg (37-54 lb), bei Übergewicht 14-23 kg (31-50 lb) und bei Adipositas 11-19 kg (25-42 lb). Für untergewichtige Frauen mit Zwillingen gibt es keinen festgelegten IOM-Bereich; das Behandlungsteam individualisiert die Betreuung.',
  },
  {
    question: 'Warum ändert sich die erwartete Gewichtszunahme im ersten Trimester so wenig?',
    answer: 'Die IOM-Empfehlungen erwarten im ersten Trimester eine sehr moderate Gesamtzunahme von etwa 0,5 bis 2 kg, da Fetus, Plazenta und Fruchtwasser noch sehr wenig wiegen. Die gleichmäßigere wöchentliche Zunahme von 0,17 bis 0,58 kg (je nach BMI) beginnt im zweiten Trimester.',
  },
  {
    question: 'Ich verliere im ersten Trimester wegen Übelkeit Gewicht. Sollte ich mir Sorgen machen?',
    answer: 'Leichter Gewichtsverlust im ersten Trimester ist wegen Übelkeit und Lebensmittelaversionen häufig. Solange Sie hydratisiert bleiben und nicht mehr als einige Kilogramm verlieren, ist das in der Regel kein Anlass zur Sorge. Bei schwerem, anhaltendem Erbrechen mit Dehydrierung wenden Sie sich an Ihre Ärztin oder Ihren Arzt - es könnte sich um Hyperemesis gravidarum handeln.',
  },
  {
    question: 'Wie hoch ist die ideale wöchentliche Gewichtszunahme?',
    answer: 'Ab Woche 13 gelten folgende Wochenziele: 0,44-0,58 kg bei Untergewicht, 0,35-0,50 kg bei Normalgewicht, 0,23-0,33 kg bei Übergewicht und 0,17-0,27 kg bei Adipositas. Dies sind Durchschnittswerte - die tatsächliche Zunahme schwankt von Woche zu Woche.',
  },
  {
    question: 'Ist Sport zur Kontrolle der Gewichtszunahme in der Schwangerschaft sicher?',
    answer: 'Ja, für die meisten Frauen mit unkomplizierten Schwangerschaften. Das ACOG empfiehlt mindestens 150 Minuten moderater Ausdaueraktivität pro Woche. Bewegung fördert eine gesunde Gewichtszunahme, reduziert das Risiko für Gestationsdiabetes und verbessert Schlaf und Stimmung. Besprechen Sie Ihren Sportplan immer mit Ihrem Behandlungsteam.',
  },
  {
    question: 'Wie schnell verliert man das Schwangerschaftsgewicht nach der Geburt?',
    answer: 'Die meisten Frauen verlieren unmittelbar nach der Geburt etwa 4,5-5,5 kg (Kind, Plazenta, Fruchtwasser). In der ersten Woche folgt ein weiterer Flüssigkeitsverlust. Die Rückkehr zum Ausgangsgewicht dauert mit gesunder Ernährung und schrittweiser Bewegung in der Regel 6 bis 12 Monate. Stillen kann helfen, da es etwa 300-500 kcal täglich zusätzlich verbraucht.',
  },
  {
    question: 'Kann dieser Rechner ein Schwangerschaftsproblem diagnostizieren?',
    answer: 'Nein. Es handelt sich um eine Bildungsschätzung auf Basis bevölkerungsweiter Leitlinien. Er kann fetales Wachstum, Plazentafunktion, Blutdruck, Blutzucker oder medizinische Symptome nicht beurteilen. Plötzliche Gewichtsveränderungen, Schwellungen, anhaltendes Erbrechen oder jegliche Bedenken sollten immer mit einem Frauenarzt, einer Hebamme oder einer qualifizierten pränatalen Fachkraft besprochen werden.',
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
    name: 'Messwerte vor der Schwangerschaft eingeben',
    text: 'Geben Sie Größe und Gewicht vor der Schwangerschaft ein, damit das Tool den prägraviden BMI schätzen kann.',
  },
  {
    name: 'Aktuelle Schwangerschaftsdaten ergänzen',
    text: 'Geben Sie das aktuelle Gewicht, die Schwangerschaftswoche und an, ob es sich um eine Einlings- oder Zwillingsschwangerschaft handelt.',
  },
  {
    name: 'Kurve auswerten',
    text: 'Vergleichen Sie die aktuelle Zunahme mit dem geschätzten gesunden Zunahmeband für die ausgewählte Woche.',
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
  slug: 'gewichtszunahme-schwangerschaft-rechner',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Literaturverzeichnis',
  seo: [
    {
      type: 'summary',
      title: 'Wichtige Fakten zur Gewichtszunahme in der Schwangerschaft',
      items: [
        'Die empfohlene Gesamtzunahme hängt ausschließlich vom BMI vor der Schwangerschaft ab, nicht von einem einheitlichen Wert.',
        'Die IOM-Empfehlungen reichen von 11 bis 20 lb bei Adipositas bis zu 28 bis 40 lb bei Untergewicht in Einlingsschwangerschaften.',
        'Die Gewichtszunahme verläuft nicht linear: Im ersten Trimester werden nur 0,5 bis 2 kg erwartet, danach beginnt ein gleichmäßigerer wöchentlicher Rhythmus.',
        'Zwillingsschwangerschaften haben in allen BMI-Kategorien höhere Zielwerte.',
        'Dieser Rechner ist ein Bildungswerkzeug. Besprechen Sie Ihre persönlichen Ziele immer mit Ihrem Pränatalteam.',
      ],
    },
    {
      type: 'title',
      text: 'Gewichtszunahmerechner für die Schwangerschaft: Ihre pränatale Wachstumskurve verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die richtige Gewichtszunahme in der Schwangerschaft ist einer der wichtigsten Faktoren für die mütterliche Gesundheit und die fetale Entwicklung. Zu geringe Zunahme erhöht das Risiko für Frühgeburt, niedriges Geburtsgewicht und intrauterine Wachstumsretardierung. Zu hohe Zunahme ist mit Gestationsdiabetes, Kaiserschnitt, postpartaler Gewichtsretention und Makrosomie verbunden. Dieser Rechner verwendet die Leitlinien des <strong>IOM (Institute of Medicine)</strong> und des <strong>ACOG (American College of Obstetricians and Gynecologists)</strong>, um Ihre individuelle wochenweise Kurve zu erstellen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 Wochen', label: 'Dauer einer Termingeburt' },
        { value: '4 Kategorien', label: 'BMI-basierte Zunahmebereiche (IOM)' },
        { value: '±0,5 kg/Wo.', label: 'Typisches Tempo im 2. Trimester' },
      ],
    },
    {
      type: 'title',
      text: 'So funktioniert der Rechner',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sie geben Größe und Gewicht vor der Schwangerschaft ein, damit das Tool Ihren prägraviden BMI berechnen kann.',
        'Ihr BMI wird einer der vier IOM-Kategorien zugeordnet: Untergewicht, Normalgewicht, Übergewicht oder Adipositas.',
        'Jede Kategorie entspricht einem empfohlenen Gesamtzunahmebereich und einem wöchentlichen Tempo für das zweite und dritte Trimester.',
        'Der Rechner berücksichtigt auch aktuelles Gewicht und Schwangerschaftswoche, um Ihren Stand relativ zum geschätzten Band darzustellen.',
        'Einlings- und Zwillingsschwangerschaften verwenden separate Zielwerte, da sich die fetalen und plazentaren Anforderungen erheblich unterscheiden.',
      ],
    },
    {
      type: 'title',
      text: 'IOM-Empfehlungen zur Gewichtszunahme nach prägraviärem BMI',
      level: 3,
    },
    {
      type: 'table',
      headers: ['BMI vor Schwangerschaft', 'Kategorie', 'Gesamtzunahme Einling', 'Gesamtzunahme Zwillinge', 'Wöchentliches Tempo (SSW 14-40)'],
      rows: [
        ['< 18,5', 'Untergewicht', '12,5-18 kg / 28-40 lb', 'Kein IOM-Bereich festgelegt', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normalgewicht', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Übergewicht', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Adipositas', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Wichtig:</strong> Dies sind bevölkerungsbasierte Screening-Bereiche. Ihrärztin oder Ihr Arzt kann ein persönliches Ziel festlegen, das auf Ihrer Ernährungsanamnese, früheren Schwangerschaften, fetalen Wachstumsuntersuchungen oder medizinischen Erkrankungen basiert. Folgen Sie stets der individualisierten Anleitung Ihres klinischen Teams.',
    },
    {
      type: 'title',
      text: 'Gewichtszunahme Trimester für Trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Erstes Trimester (Wochen 1 to 13)',
          description: 'Eine moderate Zunahme wird erwartet. Viele Frauen nehmen wegen Übelkeit sehr wenig oder gar nicht zu.',
          points: [
            'IOM-Ziel: ca. 0,5 bis 2 kg (1 bis 4,4 lb) gesamt',
            'Übelkeit und Nahrungsabneigungen sind häufig und können die Nahrungsaufnahme einschränken',
            'Embryo und Plazenta wiegen in diesem Stadium noch sehr wenig',
            'Qualität der Ernährung hat Vorrang vor der Menge',
          ],
        },
        {
          title: 'Zweites Trimester (Wochen 14 to 26)',
          description: 'Die Phase der gleichmäßigsten wöchentlichen Zunahme. Der Appetit verbessert sich meist nach Abklingen der Übelkeit.',
          points: [
            'Wöchentliches Tempo: ca. 0,23 bis 0,58 kg je nach BMI-Kategorie',
            'Der Fetus wächst rasch in Länge und Organentwicklung',
            'Das Plasmavolumen nimmt zu und trägt zum Gewicht bei',
            'Eisen- und Calciumbedarf steigt deutlich an',
          ],
        },
        {
          title: 'Drittes Trimester (Wochen 27 to 40)',
          description: 'Die Zunahme setzt sich in ähnlichem Tempo fort und kann kurz vor dem Geburtstermin nachlassen.',
          points: [
            'Die fetale Fetteinlagerung nimmt ab Woche 28 deutlich zu',
            'Das Fruchtwasservolumen erreicht um Woche 34-36 seinen Höchstwert',
            'Schwellungen und Flüssigkeitsretention können Messwerte vorübergehend verfälschen',
            'Manche Frauen nehmen in den letzten 1 bis 2 Wochen vor der Geburt kaum zu',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Woraus besteht die Gewichtszunahme wirklich?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Komponente', 'Ungefähres Gewicht zum Termin'],
      rows: [
        ['Baby', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Plazenta', '0,7 kg / 1,5 lb'],
        ['Fruchtwasser', '0,8 kg / 1,8 lb'],
        ['Gebärmutter (Wachstum)', '0,9 kg / 2 lb'],
        ['Brustgewebe', '0,5 kg / 1,1 lb'],
        ['Erhöhtes Blutvolumen', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Extrazelluare Flüssigkeit', '1,5 kg / 3,3 lb'],
        ['Mütterliche Fett- und Eiweißreserven', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Wie diese Aufschlüsselung zeigt, besteht der Großteil des in einer gesunden Schwangerschaft zugenommenen Gewichts aus funktionellem Gewebe - Flüssigkeit, Blut, Fetus, Plazenta und Gebärmutter - und nicht einfach aus Fett. Dies verdeutlicht, warum eine angemessene Zunahme auch bei Übergewicht vor der Schwangerschaft notwendig ist.',
    },
    {
      type: 'title',
      text: 'Ernährungstipps für eine gesunde Gewichtszunahme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Fügen Sie im zweiten Trimester ca. 340 kcal/Tag und im dritten ca. 450 kcal/Tag über Ihren Grundbedarf hinzu.',
        'Priorisieren Sie Protein: mindestens 70-80 g täglich für fetales Gewebewachstum und Blutvolumenausdehnung.',
        'Essen Sie eisenreiche Lebensmittel (mageres Fleisch, Linsen, angereicherte Getreideprodukte), um einer Schwangerschaftsanämie vorzubeugen.',
        'Der Calciumbedarf steigt auf 1.000 mg/Tag - Milchprodukte, angereicherte Pflanzenmilch, Mandeln und Blattgemüse sind gute Quellen.',
        'Omega-3-Fettsäuren aus fettem Fisch (2 Portionen pro Woche) oder Algenpräparaten unterstützen die fetale Gehirnentwicklung.',
        'Folsaüure (400-600 mcg täglich) reduziert das Risiko von Neuralrohrdefekten, besonders im ersten Trimester.',
        'Trinken Sie ausreichend - etwa 2-3 Liter Flüssigkeit täglich, mehr bei Wärme oder Sport.',
        'Begrenzen Sie hochverarbeitete Lebensmittel, Zucker und Transfette, die zur übermäßigen Gewichtszunahme beitragen.',
      ],
    },
    {
      type: 'title',
      text: 'Körperliche Aktivität und Gewichtsmanagement in der Schwangerschaft',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Das ACOG empfiehlt mindestens <strong>150 Minuten moderater Ausdaueraktivität pro Woche</strong> für Frauen mit unkomplizierten Schwangerschaften. Regelmäßige Bewegung fördert eine gesunde Gewichtszunahme, reduziert das Risiko für Gestationsdiabetes und Präeklampsie, verbessert den Schlaf und lindert Rückenschmerzen. Spazierengänge, Schwimmen, pränatales Yoga und Heimradfahren sind während der gesamten Schwangerschaft gut verträglich. Besprechen Sie Ihren Sportplan stets mit Ihrem Behandlungsteam.',
    },
    {
      type: 'title',
      text: 'Warnzeichen im Zusammenhang mit Gewichtsveränderungen in der Schwangerschaft',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Eine plötzliche Zunahme von mehr als 1 kg in einer Woche, besonders nach Woche 20, kann auf Flüssigkeitsretention durch Präeklampsie hinweisen.',
        'Rasche Schwellungen an Händen, Gesicht oder Knöcheln mit Kopfschmerzen oder Sehänderungen erfordern sofortige ärztliche Versorgung.',
        'Anhaltender Gewichtsverlust nach dem ersten Trimester oder die Unfähigkeit, Nahrung oder Flüssigkeit zu behalten, kann Hyperemesis gravidarum sein.',
        'Sehr langsame oder stagnierende Gewichtszunahme trotz ausreichender Nahrungsaufnahme kann eine fetale Wachstumsuntersuchung erfordern.',
        'Jede unerklärliche Gewichtsveränderung sollte mit einem Frauenarzt oder einer Hebamme besprochen werden, statt sie selbst zu managen.',
      ],
    },
    {
      type: 'title',
      text: 'Einlings- vs. Zwillingsschwangerschaft: Wichtigste Unterschiede',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Einlingsschwangerschaft',
          description: 'Ein Fetus, eine Plazenta. Das häufigste Szenario mit gut etablierten IOM-Zielwerten.',
          points: [
            'Gesamtzunahme: 5 bis 18 kg je nach prägraviärem BMI',
            'Gleichmäßiges wöchentliches Tempo von 0,17 bis 0,58 kg ab Woche 14',
            'Geringerer Kalorienüberschuss erforderlich (340-450 kcal/Tag)',
            'Frühgeburtenrate: ca. 10 %',
          ],
        },
        {
          title: 'Zwillingsschwangerschaft',
          description: 'Zwei Feten, höhere Anforderungen auf allen Ebenen. Die Zielwerte liegen in allen BMI-Kategorien höher.',
          points: [
            'Gesamtzunahme: 11 bis 25 kg je nach prägraviärem BMI',
            'Höheres wöchentliches Tempo, besonders im zweiten Trimester',
            'Höherer Kalorien- und Proteinbedarf',
            'Klinische Teams individualisieren die Zielwerte stärker',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Häufig missverstandene Aspekte der pränatalen Gewichtszunahme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gewichtszunahme bedeutet nicht gleich Fettzunahme. Der größte Teil ist Blut, Flüssigkeit, Plazenta und Baby - kein gespeichertes Fett.',
        'Für zwei essen bedeutet nicht, die Nahrungsaufnahme zu verdoppeln. Der zusätzliche Kalorienbedarf im zweiten Trimester entspricht etwa einem Glas Milch und einer Banane.',
        'Über dem empfohlenen Bereich zu liegen bedeutet nicht automatisch, dass Sie oder Ihr Baby gefährdet sind - die Bereiche sind statistische Leitlinien, keine absoluten Schwellenwerte.',
        'Frauen mit Adipositas müssen in der Schwangerschaft trotzdem zunehmen. Das IOM empfiehlt eine Nettozunahme von 5 bis 9 kg.',
        'Die Waage ist nicht das wichtigste Maß für eine gesunde Schwangerschaft - fetales Wachstum, Blutdruck, Blutzucker und klinische Beurteilungen sind wichtiger.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Body-Mass-Index)',
          definition: 'Das Verhältnis von Gewicht zum Quadrat der Körpergröße zur Klassifikation von Körpergewichtskategorien. In der Prnatalversorgung bestimmt der BMI vor der Schwangerschaft den angemessenen Gewichtszunahmebereich.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Heute die National Academy of Medicine. Veröffentlichte 2009 die maßgeblichen Leitlinien zur Gewichtszunahme in der Schwangerschaft, die weltweit von Kliniker:innen genutzt werden.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Die führende US-amerikanische Fachgesellschaft für Gebärtshilfe und Gynäkologie. Unterstützt die IOM-Leitlinien zur Gewichtszunahme und bietet zusätzliche klinische Orientierung.',
        },
        {
          term: 'Gestationsalter',
          definition: 'Das Alter der Schwangerschaft in Wochen ab dem ersten Tag der letzten Menstruation. Eine Termingeburt dauert in der Regel 39 bis 40 Wochen.',
        },
        {
          term: 'Makrosomie',
          definition: 'Ein Zustand, bei dem das Baby größer als erwartet wächst, in der Regel definiert als Geburtsgewicht über 4 kg. Mit übermäßiger Gewichtszunahme und Gestationsdiabetes assoziiert.',
        },
        {
          term: 'Intrauterine Wachstumsretardierung (IUGR)',
          definition: 'Ein Zustand, bei dem der Fetus langsamer als erwartet wächst. Kann mit ungenger Gewichtszunahme, Plazentaproblemen oder anderen mütterlichen Gesundheitsfaktoren zusammenhängen.',
        },
        {
          term: 'Präeklampsie',
          definition: 'Eine Schwangerschaftskomplikation mit Bluthochdruck und Zeichen von Organschäden. Plötzliche rasche Gewichtszunahme durch Flüssigkeitsretention ist ein mögliches Warnzeichen.',
        },
        {
          term: 'Hyperemesis gravidarum',
          definition: 'Schwere, anhaltende Übelkeit und Erbrechen in der Schwangerschaft, über normale Morgenbelkeit hinaus, die zu Gewichtsverlust und Dehydrierung führen und ärztliche Behandlung erfordern kann.',
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
    educationalWarningTitle: 'Pädagogischer Hinweis',
    educationalWarningBody: 'Dieser Rechner dient ausschließlich der pränatalen Aufklärung. Er stellt keine Diagnose zur mütterlichen oder fetalen Gesundheit, ersetzt keine individuelle medizinische Beratung und berücksichtigt keine Symptome, Flüssigkeitsretention, Diabetesrisiko, fetales Wachstum, Ernährungsanamnese oder ärztlich vorgegebene Ziele.',
    inputsTitle: 'Schwangerschaftsprofil',
    unitsLabel: 'Einheiten',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Größe (cm)',
    heightFtLabel: 'Größe (ft)',
    heightInLabel: 'Größe (in)',
    preWeightKgLabel: 'Gewicht vor Schwangerschaft (kg)',
    currentWeightKgLabel: 'Aktuelles Gewicht (kg)',
    preWeightLbLabel: 'Gewicht vor Schwangerschaft (lb)',
    currentWeightLbLabel: 'Aktuelles Gewicht (lb)',
    weekLabel: 'Schwangerschaftswoche',
    pregnancyTypeLabel: 'Schwangerschaftstyp',
    singletonLabel: 'Einling',
    twinsLabel: 'Zwillinge',
    bmiCardTitle: 'BMI vor Schwangerschaft',
    recommendationTitle: 'Empfohlene Zunahme',
    currentGainTitle: 'Aktuelle Zunahme',
    chartTitle: 'Pränatale Gewichtszunahmekurve',
    weekShortLabel: 'SSW',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Gesamtbereich',
    weeklyRangeLabel: 'Wöchentliches Tempo nach Woche 13',
    firstTrimesterLabel: 'Erstes Trimester: etwa 0,5 bis 2 kg Gesamtzunahme',
    statusBelow: 'Unter dem geschätzten Band',
    statusWithin: 'Im geschätzten Band',
    statusAbove: 'Über dem geschätzten Band',
    statusBelowBody: 'Ihre aktuelle Zunahme liegt unter dem geschätzten Band für diese Woche. Besprechen Sie mit Ihrer pränatalen Fachkraft, ob Ernährung, Übelkeit, fetales Wachstum oder die Datierung überprüft werden sollten.',
    statusWithinBody: 'Ihre aktuelle Zunahme liegt im geschätzten Band für diese Woche. Folgen Sie weiterhin Ihrem individuellen pränatalen Plan.',
    statusAboveBody: 'Ihre aktuelle Zunahme liegt über dem geschätzten Band für diese Woche. Besprechen Sie den Trend mit Ihrer Fachkraft, insbesondere bei plötzlicher Zunahme oder begleitenden Schwellungen oder Symptomen.',
    categoryUnderweight: 'Untergewicht',
    categoryNormal: 'Normalgewicht',
    categoryOverweight: 'Übergewicht',
    categoryObesity: 'Adipositas',
    totalGainSuffix: 'Gesamtzunahme',
    perWeekSuffix: 'pro Woche',
    chartLowLabel: 'Unteres Band',
    chartHighLabel: 'Oberes Band',
    chartCurrentLabel: 'Aktuell',
  },
};

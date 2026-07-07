import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Wehentimer';
export const description = 'Erfassen Sie Dauer und Abstand der Wehen mit einer großen Touch-Schaltfläche, geführter Atmung, Verlauf und 5-1-1-Muster-Alarm.';

export const faq = [
  {
    question: 'Was ist die 5-1-1-Regel für Wehen?',
    answer: 'Die 5-1-1-Regel bedeutet in der Regel, dass die Wehen etwa 5 Minuten auseinander liegen, etwa 1 Minute dauern und über rund 1 Stunde anhalten. Viele Geburtsteams nutzen sie als praktisches Signal, um sich Rat zu holen, aber Ihr eigener Plan kann davon abweichen.',
  },
  {
    question: 'Wann sollte ich meine Hebamme oder das Krankenhaus kontaktieren?',
    answer: 'Kontaktieren Sie Ihr Geburtsteam, wenn die Wehen regelmäßig und intensiv werden oder den zeitlichen Vorgaben entsprechen, die man Ihnen gegeben hat. Rufen Sie dringend an bei starken Blutungen, verminderter Kindsbewegung, Fieber, starken Schmerzen, Blasensprung mit Bedenken oder wenn Sie das Gefühl haben, dass etwas nicht stimmt.',
  },
  {
    question: 'Diagnostiziert dieser Timer die aktive Geburtsphase?',
    answer: 'Nein. Er erfasst Zeiten und hebt ein häufiges Wehenmuster hervor. Zervixveränderungen, die Kindslage, der Membranstatus, Symptome und Ihre klinische Vorgeschichte müssen von einer qualifizierten Fachkraft beurteilt werden.',
  },
  {
    question: 'Wie wird die Wehenfrequenz berechnet?',
    answer: 'Die Frequenz wird vom Beginn einer Wehe bis zum Beginn der vorherigen Wehe berechnet. Die Dauer wird vom Moment des Drückens von Start bis zum Drücken von Stopp gemessen.',
  },
  {
    question: 'Kann ich den Timer bei Vorwehen verwenden?',
    answer: 'Ja. Er kann Ihnen helfen zu erkennen, ob die Wehen regelmäßiger werden oder wieder nachlassen. Bleiben die Wehen unregelmäßig, ändern sich durch Ruhe oder Trinken oder nehmen nicht an Intensität zu, handelt es sich möglicherweise immer noch um Vorwehen, aber Ihr Betreuungsteam kann Sie dabei beraten.',
  },
  {
    question: 'Warum ist eine geführte Atmung enthalten?',
    answer: 'Langsames, gleichmäßiges Atmen kann helfen, Anspannung zu reduzieren, die Aufmerksamkeit zu fokussieren und die Bewältigung während jeder Wehe zu unterstützen. Die Animation ist nur eine Komforthilfe und ersetzt keine Geburtsbegleitung.',
  },
  {
    question: 'Sollte ich auf 5-1-1 warten, wenn es nicht mein erstes Baby ist?',
    answer: 'Nicht immer. Die Geburt kann nach einer vorherigen vaginalen Entbindung schneller voranschreiten. Folgen Sie dem Plan Ihrer Hebamme oder Ihres Geburtshelfers, insbesondere bei einer Risikoschwangerschaft, wenn Sie weit vom Krankenhaus entfernt wohnen oder frühere schnelle Geburten hatten.',
  },
  {
    question: 'Wird mein Wehenverlauf gespeichert?',
    answer: 'Der Timer speichert die aktuellen Aufzeichnungen in Ihrem Browser, sodass Sie die Seite neu laden können, ohne die Sitzung zu verlieren. Verwenden Sie die Zurücksetzen-Schaltfläche, um den lokalen Verlauf zu löschen.',
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
    name: 'Zeitmessung starten',
    text: 'Drücken Sie die Haupttaste, wenn eine Wehe beginnt.',
  },
  {
    name: 'Atemführung nutzen',
    text: 'Folgen Sie dem sich ausdehnenden und zusammenziehenden Kreis, während die Wehe aktiv ist.',
  },
  {
    name: 'Zeitmessung beenden',
    text: 'Drücken Sie die Taste erneut, wenn die Wehe endet, damit Dauer und Abstand erfasst werden.',
  },
  {
    name: 'Muster überprüfen',
    text: 'Sehen Sie sich den Verlauf und das Alarmfeld an, um zu entscheiden, ob Sie Ihr Geburtsteam kontaktieren sollten.',
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
  slug: 'wehentimer',
  faqTitle: 'Häufig gestellte Fragen',
  bibliographyTitle: 'Literaturverzeichnis',
  seo: [
    {
      type: 'summary',
      title: 'Wichtige Fakten zur Wehenmessung',
      items: [
        'Die Dauer wird vom Beginn einer Wehe bis zu ihrem Ende gemessen.',
        'Die Frequenz wird vom Beginn einer Wehe bis zum Beginn der nächsten gemessen.',
        'Das 5-1-1-Muster bedeutet etwa 5 Minuten Abstand, 1 Minute Dauer, über 1 Stunde.',
        'Die Wehenmessung unterstützt die Entscheidungsfindung, kann aber die Zervixdilatation oder die aktive Geburtsphase nicht allein bestätigen.',
        'Befolgen Sie stets die Anweisungen Ihrer eigenen Hebamme, Ihres Geburtshelfers oder Ihrer Geburtsklinik.',
      ],
    },
    {
      type: 'title',
      text: 'Wehentimer: Dauer, Frequenz und 5-1-1-Muster erfassen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Wehentimer hilft Familien, einen stressigen, schwer einschätzbaren Moment in eine klare Aufzeichnung zu verwandeln. In der späten Schwangerschaft fragt man sich häufig, ob die Wehen noch unregelmäßige Übungswehen, Vorwehen, frühe Wehen oder ein Muster sind, das einen Anruf in der Geburtsklinik rechtfertigt. Durch Drücken von Start bei Wehenbeginn und Stopp bei Wehenende berechnet dieses Tool die <strong>Dauer</strong> in Sekunden und die <strong>Frequenz</strong> in Minuten vom Beginn einer Wehe bis zum Beginn der nächsten.',
    },
    {
      type: 'paragraph',
      html: 'Das Ziel ist es nicht, die Geburt zu diagnostizieren. Das Ziel ist es, Ihnen zu helfen, das Geschehen in konkreten Begriffen zu beschreiben: wie lange jede Wehe dauert, wie nah sie beieinander liegen, ob das Muster stärker wird und ob es lange genug konstant geblieben ist, um gängigen Richtlinien wie der 5-1-1-Regel zu entsprechen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Übliches Frequenzsignal' },
        { value: '60 s', label: 'Typische 5-1-1-Dauer' },
        { value: '1 Std.', label: 'Zeitfenster für Musterstabilität' },
      ],
    },
    {
      type: 'title',
      text: 'Wie ist der 5-1-1-Alarm zu interpretieren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die 5-1-1-Regel ist eine weit verbreitete Faustregel: Die Wehen liegen etwa 5 Minuten auseinander, dauern etwa 1 Minute und halten über rund 1 Stunde an. Viele Geburtsteams nutzen dieses Muster als praktisches Signal, um individuelle Beratung einzuholen, insbesondere bei der ersten Geburt. Dieser Timer hebt das Muster hervor, wenn die letzten Wehen 5 Minuten oder weniger auseinander liegen, mindestens 60 Sekunden dauern und über die Sitzung hinweg angehalten haben.',
    },
    {
      type: 'table',
      headers: ['Beobachtetes Muster', 'Was es bedeuten könnte', 'Sinnvoller nächster Schritt'],
      rows: [
        ['Unregelmäßiger Abstand, variable Länge', 'Vorwehen oder frühe Wehen sind möglich', 'Ruhen, trinken, Position wechseln und weiter beobachten, sofern keine Warnsymptome auftreten'],
        ['Abstände werden kürzer, aber noch unter 60 Sekunden', 'Die Geburt baut sich möglicherweise auf, entspricht aber noch nicht 5-1-1', 'Weiter messen und den Anweisungen Ihres eigenen Geburtsplans folgen'],
        ['Etwa 5 Minuten Abstand, 60 Sekunden Dauer, über etwa 1 Stunde', 'Übliches 5-1-1-Anrufmuster', 'Kontaktieren Sie Ihre Hebamme, Ihren Geburtshelfer oder die Geburtsklinik für eine persönliche Beratung'],
        ['Plötzlich intensive Wehen, Druckgefühl oder Pressdrang', 'Die Geburt schreitet möglicherweise schnell voran', 'Rufen Sie sofort an, besonders wenn es nicht Ihr erstes Baby ist'],
      ],
    },
    {
      type: 'title',
      text: 'Wie man Wehen richtig misst',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Drücken Sie Start zu Beginn des Ziehens, Krampfens oder der wellenartigen Empfindung.',
        'Drücken Sie Stopp, wenn die Wehe deutlich nachlässt und Sie sich wieder entspannen können.',
        'Messen Sie die Frequenz nicht vom Ende einer Wehe bis zum Beginn der nächsten. Klinisch wird die Frequenz üblicherweise von Beginn zu Beginn gezählt.',
        'Erfassen Sie mehrere Wehen, bevor Sie das Muster interpretieren, da eine einzelne Wehe irreführend sein kann.',
        'Verwenden Sie zuerst die Hinweise Ihres Geburtsteams, falls man Ihnen einen anderen Schwellenwert als 5-1-1 genannt hat.',
      ],
    },
    {
      type: 'title',
      text: 'Vorwehen versus aktive Geburtsmuster',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Häufig Vorwehen oder frühe Wehen',
          description: 'Die Wehen können unangenehm und echt sein, aber das Muster bewegt sich möglicherweise noch nicht stetig auf die Geburt zu.',
          points: [
            'Die Abstände springen, anstatt sich kontinuierlich zu verkürzen',
            'Die Wehen können durch Ruhe, Trinken, ein Bad oder Positionswechsel nachlassen',
            'Die Intensität bleibt möglicherweise ähnlich, anstatt mit der Zeit zuzunehmen',
            'Der Muttermund verändert sich möglicherweise nur langsam oder noch kaum, was nur eine Fachkraft beurteilen kann',
          ],
        },
        {
          title: 'Eher auf aktive Geburt hindeutend',
          description: 'Das Muster wird regelmäßiger, schwerer zu durchsprechen und nimmt zunehmend an Stärke zu.',
          points: [
            'Die Wehen rücken über mehrere Aufzeichnungen hinweg näher zusammen',
            'Jede Wehe dauert etwa 45 bis 70 Sekunden oder länger',
            'Sie müssen innehalten, atmen oder sich während des Höhepunkts konzentrieren',
            'Das Muster hält auch nach Ruhe, Trinken oder Positionswechsel an',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wann Sie nicht auf den Timer warten sollten',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Sicherheitshinweis:</strong> Warten Sie nicht auf einen Timer-Alarm, wenn Sie starke Blutungen, verminderte Kindsbewegungen, starke Kopfschmerzen, Fieber, grünes oder übelriechendes Fruchtwasser, intensive Dauerschmerzen, Anzeichen einer Präeklampsie oder sonstige dringende Bedenken haben. Rufen Sie Ihr Geburtsteam oder den Notdienst gemäß Ihren örtlichen Anweisungen an.',
    },
    {
      type: 'title',
      text: 'Was der Verlauf anzeigt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Startzeit: die Uhrzeit, zu der die Wehe begann.',
        'Dauer: Stoppzeit minus Startzeit, auf Sekunden gerundet.',
        'Intervall: aktuelle Startzeit minus die Startzeit der vorherigen Wehe, in Minuten angezeigt.',
        'Aktueller Trend: ob die Wehen auseinandergehen, unregelmäßig bleiben oder regelmäßiger werden.',
      ],
    },
    {
      type: 'title',
      text: 'Häufige Messfehler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Den Timer auf dem Höhepunkt stoppen, anstatt wenn die Wehe vollständig abklingt.',
        'Zu spät starten, weil die Wehe anfangs mild war, sodass die Dauer kürzer erscheint.',
        'Nur die stärksten Wehen zählen und die kleineren dazwischen ignorieren.',
        'Anzunehmen, dass 5-1-1 immer eine sofortige Krankenhauseinweisung bedeutet. Meist bedeutet es: Rufen Sie zur Beratung an, nicht die aktive Geburt selbst diagnostizieren.',
        'Bei einer zweiten oder späteren Geburt zu lange zu warten, da der Verlauf schneller sein kann als bei der ersten Geburt.',
      ],
    },
    {
      type: 'title',
      text: 'Klinische Grenzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Wehenmessung ist nur ein Teil der Geburtsbeurteilung. Zervixdilatation, kindliches Wohlbefinden, Schmerzbewältigung, Blasensprung, Gestationsalter, vorherige Geburtsverläufe, Gruppe-B-Streptokokken-Status, Entfernung zum Krankenhaus, Schwangerschaftsrisikofaktoren und mütterliche Symptome können alle beeinflussen, was Ihr Team empfiehlt. Nutzen Sie den Verlauf als klare Aufzeichnung, um sie mit Ihrer Hebamme, Ihrem Geburtshelfer, Ihrer Doula oder der Triage-Schwester zu teilen.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Dauer',
          definition: 'Die Länge einer Wehe, gemessen vom Moment ihres Beginns bis zu ihrem Ende.',
        },
        {
          term: 'Frequenz',
          definition: 'Die Zeit vom Beginn einer Wehe bis zum Beginn der nächsten Wehe.',
        },
        {
          term: '5-1-1-Regel',
          definition: 'Ein häufiges Wehenmuster: Wehen etwa alle 5 Minuten, etwa 1 Minute dauernd, über etwa 1 Stunde anhaltend.',
        },
        {
          term: 'Vorwehen',
          definition: 'Eine Phase echter Wehen, die unangenehm und wiederkehrend sein können, aber nicht immer stetig in die aktive Geburtsphase übergehen.',
        },
        {
          term: 'Aktive Geburtsphase',
          definition: 'Eine Geburtsphase mit stärkeren, regelmäßigeren Wehen und Zervixveränderungen, bestätigt durch klinische Beurteilung.',
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
    safetyTitle: 'Mit Ihrem Geburtsplan verwenden',
    safetyBody: 'Dieser Timer dient der Erfassung und Aufklärung. Kontaktieren Sie Ihre Hebamme, Ihren Geburtshelfer oder Ihre Geburtsklinik, wenn Sie unsicher sind, Symptome Sie beunruhigen oder man Ihnen andere Anweisungen gegeben hat.',
    idleStatus: 'Bereit, die nächste Wehe zu messen',
    activeStatus: 'Wehe läuft',
    accidentalTapStatus: 'Zu kurz',
    shortRecordLabel: 'Kurzes oder Test-Tippen',
    activeRowLabel: 'Jetzt aktiv',
    startButton: 'Wehe starten',
    stopButton: 'Wehe beenden',
    activeLabel: 'Aktive Wehe',
    breathingLabel: 'Langsam atmen',
    breatheIn: 'Einatmen',
    breatheOut: 'Ausatmen',
    currentDurationLabel: 'Aktuelle Dauer',
    lastIntervalLabel: 'Letzter Abstand',
    contractionCountLabel: 'Erfasst',
    patternStatusTitle: 'Musterstatus',
    patternStatusIdle: 'Bereit zum Erfassen',
    patternStatusTracking: 'Weiter erfassen',
    patternStatusBuilding: 'Muster baut sich auf',
    patternStatusCall: 'Rufen Sie Ihr Geburtsteam an',
    patternStatusActiveBody: 'Sie haben mit der Aufzeichnung begonnen. Es sind noch einige weitere Wehen nötig, bevor das Muster aussagekräftig ist.',
    patternStatusBuildingBody: 'Die letzten Wehen rücken näher zusammen oder dauern länger. Messen Sie weiter und seien Sie bereit anzurufen, falls sie anhalten.',
    patternStatusCallBody: 'Die letzten Wehen nähern sich dem 5-1-1-Muster. Kontaktieren Sie jetzt Ihre Hebamme, Ihren Geburtshelfer oder Ihre Geburtsklinik für eine persönliche Beratung.',
    averageLastThreeLabel: 'Durchschnitt letzte 3',
    averageLastSixLabel: 'Durchschnitt letzte 6',
    regularityLabel: 'Regelmäßigkeit',
    regularityNotEnough: 'Nicht genug Daten',
    regularityIrregular: 'Unregelmäßig',
    regularityVariable: 'Variabel',
    regularityRegular: 'Regelmäßig',
    summaryTitle: 'Zusammenfassung fürs Telefon',
    summaryEmpty: 'Erfassen Sie mindestens drei Wehen, um eine hilfreiche Zusammenfassung für Ihr Geburtsteam zu erstellen.',
    copySummaryButton: 'Zusammenfassung kopieren',
    copiedSummaryButton: 'Kopiert',
    undoButton: 'Letzte rückgängig',
    sessionOverviewTitle: 'Sitzungsübersicht',
    sessionOverviewBody: 'Beginnen Sie mit der Messung, wenn eine Wehe einsetzt. Die aktive Wehe erscheint sofort hier.',
    lastContractionLabel: 'Letzte Wehe',
    historyTitle: 'Wehenverlauf',
    emptyHistory: 'Noch keine Wehen erfasst.',
    startTimeHeader: 'Startzeit',
    durationHeader: 'Dauer',
    intervalHeader: 'Abstand',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Zurücksetzen',
    alertTitle: '5-1-1-Muster erkannt',
    alertBody: 'Ihre letzten Wehen nähern sich dem üblichen 5-1-1-Muster. Erwägen Sie, jetzt Ihre Hebamme oder Geburtsklinik zu kontaktieren, um persönliche Beratung zu erhalten.',
    patternTitle: 'Was der Alarm prüft',
    patternBody: 'Das Feld erscheint, wenn die letzten Wehen 5 Minuten oder weniger auseinander liegen, mindestens 60 Sekunden dauern und dieses Muster über etwa 1 Stunde beibehalten.',
  },
};

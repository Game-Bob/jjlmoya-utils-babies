import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'fruchtbare-tage-rechner';
const title = 'Fruchtbare Tage Rechner';
const description = 'Berechnen Sie Ihr fruchtbares Fenster und das Ovulationsdatum basierend auf Ihrem Menstruationszyklus.';
const faq = [
  {
    question: 'Wie wird das fruchtbare Fenster berechnet?',
    answer: 'Das fruchtbare Fenster wird ab dem ersten Tag Ihrer letzten Periode berechnet. Der Eisprung findet etwa 14 Tage vor Beginn des nächsten Zyklus statt. Die fruchtbaren Tage umfassen die 5 Tage vor dem Eisprung und den Tag des Eisprungs selbst.',
  },
  {
    question: 'Wie genau ist dieser Rechner?',
    answer: 'Der Rechner ist eine Schätzung basierend auf dem Standardmodell eines 28-Tage-Zyklus (oder dem von Ihnen angegebenen). Er dient zur Orientierung und spiegelt möglicherweise keine individuellen Variationen wider. Für eine höhere Genauigkeit kombinieren Sie ihn mit der Verfolgung der Basaltemperatur oder Ovulationstests.',
  },
  {
    question: 'Was passiert, wenn mein Zyklus unregelmäßig ist?',
    answer: 'Wenn Ihre Zyklen von Monat zu Monat stark variieren, kann die Berechnung weniger genau sein. In diesem Fall sind die Verfolgung der Basaltemperatur oder LH-Tests zuverlässigere Methoden zur Identifizierung des Eisprungs.',
  },
  {
    question: 'Wie lange überlebt die Eizelle nach dem Eisprung?',
    answer: 'Die Eizelle hat eine Lebensdauer von 12 bis 24 Stunden. Spermien können jedoch bis zu 5 Tage im weiblichen Fortpflanzungstrakt überleben, weshalb das tatsächliche fruchtbare Fenster mehrere Tage vor dem Eisprung beginnt.',
  },
  {
    question: 'Kann dieser Rechner verwendet werden, um eine Schwangerschaft zu vermeiden?',
    answer: 'Es wird nicht empfohlen, diesen Rechner als Verhütungsmethode zu verwenden. Kalenderbasierte Methoden haben eine erhebliche Fehlerrate. Konsultieren Sie Ihren Arzt oder Gynäkologen für sichere und für Sie geeignete Verhütungsmethoden.',
  },
];
const howTo = [
  {
    name: 'Wählen Sie den ersten Tag Ihrer letzten Periode',
    text: 'Klicken Sie auf den Kalendertag, der dem Beginn Ihrer letzten Menstruation entspricht.',
  },
  {
    name: 'Passen Sie Ihre Zyklusdauer an',
    text: 'Bewegen Sie den Schieberegler, um anzugeben, wie viele Tage Ihr Menstruationszyklus normalerweise dauert.',
  },
  {
    name: 'Überprüfen Sie die Ergebnisse',
    text: 'Der Rechner zeigt automatisch das geschätzte Ovulationsdatum, das fruchtbare Fenster und den Beginn der nächsten Periode an.',
  },
  {
    name: 'Navigieren Sie durch den Kalender',
    text: 'Verwenden Sie die Navigationspfeile, um die markierten Tage in früheren oder späteren Monaten anzuzeigen.',
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

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Wann begann Ihre letzte Periode?',
    step1Desc: 'Wählen Sie den ersten Tag Ihrer letzten Menstruation im Kalender aus.',
    pulseHint: 'Klicken Sie auf einen Kalendertag, um fortzufahren',
    step1Indicator: 'Startdatum',
    step2Indicator: 'Ihr Kalender',
    sidebarTitle: 'Ihr Zyklus',
    sidebarDesc: 'Personalisieren Sie die Ergebnisse, indem Sie Ihre Zyklusdauer anpassen.',
    labelCycleLength: 'Zyklusdauer',
    unitDays: 'Tage',
    labelOvulation: 'Nächster Eisprung',
    labelFertileWindow: 'Fruchtbares Fenster',
    labelNextPeriod: 'Nächste Periode',
    legendSelection: 'Ihre Auswahl',
    legendPeriod: 'Periode',
    legendFertile: 'Fruchtbar',
    legendOvulation: 'Eisprung',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen',
  },
  seo: [
    {
      type: 'title',
      text: 'Fruchtbare Tage Rechner: Kompletter Leitfaden zu Zyklus und Eisprung',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 Fakten über das fruchtbare Fenster',
      items: [
        'Der Eisprung findet etwa 14 Tage vor Beginn der nächsten Periode statt.',
        'Das fruchtbare Fenster umfasst die 5 Tage vor dem Eisprung plus den Tag des Eisprungs selbst.',
        'Spermien können bis zu 5 Tage im weiblichen Fortpflanzungstrakt überleben.',
        'Unregelmäßige Zyklen verringern die Zuverlässigkeit der kalenderbasierten Berechnung.',
        'Die Kombination dieses Tools mit Basaltemperatur oder LH-Tests erhöht die Genauigkeit.',
      ],
    },
    {
      type: 'title',
      text: 'Wie die Berechnung des fruchtbaren Fensters funktioniert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Methode basiert auf der Ogino-Knaus-Regel und dem Standardmodell der Ovulation. Bei einem 28-Tage-Zyklus tritt der Eisprung normalerweise um den 14. Tag auf. Der Rechner identifiziert diesen Punkt und markiert die Tage höchster Fruchtbarkeit in seiner Umgebung.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 Tage', label: 'Vor der nächsten Periode' },
        { value: '5 Tage', label: 'Dauer des fruchtbaren Fensters' },
        { value: '12-24 Std.', label: 'Lebensdauer der Eizelle' },
      ],
    },
    {
      type: 'title',
      text: 'Phasen des Menstruationszyklus',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Follikelphase',
          description: 'Beginnt mit der Menstruation und dauert bis zum Eisprung.',
          points: [
            'Ovarialfollikel reifen unter dem Einfluss von FSH.',
            'Dauert bei regelmäßigen Zyklen zwischen 10 und 14 Tagen.',
            'Der Östrogenspiegel steigt progressiv an.',
          ],
        },
        {
          title: 'Lutealphase',
          description: 'Beginnt nach dem Eisprung und endet mit der Menstruation.',
          points: [
            'Der Gelbkörper produziert Progesteron, um die Gebärmutterschleimhaut vorzubereiten.',
            'Dauert bei normalen Zyklen etwa 14 Tage.',
            'Ohne Befruchtung bildet sich der Gelbkörper zurück.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Obwohl der Rechner ein Standardmodell verwendet, können Menstruationszyklen von Monat zu Monat variieren. Für eine höhere Genauigkeit kombinieren Sie dieses Tool mit der Verfolgung der Basaltemperatur oder Ovulationstests.',
    },
    {
      type: 'title',
      text: 'Biologische Anzeichen des Eisprungs',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Veränderungen des Zervixschleims: An fruchtbaren Tagen wird er klar und dehnbar, ähnlich wie Eiklar.',
        'Leichter Anstieg der Basalttemperatur (0,2–0,4 °C) unmittelbar nach dem Eisprung.',
        'Leichte Schmerzen oder Beschwerden auf der Seite des aktiven Eierstocks (Mittelschmerz) während des Eisprungs.',
        'Leichte Steigerung der Libido kurz vor dem Eisprung, vermittelt durch hormonelle Veränderungen.',
        'Blähungen oder ein leichtes Völlegefühl im Bauch während der fruchtbaren Tage.',
      ],
    },
    {
      type: 'title',
      text: 'Lebensstil und Fruchtbarkeit',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Chronischer Stress kann den Eisprung stören und den Menstruationszyklus verlängern oder verkürzen.',
        'Das Körpergewicht hat einen direkten Einfluss: Sowohl Untergewicht als auch Übergewicht beeinträchtigen den Eisprung.',
        'Moderate Bewegung fördert die Zyklusregelmäßigkeit; extremes Training kann ihn unterdrücken.',
        'Rauchen verringert die ovarielle Reserve und setzt die Menopause um mehrere Jahre vor.',
        'Eine Ernährung reich an Folsäure, Eisen und Antioxidantien unterstützt die reproduktive Gesundheit.',
      ],
    },
    {
      type: 'title',
      text: 'Methoden zur Zyklusüberwachung',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Methode', 'Zuverlässigkeit', 'Kosten'],
      rows: [
        ['Kalenderrechner', 'Mittel', 'Kostenlos'],
        ['Basaltemperatur', 'Hoch mit Übung', 'Niedrig'],
        ['LH-Urintest', 'Hoch', 'Moderat'],
        ['Digitaler Fertilitätsmonitor', 'Sehr hoch', 'Hoch'],
        ['Follikel-Ultraschall', 'Maximal', 'Klinik'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Eisprung (Ovulation)',
          definition: 'Die Freisetzung der reifen Eizelle aus dem Ovarialfollikel, ausgelöst durch einen Spitzenwert des luteinisierenden Hormons (LH). Findet einmal pro Zyklus statt.',
        },
        {
          term: 'Fruchtbares Fenster',
          definition: 'Zeitraum der höchsten Konzeptionswahrscheinlichkeit, der die 5 Tage vor dem Eisprung plus den Tag des Eisprungs abdeckt.',
        },
        {
          term: 'Zervixschleim',
          definition: 'Sekret des Muttermundes, dessen Textur im Verlauf des Zyklus variiert. An fruchtbaren Tagen wird er klar und elastisch, was den Durchgang der Spermien erleichtert.',
        },
        {
          term: 'Basaltemperatur',
          definition: 'Körpertemperatur in absoluter Ruhe, gemessen nach dem Aufwachen vor jeder Aktivität. Steigt nach dem Eisprung durch die Wirkung von Progesteron leicht an (0,2–0,4 °C).',
        },
      ],
    },
  ],
  faqTitle: "Häufig gestellte Fragen",
  faq,
  bibliographyTitle: "Referenzen",
  bibliography: [
    {
      name: 'WHO - Familienplanung',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fruchtbarkeitsbewusstsein',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Deutsche Gesellschaft für Gynäkologie und Geburtshilfe',
      url: 'https://www.dggg.de',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

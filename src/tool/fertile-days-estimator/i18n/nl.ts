import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'vruchtbare-dagen-calculator';
const title = 'Vruchtbare Dagen Calculator';
const description = 'Bereken je vruchtbare dagen en ovulatiedatum op basis van je menstruatiecyclus.';
const faq = [
  {
    question: 'Hoe wordt de vruchtbare periode berekend?',
    answer: 'De vruchtbare periode wordt berekend vanaf de eerste dag van je laatste menstruatie. De ovulatie vindt ongeveer 14 dagen voor het begin van de volgende cyclus plaats. De vruchtbare dagen omvatten de 5 dagen vóór de ovulatie en de dag van de ovulatie zelf.',
  },
  {
    question: 'Hoe nauwkeurig is deze calculator?',
    answer: 'De calculator is een schatting op basis van het standaardmodel van een cyclus van 28 dagen (of het aantal dagen dat je zelf opgeeft). Het is een indicatie en houdt mogelijk geen rekening met individuele variaties. Voor meer nauwkeurigheid kun je dit combineren met het bijhouden van je basale temperatuur of ovulatietesten.',
  },
  {
    question: 'Wat als mijn cyclus onregelmatig is?',
    answer: 'Als je cyclus van maand tot maand sterk varieert, kan de berekening minder nauwkeurig zijn. In dat geval zijn het bijhouden van de basale temperatuur of LH-testen betrouwbaardere methoden om de ovulatie te identificeren.',
  },
  {
    question: 'Hoe lang overleeft de eicel na de ovulatie?',
    answer: 'De eicel heeft een levensduur van 12 tot 24 uur. Spermacellen kunnen echter tot 5 dagen overleven in het vrouwelijke voortplantingsstelsel, waardoor de werkelijke vruchtbare periode meerdere dagen vóór de ovulatie begint.',
  },
  {
    question: 'Kan deze calculator gebruikt worden als anticonceptie?',
    answer: 'Het wordt niet aanbevolen om deze calculator te gebruiken als anticonceptiemethode. Op de kalender gebaseerde methoden hebben een aanzienlijk foutpercentage. Raadpleeg je arts of gynaecoloog voor veilige en voor jou geschikte anticonceptiemethoden.',
  },
];
const howTo = [
  {
    name: 'Selecteer de eerste dag van je laatste menstruatie',
    text: 'Klik op de dag in de kalender die overeenkomt met het begin van je laatste menstruatie.',
  },
  {
    name: 'Pas de duur van je cyclus aan',
    text: 'Verschuif de regelaar om aan te geven hoeveel dagen je menstruatiecyclus gewoonlijk duurt.',
  },
  {
    name: 'Bekijk de resultaten',
    text: 'De calculator toont automatisch de geschatte ovulatiedatum, de vruchtbare periode en het begin van de volgende menstruatie.',
  },
  {
    name: 'Navigeer door de kalender',
    text: 'Gebruik de pijltoetsen om de gemarkeerde dagen in eerdere of volgende maanden te bekijken.',
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
  inLanguage: 'nl',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'Wanneer begon je laatste menstruatie?',
    step1Desc: 'Selecteer de eerste dag van je laatste menstruatiecyclus in de kalender.',
    pulseHint: 'Klik op een dag in de kalender om verder te gaan',
    step1Indicator: 'Startdatum',
    step2Indicator: 'Jouw Kalender',
    sidebarTitle: 'Jouw Cyclus',
    sidebarDesc: 'Personaliseer de resultaten door de duur van je cyclus aan te passen.',
    labelCycleLength: 'Cyclusduur',
    unitDays: 'dagen',
    labelOvulation: 'Volgende Ovulatie',
    labelFertileWindow: 'Vruchtbare Periode',
    labelNextPeriod: 'Volgende Menstruatie',
    legendSelection: 'Jouw selectie',
    legendPeriod: 'Menstruatie',
    legendFertile: 'Vruchtbaar',
    legendOvulation: 'Ovulatie',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Referenties',
  },
  seo: [
    {
      type: 'title',
      text: 'Vruchtbare Dagen Calculator: Complete Gids over Cyclus en Ovulatie',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 kernpunten over de vruchtbare periode',
      items: [
        'De ovulatie vindt ongeveer 14 dagen vóór het begin van de volgende menstruatie plaats.',
        'De vruchtbare periode omvat de 5 dagen vóór de ovulatie plus de dag van de ovulatie zelf.',
        'Spermacellen kunnen tot 5 dagen overleven in het vrouwelijke voortplantingsstelsel.',
        'Onregelmatige cycli verminderen de betrouwbaarheid van de kalenderberekening.',
        'Het combineren van deze tool met basale temperatuur of LH-testen verhoogt de nauwkeurigheid.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de berekening van de vruchtbare periode werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De methode is gebaseerd op de regel van Ogino-Knaus en het standaard ovulatiemodel. Bij een cyclus van 28 dagen vindt de ovulatie meestal plaats rond dag 14. De calculator identificeert dit moment en markeert de dagen van de hoogste vruchtbaarheid daaromheen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 dagen', label: 'Vóór de volgende menstruatie' },
        { value: '5 dagen', label: 'Duur vruchtbare periode' },
        { value: '12-24 u', label: 'Levensduur eicel' },
      ],
    },
    {
      type: 'title',
      text: 'Fasen van de menstruatiecyclus',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Folliculaire fase',
          description: 'Begint met de menstruatie en duurt tot aan de ovulatie.',
          points: [
            'Ovariële follikels rijpen onder invloed van FSH.',
            'Duurt tussen 10 en 14 dagen in regelmatige cycli.',
            'Oestrogeenspiegels stijgen geleidelijk.',
          ],
        },
        {
          title: 'Luteale fase',
          description: 'Begint na de ovulatie en eindigt met de menstruatie.',
          points: [
            'Het corpus luteum produceert progesteron om het baarmoederslijmvlies voor te bereiden.',
            'Duurt ongeveer 14 dagen in normale cycli.',
            'Als er geen bevruchting plaatsvindt, degenereert het corpus luteum.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Hoewel de calculator een standaardmodel gebruikt, kunnen menstruatiecycli van maand tot maand variëren. Voor meer nauwkeurigheid combineer je deze tool met het bijhouden van de basale temperatuur of ovulatietesten.',
    },
    {
      type: 'title',
      text: 'Biologische tekenen van ovulatie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Veranderingen in het baarmoederhalsslijm: op vruchtbare dagen wordt het transparant en elastisch, vergelijkbaar met eiwit.',
        'Lichte stijging van de basale lichaamstemperatuur (0,2–0,4 °C) net na de ovulatie.',
        'Lichte pijn of ongemak aan de zijde van de actieve eierstok (Mittelschmerz) tijdens de ovulatie.',
        'Lichte toename van het libido rond de ovulatie, gestuurd door hormonale veranderingen.',
        'Een opgeblazen gevoel of een licht zwaar gevoel in de onderbuik tijdens de vruchtbare dagen.',
      ],
    },
    {
      type: 'title',
      text: 'Levensstijl en vruchtbaarheid',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Chronische stress kan de ovulatie verstoren en de menstruatiecyclus verlengen of verkorten.',
        'Lichaamsgewicht heeft een directe invloed: zowel ondergewicht als overgewicht beïnvloeden de ovulatie.',
        'Matige lichaamsbeweging bevordert de regelmaat van de cyclus; extreme inspanning kan deze onderdrukken.',
        'Roken vermindert de ovariële reserve en vervroegt de menopauze met meerdere jaren.',
        'Een dieet rijk aan foliumzuur, ijzer en antioxidanten ondersteunt de reproductieve gezondheid.',
      ],
    },
    {
      type: 'title',
      text: 'Methoden voor cyclusbewaking',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Methode', 'Betrouwbaarheid', 'Kosten'],
      rows: [
        ['Kalendercalculator', 'Gemiddeld', 'Gratis'],
        ['Basale lichaamstemperatuur', 'Hoog met oefening', 'Laag'],
        ['LH-urinetest', 'Hoog', 'Gemiddeld'],
        ['Digitale vruchtbaarheidsmonitor', 'Zeer hoog', 'Hoog'],
        ['Folliculaire echografie', 'Maximaal', 'Kliniek'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovulatie',
          definition: 'Het vrijkomen van een rijpe eicel uit de ovariële follikel, getriggerd door een piek in het luteïniserend hormoon (LH). Vindt één keer per cyclus plaats.',
        },
        {
          term: 'Vruchtbare periode',
          definition: 'Periode met de hoogste kans op conceptie, bestaande uit de 5 dagen vóór de ovulatie plus de dag van de ovulatie zelf.',
        },
        {
          term: 'Baarmoederhalsslijm',
          definition: 'Afscheiding van de baarmoederhals waarvan de textuur gedurende de cyclus varieert. Op vruchtbare dagen wordt het transparant en elastisch, wat de doorgang van spermacellen vergemakkelijkt.',
        },
        {
          term: 'Basale lichaamstemperatuur',
          definition: 'Lichaamstemperatuur in absolute rust, gemeten direct na het ontwaken vóór enige activiteit. Stijgt licht (0,2–0,4 °C) na de ovulatie onder invloed van progesteron.',
        },
      ],
    },
  ],
  faqTitle: "Veelgestelde vragen",
  faq,
  bibliographyTitle: "Referenties",
  bibliography: [
    {
      name: 'WHO - Gezinsplanning',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'NVOG - Menstruatiecyclus',
      url: 'https://www.nvog.nl',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

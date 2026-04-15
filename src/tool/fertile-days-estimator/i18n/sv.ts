import type { FertileDaysEstimatorLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'kalkulator-fertila-dagar';
const title = 'Kalkulator för Fertila Dagar';
const description = 'Beräkna ditt fertila fönster och ägglossningsdatum baserat på din menstruationscykel.';
const faq = [
  {
    question: 'Hur beräknas det fertila fönstret?',
    answer: 'Det fertila fönstret beräknas från den första dagen i din senaste mens. Ägglossningen sker cirka 14 dagar före nästa cykel börjar. De fertila dagarna inkluderar de 5 dagarna före ägglossningen och själva ägglossningsdagen.',
  },
  {
    question: 'Hur exakt är denna kalkylator?',
    answer: 'Kalkylatorn är en uppskattning baserad på standardmodellen för en 28-dagars cykel (eller den du anger). Den är vägledande och kanske inte återspeglar individuella variationer. För högre precision bör den kombineras med mätning av basal kroppstemperatur eller ägglossningstest.',
  },
  {
    question: 'Vad händer om min cykel är oregelbunden?',
    answer: 'Om dina cykler varierar mycket från månad till månad kan beräkningen bli mindre exakt. I så fall är mätning av basal kroppstemperatur eller LH-test mer tillförlitliga metoder för att identifiera ägglossning.',
  },
  {
    question: 'Hur länge överlever ägget efter ägglossningen?',
    answer: 'Ägget har en livslängd på 12 till 24 timmar. Spermier kan dock överleva upp till 5 dagar i kvinnans fortplantningsorgan, vilket är anledningen till att det faktiska fertila fönstret sträcker sig flera dagar före ägglossningen.',
  },
  {
    question: 'Kan man använda denna kalkylator för att undvika graviditet?',
    answer: 'Det rekommenderas inte att använda denna kalkylator som en preventivmetod. Kalenderbaserade metoder har en betydande felmarginal. Kontakta din läkare eller gynekolog för säkra och lämpliga preventivmetoder för dig.',
  },
];
const howTo = [
  {
    name: 'Välj den första dagen i din senaste mens',
    text: 'Klicka på den dag i kalendern som motsvarar starten på din senaste menstruation.',
  },
  {
    name: 'Justera din cykellängd',
    text: 'Dra i reglaget för att ange hur många dagar din menstruationscykel vanligtvis varar.',
  },
  {
    name: 'Se resultaten',
    text: 'Kalkylatorn visar automatiskt det beräknade ägglossningsdatumet, det fertila fönstret och starten på nästa mens.',
  },
  {
    name: 'Navigera i kalendern',
    text: 'Använd pilarna för att se de markerade dagarna i tidigare eller kommande månader.',
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
  inLanguage: 'sv',
};

export const content: FertileDaysEstimatorLocaleContent = {
  slug,
  title,
  description,
  ui: {
    step1Title: 'När började din senaste mens?',
    step1Desc: 'Välj den första dagen i din senaste menstruationscykel i kalendern.',
    pulseHint: 'Klicka på en dag i kalendern för att fortsätta',
    step1Indicator: 'Startdatum',
    step2Indicator: 'Din Kalender',
    sidebarTitle: 'Din Cykel',
    sidebarDesc: 'Anpassa resultaten genom att justera din cykellängd.',
    labelCycleLength: 'Cykellängd',
    unitDays: 'dagar',
    labelOvulation: 'Nästa Ägglossning',
    labelFertileWindow: 'Fertilt Fönster',
    labelNextPeriod: 'Nästa Mens',
    legendSelection: 'Ditt val',
    legendPeriod: 'Period',
    legendFertile: 'Fertil',
    legendOvulation: 'Ägglossning',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser',
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkylator för Fertila Dagar: Komplett Guide om Cykel och Ägglossning',
      level: 2,
    },
    {
      type: 'summary',
      title: '5 nyckelfakta om det fertila fönstret',
      items: [
        'Ägglossningen sker cirka 14 dagar före nästa mens börjar.',
        'Det fertila fönstret inkluderar de 5 dagarna före ägglossningen plus själva ägglossningsdagen.',
        'Spermier kan överleva upp till 5 dagar i kvinnans fortplantningsorgan.',
        'Oregelbundna cykler minskar tillförlitligheten i kalenderberäkningen.',
        'Att kombinera detta verktyg med basaltemperatur eller LH-test ökar precisionen.',
      ],
    },
    {
      type: 'title',
      text: 'Hur beräkningen av det fertila fönstret fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Metoden baseras på Ogino-Knaus-formeln och standardmodellen för ägglossning. Med en 28-dagars cykel sker ägglossningen vanligtvis runt dag 14. Kalkylatorn identifierar denna punkt och markerar de mest fertila dagarna runt den.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '14 dagar', label: 'Före nästa mens' },
        { value: '5 dagar', label: 'Längd på fertilt fönster' },
        { value: '12-24 h', label: 'Äggets livslängd' },
      ],
    },
    {
      type: 'title',
      text: 'Menstruationscykelns faser',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Follikelfas',
          description: 'Börjar med mensen och varar fram till ägglossningen.',
          points: [
            'Äggstocksfolliklar mognar under inverkan av FSH.',
            'Varar mellan 10 och 14 dagar i regelbundna cykler.',
            'Östrogennivåerna stiger gradvis.',
          ],
        },
        {
          title: 'Lutealfas',
          description: 'Börjar efter ägglossningen och slutar med mensen.',
          points: [
            'Gulkroppen producerar progesteron för att förbereda livmoderslemhinnan.',
            'Varar i cirka 14 dagar i normala cykler.',
            'Om ingen befruktning sker tillbakabildas gulkroppen.',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: 'Även om kalkylatorn använder en standardmodell kan menstruationscykler variera från månad till månad. För högre precision bör du kombinera detta verktyg med mätning av basal kroppstemperatur eller ägglossningstest.',
    },
    {
      type: 'title',
      text: 'Biologiska tecken på ägglossning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Förändringar i livmoderhalssekretet: under fertila dagar blir det genomskinligt och töjbart, likt äggvita.',
        'En lätt höjning av den basala kroppstemperaturen (0,2–0,4 °C) precis efter ägglossningen.',
        'Lätt smärta eller obehag på den aktiva äggstockens sida (mittelsmerte) vid ägglossning.',
        'En svag ökning av sexlusten nära ägglossningen, styrd av hormonella förändringar.',
        'Känsla av svullnad eller fyllnad i underlivet under de fertila dagarna.',
      ],
    },
    {
      type: 'title',
      text: 'Livsstil och fertilitet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kronisk stress kan störa ägglossningen och förlänga eller förkorta menstruationscykeln.',
        'Kroppsvikten har en direkt inverkan: både undervikt och övervikt påverkar ägglossningen.',
        'Måttlig motion främjar cykelns regelbundenhet; extrem träning kan hämma den.',
        'Tobak minskar äggstocksreserven och kan påskynda klimakteriet med flera år.',
        'En kost rik på folsyra, järn och antioxidanter stöder den reproduktiva hälsan.',
      ],
    },
    {
      type: 'title',
      text: 'Metoder för cykelövervakning',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Metod', 'Tillförlitlighet', 'Kostnad'],
      rows: [
        ['Kalenderkalkylator', 'Medel', 'Gratis'],
        ['Basal kroppstemperatur', 'Hög med övning', 'Låg'],
        ['LH-test (urin)', 'Hög', 'Måttlig'],
        ['Digital fertilitetsmonitor', 'Mycket hög', 'Hög'],
        ['Ultraljud (follikelmätning)', 'Maximal', 'Klinik'],
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ägglossning (Ovulation)',
          definition: 'Frisättningen av det mogna ägget från äggstocksfollikeln, utlöst av en ökning av luteiniserande hormon (LH). Sker en gång per cykel.',
        },
        {
          term: 'Fertilt fönster',
          definition: 'Perioden med högst sannolikhet för befruktning, som omfattar de 5 dagarna före ägglossningen plus själva ägglossningsdagen.',
        },
        {
          term: 'Livmoderhalssekret',
          definition: 'Sekret från livmoderhalsen vars konsistens varierar under cykeln. Under fertila dagar blir det genomskinligt och elastiskt, vilket underlättar för spermier att passera.',
        },
        {
          term: 'Basal kroppstemperatur',
          definition: 'Kroppstemperaturen vid absolut vila, mätt direkt efter uppvaknandet före någon aktivitet. Stiger något (0,2–0,4 °C) efter ägglossningen på grund av progesteron.',
        },
      ],
    },
  ],
  faqTitle: "Vanliga frågor",
  faq,
  bibliographyTitle: "Referenser",
  bibliography: [
    {
      name: 'WHO - Familjeplanering',
      url: 'https://www.who.int/health-topics/family-planning-contraception',
    },
    {
      name: 'American College of Obstetricians and Gynecologists - Fertility Awareness',
      url: 'https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning',
    },
    {
      name: 'Svensk Förening för Obstetrik och Gynekologi',
      url: 'https://www.sfog.se',
    },
    {
      name: 'Wilcox AJ et al. - Timing of Sexual Intercourse in Relation to Ovulation (NEJM, 1995)',
      url: 'https://www.nejm.org/doi/10.1056/NEJM199512073332301',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

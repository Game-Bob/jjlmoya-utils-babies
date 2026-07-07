import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Viktökningskalkylator för Graviditet';
const description = 'Uppskatta ett hälsosamt viktökningsintervall under graviditeten per graviditetsvecka med hjälp av IOM:s och ACOG:s riktlinjer för prenatal viktökning.';

const faq = [
  {
    question: 'Hur mycket vikt bör jag gå upp under graviditeten?',
    answer: 'Det beror på BMI före graviditeten. IOM:s riktlinjer rekommenderar 12,5-18 kg (28-40 lb) vid undervikt, 11,5-16 kg (25-35 lb) vid normal BMI, 7-11,5 kg (15-25 lb) vid övervikt och 5-9 kg (11-20 lb) vid obesitas för enkelbörd. Diskutera alltid ditt personliga mål med din prenatala vårdgivare.',
  },
  {
    question: 'Används samma viktökningsintervall vid tvillinggraviditet?',
    answer: 'Nej. Tvillinggraviditeter har högre mål i alla BMI-kategorier. Vid normal BMI är det rekommenderade intervallet 17-25 kg (37-54 lb). Vid övervikt 14-23 kg (31-50 lb) och vid obesitas 11-19 kg (25-42 lb). Det finns inget fastställt IOM-intervall för kvinnor med undervikt vid tvillinggraviditet, så det kliniska teamet individualiserar vården.',
  },
  {
    question: 'Varför förändras kurvan efter första trimestern?',
    answer: 'IOM:s riktlinjer förväntar sig en mycket blygsam total ökning under första trimestern - cirka 0,5 till 2 kg - eftersom fostret, placentan och fostervattnet ännu har mycket liten massa. Från och med andra trimestern börjar en stadigare veckovis ökning på mellan 0,17 och 0,58 kg (beroende på BMI).',
  },
  {
    question: 'Jag tappar vikt under första trimestern på grund av illamående. Bör jag vara orolig?',
    answer: 'Lätt viktminskning under första trimestern är vanligt på grund av illamående och mataversioner. Så länge du håller dig hydrerad och inte förlorar mer än några kilo är det vanligtvis inte oroande. Om kräkningarna är svåra, ihållande eller orsakar uttorkning, kontakta din vårdgivare - det kan vara hyperemesis gravidarum som kräver behandling.',
  },
  {
    question: 'Vad är den ideala viktökningstakten per vecka?',
    answer: 'Efter vecka 13 är de veckovisa målen: 0,44-0,58 kg vid undervikt, 0,35-0,50 kg vid normal BMI, 0,23-0,33 kg vid övervikt och 0,17-0,27 kg vid obesitas. Detta är genomsnitt - den faktiska ökningen varierar från vecka till vecka på grund av vätskeretention, måltidstidpunkt och andra faktorer.',
  },
  {
    question: 'Är det säkert att träna för att kontrollera viktökningen under graviditeten?',
    answer: 'Ja, för de flesta kvinnor med okomplicerad graviditet. ACOG rekommenderar minst 150 minuter per vecka av måttligt intensiv aerob aktivitet. Regelbunden träning stödjer hälsosam viktökning, minskar risken för graviditetsdiabetes och förbättrar humör och sömn. Diskutera alltid din träningsplan med ditt vårdteam, särskilt vid graviditetskomplikationer.',
  },
  {
    question: 'Hur snabbt går man ner graviditetsvikten efter förlossningen?',
    answer: 'De flesta kvinnor förlorar cirka 4,5-5,5 kg direkt efter förlossningen (bebis, placenta och fostervatten). Under den första veckan sker ytterligare vätskeförlust. Att återgå till vikten före graviditeten tar vanligtvis 6 till 12 månader med hälsosam kost och gradvis fysisk aktivitet. Amning kan hjälpa eftersom det förbrukar cirka 300-500 extra kcal per dag.',
  },
  {
    question: 'Kan den här kalkylatorn diagnostisera ett graviditetsproblem?',
    answer: 'Nej. Detta är endast en pedagogisk uppskattning baserad på populationsriktlinjer. Den kan inte bedöma fostertillväxt, placentafunktion, blodtryck, blodsocker eller några medicinska symtom. Plötslig viktförändring, svullnad, ihållande kräkningar eller andra bekymmer ska alltid diskuteras med en obstetriker, barnmorska eller kvalificerad prenatal kliniker.',
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
    name: 'Ange mått före graviditeten',
    text: 'Lägg till längd och vikt före graviditeten så att verktyget kan uppskatta BMI före graviditeten.',
  },
  {
    name: 'Lägg till aktuella graviditetsuppgifter',
    text: 'Ange aktuell vikt, graviditetsvecka och om graviditeten är enkel- eller tvillingbörd.',
  },
  {
    name: 'Granska kurvan',
    text: 'Jämför aktuell viktökning med det uppskattade hälsosamma viktökningsbandet för den valda veckan.',
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
    priceCurrency: 'SEK',
  },
};

export const content: ToolLocaleContent<PregnancyWeightGainCalculatorUI> = {
  title,
  description,
  slug: 'viktokning-graviditet-kalkylator',
  faqTitle: 'Vanliga frågor',
  bibliographyTitle: 'Referenser',
  seo: [
    {
      type: 'summary',
      title: 'Viktiga fakta om viktökning under graviditeten',
      items: [
        'Din rekommenderade totala viktökning beror helt på ditt BMI före graviditeten, inte på en siffra som passar alla.',
        'IOM:s riktlinjer anger intervall från 11 till 20 lb vid obesitas till 28-40 lb vid undervikt vid enkelbörd.',
        'Viktökning är inte linjär: första trimestern förväntas endast 0,5-2 kg totalt, därefter börjar en stadigare veckotakt.',
        'Tvillinggraviditeter har högre mål i alla BMI-kategorier.',
        'Denna kalkylator är ett pedagogiskt verktyg - diskutera alltid dina personliga mål med ditt prenatala vårdteam.',
      ],
    },
    {
      type: 'title',
      text: 'Viktökningskalkylator för Graviditet: Förstå din prenatala tillväxtkurva',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att gå upp rätt mängd vikt under graviditeten är en av de viktigaste faktorerna för både mödrahälsa och fosterutveckling. Otillräcklig viktökning ökar risken för för tidig födsel, låg födelsevikt och intrauterin tillväxthämning. Överdriven ökning är associerad med graviditetsdiabetes, kejsarsnitt, viktretention efter förlossningen och makrosomi. Denna kalkylator använder de etablerade riktlinjerna från <strong>IOM (Institute of Medicine)</strong> och <strong>ACOG (American College of Obstetricians and Gynecologists)</strong> för att rita din personliga veckoför vecka-ökningskurva.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 veckor', label: 'Längd på fullgången graviditet' },
        { value: '4 kategorier', label: 'BMI-baserade ökningsintervall enligt IOM' },
        { value: '±0,5 kg/v', label: 'Typisk takt i andra trimestern' },
      ],
    },
    {
      type: 'title',
      text: 'Så fungerar kalkylatorn',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Du anger din längd och vikt före graviditeten så att verktyget kan beräkna ditt BMI före graviditeten.',
        'Ditt BMI klassificeras i en av fyra IOM-kategorier: undervikt, normal, övervikt eller obesitas.',
        'Varje kategori motsvarar ett rekommenderat totalt ökningsintervall och en veckotakt för andra och tredje trimestern.',
        'Kalkylatorn tar också emot aktuell vikt och graviditetsvecka för att avgöra var du befinner dig i förhållande till det uppskattade bandet.',
        'Enkel- och tvillinggraviditeter använder separata ökningsmål eftersom foster- och placentakraven skiljer sig avsevärt.',
      ],
    },
    {
      type: 'title',
      text: 'IOM:s rekommendationer för viktökning baserat på BMI före graviditeten',
      level: 3,
    },
    {
      type: 'table',
      headers: ['BMI före graviditet', 'Kategori', 'Total ökning enkelbörd', 'Total ökning tvillingar', 'Veckotakt (v. 14-40)'],
      rows: [
        ['< 18,5', 'Undervikt', '12,5-18 kg / 28-40 lb', 'Inget fastställt IOM-intervall', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normal', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Övervikt', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesitas', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Viktigt:</strong> Detta är screeningintervall på populationsnivå. Din vårdgivare kan sätta ett personligt mål baserat på din nutritionshistorik, tidigare graviditeter, fostertillväxtultraljud eller medicinska tillstånd. Följ alltid din klinikers individuella vägledning.',
    },
    {
      type: 'title',
      text: 'Viktökning per trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Första trimestern (vecka 1 to 13)',
          description: 'En blygsam ökning förväntas. Många kvinnor går upp mycket lite eller tappar till och med vikt på grund av illamående.',
          points: [
            'IOM-mål: cirka 0,5 till 2 kg (1 till 4,4 lb) totalt',
            'Illamående och mataversioner är vanliga och kan begränsa intaget',
            'Embryot och placentan har mycket liten massa i detta skede',
            'Fokusera på näringskvalitet snarare än kvantitet',
          ],
        },
        {
          title: 'Andra trimestern (vecka 14 to 26)',
          description: 'Perioden med den mest stadiga veckovisa ökningen. Aptiten förbättras vanligtvis efter att illamåendet avtagit.',
          points: [
            'Veckotakt: cirka 0,23 till 0,58 kg beroende på BMI-kategori',
            'Fostret växer snabbt i längd och organutveckling',
            'Plasmavolymen ökar, vilket bidrar till vikten',
            'Behovet av järn och kalcium ökar avsevärt',
          ],
        },
        {
          title: 'Tredje trimestern (vecka 27 to 40)',
          description: 'Viktökningen fortsätter i en takt som liknar andra trimestern och kan avta mot slutet.',
          points: [
            'Fosterfettlagringen ökar avsevärt från vecka 28',
            'Fostervattenvolymen når sin topp runt vecka 34-36',
            'Svullnad och vätskeretention kan tillfälligt höja mätvärdena',
            'Vissa kvinnor går upp lite under de sista 1-2 veckorna före förlossningen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vad består viktökningen egentligen av?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Komponent', 'Uppskattad vikt vid fullgången tid'],
      rows: [
        ['Bebis', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Fostervatten', '0,8 kg / 1,8 lb'],
        ['Livmoder (tillväxt)', '0,9 kg / 2 lb'],
        ['Bröstvävnad', '0,5 kg / 1,1 lb'],
        ['Ökad blodvolym', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Extracellulär vätska', '1,5 kg / 3,3 lb'],
        ['Modern fett- och proteinreserver', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Som denna uppdelning visar är det mesta av vikten som uppnås i en hälsosam graviditet funktionell vävnad - vätska, blod, foster, placenta och livmoder - inte bara fett. Denna insikt hjälper till att förstå varför tillräcklig viktökning är nödvändig även för kvinnor som var överviktiga före graviditeten.',
    },
    {
      type: 'title',
      text: 'Näringstips för en hälsosam viktökning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Lägg till cirka 340 kcal per dag under andra trimestern och 450 kcal per dag under tredje trimestern utöver ditt behov före graviditeten.',
        'Prioritera protein: sikta på minst 70-80 g per dag för att stödja fostervävnadstillväxt och expansion av moderns blodvolym.',
        'Ät järnrik mat (magert kött, linser, berikade spannmål) för att förebygga anemi, vilket är vanligare under graviditeten.',
        'Kalciumbehovet stiger till 1 000 mg per dag - mejeriprodukter, berikade växtdrycker, mandlar och bladgrönsaker är bra källor.',
        'Omega-3-fettsyror från fet fisk (2 portioner per vecka) eller algtillskott stödjer fostrets hjärnutveckling.',
        'Folat (400-600 mcg per dag) minskar risken för neuralrörsdefekter, särskilt under första trimestern.',
        'Håll god vätskebalans - sikta på cirka 2-3 liter vätska per dag, mer vid varmt väder eller träning.',
        'Begränsa starkt processad mat, tillsatt socker och transfetter som bidrar till överdriven viktökning.',
      ],
    },
    {
      type: 'title',
      text: 'Fysisk aktivitet och vikthantering under graviditeten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG rekommenderar minst <strong>150 minuter per vecka</strong> av måttligt intensiv aerob aktivitet för kvinnor med okomplicerad graviditet. Regelbunden träning stödjer hälsosam viktökning, minskar risken för graviditetsdiabetes och havandeskapsförgiftning, förbättrar sömnen och lindrar ryggsmärta. Promenader, simning, prenatal yoga och stationär cykling tolereras väl under hela graviditeten. Diskutera alltid din träningsplan med din vårdgivare innan du påbörjar eller fortsätter intensiv aktivitet.',
    },
    {
      type: 'title',
      text: 'Varningstecken relaterade till viktförändringar under graviditeten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'En plötslig viktökning på mer än 1 kg under en vecka, särskilt efter vecka 20, kan tyda på vätskeretention relaterad till havandeskapsförgiftning.',
        'Snabb svullnad av händer, ansikte eller vrister i kombination med huvudvärk eller synförändringar kräver omedelbar medicinsk uppmärksamhet.',
        'Ihållande viktminskning efter första trimestern eller oförmåga att behålla mat eller vätska kan tyda på hyperemesis gravidarum.',
        'Mycket långsam eller stillastående viktökning trots adekvat intag kan motivera ett fostertillväxtultraljud för att bedöma intrauterin tillväxthämning.',
        'Alla oförklarliga viktförändringar bör diskuteras med en obstetriker eller barnmorska istället för att hanteras på egen hand.',
      ],
    },
    {
      type: 'title',
      text: 'Enkelbörd vs. tvillinggraviditet: viktiga skillnader',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Enkelbörd',
          description: 'Ett foster, en placenta. Det vanligaste scenariot med väletablerade IOM-mål.',
          points: [
            'Total ökning: 5 till 18 kg beroende på BMI före graviditeten',
            'Stadig veckotakt från 0,17 till 0,58 kg från vecka 14',
            'Lägre kaloriöverskott (340-450 kcal/dag)',
            'Frekvens för tidig födsel: cirka 10%',
          ],
        },
        {
          title: 'Tvillinggraviditet',
          description: 'Två foster, generellt högre krav på alla fronter. Målen är högre i alla BMI-kategorier.',
          points: [
            'Total ökning: 11 till 25 kg beroende på BMI före graviditeten',
            'Högre veckotakt, särskilt under andra trimestern',
            'Större kalori- och proteinbehov',
            'Kliniska team individualiserar målen mer noggrant',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vanliga missförstånd om prenatal viktökning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Viktökning är inte detsamma som fettökning. Det mesta av den uppnådda vikten är blod, vätska, placenta och barn - inte lagrat fett.',
        'Att äta för två betyder inte att dubbla intaget. Det extra kaloribehovet under andra trimestern motsvarar ungefär ett glas mjölk och en banan.',
        'Att ligga över det rekommenderade intervallet betyder inte automatiskt att du eller ditt barn är i riskzonen - intervall är statistiska riktlinjer, inte absoluta trösklar.',
        'Kvinnor med obesitas behöver också gå upp i vikt under graviditeten. IOM rekommenderar fortfarande en nettoökning på 5 till 9 kg.',
        'Vågen är inte det viktigaste måttet på en hälsosam graviditet - fostertillväxt, blodtryck, blodsocker och kliniska bedömningar är viktigare.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Body Mass Index)',
          definition: 'Förhållandet mellan vikt och längd i kvadrat som används för att klassificera viktkategorier. Inom prenatal vård avgör BMI före graviditeten lämpligt viktökningsintervall.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Numera National Academy of Medicine. Publicerade 2009 de banbrytande riktlinjerna för viktökning under graviditet som används av kliniker över hela världen.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'Den ledande amerikanska yrkesorganisationen inom obstetrisk och gynekologisk vård. Stöder IOM:s riktlinjer för viktökning och tillhandahåller ytterligare klinisk vägledning.',
        },
        {
          term: 'Gestationsålder',
          definition: 'Graviditetens ålder mätt i veckor från första dagen av den sista menstruationen. En fullgången graviditet är vanligen 39 till 40 veckor.',
        },
        {
          term: 'Makrosomi',
          definition: 'Ett tillstånd där barnet växer mer än förväntat, vanligen definierat som en födelsevikt över 4 kg. Associeras med överdriven viktökning och graviditetsdiabetes.',
        },
        {
          term: 'Intrauterin tillväxthämning (IUGR)',
          definition: 'Ett tillstånd där fostret växer långsammare än förväntat. Kan vara relaterat till otillräcklig viktökning, placentaproblem eller andra maternella hälsofaktorer.',
        },
        {
          term: 'Havandeskapsförgiftning (preeklampsi)',
          definition: 'En graviditetskomplikation som kännetecknas av högt blodtryck och tecken på skador på andra organsystem. Plötslig snabb viktökning på grund av vätskeretention är ett möjligt varningstecken.',
        },
        {
          term: 'Hyperemesis gravidarum',
          definition: 'Svårt och ihållande illamående och kräkningar under graviditeten, utöver vanligt morgonillamående, vilket kan leda till viktminskning och uttorkning och kräver medicinsk behandling.',
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
    educationalWarningTitle: 'Pedagogisk varning',
    educationalWarningBody: 'Denna kalkylator är endast avsedd för prenatal utbildning. Den diagnostiserar inte mödra- eller fosterhälsa, ersätter inte individuell medicinsk rådgivning och tar inte hänsyn till symtom, vätskeretention, diabetesrisk, fostertillväxt, nutritionshistorik eller klinikerns mål.',
    inputsTitle: 'Graviditetsprofil',
    unitsLabel: 'Enheter',
    metricLabel: 'Metrisk',
    imperialLabel: 'Imperial',
    heightCmLabel: 'Längd (cm)',
    heightFtLabel: 'Längd (ft)',
    heightInLabel: 'Längd (in)',
    preWeightKgLabel: 'Vikt före graviditet (kg)',
    currentWeightKgLabel: 'Aktuell vikt (kg)',
    preWeightLbLabel: 'Vikt före graviditet (lb)',
    currentWeightLbLabel: 'Aktuell vikt (lb)',
    weekLabel: 'Graviditetsvecka',
    pregnancyTypeLabel: 'Typ av graviditet',
    singletonLabel: 'Enkelbörd',
    twinsLabel: 'Tvillingar',
    bmiCardTitle: 'BMI före graviditet',
    recommendationTitle: 'Rekommenderad ökning',
    currentGainTitle: 'Aktuell ökning',
    chartTitle: 'Prenatal viktökningskurva',
    weekShortLabel: 'v',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Totalt intervall',
    weeklyRangeLabel: 'Veckotakt efter vecka 13',
    firstTrimesterLabel: 'Första trimestern: cirka 0,5-2 kg total ökning',
    statusBelow: 'Under uppskattat band',
    statusWithin: 'Inom uppskattat band',
    statusAbove: 'Över uppskattat band',
    statusBelowBody: 'Din aktuella viktökning ligger under det uppskattade bandet för denna vecka. Fråga din prenatala kliniker om kost, illamående, fostertillväxt eller datering behöver ses över.',
    statusWithinBody: 'Din aktuella viktökning ligger inom det uppskattade bandet för denna vecka. Fortsätt följa din individuella prenatala plan.',
    statusAboveBody: 'Din aktuella viktökning ligger över det uppskattade bandet för denna vecka. Diskutera trenden med din kliniker, särskilt om ökningen är plötslig eller åtföljs av svullnad eller symtom.',
    categoryUnderweight: 'Undervikt',
    categoryNormal: 'Normal BMI',
    categoryOverweight: 'Övervikt',
    categoryObesity: 'Obesitas',
    totalGainSuffix: 'total ökning',
    perWeekSuffix: 'per vecka',
    chartLowLabel: 'Nedre band',
    chartHighLabel: 'Övre band',
    chartCurrentLabel: 'Aktuell',
  },
};

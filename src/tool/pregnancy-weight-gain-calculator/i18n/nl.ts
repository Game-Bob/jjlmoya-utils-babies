import type { ToolLocaleContent } from '../../../types';
import type { PregnancyWeightGainCalculatorUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

const title = 'Gewichtstoename Calculator Zwangerschap';
const description = 'Schat een gezonde gewichtstoename in de zwangerschap per zwangerschapsweek met behulp van de IOM- en ACOG-richtlijnen voor prenatale gewichtstoename.';

const faq = [
  {
    question: 'Hoeveel gewicht moet ik aankomen tijdens de zwangerschap?',
    answer: 'Dat hangt af van je BMI vóór de zwangerschap. De IOM-richtlijnen bevelen 12,5-18 kg (28-40 lb) aan bij ondergewicht, 11,5-16 kg (25-35 lb) bij normaal BMI, 7-11,5 kg (15-25 lb) bij overgewicht en 5-9 kg (11-20 lb) bij obesitas voor eenlingzwangerschappen. Bespreek je persoonlijke doel altijd met je prenatale zorgverlener.',
  },
  {
    question: 'Gelden bij een tweelingzwangerschap dezelfde richtlijnen voor gewichtstoename?',
    answer: 'Nee. Tweelingzwangerschappen hebben hogere doelen in alle BMI-categorieën. Voor normaal BMI is het aanbevolen bereik 17-25 kg (37-54 lb). Voor overgewicht 14-23 kg (31-50 lb) en voor obesitas 11-19 kg (25-42 lb). Er is geen vastgesteld IOM-bereik voor vrouwen met ondergewicht bij een tweeling, dus het klinische team individualiseert de zorg.',
  },
  {
    question: 'Waarom verandert mijn verwachte gewichtstoename zo weinig in het eerste trimester?',
    answer: 'De IOM-richtlijnen gaan uit van een zeer bescheiden totale toename in het eerste trimester - ongeveer 0,5 tot 2 kg - omdat de foetus, placenta en het vruchtwater nog erg klein zijn. Vanaf het tweede trimester begint een gestage wekelijkse toename van 0,17 tot 0,58 kg (afhankelijk van BMI).',
  },
  {
    question: 'Ik val af in het eerste trimester door misselijkheid. Moet ik me zorgen maken?',
    answer: 'Licht gewichtsverlies in het eerste trimester komt vaak voor door misselijkheid en voedselaversies. Zolang je gehydrateerd blijft en niet meer dan een paar kilo verliest, is dit meestal geen probleem. Als het braken ernstig of aanhoudend is, of uitdroging veroorzaakt, neem dan contact op met je zorgverlener - dit kan hyperemesis gravidarum zijn, wat behandeling vereist.',
  },
  {
    question: 'Wat is het ideale tempo van gewichtstoename per week?',
    answer: 'Na week 13 zijn de wekelijkse doelen: 0,44-0,58 kg bij ondergewicht, 0,35-0,50 kg bij normaal BMI, 0,23-0,33 kg bij overgewicht en 0,17-0,27 kg bij obesitas. Dit zijn gemiddelden - de werkelijke toename schommelt van week tot week door vocht, maaltijdtiming en andere factoren.',
  },
  {
    question: 'Is het veilig om te sporten om gewichtstoename tijdens de zwangerschap onder controle te houden?',
    answer: 'Ja, voor de meeste vrouwen met een ongecompliceerde zwangerschap. ACOG beveelt ten minste 150 minuten matig intensieve aerobe activiteit per week aan. Regelmatige lichaamsbeweging ondersteunt een gezonde gewichtstoename, vermindert het risico op zwangerschapsdiabetes en verbetert de stemming en de slaap. Bespreek je specifieke trainingsplan altijd met je zorgteam, vooral bij zwangerschapscomplicaties.',
  },
  {
    question: 'Hoe snel raak ik het zwangerschapsgewicht kwijt na de bevalling?',
    answer: 'De meeste vrouwen verliezen ongeveer 4,5-5,5 kg direct na de geboorte (baby, placenta en vruchtwater). In de eerste week treedt extra vochtverlies op. Terugkeren naar het gewicht van vóór de zwangerschap duurt meestal 6 tot 12 maanden met gezonde voeding en geleidelijke lichaamsbeweging. Borstvoeding kan helpen, omdat dit ongeveer 300-500 extra kcal per dag verbruikt.',
  },
  {
    question: 'Kan deze calculator een zwangerschapsprobleem diagnosticeren?',
    answer: 'Nee. Dit is een educatieve schatting op basis van populatierichtlijnen. Het kan de foetale groei, de placentafunctie, de bloeddruk, de bloedsuikerspiegel of enig medisch symptoom niet beoordelen. Plotselinge gewichtsveranderingen, zwelling, aanhoudend braken of enige bezorgdheid moeten altijd worden besproken met een verloskundige, gynaecoloog of gekwalificeerde prenatale clinicus.',
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
    name: 'Voer de metingen van vóór de zwangerschap in',
    text: 'Voeg lengte en gewicht vóór de zwangerschap toe zodat de tool de BMI van vóór de zwangerschap kan schatten.',
  },
  {
    name: 'Voeg de huidige zwangerschapsgegevens toe',
    text: 'Voer het huidige gewicht, de zwangerschapsweek en of het om een eenling- of tweelingzwangerschap gaat in.',
  },
  {
    name: 'Bekijk de curve',
    text: 'Vergelijk de huidige toename met de geschatte gezonde toenameband voor de geselecteerde week.',
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
  slug: 'gewichtstoename-zwangerschap-calculator',
  faqTitle: 'Veelgestelde vragen',
  bibliographyTitle: 'Bibliografie',
  seo: [
    {
      type: 'summary',
      title: 'Belangrijke feiten over gewichtstoename tijdens de zwangerschap',
      items: [
        'Je aanbevolen totale gewichtstoename hangt volledig af van je BMI vóór de zwangerschap, niet van een one-size-fits-all getal.',
        'De IOM-richtlijnen geven bereiken van 11 tot 20 lb bij obesitas tot 28 tot 40 lb bij ondergewicht in eenlingzwangerschappen.',
        'Gewichtstoename is niet lineair: het eerste trimester verwacht slechts 0,5 tot 2 kg in totaal, daarna begint een gestager wekelijks tempo.',
        'Tweelingzwangerschappen hebben hogere doelen in alle BMI-categorieën.',
        'Deze calculator is een educatief hulpmiddel - bespreek je persoonlijke doelen altijd met je prenatale zorgteam.',
      ],
    },
    {
      type: 'title',
      text: 'Gewichtstoename Calculator Zwangerschap: Begrijp je prenatale groeicurve',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De juiste hoeveelheid gewicht aankomen tijdens de zwangerschap is een van de belangrijkste factoren voor zowel de gezondheid van de moeder als de ontwikkeling van de foetus. Te weinig gewichtstoename verhoogt het risico op vroeggeboorte, laag geboortegewicht en intra-uteriene groeivertraging. Te veel toename wordt geassocieerd met zwangerschapsdiabetes, keizersnede, gewichtsretentie na de bevalling en macrosomie. Deze calculator gebruikt de vastgestelde richtlijnen van het <strong>IOM (Institute of Medicine)</strong> en <strong>ACOG (American College of Obstetricians and Gynecologists)</strong> om je gepersonaliseerde week-tot-week toenamecurve te plotten.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '40 weken', label: 'Duur van een voldragen zwangerschap' },
        { value: '4 categorieën', label: 'BMI-gebaseerde toenamebereiken per IOM' },
        { value: '±0,5 kg/wk', label: 'Typisch tempo in het tweede trimester' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe de calculator werkt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Je voert je lengte en gewicht vóór de zwangerschap in zodat de tool je pre-zwangerschaps-BMI kan berekenen.',
        'Je BMI wordt ingedeeld in een van de vier IOM-categorieën: ondergewicht, normaal, overgewicht of obesitas.',
        'Elke categorie komt overeen met een aanbevolen totale toenamebereik en een wekelijks tempo voor het tweede en derde trimester.',
        'De calculator accepteert ook het huidige gewicht en de zwangerschapsweek om te bepalen waar je zit ten opzichte van de geschatte band.',
        'Eenling- en tweelingzwangerschappen gebruiken aparte toename-doelen omdat de foetale en placentaire eisen aanzienlijk verschillen.',
      ],
    },
    {
      type: 'title',
      text: 'IOM-aanbevelingen voor gewichtstoename op basis van BMI vóór de zwangerschap',
      level: 3,
    },
    {
      type: 'table',
      headers: ['BMI vóór zwangerschap', 'Categorie', 'Totale toename eenling', 'Totale toename tweeling', 'Wekelijks tempo (wk. 14-40)'],
      rows: [
        ['< 18,5', 'Ondergewicht', '12,5-18 kg / 28-40 lb', 'Geen vastgesteld IOM-bereik', '0,44-0,58 kg'],
        ['18,5-24,9', 'Normaal gewicht', '11,5-16 kg / 25-35 lb', '17-25 kg / 37-54 lb', '0,35-0,50 kg'],
        ['25,0-29,9', 'Overgewicht', '7-11,5 kg / 15-25 lb', '14-23 kg / 31-50 lb', '0,23-0,33 kg'],
        ['≥ 30,0', 'Obesitas', '5-9 kg / 11-20 lb', '11-19 kg / 25-42 lb', '0,17-0,27 kg'],
      ],
    },
    {
      type: 'tip',
      html: '<strong>Belangrijk:</strong> Dit zijn screeningsbereiken op populatieniveau. Je zorgverlener kan een gepersonaliseerd doel stellen op basis van je voedingsgeschiedenis, eerdere zwangerschappen, foetale groeiscans of medische aandoeningen. Volg altijd de individuele begeleiding van je clinicus.',
    },
    {
      type: 'title',
      text: 'Gewichtstoename per trimester',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Eerste trimester (week 1 to 13)',
          description: 'Een bescheiden toename wordt verwacht. Veel vrouwen komen heel weinig aan of vallen zelfs af door misselijkheid.',
          points: [
            'IOM-doel: ongeveer 0,5 tot 2 kg (1 tot 4,4 lb) in totaal',
            'Misselijkheid en voedselaversies komen vaak voor en kunnen de inname beperken',
            'Het embryo en de placenta hebben in dit stadium nog zeer weinig massa',
            'Focus op kwaliteit van voeding in plaats van kwantiteit',
          ],
        },
        {
          title: 'Tweede trimester (week 14 to 26)',
          description: 'De periode van de meest gestage wekelijkse toename. De eetlust verbetert meestal na het afnemen van de misselijkheid.',
          points: [
            'Wekelijks tempo: ongeveer 0,23 tot 0,58 kg afhankelijk van de BMI-categorie',
            'De foetus groeit snel in lengte en orgaanontwikkeling',
            'Het plasmavolume neemt toe, wat bijdraagt aan het gewicht',
            'De behoefte aan ijzer en calcium neemt aanzienlijk toe',
          ],
        },
        {
          title: 'Derde trimester (week 27 to 40)',
          description: 'De gewichtstoename gaat door in een vergelijkbaar tempo als het tweede trimester en kan tegen het einde vertragen.',
          points: [
            'De vetopslag bij de foetus neemt aanzienlijk toe vanaf week 28',
            'Het vruchtwatervolume bereikt een piek rond week 34-36',
            'Zwelling en vochtretentie kunnen de metingen tijdelijk verhogen',
            'Sommige vrouwen komen weinig aan in de laatste 1 tot 2 weken voor de bevalling',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Waar gaat het gewicht eigenlijk naartoe?',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Onderdeel', 'Geschat gewicht à terme'],
      rows: [
        ['Baby', '3,0-3,5 kg / 6,6-7,7 lb'],
        ['Placenta', '0,7 kg / 1,5 lb'],
        ['Vruchtwater', '0,8 kg / 1,8 lb'],
        ['Baarmoeder (groei)', '0,9 kg / 2 lb'],
        ['Borstweefsel', '0,5 kg / 1,1 lb'],
        ['Toename bloedvolume', '1,2-1,5 kg / 2,6-3,3 lb'],
        ['Extracellulaire vloeistof', '1,5 kg / 3,3 lb'],
        ['Vet- en eiwitreserves moeder', '3,0-4,0 kg / 6,6-8,8 lb'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Zoals deze uitsplitsing laat zien, is het grootste deel van het gewicht dat in een gezonde zwangerschap wordt gewonnen functioneel weefsel - vocht, bloed, foetus, placenta en baarmoeder - niet simpelweg vet. Dit inzicht helpt om te begrijpen waarom voldoende gewichtstoename ook nodig is voor vrouwen die vóór de zwangerschap al overgewicht hadden.',
    },
    {
      type: 'title',
      text: 'Voedingstips voor een gezonde gewichtstoename',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Voeg ongeveer 340 kcal per dag toe in het tweede trimester en 450 kcal per dag in het derde trimester bovenop je behoefte van vóór de zwangerschap.',
        'Geef prioriteit aan eiwitten: streef naar ten minste 70-80 g per dag om de foetale weefselgroei en de uitbreiding van het maternale bloedvolume te ondersteunen.',
        'Eet ijzerrijke voeding (mager vlees, linzen, verrijkte granen) om bloedarmoede te voorkomen, wat vaker voorkomt tijdens de zwangerschap.',
        'De calciumbehoefte stijgt naar 1.000 mg per dag - zuivel, verrijkte plantaardige melk, amandelen en bladgroenten zijn goede bronnen.',
        'Omega-3-vetzuren uit vette vis (2 porties per week) of algen-supplementen ondersteunen de ontwikkeling van het foetale brein.',
        'Foliumzuur (400-600 mcg per dag) verlaagt het risico op neuralebuisdefecten, vooral in het eerste trimester.',
        'Blijf goed gehydrateerd - streef naar ongeveer 2-3 liter vocht per dag, meer bij warm weer of bij het sporten.',
        'Beperk sterk bewerkte voeding, toegevoegde suikers en transvetten, die bijdragen aan overmatige gewichtstoename.',
      ],
    },
    {
      type: 'title',
      text: 'Lichamelijke activiteit en gewichtsbeheersing tijdens de zwangerschap',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ACOG beveelt ten minste <strong>150 minuten per week</strong> matig intensieve aerobe activiteit aan voor vrouwen met een ongecompliceerde zwangerschap. Regelmatige lichaamsbeweging ondersteunt een gezonde gewichtstoename, vermindert het risico op zwangerschapsdiabetes en pre-eclampsie, verbetert de slaap en verlicht rugpijn. Wandelen, zwemmen, prenatale yoga en fietsen op een hometrainer worden gedurende de hele zwangerschap goed verdragen. Bespreek je trainingsplan altijd met je zorgverlener voordat je met intensieve activiteit begint of doorgaat.',
    },
    {
      type: 'title',
      text: 'Waarschuwingssignalen met betrekking tot gewichtsveranderingen in de zwangerschap',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Een plotselinge gewichtstoename van meer dan 1 kg in één week, vooral na week 20, kan wijzen op vochtretentie gerelateerd aan pre-eclampsie.',
        'Snelle zwelling van handen, gezicht of enkels in combinatie met hoofdpijn of visuele veranderingen vereist onmiddellijke medische aandacht.',
        'Aanhoudend gewichtsverlies na het eerste trimester, of het onvermogen om voedsel of vocht binnen te houden, kan wijzen op hyperemesis gravidarum.',
        'Zeer trage of stagnerende gewichtstoename ondanks voldoende inname kan een foetale groeiscan rechtvaardigen om intra-uteriene groeivertraging te beoordelen.',
        'Elke onverklaarbare gewichtsverandering moet worden besproken met een verloskundige of gynaecoloog in plaats van zelf te worden beheerd.',
      ],
    },
    {
      type: 'title',
      text: 'Eenling- vs. tweelingzwangerschap: belangrijkste verschillen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Eenlingzwangerschap',
          description: 'Eén foetus, één placenta. Het meest voorkomende scenario met vastgestelde IOM-doelen.',
          points: [
            'Totale toename: 5 tot 18 kg afhankelijk van de BMI vóór de zwangerschap',
            'Gestadig wekelijks tempo van 0,17 tot 0,58 kg vanaf week 14',
            'Lager calorisch overschot nodig (340-450 kcal/dag)',
            'Percentage vroeggeboorte: ongeveer 10%',
          ],
        },
        {
          title: 'Tweelingzwangerschap',
          description: 'Twee foetussen, doorgaans hogere eisen op alle fronten. De doelen zijn hoger in alle BMI-categorieën.',
          points: [
            'Totale toename: 11 tot 25 kg afhankelijk van de BMI vóór de zwangerschap',
            'Hoger wekelijks tempo, vooral in het tweede trimester',
            'Grotere calorie- en eiwitbehoefte',
            'Klinische teams individualiseren de doelen nauwkeuriger',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Veel verkeerd begrepen aspecten van prenatale gewichtstoename',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gewichtstoename is niet hetzelfde als vettoename. Het grootste deel van het gewonnen gewicht is bloed, vocht, placenta en baby - geen opgeslagen vet.',
        'Eten voor twee betekent niet dat je je inname verdubbelt. De extra caloriebehoefte in het tweede trimester is ongeveer gelijk aan een glas melk en een banaan.',
        'Boven het aanbevolen bereik zitten betekent niet automatisch dat jij of je baby risico loopt - bereiken zijn statistische richtlijnen, geen absolute drempels.',
        'Vrouwen met obesitas moeten wél aankomen tijdens de zwangerschap. Een netto toename van 5 tot 9 kg wordt nog steeds aanbevolen door het IOM.',
        'De weegschaal is niet de belangrijkste maatstaf voor een gezonde zwangerschap - foetale groei, bloeddruk, bloedsuiker en klinische beoordelingen zijn belangrijker.',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'BMI (Body Mass Index)',
          definition: 'Een verhouding van gewicht tot lengte in het kwadraat die wordt gebruikt om gewichtscategorieën te classificeren. In de prenatale zorg bepaalt de pre-zwangerschaps-BMI het juiste gewichtstoenamedoel.',
        },
        {
          term: 'IOM (Institute of Medicine)',
          definition: 'Nu de National Academy of Medicine. Publiceerde in 2009 de baanbrekende richtlijnen voor gewichtstoename tijdens de zwangerschap die wereldwijd door clinici worden gebruikt.',
        },
        {
          term: 'ACOG (American College of Obstetricians and Gynecologists)',
          definition: 'De toonaangevende Amerikaanse beroepsorganisatie voor verloskundige en gynaecologische zorg. Onderschrijft de IOM-richtlijnen voor gewichtstoename en biedt aanvullende klinische begeleiding.',
        },
        {
          term: 'Zwangerschapsduur',
          definition: 'De leeftijd van de zwangerschap gemeten in weken vanaf de eerste dag van de laatste menstruatie. Een voldragen zwangerschap is doorgaans 39 tot 40 weken.',
        },
        {
          term: 'Macrosomie',
          definition: 'Een aandoening waarbij de baby groter groeit dan verwacht, meestal gedefinieerd als een geboortegewicht boven 4 kg. Geassocieerd met overmatige gewichtstoename en zwangerschapsdiabetes.',
        },
        {
          term: 'Intra-uteriene groeivertraging (IUGR)',
          definition: 'Een aandoening waarbij de foetus langzamer groeit dan verwacht. Kan verband houden met onvoldoende gewichtstoename, placentaproblemen of andere maternale gezondheidsfactoren.',
        },
        {
          term: 'Pre-eclampsie',
          definition: 'Een zwangerschapscomplicatie gekenmerkt door hoge bloeddruk en tekenen van schade aan andere orgaansystemen. Plotselinge snelle gewichtstoename door vochtretentie is een mogelijk waarschuwingsteken.',
        },
        {
          term: 'Hyperemesis gravidarum',
          definition: 'Ernstige en aanhoudende misselijkheid en braken tijdens de zwangerschap, verder dan normale ochtendmisselijkheid, wat kan leiden tot gewichtsverlies en uitdroging en medische behandeling vereist.',
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
    educationalWarningTitle: 'Educatieve waarschuwing',
    educationalWarningBody: 'Deze calculator is uitsluitend bedoeld voor prenatale voorlichting. Hij stelt geen diagnose van maternale of foetale gezondheid, vervangt geen individueel medisch advies en houdt geen rekening met symptomen, vochtretentie, diabetesrisico, foetale groei, voedingsgeschiedenis of door de clinicus aangegeven doelen.',
    inputsTitle: 'Zwangerschapsprofiel',
    unitsLabel: 'Eenheden',
    metricLabel: 'Metriek',
    imperialLabel: 'Imperiaal',
    heightCmLabel: 'Lengte (cm)',
    heightFtLabel: 'Lengte (ft)',
    heightInLabel: 'Lengte (in)',
    preWeightKgLabel: 'Gewicht vóór zwangerschap (kg)',
    currentWeightKgLabel: 'Huidig gewicht (kg)',
    preWeightLbLabel: 'Gewicht vóór zwangerschap (lb)',
    currentWeightLbLabel: 'Huidig gewicht (lb)',
    weekLabel: 'Zwangerschapsweek',
    pregnancyTypeLabel: 'Type zwangerschap',
    singletonLabel: 'Eenling',
    twinsLabel: 'Tweeling',
    bmiCardTitle: 'BMI vóór zwangerschap',
    recommendationTitle: 'Aanbevolen toename',
    currentGainTitle: 'Huidige toename',
    chartTitle: 'Prenatale gewichtstoenamediagram',
    weekShortLabel: 'wk',
    kgLabel: 'kg',
    lbLabel: 'lb',
    totalRangeLabel: 'Totaalbereik',
    weeklyRangeLabel: 'Wekelijks tempo na week 13',
    firstTrimesterLabel: 'Eerste trimester: ongeveer 0,5 tot 2 kg totale toename',
    statusBelow: 'Onder de geschatte band',
    statusWithin: 'Binnen de geschatte band',
    statusAbove: 'Boven de geschatte band',
    statusBelowBody: 'Uw huidige toename ligt onder de geschatte band voor deze week. Overleg met uw prenatale clinicus of voeding, misselijkheid, foetale groei of datering moeten worden herzien.',
    statusWithinBody: 'Uw huidige toename ligt binnen de geschatte band voor deze week. Blijf uw geïndividualiseerde prenatale plan volgen.',
    statusAboveBody: 'Uw huidige toename ligt boven de geschatte band voor deze week. Beoordeel de trend met uw clinicus, vooral als de toename plotseling is of gepaard gaat met zwelling of andere symptomen.',
    categoryUnderweight: 'Ondergewicht',
    categoryNormal: 'Normaal BMI',
    categoryOverweight: 'Overgewicht',
    categoryObesity: 'Obesitas',
    totalGainSuffix: 'totale toename',
    perWeekSuffix: 'per week',
    chartLowLabel: 'Onderste band',
    chartHighLabel: 'Bovenste band',
    chartCurrentLabel: 'Huidig',
  },
};

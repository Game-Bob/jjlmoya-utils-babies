import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Weeënmonitor';
export const description = 'Houd duur en frequentie van weeën bij met een grote aanraakknop, begeleide ademhaling, geschiedenis en een 5-1-1-patroonalarm.';

export const faq = [
  {
    question: 'Wat is de 5-1-1-regel voor weeën?',
    answer: 'De 5-1-1-regel betekent meestal dat de weeën ongeveer 5 minuten uit elkaar liggen, ongeveer 1 minuut duren en ongeveer 1 uur aanhouden. Veel verloskundige teams gebruiken het als praktisch signaal om te bellen voor advies, maar uw eigen plan kan anders zijn.',
  },
  {
    question: 'Wanneer moet ik contact opnemen met mijn verloskundige of het ziekenhuis?',
    answer: 'Neem contact op met uw verloskundig team wanneer de weeën regelmatig en intens worden of overeenkomen met de tijdinstructies die u heeft gekregen. Bel met spoed bij hevig bloedverlies, verminderde beweging van de baby, koorts, ernstige pijn, gebroken vliezen met twijfel of als u het gevoel heeft dat er iets niet klopt.',
  },
  {
    question: 'Stelt deze monitor de actieve bevalling vast?',
    answer: 'Nee. De monitor registreert tijden en laat een veelvoorkomend weëenpatroon zien. Veranderingen aan de baarmoedermond, de ligging van de baby, de status van de vliezen, symptomen en uw klinische voorgeschiedenis moeten worden beoordeeld door een gekwalificeerde zorgverlener.',
  },
  {
    question: 'Hoe wordt de weëenfrequentie berekend?',
    answer: 'De frequentie wordt berekend van het begin van de ene wee tot het begin van de vorige wee. De duur wordt berekend vanaf het moment dat u op start drukt tot het moment dat u op stop drukt.',
  },
  {
    question: 'Kan ik dit gebruiken tijdens voorweeën?',
    answer: 'Ja. Het kan u helpen te zien of de weeën regelmatiger worden of juist afnemen. Als de weeën onregelmatig blijven, veranderen bij rust of hydratatie, of niet intenser worden, kunnen het nog steeds voorweeën zijn, maar uw zorgteam kan u begeleiden.',
  },
  {
    question: 'Waarom is begeleide ademhaling opgenomen?',
    answer: 'Langzaam en gelijkmatig ademhalen kan helpen om spanning te verminderen, de aandacht te focussen en het omgaan met elke wee te ondersteunen. De animatie is alleen een hulpmiddel voor comfort en vervangt geen geboortebegeleiding.',
  },
  {
    question: 'Moet ik wachten op 5-1-1 als dit niet mijn eerste baby is?',
    answer: 'Niet altijd. De bevalling kan sneller verlopen na een eerdere vaginale bevalling. Volg het plan van uw verloskundige of gynaecoloog, vooral bij een risicovolle zwangerschap, als u ver van het ziekenhuis woont of eerdere snelle bevallingen heeft gehad.',
  },
  {
    question: 'Wordt mijn weëengeschiedenis bewaard?',
    answer: 'De monitor slaat recente gegevens op in uw browser zodat u de pagina kunt vernieuwen zonder de sessie te verliezen. Gebruik de resetknop om de lokale geschiedenis te wissen.',
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
    name: 'Tijdmeting starten',
    text: 'Druk op de hoofdknopp wanneer een wee begint.',
  },
  {
    name: 'Ademhalingsgids gebruiken',
    text: 'Volg de uitdijende en samentrekkende cirkel terwijl de wee actief is.',
  },
  {
    name: 'Tijdmeting stoppen',
    text: 'Druk opnieuw op de knop wanneer de wee eindigt, zodat de duur en het interval worden geregistreerd.',
  },
  {
    name: 'Patroon bekijken',
    text: 'Controleer de geschiedenis en het alarmpaneel om te beslissen of u contact moet opnemen met uw verloskundig team.',
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
  slug: 'weeennmonitor',
  faqTitle: 'Veelgestelde vragen',
  bibliographyTitle: 'Bibliografie',
  seo: [
    {
      type: 'summary',
      title: 'Belangrijke feiten over het meten van weeën',
      items: [
        'De duur wordt gemeten van het begin van een wee tot het einde ervan.',
        'De frequentie wordt gemeten van het begin van de ene wee tot het begin van de volgende.',
        'Het 5-1-1-patroon betekent ongeveer 5 minuten tussentijd, 1 minuut duur, gedurende 1 uur.',
        'Het meten van weeën ondersteunt de besluitvorming, maar kan de ontsluiting of de actieve bevalling niet op zichzelf bevestigen.',
        'Volg altijd de instructies van uw eigen verloskundige, gynaecoloog of verloskundige afdeling.',
      ],
    },
    {
      type: 'title',
      text: 'Weeënmonitor: Houd Duur, Frequentie en 5-1-1-Patronen Bij',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een weeenmonitor helpt gezinnen om een stressvol, moeilijk in te schatten moment om te zetten in een helder overzicht. Aan het einde van de zwangerschap is het normaal om je af te vragen of de weeën nog onregelmatige oefenweeën, voorweeën, vroege weeën zijn, of een patroon dat een telefoontje naar de verloskundige afdeling rechtvaardigt. Door op start te drukken wanneer een wee begint en op stop wanneer die eindigt, berekent deze tool de <strong>duur</strong> in seconden en de <strong>frequentie</strong> in minuten van het begin van de ene wee tot het begin van de volgende.',
    },
    {
      type: 'paragraph',
      html: 'Het doel is niet om de bevalling te diagnosticeren. Het doel is om u te helpen in concrete termen te beschrijven wat er gebeurt: hoe lang elke wee duurt, hoe dicht ze op elkaar zitten, of het patroon sterker wordt en of het lang genoeg constant is gebleven om overeen te komen met gangbare richtlijnen zoals de 5-1-1-regel.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Gangbaar frequentiesignaal' },
        { value: '60 s', label: 'Typische 5-1-1-duur' },
        { value: '1 uur', label: 'Venster voor patroonstabiliteit' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe het 5-1-1-alarm te interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De 5-1-1-regel is een veelgebruikte vuistregel: de weeën liggen ongeveer 5 minuten uit elkaar, duren ongeveer 1 minuut en houden ongeveer 1 uur aan. Veel geboorteteams gebruiken dat patroon als praktisch signaal om te bellen voor persoonlijk advies, vooral bij een eerste bevalling. Deze monitor markeert het patroon wanneer recente weeën 5 minuten of minder uit elkaar liggen, minstens 60 seconden duren en gedurende de sessie zijn aangehouden.',
    },
    {
      type: 'table',
      headers: ['Patroon dat u ziet', 'Wat het kan suggereren', 'Nuttige volgende stap'],
      rows: [
        ['Onregelmatige timing, wisselende lengte', 'Voorweeën of vroege weeën zijn mogelijk', 'Rust, hydrateer, verander van houding en blijf observeren tenzij u waarschuwingssymptomen heeft'],
        ['Komen dichter bij elkaar maar nog onder de 60 seconden', 'De bevalling kan op gang komen maar past nog niet bij 5-1-1', 'Blijf meten en volg de instructies van uw eigen geboorteplan'],
        ['Ongeveer 5 min uit elkaar, 60 s duur, gedurende ongeveer 1 uur', 'Gangbaar 5-1-1-belpatroon', 'Neem contact op met uw verloskundige, gynaecoloog of verloskundige afdeling voor persoonlijke begeleiding'],
        ['Plotseling intense weeën, druk of persdrang', 'De bevalling kan snel vorderen', 'Bel onmiddellijk, vooral als dit niet uw eerste baby is'],
      ],
    },
    {
      type: 'title',
      text: 'Hoe weeën correct te meten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Druk op start aan het begin van het samentrekkende, krampachtige of golfachtige gevoel.',
        'Druk op stop wanneer de wee duidelijk wegtrekt en u zich weer kunt ontspannen.',
        'Meet de frequentie niet van het einde van de ene wee tot het begin van de volgende. Klinisch wordt de frequentie meestal van begin tot begin geteld.',
        'Registreer meerdere weeën voordat u het patroon interpreteert, want één geïsoleerde wee kan misleidend zijn.',
        'Gebruik eerst de aanwijzingen van uw verloskundig team als zij u een andere drempel dan 5-1-1 hebben gegeven.',
      ],
    },
    {
      type: 'title',
      text: 'Voorweeën versus actieve bevallingspatronen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vaak voorweeën of vroege weeën',
          description: 'De weeën kunnen ongemakkelijk en echt zijn, maar het patroon beweegt mogelijk nog niet gestaag richting de geboorte.',
          points: [
            'De tussenpozen springen heen en weer in plaats van gestaag korter te worden',
            'De weeën kunnen afnemen door rust, hydratatie, een bad of houdingsverandering',
            'De intensiteit kan gelijk blijven in plaats van in de loop van de tijd toe te nemen',
            'De baarmoedermond kan langzaam of nog nauwelijks veranderen, wat alleen een zorgverlener kan beoordelen',
          ],
        },
        {
          title: 'Meer wijzend op een actieve bevalling',
          description: 'Het patroon wordt regelmatiger, moeilijker om doorheen te praten en steeds sterker.',
          points: [
            'De weeën komen dichter bij elkaar over meerdere registraties',
            'Elke wee duurt ongeveer 45 tot 70 seconden of langer',
            'U moet pauzeren, ademen of concentreren tijdens de piek',
            'Het patroon zet zich voort, zelfs na rust, hydratatie of houdingsverandering',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wanneer u niet op de monitor moet wachten',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Veiligheidsopmerking:</strong> Wacht niet op een monitoralarm als u hevig bloedverlies, verminderde beweging van de baby, ernstige hoofdpijn, koorts, groen of stinkend vruchtwater, intense constante pijn, symptomen van pre-eclampsie of een andere dringende zorg heeft. Bel uw verloskundig team of de spoeddiensten volgens uw lokale instructies.',
    },
    {
      type: 'title',
      text: 'Wat de geschiedenis laat zien',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Starttijd: de kloktijd waarop de wee begon.',
        'Duur: eindtijd minus starttijd, afgerond op seconden.',
        'Interval: huidige starttijd minus de starttijd van de vorige wee, weergegeven in minuten.',
        'Recente trend: of de weeën verder uit elkaar gaan, onregelmatig blijven of regelmatiger worden.',
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende meetfouten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'De monitor stoppen op de piek in plaats van wanneer de wee volledig is weggetrokken.',
        'Te laat starten omdat de wee in het begin mild was, waardoor de duur korter lijkt.',
        'Alleen de sterkste weeën tellen en de kleinere ertussenin negeren.',
        'Ervan uitgaan dat 5-1-1 altijd onmiddellijke ziekenhuisopname betekent. Het betekent meestal bellen voor advies, niet zelf de actieve bevalling diagnosticeren.',
        'Te lang wachten bij een tweede of volgende bevalling, waar de voortgang sneller kan zijn dan bij de eerste geboorte.',
      ],
    },
    {
      type: 'title',
      text: 'Klinische beperkingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het meten van weeën is slechts een onderdeel van de beoordeling van de bevalling. Ontsluiting van de baarmoedermond, foetaal welzijn, omgaan met pijn, gebroken vliezen, zwangerschapsduur, eerdere bevallingsgeschiedenis, groep-B-streptokokkenstatus, afstand tot het ziekenhuis, zwangerschapsrisicofactoren en maternale symptomen kunnen allemaal van invloed zijn op wat uw team aanbeveelt. Gebruik de geschiedenis als een helder overzicht om te delen met uw verloskundige, gynaecoloog, doula of triageverpleegkundige.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Duur',
          definition: 'De lengte van één wee, gemeten vanaf het moment dat deze begint tot het moment dat deze eindigt.',
        },
        {
          term: 'Frequentie',
          definition: 'De tijd van het begin van de ene wee tot het begin van de volgende wee.',
        },
        {
          term: '5-1-1-regel',
          definition: 'Een gangbaar weëenpatroon: weeën ongeveer elke 5 minuten, die ongeveer 1 minuut duren en ongeveer 1 uur aanhouden.',
        },
        {
          term: 'Voorweeën',
          definition: 'Een periode van echte weeën die ongemakkelijk en terugkerend kunnen zijn, maar die niet altijd gestaag overgaat in de actieve bevalling.',
        },
        {
          term: 'Actieve bevalling',
          definition: 'Een fase van de bevalling met sterkere, regelmatigere weeën en veranderingen aan de baarmoedermond, bevestigd door klinische beoordeling.',
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
    safetyTitle: 'Te gebruiken met uw geboorteplan',
    safetyBody: 'Deze monitor is bedoeld voor registratie en voorlichting. Neem contact op met uw verloskundige, gynaecoloog of verloskundige afdeling als u twijfelt, symptomen u zorgen baren of u andere instructies heeft gekregen.',
    idleStatus: 'Klaar om de volgende wee te meten',
    activeStatus: 'Wee bezig',
    accidentalTapStatus: 'Te kort',
    shortRecordLabel: 'Korte of testaanraking',
    activeRowLabel: 'Nu actief',
    startButton: 'Wee starten',
    stopButton: 'Wee stoppen',
    activeLabel: 'Actieve wee',
    breathingLabel: 'Adem langzaam',
    breatheIn: 'Adem in',
    breatheOut: 'Adem uit',
    currentDurationLabel: 'Huidige duur',
    lastIntervalLabel: 'Laatste interval',
    contractionCountLabel: 'Geregistreerd',
    patternStatusTitle: 'Patroonstatus',
    patternStatusIdle: 'Klaar om te registreren',
    patternStatusTracking: 'Blijf registreren',
    patternStatusBuilding: 'Patroon bouwt op',
    patternStatusCall: 'Bel uw verloskundig team',
    patternStatusActiveBody: 'U bent begonnen met registreren. Er zijn nog een paar weeën nodig voordat het patroon zinvol is.',
    patternStatusBuildingBody: 'Recente weeën komen dichter bij elkaar of duren langer. Blijf meten en bereid u voor om te bellen als ze aanhouden.',
    patternStatusCallBody: 'Recente weeën naderen het 5-1-1-patroon. Neem nu contact op met uw verloskundige, gynaecoloog of verloskundige afdeling voor persoonlijke begeleiding.',
    averageLastThreeLabel: 'Gemiddelde laatste 3',
    averageLastSixLabel: 'Gemiddelde laatste 6',
    regularityLabel: 'Regelmaat',
    regularityNotEnough: 'Onvoldoende gegevens',
    regularityIrregular: 'Onregelmatig',
    regularityVariable: 'Wisselend',
    regularityRegular: 'Regelmatig',
    summaryTitle: 'Samenvatting voor telefoon',
    summaryEmpty: 'Registreer ten minste drie weeën om een bruikbare samenvatting voor uw verloskundig team te maken.',
    copySummaryButton: 'Samenvatting kopiëren',
    copiedSummaryButton: 'Gekopieerd',
    undoButton: 'Laatste ongedaan maken',
    sessionOverviewTitle: 'Sessieoverzicht',
    sessionOverviewBody: 'Begin met meten wanneer een wee start. De actieve wee verschijnt hier meteen.',
    lastContractionLabel: 'Laatste wee',
    historyTitle: 'Weëengeschiedenis',
    emptyHistory: 'Nog geen weeën geregistreerd.',
    startTimeHeader: 'Starttijd',
    durationHeader: 'Duur',
    intervalHeader: 'Interval',
    secondsSuffix: 's',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Resetten',
    alertTitle: '5-1-1-patroon gedetecteerd',
    alertBody: 'Uw recente weeën naderen het gangbare 5-1-1-patroon. Overweeg nu contact op te nemen met uw verloskundige of verloskundige afdeling voor persoonlijk advies.',
    patternTitle: 'Wat het alarm controleert',
    patternBody: 'Het paneel verschijnt wanneer recente weeën 5 minuten of minder uit elkaar liggen, minstens 60 seconden duren en dat patroon ongeveer 1 uur aanhouden.',
  },
};

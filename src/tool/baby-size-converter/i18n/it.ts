import type { BabySizeConverterLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'convertitore-taglie-neonato';
const title = 'Convertitore di Taglie per Neonati';
const description = 'Converti le taglie dei vestiti per neonati tra Zara, H&M, Primark, Carter\'s, Kiabi, Mango e Mayoral. Inserisci l\'altezza e il peso per ottenere la taglia esatta di ogni marca.';
const faq = [
  {
    question: 'Come faccio a sapere quale taglia di vestiti corrisponde al mio bambino?',
    answer: 'La cosa più affidabile è usare l\'altezza del bambino come riferimento principale. Le taglie europee (50, 56, 62...) corrispondono direttamente all\'altezza in centimetri. Inserisci l\'altezza e il peso del bambino nel convertitore per ottenere la taglia consigliata da ogni marca.',
  },
  {
    question: 'Perché le taglie variano così tanto tra le marche?',
    answer: 'Ogni marca ha il proprio modello di taglio. H&M e Primark tendono a vestire più grande, mentre Carter\'s e Mayoral hanno tagli più aderenti. Usa sempre le misure del bambino, non solo l\'età.',
  },
  {
    question: 'Che misura devo prendere se è tra due taglie?',
    answer: 'Scegli sempre la taglia superiore. I bambini crescono molto rapidamente e una taglia più grande garantisce maggiore durata e comfort.',
  },
  {
    question: 'Le taglie in pollici funzionano allo stesso modo?',
    answer: 'Le marche americane come Carter\'s usano i pollici e il peso come riferimento. Il convertitore ti mostra automaticamente le equivalenze nel sistema imperiale se lo attivi.',
  },
];
const howTo = [
  {
    name: 'Inserisci l\'altezza del bambino',
    text: 'Usa il cursore o i pulsanti per regolare l\'altezza attuale del bambino in centimetri o pollici.',
  },
  {
    name: 'Inserisci il peso del bambino',
    text: 'Regola il peso in kg o libbre per affinare i risultati, poiché alcune marche usano il peso come riferimento complementare.',
  },
  {
    name: 'Seleziona una marca',
    text: 'Scegli la marca di abbigliamento per vedere la taglia suggerita e le misure stimate del capo.',
  },
  {
    name: 'Consulta le equivalenze',
    text: 'Nel pannello destro vedrai le taglie equivalenti di tutte le marche disponibili a colpo d\'occhio.',
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
  inLanguage: 'it',
};

export const content: BabySizeConverterLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Misure del bambino',
    labelResults: 'Equivalenze stimate',
    labelHeight: 'Altezza del bambino',
    labelWeight: 'Peso attuale del bambino',
    labelPresets: 'Preimpostazioni per età tipica',
    unitMetric: 'Metrico (cm/kg)',
    unitImperial: 'Imperiale (in/lb)',
    labelCm: 'cm',
    labelKg: 'kg',
    labelIn: 'in',
    labelLb: 'lb',
    labelBrandFit: 'Marca e Taglio',
    labelSuggested: 'Taglia suggerita',
    labelChest: 'Torace',
    labelWaist: 'Vita',
    labelGarmentMeasures: 'Misure stimate del capo',
    fitRegular: 'Taglio regolare',
    fitLarge: 'Taglio ampio',
    fitSmall: 'Taglio aderente',
    tipTitle: 'Consiglio dell\'esperto',
    tipText: 'I bambini crescono con picchi di sviluppo molto rapidi. Se il risultato è al limite superiore di una taglia, scegli sempre la taglia superiore per garantire la durata e il comfort del bambino.',
    shareAriaLabel: 'Condividi taglia',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti',
  },
  seo: [
    { type: 'title', text: 'Guida alle taglie neonato: Zara, H&M, Primark e marche internazionali', level: 2 },
    { type: 'stats', columns: 3, items: [
      { value: '2.5 cm', label: 'Crescita mensile' },
      { value: '3 mesi', label: 'Durata di ogni taglia' },
      { value: '95%', label: 'Affidabilità per altezza' },
    ]},
    { type: 'tip', html: 'Usa sempre l\'altezza come riferimento principale per scegliere la taglia, non l\'età. Due bambini dello stesso mese possono avere fino a 8–10 cm di differenza, il che significa saltare una taglia completa.' },
    { type: 'title', text: 'Taglie per età, altezza e peso', level: 3 },
    { type: 'table', headers: ['Età approx.', 'Altezza (cm)', 'Peso (kg)', 'Taglia abituale', 'Uso stimato'], rows: [
      ['Neonato', '50–56', '3–4.5', '50 / RN', '4–6 settimane'],
      ['1–3 mesi', '56–62', '4.5–6', '56–62', '6–8 settimane'],
      ['3–6 mesi', '62–68', '6–8', '62–68', '6–8 settimane'],
      ['6–9 mesi', '68–74', '8–9.5', '68–74', '6–8 settimane'],
      ['9–12 mesi', '74–80', '9.5–11', '74–80', '6–8 settimane'],
      ['12–18 mesi', '80–86', '11–13', '80–86', '3–4 mesi'],
      ['18–24 mesi', '86–92', '13–15', '86–92', '3–4 mesi'],
    ]},
    { type: 'title', text: 'Marche che vestono grande vs aderente', level: 3 },
    { type: 'comparative', columns: 2, items: [
      {
        title: 'Vestono grande (scegli taglia inferiore)',
        description: 'Queste marche usano tagli più ampi; prendi una taglia in meno rispetto alla solita.',
        points: [
          'H&M: spesso veste una taglia in più',
          'Primark: taglio ampio generalizzato',
          'Lupilu (Lidl): taglio morbido',
          'Consigliato per bambini in percentile basso',
        ],
      },
      {
        title: 'Vestono aderente (scegli taglia superiore)',
        description: 'Queste marche usano tagli più aderenti; prendi una taglia in più rispetto alla solita.',
        points: [
          "Carter's: taglio americano aderente",
          'Mayoral: taglio europeo aderente',
          'Neck & Neck: taglie ridotte',
          'Consigliato per bambini in percentile alto',
        ],
      },
    ]},
    { type: 'title', text: 'Chiavi per indovinare la taglia', level: 3 },
    { type: 'list', items: [
      'Misura sempre il bambino prima di acquistare, non fidarti solo dell\'età',
      'Se è al limite tra due taglie, scegli la taglia superiore',
      'Tieni conto dello spazio per il pannolino nei capi a pezzo unico',
      'Le taglie europee (50, 56, 62...) corrispondono all\'altezza in cm',
      'Lava sempre prima dell\'uso: il cotone può restringersi fino al 5%',
    ]},
    { type: 'glossary', items: [
      {
        term: 'Taglia 50 / Neonato',
        definition: 'Pensata per bambini fino a 50 cm di altezza e circa 3.5 kg. Molti bambini la superano molto rapidamente, anche nelle prime settimane.',
      },
      {
        term: 'Misura del cavallo',
        definition: 'Distanza dal cavallo alla vita. Fondamentale in body e tutine: un cavallo corto limita il movimento del bambino anche se il resto del capo veste bene.',
      },
      {
        term: 'Riferimento per peso',
        definition: "Alcune marche americane come Carter's usano il peso come riferimento primario. Utile per bambini con proporzioni fuori dal percentile standard.",
      },
      {
        term: 'Scollo a busta',
        definition: 'Design dello scollo di body e magliette che permette di vestire il bambino facendo scorrere il capo verso il basso invece di passarlo dalla testa. Indispensabile nei primi mesi.',
      },
    ]},
    { type: 'summary', title: 'Cosa ricordare', items: [
      'L\'altezza è l\'indicatore più affidabile per scegliere la taglia, più dell\'età.',
      "H&M e Primark tendono a vestire grande; Carter's e Mayoral vestono aderente.",
      'Le taglie europee numeriche (50, 56, 62...) corrispondono all\'altezza in cm.',
      'Al limite tra due taglie, scegliere la superiore garantisce maggiore durata.',
      'Lo scollo a busta e il cavallo ampio sono i dettagli chiave per il comfort.',
    ]},
  ],
  faqTitle: "Domande frequenti",
  faq,
  bibliographyTitle: "Riferimenti",
  bibliography: [
    {
      name: 'Zara - Guida alle taglie infantili',
      url: 'https://www.zara.com/it/it/size-guide.html',
    },
    {
      name: 'H&M - Guida alle taglie per neonato',
      url: 'https://www2.hm.com/it_it/assistenza-clienti/tabella-delle-misure.html',
    },
    {
      name: 'OMS - Standard di crescita infantile',
      url: 'https://www.who.int/tools/child-growth-standards',
    },
    {
      name: 'Mayoral - Guida alle taglie',
      url: 'https://www.mayoral.com/it-it/guia-tallas',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

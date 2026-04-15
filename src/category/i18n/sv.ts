import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'bebisar',
  title: 'Babykalkylatorer',
  description: 'Verktyg och kalkylatorer för vård och övervakning av din bebis utveckling.',
  seo: [
    {
      type: 'summary',
      title: 'Tillgängliga Verktyg',
      items: [
        'Matningskalkylator efter ålder och vikt',
        'Groeicentil-kalkylator (WHO)',
        'Klädstorleks-omvandlare per märke',
        'Ägglossnings-simulator',
        'Personligt vaccinationsschema',
        'Kalkylator för graviditet och veckor',
      ],
    },
    {
      type: 'title',
      text: 'Övervakning av din Bebis Utveckling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Babykalkylatorerna hjälper dig att noggrant följa ditt barns tillväxt och utveckling. Från att beräkna mjölkmatningar efter ålder och vikt till att kontrollera WHO-centiler, dessa verktyg är utformade för att ge användbar information i varje steg.',
    },
    {
      type: 'title',
      text: 'Matning och Nutrition',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Matningskalkylatorn uppskattar mängden bröstmjölk eller ersättning din bebis behöver baserat på ålder i dagar, veckor eller månader och aktuell vikt. Beräkningarna följer pediatriska riktlinjer för att säkerställa korrekt näring.',
    },
    {
      type: 'title',
      text: 'Tillväxt och Centiler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Centilkalkylatorn använder Världshälsoorganisationens (WHO) referensdiagram för att plotta din bebis vikt, längd och BMI inom barnpopulationens fördelning. En 50:e centil indikerar att bebisen är vid medianen.',
    },
  ],
};

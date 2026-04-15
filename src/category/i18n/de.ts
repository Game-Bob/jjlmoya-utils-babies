import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'babys',
  title: 'Baby Rechner',
  description: 'Werkzeuge und Rechner für die Pflege und Überwachung der Entwicklung Ihres Babys.',
  seo: [
    {
      type: 'summary',
      title: 'Verfügbare Werkzeuge',
      items: [
        'Fütterungsrechner nach Alter und Gewicht',
        'Wachstumsperzentil Rechner (WHO)',
        'Babygrößen Umrechner nach Marke',
        'Fruchtbare Tage Rechner',
        'Personalisierter Impfkalender',
        'Schwangerschaftswochen Rechner',
      ],
    },
    {
      type: 'title',
      text: 'Überwachung der Entwicklung Ihres Babys',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Baby-Rechner helfen Ihnen, das Wachstum und die Entwicklung Ihres Kindes präzise zu verfolgen. Von der Berechnung der Milchmengen nach Alter und Gewicht bis hin zur Abfrage der WHO-Perzentile sind diese Tools darauf ausgelegt, Ihnen in jeder Phase nützliche Informationen zu liefern.',
    },
    {
      type: 'title',
      text: 'Ernährung und Nährstoffe',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Fütterungsrechner schätzt die Menge an Muttermilch oder Formelnahrung, die Ihr Baby basierend auf seinem Alter in Tagen, Wochen oder Monaten und seinem aktuellen Gewicht benötigt. Die Berechnungen folgen standardmäßigen pädiatrischen Richtlinien, um eine angemessene Ernährung sicherzustellen.',
    },
    {
      type: 'title',
      text: 'Wachstum und Perzentile',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Perzentilrechner verwendet die Referenztabellen der Weltgesundheitsorganisation (WHO), um Gewicht, Größe und BMI Ihres Babys innerhalb der Verteilung der Kinderpopulation einzuordnen. Ein 50. Perzentil bedeutet, dass das Baby im Durchschnitt liegt.',
    },
  ],
};

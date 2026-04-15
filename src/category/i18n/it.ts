import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'neonati',
  title: 'Calcolatori per Neonati',
  description: 'Strumenti e calcolatori per la cura e il monitoraggio dello sviluppo del tuo bambino.',
  seo: [
    {
      type: 'summary',
      title: 'Strumenti Disponibili',
      items: [
        'Calcolatore dell\'alimentazione per età e peso',
        'Calcolatore dei percentili di crescita (OMS)',
        'Convertitore di taglie di abbigliamento per marca',
        'Stimatore di giorni fertili',
        'Calendario di vaccinazione personalizzato',
        'Calcolatore di gravidanza e settimane di gestazione',
      ],
    },
    {
      type: 'title',
      text: 'Monitoraggio dello Sviluppo del tuo Bambino',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I calcolatori per neonati ti aiutano a tracciare con precisione la crescita e lo sviluppo di tuo figlio. Dal calcolo delle porzioni di latte in base all\'età e al peso alla consultazione dei percentili dell\'OMS, questi strumenti sono progettati per fornirti informazioni utili in ogni fase.',
    },
    {
      type: 'title',
      text: 'Alimentazione e Nutrizione',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore dell\'alimentazione stima la quantità di latte materno o di formula di cui il tuo bambino ha bisogno in base all\'età in giorni, settimane o mesi e al peso attuale. I calcoli seguono le linee guida pediatriche standard per garantire una nutrizione adeguata.',
    },
    {
      type: 'title',
      text: 'Crescita e Percentili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore dei percentili utilizza le tabelle di riferimento dell\'Organizzazione Mondiale della Sanità (OMS) per collocare il peso, l\'altezza e l\'IMC del tuo bambino all\'interno della distribuzione della popolazione infantile. Un percentile 50 indica che il bambino è nella media.',
    },
  ],
};

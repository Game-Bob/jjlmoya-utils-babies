import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'niemowleta',
  title: 'Kalkulatory dla Niemowląt',
  description: 'Narzędzia i kalkulatory do pielęgnacji i monitorowania rozwoju Twojego dziecka.',
  seo: [
    {
      type: 'summary',
      title: 'Dostępne Narzędzia',
      items: [
        'Kalkulator karmienia według wieku i wagi',
        'Kalkulator percentyli wzrostu (WHO)',
        'Konwerter rozmiarów ubrań według marki',
        'Estimator dni płodnych',
        'Spersonalizowany kalendarz szczepień',
        'Kalkulator ciąży i tygodni gestacji',
      ],
    },
    {
      type: 'title',
      text: 'Monitorowanie Rozwoju Twojego Dziecka',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulatory dla niemowląt pomagają precyzyjnie śledzić wzrost i rozwój Twojego dziecka. Od obliczania porcji mleka według wieku i wagi po sprawdzanie percentyli WHO, narzędzia te zostały zaprojektowane, aby fornire nprzydatne informacje na każdym etapie.',
    },
    {
      type: 'title',
      text: 'Karmienie i Żywienie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator karmienia szacuje ilość mleka matki lub modyfikowanego, której potrzebuje Twoje dziecko w zależności od wieku w dniach, tygodniach lub miesiącach oraz aktualnej wagi. Obliczenia są zgodne ze standardowymi wytycznymi pediatrycznymi, aby zapewnić odpowiednie żywienie.',
    },
    {
      type: 'title',
      text: 'Wzrost i Percentyle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator percentyli wykorzystuje tabele referencyjne Światowej Organizacji Zdrowia (WHO), aby umieścić wagę, wzrost i BMI Twojego dziecka w rozkładzie populacji dziecięcej. 50. percentyl wskazuje, że dziecko znajduje się w średniej.',
    },
  ],
};

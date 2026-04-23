import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';

export const title = 'Kalkulator Budżetu Dziecka';
export const description = 'Niezbędne narzędzie do planowania wydatków w pierwszym roku życia dziecka. Oblicz koszty wyprawki, miesięczne wydatki i ukryte koszty dzięki sprytnym poradom.';

export const faq = [
  {
    question: 'Ile kosztuje dziecko w pierwszym roku życia?',
    answer: 'Średnio pierwszy rok może kosztować od 20 000 zł do 60 000 zł, w zależności od stylu życia, potrzeb związanych z opieką oraz tego, czy kupujesz rzeczy nowe, czy używane.',
  },
  {
    question: 'Jakie są najdroższe przedmioty dla noworodka?',
    answer: 'Największe jednorazowe wydatki to zazwyczaj wózek, meble do pokoju (łóżeczko, komoda) oraz fotelik samochodowy. Opieka nad dzieckiem to najwyższy powtarzalny koszt miesięczny.',
  },
  {
    question: 'Jak mogę zaoszczędzić na wydatkach na dziecko?',
    answer: 'Kupowanie używanego sprzętu i ubrań, karmienie piersią (jeśli to możliwe) oraz stworzenie listy prezentów dla bliskich to najskuteczniejsze strategie oszczędnościowe.',
  },
  {
    question: 'Czym są "Ukryte Koszty" w planowaniu budżetu na dziecko?',
    answer: 'To koszty takie jak wyższe rachunki za media (ogrzewanie/klimatyzacja), wyższe składki ubezpieczeniowe dla rodziny oraz nieobowiązkowe szczepienia czy artykuły medyczne, których często brakuje na standardowych listach.',
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
    name: 'Skonfiguruj profil',
    text: 'Wybierz swój styl życia (Oszczędny, Zrównoważony lub Premium), metodę karmienia i strategię opieki nad dzieckiem.',
  },
  {
    name: 'Sprawdź artykuły',
    text: 'Przejrzyj kategorie (Wyprawka, Wydatki miesięczne i Milowe kroki) i dostosuj ceny lub zaznacz przedmioty jako używane.',
  },
  {
    name: 'Śledź budżet',
    text: 'Zobacz całkowitą kwotę potrzebną na pierwszy rok i monitoruj postępy w miarę kompletowania wyprawki.',
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
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'PLN',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'kalkulator-budzetu-dziecka',
  faqTitle: 'Najczęściej Zadawane Pytania',
  bibliographyTitle: 'Bibliografia',
  seo: [
    { type: 'summary', title: 'Podsumowanie: Budżet Dziecka', items: [
      'Pierwszy rok może kosztować od 20 000 zł do 60 000 zł.',
      'Jednorazowe koszty startowe (pokój, wózek) to największe wyzwanie na początku.',
      'Opieka nad dzieckiem może stanowić do 50% powtarzalnego budżetu miesięcznego.',
      'Przedmioty używane mogą obniżyć całkowity budżet nawet o 60%.',
    ]},
    { type: 'title', text: 'Ile naprawdę kosztuje dziecko w pierwszym roku?', level: 2 },
    { type: 'paragraph', html: 'Planowanie wydatków na dziecko to coś więcej niż tylko kupowanie pieluch. Wymaga strategicznego spojrzenia na jednorazowe inwestycje w porównaniu do powtarzalnych kosztów miesięcznych. Nasz kalkulator pomaga zwizualizować tę krzywą i przygotować się do finansowej zmiany, jaką jest rodzicielstwo.' },
    { type: 'stats', columns: 3, items: [
      { value: '8 000 zł+', label: 'Wyprawka Startowa' },
      { value: '400-600 zł', label: 'Pieluchy/Higiene m-c' },
      { value: '40%+', label: 'Oszczędność z 2-giej Ręki' },
    ]},
    { type: 'title', text: 'Podział na kategorie: Na co idą pieniądze?', level: 3 },
    { type: 'table', headers: ['Kategoria', 'Typowe przedmioty', 'Częstotliwość', 'Wpływ na koszt'], rows: [
      ['Wyprawka', 'Łóżeczko, Wózek, Fotelik', 'Jednorazowo', 'Wysoki'],
      ['Wydatki Miesięczne', 'Pieluchy, Mleko, Apteka', 'Co miesiąc', 'Średni'],
      ['Milowe Kroki', 'Krzesełko, Rozszerzanie diety, Ubrania', 'Okazjonalnie', 'Średni'],
      ['Opieka', 'Żłobek / Niania', 'Co miesiąc', 'Bardzo Wysoki'],
    ]},
    { type: 'tip', html: '<strong>Porada oszczędnościowa:</strong> Wysokiej jakości wózki i meble dziecięce mają doskonałą wartość odsprzedażową. Kupno ich z drugiej ręki może zaoszczędzić tysiące złotych bez rezygnacji z bezpieczeństwa czy stylu.' },
    { type: 'title', text: 'Porównanie Stylu Życia', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Oszczędny', 
        description: 'Skupienie na rzeczach używanych i niezbędnych.', 
        points: ['Ubrania po innych dzieciach', 'Odnowiony sprzęt', 'Skupienie na karmieniu piersią', 'Państwowy żłobek'] 
      },
      { 
        title: 'Premium', 
        description: 'Najnowsze modele i maksymalna wygoda.', 
        points: ['Sprzęt high-tech', 'Ekologiczne mleko', 'Designerski pokój', 'Prywatna niania 1-na-1'] 
      },
    ]},
    { type: 'title', text: 'Lista Sprytnego Planowania', level: 3 },
    { type: 'list', items: [
      'Sprawdź aktualizacje ubezpieczenia zdrowotnego i na życie dla rodziny.',
      'Zaplanuj budżet na nieobowiązkowe szczepienia i artykuły apteczne.',
      'Uwzględnij 20% wzrost rachunków za media (ogrzewanie/klimatyzacja).',
      'Stwórz listę prezentów wcześniej, aby rodzina mogła pomóc przy dużych zakupach.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Zacznij Planowanie',
    lifestyleLabel: 'Wybór Stylu Życia',
    lifestyleSaving: 'Oszczędny',
    lifestyleBalanced: 'Zrównoważony',
    lifestylePremium: 'Premium',
    feedingLabel: 'Metoda Karmienia',
    feedingBreast: 'Karmienie Piersią',
    feedingFormula: 'Mleko Modyfikowane',
    feedingMixed: 'Mieszane',
    childcareLabel: 'Strategia Opieki',
    childcareHome: 'Zostaję w Domu',
    childcarePublic: 'Żłobek Publiczny',
    childcarePrivate: 'Żłobek Prywatny',
    startBtn: 'Generuj Budżet',
    categoryBeforeBirth: 'Wyprawka Startowa',
    categoryMonthByMonth: 'Wydatki Miesięczne',
    categoryMilestones: 'Milowe Kroki',
    totalNeededLabel: 'Cel Całkowity 1. Rok',
    savingsProgressLabel: 'Gotowe / Zaoszczędzone',
    chartTitle: 'Krzywa Wydatków Miesięcznych',
    ghostAlertsTitle: 'Alerty Ukrytych Kosztów',
    ghostInsurance: 'Sprawdź Ubezpieczenia',
    ghostHeating: 'Uwzględnij +20% na Media',
    ghostVaccines: 'Budżet na Szczepienia Dodatkowe',
    diaperCalcTitle: 'Kontrola Ceny Pieluch',
    diaperPriceLabel: 'Cena za Opakowanie',
    diaperUnitsLabel: 'Sztuk w Opakowaniu',
    secondHandLabel: 'Używane / Prezent',
    wishlistLabel: 'Na Liście',
    itemNursery: 'Przygotowanie Pokoju',
    itemStroller: 'Wózek i Zestaw Podróżny',
    itemHospitalBag: 'Wyprawka do Szpitala',
    itemDiapers: 'Pieluchy i Chusteczki',
    itemPharmacy: 'Apteka i Higiena',
    itemDaycare: 'Żłobek / Opieka',
    itemSolidFood: 'Rozszerzanie Diety',
    itemClothes: 'Ubrania Sezonowe',
    itemHighChair: 'Krzesełko i Naczynia',
    editLabel: 'Edytuj Cenę',
    saveBtn: 'Zapisz',
    exportBtn: 'Eksportuj JSON',
    importBtn: 'Importuj JSON',
    resetBtn: 'Zresetuj Plan',
    currencySymbol: 'zł',
    monthPrefix: 'M',
    initialMonthLabel: 'Start',
    perMonthLabel: '/miesiąc',
    confirmReset: 'Czy na pewno?',
    currencyMultiplier: 4.3,
  },
};

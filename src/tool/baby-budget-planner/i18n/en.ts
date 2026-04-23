import type { ToolLocaleContent } from '../../../types';
import type { BabyBudgetPlannerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Ultimate Baby Budget Planner';
export const description = 'The definitive tool to plan your baby\'s first year expenses. Calculate nursery setup, monthly costs, and hidden expenses with smart saving tips.';

export const faq = [
  {
    question: 'How much does a baby cost in the first year?',
    answer: 'On average, the first year can cost between $5,000 and $15,000 depending on your lifestyle choices, childcare needs, and whether you buy new or second hand items.',
  },
  {
    question: 'What are the most expensive items for a newborn?',
    answer: 'The biggest one-time costs are typically the stroller, nursery furniture (crib, dresser), and car seat. Childcare is the largest recurring monthly expense.',
  },
  {
    question: 'How can I save on baby expenses?',
    answer: 'Buying second hand for gear and clothes, breastfeeding if possible, and using a registry to help friends and family gift you essential items are the most effective strategies.',
  },
  {
    question: 'What are "Ghost Expenses" in baby planning?',
    answer: 'These are hidden costs like increased utility bills (heating/cooling), higher family insurance premiums, and non-mandatory vaccines or medical supplies that aren\'t usually on standard checklists.',
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
    name: 'Configure your profile',
    text: 'Select your lifestyle (Saving, Balanced, or Premium), feeding method, and childcare strategy.',
  },
  {
    name: 'Review your items',
    text: 'Go through the categories (Before Birth, Monthly, and Milestones) and adjust prices or mark items as second hand.',
  },
  {
    name: 'Track your budget',
    text: 'See your total needed for the first year and monitor your progress as you acquire items.',
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
    priceCurrency: 'USD',
  },
};

export const content: ToolLocaleContent<BabyBudgetPlannerUI> = {
  title,
  description,
  slug: 'baby-budget-planner',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
  seo: [
    { type: 'summary', title: 'Summary: Baby Budgeting', items: [
      'The first year can cost between $5,000 and $15,000.',
      'One-time startup costs (nursery, stroller) are the largest initial hurdle.',
      'Childcare can represent up to 50% of the recurring monthly budget.',
      'Second hand items can reduce the total budget by up to 60%.',
    ]},
    { type: 'title', text: 'How much does a baby really cost in the first year?', level: 2 },
    { type: 'paragraph', html: 'Planning for a baby involves more than just buying diapers. It requires a strategic look at one-time investments versus recurring monthly costs. Our planner helps you visualize this curve and prepare for the financial transition into parenthood.' },
    { type: 'stats', columns: 3, items: [
      { value: '$2,000+', label: 'Initial Gear Setup' },
      { value: '$100-150', label: 'Monthly Diapers/Pharmacy' },
      { value: '40%+', label: 'Savings with 2nd Hand' },
    ]},
    { type: 'title', text: 'Category Breakdown: Where the Money Goes', level: 3 },
    { type: 'table', headers: ['Category', 'Typical Items', 'Frequency', 'Cost Impact'], rows: [
      ['Before Birth', 'Crib, Stroller, Car Seat', 'One-time', 'High'],
      ['Monthly', 'Diapers, Formula, Pharmacy', 'Every month', 'Medium'],
      ['Milestones', 'High Chair, Solid Food, Clothes', 'Occasional', 'Medium'],
      ['Conciliation', 'Daycare / Childcare', 'Every month', 'Very High'],
    ]},
    { type: 'tip', html: '<strong>Pro Saving Tip:</strong> High-quality strollers and nursery furniture have excellent resale value. Buying these second hand can save you thousands of dollars without compromising on safety or style.' },
    { type: 'title', text: 'Lifestyle Comparison', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { 
        title: 'Total Saving', 
        description: 'Focus on second hand and essentials.', 
        points: ['Hand-me-down clothes', 'Refurbished gear', 'Breastfeeding focus', 'Public conciliation'] 
      },
      { 
        title: 'Premium', 
        description: 'Newest models and maximum convenience.', 
        points: ['Latest tech gear', 'Organic formula', 'Designer nursery', 'Private 1-on-1 care'] 
      },
    ]},
    { type: 'title', text: 'Smart Planning Checklist', level: 3 },
    { type: 'list', items: [
      'Check life and health insurance family coverage updates.',
      'Budget for non-mandatory vaccines and specialized pharmacy items.',
      'Anticipate a 20% increase in home utility bills (heating/cooling).',
      'Create a registry early to let family help with large items.',
    ]},
  ],
  faq,
  howTo,
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
  ui: {
    title,
    onboardingTitle: 'Start Your Plan',
    lifestyleLabel: 'Lifestyle Choice',
    lifestyleSaving: 'Total Saving',
    lifestyleBalanced: 'Balanced',
    lifestylePremium: 'Premium',
    feedingLabel: 'Feeding Method',
    feedingBreast: 'Breastfeeding',
    feedingFormula: 'Formula',
    feedingMixed: 'Mixed',
    childcareLabel: 'Childcare Strategy',
    childcareHome: 'Stay at Home',
    childcarePublic: 'Public Daycare',
    childcarePrivate: 'Private Daycare',
    startBtn: 'Generate My Budget',
    categoryBeforeBirth: 'Before Baby Arrives',
    categoryMonthByMonth: 'Monthly Recurring',
    categoryMilestones: 'Coming Milestones',
    totalNeededLabel: 'Total First Year Goal',
    savingsProgressLabel: 'Ready / Saved',
    chartTitle: 'Monthly Spending Curve',
    ghostAlertsTitle: 'Ghost Expense Alerts',
    ghostInsurance: 'Check Life/Health Insurance',
    ghostHeating: 'Anticipate +20% Heating/AC',
    ghostVaccines: 'Non-mandatory Vaccines Budget',
    diaperCalcTitle: 'Diaper Price Check',
    diaperPriceLabel: 'Pack Price',
    diaperUnitsLabel: 'Units per Pack',
    secondHandLabel: 'Second hand / Gift',
    wishlistLabel: 'On Wishlist',
    itemNursery: 'Nursery Room Prep',
    itemStroller: 'Stroller & Travel System',
    itemHospitalBag: 'Hospital Bag Essentials',
    itemDiapers: 'Diapers & Wipes',
    itemPharmacy: 'Pharmacy & Hygiene',
    itemDaycare: 'Daycare / Childcare',
    itemSolidFood: 'Solid Food Transition',
    itemClothes: 'Seasonal Clothing',
    itemHighChair: 'High Chair & Feeding Gear',
    editLabel: 'Edit Price',
    saveBtn: 'Save',
    exportBtn: 'Export JSON',
    importBtn: 'Import JSON',
    resetBtn: 'Reset Plan',
    currencySymbol: '$',
    monthPrefix: 'M',
    initialMonthLabel: 'Start',
  },
};

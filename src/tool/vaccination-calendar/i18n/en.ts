import type { VaccinationCalendarLocaleContent } from '../index';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';

const slug = 'baby-vaccination-calendar-spain';
const title = 'Baby Vaccination Calendar in Spain';
const description = 'Calculate the exact vaccination dates for your baby according to the AEP 2026 schedule.';
const faq = [
  {
    question: 'What is the AEP 2026 vaccination schedule?',
    answer: 'It is the vaccination schedule recommended by the Spanish Association of Pediatrics for 2026. It includes all systematic and optional vaccines for babies and children from birth to 14 years of age.',
  },
  {
    question: 'Is it mandatory to vaccinate my baby according to the schedule?',
    answer: 'In Spain, vaccination is not legally mandatory, but it is strongly recommended. Vaccines on the systematic schedule are free and administered at public health centres.',
  },
  {
    question: 'What happens if we miss a dose?',
    answer: 'If a dose is delayed, you do not need to start over. Your paediatrician will advise you on how to resume the schedule from where it was left off. The important thing is to complete the course as soon as possible.',
  },
  {
    question: 'Can several vaccines be given on the same day?',
    answer: 'Yes, it is common and safe to administer several vaccines at the same visit. Combined vaccines such as the hexavalent already protect against six diseases in a single injection.',
  },
];
const howTo = [
  {
    name: 'Enter the date of birth',
    text: 'Type the day, month and year of your baby\'s birth in the corresponding fields.',
  },
  {
    name: 'Check the next appointment',
    text: 'The calculator automatically shows you when the next vaccination is and which vaccines are due.',
  },
  {
    name: 'Review the full calendar',
    text: 'Expand the past and future appointment sections to see the complete vaccination calendar.',
  },
  {
    name: 'Export reminders',
    text: 'Press the button to download an .ics file with all future appointments and add them to your phone calendar.',
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
  inLanguage: 'en',
};

export const content: VaccinationCalendarLocaleContent = {
  slug,
  title,
  description,
  ui: {
    labelBirthDate: "Baby's date of birth",
    placeholderDD: 'DD',
    placeholderMM: 'MM',
    placeholderAAAA: 'YYYY',
    emptyMsg: 'Enter the day, month and year of your baby\'s birth to see the vaccination calendar.',
    invalidMsg: 'The date entered is not valid.',
    futureMsg: 'A baby cannot have been born in the future.',
    labelNextAppointment: 'Next calculated appointment',
    btnAddReminder: 'Add reminder to phone',
    btnToday: "It's today! Don't forget the booklet",
    labelPassed: 'Past appointments',
    labelFuture: 'Future calendar',
    labelStatusOk: 'OK',
    labelStatusPending: 'PEND.',
    labelSource: 'Source: AEP 2026',
    labelShare: 'Share these dates',
    faqTitle: 'Frequently asked questions',
    bibliographyTitle: 'References',
  },
  seo: [
    { type: 'title', text: "Baby Vaccination Calculator: When Is My Child's Next Dose?", level: 2 },
    { type: 'stats', columns: 4, items: [
      { value: '+95%', label: 'Effectiveness' },
      { value: '14', label: 'Total doses' },
      { value: 'Public', label: 'AEP cost' },
      { value: 'High', label: 'Safety' },
    ]},
    { type: 'tip', html: 'The AEP 2026 schedule includes important updates such as the extension of the meningococcal B vaccine and revised recommendations for HPV in both sexes from age 12.' },
    { type: 'title', text: 'What is new in the AEP 2026 Schedule', level: 3 },
    { type: 'list', items: [
      'Meningococcal B (Bexsero): consolidated 2+1 schedule with doses at 2, 4 and 12 months.',
      'HPV extended to all adolescents from age 12, regardless of sex.',
      'Pneumococcal: updated recommendation with PCV15 or PCV20 depending on regional availability.',
      'Rotavirus: oral vaccine included in the systematic schedule across all regions.',
      'Tdap: booster recommended at ages 6 and 12 to maintain immunity against whooping cough.',
    ]},
    { type: 'title', text: 'Differences between Spanish regions', level: 3 },
    { type: 'list', items: [
      'Some regions include additional vaccines not covered in the national schedule.',
      'Rotavirus funding varies by region, although the trend is universal coverage.',
      'Meningococcal ACWY may be administered at slightly different ages depending on the regional protocol.',
      'Always check with your paediatrician or local health centre to confirm the current schedule.',
    ]},
    { type: 'title', text: 'How to export the calendar to your phone', level: 3 },
    { type: 'list', items: [
      "Enter your baby's date of birth in the calculator.",
      'Press the "Add reminder to phone" button to download the .ics file.',
      'Open the file with your calendar app (Google Calendar, Apple Calendar, etc.).',
      'All vaccination events will be saved with the corresponding date and vaccines.',
    ]},
    { type: 'title', text: 'Common side effects', level: 3 },
    { type: 'list', items: [
      'Redness or swelling at the injection site: disappears within 1–2 days.',
      'Mild fever (37.5–38.5 °C): normal in the first 24–48 hours.',
      'Irritability or crying: common in babies after the first doses.',
      'Temporary drowsiness or loss of appetite: no treatment needed.',
      'Serious reactions such as anaphylaxis are extremely rare (fewer than 1 per million doses).',
    ]},
    { type: 'tip', html: 'Bringing the baby well-fed and in comfortable clothing makes the visit easier. After the vaccine, skin-to-skin contact or breastfeeding helps soothe pain and inflammation naturally.' },
    { type: 'summary', title: 'What to remember', items: [
      'The AEP 2026 schedule includes 14 doses up to age 12 for complete protection.',
      'First-year vaccines protect against up to 9 serious diseases simultaneously.',
      'Mild side effects are normal and disappear within 1–2 days.',
      'You can export all vaccination appointments to your phone calendar with a single click.',
      'Always consult your paediatrician if you have questions about your region\'s schedule.',
    ]},
  ],
  faqTitle: "Frequently asked questions",
  faq,
  bibliographyTitle: "References",
  bibliography: [
    {
      name: 'Spanish Association of Pediatrics - Vaccination Schedule 2026',
      url: 'https://www.aeped.es/comite-vacunas/calendario-vacunaciones',
    },
    {
      name: 'Ministry of Health Spain - Vaccination Calendar',
      url: 'https://www.sanidad.gob.es/areas/promocionPrevencion/vacunaciones/calendario/home.htm',
    },
    {
      name: 'WHO - Immunization',
      url: 'https://www.who.int/health-topics/vaccines-and-immunization',
    },
    {
      name: 'CDC - Recommended Child and Adolescent Immunization Schedule',
      url: 'https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html',
    },
  ],
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

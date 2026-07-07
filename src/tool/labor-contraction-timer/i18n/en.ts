import type { ToolLocaleContent } from '../../../types';
import type { LaborContractionTimerUI } from '../entry';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

import { bibliography } from '../bibliography';

export const title = 'Labor Contraction Timer';
export const description = 'Track contraction duration and frequency with a large touch button, guided breathing, history, and a 5-1-1 pattern alert.';

export const faq = [
  {
    question: 'What is the 5-1-1 rule for contractions?',
    answer: 'The 5-1-1 rule usually means contractions are about 5 minutes apart, last about 1 minute, and continue for around 1 hour. Many maternity teams use it as a practical signal to call for guidance, but your own plan may differ.',
  },
  {
    question: 'When should I contact my midwife or hospital?',
    answer: 'Contact your maternity team when contractions become regular, intense, or match the timing instructions you were given. Call urgently for heavy bleeding, reduced fetal movement, fever, severe pain, waters breaking with concerns, or if you feel something is wrong.',
  },
  {
    question: 'Does this timer diagnose active labor?',
    answer: 'No. It records times and highlights a common contraction pattern. Cervical change, fetal position, membrane status, symptoms, and your clinical history require assessment by a qualified clinician.',
  },
  {
    question: 'How is contraction frequency calculated?',
    answer: 'Frequency is calculated from the start of one contraction to the start of the previous contraction. Duration is calculated from the moment you press start until you press stop.',
  },
  {
    question: 'Can I use this during prodromal labor?',
    answer: 'Yes. It can help you see whether contractions are becoming more regular or fading. If contractions remain irregular, change with rest or hydration, or do not intensify, they may still be prodromal, but your care team can guide you.',
  },
  {
    question: 'Why is guided breathing included?',
    answer: 'Slow, steady breathing can help reduce tension, focus attention, and support coping during each contraction. The animation is only a comfort aid and does not replace birth support.',
  },
  {
    question: 'Should I wait for 5-1-1 if this is not my first baby?',
    answer: 'Not always. Labor can progress faster after a previous vaginal birth. Follow the plan from your midwife or obstetrician, especially if you have a high-risk pregnancy, live far from the hospital, or have rapid previous labors.',
  },
  {
    question: 'Is my contraction history saved?',
    answer: 'The timer stores recent records in your browser so you can refresh the page without losing the session. Use the reset button to clear the local history.',
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
    name: 'Start timing',
    text: 'Press the main button when a contraction begins.',
  },
  {
    name: 'Use the breathing guide',
    text: 'Follow the expanding and contracting circle while the contraction is active.',
  },
  {
    name: 'Stop timing',
    text: 'Press the button again when the contraction ends so the duration and interval are recorded.',
  },
  {
    name: 'Review the pattern',
    text: 'Check the history and alert panel to decide whether to contact your maternity team.',
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
  slug: 'labor-contraction-timer',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Bibliography',
  seo: [
    {
      type: 'summary',
      title: 'Key facts about contraction timing',
      items: [
        'Duration is measured from the start of a contraction to its end.',
        'Frequency is measured from the start of one contraction to the start of the next.',
        'The 5-1-1 pattern means about 5 minutes apart, lasting 1 minute, for 1 hour.',
        'Contraction timing supports decision-making but cannot confirm cervical dilation or active labor by itself.',
        'Always follow the instructions from your own midwife, obstetrician, or maternity unit.',
      ],
    },
    {
      type: 'title',
      text: 'Labor Contraction Timer: Track Duration, Frequency, and 5-1-1 Patterns',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A contraction timer helps families turn a stressful, hard-to-judge moment into a clear record. During late pregnancy it is common to wonder whether contractions are still irregular practice contractions, prodromal labor, early labor, or a pattern that deserves a call to the maternity unit. By pressing start when a contraction begins and stop when it ends, this tool calculates <strong>duration</strong> in seconds and <strong>frequency</strong> in minutes from one contraction start to the next.',
    },
    {
      type: 'paragraph',
      html: 'The goal is not to diagnose labor. The goal is to help you describe what is happening in concrete terms: how long each contraction lasts, how close together they are, whether the pattern is getting stronger, and whether it has stayed consistent long enough to match common guidance such as the 5-1-1 rule.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5 min', label: 'Common frequency signal' },
        { value: '60 sec', label: 'Typical 5-1-1 duration' },
        { value: '1 hour', label: 'Pattern stability window' },
      ],
    },
    {
      type: 'title',
      text: 'How to interpret the 5-1-1 alert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The 5-1-1 rule is a widely used rule of thumb: contractions are about 5 minutes apart, last about 1 minute, and continue for about 1 hour. Many birth teams use that pattern as a practical signal to call for individual advice, especially for a first labor. This timer highlights the pattern when recent contractions are 5 minutes apart or less, last at least 60 seconds, and have been sustained across the session.',
    },
    {
      type: 'table',
      headers: ['Pattern you see', 'What it may suggest', 'Useful next step'],
      rows: [
        ['Irregular timing, variable length', 'Prodromal labor or early labor is possible', 'Rest, hydrate, change position, and keep observing unless you have warning symptoms'],
        ['Getting closer together but still under 60 seconds', 'Labor may be building but may not yet match 5-1-1', 'Continue timing and follow your own birth plan instructions'],
        ['About 5 minutes apart, 60 seconds long, for about 1 hour', 'Common 5-1-1 call pattern', 'Contact your midwife, obstetrician, or maternity unit for personalized guidance'],
        ['Sudden intense contractions, pressure, or urge to push', 'Labor may be progressing quickly', 'Call immediately, especially if this is not your first baby'],
      ],
    },
    {
      type: 'title',
      text: 'How to time contractions correctly',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Press start at the beginning of the tightening, cramping, or wave-like sensation.',
        'Press stop when the contraction clearly fades and you can relax again.',
        'Do not measure frequency from the end of one contraction to the start of the next. Clinically, frequency is usually counted from start to start.',
        'Record several contractions before interpreting the pattern, because one isolated contraction can be misleading.',
        'Use the notes from your maternity team first if they gave you a different threshold than 5-1-1.',
      ],
    },
    {
      type: 'title',
      text: 'Prodromal labor vs active labor patterns',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Often prodromal or early labor',
          description: 'Contractions can be uncomfortable and real, but the pattern may not yet be moving steadily toward birth.',
          points: [
            'Intervals jump around instead of narrowing consistently',
            'Contractions may ease with rest, hydration, a bath, or position changes',
            'Intensity may stay similar rather than building over time',
            'The cervix may change slowly or not much yet, which only a clinician can assess',
          ],
        },
        {
          title: 'More suggestive of active labor',
          description: 'The pattern becomes more regular, harder to talk through, and progressively stronger.',
          points: [
            'Contractions become closer together across several records',
            'Each contraction lasts around 45 to 70 seconds or longer',
            'You need to pause, breathe, or focus through the peak',
            'The pattern continues even after rest, hydration, or changing position',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'When not to wait for the timer',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Safety note:</strong> Do not wait for a timer alert if you have heavy bleeding, reduced fetal movement, severe headache, fever, green or foul-smelling fluid, intense constant pain, symptoms of preeclampsia, or any urgent concern. Call your maternity team or emergency services according to your local instructions.',
    },
    {
      type: 'title',
      text: 'What the history shows',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Start time: the clock time when the contraction began.',
        'Duration: stop time minus start time, rounded to seconds.',
        'Interval: current start time minus the previous contraction start time, shown in minutes.',
        'Recent trend: whether contractions are spacing out, staying irregular, or becoming more regular.',
      ],
    },
    {
      type: 'title',
      text: 'Common timing mistakes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Stopping the timer at the peak instead of when the contraction fully fades.',
        'Starting late because the contraction was mild at first, which makes duration look shorter.',
        'Counting only the strongest contractions and ignoring smaller ones in between.',
        'Assuming 5-1-1 always means immediate hospital admission. It usually means call for guidance, not self-diagnose active labor.',
        'Waiting too long in a second or later labor, where progression can be faster than the first birth.',
      ],
    },
    {
      type: 'title',
      text: 'Clinical limits',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Contraction timing is only one part of labor assessment. Cervical dilation, fetal wellbeing, pain coping, membrane rupture, gestational age, previous birth history, Group B strep status, distance from the hospital, pregnancy risk factors, and maternal symptoms can all change what your team recommends. Use the history as a clear record to share with your midwife, obstetrician, doula, or triage nurse.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Duration',
          definition: 'The length of one contraction, measured from the moment it starts until it ends.',
        },
        {
          term: 'Frequency',
          definition: 'The time from the start of one contraction to the start of the next contraction.',
        },
        {
          term: '5-1-1 rule',
          definition: 'A common labor timing pattern: contractions about 5 minutes apart, lasting about 1 minute, continuing for about 1 hour.',
        },
        {
          term: 'Prodromal labor',
          definition: 'A period of real contractions that may be uncomfortable and recurrent but does not always progress steadily into active labor.',
        },
        {
          term: 'Active labor',
          definition: 'A phase of labor with stronger, more regular contractions and cervical change, confirmed by clinical assessment.',
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
    safetyTitle: 'Use with your birth plan',
    safetyBody: 'This timer is for tracking and education. Contact your midwife, obstetrician, or maternity unit if you are unsure, symptoms worry you, or you were given different instructions.',
    idleStatus: 'Ready to time the next contraction',
    activeStatus: 'Contraction in progress',
    accidentalTapStatus: 'Too short',
    shortRecordLabel: 'Short or test tap',
    activeRowLabel: 'Active now',
    startButton: 'Start Contraction',
    stopButton: 'Stop Contraction',
    activeLabel: 'Active contraction',
    breathingLabel: 'Breathe slowly',
    breatheIn: 'Breathe in',
    breatheOut: 'Breathe out',
    currentDurationLabel: 'Current duration',
    lastIntervalLabel: 'Last interval',
    contractionCountLabel: 'Recorded',
    patternStatusTitle: 'Pattern status',
    patternStatusIdle: 'Ready to track',
    patternStatusTracking: 'Keep tracking',
    patternStatusBuilding: 'Pattern is building',
    patternStatusCall: 'Call your maternity team',
    patternStatusActiveBody: 'You have started recording. A few more contractions are needed before the pattern is meaningful.',
    patternStatusBuildingBody: 'Recent contractions are getting closer or lasting longer. Keep timing and prepare to call if they continue.',
    patternStatusCallBody: 'Recent contractions are close to the 5-1-1 pattern. Contact your midwife, obstetrician, or maternity unit now for personalized guidance.',
    averageLastThreeLabel: 'Last 3 average',
    averageLastSixLabel: 'Last 6 average',
    regularityLabel: 'Regularity',
    regularityNotEnough: 'Not enough data',
    regularityIrregular: 'Irregular',
    regularityVariable: 'Variable',
    regularityRegular: 'Regular',
    summaryTitle: 'Phone summary',
    summaryEmpty: 'Record at least three contractions to build a useful summary for your maternity team.',
    copySummaryButton: 'Copy summary',
    copiedSummaryButton: 'Copied',
    undoButton: 'Undo last',
    sessionOverviewTitle: 'Session overview',
    sessionOverviewBody: 'Start timing when a contraction begins. The active contraction will appear here immediately.',
    lastContractionLabel: 'Last contraction',
    historyTitle: 'Contraction history',
    emptyHistory: 'No contractions recorded yet.',
    startTimeHeader: 'Start time',
    durationHeader: 'Duration',
    intervalHeader: 'Interval',
    secondsSuffix: 'sec',
    minutesSuffix: 'min',
    noInterval: '-',
    resetButton: 'Reset',
    alertTitle: '5-1-1 pattern detected',
    alertBody: 'Your recent contractions look close to the common 5-1-1 pattern. Consider contacting your midwife or maternity unit now for personalized guidance.',
    patternTitle: 'What the alert checks',
    patternBody: 'The panel appears when recent contractions are 5 minutes apart or less, last at least 60 seconds, and sustain that pattern for about 1 hour.',
  },
};

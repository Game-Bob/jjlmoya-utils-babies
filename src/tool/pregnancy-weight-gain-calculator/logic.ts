export type PregnancyType = 'singleton' | 'twins';

export interface WeightGainGuideline {
  category: 'underweight' | 'normal' | 'overweight' | 'obesity';
  bmiMin: number;
  bmiMax: number | null;
  totalMinKg: number;
  totalMaxKg: number;
  weeklyMinKg: number;
  weeklyMaxKg: number;
}

export const SINGLETON_GUIDELINES: WeightGainGuideline[] = [
  { category: 'underweight', bmiMin: 0, bmiMax: 18.49, totalMinKg: 12.5, totalMaxKg: 18, weeklyMinKg: 0.44, weeklyMaxKg: 0.58 },
  { category: 'normal', bmiMin: 18.5, bmiMax: 24.99, totalMinKg: 11.5, totalMaxKg: 16, weeklyMinKg: 0.35, weeklyMaxKg: 0.5 },
  { category: 'overweight', bmiMin: 25, bmiMax: 29.99, totalMinKg: 7, totalMaxKg: 11.5, weeklyMinKg: 0.23, weeklyMaxKg: 0.33 },
  { category: 'obesity', bmiMin: 30, bmiMax: null, totalMinKg: 5, totalMaxKg: 9, weeklyMinKg: 0.17, weeklyMaxKg: 0.27 },
];

export const TWIN_GUIDELINES: Record<WeightGainGuideline['category'], { totalMinKg: number; totalMaxKg: number }> = {
  underweight: { totalMinKg: 12.5, totalMaxKg: 18 },
  normal: { totalMinKg: 16.8, totalMaxKg: 24.5 },
  overweight: { totalMinKg: 14.1, totalMaxKg: 22.7 },
  obesity: { totalMinKg: 11.3, totalMaxKg: 19.1 },
};

export function calculatePregnancyBmi(heightCm: number, weightKg: number): number {
  const heightM = heightCm / 100;
  if (heightM <= 0) return 0;
  return weightKg / (heightM * heightM);
}

export function getGuidelineForBmi(bmi: number, pregnancyType: PregnancyType): WeightGainGuideline {
  const singleton = SINGLETON_GUIDELINES.find((item) => bmi >= item.bmiMin && (item.bmiMax === null || bmi <= item.bmiMax)) ?? {
    category: 'normal',
    bmiMin: 18.5,
    bmiMax: 24.99,
    totalMinKg: 11.5,
    totalMaxKg: 16,
    weeklyMinKg: 0.35,
    weeklyMaxKg: 0.5,
  };
  if (pregnancyType === 'singleton') return singleton;
  const twins = TWIN_GUIDELINES[singleton.category];
  return {
    ...singleton,
    totalMinKg: twins.totalMinKg,
    totalMaxKg: twins.totalMaxKg,
    weeklyMinKg: Math.max(0, (twins.totalMinKg - 2) / 27),
    weeklyMaxKg: Math.max(0, (twins.totalMaxKg - 0.5) / 27),
  };
}

export function estimateGainRangeAtWeek(guideline: WeightGainGuideline, week: number): { minKg: number; maxKg: number } {
  const safeWeek = Math.min(Math.max(week, 0), 40);
  if (safeWeek <= 13) {
    return {
      minKg: (0.5 / 13) * safeWeek,
      maxKg: (2 / 13) * safeWeek,
    };
  }
  const activeWeeks = safeWeek - 13;
  return {
    minKg: Math.min(guideline.totalMinKg, 0.5 + activeWeeks * guideline.weeklyMinKg),
    maxKg: Math.min(guideline.totalMaxKg, 2 + activeWeeks * guideline.weeklyMaxKg),
  };
}

export function classifyCurrentGain(currentGainKg: number, guideline: WeightGainGuideline, week: number): 'below' | 'within' | 'above' {
  const range = estimateGainRangeAtWeek(guideline, week);
  if (currentGainKg < range.minKg) return 'below';
  if (currentGainKg > range.maxKg) return 'above';
  return 'within';
}

export function kgToLb(value: number): number {
  return value * 2.2046226218;
}

export function lbToKg(value: number): number {
  return value / 2.2046226218;
}

export function inToCm(value: number): number {
  return value * 2.54;
}

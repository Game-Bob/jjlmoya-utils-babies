export type FeedType = 'breast' | 'mixed' | 'formula';
export type AgeUnit = 'days' | 'weeks' | 'months';

export function toAgeInDays(age: number, unit: AgeUnit): number {
  if (unit === 'weeks') return age * 7;
  if (unit === 'months') return age * 30.44;
  return age;
}

export interface FeedingResult {
  numFeeds: number;
  perFeedMin: number;
  perFeedMax: number;
  totalMin: number;
  totalMax: number;
  showAcWarning: boolean;
  scale: number;
  hint: string;
}

function getStomachInfo(ageInDays: number): { scale: number; hint: string } {
  if (ageInDays <= 1) return { scale: 0.25, hint: 'Cereza' };
  if (ageInDays <= 4) return { scale: 0.5, hint: 'Nuez' };
  if (ageInDays <= 30) return { scale: 0.8, hint: 'Huevo' };
  return { scale: 1.0, hint: 'Máxima capacidad' };
}

function getNumFeeds(ageInDays: number): number {
  if (ageInDays < 30) return 8;
  if (ageInDays < 90) return 7;
  if (ageInDays < 180) return 5;
  return 4;
}

function getBaseRatio(ageInDays: number): number {
  if (ageInDays > 300) return 80;
  if (ageInDays > 180) return 100;
  return 150;
}

function applyEarlyAgeFactors(
  totalMin: number,
  totalMax: number,
  ageInDays: number,
  weight: number,
): [number, number] {
  if (ageInDays >= 10) return [totalMin, totalMax];
  const factor = Math.max(0.15, ageInDays / 10);
  let min = totalMin * factor;
  let max = totalMax * factor;
  if (ageInDays < 2) {
    min = weight * 15;
    max = weight * 25;
  }
  return [min, max];
}

function applyAcCap(min: number, max: number): [number, number] {
  return [Math.min(min, 800), Math.min(max, 950)];
}

function calcPerFeed(
  totalMin: number,
  totalMax: number,
  numFeeds: number,
  ageInDays: number,
): [number, number, number, number] {
  if (ageInDays <= 1) return [5, 10, 5 * numFeeds, 10 * numFeeds];
  const pMin = Math.min(Math.round((totalMin / numFeeds) / 5) * 5, 240);
  const pMax = Math.min(Math.round((totalMax / numFeeds) / 5) * 5, 270);
  return [pMin, pMax, Math.round(totalMin), Math.round(totalMax)];
}

export function calculateFeeding(ageInDays: number, weight: number): FeedingResult {
  const { scale, hint } = getStomachInfo(ageInDays);
  const numFeeds = getNumFeeds(ageInDays);
  const baseRatio = getBaseRatio(ageInDays);
  const showAcWarning = ageInDays >= 180;
  let tMin = weight * baseRatio;
  let tMax = weight * (baseRatio + 20);
  if (showAcWarning) [tMin, tMax] = applyAcCap(tMin, tMax);
  [tMin, tMax] = applyEarlyAgeFactors(tMin, tMax, ageInDays, weight);
  const [perFeedMin, perFeedMax, totalMin, totalMax] = calcPerFeed(tMin, tMax, numFeeds, ageInDays);
  return { numFeeds, perFeedMin, perFeedMax, totalMin, totalMax, showAcWarning, scale, hint };
}

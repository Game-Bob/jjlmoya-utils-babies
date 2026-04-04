import { boys, girls, interpolateLMS, type GenderData } from './lmsData';

interface LMSData {
  L: number;
  M: number;
  S: number;
}

function erf(x: number): number {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + p * ax);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
  return sign * y;
}

export function zToPercentile(z: number): number {
  return 0.5 * (1 + erf(z / Math.sqrt(2))) * 100;
}

export function calculatePercentile(val: number, lms: LMSData): number {
  const { L, M, S } = lms;
  if (L === 0) return zToPercentile(Math.log(val / M) / S);
  const z = (Math.pow(val / M, L) - 1) / (L * S);
  return zToPercentile(z);
}

export function getDescriptionKey(p: number): string {
  if (p < 3) return 'labelLowRange';
  if (p < 15) return 'labelLowNormal';
  if (p < 85) return 'labelNormal';
  if (p < 97) return 'labelHighNormal';
  return 'labelHighRange';
}

export function getDataSet(sex: string): GenderData {
  return sex === 'boy' ? boys : girls;
}

export function calcBMI(weight: number, height: number): number {
  return weight / Math.pow(height / 100, 2);
}

interface CurvePoint {
  x: number;
  y: number;
}

function zForCurve(c: number): number {
  if (c === 50) return 0;
  if (c === 3) return -1.88;
  if (c === 15) return -1.04;
  if (c === 85) return 1.04;
  return 1.88;
}

export function buildCurveData(dataSet: GenderData, z: number): CurvePoint[] {
  return Array.from({ length: 61 }, (_, m) => {
    const lms = interpolateLMS(m, dataSet.weight);
    if (lms.L === 0) return { x: m, y: lms.M * Math.exp(lms.S * z) };
    return { x: m, y: lms.M * Math.pow(1 + lms.L * lms.S * z, 1 / lms.L) };
  });
}

export const CURVES = [3, 15, 50, 85, 97];

export function buildChartDatasets(sex: string): object[] {
  const dataSet = getDataSet(sex);
  const mainColor = sex === 'boy' ? '#0ea5e9' : '#0d9488';
  return CURVES.map(c => ({
    label: `P${c}`,
    data: buildCurveData(dataSet, zForCurve(c)),
    borderColor: c === 50 ? mainColor : '#cbd5e1',
    borderWidth: c === 50 ? 2 : 1,
    fill: false,
    tension: 0.1,
    parsing: { xAxisKey: 'x', yAxisKey: 'y' }
  }));
}

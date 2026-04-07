import type { MilestoneI18n } from './index';

export function getMilestone(week: number, milestones: Record<number, MilestoneI18n>): MilestoneI18n {
  const keys = Object.keys(milestones).map(Number).sort((a, b) => b - a);
  for (const k of keys) {
    if (week >= k) return milestones[k]!;
  }
  return milestones[4]!;
}

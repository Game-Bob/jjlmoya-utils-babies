import { babyBudgetPlanner } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const BABY_BUDGET_PLANNER_TOOL: ToolDefinition = {
  entry: babyBudgetPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

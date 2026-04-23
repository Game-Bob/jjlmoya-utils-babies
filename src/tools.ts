export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { BABY_FEEDING_CALCULATOR_TOOL } from './tool/baby-feeding-calculator/index';
import { BABY_BUDGET_PLANNER_TOOL } from './tool/baby-budget-planner/index';
import { BABY_SIZE_CONVERTER_TOOL } from './tool/baby-size-converter/index';
import { VACCINATION_CALENDAR_TOOL } from './tool/vaccination-calendar/index';
import { FERTILE_DAYS_ESTIMATOR_TOOL } from './tool/fertile-days-estimator/index';
import { BABY_PERCENTILE_CALCULATOR_TOOL } from './tool/baby-percentile-calculator/index';
import { PREGNANCY_CALCULATOR_TOOL } from './tool/pregnancy-calculator/index';

export const ALL_TOOLS: ToolDefinition[] = [
  BABY_FEEDING_CALCULATOR_TOOL,
  BABY_BUDGET_PLANNER_TOOL,
  BABY_SIZE_CONVERTER_TOOL,
  VACCINATION_CALENDAR_TOOL,
  FERTILE_DAYS_ESTIMATOR_TOOL,
  BABY_PERCENTILE_CALCULATOR_TOOL,
  PREGNANCY_CALCULATOR_TOOL,
];



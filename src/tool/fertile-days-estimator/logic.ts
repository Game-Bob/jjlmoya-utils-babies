export interface CycleCalcResult {
  ovulationDate: Date;
  fertileStart: Date;
  nextPeriod: Date;
  nextPeriodEnd: Date;
}

export function calculateCycle(selectedDate: Date, cycleLength: number): CycleCalcResult {
  const ovulationDate = new Date(selectedDate);
  ovulationDate.setDate(selectedDate.getDate() + (cycleLength - 14));
  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(ovulationDate.getDate() - 5);
  const nextPeriod = new Date(selectedDate);
  nextPeriod.setDate(selectedDate.getDate() + cycleLength);
  const nextPeriodEnd = new Date(nextPeriod);
  nextPeriodEnd.setDate(nextPeriod.getDate() + 4);
  return { ovulationDate, fertileStart, nextPeriod, nextPeriodEnd };
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getMonthStartOffset(year: number, month: number): number {
  const firstDay = new Date(year, month, 1).getDay();
  return firstDay === 0 ? 6 : firstDay - 1;
}

export type DayType = 'selected-period' | 'ovulation' | 'fertile' | 'period' | 'today' | '';

function isFertileWindow(day: Date, result: CycleCalcResult): boolean {
  return day >= result.fertileStart && day < result.ovulationDate;
}

function isPeriodWindow(day: Date, result: CycleCalcResult): boolean {
  return day >= result.nextPeriod && day <= result.nextPeriodEnd;
}

function getTypedDay(day: Date, selected: Date, result: CycleCalcResult): DayType {
  if (day.getTime() === selected.getTime()) return 'selected-period';
  if (day.getTime() === result.ovulationDate.getTime()) return 'ovulation';
  if (isFertileWindow(day, result)) return 'fertile';
  if (isPeriodWindow(day, result)) return 'period';
  return '';
}

export function getDayType(
  currentDay: Date,
  selectedDate: Date | null,
  result: CycleCalcResult | null,
  today: Date
): DayType {
  const isToday = currentDay.getTime() === today.getTime();
  if (!selectedDate || !result) return isToday ? 'today' : '';
  const typed = getTypedDay(currentDay, selectedDate, result);
  if (typed) return typed;
  return isToday ? 'today' : '';
}

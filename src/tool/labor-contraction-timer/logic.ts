export interface ContractionRecord {
  id: string;
  startTime: number;
  endTime: number;
}

export interface ContractionSummary {
  id: string;
  startTime: number;
  durationSeconds: number;
  intervalMinutes: number | null;
}

export function calculateDurationSeconds(startTime: number, endTime: number): number {
  return Math.max(0, Math.round((endTime - startTime) / 1000));
}

export function calculateIntervalMinutes(currentStartTime: number, previousStartTime?: number): number | null {
  if (!previousStartTime) return null;
  return Math.max(0, (currentStartTime - previousStartTime) / 60000);
}

export function summarizeContractions(records: ContractionRecord[]): ContractionSummary[] {
  return records
    .slice()
    .sort((a, b) => b.startTime - a.startTime)
    .map((record, index, sorted) => {
      const previous = sorted[index + 1];
      return {
        id: record.id,
        startTime: record.startTime,
        durationSeconds: calculateDurationSeconds(record.startTime, record.endTime),
        intervalMinutes: calculateIntervalMinutes(record.startTime, previous?.startTime),
      };
    });
}

export function meetsFiveOneOnePattern(records: ContractionRecord[], now = Date.now()): boolean {
  const recent = summarizeContractions(records)
    .filter((item) => now - item.startTime <= 60 * 60 * 1000)
    .filter((item) => item.intervalMinutes !== null);

  if (recent.length < 12) return false;

  return recent.every((item) => item.durationSeconds >= 60 && item.intervalMinutes !== null && item.intervalMinutes <= 5);
}

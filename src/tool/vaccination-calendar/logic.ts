import { VACCINES } from './vaccinationData';

export interface DoseGroup {
  months: number;
  vaccines: string[];
}

export function buildDoseGroups(): DoseGroup[] {
  const groups: Record<number, string[]> = {};
  VACCINES.forEach((vac) => {
    vac.doses.forEach((d) => {
      if (!groups[d]) groups[d] = [];
      groups[d].push(vac.name);
    });
  });
  return Object.entries(groups)
    .map(([months, vaccines]) => ({ months: Number(months), vaccines }))
    .sort((a, b) => a.months - b.months);
}

export function getAgeLabel(months: number): string {
  if (months < 12) return `${months} meses`;
  if (months === 12) return '12 meses (1 año)';
  const yrs = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return `${yrs} ${yrs === 1 ? 'año' : 'años'}`;
  return `${months} meses`;
}

export function calculateAge(birthDate: Date, today: Date): string {
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();
  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  if (years === 0) return `${months} meses y ${days} días`;
  return `${years} años, ${months} meses y ${days} días`;
}

export function buildIcsContent(birthDate: Date, doseGroups: DoseGroup[]): string {
  let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//jjlmoya//VaxCal//ES\n';
  doseGroups.forEach(({ months, vaccines }) => {
    const target = new Date(birthDate);
    target.setMonth(target.getMonth() + months);
    if (target <= new Date()) return;
    const dateStr = target.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const label = months >= 12 ? `${Math.floor(months / 12)} años` : `${months} meses`;
    ics += `BEGIN:VEVENT\nDTSTART:${dateStr}\nSUMMARY:Vacunación ${label}: ${vaccines.join(', ')}\nDESCRIPTION:Cita de vacunación infantil.\nEND:VEVENT\n`;
  });
  ics += 'END:VCALENDAR';
  return ics;
}

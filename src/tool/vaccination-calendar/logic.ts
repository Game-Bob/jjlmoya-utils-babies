import { VACCINES } from './vaccinationData';

export interface DoseGroup {
  months: number;
  vaccines: string[];
}

export function buildDoseGroups(ui: Record<string, string>): DoseGroup[] {
  const groups: Record<number, string[]> = {};
  VACCINES.forEach((vac) => {
    const name = ui[`vac_${vac.id}`]!;
    vac.doses.forEach((d) => {
      if (!groups[d]) groups[d] = [];
      groups[d].push(name);
    });
  });
  return Object.entries(groups)
    .map(([months, vaccines]) => ({ months: Number(months), vaccines }))
    .sort((a, b) => a.months - b.months);
}

export function getAgeLabel(months: number, ui: Record<string, string>): string {
  const labelMonth = ui['labelMonth'];
  const labelMonths = ui['labelMonths'];
  const labelYear = ui['labelYear'];
  const labelYears = ui['labelYears'];

  if (months < 12) return `${months} ${months === 1 ? labelMonth : labelMonths}`;
  if (months === 12) return `12 ${labelMonths} (1 ${labelYear})`;
  const yrs = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return `${yrs} ${yrs === 1 ? labelYear : labelYears}`;
  return `${months} ${labelMonths}`;
}

export function calculateAge(birthDate: Date, today: Date, ui: Record<string, string>): string {
  const labelMonth = ui['labelMonth'];
  const labelMonths = ui['labelMonths'];
  const labelYear = ui['labelYear'];
  const labelYears = ui['labelYears'];
  const labelDay = ui['labelDay'];
  const labelDays = ui['labelDays'];
  const labelAnd = ui['labelAnd'];

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
  const mStr = `${months} ${months === 1 ? labelMonth : labelMonths}`;
  const dStr = `${days} ${days === 1 ? labelDay : labelDays}`;
  if (years === 0) return `${mStr} ${labelAnd} ${dStr}`;
  const yStr = `${years} ${years === 1 ? labelYear : labelYears}`;
  return `${yStr}, ${mStr} ${labelAnd} ${dStr}`;
}

export function buildIcsContent(birthDate: Date, doseGroups: DoseGroup[], ui: Record<string, string>): string {
  const labelVaccination = ui['labelVaccination'];
  const labelAppointment = ui['labelAppointment'];
  const labelMonth = ui['labelMonth'];
  const labelMonths = ui['labelMonths'];
  const labelYear = ui['labelYear'];
  const labelYears = ui['labelYears'];

  let ics = 'BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//jjlmoya//VaxCal//ES\n';
  doseGroups.forEach(({ months, vaccines }) => {
    const target = new Date(birthDate);
    target.setMonth(target.getMonth() + months);
    if (target <= new Date()) return;
    const dateStr = target.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const label = months >= 12
      ? `${Math.floor(months / 12)} ${Math.floor(months / 12) === 1 ? labelYear : labelYears}`
      : `${months} ${months === 1 ? labelMonth : labelMonths}`;
    ics += `BEGIN:VEVENT\nDTSTART:${dateStr}\nSUMMARY:${labelVaccination} ${label}: ${vaccines.join(', ')}\nDESCRIPTION:${labelAppointment}\nEND:VEVENT\n`;
  });
  ics += 'END:VCALENDAR';
  return ics;
}

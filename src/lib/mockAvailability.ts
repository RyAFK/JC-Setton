/**
 * Placeholder availability generator.
 *
 * No real booking/scheduling backend exists to query — this produces
 * plausible slots within the practice's public opening hours purely so the
 * booking flow is usable end-to-end. Replace with a real availability
 * lookup (the practice's booking/PMS provider) before launch.
 */

const SLOT_TIMES_WEEKDAY = ['09:30', '10:15', '11:00', '13:30', '14:15', '15:30', '16:15'];
const SLOT_TIMES_SATURDAY = ['08:30', '09:15', '10:00', '11:30', '12:15'];

export function isPracticeOpen(date: Date): boolean {
  const day = date.getDay();
  return day !== 0; // closed Sundays
}

export function getSlotsForDate(dateStr: string): string[] {
  const date = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(date.getTime()) || !isPracticeOpen(date)) return [];
  return date.getDay() === 6 ? SLOT_TIMES_SATURDAY : SLOT_TIMES_WEEKDAY;
}

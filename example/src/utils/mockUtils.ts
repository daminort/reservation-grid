import { Row, ReservedPeriod } from '@daminort/reservation-grid';

export function replacePeriod(data: Row, month: string, year: string): Row[] {
  return data.map((row: Row) => {
    const periods = row.periods.map((period: ReservedPeriod) => {
      const dayStart =  period.start.slice(8);
      const dayEnd =  period.end.slice(8);
      period.start = `${year}-${month}-${dayStart}`;
      period.end = `${year}-${month}-${dayEnd}`;

      return period;
    });

    return {
      ...row,
      periods,
    }
  });
}

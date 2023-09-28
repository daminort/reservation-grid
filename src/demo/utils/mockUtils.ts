import type { TRow, TReservedPeriod } from 'lib/index';

export function replacePeriod(data: TRow[], month: string, year: string): TRow[] {
  return data.map((row: TRow) => {
    const periods = row.periods.map((period: TReservedPeriod) => {
      const dayStart = period.start.slice(8);
      const dayEnd = period.end.slice(8);
      // eslint-disable-next-line no-param-reassign
      period.start = `${year}-${month}-${dayStart}`;
      // eslint-disable-next-line no-param-reassign
      period.end = `${year}-${month}-${dayEnd}`;

      return period;
    });

    return {
      ...row,
      periods,
    };
  });
}

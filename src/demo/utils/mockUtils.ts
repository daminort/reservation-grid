import type { Row, ReservedPeriod } from 'lib/index';

export function replacePeriod(data: Row[], month: string, year: string): Row[] {
  return data.map((row: Row) => {
    const periods = row.periods.map((period: ReservedPeriod) => {
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

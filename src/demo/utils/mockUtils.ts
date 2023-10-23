import type { TGridRow, TPeriod } from 'demo/interfaces/common.interface';

export function replacePeriod(data: TGridRow[], month: string, year: string): TGridRow[] {
  return data.map((row: TGridRow) => {
    const periods = row.periods.map((period: TPeriod) => {
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

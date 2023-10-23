import type { TReservedPeriod } from './reservedPeriod';

export interface TRow<TCustomStatus extends string = ''> {
  id: string;
  title: string;
  info: string;
  periods: TReservedPeriod<TCustomStatus>[];
}

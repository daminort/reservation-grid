import type { TReservedPeriod } from './reservedPeriod';

export interface TRow<TCustomStatus extends string = never> {
  id: string;
  title: string;
  info: string;
  periods: TReservedPeriod<TCustomStatus>[];
}

import type { TReservedPeriod } from './reservedPeriod';

export interface TRow {
  id: string;
  title: string;
  info: string;
  periods: TReservedPeriod[];
}

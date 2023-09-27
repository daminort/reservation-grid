import type { ReservedPeriod } from './reservedPeriod';

export interface Row {
  value: string;
  info: string;
  periods: ReservedPeriod[];
}

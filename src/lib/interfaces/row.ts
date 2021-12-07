import { ReservedPeriod } from 'lib/interfaces/reservedPeriod';

export interface Row {
  value: string;
  info: string;
  periods: ReservedPeriod[];
}

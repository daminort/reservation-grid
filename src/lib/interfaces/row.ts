import { ReservedPeriod } from 'lib/interfaces/reservedPeriod';

export interface Row {
  value: string;
  info: string;
  column3: string;
  periods: ReservedPeriod[];
}

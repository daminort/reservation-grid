import type { TDateStatus } from './grid.interface';

export interface TReservedPeriod {
  start: string;
  end: string;
  status: TDateStatus;
}

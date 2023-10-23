import type { TDateStatus } from './grid.interface';

export interface TReservedPeriod<TCustomStatus extends string = ''> {
  start: string;
  end: string;
  status: TDateStatus<TCustomStatus>;
}

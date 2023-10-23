import type { TDateStatus } from './grid.interface';

export interface TReservedPeriod<TCustomStatus extends string = never> {
  start: string;
  end: string;
  status: TDateStatus<TCustomStatus>;
}

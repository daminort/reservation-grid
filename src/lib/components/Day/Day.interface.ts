import type { TDayType } from 'lib/interfaces/grid.interface';

interface TDayProps {
  type: TDayType,
  topColor: string;
  bottomColor?: string;
}

export type {
  TDayProps,
};

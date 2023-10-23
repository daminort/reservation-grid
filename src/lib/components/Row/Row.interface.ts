import type { ReactNode } from 'react';

import type { TRow } from 'lib/interfaces/row';
import type { TDayType, TDateStatus } from 'lib/interfaces/grid.interface';

type TRowProps<TCustomStatus extends string = ''> = Omit<TRow<TCustomStatus>, 'title' | 'info'> & {
  selected: boolean;
  title: string | ReactNode;
  info: string | ReactNode;
};

type TDayParams<TCustomStatus extends string = ''> = {
  dayType: TDayType;
  dayStatus: TDateStatus<TCustomStatus>[];
};

export type {
  TRowProps,
  TDayParams,
};

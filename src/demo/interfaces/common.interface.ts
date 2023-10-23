import type { TTheme, TRow, TReservedPeriod } from 'lib/index';

type TCustomStatus = 'reserved' | 'renovation';

type TGridRow = TRow<TCustomStatus>;
type TPeriod = TReservedPeriod<TCustomStatus>;
type TMainTheme = TTheme<TCustomStatus>;

export type {
  TCustomStatus,
  TGridRow,
  TPeriod,
  TMainTheme,
};

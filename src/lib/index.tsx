import React from 'react';
import type { FC } from 'react';

import type { TDaysRangeOptions, TDaysRange } from 'lib/interfaces/daysRange.interface';
import type { TDateStatus, TDatePosition, TDayType } from 'lib/interfaces/grid.interface';
import type { TLocale, TLocales, TLocaleKey } from 'lib/interfaces/locale.interface';
import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import type { TReservedPeriod } from 'lib/interfaces/reservedPeriod';
import type { TRow } from 'lib/interfaces/row';
import type { TTheme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';

import { Grid, TGridProps } from 'lib/components/Grid';
import './styles.scss';

const ReservationGrid: FC<TGridProps> = (props) => {
  return (
    <Grid {...props} />
  );
};

export default ReservationGrid;

export type {
  TGridProps,
  TDaysRange,
  TDaysRangeOptions,
  TDateStatus,
  TDatePosition,
  TDayType,
  TLocale,
  TLocales,
  TLocaleKey,
  TMainContext,
  TReservedPeriod,
  TRow,
  TTheme,
};

export {
  ReservationGrid,
  THEME,
};

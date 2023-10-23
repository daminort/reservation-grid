import React from 'react';

import type { TDaysRangeOptions, TDaysRange } from 'lib/interfaces/daysRange.interface';
import type { TDateStatus, TDatePosition, TDayType, TClickCellEventData } from 'lib/interfaces/grid.interface';
import type { TLocale, TLocales, TLocaleKey } from 'lib/interfaces/locale.interface';
import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import type { TReservedPeriod } from 'lib/interfaces/reservedPeriod';
import type { TRow } from 'lib/interfaces/row';
import type { TGridProps } from 'lib/components/Grid';
import type { TTheme } from 'lib/interfaces/theme.interface';

import { THEME } from 'lib/constants/theme';
import { Grid } from 'lib/components/Grid';

import './styles.scss';

function ReservationGrid<TCustomStatus extends string = never>(props: TGridProps<TCustomStatus>) {
  return (
    <Grid {...props} />
  );
}

export type {
  TGridProps,
  TDaysRange,
  TDaysRangeOptions,
  TDateStatus,
  TDatePosition,
  TDayType,
  TClickCellEventData,
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

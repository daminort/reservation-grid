import React from 'react';
import type { FC } from 'react';

import type { DaysRangeOptions, DaysRange } from 'lib/interfaces/daysRange.interface';
import type { DateStatus, DatePosition, DayType } from 'lib/interfaces/grid.interface';
import type { Locale, Locales, LocaleKey } from 'lib/interfaces/locale.interface';
import type { MainContext } from 'lib/interfaces/mainContext.interface';
import type { ReservedPeriod } from 'lib/interfaces/reservedPeriod';
import type { Row } from 'lib/interfaces/row';
import type { Theme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';

import { Grid, GridProps } from 'lib/components/Grid';
import './styles.scss';

const ReservationGrid: FC<GridProps> = (props) => {
  return (
    <Grid {...props} />
  );
};

export default ReservationGrid;

export type {
  GridProps,
  DaysRange,
  DaysRangeOptions,
  DateStatus,
  DatePosition,
  DayType,
  Locale,
  Locales,
  LocaleKey,
  MainContext,
  ReservedPeriod,
  Row,
  Theme,
};

export {
  ReservationGrid,
  THEME,
};

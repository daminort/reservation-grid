import React, { FC } from 'react';

import { DaysRangeOptions, DaysRange } from 'lib/interfaces/daysRange.interface';
import { DateStatus, DatePosition, DayType } from 'lib/interfaces/grid.interface';
import { Locale, Locales, LocaleKey } from 'lib/interfaces/locale.interface';
import { MainContext } from 'lib/interfaces/mainContext.interface';
import { ReservedPeriod } from 'lib/interfaces/reservedPeriod';
import { Row } from 'lib/interfaces/row';
import { Theme } from 'lib/interfaces/theme.interface';
import { THEME } from 'lib/constants/theme';

import { Grid, GridProps } from 'lib/components/Grid';
import './styles.scss';

const ReservationGrid: FC<GridProps> = (props) => {
  return (
    <Grid {...props} />
  );
};

export default ReservationGrid;
export {
  ReservationGrid,
  GridProps,
  DaysRange, DaysRangeOptions,
  DateStatus, DatePosition, DayType,
  Locale, Locales, LocaleKey,
  MainContext,
  ReservedPeriod,
  Row,
  Theme,
  THEME,
}

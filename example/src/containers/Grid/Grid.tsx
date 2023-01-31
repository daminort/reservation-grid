import React, { FC, useMemo, useCallback } from 'react';
import { ReservationGrid, GridProps } from '@jylopez/reservation-grid';

import { useMainContext } from 'context/mainContext';
import { createStartEnd } from 'utils/dateUtils';

const Grid: FC = () => {
  const {
    year,
    month,
    title,
    info,
    column3,
    highlightToday,
    showInfo,
    showColumn3,
    selectedColumns,
    selectedRows,
    data,
    theme,
    locale,
    onChangeSelectedColumns,
    onChangeSelectedRows,
  } = useMainContext();

  const { start, end } = useMemo(() => createStartEnd(+year, +month), [year, month]);

  const onClickTitle = useCallback((value) => {
    onChangeSelectedRows([value]);
  }, [onChangeSelectedRows]);

  const onClickCell = useCallback(({ value, date }) => {
    onChangeSelectedColumns([date]);
    onChangeSelectedRows([value]);
  }, [onChangeSelectedColumns, onChangeSelectedRows]);

  const props: GridProps = {
    start,
    end,
    title,
    info,
    column3,
    highlightToday,
    showInfo,
    showColumn3,
    selectedColumns,
    selectedRows,
    data,
    theme,
    locale,
    onClickTitle: onClickTitle,
    onClickCell: onClickCell,
  }

  return (
    <ReservationGrid {...props} />
  );
}

export {
  Grid,
};

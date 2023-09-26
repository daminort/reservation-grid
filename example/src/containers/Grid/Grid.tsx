import React, { FC, useMemo, useCallback } from 'react';
import { ReservationGrid, GridProps, Row } from '@daminort/reservation-grid';

import { useMainContext } from 'context/mainContext';
import { createStartEnd } from 'utils/dateUtils';

const Grid: FC = () => {
  const {
    year,
    month,
    title,
    info,
    highlightToday,
    showInfo,
    selectedColumns,
    selectedRows,
    data,
    theme,
    locale,
    onChangeSelectedColumns,
    onChangeSelectedRows,
  } = useMainContext();

  const { start, end } = useMemo(() => createStartEnd(+year, +month), [year, month]);

  const onClickTitle = useCallback((value: string) => {
    onChangeSelectedRows([value]);
  }, [onChangeSelectedRows]);

  const onClickCell = useCallback((data: { value: string, date: string }) => {
    onChangeSelectedColumns([data.date]);
    onChangeSelectedRows([data.value]);
  }, [onChangeSelectedColumns, onChangeSelectedRows]);

  const renderTitle = useCallback((row: Row) => {
    return `Room ${row.value}`;
  }, []);

  const props: GridProps = {
    start,
    end,
    title,
    info,
    highlightToday,
    showInfo,
    selectedColumns,
    selectedRows,
    data,
    theme,
    locale,
    renderTitle: renderTitle,
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

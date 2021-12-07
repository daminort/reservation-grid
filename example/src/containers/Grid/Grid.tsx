import React, { FC, useMemo, useCallback } from 'react';
import { ReservationGrid, GridProps } from '@daminort/reservation-grid';

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
    onChangeSelectedColumns,
    onChangeSelectedRows,
  } = useMainContext();

  const { start, end } = useMemo(() => createStartEnd(year, month), [year, month]);
  const rows = useMemo(() => data.map(row => row.value), [data]);

  const onClickTitle = useCallback((value) => {
    onChangeSelectedRows([value]);
  }, [onChangeSelectedRows]);

  const onClickCell = useCallback((value, date) => {
    onChangeSelectedColumns([date]);
    onChangeSelectedRows([value]);
  }, [onChangeSelectedColumns, onChangeSelectedRows]);

  const props: GridProps = {
    start,
    end,
    title,
    info,
    highlightToday,
    showInfo,
    rows,
    selectedColumns,
    selectedRows,
    data,
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

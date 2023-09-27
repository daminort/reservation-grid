import React, { useMemo, useCallback } from 'react';
import type { FC } from 'react';

import { ReservationGrid } from 'lib/index';
import type { TGridProps, TRow } from 'lib/index';

import { useMainContext } from 'demo/context/mainContext';
import { createStartEnd } from 'demo/utils/dateUtils';

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

  const onClickCell = useCallback((data: { id: string, date: string }) => {
    onChangeSelectedColumns([data.date]);
    onChangeSelectedRows([data.id]);
  }, [onChangeSelectedColumns, onChangeSelectedRows]);

  const renderTitle = useCallback((row: TRow) => {
    return row.title;
  }, []);

  const props: TGridProps = {
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
    renderTitle,
    onClickTitle,
    onClickCell,
  };

  return (
    <ReservationGrid {...props} />
  );
};

export {
  Grid,
};

import React, { FC, useCallback } from 'react';
import clsx from 'clsx';

import type { DayType } from 'lib/interfaces/grid.interface';
import type { DaysRange } from 'lib/interfaces/daysRange.interface';

import { useMainContext } from 'lib/context';
import { useDaysRange } from 'lib/hooks';
import { dateUtils } from 'lib/utils/dateUtils';

import { Day } from 'lib/components/Day';

import type { RowProps } from './Row.interface';

const Row: FC<RowProps> = (props) => {
  const { value, info, periods, selected } = props;

  const { start, end, locale = 'en', highlightToday, showInfo, selectedColumns, onClickTitle, onClickCell } = useMainContext();
  const range: DaysRange[] = useDaysRange(start, end, locale);

  const onClickTitleLocal = useCallback(() => {
    if (!onClickTitle) {
      return;
    }

    onClickTitle(value as string);
  }, [value, onClickTitle]);

  const onClickCellLocal = useCallback((date: string, dayType: DayType) => () => {
    if (!onClickCell) {
      return;
    }

    onClickCell({ value: value as string, date, dayType });
  }, [value, onClickCell]);

  const renderCell = (cell: DaysRange) => {

    const { isWeekend } = cell;
    const isToday = highlightToday && cell.isToday;
    const isSelected = selected || (Array.isArray(selectedColumns) && selectedColumns.includes(cell.value));

    const className = clsx('cell', 'clickable', {
      'weekend': isWeekend,
      'today': isToday,
      'selected': isSelected,
    });

    const dayType = dateUtils.getDayType(cell.value, periods);

    return (
      <td
        key={cell.value}
        className={className}
        onClick={onClickCellLocal(cell.value, dayType)}
        data-testid={`cell-${value}-${cell.value}`}
      >
        <Day type={dayType} />
      </td>
    );
  };

  const clsTitle = clsx('title', 'clickable', 'fixed', { selected });
  const clsInfo = clsx('info', { selected });

  return (
    <tr data-testid={`row-${value}`}>
      <td className={clsTitle} onClick={onClickTitleLocal} data-testid={`title-${value}`}>{value}</td>
      {showInfo && (<td className={clsInfo} data-testid={`info-${value}`}>{info}</td>)}
      {range.map(cell => renderCell(cell))}
    </tr>
  );
};

export {
  Row,
};

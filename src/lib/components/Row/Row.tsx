import type { FC } from 'react';
import React, { useCallback } from 'react';
import clsx from 'clsx';

import type { TDayType } from 'lib/interfaces/grid.interface';
import type { TDaysRange } from 'lib/interfaces/daysRange.interface';

import { useMainContext } from 'lib/context';
import { useDaysRange } from 'lib/hooks';
import { dateUtils } from 'lib/utils/dateUtils';

import { Day } from 'lib/components/Day';

import type { TRowProps } from './Row.interface';

const Row: FC<TRowProps> = (props) => {
  const { id, title, info, periods, selected } = props;

  const {
    start,
    end,
    locale = 'en',
    highlightToday,
    showInfo,
    selectedColumns,
    onClickTitle,
    onClickCell,
  } = useMainContext();

  const range: TDaysRange[] = useDaysRange(start, end, locale);

  const onClickTitleLocal = useCallback(() => {
    if (!onClickTitle) {
      return;
    }

    onClickTitle(id);
  }, [id, onClickTitle]);

  const onClickCellLocal = useCallback((date: string, dayType: TDayType) => () => {
    if (!onClickCell) {
      return;
    }

    onClickCell({ id, date, dayType });
  }, [id, onClickCell]);

  const renderCell = (cell: TDaysRange) => {
    const { isWeekend } = cell;
    const isToday = highlightToday && cell.isToday;
    const isSelected = selected || (Array.isArray(selectedColumns) && selectedColumns.includes(cell.value));

    const className = clsx('rvg-cell', 'rvg-clickable', {
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
        data-testid={`cell-${id}-${cell.value}`}
      >
        <div className="day">
          <Day type={dayType} />
        </div>
      </td>
    );
  };

  const clsTitle = clsx('rvg-title', 'rvg-clickable', 'rvg-fixed', { selected });
  const clsInfo = clsx('rvg-info', { selected });

  return (
    <tr data-testid={`row-${id}`}>
      <td className={clsTitle} onClick={onClickTitleLocal} data-testid={`title-${id}`}>{title}</td>
      {showInfo && (<td className={clsInfo} data-testid={`info-${id}`}>{info}</td>)}
      {range.map(cell => renderCell(cell))}
    </tr>
  );
};

export {
  Row,
};

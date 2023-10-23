import React, { useCallback } from 'react';
import clsx from 'clsx';

import type { TDayType } from 'lib/interfaces/grid.interface';
import type { TDaysRange } from 'lib/interfaces/daysRange.interface';
import type { TTheme } from 'lib/interfaces/theme.interface';

import { useMainContext } from 'lib/context';
import { useDaysRange, useTheme } from 'lib/hooks';
import { dateUtils } from 'lib/utils/dateUtils';

import { Day } from 'lib/components/Day';

import type { TRowProps } from './Row.interface';

function Row<TCustomStatus extends string = ''>(props: TRowProps<TCustomStatus>) {
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

  const theme: TTheme<TCustomStatus> = useTheme();
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

    const dayParams = dateUtils.getDayParams(cell.value, periods);
    const { dayType, dayStatus } = dayParams;

    const topColor = theme['date.status'][dayStatus[0]];
    const bottomColor = theme['date.status'][dayStatus[1]];

    return (
      <td
        key={cell.value}
        className={className}
        onClick={onClickCellLocal(cell.value, dayType)}
        data-testid={`cell-${id}-${cell.value}`}
      >
        <div className="day">
          <Day
            type={dayType}
            topColor={topColor}
            bottomColor={bottomColor}
          />
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
}

export {
  Row,
};

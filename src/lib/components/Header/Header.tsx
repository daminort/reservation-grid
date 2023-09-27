import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';

import type { TDaysRange } from 'lib/interfaces/daysRange.interface';

import { useMainContext } from 'lib/context';
import { useDaysRange } from 'lib/hooks';

import type { THeaderProps } from './Header.interface';

const Header: FC<THeaderProps> = ({ title, info }) => {

  const { start, end, locale = 'en', highlightToday, showInfo, selectedColumns } = useMainContext();
  const range = useDaysRange(start, end, locale);

  const renderCell = (cell: TDaysRange, field: keyof TDaysRange) => {

    const { isWeekend } = cell;
    const isToday = highlightToday && cell.isToday;
    const isSelected = Array.isArray(selectedColumns) && selectedColumns.includes(cell.value);

    const className = clsx('cell', {
      'weekend': isWeekend,
      'today': isToday,
      'selected': isSelected,
    });

    return (
      <td
        key={cell.value}
        className={className}
        data-testid={`cell-${field}-${cell.value}`}
      >
        {cell[field]}
      </td>
    );
  };

  const clsTitle = clsx('title', 'fixed');

  return (
    <thead data-testid="header">
      <tr data-testid="row-days">
        <td rowSpan={2} className={clsTitle} data-testid="title">{title}</td>
        {showInfo && (<td rowSpan={2} className="info" data-testid="info">{info}</td>)}
        {range.map(cell => renderCell(cell, 'day'))}
      </tr>
      <tr data-testid="row-dates">
        {range.map(cell => renderCell(cell, 'date'))}
      </tr>

    </thead>
  );
};

export {
  Header,
};

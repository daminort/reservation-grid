import React, { FC, useMemo } from 'react';

import { useMainContext } from 'context/mainContext';
import { createStartEnd } from 'utils/dateUtils';
import s from './Props.module.css';

const Props: FC = () => {

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
  } = useMainContext();

  const { start, end } = useMemo(() => createStartEnd(+year, +month), [year, month]);
  const rows = useMemo(() => data.map(row => row.value), [data]);

  const props = JSON.stringify({
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
    onClickTitle: '(value) => console.log(value)',
    onClickCell: '(value, date, dateType) => console.log(value, date, dateType)',
  }, null, 2);

  return (
    <pre className={s.container}>
      <code>
        {props}
      </code>
    </pre>
  );
};

export {
  Props,
};

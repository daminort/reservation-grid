/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import type { FC } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useMainContext } from 'demo/context/mainContext';
import { createStartEnd } from 'demo/utils/dateUtils';

import { createCode } from './assets';
import s from './Props.module.css';

const customStyle = { fontSize: 13 };

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
    theme,
    locale,
  } = useMainContext();

  const { start, end } = useMemo(() => createStartEnd(+year, +month), [year, month]);

  const props = JSON.stringify({
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
    onClickTitle: '(value) => console.log(value)',
    onClickCell: '({ value, date, dateType }) => console.log({ value, date, dateType })',
  }, null, 2);

  const code = createCode(props);

  return (
    <div className={s.wrapper}>
      <SyntaxHighlighter
        showLineNumbers
        language="typescript"
        style={darcula}
        customStyle={customStyle}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export {
  Props,
};

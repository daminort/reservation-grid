import React, { FC, useState, useEffect } from 'react';

import { MainProvider } from 'lib/context';
import { Theme } from 'lib/interfaces/theme.interface';
import { Row } from 'lib/interfaces/row';
import { styleUtils } from 'lib/utils/styleUtils';

import { Header } from 'lib/components/Header';
import { Row as VisualRow } from 'lib/components/Row';

import { GridProps } from './Grid.interface';

const Grid: FC<GridProps> = (props) => {
  const {
    start,
    end,
    title = 'Number',
    info = '',
    column3 = '',
    highlightToday = true,
    showInfo = true,
    showColumn3 = true,
    selectedColumns = [],
    selectedRows = [],
    data,
    theme,
    locale = 'en',
    onClickTitle = () => {},
    onClickCell = () => {},
  } = props;

  const [customTheme, setCustomTheme] = useState<Theme>(styleUtils.createTheme(theme));

  useEffect(() => {
    const resTheme = styleUtils.createTheme(theme);
    setCustomTheme(resTheme);

    styleUtils.setVariables(resTheme);
  }, [theme]);

  const contextValue = {
    start,
    end,
    highlightToday,
    showInfo,
    showColumn3,
    selectedColumns,
    selectedRows,
    theme: customTheme,
    locale: locale || 'en',
    onClickTitle,
    onClickCell,
  };

  const renderRow = (row: Row) => {
    const isSelected = Array.isArray(selectedRows) && selectedRows.includes(row.value);

    return (
      <VisualRow
        key={row.value}
        value={row.value}
        info={row.info}
        column3={row.column3}
        periods={row.periods}
        selected={isSelected}
      />
    )
  }

  return (
    <MainProvider value={contextValue}>
      <div className="wrapper" data-testid="grid-wrapper">
        <table className="table">
          <Header
            title={title}
            info={info}
            column3={column3}
          />
          <tbody>
            {data.map(row => renderRow(row))}
          </tbody>
        </table>
      </div>
    </MainProvider>
  );
};

export { Grid };

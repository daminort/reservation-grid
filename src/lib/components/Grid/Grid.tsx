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
    highlightToday = true,
    showInfo = true,
    selectedColumns = [],
    selectedRows = [],
    data,
    theme,
    renderTitle,
    renderInfo,
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
    selectedColumns,
    selectedRows,
    theme: customTheme,
    locale: locale || 'en',
    onClickTitle,
    onClickCell,
  };

  const renderRow = (row: Row) => {
    const isSelected = Array.isArray(selectedRows) && selectedRows.includes(row.value);
    const value = renderTitle ? renderTitle(row) : row.value;
    const info = renderInfo ? renderInfo(row) : row.info;

    return (
      <VisualRow
        key={row.value}
        value={value}
        info={info}
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

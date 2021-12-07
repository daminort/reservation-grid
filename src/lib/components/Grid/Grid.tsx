import React, { FC, useState, useEffect } from 'react';

import { MainProvider } from 'lib/context';
import { Theme } from 'lib/interfaces/theme.interface';
import { styleUtils } from 'lib/utils/styleUtils';

import { Header } from 'lib/components/Header';
import { Row } from 'lib/components/Row';

import { GridProps } from './Grid.interface';

const Grid: FC<GridProps> = (props) => {
  const {
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
    theme,
    locale,
    onClickTitle,
    onClickCell,
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

  const renderRow = (rowValue: string) => {
    const isSelected = Array.isArray(selectedRows) && selectedRows.includes(rowValue);
    const row = data.find(row => row.value === rowValue);
    if (!row) {
      return null;
    }

    return (
      <Row
        key={rowValue}
        value={rowValue}
        info={row.info}
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
            {rows.map(rowValue => renderRow(rowValue))}
          </tbody>
        </table>
      </div>
    </MainProvider>
  );
};

export { Grid };

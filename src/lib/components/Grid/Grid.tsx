import React, { useState, useEffect } from 'react';

import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import type { TTheme } from 'lib/interfaces/theme.interface';
import type { TRow } from 'lib/interfaces/row';

import { MainProvider } from 'lib/context';
import { styleUtils } from 'lib/utils/styleUtils';

import { Header } from 'lib/components/Header';
import { Row as VisualRow } from 'lib/components/Row';

import type { TGridProps } from './Grid.interface';

function Grid<TCustomStatus extends string = never>(props: TGridProps<TCustomStatus>) {
  const {
    start,
    end,
    title = 'Room',
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

  const [customTheme, setCustomTheme] = useState<TTheme<TCustomStatus>>(styleUtils.createTheme<TCustomStatus>(theme));

  useEffect(() => {
    const resTheme = styleUtils.createTheme<TCustomStatus>(theme);
    setCustomTheme(resTheme);

    styleUtils.setVariables(resTheme);
  }, [theme]);

  const contextValue: TMainContext<TCustomStatus> = {
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

  const renderRow = (row: TRow<TCustomStatus>) => {
    const isSelected = Array.isArray(selectedRows) && selectedRows.includes(row.id);
    const title = renderTitle ? renderTitle(row) : row.title;
    const info = renderInfo ? renderInfo(row) : row.info;

    return (
      <VisualRow
        key={row.id}
        id={row.id}
        title={title}
        info={info}
        periods={row.periods}
        selected={isSelected}
      />
    );
  };

  return (
    <MainProvider value={contextValue}>
      <div className="rvg-wrapper" data-testid="grid-wrapper">
        <table className="rvg-table">
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
}

export {
  Grid,
};

import React, { useState, useCallback } from 'react';
import type { FC } from 'react';

import type { TLocaleKey } from 'lib/index';

import type { TGridRow, TMainTheme } from 'demo/interfaces/common.interface';
import type { TMainContext } from 'demo/interfaces/mainContext.interface';
import { MainProvider, initialValue } from 'demo/context/mainContext';

import { Grid } from 'demo/containers/Grid';
import { Header } from 'demo/containers/Header';
import { Config } from 'demo/containers/Config';
import { DayStatus } from 'demo/containers/DayStatus';
import { ThemeConfig } from 'demo/containers/ThemeConfig';
import { Props } from 'demo/containers/Props';

import s from './App.module.css';

const App: FC = () => {

  const [year, setYear] = useState<string>(initialValue.year);
  const [month, setMonth] = useState<string>(initialValue.month);

  const [title, setTitle] = useState<string>(initialValue.title);
  const [info, setInfo] = useState<string>(initialValue.info);

  const [highlightToday, setHighlightToday] = useState<boolean>(initialValue.highlightToday);
  const [showInfo, setShowInfo] = useState<boolean>(initialValue.showInfo);

  const [selectedColumns, setSelectedColumns] = useState<string[]>(initialValue.selectedColumns);
  const [selectedRows, setSelectedRows] = useState<string[]>(initialValue.selectedRows);

  const [theme, setTheme] = useState<TMainTheme>(initialValue.theme);
  const [locale, setLocale] = useState<TLocaleKey>(initialValue.locale);

  const [data, setData] = useState<TGridRow[]>(initialValue.data);

  const onChangeTheme = useCallback((partialTheme: Partial<TMainTheme>) => {
    const nextTheme: TMainTheme = {
      ...theme,
      ...partialTheme,
    };
    setTheme(nextTheme);
  }, [theme]);

  const contextValue: TMainContext = {
    year,
    month,
    highlightToday,
    showInfo,
    title,
    info,
    selectedColumns,
    selectedRows,
    theme,
    locale,
    data,

    onChangeYear: setYear,
    onChangeMonth: setMonth,
    onChangeHighlightToday: setHighlightToday,
    onChangeShowInfo: setShowInfo,

    onChangeTitle: setTitle,
    onChangeInfo: setInfo,

    onChangeSelectedColumns: setSelectedColumns,
    onChangeSelectedRows: setSelectedRows,

    onChangeTheme,
    onChangeLocale: setLocale,

    onChangeData: setData,
  };

  return (
    <MainProvider value={contextValue}>
      <div className={s.container}>
        <Header />
        <Grid />
        <div className={s.settings}>
          <div>
            <div className={s.config}>
              <h3>Configuration</h3>
              <Config />
            </div>
            <div className={s.status}>
              <h3>Day Status</h3>
              <DayStatus />
            </div>
          </div>
          <div>
            <div className={s.theme}>
              <h3>Theme</h3>
              <ThemeConfig />
            </div>
          </div>
        </div>
        <div className={s.example}>
          <h3>Code Example</h3>
          <Props />
        </div>
      </div>
    </MainProvider>
  );
};

export {
  App,
};

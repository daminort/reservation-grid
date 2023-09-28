import React, { useState, useCallback } from 'react';
import type { FC } from 'react';

import type { TTheme, TLocaleKey, TRow } from 'lib/index';

import type { TMainContext } from 'demo/interfaces/mainContext.interface';
import { MainProvider, initialValue } from 'demo/context/mainContext';

import { Grid } from 'demo/containers/Grid';
import { Header } from 'demo/containers/Header';
import { Config } from 'demo/containers/Config';
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

  const [theme, setTheme] = useState<TTheme>(initialValue.theme);
  const [locale, setLocale] = useState<TLocaleKey>(initialValue.locale);

  const [data, setData] = useState<TRow[]>(initialValue.data);

  const onChangeTheme = useCallback((partialTheme: Partial<TTheme>) => {
    const nextTheme: TTheme = {
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
          <div className={s.left}>
            <div className={s.config}>
              <h3>Configuration</h3>
              <Config />
            </div>
            <div className={s.theme}>
              <h3>Theme</h3>
              <ThemeConfig />
            </div>
          </div>
          <div className={s.props}>
            <h3>Props</h3>
            <Props />
          </div>
        </div>
      </div>
    </MainProvider>
  );
};

export {
  App,
};

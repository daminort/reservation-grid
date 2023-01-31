import React, { FC, useState } from 'react';
import { Theme, LocaleKey, Row } from '@jylopez/reservation-grid';

import { MainProvider, initialValue } from 'context/mainContext';

import { Grid } from 'containers/Grid';
import { Header } from 'containers/Header';
import { Config } from 'containers/Config';
import { ThemeConfig } from 'containers/ThemeConfig';
import { Props } from 'containers/Props';
import s from './App.module.css';

const App: FC = () => {

  const [year, setYear] = useState<string>(initialValue.year);
  const [month, setMonth] = useState<string>(initialValue.month);

  const [title, setTitle] = useState<string>(initialValue.title);
  const [info, setInfo] = useState<string>(initialValue.info);
  const [column3, setColumn3] = useState<string>(initialValue.column3);

  const [highlightToday, setHighlightToday] = useState<boolean>(initialValue.highlightToday);
  const [showInfo, setShowInfo] = useState<boolean>(initialValue.showInfo);
  const [showColumn3, setShowColumn3] = useState<boolean>(initialValue.showColumn3);

  const [selectedColumns, setSelectedColumns] = useState<string[]>(initialValue.selectedColumns);
  const [selectedRows, setSelectedRows] = useState<string[]>(initialValue.selectedRows);

  const [theme, setTheme] = useState<Theme>(initialValue.theme);
  const [locale, setLocale] = useState<LocaleKey>(initialValue.locale);

  const [data, setData] = useState<Row[]>(initialValue.data);

  const contextValue = {
    year,
    month,
    highlightToday,
    showInfo,
    showColumn3,
    title,
    info,
    column3,
    selectedColumns,
    selectedRows,
    theme,
    locale,
    data,

    onChangeYear: setYear,
    onChangeMonth: setMonth,
    onChangeHighlightToday: setHighlightToday,
    onChangeShowInfo: setShowInfo,
    onChangeShowColumn3: setShowColumn3,

    onChangeTitle: setTitle,
    onChangeInfo: setInfo,
    onChangeColumn3: setColumn3,

    onChangeSelectedColumns: setSelectedColumns,
    onChangeSelectedRows: setSelectedRows,

    onChangeTheme: setTheme,
    onChangeLocale: setLocale,

    onChangeData: setData,
  }

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
}

export {
  App,
};

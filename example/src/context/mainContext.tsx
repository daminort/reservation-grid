import { grid } from 'mocks';
import React, { FC, createContext, useContext } from 'react';
import { THEME } from '@daminort/reservation-grid';

import { MainContext } from 'interfaces/mainContext.interface';

const initialValue: MainContext = {
  year: 2021,
  month: 11,
  highlightToday: true,
  showInfo: true,
  title: 'Number',
  info: 'Seats',
  selectedColumns: [
    '2021-11-17',
    '2021-11-18',
    '2021-11-19',
  ],
  selectedRows: [
    'Number 3',
  ],
  theme: THEME,
  locale: 'en',
  data: grid,

  onChangeYear: () => {},
  onChangeMonth: () => {},
  onChangeHighlightToday: () => {},
  onChangeShowInfo: () => {},

  onChangeTitle: () => {},
  onChangeInfo: () => {},

  onChangeSelectedColumns: () => {},
  onChangeSelectedRows: () => {},

  onChangeTheme: () => {},
  onChangeLocale: () => {},

  onChangeData: () => {},
}

const mainContext = createContext<MainContext>(initialValue);

interface Props {
  value: MainContext;
};

const MainProvider: FC<Props> = ({ value, children }) => {
  return (
    <mainContext.Provider value={value}>
      {children}
    </mainContext.Provider>
  );
};

const useMainContext = (): MainContext => useContext<MainContext>(mainContext);

export {
  MainProvider,
  useMainContext,
  initialValue,
}

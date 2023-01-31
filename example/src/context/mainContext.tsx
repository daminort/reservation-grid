import React, { FC, createContext, useContext } from 'react';
import { THEME } from '@jylopez/reservation-grid';

import { MainContext } from 'interfaces/mainContext.interface';
import { grid } from 'mocks';

const initialValue: MainContext = {
  year: '2021',
  month: '11',
  highlightToday: true,
  showInfo: true,
  showColumn3: true,
  title: 'Number',
  info: 'Seats',
  column3: 'Fruits',
  selectedColumns: [
    '2021-11-17',
    '2021-11-18',
    '2021-11-19',
  ],
  selectedRows: [
    '# 3',
  ],
  theme: THEME,
  locale: 'en',
  data: grid,

  onChangeYear: () => {},
  onChangeMonth: () => {},
  onChangeHighlightToday: () => {},
  onChangeShowInfo: () => {},
  onChangeShowColumn3: () => {},

  onChangeTitle: () => {},
  onChangeInfo: () => {},
  onChangeColumn3: () => {},

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

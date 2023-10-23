import React, { createContext, useContext } from 'react';
import type { FC, ReactNode } from 'react';

import type { TMainContext } from 'demo/interfaces/mainContext.interface';
import { grid } from 'demo/mocks';

import { themeUtils } from 'demo/utils/themeUtils';

const initialValue: TMainContext = {
  year: '2021',
  month: '11',
  highlightToday: true,
  showInfo: true,
  title: 'Room',
  info: 'Seats',
  selectedColumns: [
    '2021-11-17',
  ],
  selectedRows: [
    '3',
  ],
  theme: themeUtils.createTheme(),
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
};

const mainContext = createContext<TMainContext>(initialValue);

interface TProps {
  value: TMainContext;
  children: ReactNode;
}

const MainProvider: FC<TProps> = ({ value, children }) => {
  return (
    <mainContext.Provider value={value}>
      {children}
    </mainContext.Provider>
  );
};

const useMainContext = (): TMainContext => useContext<TMainContext>(mainContext);

export {
  MainProvider,
  useMainContext,
  initialValue,
};

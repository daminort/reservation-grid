import React, { createContext, useContext } from 'react';
import type { FC, ReactNode } from 'react';

import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import { THEME } from 'lib/constants/theme';
import { dateUtils } from 'lib/utils/dateUtils';

const today = dateUtils.format(new Date());

const initialValue: TMainContext = {
  start: dateUtils.startOf(today, 'month'),
  end: dateUtils.endOf(today, 'month'),
  highlightToday: true,
  showInfo: true,
  selectedColumns: [],
  selectedRows: [],
  theme: THEME,
  locale: 'en',
  onClickTitle: () => {},
  onClickCell: () => {},
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

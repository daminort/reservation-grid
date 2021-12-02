import React, { FC, createContext, useContext } from 'react';

import { MainContext } from 'lib/interfaces/mainContext.interface';
import { THEME } from 'lib/constants/theme';
import { dateUtils } from 'lib/utils/dateUtils';

const today = dateUtils.format(new Date());

const initialValue: MainContext = {
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
}

const mainContext = createContext<MainContext>(initialValue);

type Props = {
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

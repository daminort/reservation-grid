import React, { useCallback } from 'react';
import type { FC } from 'react';
import type { TLocaleKey } from 'lib/index';

import { useMainContext } from 'demo/context/mainContext';
import { Select } from 'demo/components/Select';

import { replacePeriod } from 'demo/utils/mockUtils';
import { monthItems, yearItems, localeItems } from 'demo/mocks';

import s from './Header.module.css';

const Header: FC = () => {

  const {
    data,
    month,
    year,
    locale,
    onChangeMonth,
    onChangeYear,
    onChangeData,
    onChangeLocale,
  } = useMainContext();

  const onChangeMonthLocal = useCallback((month: string) => {
    const resData = replacePeriod(data, month, year);
    onChangeMonth(month);
    onChangeData(resData);
  }, [data, year, onChangeMonth, onChangeData]);

  const onChangeYearLocal = useCallback((year: string) => {
    const resData = replacePeriod(data, month, year);
    onChangeYear(year);
    onChangeData(resData);
  }, [data, month, onChangeYear, onChangeData]);

  const onChangeLocaleLocal = useCallback((locale: string) => {
    onChangeLocale(locale as TLocaleKey);
  }, [onChangeLocale]);

  return (
    <div className={s.container}>
      <h2>Reservation Grid</h2>
      <div className={s.subTitle}>
        <div className={s.description}>A modular grid that allows managing reservations for a hotel</div>
        <Select
          value={locale}
          items={localeItems}
          onChange={onChangeLocaleLocal}
        />
        <Select
          value={month}
          items={monthItems}
          onChange={onChangeMonthLocal}
        />
        <Select
          value={year}
          items={yearItems}
          onChange={onChangeYearLocal}
        />
      </div>

    </div>
  );
};

export {
  Header,
};

import React, { FC, useCallback } from 'react';

import { useMainContext } from 'context/mainContext';
import { Select } from 'components/Select';
import s from './Header.module.css';

import { replacePeriod } from 'utils/mockUtils';
import { monthItems, yearItems, localeItems } from 'mocks';

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

  const onChangeMonthLocal = useCallback((month) => {
    const resData = replacePeriod(data, month, year);
    onChangeMonth(month);
    onChangeData(resData);
  }, [data, year, onChangeMonth, onChangeData]);

  const onChangeYearLocal = useCallback((year) => {
    const resData = replacePeriod(data, month, year);
    onChangeYear(year);
    onChangeData(resData);
  }, [data, month, onChangeYear, onChangeData]);

  const onChangeLocaleLocal = useCallback((locale) => {
    onChangeLocale(locale);
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
}

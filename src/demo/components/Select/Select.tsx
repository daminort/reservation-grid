import React from 'react';
import type { ChangeEvent, FC } from 'react';

import type { TSelectProps } from './Select.interface';
import s from './Select.module.css';

const Select: FC<TSelectProps> = ({ value, items, onChange, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      {...restProps}
      value={value}
      className={s.select}
      onChange={onChangeLocal}
    >
      {items.map(item => (
        <option key={item.value} value={item.value}>{item.title}</option>
      ))}
    </select>
  );
};

export {
  Select,
};

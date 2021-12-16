import React, { ChangeEvent, FC } from 'react';

import { SelectProps } from './Select.interface';
import s from './Select.module.css';

const Select: FC<SelectProps> = ({ value, items, onChange, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }

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
  )
};

export {
  Select,
}

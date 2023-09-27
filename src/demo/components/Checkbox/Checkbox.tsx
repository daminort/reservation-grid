import React from 'react';
import type { ChangeEvent, FC } from 'react';

import type { CheckboxProps } from './Checkbox.interface';
import s from './Checkbox.module.css';

const Checkbox: FC<CheckboxProps> = ({ id, checked, label, onChange, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <div className={s.wrapper}>
      <input
        {...restProps}
        type="checkbox"
        id={id}
        checked={checked}
        className={s.checkbox}
        onChange={onChangeLocal}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export {
  Checkbox,
};

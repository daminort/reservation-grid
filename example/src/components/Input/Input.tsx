import React, { ChangeEvent, FC } from 'react';

import { InputProps } from './Input.interface';
import s from './Input.module.css';

const Input: FC<InputProps> = ({ value, onChange, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }

  return (
    <input
      {...restProps}
      value={value}
      className={s.input}
      onChange={onChangeLocal}
    />
  )
};

export {
  Input,
}

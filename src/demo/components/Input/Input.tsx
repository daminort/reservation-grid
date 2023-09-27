import React from 'react';
import type { ChangeEvent, FC } from 'react';

import type { TInputProps } from './Input.interface';
import s from './Input.module.css';

const Input: FC<TInputProps> = ({ value, onChange, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      {...restProps}
      value={value}
      className={s.input}
      onChange={onChangeLocal}
    />
  );
};

export {
  Input,
};

import React from 'react';
import type { ChangeEvent, FC } from 'react';
import clsx from 'clsx';

import type { TInputProps } from './Input.interface';
import s from './Input.module.css';

const Input: FC<TInputProps> = ({ value, onChange, className, ...restProps }) => {

  const onChangeLocal = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const cls = clsx(s.input, className);

  return (
    <input
      {...restProps}
      value={value}
      className={cls}
      onChange={onChangeLocal}
    />
  );
};

export {
  Input,
};

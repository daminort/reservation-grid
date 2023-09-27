import React, { useCallback, useState } from 'react';
import type { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HexColorPicker } from 'react-colorful';

import { Input } from 'demo/components/Input';

import type { ColorPickerProps } from './ColorPicker.interface';
import s from './ColorPicker.module.css';

const ColorPicker: FC<ColorPickerProps> = ({ value, onChange }) => {

  const [visible, setVisible] = useState<boolean>(false);
  const [color, setColor] = useState<string>(value);

  const onChangeVisible = useCallback((value: boolean) => () => {
    setVisible(value);
  }, []);

  const onChangeLocal = useCallback((value: string) => {
    setColor(value);
    onChange(value);
  }, [onChange]);

  return (
    <div className={s.wrapper}>
      {visible && (
        <>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div className={s.dimmer} onClick={onChangeVisible(false)} />
          <div className={s.container}>
            <HexColorPicker color={color} onChange={onChangeLocal} />
          </div>
        </>
      )}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={s.example}
        style={{ backgroundColor: color }}
        onClick={onChangeVisible(true)}
      />
      <Input
        value={color}
        onChange={onChangeLocal}
        onFocus={onChangeVisible(true)}
      />
    </div>
  );
};

export {
  ColorPicker,
};

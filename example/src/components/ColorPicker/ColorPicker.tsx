import React, { FC, useCallback, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

import { Input } from 'components/Input';

import { ColorPickerProps } from './ColorPicker.interface';
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
          <div className={s.dimmer} onClick={onChangeVisible(false)}/>
          <div className={s.container}>
            <HexColorPicker color={color} onChange={onChangeLocal} />
          </div>
        </>
      )}
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
}

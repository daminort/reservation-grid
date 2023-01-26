import React, { FC, useCallback, Fragment, useMemo } from 'react';
import { Theme } from '@jylopez/reservation-grid';

import { useMainContext } from 'context/mainContext';
import { ColorPicker } from 'components/ColorPicker';
import { debounce } from 'utils/commonUtils';

import s from './Theme.module.css';

const keys = [
  'color.text',
  'color.background',
  'color.border',
  'color.awaiting',
  'color.confirmed',
  'color.inaccessible',
  'color.today',
  'color.selected',
  'color.weekend',
];

const ThemeConfig: FC = () => {

  const { theme, onChangeTheme } = useMainContext();

  const debouncedOnChange = useMemo(() => {
    return debounce(onChangeTheme, 1000);
  }, [onChangeTheme]);

  const onChangeColor = useCallback((key: keyof Theme) => (value: string) => {
    const resTheme = {
      ...theme,
      [key]: value,
    };
    debouncedOnChange(resTheme);
  }, [theme, debouncedOnChange]);

  return (
    <div className={s.container}>
      {keys.map(key => {
        return (
          <Fragment key={key}>
            <label className={s.title}>{key}</label>
            <ColorPicker value={theme[key]} onChange={onChangeColor(key)} />
          </Fragment>
        );
      })}
    </div>
  );
};

export {
  ThemeConfig,
};

import React, { useCallback, Fragment, useMemo } from 'react';
import type { FC } from 'react';
import type { Theme } from 'lib/index';

import { useMainContext } from 'demo/context/mainContext';
import { ColorPicker } from 'demo/components/ColorPicker';
import { debounce } from 'demo/utils/commonUtils';

import s from './Theme.module.css';

const keys: Array<keyof Theme> = [
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
      {keys.map((key) => {
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

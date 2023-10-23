import React, { Fragment, useMemo } from 'react';
import type { FC } from 'react';

import type { TMainTheme } from 'demo/interfaces/common.interface';

import { useMainContext } from 'demo/context/mainContext';
import { ColorPicker } from 'demo/components/ColorPicker';
import { debounce } from 'demo/utils/commonUtils';

import { Select } from 'demo/components/Select';
import { fontFaceItems, fontSizeItems } from 'demo/mocks';

import s from './Theme.module.css';

const basicKeys: Array<keyof TMainTheme> = [
  'color.text',
  'color.background',
  'color.border',
  'color.today',
  'color.selected',
  'color.weekend',
];

const ThemeConfig: FC = () => {

  const { theme, onChangeTheme } = useMainContext();

  const debouncedOnChange = useMemo(() => {
    return debounce(onChangeTheme, 1000);
  }, [onChangeTheme]);

  const onChangeValue = (key: keyof TMainTheme) => (value: string) => {
    const resTheme = {
      ...theme,
      [key]: value,
    };
    debouncedOnChange(resTheme);
  };

  const onChangeStatus = (key: keyof TMainTheme['date.status']) => (value: string) => {
    const resTheme = {
      ...theme,
      'date.status': {
        ...theme['date.status'],
        [key]: value,
      },
    };
    debouncedOnChange(resTheme);
  };

  const dateStatus = theme['date.status'];
  const statusKeys = Object.keys(dateStatus) as Array<keyof TMainTheme['date.status']>;

  return (
    <div className={s.container}>

      {/* Font */}
      <label className={s.title}>font.face</label>
      <Select
        value={theme['font.face']}
        items={fontFaceItems}
        onChange={onChangeValue('font.face')}
      />

      <label className={s.title}>font.size</label>
      <Select
        value={theme['font.size']}
        items={fontSizeItems}
        onChange={onChangeValue('font.size')}
      />

      {/* Basic colors */}
      {basicKeys.map((key) => {
        const color = String(theme[key]);
        return (
          <Fragment key={key}>
            <label className={s.title}>{key}</label>
            <ColorPicker value={color} onChange={onChangeValue(key)} />
          </Fragment>
        );
      })}

      {/* Day Status colors */}
      {statusKeys.map((key) => {
        const color = String(dateStatus[key as keyof TMainTheme['date.status']]);
        const keyTitle = `date.status.${key}`;
        return (
          <Fragment key={key}>
            <label className={s.title}>{keyTitle}</label>
            <ColorPicker value={color} onChange={onChangeStatus(key)} />
          </Fragment>
        );
      })}
    </div>
  );
};

export {
  ThemeConfig,
};

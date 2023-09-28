import React from 'react';
import type { FC } from 'react';

import { useMainContext } from 'demo/context/mainContext';
import { Input } from 'demo/components/Input';
import { Checkbox } from 'demo/components/Checkbox';

import s from './Config.module.css';

const Config: FC = () => {

  const {
    title,
    info,
    highlightToday,
    showInfo,
    onChangeTitle,
    onChangeInfo,
    onChangeHighlightToday,
    onChangeShowInfo,
  } = useMainContext();

  return (
    <div className={s.container}>
      <label htmlFor="name">Name</label>
      <Input
        id="name"
        value={title}
        onChange={onChangeTitle}
      />

      <label htmlFor="info">Information</label>
      <Input
        id="info"
        value={info}
        onChange={onChangeInfo}
      />

      <Checkbox
        id="highlightToday"
        label="Highlight Today"
        checked={highlightToday}
        onChange={onChangeHighlightToday}
      />
      <span />

      <Checkbox
        id="showInfo"
        label="Show Info"
        checked={showInfo}
        onChange={onChangeShowInfo}
      />
      <span />
    </div>
  );
};

export {
  Config,
};

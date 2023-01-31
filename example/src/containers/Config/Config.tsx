import React, { FC } from 'react';

import { useMainContext } from 'context/mainContext';
import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';
import s from './Config.module.css';

const Config: FC = () => {

  const {
    title,
    info,
    column3,
    highlightToday,
    showInfo,
    showColumn3,
    onChangeTitle,
    onChangeInfo,
    onChangeColumn3,
    onChangeHighlightToday,
    onChangeShowInfo,
    onChangeShowColumn3,
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

      <label htmlFor="column3">Column 3</label>
      <Input
        id="column3"
        value={column3}
        onChange={onChangeColumn3}
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

      <Checkbox
        id="showColumn3"
        label="Show Column 3"
        checked={showColumn3}
        onChange={onChangeShowColumn3}
      />
      <span />
    </div>
  );
};

export {
  Config,
};

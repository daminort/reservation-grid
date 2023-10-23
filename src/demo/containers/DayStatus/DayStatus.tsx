import React from 'react';
import type { FC } from 'react';

import { Input } from 'demo/components/Input';

import s from './DayStatus.module.css';

const DayStatus: FC = () => {

  const onChange = () => {
    // do nothing
  };

  return (
    <div className={s.container}>
      <div className={s.section}>
        <h4>Pre-defined</h4>
        <div className={s.values}>
          <Input readOnly value="free" onChange={onChange} />
          <Input readOnly value="disabled" onChange={onChange} />
          <Input readOnly value="awaiting" onChange={onChange} />
          <Input readOnly value="confirmed" onChange={onChange} />
        </div>
      </div>
      <div className={s.section}>
        <h4>Custom</h4>
        <div className={s.values}>
          <Input readOnly value="reserved" onChange={onChange} />
          <Input readOnly value="renovation" onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export {
  DayStatus,
};

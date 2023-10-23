import React from 'react';
import type { FC } from 'react';

import {
  Intersection,
  SingleDisabled,
  SingleFree,
  SingleEnd,
  SingleFull,
  SingleStart,
} from 'lib/components/Days';

import type { TDayProps } from './Day.interface';

const days = {
  'single.free': SingleFree,
  'single.disabled': SingleDisabled,
  'single.full': SingleFull,
  'single.start': SingleStart,
  'single.end': SingleEnd,
  'intersection': Intersection,
};

const Day: FC<TDayProps> = ({ type, topColor, bottomColor }) => {

  const Component = days[type] || SingleFree;

  return (
    <Component topColor={topColor} bottomColor={bottomColor} />
  );
};

export {
  Day,
};

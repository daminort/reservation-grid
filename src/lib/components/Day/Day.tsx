import React from 'react';
import type { FC } from 'react';

import {
  DoubleMaybeEndStart,
  DoubleNormalEndStart,
  IntersectionMaybeEndNormalStart,
  IntersectionNormalEndMaybeStart,
  SingleDisabled,
  SingleFree,
  SingleMaybeEnd,
  SingleMaybeFull,
  SingleMaybeStart,
  SingleNormalEnd,
  SingleNormalFull,
  SingleNormalStart,
} from 'lib/components/Days';

import { DayProps } from './Day.interface';

const days = {
  'single.free': <SingleFree />,
  'single.disabled': <SingleDisabled />,
  'single.normal.full': <SingleNormalFull />,
  'single.normal.start': <SingleNormalStart />,
  'single.normal.end': <SingleNormalEnd />,
  'single.maybe.full': <SingleMaybeFull />,
  'single.maybe.start': <SingleMaybeStart />,
  'single.maybe.end': <SingleMaybeEnd />,
  'double.normal.end.start': <DoubleNormalEndStart />,
  'double.maybe.end.start': <DoubleMaybeEndStart />,
  'intersection.normal.end.maybe.start': <IntersectionNormalEndMaybeStart />,
  'intersection.maybe.end.normal.start': <IntersectionMaybeEndNormalStart />,
};

const Day: FC<DayProps> = ({ type }) => {

  const day = days[type] || <SingleFree />;

  return (
    <>
      {day}
    </>
  );
};

export {
  Day,
};

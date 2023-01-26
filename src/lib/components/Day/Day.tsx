import React, { FC } from 'react';

import {
  DoubleMaybeEndStart,
  DoubleNormalEndStart,
  DoublePaidEndStart,
  IntersectionMaybeEndNormalStart,
  IntersectionMaybeEndPaidStart,
  IntersectionNormalEndMaybeStart,
  IntersectionNormalEndPaidStart,
  IntersectionPaidEndMaybeStart,
  IntersectionPaidEndNormalStart,
  SingleDisabled,
  SingleFree,
  SingleMaybeEnd,
  SingleMaybeFull,
  SingleMaybeStart,
  SingleNormalEnd,
  SingleNormalFull,
  SingleNormalStart,
  SinglePaidEnd,
  SinglePaidFull,
  SinglePaidStart
} from 'lib/components/Days';

import { DayProps } from './Day.interface';

const days = {
  'single.free': <SingleFree />,
  'single.disabled': <SingleDisabled />,
  'single.paid.full': <SinglePaidFull />,
  'single.paid.start': <SinglePaidStart />,
  'single.paid.end': <SinglePaidEnd />,
  'single.normal.full': <SingleNormalFull />,
  'single.normal.start': <SingleNormalStart />,
  'single.normal.end': <SingleNormalEnd />,
  'single.maybe.full': <SingleMaybeFull />,
  'single.maybe.start': <SingleMaybeStart />,
  'single.maybe.end': <SingleMaybeEnd />,
  'double.normal.end.start': <DoubleNormalEndStart />,
  'double.maybe.end.start': <DoubleMaybeEndStart />,
  'double.paid.end.start': <DoublePaidEndStart />,
  'intersection.normal.end.maybe.start': <IntersectionNormalEndMaybeStart />,
  'intersection.normal.end.paid.start': <IntersectionNormalEndPaidStart />,
  'intersection.maybe.end.normal.start': <IntersectionMaybeEndNormalStart />,
  'intersection.maybe.end.paid.start': <IntersectionMaybeEndPaidStart />,
  'intersection.paid.end.maybe.start': <IntersectionPaidEndMaybeStart />,
  'intersection.paid.end.normal.start': <IntersectionPaidEndNormalStart />,
}

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

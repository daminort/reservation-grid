import React, { FC } from 'react';

import { DayType } from 'lib/interfaces/grid.interface';
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
}

interface Props {
  type: DayType,
}

const Day: FC<Props> = ({ type }) => {

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

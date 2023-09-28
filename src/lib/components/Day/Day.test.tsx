import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { TDayType } from 'lib/interfaces/grid.interface';
import { Day } from './index';

describe('Day', () => {

  afterEach(() => {
    cleanup();
  });

  const setup = (type: TDayType) => {
    return render(<Day type={type} />);
  };

  const types: TDayType[] = [
    'single.free',
    'single.disabled',
    'single.normal.full',
    'single.normal.start',
    'single.normal.end',
    'single.maybe.full',
    'single.maybe.start',
    'single.maybe.end',
    'double.normal.end.start',
    'double.maybe.end.start',
    'intersection.normal.end.maybe.start',
    'intersection.maybe.end.normal.start',
  ];

  it.each(types)('%s', (type: TDayType) => {
    const { getByTestId } = setup(type);

    const actual = getByTestId(type);
    expect(actual).toBeInTheDocument();
  });
});

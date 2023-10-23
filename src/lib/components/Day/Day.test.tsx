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
    return render(<Day type={type} topColor="blue" bottomColor="green" />);
  };

  const types: TDayType[] = [
    'single.free',
    'single.disabled',
    'single.full',
    'single.start',
    'single.end',
    'intersection',
  ];

  it.each(types)('%s', (type: TDayType) => {
    const { getByTestId } = setup(type);

    const actual = getByTestId(type);
    expect(actual).toBeInTheDocument();
  });
});

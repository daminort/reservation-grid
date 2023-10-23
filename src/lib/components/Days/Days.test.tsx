import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  Intersection,
  SingleDisabled,
  SingleFree,
  SingleEnd,
  SingleFull,
  SingleStart,
} from './index';

const topColor = 'blue';
const bottomColor = 'green';

describe('Days', () => {

  afterEach(() => {
    cleanup();
  });

  it('single.free', () => {
    const { getByTestId } = render(<SingleFree topColor={topColor} />);

    const actual = getByTestId('single.free');
    expect(actual).toBeInTheDocument();
  });

  it('single.disabled', () => {
    const { getByTestId } = render(<SingleDisabled topColor={topColor} />);

    const actual = getByTestId('single.disabled');
    expect(actual).toBeInTheDocument();
  });

  it('single.full', () => {
    const { getByTestId } = render(<SingleFull topColor={topColor} />);

    const actual = getByTestId('single.full');
    expect(actual).toBeInTheDocument();
  });

  it('single.start', () => {
    const { getByTestId } = render(<SingleStart topColor={topColor} />);

    const actual = getByTestId('single.start');
    expect(actual).toBeInTheDocument();
  });

  it('single.end', () => {
    const { getByTestId } = render(<SingleEnd topColor={topColor} />);

    const actual = getByTestId('single.end');
    expect(actual).toBeInTheDocument();
  });

  it('intersection', () => {
    const { getByTestId } = render(<Intersection topColor={topColor} bottomColor={bottomColor} />);

    const actual = getByTestId('intersection');
    expect(actual).toBeInTheDocument();
  });
});

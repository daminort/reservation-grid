import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import {
  DoubleMaybeEndStart,
  DoubleNormalEndStart,
  IntersectionMaybeEndNormalStart,
  Intersection,
  SingleDisabled,
  SingleFree,
  SingleMaybeEnd,
  SingleMaybeFull,
  SingleMaybeStart,
  SingleEnd,
  SingleFull,
  SingleStart,
} from './index';

describe('Days', () => {

  afterEach(() => {
    cleanup();
  });

  it('single.free', () => {
    const { getByTestId } = render(<SingleFree />);

    const actual = getByTestId('single.free');
    expect(actual).toBeInTheDocument();
  });

  it('single.disabled', () => {
    const { getByTestId } = render(<SingleDisabled />);

    const actual = getByTestId('single.disabled');
    expect(actual).toBeInTheDocument();
  });

  it('single.normal.full', () => {
    const { getByTestId } = render(<SingleFull />);

    const actual = getByTestId('single.normal.full');
    expect(actual).toBeInTheDocument();
  });

  it('single.normal.start', () => {
    const { getByTestId } = render(<SingleStart />);

    const actual = getByTestId('single.normal.start');
    expect(actual).toBeInTheDocument();
  });

  it('single.normal.end', () => {
    const { getByTestId } = render(<SingleEnd />);

    const actual = getByTestId('single.normal.end');
    expect(actual).toBeInTheDocument();
  });

  it('single.maybe.full', () => {
    const { getByTestId } = render(<SingleMaybeFull />);

    const actual = getByTestId('single.maybe.full');
    expect(actual).toBeInTheDocument();
  });

  it('single.maybe.start', () => {
    const { getByTestId } = render(<SingleMaybeStart />);

    const actual = getByTestId('single.maybe.start');
    expect(actual).toBeInTheDocument();
  });

  it('single.maybe.end', () => {
    const { getByTestId } = render(<SingleMaybeEnd />);

    const actual = getByTestId('single.maybe.end');
    expect(actual).toBeInTheDocument();
  });

  it('double.normal.end.start', () => {
    const { getByTestId } = render(<DoubleNormalEndStart />);

    const actual = getByTestId('double.normal.end.start');
    expect(actual).toBeInTheDocument();
  });

  it('double.maybe.end.start', () => {
    const { getByTestId } = render(<DoubleMaybeEndStart />);

    const actual = getByTestId('double.maybe.end.start');
    expect(actual).toBeInTheDocument();
  });

  it('intersection.normal.end.maybe.start', () => {
    const { getByTestId } = render(<Intersection />);

    const actual = getByTestId('intersection.normal.end.maybe.start');
    expect(actual).toBeInTheDocument();
  });

  it('intersection.maybe.end.normal.start', () => {
    const { getByTestId } = render(<IntersectionMaybeEndNormalStart />);

    const actual = getByTestId('intersection.maybe.end.normal.start');
    expect(actual).toBeInTheDocument();
  });
});

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { grid } from 'lib/utils/mocks';

import type { TGridProps } from './Grid.interface';
import { Grid } from './index';

describe('Grid', () => {

  afterEach(() => {
    cleanup();
  });

  const minProps: TGridProps = {
    start: '2021-11-01',
    end: '2021-11-30',
    data: grid,
  };

  const props: TGridProps = {
    start: '2021-11-01',
    end: '2021-11-30',
    title: 'Number',
    info: 'Seats',
    highlightToday: true,
    showInfo: true,
    selectedColumns: [
      '2021-11-17',
      '2021-11-18',
      '2021-11-19',
    ],
    selectedRows: [
      '3',
    ],
    data: grid,
    onClickTitle: jest.fn(),
    onClickCell: jest.fn(),
  };

  const setup = (props: TGridProps) => {
    return render(<Grid {...props} />);
  };

  it('render with minimal props', () => {
    const { getByTestId } = setup(minProps);

    const wrapper = getByTestId('grid-wrapper');
    const title = getByTestId('title-2');
    const c1 = getByTestId('cell-1-2021-11-04');
    const c2 = getByTestId('cell-2-2021-11-11');
    const c3 = getByTestId('cell-5-2021-11-05');
    const weekend01 = getByTestId('cell-4-2021-11-14');
    const weekend02 = getByTestId('cell-5-2021-11-27');

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(c1).toBeInTheDocument();
    expect(c2).toBeInTheDocument();
    expect(c3).toBeInTheDocument();

    expect(weekend01).toHaveClass('weekend');
    expect(weekend02).toHaveClass('weekend');
  });

  it('normal render', () => {
    const { getByTestId } = setup(props);

    const wrapper = getByTestId('grid-wrapper');
    const title = getByTestId('title-3');
    const selected01 = getByTestId('cell-day-2021-11-17');
    const selected02 = getByTestId('cell-date-2021-11-18');
    const weekend01 = getByTestId('cell-4-2021-11-14');
    const weekend02 = getByTestId('cell-5-2021-11-27');

    expect(wrapper).toBeInTheDocument();

    expect(title).toHaveClass('selected');
    expect(selected01).toHaveClass('selected');
    expect(selected02).toHaveClass('selected');

    expect(weekend01).toHaveClass('weekend');
    expect(weekend02).toHaveClass('weekend');
  });

  it('onClickTitle', () => {
    const { getByTestId } = setup(props);

    const title = getByTestId('title-2');

    fireEvent.click(title);
    expect(props.onClickTitle).toHaveBeenCalledWith('2');
  });

  it('onClickCell', () => {
    const { getByTestId } = setup(props);

    const c1 = getByTestId('cell-1-2021-11-04');
    const c2 = getByTestId('cell-2-2021-11-11');
    const c3 = getByTestId('cell-5-2021-11-05');

    fireEvent.click(c1);
    expect(props.onClickCell).toHaveBeenCalledWith({
      id: '1',
      date: '2021-11-04',
      dayType: 'single.normal.start',
    });

    fireEvent.click(c2);
    expect(props.onClickCell).toHaveBeenCalledWith({
      id: '2',
      date: '2021-11-11',
      dayType: 'single.free',
    });

    fireEvent.click(c3);
    expect(props.onClickCell).toHaveBeenCalledWith({
      id: '5',
      date: '2021-11-05',
      dayType: 'single.disabled',
    });
  });
});

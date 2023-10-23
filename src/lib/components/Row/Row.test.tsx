import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { TMainContext } from 'lib/interfaces/mainContext.interface';

import { testingUtils } from 'lib/utils/testingUtils';
import { row01 } from 'lib/utils/mocks';

import type { TRowProps } from './Row.interface';
import { Row } from './index';

describe('Row', () => {

  afterEach(() => {
    cleanup();
  });

  const partialContext: Partial<TMainContext> = {
    start: '2021-11-01',
    end: '2021-11-30',
    selectedColumns: [
      '2021-11-17',
      '2021-11-18',
      '2021-11-19',
    ],
    onClickTitle: jest.fn(),
    onClickCell: jest.fn(),
  };

  const setup = (props: TRowProps) => {
    const row = (
      <table>
        <tbody>
          <Row {...props} />
        </tbody>
      </table>
    );
    return testingUtils.reduxRender(row, partialContext);
  };

  it('normal render', () => {
    const { getByTestId } = setup({ ...row01, selected: false });

    const row = getByTestId(`row-${row01.id}`);
    const title = getByTestId(`title-${row01.id}`);
    const info = getByTestId(`info-${row01.id}`);
    const start = getByTestId(`cell-${row01.id}-${partialContext.start}`);
    const end = getByTestId(`cell-${row01.id}-${partialContext.end}`);

    const selected01 = getByTestId('cell-1-2021-11-17');
    const selected02 = getByTestId('cell-1-2021-11-18');
    const selected03 = getByTestId('cell-1-2021-11-17');
    const weekend01 = getByTestId('cell-1-2021-11-14');
    const weekend02 = getByTestId('cell-1-2021-11-27');

    expect(row).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(start).toBeInTheDocument();
    expect(end).toBeInTheDocument();

    expect(title).toHaveClass('rvg-title', 'rvg-clickable', 'rvg-fixed');
    expect(title).not.toHaveClass('selected');

    expect(info).toHaveClass('rvg-info');
    expect(info).not.toHaveClass('selected');

    expect(weekend01).toHaveClass('weekend');
    expect(weekend02).toHaveClass('weekend');

    expect(selected01).toHaveClass('selected');
    expect(selected02).toHaveClass('selected');
    expect(selected03).toHaveClass('selected');
  });

  it('selected row', () => {
    const { getByTestId } = setup({ ...row01, selected: true });

    const title = getByTestId(`title-${row01.id}`);
    const info = getByTestId(`info-${row01.id}`);

    expect(title).toHaveClass('selected');
    expect(info).toHaveClass('selected');
  });

  it('onClickTitle', () => {
    const { getByTestId } = setup({ ...row01, selected: true });

    const title = getByTestId(`title-${row01.id}`);

    fireEvent.click(title);
    expect(partialContext.onClickTitle).toHaveBeenCalledWith(row01.id);
  });

  it('onClickCell', () => {
    const { getByTestId } = setup({ ...row01, selected: false });

    const c1 = getByTestId('cell-1-2021-11-04');
    const c2 = getByTestId('cell-1-2021-11-11');
    const c3 = getByTestId('cell-1-2021-11-26');

    fireEvent.click(c1);
    expect(partialContext.onClickCell).toHaveBeenCalledWith({
      id: row01.id,
      date: '2021-11-04',
      dayType: 'single.start',
      dayStatus: ['confirmed'],
    });

    fireEvent.click(c2);
    expect(partialContext.onClickCell).toHaveBeenCalledWith({
      id: row01.id,
      date: '2021-11-11',
      dayType: 'single.full',
      dayStatus: ['awaiting'],
    });

    fireEvent.click(c3);
    expect(partialContext.onClickCell).toHaveBeenCalledWith({
      id: row01.id,
      date: '2021-11-26',
      dayType: 'single.end',
      dayStatus: ['confirmed'],
    });
  });
});

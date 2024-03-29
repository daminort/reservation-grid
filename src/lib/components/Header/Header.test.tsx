import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import { testingUtils } from 'lib/utils/testingUtils';

import type { THeaderProps } from './Header.interface';
import { Header } from './index';

describe('Header', () => {

  afterEach(() => {
    cleanup();
  });

  const partialContext: Partial<TMainContext> = {
    start: '2021-11-01',
    end: '2021-11-30',
  };

  const props: THeaderProps = {
    title: 'Number',
    info: 'Seats',
  };

  const setup = (props: THeaderProps) => {
    const table = (
      <table>
        <Header {...props} />
      </table>
    );
    return testingUtils.reduxRender(table, partialContext);
  };

  it('normal render', () => {
    const { getByTestId } = setup(props);

    const title = getByTestId('title');
    const info = getByTestId('info');
    const start = getByTestId(`cell-day-${partialContext.start}`);
    const end = getByTestId(`cell-date-${partialContext.end}`);
    const weekend01 = getByTestId('cell-day-2021-11-14');
    const weekend02 = getByTestId('cell-date-2021-11-27');

    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(start).toBeInTheDocument();
    expect(end).toBeInTheDocument();

    expect(weekend01).toHaveClass('weekend');
    expect(weekend02).toHaveClass('weekend');
  });
});

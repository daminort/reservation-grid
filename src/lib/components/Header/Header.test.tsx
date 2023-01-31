import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MainContext } from 'lib/interfaces/mainContext.interface';

import { testingUtils } from 'lib/utils/testingUtils';
import { HeaderProps } from './Header.interface';
import { Header } from './index';

describe('Header', () => {

  afterEach(() => {
    cleanup();
  });

  const partialContext: Partial<MainContext> = {
    start: '2021-11-01',
    end: '2021-11-30',
  };

  const props: HeaderProps = {
    title: 'Number',
    info: 'Seats',
    column3: 'Fruits'
  }

  const setup = (props: HeaderProps) => {
    const table = (
      <table>
        <Header {...props} />
      </table>
    )
    return testingUtils.reduxRender(table, partialContext);
  }

  it('normal render', () => {
    const { getByTestId } = setup(props);

    const title = getByTestId('title');
    const info = getByTestId('info');
    const column3 = getByTestId('column3');
    const start = getByTestId(`cell-day-${partialContext.start}`);
    const end = getByTestId(`cell-date-${partialContext.end}`);
    const weekend01 = getByTestId(`cell-day-2021-11-14`);
    const weekend02 = getByTestId(`cell-date-2021-11-27`);

    expect(title).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(column3).toBeInTheDocument();
    expect(start).toBeInTheDocument();
    expect(end).toBeInTheDocument();

    expect(weekend01).toHaveClass('weekend');
    expect(weekend02).toHaveClass('weekend');
  });
});

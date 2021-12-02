import React, { FC } from 'react'
import { renderHook } from '@testing-library/react-hooks';

import { MainProvider, initialValue } from 'lib/context';
import { useTheme } from './useTheme';

describe('useTheme', () => {

  const wrapper: FC = ({ children }) => (
    <MainProvider value={initialValue}>
      {children}
    </MainProvider>
  );

  it('normal render', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current).toEqual(initialValue.theme);
  });
});

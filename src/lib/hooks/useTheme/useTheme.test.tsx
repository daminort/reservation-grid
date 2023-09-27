import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { renderHook } from '@testing-library/react';

import { MainProvider, initialValue } from 'lib/context';
import { useTheme } from './useTheme';

describe('useTheme', () => {

  const wrapper: FC<PropsWithChildren> = ({ children }) => (
    <MainProvider value={initialValue}>
      {children}
    </MainProvider>
  );

  it('normal render', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current).toEqual(initialValue.theme);
  });
});

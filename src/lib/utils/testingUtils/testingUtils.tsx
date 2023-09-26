import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';

import { MainContext } from 'lib/interfaces/mainContext.interface';
import { MainProvider, initialValue } from 'lib/context';

type ReduxRenderResult = RenderResult & {
  context: MainContext;
};

function reduxRender(ui: ReactElement, partialValue?: Partial<MainContext>): ReduxRenderResult {
  const contextValue: MainContext = {
    ...initialValue,
    ...(partialValue ? partialValue : {}),
  }

  const Wrapper: FC = ({ children }: { children: ReactNode }): ReactElement => {
    return (
      <MainProvider value={contextValue}>
        {children}
      </MainProvider>)
  };

  const result = render(ui, { wrapper: Wrapper });

  return {
    ...result,
    context: contextValue,
  };
}

const testingUtils = {
  reduxRender,
};

export {
  testingUtils,
  ReduxRenderResult,
}

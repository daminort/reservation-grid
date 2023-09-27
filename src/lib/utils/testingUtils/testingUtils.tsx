import React from 'react';
import type { FC, ReactElement, PropsWithChildren } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import { MainContext } from 'lib/interfaces/mainContext.interface';
import { MainProvider, initialValue } from 'lib/context';

type ReduxRenderResult = RenderResult & {
  context: MainContext;
};

function reduxRender(ui: ReactElement, partialValue?: Partial<MainContext>): ReduxRenderResult {
  const contextValue: MainContext = {
    ...initialValue,
    ...(partialValue || {}),
  };

  const Wrapper: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return (
      <MainProvider value={contextValue}>
        {children}
      </MainProvider>
    );
  };

  const result = render(ui, { wrapper: Wrapper });

  return {
    ...result,
    context: contextValue,
  };
}

const testingUtils = { reduxRender };

export {
  testingUtils,
};

import React from 'react';
import type { FC, ReactElement, PropsWithChildren } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import { TMainContext } from 'lib/interfaces/mainContext.interface';
import { MainProvider, initialValue } from 'lib/context';

type TReduxRenderResult = RenderResult & {
  context: TMainContext;
};

function reduxRender(ui: ReactElement, partialValue?: Partial<TMainContext>): TReduxRenderResult {
  const contextValue: TMainContext = {
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

import type { ReactNode } from 'react';

import type { TLocaleKey } from 'lib/interfaces/locale.interface';
import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import type { TRow } from 'lib/interfaces/row';
import type { TTheme } from 'lib/interfaces/theme.interface';

type TGridProps<TCustomStatus extends string = never> = Omit<TMainContext<TCustomStatus>, 'theme' | 'locale'> & {
  title?: string;
  info?: string;
  data: TRow<TCustomStatus>[];
  theme?: Partial<TTheme<TCustomStatus>>;
  locale?: TLocaleKey;
  renderTitle?: (row: TRow<TCustomStatus>) => ReactNode;
  renderInfo?: (row: TRow<TCustomStatus>) => ReactNode;
};

export type {
  TGridProps,
};

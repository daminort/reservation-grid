import type { ReactNode } from 'react';

import type { TLocaleKey } from 'lib/interfaces/locale.interface';
import type { TMainContext } from 'lib/interfaces/mainContext.interface';
import type { TRow } from 'lib/interfaces/row';
import type { TTheme } from 'lib/interfaces/theme.interface';

export type TGridProps = Omit<TMainContext, 'theme' | 'locale'> & {
  title?: string;
  info?: string;
  data: TRow[];
  theme?: Partial<TTheme>;
  locale?: TLocaleKey;
  renderTitle?: (row: TRow) => ReactNode;
  renderInfo?: (row: TRow) => ReactNode;
};

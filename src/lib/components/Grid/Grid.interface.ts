import type { ReactNode } from 'react';

import type { LocaleKey } from 'lib/interfaces/locale.interface';
import type { MainContext } from 'lib/interfaces/mainContext.interface';
import type { Row } from 'lib/interfaces/row';
import type { Theme } from 'lib/interfaces/theme.interface';

export type GridProps = Omit<MainContext, 'theme' | 'locale'> & {
  title?: string;
  info?: string;
  data: Row[];
  theme?: Partial<Theme>;
  locale?: LocaleKey;
  renderTitle?: (row: Row) => ReactNode;
  renderInfo?: (row: Row) => ReactNode;
};

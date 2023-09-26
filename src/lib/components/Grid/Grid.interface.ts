import type { ReactNode } from 'react'

import { LocaleKey } from 'lib/interfaces/locale.interface';
import { MainContext } from 'lib/interfaces/mainContext.interface';
import { Row } from 'lib/interfaces/row';
import { Theme } from 'lib/interfaces/theme.interface';

export type GridProps = Omit<MainContext, 'theme' | 'locale'> & {
  title?: string;
  info?: string;
  data: Row[];
  theme?: Partial<Theme>;
  locale?: LocaleKey;
  renderTitle?: (row: Row) => ReactNode;
  renderInfo?: (row: Row) => ReactNode;
}

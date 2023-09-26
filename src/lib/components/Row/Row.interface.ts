import type { ReactNode } from 'react';
import { Row } from 'lib/interfaces/row';

type RowProps = Omit<Row, 'value' | 'info'> & {
  selected: boolean;
  value: string | ReactNode;
  info: string | ReactNode;
}

export type {
  RowProps,
}

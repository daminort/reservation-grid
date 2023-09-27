import type { ReactNode } from 'react';
import type { TRow } from 'lib/interfaces/row';

type TRowProps = Omit<TRow, 'title' | 'info'> & {
  selected: boolean;
  title: string | ReactNode;
  info: string | ReactNode;
};

export type {
  TRowProps,
};

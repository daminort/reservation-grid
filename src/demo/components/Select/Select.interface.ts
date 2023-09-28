import type { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export type TSelectItem = {
  value: string | number;
  title: string | number;
};

type TRegularProps = Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'onChange'>;

export type TSelectProps = TRegularProps & {
  items: TSelectItem[];
  onChange: (value: string) => void;
};

import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

export type SelectItem = {
  value: string | number;
  title: string | number;
}

type RegularProps = Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, 'onChange'>;

export type SelectProps = RegularProps & {
  items: SelectItem[];
  onChange: (value: string) => void;
};

import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type RegularProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>;

export type InputProps = RegularProps & {
  onChange: (value: string) => void;
};

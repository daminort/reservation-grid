import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TRegularProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>;

export type TInputProps = TRegularProps & {
  onChange: (value: string) => void;
};

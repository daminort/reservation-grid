import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type TRegularProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>;

export type TCheckboxProps = TRegularProps & {
  onChange: (value: boolean) => void;
  label: string;
};

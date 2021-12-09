import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type RegularProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'onChange'>;

export type CheckboxProps = RegularProps & {
  onChange: (value: boolean) => void;
  label: string;
};

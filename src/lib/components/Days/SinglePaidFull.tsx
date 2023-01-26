import React from 'react';
import { useTheme } from 'lib/hooks';

const SinglePaidFull = () => {
  const theme = useTheme();
  const color = theme['color.paid'];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="single.paid.full"
    >
      <rect width="26" height="26" rx="2" fill={color} />
    </svg>
  );
};

export {
  SinglePaidFull,
};

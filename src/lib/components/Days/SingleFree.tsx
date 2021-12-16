import React from 'react';
import { useTheme } from 'lib/hooks';

const SingleFree = (): JSX.Element => {
  const theme = useTheme();
  const color = theme['color.free'];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="single.free"
    >
      <rect width="26" height="26" rx="2" fill={color} />
    </svg>
  );
};

export {
  SingleFree,
};

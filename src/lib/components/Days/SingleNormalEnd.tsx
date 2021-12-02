import React from 'react';
import { useTheme } from 'lib/hooks';

const SingleNormalEnd = () => {
  const theme = useTheme();
  const color = theme['color.confirmed'];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="single.normal.end"
    >
      <path
        d="M12.5 13.5L3.41421 22.5858C2.15428 23.8457 0 22.9534 0 21.1716V2C0 0.89543 0.895432 0 2 0H21.1716C22.9534 0 23.8457 2.15428 22.5858 3.41421L12.5 13.5Z"
        fill={color}
      />
    </svg>
  );
};

export {
  SingleNormalEnd,
};

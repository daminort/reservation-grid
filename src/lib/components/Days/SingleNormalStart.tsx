import React from 'react';
import { useTheme } from 'lib/hooks';

const SingleNormalStart = () => {
  const theme = useTheme();
  const color = theme['color.confirmed'];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="single.normal.start"
    >
      <path
        d="M13.5 12.5L22.5858 3.41421C23.8457 2.15428 26 3.04662 26 4.82843V24C26 25.1046 25.1046 26 24 26H4.82843C3.04662 26 2.15428 23.8457 3.41421 22.5858L13.5 12.5Z"
        fill={color}
      />
    </svg>
  );
};

export {
  SingleNormalStart,
};

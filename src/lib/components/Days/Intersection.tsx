import React from 'react';
import type { FC } from 'react';

import type { TDaysProps } from './Days.interface';

const Intersection: FC<TDaysProps> = ({ topColor, bottomColor }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="intersection"
    >
      <path
        d="M10.5769 11.4231L3.41421 18.5858C2.15428 19.8457 0 18.9534 0 17.1716V2C0 0.89543 0.89543 0 2 0H17.1716C18.9534 0 19.8457 2.15428 18.5858 3.41421L10.5769 11.4231Z"
        fill={topColor}
      />
      <path
        d="M13.4231 13.5769L20.5858 6.41421C21.8457 5.15428 24 6.04662 24 7.82843V23C24 24.1046 23.1046 25 22 25H6.82843C5.04662 25 4.15428 22.8457 5.41421 21.5858L13.4231 13.5769Z"
        fill={bottomColor}
      />
    </svg>
  );
};

export {
  Intersection,
};

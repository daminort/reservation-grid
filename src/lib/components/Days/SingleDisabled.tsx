import React from 'react';
import { useTheme } from 'lib/hooks';

const SingleDisabled = (): JSX.Element => {
  const theme = useTheme();
  const color = theme['color.inaccessible'];

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="single.disabled"
    >
      <g clipPath="url(#clip0_383_3078)">
        <path
          d="M17.7063 16.2938C18.0969 16.6844 18.0969 17.3172 17.7063 17.7079C17.5125 17.9032 17.2563 18 17 18C16.7437 18 16.4881 17.9024 16.2931 17.7071L13 14.4157L9.70719 17.7063C9.51188 17.9032 9.25594 18 9 18C8.74406 18 8.48844 17.9032 8.29297 17.7063C7.90234 17.3157 7.90234 16.6829 8.29297 16.2922L11.5867 12.9985L8.29297 9.7063C7.90234 9.31567 7.90234 8.68286 8.29297 8.29224C8.68359 7.90161 9.31641 7.90161 9.70703 8.29224L13 11.5875L16.2937 8.2938C16.6844 7.90317 17.3172 7.90317 17.7078 8.2938C18.0984 8.68442 18.0984 9.31724 17.7078 9.70786L14.4141 13.0016L17.7063 16.2938Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_383_3078">
          <rect width="10" height="16" fill="white" transform="translate(8 5)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export {
  SingleDisabled,
};

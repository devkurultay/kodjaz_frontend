/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function RunCodeIcon({
  fill = '#fff',
  width = 12,
  height = 14,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 14"
    >
      <path
        d="M0.166992 2.30916C0.166992 1.12806 1.43042 0.377339 2.4676 0.941247L11.021 5.59504C12.1045 6.18525 12.1045 7.74066 11.021 8.33017L2.4676 12.984C1.43042 13.5486 0.166992 12.7972 0.166992 11.6168V2.30916Z"
        fill={fill}
      />
    </svg>
  );
}

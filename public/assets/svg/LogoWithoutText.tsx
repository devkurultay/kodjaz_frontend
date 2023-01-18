/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function LogoWithoutText({
  fill = '#fff',
  width = 38,
  height = 28,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 28"
    >
      <path
        d="M34 0.5H4.00003C1.93177 0.5 0.25 2.01368 0.25 3.8751V24.1249C0.25 25.9863 1.93177 27.5 4.00003 27.5H34C36.068 27.5 37.75 25.9863 37.75 24.1249V3.8751C37.75 2.01368 36.068 0.5 34 0.5ZM4.00003 24.1249V3.8751H34L34.0036 24.1249H4.00003Z"
        fill={fill}
      />
      <path
        d="M18.9998 17.3754H30.2499V20.7505H18.9998V17.3754ZM7.75 10.6255L12.0494 14.4949L7.75 18.3643L10.4011 20.7505L17.3518 14.4949L10.4011 8.23926L7.75 10.6255Z"
        fill={fill}
      />
    </svg>
  );
}

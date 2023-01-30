/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function PalyIcon({
  fill = '#3050C1',
  height = 30,
  width = 30,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9996 29.3996C22.9525 29.3996 29.3996 22.9525 29.3996 14.9996C29.3996 7.04671 22.9525 0.599609 14.9996 0.599609C7.04671 0.599609 0.599609 7.04671 0.599609 14.9996C0.599609 22.9525 7.04671 29.3996 14.9996 29.3996ZM13.7734 10.1526C12.9437 9.70148 11.9329 10.3021 11.9329 11.2469V18.693C11.9329 19.6373 12.9437 20.2385 13.7734 19.7868L20.6162 16.0637C21.483 15.5921 21.483 14.3478 20.6162 13.8756L13.7734 10.1526Z"
        fill={fill}
      />
    </svg>
  );
}

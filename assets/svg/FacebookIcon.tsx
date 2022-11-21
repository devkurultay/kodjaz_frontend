/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function FacebookIcon({ fill, width, height }: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.55436 8.83879L7.95115 6.25238H5.46907V4.57396C5.46907 3.86636 5.81577 3.17665 6.92752 3.17665H8.05602V0.974708C8.05602 0.974708 7.03185 0.799951 6.0527 0.799951C4.00845 0.799951 2.67235 2.03863 2.67235 4.28112V6.25238H0.400024V8.83879H2.67235V15.0913C3.12799 15.1627 3.59499 15.2 4.07071 15.2C4.54643 15.2 5.01343 15.1627 5.46907 15.0913V8.83879H7.55436Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

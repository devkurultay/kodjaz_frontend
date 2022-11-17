/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function BarsIcon({ fill, width, height }: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H17M1 7H17M1 13H17" stroke="#212229" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

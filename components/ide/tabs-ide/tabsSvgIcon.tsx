/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from '../../../public/assets/svg/types';

export default function TabsSvgIcon({
  fill,
  children,
  width,
  height,
  viewbox,
}: IconProps) {
  return (
    <svg fill={fill} width={width} height={height} viewBox={viewbox}>
      {children}
    </svg>
  );
}

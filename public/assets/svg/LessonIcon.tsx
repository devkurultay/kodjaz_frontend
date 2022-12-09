/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function LessonIcon({ fill, width = 24, height = 24 }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 80 80" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 2.37099C0 0.953676 1.51612 0.052807 2.76073 0.729497L13.0248 6.31405C14.3251 7.02229 14.3251 8.88879 13.0248 9.59621L2.76073 15.1808C1.51612 15.8583 0 14.9566 0 13.5401V2.37099Z"
        fill="#98989A"
      />
    </svg>
  );
}

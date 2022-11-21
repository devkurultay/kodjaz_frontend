/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function InstagramIcon({ fill, width, height }: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00031 0C5.09928 0 4.86071 0.00831264 4.11406 0.0422918C3.36888 0.0764168 2.86023 0.194396 2.41516 0.3675C1.95478 0.546292 1.56425 0.785458 1.17517 1.17469C0.785811 1.56377 0.546651 1.95431 0.367282 2.41456C0.193745 2.85979 0.0756241 3.3686 0.0420835 4.11352C0.00868864 4.86019 -6.10352e-05 5.09892 -6.10352e-05 7C-6.10352e-05 8.90108 0.00839717 9.13894 0.0422295 9.8856C0.0764993 10.6308 0.194475 11.1395 0.367428 11.5846C0.54636 12.045 0.785519 12.4355 1.17474 12.8246C1.56366 13.214 1.95419 13.4537 2.41428 13.6325C2.85964 13.8056 3.36844 13.9236 4.11348 13.9577C4.86012 13.9917 5.09856 14 6.99943 14C8.90061 14 9.13845 13.9917 9.8851 13.9577C10.6303 13.9236 11.1395 13.8056 11.5849 13.6325C12.0451 13.4537 12.4351 13.214 12.824 12.8246C13.2134 12.4355 13.4525 12.045 13.6319 11.5847C13.804 11.1395 13.9221 10.6307 13.9571 9.88575C13.9906 9.13908 13.9994 8.90108 13.9994 7C13.9994 5.09892 13.9906 4.86033 13.9571 4.11367C13.9221 3.36846 13.804 2.85979 13.6319 2.41471C13.4525 1.95431 13.2134 1.56377 12.824 1.17469C12.4346 0.785313 12.0453 0.546146 11.5844 0.3675C11.1382 0.194396 10.6293 0.0764168 9.88408 0.0422918C9.13743 0.00831264 8.89973 0 6.99812 0H7.00031ZM10.75 4.09011C11.214 4.09011 11.59 3.71403 11.59 3.25011C11.59 2.78619 11.214 2.41011 10.75 2.41011C10.2861 2.41011 9.91005 2.78619 9.91005 3.25011C9.91005 3.71403 10.2861 4.09011 10.75 4.09011ZM6.99999 10.6C8.98821 10.6 10.6 8.98827 10.6 7.00005C10.6 5.01182 8.98821 3.40005 6.99999 3.40005C5.01176 3.40005 3.39999 5.01182 3.39999 7.00005C3.39999 8.98827 5.01176 10.6 6.99999 10.6ZM6.99999 9.33109C5.71259 9.33109 4.66895 8.28745 4.66895 7.00005C4.66895 5.71265 5.71259 4.66901 6.99999 4.66901C8.28739 4.66901 9.33103 5.71265 9.33103 7.00005C9.33103 8.28745 8.28739 9.33109 6.99999 9.33109Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

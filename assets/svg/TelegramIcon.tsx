/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function TelegramIcon({ fill, width, height }: IconProps) {
  return (
    <svg width={width} height={height} fill={fill} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.84193 8.78868C7.34033 9.27363 6.84688 9.75451 6.35343 10.2354C6.18214 10.4025 5.99047 10.4962 5.74171 10.484C5.57451 10.4758 5.48071 10.4025 5.42769 10.2435C5.05251 9.07802 4.66917 7.9125 4.29398 6.74291C4.25728 6.6288 4.20426 6.57583 4.09008 6.53915C3.20513 6.27018 2.3161 5.99307 1.43523 5.71188C1.30065 5.66705 1.162 5.61407 1.04373 5.53257C0.860215 5.41031 0.835747 5.21062 0.998871 5.06391C1.14976 4.92943 1.3292 4.81533 1.51679 4.74197C2.60157 4.31407 3.69042 3.8984 4.77928 3.47865C7.54015 2.41501 10.301 1.3473 13.0619 0.283667C13.588 0.0799055 13.9917 0.365172 13.9346 0.935704C13.8979 1.2984 13.8041 1.65702 13.7307 2.01564C13.1312 4.84385 12.5318 7.67614 11.9282 10.5043C11.7855 11.1768 11.3124 11.352 10.7619 10.9445C9.83613 10.2639 8.9104 9.57927 7.98467 8.89463C7.93981 8.85795 7.89495 8.82535 7.84193 8.78868ZM5.7621 9.64855C5.77433 9.64447 5.78249 9.64447 5.79472 9.6404C5.7988 9.61187 5.80696 9.58742 5.81104 9.56297C5.87221 8.92316 5.93338 8.27927 5.9864 7.63946C5.99863 7.49683 6.04757 7.39495 6.1536 7.29714C7.00592 6.53507 7.85825 5.76485 8.70649 4.99871C9.64854 4.15106 10.5906 3.30341 11.5285 2.45169C11.5856 2.39871 11.6101 2.30906 11.6509 2.2357C11.5612 2.22755 11.4674 2.19088 11.3858 2.21125C11.2757 2.23978 11.1737 2.30498 11.0759 2.36611C9.00012 3.67426 6.92028 4.98241 4.84453 6.29056C4.72626 6.36391 4.70587 6.42504 4.75073 6.55545C4.9057 6.99557 5.04435 7.43977 5.18709 7.88397C5.37876 8.47081 5.57043 9.06172 5.7621 9.64855Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function CloseIcon({ strokeFill = '#212229', width = 22, height = 17 }: IconProps) {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.501231 2.03126C0.493866 1.91414 0.527938 1.7983 0.597238 1.70394L0.655861 1.63755C0.740831 1.55685 0.851576 1.50846 0.968802 1.50108C1.08593 1.49372 1.20176 1.52779 1.29613 1.59709L1.36454 1.6575L7.64658 7.93854L8.00011 8.29201L8.35363 7.93854L14.6466 1.64654L14.6467 1.64659L14.6527 1.64032C14.6989 1.59256 14.754 1.55447 14.815 1.52826C14.876 1.50206 14.9417 1.48827 15.008 1.48769C15.0744 1.48711 15.1403 1.49976 15.2017 1.5249C15.2632 1.55004 15.319 1.58717 15.3659 1.63412C15.4129 1.68107 15.45 1.73689 15.4752 1.79834C15.5003 1.85978 15.513 1.92562 15.5124 1.99202C15.5118 2.05841 15.498 2.12402 15.4718 2.18502C15.4456 2.24602 15.4075 2.30119 15.3598 2.34731L15.3597 2.34726L15.3535 2.35343L9.06152 8.64643L8.70806 8.99996L9.06152 9.35348L15.3535 15.6465L15.3535 15.6465C15.4396 15.7326 15.4913 15.8471 15.499 15.9687C15.5063 16.0858 15.4723 16.2016 15.403 16.296L15.3444 16.3624C15.2594 16.4431 15.1486 16.4915 15.0314 16.4988C14.9143 16.5062 14.7984 16.4721 14.7041 16.4028L14.6357 16.3424L8.35363 10.0614L8.00011 9.70791L7.64658 10.0614L1.35717 16.3498C1.26315 16.4393 1.13795 16.4888 1.00805 16.4877C0.876951 16.4865 0.751545 16.4339 0.658841 16.3412C0.566136 16.2485 0.513551 16.1231 0.512412 15.992C0.511283 15.8621 0.560758 15.7369 0.650276 15.6429L6.93869 9.35348L7.29216 8.99996L6.93869 8.64643L0.646687 2.35343L0.646676 2.35342C0.560587 2.26733 0.508871 2.15278 0.501231 2.03126Z"
        stroke={strokeFill}
      />
    </svg>
  );
}

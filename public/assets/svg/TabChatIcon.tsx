/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function TabChatIcon({ fill }: IconProps) {
  return (
    <>
      <path
        d="M3.37533 13C2.65703 13 1.96816 12.7147 1.46024 12.2067C0.952334 11.6988 0.666992 11.01 0.666992 10.2917V3.20833C0.666992 2.49004 0.952334 1.80116 1.46024 1.29325C1.96816 0.785341 2.65703 0.5 3.37533 0.5H14.6253C14.981 0.5 15.3332 0.570053 15.6618 0.70616C15.9904 0.842266 16.2889 1.04176 16.5404 1.29325C16.7919 1.54474 16.9914 1.84331 17.1275 2.1719C17.2636 2.50049 17.3337 2.85267 17.3337 3.20833V10.2917C17.3337 10.6473 17.2636 10.9995 17.1275 11.3281C16.9914 11.6567 16.7919 11.9553 16.5404 12.2067C16.2889 12.4582 15.9904 12.6577 15.6618 12.7938C15.3332 12.9299 14.981 13 14.6253 13H9.84366L5.66699 16.125C5.51223 16.2408 5.32829 16.3113 5.13575 16.3286C4.94321 16.3458 4.74967 16.3091 4.57679 16.2226C4.40391 16.1362 4.2585 16.0033 4.15684 15.8389C4.05518 15.6744 4.00127 15.485 4.00116 15.2917V13H3.37616H3.37533ZM9.42866 11.75H14.6253C15.0121 11.75 15.383 11.5964 15.6565 11.3229C15.93 11.0494 16.0837 10.6784 16.0837 10.2917V3.20833C16.0837 2.82156 15.93 2.45063 15.6565 2.17714C15.383 1.90365 15.0121 1.75 14.6253 1.75H3.37533C2.98855 1.75 2.61762 1.90365 2.34413 2.17714C2.07064 2.45063 1.91699 2.82156 1.91699 3.20833V10.2917C1.91699 11.0967 2.57033 11.75 3.37533 11.75H5.24949V14.875L9.42866 11.75Z"
        fill={fill}
      />
    </>
  );
}
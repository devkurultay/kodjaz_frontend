/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function ProfileIcon({ fill }: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5033 14.3969C16.8579 14.3969 17.209 14.4667 17.5366 14.6025C17.8641 14.7382 18.1618 14.9371 18.4124 15.1879C18.6631 15.4387 18.8619 15.7364 18.9975 16.0641C19.1331 16.3917 19.2028 16.7428 19.2026 17.0974V18.1992C19.2023 18.8871 18.987 19.5577 18.5869 20.1172C16.7325 22.7145 13.7019 24 9.59712 24C5.4911 24 2.46289 22.7133 0.612122 20.116C0.213794 19.5567 -0.000181061 18.8871 1.14958e-07 18.2004V17.0962C-1.67958e-07 16.3807 0.284064 15.6945 0.78977 15.1883C1.29548 14.6822 1.98145 14.3975 2.69694 14.3969H16.5021H16.5033ZM9.59712 0C10.3852 -1.17434e-08 11.1656 0.155225 11.8937 0.456814C12.6218 0.758403 13.2833 1.20045 13.8406 1.75771C14.3979 2.31497 14.8399 2.97654 15.1415 3.70464C15.4431 4.43274 15.5983 5.21311 15.5983 6.0012C15.5983 6.78929 15.4431 7.56966 15.1415 8.29776C14.8399 9.02586 14.3979 9.68743 13.8406 10.2447C13.2833 10.802 12.6218 11.244 11.8937 11.5456C11.1656 11.8472 10.3852 12.0024 9.59712 12.0024C8.0055 12.0024 6.47907 11.3701 5.35363 10.2447C4.22819 9.11925 3.59592 7.59282 3.59592 6.0012C3.59592 4.40958 4.22819 2.88315 5.35363 1.75771C6.47907 0.632268 8.0055 0 9.59712 0Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}

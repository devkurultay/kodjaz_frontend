/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function LogoIcon({
  fill = '#05060E',
  width,
  height,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 153 40"
    >
      <path
        d="M35.8024 7.6543H8.36765C6.47624 7.6543 4.93827 9.03855 4.93827 10.7408V29.2591C4.93827 30.9614 6.47624 32.3457 8.36765 32.3457H35.8024C37.6936 32.3457 39.2318 30.9614 39.2318 29.2591V10.7408C39.2318 9.03855 37.6936 7.6543 35.8024 7.6543ZM8.36765 29.2591V10.7408H35.8024L35.8057 29.2591H8.36765Z"
        fill={fill}
      />
      <path
        d="M22.085 23.0863H32.3731V26.1728H22.085V23.0863ZM11.7971 16.9135L15.7289 20.4521L11.7971 23.9906L14.2215 26.1728L20.5779 20.4521L14.2215 14.7313L11.7971 16.9135Z"
        fill={fill}
      />
      <path
        d="M55.2265 24.0983L55.2155 19.2639H55.8568L61.9607 12.4383H66.638L59.1299 20.8015H58.3006L55.2265 24.0983ZM51.5775 29.4304V6.77413H55.5804V29.4304H51.5775ZM62.2371 29.4304L56.7083 21.6976L59.4063 18.8767L67.025 29.4304H62.2371ZM76.0148 29.7624C74.3563 29.7624 72.9187 29.3972 71.7024 28.6672C70.4862 27.937 69.5425 26.9156 68.8717 25.6027C68.2082 24.29 67.8765 22.7559 67.8765 21.0008C67.8765 19.2454 68.2082 17.7078 68.8717 16.3875C69.5425 15.0675 70.4862 14.0423 71.7024 13.3121C72.9187 12.5821 74.3563 12.2169 76.0148 12.2169C77.6736 12.2169 79.1109 12.5821 80.3275 13.3121C81.5438 14.0423 82.4835 15.0675 83.1471 16.3875C83.8179 17.7078 84.1532 19.2454 84.1532 21.0008C84.1532 22.7559 83.8179 24.29 83.1471 25.6027C82.4835 26.9156 81.5438 27.937 80.3275 28.6672C79.1109 29.3972 77.6736 29.7624 76.0148 29.7624ZM76.0372 26.554C76.9364 26.554 77.6883 26.3071 78.2928 25.8129C78.8973 25.3113 79.3469 24.6404 79.6419 23.7996C79.944 22.9588 80.095 22.0221 80.095 20.9897C80.095 19.9498 79.944 19.0093 79.6419 18.1688C79.3469 17.3206 78.8973 16.6456 78.2928 16.1441C77.6883 15.6428 76.9364 15.3921 76.0372 15.3921C75.1156 15.3921 74.3489 15.6428 73.7371 16.1441C73.1327 16.6456 72.6792 17.3206 72.3769 18.1688C72.0821 19.0093 71.9346 19.9498 71.9346 20.9897C71.9346 22.0221 72.0821 22.9588 72.3769 23.7996C72.6792 24.6404 73.1327 25.3113 73.7371 25.8129C74.3489 26.3071 75.1156 26.554 76.0372 26.554ZM93.8535 29.7291C92.5194 29.7291 91.3251 29.386 90.2711 28.7002C89.2167 28.0143 88.3839 27.0188 87.7718 25.7135C87.16 24.4079 86.8541 22.8224 86.8541 20.9564C86.8541 19.0684 87.1638 17.4753 87.783 16.1773C88.4095 14.872 89.2537 13.8874 90.3152 13.2236C91.3769 12.5524 92.5599 12.2169 93.8647 12.2169C94.86 12.2169 95.6781 12.3866 96.3196 12.7258C96.9608 13.0578 97.4694 13.4596 97.8456 13.9318C98.2214 14.3963 98.5126 14.8352 98.7189 15.248H98.8849V6.77413H102.899V29.4304H98.9622V26.7534H98.7189C98.5126 27.1664 98.2141 27.605 97.8232 28.0698C97.4327 28.527 96.9167 28.918 96.2752 29.2423C95.634 29.5669 94.8268 29.7291 93.8535 29.7291ZM94.9705 26.4435C95.8182 26.4435 96.5405 26.2148 97.1377 25.7576C97.7348 25.2931 98.1882 24.6478 98.4979 23.8217C98.8074 22.9956 98.9622 22.0333 98.9622 20.9344C98.9622 19.8354 98.8074 18.8803 98.4979 18.0691C98.1956 17.2577 97.746 16.6274 97.1488 16.1773C96.5591 15.7275 95.8329 15.5026 94.9705 15.5026C94.0786 15.5026 93.334 15.7348 92.7368 16.1996C92.1397 16.6642 91.6901 17.3056 91.3877 18.1244C91.0856 18.9432 90.9343 19.8798 90.9343 20.9344C90.9343 21.9963 91.0856 22.9441 91.3877 23.7776C91.6975 24.6034 92.1509 25.2561 92.748 25.7356C93.3525 26.2074 94.0933 26.4435 94.9705 26.4435ZM107.164 12.4383H111.167V30.4038C111.167 31.6283 110.935 32.6385 110.471 33.4352C110.006 34.2316 109.335 34.8252 108.458 35.2162C107.581 35.6072 106.516 35.8024 105.262 35.8024C105.115 35.8024 104.979 35.7989 104.853 35.7915C104.728 35.7915 104.592 35.7877 104.444 35.7804V32.5171C104.555 32.5244 104.654 32.5279 104.743 32.5279C104.831 32.5353 104.923 32.5391 105.019 32.5391C105.786 32.5391 106.335 32.351 106.667 31.9749C106.998 31.606 107.164 31.0641 107.164 30.3486V12.4383ZM109.155 10.0267C108.513 10.0267 107.964 9.8165 107.507 9.3961C107.057 8.96834 106.833 8.45562 106.833 7.85823C106.833 7.25352 107.057 6.74097 107.507 6.32056C107.964 5.89283 108.513 5.67896 109.155 5.67896C109.789 5.67896 110.33 5.89283 110.78 6.32056C111.237 6.74097 111.466 7.25352 111.466 7.85823C111.466 8.45562 111.237 8.96834 110.78 9.3961C110.33 9.8165 109.789 10.0267 109.155 10.0267ZM120.171 29.7735C119.094 29.7735 118.125 29.5816 117.263 29.1982C116.407 28.8072 115.729 28.2321 115.228 27.4725C114.734 26.7128 114.487 25.7761 114.487 24.6625C114.487 23.7038 114.664 22.9109 115.018 22.2841C115.372 21.657 115.855 21.1555 116.467 20.7794C117.078 20.4034 117.768 20.1194 118.534 19.9278C119.308 19.7284 120.108 19.5847 120.934 19.4962C121.929 19.393 122.736 19.3007 123.355 19.2195C123.975 19.131 124.424 18.9984 124.705 18.8215C124.992 18.6371 125.136 18.3531 125.136 17.9695V17.903C125.136 17.0699 124.889 16.4246 124.395 15.9671C123.901 15.5099 123.19 15.2812 122.261 15.2812C121.28 15.2812 120.503 15.4952 119.928 15.923C119.36 16.3508 118.977 16.8558 118.778 17.4385L115.04 16.9076C115.335 15.8751 115.821 15.0122 116.5 14.319C117.178 13.6181 118.007 13.0945 118.988 12.7479C119.968 12.3939 121.052 12.2169 122.238 12.2169C123.057 12.2169 123.871 12.3128 124.682 12.5045C125.493 12.6964 126.234 13.0134 126.905 13.4561C127.576 13.8912 128.114 14.4848 128.519 15.2371C128.932 15.9894 129.139 16.9296 129.139 18.058V29.4304H125.29V27.0961H125.158C124.915 27.5683 124.572 28.0108 124.129 28.4238C123.695 28.8292 123.145 29.1576 122.482 29.4084C121.826 29.6518 121.055 29.7735 120.171 29.7735ZM121.21 26.8307C122.014 26.8307 122.71 26.6722 123.3 26.355C123.89 26.0304 124.343 25.6027 124.66 25.0717C124.985 24.5408 125.147 23.9619 125.147 23.3348V21.3324C125.021 21.4359 124.808 21.5318 124.505 21.6203C124.211 21.7088 123.879 21.7861 123.51 21.8525C123.142 21.919 122.777 21.9781 122.416 22.0295C122.054 22.0812 121.741 22.1253 121.476 22.1624C120.878 22.2435 120.344 22.3761 119.872 22.5604C119.4 22.7448 119.028 23.0029 118.755 23.3348C118.483 23.6594 118.346 24.0798 118.346 24.596C118.346 25.3337 118.615 25.8905 119.154 26.2665C119.692 26.6425 120.377 26.8307 121.21 26.8307ZM132.942 29.4304V26.8859L141.7 15.901V15.7569H133.23V12.4383H146.598V15.1707L138.261 25.9678V26.1116H146.886V29.4304H132.942Z"
        fill={fill}
      />
    </svg>
  );
}

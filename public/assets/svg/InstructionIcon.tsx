/* External dependencies */
import React from 'react';

/* Local dependencies */
import { IconProps } from './types';

export default function InstructionIcon({
  fill = '#3A3B42',
  height = 16,
  width = 20,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 8.25C8.5 8.05109 8.57902 7.86032 8.71967 7.71967C8.86032 7.57902 9.05109 7.5 9.25 7.5H12.75C12.9489 7.5 13.1397 7.57902 13.2803 7.71967C13.421 7.86032 13.5 8.05109 13.5 8.25C13.5 8.44891 13.421 8.63968 13.2803 8.78033C13.1397 8.92098 12.9489 9 12.75 9H9.25C9.05109 9 8.86032 8.92098 8.71967 8.78033C8.57902 8.63968 8.5 8.44891 8.5 8.25ZM9.25 13C9.05109 13 8.86032 13.079 8.71967 13.2197C8.57902 13.3603 8.5 13.5511 8.5 13.75C8.5 13.9489 8.57902 14.1397 8.71967 14.2803C8.86032 14.421 9.05109 14.5 9.25 14.5H12.75C12.9489 14.5 13.1397 14.421 13.2803 14.2803C13.421 14.1397 13.5 13.9489 13.5 13.75C13.5 13.5511 13.421 13.3603 13.2803 13.2197C13.1397 13.079 12.9489 13 12.75 13H9.25ZM6.78 7.78C6.85369 7.71134 6.91279 7.62854 6.95378 7.53654C6.99477 7.44454 7.01682 7.34522 7.01859 7.24452C7.02037 7.14382 7.00184 7.04379 6.96412 6.9504C6.9264 6.85701 6.87026 6.77218 6.79904 6.70096C6.72782 6.62974 6.64299 6.5736 6.5496 6.53588C6.45621 6.49816 6.35618 6.47963 6.25548 6.48141C6.15478 6.48318 6.05546 6.50523 5.96346 6.54622C5.87146 6.58721 5.78866 6.64631 5.72 6.72L4.25 8.19L3.78 7.72C3.63783 7.58752 3.44978 7.5154 3.25548 7.51882C3.06118 7.52225 2.87579 7.60097 2.73838 7.73838C2.60097 7.87579 2.52225 8.06118 2.51883 8.25548C2.5154 8.44978 2.58752 8.63783 2.72 8.78L3.72 9.78C3.86063 9.92045 4.05125 9.99934 4.25 9.99934C4.44875 9.99934 4.63937 9.92045 4.78 9.78L6.78 7.78ZM6.78 12.22C6.92045 12.3606 6.99934 12.5512 6.99934 12.75C6.99934 12.9488 6.92045 13.1394 6.78 13.28L4.78 15.28C4.63937 15.4205 4.44875 15.4993 4.25 15.4993C4.05125 15.4993 3.86063 15.4205 3.72 15.28L2.72 14.28C2.64631 14.2113 2.58721 14.1285 2.54622 14.0365C2.50523 13.9445 2.48319 13.8452 2.48141 13.7445C2.47963 13.6438 2.49816 13.5438 2.53588 13.4504C2.5736 13.357 2.62974 13.2722 2.70096 13.201C2.77218 13.1297 2.85701 13.0736 2.9504 13.0359C3.04379 12.9982 3.14382 12.9796 3.24452 12.9814C3.34523 12.9832 3.44454 13.0052 3.53654 13.0462C3.62854 13.0872 3.71134 13.1463 3.78 13.22L4.25 13.69L5.72 12.22C5.86063 12.0795 6.05125 12.0007 6.25 12.0007C6.44875 12.0007 6.63937 12.0795 6.78 12.22ZM11.994 2.084C11.9521 1.51752 11.6975 0.987861 11.2813 0.601319C10.865 0.214778 10.318 -3.32977e-05 9.75 3.87141e-09H6.25C5.69656 1.67245e-05 5.16255 0.204007 4.75004 0.572972C4.33754 0.941936 4.07549 1.44999 4.014 2H2.25C1.65326 2 1.08097 2.23705 0.65901 2.65901C0.237053 3.08097 0 3.65326 0 4.25V17.75C0 18.3467 0.237053 18.919 0.65901 19.341C1.08097 19.7629 1.65326 20 2.25 20H13.75C14.0455 20 14.3381 19.9418 14.611 19.8287C14.884 19.7157 15.1321 19.5499 15.341 19.341C15.5499 19.1321 15.7157 18.884 15.8287 18.611C15.9418 18.3381 16 18.0455 16 17.75V4.25C16 3.95453 15.9418 3.66194 15.8287 3.38896C15.7157 3.11598 15.5499 2.86794 15.341 2.65901C15.1321 2.45008 14.884 2.28434 14.611 2.17127C14.3381 2.0582 14.0455 2 13.75 2H11.986L11.994 2.084ZM11.994 2.096L12 2.25C12 2.198 11.998 2.147 11.995 2.096H11.994ZM6.25 4.5H9.75C10.53 4.5 11.217 4.103 11.621 3.5H13.75C13.9489 3.5 14.1397 3.57902 14.2803 3.71967C14.421 3.86032 14.5 4.05109 14.5 4.25V17.75C14.5 17.9489 14.421 18.1397 14.2803 18.2803C14.1397 18.421 13.9489 18.5 13.75 18.5H2.25C2.05109 18.5 1.86032 18.421 1.71967 18.2803C1.57902 18.1397 1.5 17.9489 1.5 17.75V4.25C1.5 4.05109 1.57902 3.86032 1.71967 3.71967C1.86032 3.57902 2.05109 3.5 2.25 3.5H4.379C4.783 4.103 5.47 4.5 6.25 4.5ZM6.25 1.5H9.75C9.94891 1.5 10.1397 1.57902 10.2803 1.71967C10.421 1.86032 10.5 2.05109 10.5 2.25C10.5 2.44891 10.421 2.63968 10.2803 2.78033C10.1397 2.92098 9.94891 3 9.75 3H6.25C6.05109 3 5.86032 2.92098 5.71967 2.78033C5.57902 2.63968 5.5 2.44891 5.5 2.25C5.5 2.05109 5.57902 1.86032 5.71967 1.71967C5.86032 1.57902 6.05109 1.5 6.25 1.5Z"
        fill={fill}
      />
    </svg>
  );
}

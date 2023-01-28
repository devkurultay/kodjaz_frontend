/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import React from 'react';

/* Local dependencies */
import LogoWithoutText from '../../public/assets/svg/LogoWithoutText';
import UserIcon from '../../public/assets/svg/UserIcon';

export default function HeaderClassroom() {
  return (
    <div className="bg-blackColor text-whiteColor md:h-[80px]">
      <div className="flex max-w-[1440px] m-auto p-5 items-center justify-between md:h-full">
        <div className="flex items-center">
          <Link href="/">
            <LogoWithoutText />
          </Link>
          <span className="font-medium ml-10">
            <Link href="/classroom/courses">
              <Trans>mainPage</Trans>
            </Link>
          </span>
          {/* <button className="font-medium ml-10">
            <Trans>menu</Trans>
          </button> */}
        </div>
        <div className="">
          <div className="rounded-full w-[32px] h-[32px] bg-whiteColor flex justify-center items-center">
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

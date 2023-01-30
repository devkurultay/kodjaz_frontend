/* External dependencies */
import { useSession } from 'next-auth/react';
import { Trans } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/* Local dependencies */
import LogoWithoutText from '../../public/assets/svg/LogoWithoutText';
import UserIcon from '../../public/assets/svg/UserIcon';

export default function HeaderClassroom() {
  const { data: session } = useSession();

  return (
    <div className="bg-blackColor text-whiteColor md:h-[80px]">
      <div className="flex flex-col mobile:flex-row m-auto p-5 mobile:items-center mobile:justify-between md:h-full">
        <div className="flex items-center pb-3 mobile:pb-0 mr-7">
          <Link href="/">
            <LogoWithoutText />
          </Link>
          <span className="font-medium ml-10">
            <Link href="/classroom/courses">
              <Trans>mainPage</Trans>
            </Link>
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-2 break-all">{session?.user?.email}</span>
          <div className="rounded-full w-[32px] h-[32px] bg-whiteColor flex justify-center items-center flex-none">
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                alt={session?.user?.name || ''}
                width="32"
                height="32"
              />
            )}
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <div className="flex m-auto p-5 items-center justify-between md:h-full">
        <div className="flex items-center">
          <Link href="/">
            <LogoWithoutText />
          </Link>
          <span className="font-medium ml-10">
            <Link href="/classroom">
              <Trans>mainPage</Trans>
            </Link>
          </span>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{session?.user?.email}</span>
          <div className="rounded-full w-[32px] h-[32px] bg-whiteColor flex justify-center items-center">
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

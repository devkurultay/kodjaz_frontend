// External dependencies
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Trans } from 'next-i18next';
import { useRouter } from 'next/navigation';

/* Local dependencies */
import LogoIcon from '../../../public/assets/svg/Logo';
import BarsIcon from '../../../public/assets/svg/BarsIcon';
import CloseIcon from '../../../public/assets/svg/CloseIcon';
import ProfileIcon from '../../../public/assets/svg/ProfileIcon';
import ProfileMenu from '../../profile/ProfileMenu';

export default function Header() {
  const router = useRouter();
  const ref = useRef<HTMLButtonElement>(null);
  const { data: session } = useSession();
  const [isOpenProfileMenu, setIsOpenProfileMenu] = useState(false);

  function goToLoginPage() {
    const loginPath = `/login?callbackUrl=${location.pathname}`;
    router.push(loginPath);
  }

  function goToSignUpPage() {
    const signupPath = `/signup`;
    router.push(signupPath);
  }

  const handleClickProfileMenu = () => {
    setIsOpenProfileMenu(!isOpenProfileMenu);
  };

  function checkIfClickedOutside(e: any) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpenProfileMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', checkIfClickedOutside);
    console.log('open');

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
      console.log('close');
    };
  }, []);

  return (
    <Popover className="relative border-b border-grayColorDb">
      <div className="container ">
        <div className="flex items-center justify-between border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="w-auto">
              <span className="sr-only">kodjaz</span>
              <LogoIcon width={152} height={40} />
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <div>
                <BarsIcon />
              </div>
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            {session ? (
              <>
                <Popover className="relative">
                  <Link href="/classroom">
                    <Trans>myRoom</Trans>
                  </Link>
                </Popover>
                <Popover className="relative">
                  <Link href="/about">
                    <Trans>aboutUs</Trans>
                  </Link>
                </Popover>
                <Popover className="relative">
                  <Link href="/resources">
                    <Trans>resources</Trans>
                  </Link>
                </Popover>
              </>
            ) : (
              <>
                <Popover className="relative">
                  <Link href="/courses">
                    <Trans>courses</Trans>
                  </Link>
                </Popover>
                <Popover className="relative">
                  <Link href="/about">
                    <Trans>aboutUs</Trans>
                  </Link>
                </Popover>
                <Popover className="relative">
                  <Link href="/resources">
                    <Trans>resources</Trans>
                  </Link>
                </Popover>
              </>
            )}
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            {session ? (
              <div
                className="flex justify-between items-center font-semibold relative cursor-pointer"
                onClick={handleClickProfileMenu}
              >
                <div className="rounded-full bg-grayColorE7 w-[32px] h-[32px] flex justify-center items-center">
                  <ProfileIcon />
                </div>
                <p className="ml-2">{session.user?.email}</p>
                <div>
                  {isOpenProfileMenu ? (
                    <Image
                      className="ml-2"
                      src={'/assets/arrowUp.svg'}
                      alt={'arrow up'}
                      width={14}
                      height={8}
                    />
                  ) : (
                    <Image
                      className="ml-2"
                      src={'/assets/arrowDown.svg'}
                      alt={'arrow up'}
                      width={14}
                      height={8}
                    />
                  )}
                </div>
                {isOpenProfileMenu && (
                  <ProfileMenu>
                    <button
                      ref={ref}
                      color="blackColor sr-only"
                      onClick={() => signOut()}
                    >
                      <Trans>logOut</Trans>
                    </button>
                    <Image
                      className="ml-2"
                      src={'/assets/logOutIcon.svg'}
                      alt={'log out'}
                      width={8}
                      height={8}
                    />
                  </ProfileMenu>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={goToLoginPage}
                  className="whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
                  type="button"
                >
                  <Trans>logIn</Trans>
                </button>
                <button
                  onClick={goToSignUpPage}
                  className="ml-8 inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                  type="button"
                >
                  <Trans>signUpMenu</Trans>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right z-10 h-[100vh] left-auto max-w-sm transform transition lg:hidden"
        >
          <div className="divide-gray-50 bg-whiteColor shadow-lg ring-black ring-opacity-5 h-full flex flex-col w-[100%] min-w-[300px] max-h-[640px]">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="w-auto">
                  <LogoIcon width={152} height={40} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-whiteColor p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <div className="h-6 w-6">
                      <CloseIcon />
                    </div>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-8 px-5 grow">
              {session ? (
                <>
                  <div className="flex flex-col gap-y-[20px]">
                    <div className="flex justify-between font-semibold items-center">
                      <div className="rounded-full bg-grayColorE7 w-[32px] h-[32px] flex justify-center items-center">
                        <ProfileIcon />
                      </div>
                      <p className="break-all">{session.user?.email}</p>
                    </div>
                    <Link href="/classroom">
                      <Trans>myRoom</Trans>
                    </Link>
                    <Link href="/about">
                      <Trans>aboutUs</Trans>
                    </Link>
                    <Link href="/resources">
                      <Trans>resources</Trans>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/courses">
                    <Trans>courses</Trans>
                  </Link>
                  <Link href="/about">
                    <Trans>aboutUs</Trans>
                  </Link>
                  <Link href="/resources">
                    <Trans>resources</Trans>
                  </Link>
                </>
              )}
            </div>
            <div className="space-y-6 py-8 px-5">
              {session ? (
                <div className="mb-3 flex w-full font-semibold items-center justify-center whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor">
                  <Trans>logOut</Trans>
                </div>
              ) : (
                <>
                  <button
                    onClick={goToLoginPage}
                    className="mb-3 flex w-full items-center justify-center whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
                  >
                    <Trans>logIn</Trans>
                  </button>
                  <button
                    onClick={goToSignUpPage}
                    className="flex w-full items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                  >
                    <Trans>signUpMenu</Trans>
                  </button>{' '}
                </>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

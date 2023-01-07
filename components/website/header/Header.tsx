/* External dependencies */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Trans } from 'next-i18next';
import Link from 'next/link';

/* Local dependencies */
import LogoIcon from '../../../public/assets/svg/Logo';
import BarsIcon from '../../../public/assets/svg/BarsIcon';
import CloseIcon from '../../../public/assets/svg/CloseIcon';

export default function Header() {
  return (
    <Popover className="relative border-b border-grayColorDb">
      <div className="container ">
        <div className="flex items-center justify-between border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="w-auto">
              <span className="sr-only">Your Company</span>
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
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <Link
              href="#"
              className="whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
            >
              <Trans>signIn</Trans>
            </Link>
            <Link
              href="#"
              className="ml-8 inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
            >
              <Trans>start</Trans>
            </Link>
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
          <div className="divide-gray-50 bg-whiteColor shadow-lg ring-black ring-opacity-5 h-full flex flex-col justify-between w-[90%] min-w-[300px] max-h-[640px]">
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
            <div className="space-y-6 py-8 px-5">
              <div className="flex flex-col justify-end">
                <Link
                  href="#"
                  className="mb-3 flex w-full items-center justify-center whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
                >
                  <Trans>signIn</Trans>
                </Link>
                <Link
                  href="#"
                  className="flex w-full items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                >
                  <Trans>start</Trans>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

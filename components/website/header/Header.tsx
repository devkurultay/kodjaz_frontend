// External dependencies
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Trans } from 'next-i18next';

// Local dependencies
import LogoIcon from '../../../assets/svg/Logo';
import BarsIcon from '../../../assets/svg/BarsIcon';
import CloseIcon from '../../../assets/svg/CloseIcon';

const courses = [
  {
    name: 'Phyton',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className="relative border-b border-grayColorDb">
      <div className="container mx-auto">
        <div className="flex items-center justify-between border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="h-8 w-auto sm:h-10">
              <span className="sr-only">Your Company</span>
              <LogoIcon width={152} height={40} />
            </a>
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
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none',
                    )}
                  >
                    <span>
                      <Trans>courses</Trans>
                    </span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {courses.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className="relative">
              <a href="#">
                <Trans>aboutUs</Trans>
              </a>
            </Popover>
            <Popover className="relative">
              <a href="#">
                <Trans>resources</Trans>
              </a>
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
            >
              <Trans>signIn</Trans>
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
            >
              <Trans>start</Trans>
            </a>
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
          <div className="divide-gray-50 bg-whiteColor shadow-lg ring-black ring-opacity-5 h-full flex flex-col justify-between">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="h-8 w-auto sm:h-10">
                  <LogoIcon />
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {courses.map((item) => (
                    <a key={item.name} href={item.href} className="flex items-center rounded-md hover:bg-gray-50">
                      <span className="text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="flex flex-col justify-end">
                <a
                  href="#"
                  className="mb-3 flex w-full items-center justify-center whitespace-nowrap rounded-lg border-2 px-5 py-1.5 font-medium text-primaryColorLight hover:bg-primaryColorLight hover:text-whiteColor"
                >
                  <Trans>signIn</Trans>
                </a>
                <a
                  href="#"
                  className="flex w-full items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight px-5 py-1.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
                >
                  <Trans>start</Trans>
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

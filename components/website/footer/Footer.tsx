// External dependencies
import React from 'react';
import { Popover } from '@headlessui/react';
import { Trans } from 'next-i18next';

// Local dependencies
import LogoWhiteIcon from '../../../assets/svg/LogoWhiteIcon';
import InstagramIcon from '../../../assets/svg/InstagramIcon';
import FacebookIcon from '../../../assets/svg/FacebookIcon';
import TelegramIcon from '../../../assets/svg/TelegramIcon';

export default function Footer() {
  return (
    <>
      <div className="bg-blackColorDark">
        <div className="container mx-auto">
          <div className="flex md:items-center py-12 flex-col md:flex-row">
            <div className="flex md:justify-start basis-full mb-14 md:mb-0 md:basis-1/4">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <LogoWhiteIcon width={92} height={24} />
              </a>
            </div>
            <div className="flex md:basis-1/2 md:justify-center text-whiteColor flex-col md:flex-row">
              <a href="#" className="mb-4 md:basis-1/3 md:mb-0">
                <Trans>courses</Trans>
              </a>
              <a href="#" className="mb-4 md:basis-1/3 md:mb-0">
                <Trans>aboutUs</Trans>
              </a>
              <a href="#" className="mb-14 md:basis-1/3 md:mb-0">
                <Trans>resources</Trans>
              </a>
            </div>
            <div className="flex md:basis-1/4 md:justify-end">
              <a href="#" className="flex pr-8 md:pl-8 md:pr-0">
                <InstagramIcon />
              </a>
              <a href="#" className="flex pr-8 md:pl-8 md:pr-0">
                <FacebookIcon />
              </a>
              <a href="#" className="flex pr-8 md:pl-8 md:pr-0">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blackColorMiddle text-grayColor98">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between py-3.5">
            <div className="flex sm:flex-none md:basis-1/2 justify-start">© 2022 Kodjaz</div>
            <div className="flex sm:grow md:basis-1/3 sm:justify-end">
              <span className="flex sm:justify-end mr-5">Купуялык саясат</span>
              <span className="flex sm:justify-end">Куки саясаты</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

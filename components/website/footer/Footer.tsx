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
    <Popover className="bg-blackColorDark">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-gray-100 py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="h-8 w-auto sm:h-10">
              <span className="sr-only">Your Company</span>
              <LogoWhiteIcon />
            </a>
          </div>
          <div className="flex items-center justify-between lg:flex lg:flex-1 lg:w-0">
            <a href="#">
              <Trans>courses</Trans>
            </a>
            <a href="#">
              <Trans>aboutUs</Trans>
            </a>
            <a href="#">
              <Trans>resources</Trans>
            </a>
          </div>
          <div className="flex items-center justify-between lg:flex lg:flex-1 lg:w-0">
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}

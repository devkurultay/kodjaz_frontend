/* External dependencies */
import React from 'react';
import { Trans } from 'next-i18next';
import Link from 'next/link';

/* Local dependencies */
import LogoWhiteIcon from '../../../public/assets/svg/LogoWhiteIcon';
import InstagramIcon from '../../../public/assets/svg/InstagramIcon';
import FacebookIcon from '../../../public/assets/svg/FacebookIcon';
import TelegramIcon from '../../../public/assets/svg/TelegramIcon';

export default function Footer() {
  return (
    <>
      <div className="bg-blackColorDark">
        <div className="container mx-auto">
          <div className="flex md:items-center py-12 flex-col md:flex-row">
            <div className="flex md:justify-start basis-full mb-14 md:mb-0 md:basis-1/4">
              <a href="/">
                <span className="sr-only">Your Company</span>
                <LogoWhiteIcon width={92} height={24} />
              </a>
            </div>
            <div className="flex md:basis-1/2 md:justify-center text-whiteColor flex-col md:flex-row">
              <div className="mb-4 md:basis-1/3 md:mb-0">
                <Link href="/courses">
                  <Trans>courses</Trans>
                </Link>
              </div>
              <div className="mb-4 md:basis-1/3 md:mb-0">
                <Link href="/about">
                  <Trans>aboutUs</Trans>
                </Link>
              </div>
              <div className="mb-14 md:basis-1/3 md:mb-0">
                <Link href="/resources">
                  <Trans>resources</Trans>
                </Link>
              </div>
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
            <div className="flex sm:flex-none md:basis-1/2 justify-start">?? 2022 Kodjaz</div>
            <div className="flex sm:grow md:basis-1/3 sm:justify-end">
              <span className="flex sm:justify-end mr-5">???????????????? ????????????</span>
              <span className="flex sm:justify-end">???????? ??????????????</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

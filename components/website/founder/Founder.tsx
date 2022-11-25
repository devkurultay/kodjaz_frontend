/* External dependencies */
import Image from 'next/image';
import { Trans } from 'next-i18next';
import React from 'react';

export default function Founder() {
  return (
    <section className="bg-[#003483] py-[60px] md:py-[100px]">
      <div className="container ">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:basis-2/3 md:pr-5 lg:pr-14">
            <p className="text-grayColor98 uppercase mb-5">
              <Trans>fromFounder</Trans>
            </p>
            <blockquote className="font-black text-whiteColorF3 text-md mb-8">
              <Trans>fromFounderText</Trans>
            </blockquote>
            <p className="font-bold text-whiteColor">Мурат Жумашев</p>
            <p className="font-sm text-whiteColorF3">Software Engineer</p>
          </div>
          <div className="max-w-[150px] md:max-w-full md:basis-1/3 md:flex md:justify-end mb-8 md:mb-0">
            <Image src="/assets/founder-photo.png" width={300} height={400} alt="Photo of Murat Jumashev" />
          </div>
        </div>
      </div>
    </section>
  );
}

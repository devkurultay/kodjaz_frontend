/* External dependencies */
import { Trans } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

export default function Feedbacks() {
  const feedbacksArray = [
    {
      alt: 'A man`s photo',
      author: 'feedbacksAuthor1',
      region: 'feedbacksRegion1',
      src: '/assets/avatar-1.png',
      text: 'feedbacksText1',
    },
    {
      alt: 'A man`s photo',
      author: 'feedbacksAuthor2',
      region: 'feedbacksRegion2',
      src: '/assets/avatar-2.png',
      text: 'feedbacksText2',
    },
  ];

  return (
    <section className="py-[80px]">
      <div className="container ">
        <div className="flex lg:justify-end">
          <div className="basis-full lg:basis-10/12">
            <h2 className="text-center md:text-left text-blackColorDark text-xl mb-12 font-bold">
              <Trans>feedbacksTitle</Trans>
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-y-[30px] md:gap-x-[30px] relative">
              {feedbacksArray.map((item: any, index: number) => (
                <div key={index} className="basis-full md:basis-1/2">
                  <div className="p-8 bg-grayColorF3 rounded-[30px] h-full">
                    <div className="flex mb-5 items-center">
                      <div>
                        <Image src={item.src} alt={item.alt} width={80} height={80} />
                      </div>
                      <div className="pl-5">
                        <p className="font-medium text-blackColorDark text-sm2 mb-1">
                          <Trans>{item.author}</Trans>
                        </p>
                        <p className="text-grayColor75">
                          <Trans>{item.region}</Trans>
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>
                        <Trans>{item.text}</Trans>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="hidden lg:block absolute top-[15px] lg:left-[-360px] xl:left-[-410px] right-auto">
                <Image src="/assets/feedbacks-bg.png" alt="Code image" width={309} height={223} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

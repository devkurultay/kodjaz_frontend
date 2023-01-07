/* External dependencies */
import { Trans } from 'next-i18next';
import Image from 'next/image';
import React from 'react';

interface TextSectionProps {
  children: any;
  logos?: Boolean;
  text?: string;
}

export default function TextSection({ children, logos, text }: TextSectionProps) {
  const arrayLogos = [
    {
      alt: 'US Embassy in the Kyrgyz Republic logo',
      height: '59',
      src: '/assets/brand-logo-embassy.svg',
      width: '87',
    },
    {
      alt: 'American councils logo',
      height: '36',
      src: '/assets/brand-logo-american-councils.svg',
      width: '137',
    },
    {
      alt: 'Women techmakers Bishkek logo',
      height: '32',
      src: '/assets/brand-logo-wtm.svg',
      width: '157',
    },
    {
      alt: 'DevKurultay logo',
      height: '26',
      src: '/assets/brand-logo-devkurultay.svg',
      width: '157',
    },
    {
      alt: 'Mancho Devs logo',
      height: '24',
      src: '/assets/brand-logo-mancho-devs.svg',
      width: '165',
    },
  ];

  return (
    <section className="py-28">
      <div className="container  text-center">
        <div className={`max-w-[700px] mx-auto ${logos && 'mb-[70px]'}`}>
          <h2 className="mb-5 text-lg font-bold">{children}</h2>
          <p>
            <Trans>{text}</Trans>
          </p>
        </div>
        {logos && (
          <div className="flex items-center justify-center md:justify-between flex-wrap gap-y-14">
            {arrayLogos.map((item: any, index: number) => (
              <div
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-auto flex justify-center lg:justify-start px-2"
              >
                <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

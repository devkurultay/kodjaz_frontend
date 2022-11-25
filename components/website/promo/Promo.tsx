// External dependencies
import Image from 'next/image';
import React from 'react';

// Local dependencies
import styles from '../../../styles/scss/promo.module.scss';

interface PromoProps {
  alt: string;
  bgColor?: string;
  children: any;
  imgClassName?: string;
  imgSrc: string;
}

export default function Promo({ alt, bgColor, children, imgClassName, imgSrc }: PromoProps) {
  return (
    <section className={`${bgColor} ${styles.promo}`}>
      <div className="container ">
        <div className="flex flex-col md:flex-row items-center relative">
          <div className="md:basis-1/2 md:pr-4 mb-8 md:mb-0">{children}</div>
          <div className="md:basis-1/2 md:pl-4">
            <div className={imgClassName}>
              <Image src={imgSrc} alt={alt} width={690} height={339} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

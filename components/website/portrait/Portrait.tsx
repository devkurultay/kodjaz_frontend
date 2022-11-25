/* External dependencies */
import Image from 'next/image';
import React from 'react';

interface PortraitProps {
  alt: string;
  bgColor: string;
  borderRadius?: string;
  heightClass?: string;
  src: string;
  widthClass?: string;
}

export default function Portrait({
  alt,
  bgColor,
  borderRadius = 'rounded-[90px]',
  heightClass = 'sm:h-[268px] h-[134px]',
  src,
  widthClass = 'sm:w-[200px] w-[100px]',
}: PortraitProps) {
  function sliceSizeForImageAttr(size: string) {
    const number = size.slice(size.indexOf('[') + 1, size.indexOf('p'));

    return +number;
  }

  return (
    <div className={`${bgColor} ${borderRadius} ${widthClass} ${heightClass} sm:mb-5 relative `}>
      <Image
        src={src}
        alt={alt}
        width={sliceSizeForImageAttr(widthClass)}
        height={sliceSizeForImageAttr(heightClass)}
        style={{ position: 'absolute', bottom: '0', top: 'auto', width: '100%', height: 'auto' }}
      ></Image>
    </div>
  );
}

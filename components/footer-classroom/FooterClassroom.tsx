/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

export default function FooterClassroom() {
  return (
    <div className="bg-blackColor text-whiteColor md:h-[80px]">
      <div className="flex m-auto p-5 items-center justify-end">
        <button className="rounded-md border-2 border-[#C4C4C4] bg-blackColor text-[#98989A] px-5 py-2 mr-5 hover:bg-whiteColor hover:border-whiteColor hover:text-blackColor  ease-in duration-300 font-semibold">
          <Trans>back</Trans>
        </button>
        <button className="rounded-md border-2 border-[#E7E7EC] bg-[#E7E7EC] text-[#98989A] px-5 py-2 hover:bg-whiteColor hover:border-whiteColor hover:text-blackColor  ease-in duration-300 font-semibold">
          <Trans>next</Trans>
        </button>
      </div>
    </div>
  );
}

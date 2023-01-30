/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

/* External dependencies */
import LoadingSpinner from '../../ui/Spinner';

interface PopupIDEProps {
  loading: boolean | undefined;
}

export default function PopupIDE({ loading }: PopupIDEProps) {
  return (
    <div className="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50 bg-blackColor/50 overflow-hidden flex">
      <div className="w-full max-w-[400px] bg-whiteColor p-[30px] rounded-[20px]">
        <h2 className="text-lg font-bold mb-5">
          <Trans>areYouSure</Trans>
        </h2>
        <p className="mb-5">
          <Trans>areYouSureToReset</Trans>
        </p>
        <div className="flex justify-between">
          <button className="text-primaryColorLight font-semibold rounded-md py-2 px-4 border-primaryColorLight border basis-[45%] hover:bg-primaryColorLight hover:text-whiteColor focus:outline-none focus:bg-primaryColorDark focus:text-whiteColor">
            <Trans>cancel</Trans>
          </button>
          <button
            type="submit"
            className="flex justify-center rounded-md border border-transparent bg-primaryColorLight py-2 px-4 font-semibold text-whiteColor hover:bg-primaryColorMiddle focus:outline-none focus:bg-primaryColorDark basis-[45%]"
          >
            {loading ? <LoadingSpinner height={23} /> : <Trans>confirm</Trans>}
          </button>
        </div>
      </div>
    </div>
  );
}

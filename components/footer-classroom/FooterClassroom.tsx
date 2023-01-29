/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { Exercise } from '../../types/tracksTypes';

type FooterClassroomProps = {
  exercise?: Exercise;
  isSuccess: boolean;
};

export default function FooterClassroom({
  exercise,
  isSuccess,
}: FooterClassroomProps) {
  let nexBtnClass =
    'rounded-md border-2 border-[#E7E7EC] bg-[#E7E7EC] text-[#98989A] px-5 py-2 ease-in duration-300 font-semibold';
  if (isSuccess) {
    nexBtnClass =
      'rounded-md px-5 py-2 ease-in duration-300 font-semibold bg-primaryColorLight text-whiteColor hover:bg-primaryColorMiddle';
  }
  return (
    <div className="bg-blackColor text-whiteColor md:h-[80px]">
      <div className="flex m-auto p-5 items-center justify-end">
        {exercise && (
          <Link href={`/classroom/exercise/${exercise?.previous_exercise}`}>
            <button
              disabled={!exercise?.previous_exercise}
              className="rounded-md border-2 border-[#C4C4C4] bg-blackColor text-[#98989A] px-5 py-2 mr-5 hover:bg-whiteColor hover:border-whiteColor hover:text-blackColor  ease-in duration-300 font-semibold"
            >
              <Trans>back</Trans>
            </button>
          </Link>
        )}
        {exercise && (
          <Link href={`/classroom/exercise/${exercise?.next_exercise}`}>
            <button
              disabled={!isSuccess || !exercise?.next_exercise}
              className={nexBtnClass}
            >
              <Trans>next</Trans>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

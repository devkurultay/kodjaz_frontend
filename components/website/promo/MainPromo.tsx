/* External dependencies */
import { Trans } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { openConfirmationPopupSignup } from '../../../store/slices/userSlice';

/* Local dependencies */
import styles from '../../../styles/scss/promo.module.scss';
import { useAppDispatch } from '../../../store/hooks';
import Promo from './Promo';

export default function MainPromo() {
  const dispatch = useAppDispatch();

  function openPopupSignUp() {
    dispatch(openConfirmationPopupSignup());
  }

  return (
    <Promo
      alt="Developers"
      imgSrc="/assets/main-promo-img.svg"
      bgColor="bg-blueColorLight"
      imgClassName={styles.mainImg}
    >
      <div className="py-10">
        <h1 className="text-blackColorDark font-bold text-base sm:text-md lg:text-lg mb-8">
          <Trans>mainPromoTitle</Trans>
        </h1>
        <button
          onClick={openPopupSignUp}
          className="inline-flex items-center justify-center border-primaryColorLight whitespace-nowrap rounded-lg border-2 bg-primaryColorLight w-full sm:w-auto px-12 py-1.5 md:py-2.5 font-medium text-whiteColor hover:bg-whiteColor hover:text-primaryColorLight"
        >
          <Trans>start</Trans>
        </button>
      </div>
    </Promo>
  );
}

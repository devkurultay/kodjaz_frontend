/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

/* Local dependencies */
import styles from '../../../styles/scss/promo.module.scss';
import Promo from './Promo';

export default function AboutPromo() {
  return (
    <div className="pb-28">
      <Promo alt="Kyrgyzstan map" imgSrc="/assets/about-promo-img.png" imgClassName={styles.aboutImg}>
        <p className="text-grayColor75 text-xs sm:text-base uppercase font-medium pb-2.5">
          <Trans>aboutPromoText</Trans>
        </p>
        <h1 className="text-blackColorDark font-bold text-base sm:text-md lg:text-lg">
          <Trans>aboutPromoTitle</Trans>
        </h1>
      </Promo>
    </div>
  );
}

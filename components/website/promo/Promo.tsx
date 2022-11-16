import { Trans } from 'next-i18next';
import React from 'react';

import styles from '../../../styles/scss/promo.module.scss';

export default function Promo() {
	return (
		<div className={styles.promo}>
			<p>
				<Trans>promoText</Trans>
			</p>
		</div>
	);
}

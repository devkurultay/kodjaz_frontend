/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

/* Local dependencies */
import Info from './Info';

export default function InfoAbout() {
	const info = [
		{
			text: (
				<Trans
					i18nKey='aboutPlatformText1'
					components={{
						text1: <p className='mb-5'></p>,
						text2: <p></p>,
					}}
				/>
			),
		},
		{
			text: (
				<Trans
					i18nKey='aboutPlatformText2'
					components={{
						text1: <p className='mb-5'></p>,
						text2: <p></p>,
					}}
				/>
			),
		},
	];
	return <Info infoArray={info} title='aboutPlatformTitle'></Info>;
}

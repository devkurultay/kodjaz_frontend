/* External dependencies */
import React from 'react';

/* Local dependencies */
import BrowserIcon from '../../../public/assets/svg/BrowserIcon';
import MediaIcon from '../../../public/assets/svg/MediaIcon';
import PriceIconForInfo from '../../../public/assets/svg/PriceIconForInfo';
import SearchIconForInfo from '../../../public/assets/svg/SearchIconForInfo';
import Info from './Info';

export default function InfoMain() {
	const info = [
		{
			icon: <BrowserIcon />,
			title: 'infoMainItemTitle1',
			text: 'infoMainItemText1',
		},
		{
			icon: <MediaIcon />,
			title: 'infoMainItemTitle2',
			text: 'infoMainItemText2',
		},
		{
			icon: <SearchIconForInfo />,
			title: 'infoMainItemTitle3',
			text: 'infoMainItemText3',
		},
		{
			icon: <PriceIconForInfo />,
			title: 'infoMainItemTitle4',
			text: 'infoMainItemText4',
		},
	];
	return <Info infoArrayWithIcons={info} textFooter='onlyKyrgyzLanguage' title='whySimple'></Info>;
}

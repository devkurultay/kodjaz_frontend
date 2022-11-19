/* External dependencies */
import { Trans } from 'next-i18next';
import React from 'react';

type InfoArrayWithIcons = {
	icon: React.ReactNode;
	title: string;
	text: string;
};

type InfoArray = {
	text: React.ReactNode;
};

interface InfoProps {
	infoArrayWithIcons?: InfoArrayWithIcons[];
	infoArray?: InfoArray[];
	textFooter?: string;
	title: any;
}

export default function Info({ infoArray, infoArrayWithIcons, textFooter, title }: InfoProps) {
	return (
		<section className='rounded-t-[100px] bg-grayColorF3 py-[96px]'>
			<div className='container mx-auto'>
				<h2 className='mb-[70px] text-lg text-center font-bold'>
					<Trans>{title}</Trans>
				</h2>
				<div className='flex flex-wrap justify-between gap-y-[44px] mb-11'>
					{infoArrayWithIcons &&
						infoArrayWithIcons.map((item: any, index: number) => (
							<div key={index} className='flex flex-col xs:flex-row lg:basis-1/2 xl:basis-5/12 items-center'>
								<div className='flex-none w-[60px] mb-3 xs:mb-0'>{item.icon}</div>
								<div className='grow pl-5 pr-6 xl:pr-0 text-center xs:text-left'>
									<h3 className='mb-2.5 text-blackColorMiddle text-sm2 font-bold'>
										<Trans>{item.title}</Trans>
									</h3>
									<p>
										<Trans>{item.text}</Trans>
									</p>
								</div>
							</div>
						))}
					{infoArray &&
						infoArray.map((item: any, index: number) => (
							<div key={index} className='lg:basis-1/2 xl:basis-5/12 items-center pr-6 xl:pr-0'>
								{item.text}
							</div>
						))}
				</div>
				{textFooter && (
					<div>
						<h6 className='font-bold text-md text-center'>
							<Trans>{textFooter}</Trans>
						</h6>
					</div>
				)}
			</div>
		</section>
	);
}

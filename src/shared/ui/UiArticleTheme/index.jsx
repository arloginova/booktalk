import React from 'react';
import { cn } from '@/shared/lib';
import Image from 'next/image';

const wrapperCls =
	'rounded-[15px] relative z-[0] p-main flex items-end  lg-low:text-xl leading-[120%] uppercase overflow-hidden duration-150';
const orangeCls =
	'bg-orangeMain hover:bg-orangeExtra text-whiteMain [text-shadow:0_0_2px_var(--color-blackMain-50)]';
const orangeExtra =
	'bg-orangeMain  hover:bg-orangeExtra text-whiteMain [text-shadow:0_0_2px_var(--color-blackMain-50)]';
const greyCls = 'bg-greyBackground text-blackMain hover:bg-greyBackgroundH';

const bgCls = 'absolute -z-[1]';
const greyFlower4 =
	'lg-low:size-[180px] size-[150px] rotate-[150deg] right-0 bottom-0 translate-y-[13%] -translate-x-[1%]';
const greyStar4 =
	'lg-low:w-[175px] lg-low:h-[185px] w-[136px] h-[142px] right-0 bottom-0 translate-y-[10%] -translate-x-[2%]';
const greyStar5 =
	'lg-low:size-[180px] size-[200px] left-0 bottom-0 lg-low:translate-y-[25%] translate-y-[42%] lg-low:-translate-x-[5%] -translate-x-[15%]';
const greyCloud4 =
	'lg-low:size-[170px] size-[140px] -rotate-[15deg] left-0 top-0 -translate-x-[1%] -translate-y-[15%]';
const orangeExtraStar8 =
	'lg-low:size-[200px] w-[160px] h-[152px] left-0 top-0 lg-low:-translate-y-[41%] -translate-y-[55%] translate-x-[12%]';
const orangeFlower6 =
	'lg-low:w-[192px] lg-low:h-[203px] w-[163px] h-[159px] right-0 top-0 lg-low:translate-x-[10%] translate-x-[26%] lg-low:-translate-y-[30%] -translate-y-[44%] rotate-[21deg]';
const orangeExtraFlower4 =
	'lg-low:size-[190px] size-[150px] lg-low:rotate-[150deg] rotate-[165deg] right-0 top-0 lg-low:translate-x-[22%] lg-low:-translate-y-[19%] translate-x-[34%] -translate-y-[24%]';
const orangeCloud8 =
	'lg-low:size-[200px] size-[170px] right-0 top-0 lg-low:-translate-y-1/2 -translate-y-[66%]';

const UiArticleTheme = ({
							className,
							backgroundImageClassName,
							theme,
							Tag = 'div',
							children,
						}) => {
	let path = '';

	switch (theme) {
		case 'grey-cloud-4':
			path = '/images/Home/illustrations/decor-cloud-rects-4.svg';
			break;
		case 'grey-flower-4':
			path = '/images/Home/illustrations/decor-flower-rects-4.svg';
			break;
		case 'grey-star-4':
			path = '/images/Home/illustrations/decor-star-rects-4.svg';
			break;
		case 'grey-star-5':
			path = '/images/Home/illustrations/decor-star-rects-5.svg';
			break;
		case 'orange-cloud-8':
			path = '/images/Home/illustrations/decor-cloud-rects-8.svg';
			break;
		case 'orangeExtra-flower-4':
			path = '/images/Home/illustrations/decor-flower-rects-4.svg';
			break;
		case 'orange-flower-6':
			path = '/images/Home/illustrations/decor-flower-rects-6.svg';
			break;
		case 'orangeExtra-star-8':
			path = '/images/Home/illustrations/decor-star-rects-8.svg';
			break;
	}

	return (
		<Tag
			className={cn(
				wrapperCls,
				{
					[orangeCls]:
					theme === 'orange-cloud-8' || theme === 'orange-flower-6',

					[greyCls]:
					theme === 'grey-flower-4' ||
					theme === 'grey-star-4' ||
					theme === 'grey-star-5' ||
					theme === 'grey-cloud-4',
					[orangeExtra]:
					theme === 'orangeExtra-flower-4' || theme === 'orangeExtra-star-8',
				},
				className
			)}
		>
			<Image
				src={path}
				alt='Декорации'
				width={100}
				height={100}
				className={cn(
					bgCls,
					{
						[greyFlower4]: theme === 'grey-flower-4',
						[greyStar4]: theme === 'grey-star-4',
						[greyStar5]: theme === 'grey-star-5',
						[greyCloud4]: theme === 'grey-cloud-4',
						[orangeExtraStar8]: theme === 'orangeExtra-star-8',
						[orangeFlower6]: theme === 'orange-flower-6',
						[orangeExtraFlower4]: theme === 'orangeExtra-flower-4',
						[orangeCloud8]: theme === 'orange-cloud-8',
					},
					backgroundImageClassName
				)}
			/>
			{children}
		</Tag>
	);
};

export { UiArticleTheme };
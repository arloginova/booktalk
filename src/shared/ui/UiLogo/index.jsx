import React from 'react';
import Link from 'next/link';
import { cn } from '@/shared/lib';
import Image from 'next/image';

const wrapperCls = 'block';
const imgCls = 'w-full h-auto';

const bigSizeCls = 'w-12';
const midSizeCls = 'w-8';
const lowSizeCls = 'w-5';

const UiLogo = ({
					href = '/',
					className,
					imageClassName,
					size,
				}) => {
	return (
		<Link
			href={href}
			className={cn(
				wrapperCls,
				{
					[bigSizeCls]: size === 'big',
					[midSizeCls]: size === 'mid',
					[lowSizeCls]: size === 'low',
				},
				className
			)}
		>
			<Image
				src='/images/shared/main-logo.svg'
				width={50}
				height={50}
				alt='Booktalk logo'
				className={cn(imgCls, imageClassName)}
			/>
		</Link>
	);
};

export { UiLogo };
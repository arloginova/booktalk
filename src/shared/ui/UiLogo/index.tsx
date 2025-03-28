import { FC } from 'react'
import { TClassName } from '@/shared/types'
import Link from 'next/link'
import { cn } from '@/shared/lib'
import Image from 'next/image'

const wrapperCls = 'block'
const imgCls = 'w-full h-auto'

const bigSizeCls = 'w-12'
const midSizeCls = 'w-8'
const lowSizeCls = 'w-5'

interface TUiLogoProps extends TClassName {
	href?: string
	imageClassName?: string
	size: 'big' | 'mid' | 'low'
}

const UiLogo: FC<TUiLogoProps> = ({
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
	)
}

export { UiLogo, type TUiLogoProps }

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiButton, UiGridElemWrapper, UiTypography } from '@/shared/ui'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { PREVIEW_IMAGES } from '../../constants/previewImages'
import { useScreen } from '@/shared/hooks'
import { LG_BIG, LG_LOW, MD_MID } from '@/shared/constants'

const wrapperCls = 'flex flex-col items-start relative z-[0] overflow-hidden'
const btnCls = 'shadow-[0_0_5px_0_rgba(0,0,0,20%)]'
const btnWrapperCls = 'flex justify-end w-full mb-auto'
const previewImagesCls = 'lg-low:max-w-[700px] xs-big:max-w-[370px] max-w-[400px] xl:mx-0 xl-1:mx-auto lg-low:mx-0 lg-low-1:mx-auto xs-mid:mx-0 mx-auto flex justify-center lg-big:gap-x-4 gap-x-2'
const titleCls = 'lg-big:text-2xl text-whiteMain uppercase lg-big:mb-8 mb-5 leading-[130%]'
const decorImageCls = 'absolute -z-[1]'
const previewItemCls =
	'h-auto -rotate-[16deg] lg-low:rounded-xl rounded-md flex-1 xl-1:max-w-[92.5px] lg-big:max-w-[75px] lg-low-1:max-w-[56.5px] max-w-[56px] w-full'

interface Props extends TClassName { }

const GradientBlock: FC<Props> = ({ className }) => {
	const { screenWidth } = useScreen()
	return (
		<UiGridElemWrapper className={cn(wrapperCls, className)}>
			<>
				<Image
					alt='decor'
					src='/images/Home/illustrations/decor-star-rects-8.svg'
					width={220}
					height={220}
					className={cn(
						'top-0 xs-mid:-translate-y-[20%] translate-y-[20%] left-0 -translate-x-[45%] lg-big:w-[220px] xs-mid:w-[111px] w-[85px] h-auto',
						decorImageCls
					)}
				/>
				<Image
					alt='decor'
					src='/images/Home/illustrations/decor-cloud-rects-8.svg'
					width={195}
					height={195}
					className={cn(
						'top-0 -translate-y-1/2 left-0 lg-low:translate-x-[80%] xs-mid:translate-x-[70%] translate-x-[55%] lg-big:w-[195px] xs-mid:w-[107px] w-[83px] h-auto',
						decorImageCls
					)}
				/>
				<Image
					alt='decor'
					src='/images/Home/illustrations/decor-flower-rects-6.svg'
					width={175}
					height={175}
					className={cn(
						'top-0 -translate-y-[38%] left-0 xs-mid:translate-x-[230%] translate-x-[200%] rotate-[75deg] lg-big:w-[175px] xs-mid:w-[88px] w-[71px] h-auto',
						decorImageCls
					)}
				/>
			</>
			<div className={btnWrapperCls}>
				<UiButton
					isInverted
					className={btnCls}
					size={screenWidth >= LG_BIG ? 'big' : screenWidth >= LG_LOW ? 'mid' : 'small'}
				>
					книги по 99 ₽
				</UiButton>
			</div>
			<UiTypography tag='h2' font='Raleway-SB' className={titleCls}>
				подарите себе время
				<br />
				для любимого чтения
			</UiTypography>
			<div className={previewImagesCls}>
				{PREVIEW_IMAGES.map((path, index) =>
					screenWidth < LG_LOW && index > 5 ? null : screenWidth < MD_MID &&
						index > 4 ? null : (
						<Image
							src={path}
							key={path}
							width={95}
							height={151}
							alt='preview image'
							className={previewItemCls}
						/>
					)
				)}
			</div>
		</UiGridElemWrapper>
	)
}

export { GradientBlock }

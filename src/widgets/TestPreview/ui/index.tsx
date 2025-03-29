'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/shared/types'
import {
	UiGridElemWrapper,
	UiTypography,
	UiButton,
} from '@/shared/ui'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { useScreen } from '@/shared/hooks'
import { MD_MID } from '@/shared/constants'
import { TestBlockWrapper } from '@/widgets/TestBlockWrapper'
import { EnScreens } from '@/screens/Test/types/screens'

const wrapperCls = ''
const contentWrapperCls = 'w-full flex'
const contentCls =
	'my-auto lg-big:max-w-[330px] md-mid:max-w-[255px] max-w-[310px] '
const titleCls = 'md-mid:mt-0 mt-35 lg-big:text-2xl uppercase'
const subtitleCls = 'lg-big:text-xl text-sm mt-4 mb-5 leading-[130%]'
const imageCls =
	'absolute lg-big:w-[600px] lg-big:h-[390px] lg-low:w-[410px] lg-low:h-[265px] w-[330px] h-[210px] lg-big:right-8 right-5 lg-big:-bottom-3 -bottom-2 -z-[1]'
const btnCls = 'lg-big:text-base text-xs'
const decorImageCls = 'w-full h-auto'

interface Props extends TClassName {
	setScreen: TState<EnScreens>
}

const TestPreview: FC<Props> = ({ className, setScreen }) => {
	const { screenWidth } = useScreen()
	const handleStart: MouseEventHandler = () => {
		setScreen(EnScreens.first)
	}

	return (
		<TestBlockWrapper
			withoutBeforeImageMobileBlock
			className={cn(wrapperCls, className)}
			afterContent={
				screenWidth < MD_MID ? (
					<UiGridElemWrapper
						className={cn(contentWrapperCls, 'mt-[var(--main-blocks-gap)]')}
					>
						<Image
							src='/images/Test/illustrations/preview.png'
							alt='Декорации'
							width={880}
							height={550}
							className={decorImageCls}
						/>
					</UiGridElemWrapper>
				) : null
			}
		>
			<div className={contentCls}>
				{screenWidth >= MD_MID ? (
					<Image
						src='/images/Test/illustrations/preview.png'
						alt='Декорации'
						width={880}
						height={550}
						className={imageCls}
					/>
				) : null}
				<UiTypography className={titleCls} font='Raleway-SB' tag='h1'>
					Найдите книгу
					<br />
					по своему настроению!
				</UiTypography>
				<UiTypography className={subtitleCls} font='Raleway-M' tag='h2'>
					Тест поможет подобрать книги на основе вашего настроения и интересов
				</UiTypography>
				<UiButton onClick={handleStart} className={btnCls}>
					Пройти тест
				</UiButton>
			</div>
		</TestBlockWrapper>
	)
}

export { TestPreview }

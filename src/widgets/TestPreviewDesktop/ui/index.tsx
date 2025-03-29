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
import { MD_LOW, MD_MID } from '@/shared/constants'
import { EnScreens } from '@/screens/Test/types/screens'

const wrapperCls = 'relative z-[0]'
const contentCls =
	'my-auto max-w-[330px]'
const titleCls = 'mt-35 text-2xl uppercase'
const subtitleCls = 'text-xl mt-4 mb-5 leading-[130%]'
const imageCls =
	'absolute lg-big:w-[880px] w-[700px] lg-big:h-[550px] h-[450px] right-8 -bottom-3 -z-[1]'
const btnCls = ''
interface Props extends TClassName {
	setScreen: TState<EnScreens>
}

const TestPreviewDesktop: FC<Props> = ({ className, setScreen }) => {
	const { screenWidth } = useScreen()
	const handleStart: MouseEventHandler = () => {
		setScreen(EnScreens.first)
	}


	return (
		<UiGridElemWrapper
			plaque='тест'
			className={cn(wrapperCls, className)}
		>
			<div className={contentCls}>
				{screenWidth >= MD_MID ? (
					<Image
						src='/images/Test/illustrations/preview.svg'
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
					Тест поможет подобрать книги{screenWidth >= MD_LOW ? <br /> : null}на основе вашего настроения и интересов
				</UiTypography>
				<UiButton onClick={handleStart} className={btnCls}>
					Пройти тест
				</UiButton>
			</div>
		</UiGridElemWrapper>
	)
}

export { TestPreviewDesktop }

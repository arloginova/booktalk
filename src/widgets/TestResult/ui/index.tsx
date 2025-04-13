'use client'
import { FC } from 'react'
import { TClassName, TState } from '@/shared/types'
import { cn } from '@/shared/lib'
import { EnScreens } from '@/screens/Test'
import { UiButton, UiGridElemWrapper, UiTypography } from '@/shared/ui'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import {
	firstSelector,
	fourthSelector,
	reset,
	secondSelector,
	thirdSelector,
} from '@/shared/store/testSlice'
import { returnRecommendedRequest } from '../lib/returnRecommendedRequest'
import { SliderBooks } from '@/widgets/SliderBooks'
import { useQuery } from '@tanstack/react-query'
import { useScreen } from '@/shared/hooks'
import { LG_BIG } from '@/shared/constants'

const wrapperCls = ''
const contentWrapperCls = ''
const infoCls = 'lg-big:min-w-[330px] min-w-[220px]'
const contentCls = 'flex items-start mt-35 mb-15 lg-big:gap-x-15 gap-x-12'

const titleCls = 'lg-big:text-2xl uppercase'
const subtitleCls = 'lg-big:text-xl text-sm mt-4 mb-5 leading-[130%]'
const btnCls = 'lg-big:text-base text-xs'
const sliderCls = 'grow overflow-hidden'

interface Props extends TClassName {
	setScreen: TState<EnScreens>
}

const TestResult: FC<Props> = ({ setScreen, className }) => {
	const dispatch = useAppDispatch()
	const first = useAppSelector(firstSelector)
	const second = useAppSelector(secondSelector)
	const third = useAppSelector(thirdSelector)
	const fourth = useAppSelector(fourthSelector)

	const request = returnRecommendedRequest({ first, second, third, fourth })
	const data = useQuery({
		queryKey: ['test', 'collections'],
		queryFn: request?.queryFn,
	})

	const handleReStart = () => {
		dispatch(reset())
		setScreen(EnScreens.first)
	}
	const { screenWidth } = useScreen()

	return (
		<div className={cn(wrapperCls, className)}>
			<UiGridElemWrapper
				plaque='результаты теста'
				className={contentWrapperCls}
			>
				<div className={contentCls}>
					<div className={infoCls}>
						<UiTypography className={titleCls} font='Raleway-M' tag='h1'>
							Ваши 7 Рекомендаций
						</UiTypography>
						<UiTypography className={subtitleCls} font='Raleway-M' tag='h2'>
							{request?.text || null}
						</UiTypography>
						<UiButton onClick={handleReStart} className={btnCls}>
							пройти заново
						</UiButton>
					</div>
					{screenWidth >= LG_BIG ? (
						<SliderBooks
							books={data.data}
							className={sliderCls}
							buttonsID={{
								next: 'fqiufdwiuqfdiuqwfiueqfieiufeiufei',
								prev: 'dweuqfrgorgourgurogr',
							}}
						/>
					) : null}
				</div>
			</UiGridElemWrapper>
			{screenWidth < LG_BIG ? (
				<UiGridElemWrapper
					plaque='результаты теста'
					className={cn(wrapperCls, 'mt-4')}
				>
					<SliderBooks
						books={data.data}
						className={cn(sliderCls, 'mt-35')}
						buttonsID={{
							next: 'jpijythiotrotie',
							prev: 'qddwuqydsuycuyd',
						}}
					/>
				</UiGridElemWrapper>
			) : null}
		</div>
	)
}

export { TestResult }

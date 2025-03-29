'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName, TState } from '@/shared/types'
import { EnScreens } from '@/screens/Test'
import { TestBlockWrapper } from '@/widgets/TestBlockWrapper'
import { cn } from '@/shared/lib'
import { UiButton, UiMessageCloud, UiPlaque, UiRadioGroup } from '@/shared/ui'
import { VARIANTS } from '../constants/variants'
import { useAppDispatch } from '@/shared/hooks/redux'
import { changeFourthValue, EnFourthVariants } from '@/shared/store/testSlice'

const wrapperCls = ''
const groupCls = 'mt-8 mb-22'
const itemCls = 'lg-low:text-xl text-sm'
const actionsCls = 'flex items-center justify-between'
const btnCls = 'lg-low:text-base text-xs px-5'
const prevBtnCls = ''
const nextBtnCls = ''
const plaqueCls = ''
const cloudCls = 'lg-low:text-xl text-sm mt-35'

interface Props extends TClassName {
	setScreen: TState<EnScreens>
}

const TestFourth: FC<Props> = ({ setScreen, className }) => {
	const dispatch = useAppDispatch()
	const handleNext: MouseEventHandler = () => {
		setScreen(EnScreens.result)
	}
	const handlePrev: MouseEventHandler = () => {
		setScreen(EnScreens.third)
	}

	return (
		<TestBlockWrapper
			className={cn(wrapperCls, className)}
			contentWrapperClassName='!h-auto'
		>
			<UiMessageCloud className={cloudCls}>
				что вам больше всего нравится в книгах?
			</UiMessageCloud>
			<UiRadioGroup
				radios={VARIANTS.map(value => ({ value }))}
				onChange={data => {
					dispatch(changeFourthValue(data as EnFourthVariants))
				}}
				className={groupCls}
				radioItemClassName={itemCls}
			/>
			<div className={actionsCls}>
				<UiButton className={cn(btnCls, prevBtnCls)} onClick={handlePrev}>
					Назад
				</UiButton>
				<UiPlaque font="Muller-M" className={plaqueCls}>Вопрос 4 из 4</UiPlaque>
				<UiButton className={cn(btnCls, nextBtnCls)} onClick={handleNext}>
					Результат
				</UiButton>
			</div>
		</TestBlockWrapper>
	)
}

export { TestFourth }

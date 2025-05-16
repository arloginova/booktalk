'use client'
import { useAppDispatch } from '@/shared/hooks/redux'
import { changeThirdValue, EnThirdVariants } from '@/shared/store/testSlice'
import { EnScreens } from '@/screens/Test'
import { TestBlockWrapper } from '@/widgets/TestBlockWrapper'
import { cn } from '@/shared/lib'
import { UiButton, UiMessageCloud, UiPlaque, UiRadioGroup } from '@/shared/ui'
import { VARIANTS } from '../constants/variants'

const wrapperCls = ''
const groupCls = 'mt-8 mb-22 h-[200px]'
const itemCls = 'lg-low:text-xl text-sm'
const actionsCls = 'flex items-center justify-between'
const btnCls = 'lg-low:text-base text-xs px-5'
const prevBtnCls = ''
const nextBtnCls = ''
const plaqueCls = ''
const cloudCls = 'lg-low:text-xl text-sm mt-35'

const TestThird = ({ setScreen, className }) => {
	const dispatch = useAppDispatch()
	const handleNext = () => {
		setScreen(EnScreens.fourth)
	}
	const handlePrev = () => {
		setScreen(EnScreens.second)
	}

	return (
		<TestBlockWrapper
			className={cn(wrapperCls, className)}
			contentWrapperClassName='!h-auto'
		>
			<UiMessageCloud className={cloudCls}>
				сколько времени вы готовы уделить чтению?
			</UiMessageCloud>
			<UiRadioGroup
				radios={VARIANTS.map(value => ({ value }))}
				onChange={data => {
					dispatch(changeThirdValue(data))
				}}
				className={groupCls}
				radioItemClassName={itemCls}
			/>
			<div className={actionsCls}>
				<UiButton className={cn(btnCls, prevBtnCls)} onClick={handlePrev}>
					Назад
				</UiButton>
				<UiPlaque font='Muller-M' className={plaqueCls}>
					Вопрос 3 из 4
				</UiPlaque>
				<UiButton className={cn(btnCls, nextBtnCls)} onClick={handleNext}>
					Вперед
				</UiButton>
			</div>
		</TestBlockWrapper>
	)
}

export { TestThird }
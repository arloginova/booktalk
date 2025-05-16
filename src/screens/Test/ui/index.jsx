'use client'
import { useState } from 'react'
import { cn } from '@/shared/lib'
import { TestPreview } from '@/widgets/TestPreview'
import { EnScreens } from '@/screens/Test'
import { TestFirst } from '@/widgets/TestFirst/ui'
import { TestFourth } from '@/widgets/TestFourth/ui'
import { TestThird } from '@/widgets/TestThird/ui'
import { TestSecond } from '@/widgets/TestSecond/ui'
import { TestResult } from '@/widgets/TestResult'
import { useScreen } from '@/shared/hooks'
import { LG_MID } from '@/shared/constants'
import { TestPreviewDesktop } from '@/widgets/TestPreviewDesktop'

const wrapperCls = 'my-[var(--main-blocks-gap)] grow flex'

const TestScreen = ({ className }) => {
	const [screen, setScreen] = useState(EnScreens.preview)
	const { screenWidth } = useScreen()

	return (
		<main className={cn(wrapperCls, className)}>
			{screen === EnScreens.preview ? (
				screenWidth >= LG_MID ?
					<TestPreviewDesktop setScreen={setScreen} className='w-full' /> :
					<TestPreview setScreen={setScreen} className='w-full' />
			) : null}
			{screen === EnScreens.first ? (
				<TestFirst setScreen={setScreen} className='w-full' />
			) : null}
			{screen === EnScreens.second ? (
				<TestSecond setScreen={setScreen} className='w-full' />
			) : null}
			{screen === EnScreens.third ? (
				<TestThird setScreen={setScreen} className='w-full' />
			) : null}
			{screen === EnScreens.fourth ? (
				<TestFourth setScreen={setScreen} className='w-full' />
			) : null}
			{screen === EnScreens.result ? (
				<TestResult setScreen={setScreen} className='w-full' />
			) : null}
		</main>
	)
}

export { TestScreen }
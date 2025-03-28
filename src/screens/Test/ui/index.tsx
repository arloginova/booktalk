'use client'
import { FC, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TestPreview } from '@/widgets/TestPreview'
import { EnScreens } from '../types/screens'
import { TestFirst } from '@/widgets/TestFirst/ui'
import { TestFourth } from '@/widgets/TestFourth/ui'
import { TestThird } from '@/widgets/TestThird/ui'
import { TestSecond } from '@/widgets/TestSecond/ui'
import { TestResult } from '@/widgets/TestResult'

const wrapperCls = 'my-[var(--main-blocks-gap)] grow flex'

interface Props extends TClassName { }

const TestScreen: FC<Props> = ({ className }) => {
	const [screen, setScreen] = useState<EnScreens>(EnScreens.preview)

	return (
		<main className={cn(wrapperCls, className)}>
			{screen === EnScreens.preview ? (
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

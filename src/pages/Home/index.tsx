import { FC } from 'react'
import { cn } from '@/shared/lib'
import { HomeHead } from '@/widgets/HomeHead'
import { HomeInformation } from '@/widgets/HomeInformation'
import { HomePossibilities } from '@/widgets/HomePossibilities'
import { HomeQuestions } from '@/widgets/HomeQuestions'
import { HomeCommunity } from '@/widgets/HomeCommunity'
import { Footer } from '@/widgets/Footer'
import cls from './index.module.scss'

interface Props {}
const HomePage: FC<Props> = ({}) => {
	return (
		<main className={cn(cls.home)}>
			<HomeHead wrapperClassName='modules-gap-bottom modules-gap-top' />
			<HomeInformation wrapperClassName='modules-gap-bottom' />
			<HomePossibilities wrapperClassName='modules-gap-bottom' />
			<HomeQuestions wrapperClassName='modules-gap-bottom' />
			<HomeCommunity wrapperClassName='modules-gap-bottom' />
			<Footer wrapperClassName='modules-gap-bottom' />
		</main>
	)
}

export { HomePage }

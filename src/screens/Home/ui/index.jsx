import { cn } from '@/shared/lib'
import { HomeArticles } from '@/widgets/HomeArticles'
import { HomeBooks } from '@/widgets/HomeBooks'
import { HomeHero } from '@/widgets/HomeHero'
import { HomeReviews } from '@/widgets/HomeReviews'
import React from 'react'

const wrapperCls = ''

const HomeScreen = ({ className }) => {
	return (
		<main className={cn(wrapperCls, className)}>
			<HomeHero className='my-[var(--main-blocks-gap)]' />
			<HomeBooks className='my-[var(--main-blocks-gap)]' />
			<HomeReviews className='my-[var(--main-blocks-gap)]' />
			<HomeArticles className='my-[var(--main-blocks-gap)]' />
		</main>
	)
}

export { HomeScreen }
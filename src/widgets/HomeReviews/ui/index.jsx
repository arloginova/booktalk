'use client'
import { useQuery } from '@tanstack/react-query'
import { cn } from '@/shared/lib'
import { UiGridElemWrapper } from '@/shared/ui'
import { SliderReviews } from '@/widgets/SliderReviews'
import { reviewsCollections } from '@/shared/api/reviewsCollections'
import { EnRoutes } from '@/shared/constants'

const wrapperCls = ''

const HomeReviews = ({ className }) => {
	const reviews = useQuery({
		queryKey: ['home', 'reviews'],
		queryFn: reviewsCollections,
	})

	return (
		<UiGridElemWrapper
			Tag='section'
			className={cn(wrapperCls, className)}
			plaque='Рецензии'
		>
			<SliderReviews
				buttonsID={{
					next: 'cvytyqtydvfdqvyfvefte',
					prev: 'vfuyhbiviuewiufewuifewiu',
				}}
				withMarginTop
				title='Обзоры на книги'
				reviews={reviews.data}
				headLink={{
					href: EnRoutes.reviews,
				}}
			/>
		</UiGridElemWrapper>
	)
}

export { HomeReviews }
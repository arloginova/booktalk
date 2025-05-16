'use client'
import { useQuery } from '@tanstack/react-query'
import {
	fantasyReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const Popular = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: fantasyReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'dcdcnweceoiwfioewfaac',
				prev: 'sadsadsdsaudwuidwqiufewf',
			}}
			title={fantasyReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popularBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					fantasyReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }
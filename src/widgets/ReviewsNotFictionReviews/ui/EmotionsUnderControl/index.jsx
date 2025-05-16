'use client'
import { useQuery } from '@tanstack/react-query'
import {
	notFictionReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const EmotionsUnderControl = ({ className }) => {
	const emotionsUnderControlBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.emotionsUnderControl],
		queryFn:
		notFictionReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl]
			.queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiuegiuruhgruhgrr',
				prev: 'htotkhktohktkhtokht',
			}}
			title={
				notFictionReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl]
					.title
			}
			reviews={emotionsUnderControlBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					notFictionReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl]
						.href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { EmotionsUnderControl }
'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const EmotionsUnderControl = ({ className }) => {
	const emotionsUnderControlBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.emotionsUnderControl],
		queryFn:
		allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'dggtyweftetfeefe',
				prev: 'kopoujkuooukuokukomnukom',
			}}
			title={
				allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].title
			}
			books={emotionsUnderControlBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { EmotionsUnderControl }
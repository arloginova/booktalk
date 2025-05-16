'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	romanticReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

const ModernRomance = ({ className }) => {
	const modernRomance = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.modernRomance],
		queryFn:
		romanticReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiuewiugfewudcds',
				prev: 'duhdiuidiudcxcxvfvffgf',
			}}
			title={romanticReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].title}
			reviews={modernRomance.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					romanticReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { ModernRomance }
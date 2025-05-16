'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	fantasyReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

const Mistic = ({ className }) => {
	const mistic = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.mistic],
		queryFn: fantasyReviewsRoutes[EnAllReviewsRoutesKeys.mistic].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiudsxzclcsmowowd',
				prev: 'sdfdfdsfvffgf',
			}}
			title={fantasyReviewsRoutes[EnAllReviewsRoutesKeys.mistic].title}
			reviews={mistic.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					fantasyReviewsRoutes[EnAllReviewsRoutesKeys.mistic].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Mistic }
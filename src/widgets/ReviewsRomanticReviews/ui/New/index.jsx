'use client'
import { useQuery } from '@tanstack/react-query'
import {
	romanticReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const New = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.new],
		queryFn: romanticReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'grfgijrgijrjigr',
				prev: 'zxcxzczxcxcxcxczxxxxxxxxx',
			}}
			title={romanticReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			reviews={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					romanticReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }
'use client'
import { useQuery } from '@tanstack/react-query'
import {
	detectivesReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const New = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.new],
		queryFn: detectivesReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'dsasasasasasasasasasasasasads',
				prev: 'saygudusygaduygsagduywqgduywquygdwq',
			}}
			title={detectivesReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			reviews={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					detectivesReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }
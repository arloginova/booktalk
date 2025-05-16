'use client'
import { useQuery } from '@tanstack/react-query'
import {
	fantasyReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const New = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.new],
		queryFn: fantasyReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiufokkofokf',
				prev: 'zxcxzcdciewqidewdieqqewqwq',
			}}
			title={fantasyReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			reviews={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					fantasyReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }
'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

const NotFiction = ({ className }) => {
	const notFiction = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys['all-not-fiction']],
		queryFn:
		allReviewsRoutes[EnAllReviewsRoutesKeys['all-not-fiction']].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'tdftfetrtrtetretretretr',
				prev: 'dijcijdsvfoidoivjfoirew',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys['all-not-fiction']].title}
			reviews={notFiction.data}
			className={className}
			redirectOverrideType={
				allReviewsRoutes[EnAllReviewsRoutesKeys['all-not-fiction']].href
			}
			headLink={{
				href: `${EnRoutes.reviews}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys['all-not-fiction']].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { NotFiction }
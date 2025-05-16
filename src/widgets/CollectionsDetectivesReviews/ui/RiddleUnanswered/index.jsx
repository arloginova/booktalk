'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const RiddleUnanswered = ({ className }) => {
	const riddleUnanswered = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.riddleUnanswered],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'vjdsfviuwiguwrrfei',
				prev: 'nmiurfwyeqfyudvcubv',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].title}
			books={riddleUnanswered.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { RiddleUnanswered }
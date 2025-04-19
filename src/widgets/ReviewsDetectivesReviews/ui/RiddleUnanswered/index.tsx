'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	detectivesReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const RiddleUnanswered: FC<Props> = ({ className }) => {
	const riddleUnanswered = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.riddleUnanswered],
		queryFn:
			detectivesReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'idddddddddfjidfijdijfde',
				prev: 'azssssfardwfwdfwqdrwrqfd',
			}}
			title={
				detectivesReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].title
			}
			reviews={riddleUnanswered.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					detectivesReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { RiddleUnanswered }

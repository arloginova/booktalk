'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	notFictionReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const EmotionsUnderControl: FC<Props> = ({ className }) => {
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

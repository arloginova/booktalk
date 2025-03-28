'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName { }

const EmotionsUnderControl: FC<Props> = ({ className }) => {
	const emotionsUnderControlBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.emotionsUnderControl],
		queryFn:
			allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].queryFn,
	})

	return (
		<SliderReviews
			title={
				allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].title
			}
			reviews={emotionsUnderControlBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.emotionsUnderControl].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { EmotionsUnderControl }

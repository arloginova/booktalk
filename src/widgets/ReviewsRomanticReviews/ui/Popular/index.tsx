'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	romanticReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const Popular: FC<Props> = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiuewiugfewuhfewfewuhfewfwe',
				prev: 'zxcxzczxcxcxcxvfvffgf',
			}}
			title={romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popularBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }

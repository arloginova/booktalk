'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	romanticReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const ForbiddenLove: FC<Props> = ({ className }) => {
	const forbiddenLove = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.forbiddenLove],
		queryFn:
			romanticReviewsRoutes[EnAllReviewsRoutesKeys.forbiddenLove].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'vsuduuhdvddvewfewuhfewfwe',
				prev: 'iiiicxvfvffgf',
			}}
			title={romanticReviewsRoutes[EnAllReviewsRoutesKeys.forbiddenLove].title}
			reviews={forbiddenLove.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					romanticReviewsRoutes[EnAllReviewsRoutesKeys.forbiddenLove]?.href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { ForbiddenLove }

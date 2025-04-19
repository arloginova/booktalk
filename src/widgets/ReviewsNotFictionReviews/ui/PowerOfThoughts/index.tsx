'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	notFictionReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const PowerOfThoughts: FC<Props> = ({ className }) => {
	const powerOfThoughts = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.powerOfThoughts],
		queryFn:
			notFictionReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'opgogogogewuhfewfewuhfewfwe',
				prev: 'cvudueueoxcxcxvfvffgf',
			}}
			title={
				notFictionReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].title
			}
			reviews={powerOfThoughts.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					notFictionReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { PowerOfThoughts }

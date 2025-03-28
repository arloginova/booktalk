'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName { }

const UnforgettableGoosebumps: FC<Props> = ({ className }) => {
	const unforgettableGoosebumpsBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.unforgettableGoosebumps],
		queryFn:
			allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].queryFn,
	})

	return (
		<SliderReviews
			title={
				allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].title
			}
			reviews={unforgettableGoosebumpsBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { UnforgettableGoosebumps }

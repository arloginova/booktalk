'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import {
	horrorsReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

const UnforgettableGoosebumps = ({ className }) => {
	const unforgettableGoosebumpsBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.unforgettableGoosebumps],
		queryFn:
		horrorsReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps]
			.queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgirugurghurguhrg',
				prev: 'gijiidnjcdscnjcewie',
			}}
			title={
				horrorsReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps]
					.title
			}
			reviews={unforgettableGoosebumpsBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					horrorsReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps]
						.href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { UnforgettableGoosebumps }
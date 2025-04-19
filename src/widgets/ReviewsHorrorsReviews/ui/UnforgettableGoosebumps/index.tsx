'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	horrorsReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const UnforgettableGoosebumps: FC<Props> = ({ className }) => {
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

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName { }

const Mistic: FC<Props> = ({ className }) => {
	const mistic = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.mistic],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].title}
			reviews={mistic.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Mistic }

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

const ModernRomance: FC<Props> = ({ className }) => {
	const modernRomance = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.modernRomance],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].queryFn,
	})
	console.log(allReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].href)

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].title}
			reviews={modernRomance.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${allReviewsRoutes[EnAllReviewsRoutesKeys.modernRomance].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { ModernRomance }

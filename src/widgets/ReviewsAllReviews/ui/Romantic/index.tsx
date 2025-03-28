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

const Romantic: FC<Props> = ({ className }) => {
	const romantic = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys['all-romantic']],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys['all-romantic']].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys['all-romantic']].title}
			reviews={romantic.data}
			className={className}
			redirectOverrideType={allReviewsRoutes[EnAllReviewsRoutesKeys['all-romantic']].href}
			headLink={{
				href: `${EnRoutes.reviews}/${allReviewsRoutes[EnAllReviewsRoutesKeys['all-romantic']].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Romantic }

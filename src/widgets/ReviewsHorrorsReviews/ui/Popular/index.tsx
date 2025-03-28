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

const Popular: FC<Props> = ({ className }) => {
	const popular = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popular.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }

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

const New: FC<Props> = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys['all-new']],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys['all-new']].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys['all-new']].title}
			reviews={newBooks.data}
			className={className}
			redirectOverrideType={allReviewsRoutes[EnAllReviewsRoutesKeys['all-new']].href}
			headLink={{
				href: `${EnRoutes.reviews}/${allReviewsRoutes[EnAllReviewsRoutesKeys['all-new']].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }

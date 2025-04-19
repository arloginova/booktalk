'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	horrorsReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const New: FC<Props> = ({ className }) => {
	const news = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.new],
		queryFn: horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'ugeuigeivbuernv',
				prev: 'rnvnfdnvfdsiuvcdsciniwc',
			}}
			title={horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			reviews={news.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }

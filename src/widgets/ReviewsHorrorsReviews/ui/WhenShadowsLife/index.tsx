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

interface Props extends TClassName {}

const WhenShadowsLife: FC<Props> = ({ className }) => {
	const whenShadowsLifeBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.whenShadowsLife],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgvbiuerjebiure',
				prev: 'chbdsbhcvbyvyrbyrf',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].title}
			reviews={whenShadowsLifeBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { WhenShadowsLife }

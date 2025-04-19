'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	fantasyReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const HeroWay: FC<Props> = ({ className }) => {
	const heroWay = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.heroWay],
		queryFn: fantasyReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'asuydsauygdsaguydgsadsuyag',
				prev: 'uuuuuuuhfueiufefiue',
			}}
			title={fantasyReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].title}
			reviews={heroWay.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					fantasyReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { HeroWay }

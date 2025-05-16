'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	fantasyReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

const HeroWay = ({ className }) => {
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
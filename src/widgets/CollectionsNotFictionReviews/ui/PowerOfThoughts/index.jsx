'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const PowerOfThoughts = ({ className }) => {
	const powerOfThoughts = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.powerOfThoughts],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'rerreytscvcbvncbfm',
				prev: 'jnfbnjgbjngbgjngbnj',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].title}
			books={powerOfThoughts.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { PowerOfThoughts }
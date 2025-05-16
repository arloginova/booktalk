'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const Popular = ({ className }) => {
	const popular = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.popular],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'nujriurtbtoiboijeoigrijg',
				prev: 'mnhgnnjxvgzaucxvagc',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			books={popular.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }
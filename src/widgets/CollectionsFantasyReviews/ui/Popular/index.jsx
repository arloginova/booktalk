'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const Popular = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.popular],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'qtyvcnvbijtepx',
				prev: 'goiueogvrwoifvfwoifvroiw',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			books={popularBooks.data}
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
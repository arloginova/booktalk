'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const New = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.new],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'iugfiugfhguhguihgiuhgiu',
				prev: 'nfbfgjhbfgguj',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			books={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }
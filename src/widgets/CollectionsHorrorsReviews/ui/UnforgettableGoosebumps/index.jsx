'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const UnforgettableGoosebumps = ({ className }) => {
	const unforgettableGoosebumpsBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.unforgettableGoosebumps],
		queryFn:
		allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'ftewtewfdewydcevcyt',
				prev: 'ubuthbuhvtebvieiurhiurebiue',
			}}
			title={
				allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].title
			}
			books={unforgettableGoosebumpsBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.unforgettableGoosebumps].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { UnforgettableGoosebumps }
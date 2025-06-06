'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const WhenShadowsLife = ({ className }) => {
	const whenShadowsLifeBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.whenShadowsLife],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'fdwytefytewytfewytfewytf',
				prev: 'ujijyoirinbroirtbrtoi',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].title}
			books={whenShadowsLifeBooks.data}
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
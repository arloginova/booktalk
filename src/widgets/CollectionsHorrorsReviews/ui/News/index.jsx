'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const New = ({ className }) => {
	const news = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.new],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'bdnfjdbjfdbnfjdb',
				prev: 'cvsgdcvqgdcwqvdwqvqwdqwdq',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			books={news.data}
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
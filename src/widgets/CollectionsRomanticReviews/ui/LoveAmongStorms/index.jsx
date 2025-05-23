'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const LoveAmongStorms = ({ className }) => {
	const loveAmongStorms = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.loveAmongStorms],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.loveAmongStorms].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'wdcytcdyucuyvuyuyvr',
				prev: 'rtwqrtdwq',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.loveAmongStorms].title}
			books={loveAmongStorms.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.loveAmongStorms].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { LoveAmongStorms }
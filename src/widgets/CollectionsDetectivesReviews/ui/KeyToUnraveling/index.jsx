'use client'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

const KeyToUnraveling = ({ className }) => {
	const keyToUnraveling = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.keyToUnraveling],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'vicsudiuewfivuewfuewfhiuew',
				prev: 'bgedrfvwncnbznxcnc',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].title}
			books={keyToUnraveling.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { KeyToUnraveling }
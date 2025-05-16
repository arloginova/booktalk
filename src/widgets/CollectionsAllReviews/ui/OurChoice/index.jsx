'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['collections', 'our choice'],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.choice].queryFn,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'sdaadsadsadsdsaqwqwwqwdqwqwqwwq',
				prev: 'opiuyrtfkjgtrtrfgfdfgb',
			}}
			title={'детективы'}
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }
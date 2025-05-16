'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { allReviewsRoutes } from '../../constants/routes'

const OurChoice = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['articles', 'our choice'],
		queryFn: allReviewsRoutes['our-choice'].queryFn,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'pfffffffffofewofdew',
				prev: 'qwrwfujujujujujujujujujujujofg',
			}}
			title={allReviewsRoutes['our-choice'].title}
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }
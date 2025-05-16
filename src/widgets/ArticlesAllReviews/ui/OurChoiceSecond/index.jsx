'use client'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { allReviewsRoutes } from '../../constants/routes'

const OurChoiceSecond = ({ className }) => {
	const ourChoiceSecond = useQuery({
		queryKey: ['articles', 'our choice second'],
		queryFn: allReviewsRoutes['our-choice-second'].queryFn,
	})

	return (
		<SliderOurChoice
			buttonsID={{
				next: 'pfffffffffofewofdew',
				prev: 'qwrwfujujujujujujujujujujujofg',
			}}
			title={allReviewsRoutes['our-choice-second'].title}
			books={ourChoiceSecond.data}
			className={className}
		/>
	)
}

export { OurChoiceSecond }
'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { allReviewsRoutes } from '../../constants/routes'
import { TBookItem } from '@/shared/types/Book'

interface Props extends TClassName {}

const OurChoiceSecond: FC<Props> = ({ className }) => {
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
			books={ourChoiceSecond.data as unknown as TBookItem[]}
			className={className}
		/>
	)
}

export { OurChoiceSecond }

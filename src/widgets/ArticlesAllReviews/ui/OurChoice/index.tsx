'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { allReviewsRoutes } from '../../constants/routes'
import { TBookItem } from '@/shared/types/Book'

interface Props extends TClassName {}

const OurChoice: FC<Props> = ({ className }) => {
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
			books={ourChoice.data as unknown as TBookItem[]}
			className={className}
		/>
	)
}

export { OurChoice }

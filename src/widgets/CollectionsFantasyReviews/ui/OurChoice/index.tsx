'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { SliderOurChoice } from '@/widgets/SliderOurChoice'
import { allReviewsRoutes, EnAllReviewsRoutesKeys } from '../../constants/routes'

interface Props extends TClassName { }

const OurChoice: FC<Props> = ({ className }) => {
	const ourChoice = useQuery({
		queryKey: ['collections', 'our choice'],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.choice].queryFn,
	})

	return (
		<SliderOurChoice
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.choice].title}
			books={ourChoice.data}
			className={className}
		/>
	)
}

export { OurChoice }

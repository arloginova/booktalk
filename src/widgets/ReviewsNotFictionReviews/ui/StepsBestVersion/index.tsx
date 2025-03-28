'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName { }

const StepsBestVersion: FC<Props> = ({ className }) => {
	const stepsBestVersionBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.stepsBestVersion],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].title}
			reviews={stepsBestVersionBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { StepsBestVersion }

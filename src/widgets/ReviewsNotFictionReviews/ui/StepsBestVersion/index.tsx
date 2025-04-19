'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import {
	notFictionReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const StepsBestVersion: FC<Props> = ({ className }) => {
	const stepsBestVersionBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.stepsBestVersion],
		queryFn:
			notFictionReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiuewiugijijrijgrjirg',
				prev: 'zxcxzczxcwyyyyyyy',
			}}
			title={
				notFictionReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].title
			}
			reviews={stepsBestVersionBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					notFictionReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { StepsBestVersion }

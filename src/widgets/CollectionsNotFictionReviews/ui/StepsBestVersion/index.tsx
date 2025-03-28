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

interface Props extends TClassName {}

const StepsBestVersion: FC<Props> = ({ className }) => {
	const stepsBestVersionBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.stepsBestVersion],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].title}
			books={stepsBestVersionBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { StepsBestVersion }

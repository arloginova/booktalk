'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderBooks } from '@/widgets/SliderBooks'

interface Props extends TClassName {}

const RiddleUnanswered: FC<Props> = ({ className }) => {
	const riddleUnanswered = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.riddleUnanswered],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].title}
			books={riddleUnanswered.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.riddleUnanswered].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { RiddleUnanswered }

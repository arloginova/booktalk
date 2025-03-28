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

const PowerOfThoughts: FC<Props> = ({ className }) => {
	const powerOfThoughts = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.powerOfThoughts],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].title}
			books={powerOfThoughts.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.powerOfThoughts].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { PowerOfThoughts }

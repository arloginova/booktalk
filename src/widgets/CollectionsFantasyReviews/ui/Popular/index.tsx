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

const Popular: FC<Props> = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.popular],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			books={popularBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }

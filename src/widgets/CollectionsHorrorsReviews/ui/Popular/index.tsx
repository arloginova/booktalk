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

const Popular: FC<Props> = ({ className }) => {
	const popular = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.popular],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'nujriurtbtoiboijeoigrijg',
				prev: 'mnhgnnjxvgzaucxvagc',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			books={popular.data}
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

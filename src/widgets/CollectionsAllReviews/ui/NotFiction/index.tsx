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

const NotFiction: FC<Props> = ({ className }) => {
	const notFiction = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.notFiction],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.notFiction].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'udwfuewghrghirgrihrihgrihgr',
				prev: 'dcbsfcdvrgourgurogr',
			}}
			title='ужасы'
			books={notFiction.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.notFiction].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { NotFiction }

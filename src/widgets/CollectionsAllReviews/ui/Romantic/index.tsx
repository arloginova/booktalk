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

interface Props extends TClassName { }

const Romantic: FC<Props> = ({ className }) => {
	const romantic = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.romantic],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.romantic].queryFn,
	})

	return (
		<SliderBooks
			title='атмосферные'
			books={romantic.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.romantic].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Romantic }

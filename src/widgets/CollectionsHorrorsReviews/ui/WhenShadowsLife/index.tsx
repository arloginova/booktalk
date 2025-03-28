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

const WhenShadowsLife: FC<Props> = ({ className }) => {
	const whenShadowsLifeBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.whenShadowsLife],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].title}
			books={whenShadowsLifeBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.whenShadowsLife].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { WhenShadowsLife }

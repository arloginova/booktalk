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

const New: FC<Props> = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.new],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'fqiufcdsijocvdoiuwvw',
				prev: 'nhkknhkoyhokykoykojyokj',
			}}
			title='новинки'
			books={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }

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

const KeyToUnraveling: FC<Props> = ({ className }) => {
	const keyToUnraveling = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.keyToUnraveling],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].queryFn,
	})

	return (
		<SliderBooks
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].title}
			books={keyToUnraveling.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { KeyToUnraveling }

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName { }

const KeyToUnraveling: FC<Props> = ({ className }) => {
	const keyToUnraveling = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.keyToUnraveling],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].queryFn,
	})

	return (
		<SliderReviews
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].title}
			reviews={keyToUnraveling.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${allReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].href
					}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { KeyToUnraveling }

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { EnRoutes } from '@/shared/constants'
import {
	detectivesReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { SliderReviews } from '@/widgets/SliderReviews'

interface Props extends TClassName {}

const KeyToUnraveling: FC<Props> = ({ className }) => {
	const keyToUnraveling = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.keyToUnraveling],
		queryFn:
			detectivesReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].queryFn,
	})

	return (
		<SliderReviews
			buttonsID={{
				next: 'cdsaybdsydwqydwqydywydiuwq',
				prev: 'ofofdgifdoigfdoigfdiogfio',
			}}
			title={
				detectivesReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].title
			}
			reviews={keyToUnraveling.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					detectivesReviewsRoutes[EnAllReviewsRoutesKeys.keyToUnraveling].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { KeyToUnraveling }

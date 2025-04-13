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

const Mistic: FC<Props> = ({ className }) => {
	const mistic = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.mistic],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'vdiueyrgiuwcvnbxsnbziuewq',
				prev: 'npotgpoifgidojfvoerfw',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].title}
			books={mistic.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.mistic].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Mistic }

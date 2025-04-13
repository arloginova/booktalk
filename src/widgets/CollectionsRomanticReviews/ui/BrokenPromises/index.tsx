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

const BrokenPromises: FC<Props> = ({ className }) => {
	const brokenPromises = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.brokenPromises],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.brokenPromises].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'ugwfuewfuygewfguyewuyf',
				prev: 'fewuqgtetwfteufyegfueygu',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.brokenPromises].title}
			books={brokenPromises.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.brokenPromises].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { BrokenPromises }

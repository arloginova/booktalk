'use client'
import { useQuery } from '@tanstack/react-query'
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'
import { SliderBooks } from '@/widgets/SliderBooks'

const StepsBestVersion = ({ className }) => {
	const stepsBestVersionBooks = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.stepsBestVersion],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].queryFn,
	})

	return (
		<SliderBooks
			buttonsID={{
				next: 'hottohtihotihtoihtihtoht',
				prev: 'qwtyytwqwqetywtewtewtyewt',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].title}
			books={stepsBestVersionBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.stepsBestVersion].href
				}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { StepsBestVersion }
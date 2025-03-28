import { ReactNode } from 'react'
import { EnCurrentTab } from '../types/tabs'
import { ReviewsAllReviews } from '@/widgets/ReviewsAllReviews/ui'
import { ReviewsDetectivesReviews } from '@/widgets/ReviewsDetectivesReviews'
import { ReviewsHorrorsReviews } from '@/widgets/ReviewsHorrorsReviews'
import { ReviewsNotFictionReviews } from '@/widgets/ReviewsNotFictionReviews'
import { ReviewsRomanticReviews } from '@/widgets/ReviewsRomanticReviews'

export const returnComponent = (genre?: EnCurrentTab): ReactNode => {
	let component: ReactNode = null
	switch (genre) {
		case undefined:
			component = <ReviewsAllReviews />
			break
		case EnCurrentTab.detectives:
			component = <ReviewsDetectivesReviews />
			break
		case EnCurrentTab.fantasy:
			component = <ReviewsNotFictionReviews />
			break
		case EnCurrentTab.horrors:
			component = <ReviewsHorrorsReviews />
			break
		case EnCurrentTab.notFiction:
			component = <ReviewsNotFictionReviews />
			break
		case EnCurrentTab.romantic:
			component = <ReviewsRomanticReviews />
			break
	}


	return component
}

import { ReviewsAllReviews } from '@/widgets/ReviewsAllReviews/ui'
import { ReviewsDetectivesReviews } from '@/widgets/ReviewsDetectivesReviews'
import { ReviewsHorrorsReviews } from '@/widgets/ReviewsHorrorsReviews'
import { ReviewsNotFictionReviews } from '@/widgets/ReviewsNotFictionReviews'
import { ReviewsRomanticReviews } from '@/widgets/ReviewsRomanticReviews'
import { ReviewsFantasyReviews } from '@/widgets/ReviewsFantasyReviews'

export const returnComponent = (genre) => {
	let component = null
	switch (genre) {
		case undefined:
			component = <ReviewsAllReviews />
			break
		case 'detectives':
			component = <ReviewsDetectivesReviews />
			break
		case 'fantasy':
			component = <ReviewsFantasyReviews />
			break
		case 'horrors':
			component = <ReviewsHorrorsReviews />
			break
		case 'notFiction':
			component = <ReviewsNotFictionReviews />
			break
		case 'romantic':
			component = <ReviewsRomanticReviews />
			break
	}

	return component
}
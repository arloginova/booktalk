import { ReviewsAllReviews } from '@/widgets/ReviewsAllReviews/ui'
import { ReviewsDetectivesReviews } from '@/widgets/ReviewsDetectivesReviews'
import { ReviewsHorrorsReviews } from '@/widgets/ReviewsHorrorsReviews'
import { ReviewsNotFictionReviews } from '@/widgets/ReviewsNotFictionReviews'
import { ReviewsRomanticReviews } from '@/widgets/ReviewsRomanticReviews'
import { ReviewsFantasyReviews } from '@/widgets/ReviewsFantasyReviews'
import {EnCurrentTab} from "@/screens/Reviews/types/tabs";

export const returnComponent = (genre) => {
	let component = null
	switch (genre) {
		case undefined:
			component = <ReviewsAllReviews />
			break
		case EnCurrentTab.detectives:
			component = <ReviewsDetectivesReviews />
			break
		case EnCurrentTab.fantasy:
			component = <ReviewsFantasyReviews />
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
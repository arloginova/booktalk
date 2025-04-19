import { reviewsAllReviews } from '@/widgets/ReviewsAllReviews'
import { detectivesReviewsRoutes } from '@/widgets/ReviewsDetectivesReviews/constants/routes'
import { fantasyReviewsRoutes } from '@/widgets/ReviewsFantasyReviews'
import { horrorsReviewsRoutes } from '@/widgets/ReviewsHorrorsReviews'
import { notFictionReviewsRoutes } from '@/widgets/ReviewsNotFictionReviews'
import { romanticReviewsRoutes } from '@/widgets/ReviewsRomanticReviews/constants/routes'

const reviewsRoutes = {
	...reviewsAllReviews,
	...romanticReviewsRoutes,
	...detectivesReviewsRoutes,
	...notFictionReviewsRoutes,
	...horrorsReviewsRoutes,
	...fantasyReviewsRoutes,
}
export { reviewsRoutes }

import { collectionsAllReviews } from '@/widgets/CollectionsAllReviews'
import { collectionsFantasyReviews } from '@/widgets/CollectionsFantasyReviews'
import { collectionsHorrorsReviews } from '@/widgets/CollectionsHorrorsReviews'
import { collectionsRomanticReviews } from '@/widgets/CollectionsRomanticReviews'
import { collectionsNotFictionReviews } from '@/widgets/CollectionsNotFictionReviews'
import { collectionsDetectivesReviews } from '@/widgets/CollectionsDetectivesReviews'

const reviewsRoutes = {
	...collectionsAllReviews,
	...collectionsFantasyReviews,
	...collectionsHorrorsReviews,
	...collectionsRomanticReviews,
	...collectionsNotFictionReviews,
	...collectionsDetectivesReviews,
}
export { reviewsRoutes }

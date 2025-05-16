import { collectionsAllReviews } from '@/widgets/CollectionsAllReviews'
import { collectionsFantasyReviews } from '@/widgets/CollectionsFantasyReviews'
import { collectionsHorrorsReviews } from '@/widgets/CollectionsHorrorsReviews'
import { collectionsRomanticReviews } from '@/widgets/CollectionsRomanticReviews'
import { collectionsNotFictionReviews } from '@/widgets/CollectionsNotFictionReviews'
import { collectionsDetectivesReviews } from '@/widgets/CollectionsDetectivesReviews'
import { ourChoiceArticlesBooks } from '@/widgets/ArticlesAllReviews/constants/our-choice-articles-books-routes'

const reviewsRoutes = {
	...collectionsAllReviews,
	...collectionsFantasyReviews,
	...collectionsHorrorsReviews,
	...collectionsRomanticReviews,
	...collectionsNotFictionReviews,
	...collectionsDetectivesReviews,
	...ourChoiceArticlesBooks,
}
export { reviewsRoutes }

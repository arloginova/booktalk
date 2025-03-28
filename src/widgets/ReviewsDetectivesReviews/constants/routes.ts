import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	detectivesKeToUnravelingBooks,
	detectivesNewsBooks,
	detectivesPopularBooks,
	detectivesRiddleUnansweredBooks,
} from '@/shared/api/detectivesBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	keyToUnraveling = EnBookTypes['detectives-key-to-unraveling'],
	riddleUnanswered = EnBookTypes['detectives-riddle-unanswered'],
	popular = EnBookTypes['detectives-popular'],
	new = EnBookTypes['detectives-new'],
}

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnBookTypes['detectives-new'],
		title: 'новинки',
		queryFn: detectivesNewsBooks,
	},
	[EnAllReviewsRoutesKeys.keyToUnraveling]: {
		href: EnBookTypes['detectives-key-to-unraveling'],
		title: 'Ключ к выходу',
		queryFn: detectivesKeToUnravelingBooks,
	},
	[EnAllReviewsRoutesKeys.popular]: {
		href: EnBookTypes['detectives-popular'],
		title: 'популярные',
		queryFn: detectivesPopularBooks,
	},
	[EnAllReviewsRoutesKeys.riddleUnanswered]: {
		href: EnBookTypes['detectives-riddle-unanswered'],
		title: 'Загадки без ответа',
		queryFn: detectivesRiddleUnansweredBooks,
	},
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

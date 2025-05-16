import { EnBookTypes } from '@/shared/api/booksCollections';
import {
	detectivesKeToUnravelingBooks,
	detectivesNewsBooks,
	detectivesOurChoiceBooks,
	detectivesPopularBooks,
	detectivesRiddleUnansweredBooks,
} from '@/shared/api/detectivesBooks';

const EnAllReviewsRoutesKeys = {
	keyToUnraveling: EnBookTypes['detectives-key-to-unraveling'],
	riddleUnanswered: EnBookTypes['detectives-riddle-unanswered'],
	popular: EnBookTypes['detectives-popular'],
	new: EnBookTypes['detectives-new'],
	choice: EnBookTypes['detectives-choice'],
};

const detectivesReviewsRoutes = {
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
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['detectives-choice'],
		title: 'Загадки без ответа',
		queryFn: detectivesOurChoiceBooks,
	},
};

export { detectivesReviewsRoutes, EnAllReviewsRoutesKeys };
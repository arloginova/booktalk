import { EnBookTypes } from '@/shared/api/booksCollections';
import {
	EnReviewsTypes,
	reviewsRomanticForbiddenBooks,
	reviewsRomanticModernRomanceBooks,
	reviewsRomanticNewsBooks,
	reviewsRomanticPopularBooks,
} from '@/shared/api/reviewsList';
import { romanticOurChoiceBooks } from '@/shared/api/romanticBooks';

const EnAllReviewsRoutesKeys = {
	forbiddenLove: EnReviewsTypes['romantic-forbidden-love'],
	modernRomance: EnReviewsTypes['romantic-modern-romance'],
	popular: EnReviewsTypes['romantic-popular'],
	new: EnReviewsTypes['romantic-new'],
	choice: EnBookTypes['romantic-choice'],
};

const romanticReviewsRoutes = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnReviewsTypes['romantic-new'],
		title: 'новинки',
		queryFn: reviewsRomanticNewsBooks,
	},
	[EnAllReviewsRoutesKeys.forbiddenLove]: {
		href: EnReviewsTypes['romantic-forbidden-love'],
		title: 'Запретная любовь',
		queryFn: reviewsRomanticForbiddenBooks,
	},
	[EnAllReviewsRoutesKeys.popular]: {
		href: EnReviewsTypes['romantic-popular'],
		title: 'популярные',
		queryFn: reviewsRomanticPopularBooks,
	},
	[EnAllReviewsRoutesKeys.modernRomance]: {
		href: EnReviewsTypes['romantic-modern-romance'],
		title: 'Разрушенные обещания',
		queryFn: reviewsRomanticModernRomanceBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['romantic-choice'],
		title: 'Загадки без ответа',
		queryFn: romanticOurChoiceBooks,
	},
};

export { romanticReviewsRoutes, EnAllReviewsRoutesKeys };
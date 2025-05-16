import { EnBookTypes } from '@/shared/api/booksCollections';
import {
	notFictionEmotionsUnderControlBooks,
	notFictionOurChoiceBooks,
	notFictionPowerOfThoughtsBooks,
	notFictionStepsBestVersionBooks,
} from '@/shared/api/notFictionBooks';

const EnAllReviewsRoutesKeys = {
	stepsBestVersion: EnBookTypes['not-fiction-steps-best-version'],
	powerOfThoughts: EnBookTypes['not-fiction-power-of-thoughts'],
	emotionsUnderControl: EnBookTypes['not-fiction-emotions-under-control'],
	choice: EnBookTypes['not-fiction-choice'],
};

const allReviewsRoutes = {
	[EnAllReviewsRoutesKeys.stepsBestVersion]: {
		href: EnBookTypes['not-fiction-steps-best-version'],
		title: 'Шаги к лучшей версии себя',
		queryFn: notFictionStepsBestVersionBooks,
	},
	[EnAllReviewsRoutesKeys.emotionsUnderControl]: {
		href: EnBookTypes['not-fiction-emotions-under-control'],
		title: 'Эмоции под контролем',
		queryFn: notFictionEmotionsUnderControlBooks,
	},
	[EnAllReviewsRoutesKeys.powerOfThoughts]: {
		href: EnBookTypes['not-fiction-power-of-thoughts'],
		title: 'Сила мыслей',
		queryFn: notFictionPowerOfThoughtsBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['not-fiction-choice'],
		title: 'Наш выбор',
		queryFn: notFictionOurChoiceBooks,
	},
};

export { allReviewsRoutes, EnAllReviewsRoutesKeys };
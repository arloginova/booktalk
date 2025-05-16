import { EnBookTypes } from '@/shared/api/booksCollections';
import {
	fantasyHeroWayBooks,
	fantasyMisticBooks,
	fantasyNewsBooks,
	fantasyOurChoiceBooks,
	fantasyPopularBooks,
} from '@/shared/api/fantasyBooks';

const EnAllReviewsRoutesKeys = {
	heroWay: EnBookTypes['fantasy-hero-way'],
	mistic: EnBookTypes['fantasy-mistic'],
	popular: EnBookTypes['fantasy-popular'],
	new: EnBookTypes['fantasy-new'],
	choice: EnBookTypes['fantasy-choice'],
};

const fantasyReviewsRoutes = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnBookTypes['fantasy-new'],
		title: 'новинки',
		queryFn: fantasyNewsBooks,
	},
	[EnAllReviewsRoutesKeys.heroWay]: {
		href: EnBookTypes['fantasy-hero-way'],
		title: 'Путь героя',
		queryFn: fantasyHeroWayBooks,
	},
	[EnAllReviewsRoutesKeys.popular]: {
		href: EnBookTypes['fantasy-popular'],
		title: 'популярные',
		queryFn: fantasyPopularBooks,
	},
	[EnAllReviewsRoutesKeys.mistic]: {
		href: EnBookTypes['fantasy-mistic'],
		title: 'Мистика',
		queryFn: fantasyMisticBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['detectives-choice'],
		title: 'Загадки без ответа',
		queryFn: fantasyOurChoiceBooks,
	},
};

export { fantasyReviewsRoutes, EnAllReviewsRoutesKeys };
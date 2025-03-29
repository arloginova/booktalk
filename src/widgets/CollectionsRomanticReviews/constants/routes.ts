import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	romanticBrokenPromisesBooks,
	romanticLoveAmongStormsBooks,
	romanticNewsBooks,
	romanticOurChoiceBooks,
	romanticPopularBooks,
} from '@/shared/api/romanticBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	loveAmongStorms = EnBookTypes['romantic-love-among-storms'],
	brokenPromises = EnBookTypes['romantic-broken-promises'],
	popular = EnBookTypes['romantic-popular'],
	new = EnBookTypes['romantic-new'],
	choice = EnBookTypes['romantic-choice'],
}

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnBookTypes['romantic-new'],
		title: 'новинки',
		queryFn: romanticNewsBooks,
	},
	[EnAllReviewsRoutesKeys.loveAmongStorms]: {
		href: EnBookTypes['romantic-love-among-storms'],
		title: 'Любовь среди штормов',
		queryFn: romanticLoveAmongStormsBooks,
	},
	[EnAllReviewsRoutesKeys.popular]: {
		href: EnBookTypes['romantic-popular'],
		title: 'популярные',
		queryFn: romanticPopularBooks,
	},
	[EnAllReviewsRoutesKeys.brokenPromises]: {
		href: EnBookTypes['romantic-broken-promises'],
		title: 'Разрушенные обещания',
		queryFn: romanticBrokenPromisesBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['romantic-choice'],
		title: 'Наш выбор',
		queryFn: romanticOurChoiceBooks,
	},
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

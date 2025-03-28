import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	romanticBrokenPromisesBooks,
	romanticLoveAmongStormsBooks,
	romanticNewsBooks,
	romanticPopularBooks,
} from '@/shared/api/romanticBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	loveAmongStorms = EnBookTypes['romantic-love-among-storms'],
	brokenPromises = EnBookTypes['romantic-broken-promises'],
	popular = EnBookTypes['romantic-popular'],
	new = EnBookTypes['romantic-new'],
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
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

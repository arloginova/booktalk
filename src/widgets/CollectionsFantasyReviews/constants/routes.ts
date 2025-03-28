import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	fantasyHeroWayBooks,
	fantasyMisticBooks,
	fantasyNewsBooks,
	fantasyPopularBooks,
} from '@/shared/api/fantasyBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	heroWay = EnBookTypes['fantasy-hero-way'],
	mistic = EnBookTypes['fantasy-mistic'],
	popular = EnBookTypes['fantasy-popular'],
	new = EnBookTypes['fantasy-new'],
}

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
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
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

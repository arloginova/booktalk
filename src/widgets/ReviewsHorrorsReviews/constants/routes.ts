import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	horrorsNewsBooks,
	horrorsOurChoiceBooks,
	horrorsPopularBooks,
	horrorsUnforgettableGoosebumpsBooks,
	horrorsWhenShadowsLifeBooks,
} from '@/shared/api/horrorsBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	unforgettableGoosebumps = EnBookTypes['horrors-unforgettable-goosebumps'],
	whenShadowsLife = EnBookTypes['horrors-when-shadows-life'],
	popular = EnBookTypes['horrors-popular'],
	new = EnBookTypes['horrors-new'],
	choice = EnBookTypes['horrors-choice'],
}

const horrorsReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnBookTypes['horrors-new'],
		title: 'новинки',
		queryFn: horrorsNewsBooks,
	},
	[EnAllReviewsRoutesKeys.unforgettableGoosebumps]: {
		href: EnBookTypes['horrors-unforgettable-goosebumps'],
		title: 'Путь героя',
		queryFn: horrorsUnforgettableGoosebumpsBooks,
	},
	[EnAllReviewsRoutesKeys.popular]: {
		href: EnBookTypes['horrors-popular'],
		title: 'популярные',
		queryFn: horrorsPopularBooks,
	},
	[EnAllReviewsRoutesKeys.whenShadowsLife]: {
		href: EnBookTypes['horrors-when-shadows-life'],
		title: 'Мистика',
		queryFn: horrorsWhenShadowsLifeBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['horrors-choice'],
		title: 'Загадки без ответа',
		queryFn: horrorsOurChoiceBooks,
	},
}

export { horrorsReviewsRoutes, EnAllReviewsRoutesKeys }

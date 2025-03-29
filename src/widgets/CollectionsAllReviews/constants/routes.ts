import { booksCollections, EnBookTypes } from '@/shared/api/booksCollections'
import { notFictionStepsBestVersionBooks } from '@/shared/api/notFictionBooks'
import {
	romanticNewsBooks,
	romanticOurChoiceBooks,
} from '@/shared/api/romanticBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	new = EnBookTypes['all-new'],
	romantic = EnBookTypes['all-romantic'],
	notFiction = EnBookTypes['all-not-fiction'],
	choice = EnBookTypes['all-choice'],
}

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
	[EnAllReviewsRoutesKeys.new]: {
		href: EnBookTypes['all-new'],
		title: 'новинки',
		queryFn: booksCollections,
	},
	[EnAllReviewsRoutesKeys.romantic]: {
		href: EnBookTypes['all-romantic'],
		title: 'романтика',
		queryFn: romanticNewsBooks,
	},
	[EnAllReviewsRoutesKeys.notFiction]: {
		href: EnBookTypes['all-not-fiction'],
		title: 'нон-фикшн',
		queryFn: notFictionStepsBestVersionBooks,
	},
	[EnAllReviewsRoutesKeys.choice]: {
		href: EnBookTypes['all-choice'],
		title: 'Наш выбор',
		queryFn: romanticOurChoiceBooks,
	},
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

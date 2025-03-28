import { booksCollections, EnBookTypes } from '@/shared/api/booksCollections'
import { notFictionStepsBestVersionBooks } from '@/shared/api/notFictionBooks'
import { romanticNewsBooks } from '@/shared/api/romanticBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	new = EnBookTypes['all-new'],
	romantic = EnBookTypes['all-romantic'],
	notFiction = EnBookTypes['all-not-fiction'],
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
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

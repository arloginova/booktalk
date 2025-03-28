import { EnBookTypes } from '@/shared/api/booksCollections'
import {
	notFictionEmotionsUnderControlBooks,
	notFictionPowerOfThoughtsBooks,
	notFictionStepsBestVersionBooks,
} from '@/shared/api/notFictionBooks'
import { TBookItem } from '@/shared/types/Book'

enum EnAllReviewsRoutesKeys {
	stepsBestVersion = EnBookTypes['not-fiction-steps-best-version'],
	powerOfThoughts = EnBookTypes['not-fiction-power-of-thoughts'],
	emotionsUnderControl = EnBookTypes['not-fiction-emotions-under-control'],
}

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
> = {
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
}

export { allReviewsRoutes, EnAllReviewsRoutesKeys }

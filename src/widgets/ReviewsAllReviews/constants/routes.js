import { booksCollections } from '@/shared/api/booksCollections';
import {
	EnReviewsTypes,
	reviewsAllNotFictionBooks,
	reviewsAllPopularBooks,
	reviewsAllRomanticBooks,
} from '@/shared/api/reviewsList';

const EnAllReviewsRoutesKeys = {
	'all-new': EnReviewsTypes['all-new'],
	'all-romantic': EnReviewsTypes['all-romantic'],
	'all-not-fiction': EnReviewsTypes['all-not-fiction'],
	'all-popular': EnReviewsTypes['all-popular'],
};

const allReviewsRoutes = {
	[EnAllReviewsRoutesKeys['all-new']]: {
		href: EnReviewsTypes['all-new'],
		title: 'новинки',
		queryFn: booksCollections,
	},
	[EnAllReviewsRoutesKeys['all-popular']]: {
		href: EnReviewsTypes['all-popular'],
		title: 'популярные',
		queryFn: reviewsAllPopularBooks,
	},
	[EnAllReviewsRoutesKeys['all-romantic']]: {
		href: EnReviewsTypes['all-romantic'],
		title: 'романтика',
		queryFn: reviewsAllRomanticBooks,
	},
	[EnAllReviewsRoutesKeys['all-not-fiction']]: {
		href: EnReviewsTypes['all-not-fiction'],
		title: 'нон-фикшн',
		queryFn: reviewsAllNotFictionBooks,
	},
};

export { allReviewsRoutes, EnAllReviewsRoutesKeys };
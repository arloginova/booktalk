import { TBookData, TBookItem } from '../types/Book'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

import allPopular from './data/reviews/all/popular.json'
import allFantasy from './data/reviews/all/fantasy.json'
import allNotFiction from './data/reviews/all/not-fiction.json'
import allOurChoice from './data/reviews/all/our-choice.json'
import allRomantic from './data/reviews/all/romantic.json'

import romanticForbidden from './data/reviews/romantic/forbidden-love.json'
import romanticModernRomance from './data/reviews/romantic/modern-romance.json'
import romanticNews from './data/reviews/romantic/new.json'
import romanticOurChoice from './data/reviews/romantic/our-choice.json'
import romanticPopular from './data/reviews/romantic/popular.json'
import { booksCollections } from './booksCollections'
import {
	detectivesKeToUnravelingBooks,
	detectivesNewsBooks,
	detectivesPopularBooks,
	detectivesRiddleUnansweredBooks,
} from './detectivesBooks'
import {
	fantasyHeroWayBooks,
	fantasyMisticBooks,
	fantasyNewsBooks,
	fantasyPopularBooks,
} from './fantasyBooks'
import {
	horrorsNewsBooks,
	horrorsPopularBooks,
	horrorsUnforgettableGoosebumpsBooks,
	horrorsWhenShadowsLifeBooks,
} from './horrorsBooks'
import {
	notFictionEmotionsUnderControlBooks,
	notFictionPowerOfThoughtsBooks,
	notFictionStepsBestVersionBooks,
} from './notFictionBooks'

type TResponse = TBookItem[]

export enum EnReviewsTypes {
	'all-new' = 'all-new',
	'all-popular' = 'all-popular',
	'all-romantic' = 'all-romantic',
	'all-fantasy' = 'all-fantasy',
	'all-not-fiction' = 'all-not-fiction',
	'romantic-forbidden-love' = 'romantic-forbidden-love',
	'romantic-modern-romance' = 'romantic-modern-romance',
	'romantic-new' = 'romantic-new',
	'romantic-popular' = 'romantic-popular',
	'detectives-key-to-unraveling' = 'detectives-key-to-unraveling',
	'detectives-riddle-unanswered' = 'detectives-riddle-unanswered',
	'detectives-popular' = 'detectives-popular',
	'detectives-new' = 'detectives-new',
	'fantasy-hero-way' = 'fantasy-hero-way',
	'fantasy-mistic' = 'fantasy-mistic',
	'fantasy-popular' = 'fantasy-popular',
	'fantasy-new' = 'fantasy-new',
	'horrors-unforgettable-goosebumps' = 'horrors-unforgettable-goosebumps',
	'horrors-when-shadows-life' = 'horrors-when-shadows-life',
	'horrors-popular' = 'horrors-popular',
	'horrors-new' = 'horrors-new',
	'not-fiction-steps-best-version' = 'not-fiction-steps-best-version',
	'not-fiction-power-of-thoughts' = 'not-fiction-power-of-thoughts',
	'not-fiction-emotions-under-control' = 'not-fiction-emotions-under-control',
}

export const reviewsAllPopularBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				allPopular.data.map(data => ({
					data,
					genre: allPopular.genre,
					type: allPopular.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsAllFantasyBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				allFantasy.data.map(data => ({
					data,
					genre: allFantasy.genre,
					type: allFantasy.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsAllNotFictionBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		res(
			allNotFiction.data.map(data => ({
				data,
				genre: allNotFiction.genre,
				type: allNotFiction.type,
			}))
		)
	})
}
export const reviewsAllOurChoiceBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				allOurChoice.data.map(data => ({
					data,
					genre: allOurChoice.genre,
					type: allOurChoice.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsAllRomanticBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				allRomantic.data.map(data => ({
					data,
					genre: allRomantic.genre,
					type: allRomantic.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsRomanticPopularBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticPopular.data.map(data => ({
					data,
					genre: romanticPopular.genre,
					type: romanticPopular.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsRomanticOurChoiceBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticOurChoice.data.map(data => ({
					data,
					genre: romanticOurChoice.genre,
					type: romanticOurChoice.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsRomanticNewsBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticNews.data.map(data => ({
					data,
					genre: romanticNews.genre,
					type: romanticNews.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsRomanticModernRomanceBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticModernRomance.data.map(data => ({
					data,
					genre: romanticModernRomance.genre,
					type: romanticModernRomance.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const reviewsRomanticForbiddenBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticForbidden.data.map(data => ({
					data,
					genre: romanticForbidden.genre,
					type: romanticForbidden.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const reviewsFindOneBySlugRequest = (type: EnReviewsTypes) => {
	switch (type) {
		case EnReviewsTypes['all-new']:
			return async (slug: TBookData['slug']) => {
				const data = await booksCollections()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['all-not-fiction']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsAllNotFictionBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['all-romantic']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsAllRomanticBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['all-fantasy']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsAllFantasyBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['all-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsAllPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['romantic-forbidden-love']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsRomanticForbiddenBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['romantic-modern-romance']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsRomanticModernRomanceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['romantic-new']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsRomanticNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['romantic-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await reviewsRomanticPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['detectives-key-to-unraveling']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesKeToUnravelingBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['detectives-new']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['detectives-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['detectives-riddle-unanswered']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesRiddleUnansweredBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['fantasy-hero-way']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyHeroWayBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['fantasy-mistic']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyMisticBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['fantasy-new']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['fantasy-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['horrors-new']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['horrors-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['horrors-unforgettable-goosebumps']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsUnforgettableGoosebumpsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['horrors-when-shadows-life']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsWhenShadowsLifeBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['not-fiction-emotions-under-control']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionEmotionsUnderControlBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['not-fiction-power-of-thoughts']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionPowerOfThoughtsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnReviewsTypes['not-fiction-steps-best-version']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionStepsBestVersionBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		default:
			throw new Error('no valid books segment path')
	}
}

//@ts-nocheck
import { API_MOCK_REQUEST_TIME_MS } from '../constants'
import { TBookData, TBookItem } from '../types/Book'
import fantasyNew from './data/fantasy/new.json'
import romanticNew from './data/romantic/new.json'
import detectivesNew from './data/detectives/new.json'
import {
	notFictionEmotionsUnderControlBooks,
	notFictionOurChoiceBooks,
	notFictionPowerOfThoughtsBooks,
	notFictionStepsBestVersionBooks,
} from './notFictionBooks'
import {
	romanticBrokenPromisesBooks,
	romanticLoveAmongStormsBooks,
	romanticNewsBooks,
	romanticOurChoiceBooks,
	romanticPopularBooks,
} from './romanticBooks'
import {
	detectivesKeToUnravelingBooks,
	detectivesNewsBooks,
	detectivesOurChoiceBooks,
	detectivesPopularBooks,
	detectivesRiddleUnansweredBooks,
} from './detectivesBooks'
import {
	fantasyHeroWayBooks,
	fantasyMisticBooks,
	fantasyNewsBooks,
	fantasyOurChoiceBooks,
	fantasyPopularBooks,
} from './fantasyBooks'
import {
	horrorsNewsBooks,
	horrorsOurChoiceBooks,
	horrorsPopularBooks,
	horrorsUnforgettableGoosebumpsBooks,
	horrorsWhenShadowsLifeBooks,
} from './horrorsBooks'

export enum EnBookTypes {
	'all-new' = 'all-new',
	'all-romantic' = 'all-romantic',
	'all-not-fiction' = 'all-not-fiction',
	'all-choice' = 'all-choice',
	'fantasy-new' = 'fantasy-new',
	'fantasy-hero-way' = 'fantasy-hero-way',
	'fantasy-popular' = 'fantasy-popular',
	'fantasy-mistic' = 'fantasy-mistic',
	'fantasy-choice' = 'fantasy-choice',
	'horrors-new' = 'horrors-new',
	'horrors-unforgettable-goosebumps' = 'horrors-unforgettable-goosebumps',
	'horrors-popular' = 'horrors-popular',
	'horrors-when-shadows-life' = 'horrors-when-shadows-life',
	'horrors-choice' = 'horrors-choice',
	'romantic-new' = 'romantic-new',
	'romantic-love-among-storms' = 'romantic-love-among-storms',
	'romantic-popular' = 'romantic-popular',
	'romantic-broken-promises' = 'romantic-broken-promises',
	'romantic-choice' = 'romantic-choice',
	'not-fiction-steps-best-version' = 'not-fiction-steps-best-version',
	'not-fiction-emotions-under-control' = 'not-fiction-emotions-under-control',
	'not-fiction-power-of-thoughts' = 'not-fiction-power-of-thoughts',
	'not-fiction-choice' = 'not-fiction-choice',
	'detectives-new' = 'detectives-new',
	'detectives-key-to-unraveling' = 'detectives-key-to-unraveling',
	'detectives-popular' = 'detectives-popular',
	'detectives-riddle-unanswered' = 'detectives-riddle-unanswered',
	'detectives-choice' = 'detectives-choice',
}

export const booksCollections = () => {
	return new Promise<TBookItem[]>((res, rej) => {
		setTimeout(() => {
			res([
				{
					genre: fantasyNew.genre,
					type: fantasyNew.type,
					data: fantasyNew.data[2],
				},
				{
					genre: fantasyNew.genre,
					type: fantasyNew.type,
					data: fantasyNew.data[6],
				},
				{
					genre: fantasyNew.genre,
					type: fantasyNew.type,
					data: fantasyNew.data[1],
				},
				{
					genre: fantasyNew.genre,
					type: fantasyNew.type,
					data: fantasyNew.data[3],
				},
				{
					genre: romanticNew.genre,
					type: romanticNew.type,
					data: romanticNew.data[4],
				},
				{
					genre: romanticNew.genre,
					type: romanticNew.type,
					data: romanticNew.data[1],
				},
				{
					genre: romanticNew.genre,
					type: romanticNew.type,
					data: romanticNew.data[6],
				},
				{
					genre: romanticNew.genre,
					type: romanticNew.type,
					data: romanticNew.data[8],
				},
				{
					genre: detectivesNew.genre,
					type: detectivesNew.type,
					data: detectivesNew.data[7],
				},
				{
					genre: detectivesNew.genre,
					type: detectivesNew.type,
					data: detectivesNew.data[1],
				},
				{
					genre: detectivesNew.genre,
					type: detectivesNew.type,
					data: detectivesNew.data[3],
				},
				{
					genre: detectivesNew.genre,
					type: detectivesNew.type,
					data: detectivesNew.data[5],
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const booksFindOneBySlugRequest = (type: EnBookTypes) => {
	switch (type) {
		case EnBookTypes['all-new']:
			return async (slug: TBookData['slug']) => {
				const data = await booksCollections()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['all-not-fiction']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionStepsBestVersionBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['all-romantic']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['all-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticOurChoiceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['detectives-key-to-unraveling']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesKeToUnravelingBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['detectives-new']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['detectives-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['detectives-riddle-unanswered']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesRiddleUnansweredBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['detectives-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await detectivesOurChoiceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['fantasy-hero-way']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyHeroWayBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['fantasy-mistic']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyMisticBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['fantasy-new']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['fantasy-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['fantasy-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await fantasyOurChoiceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['horrors-new']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['horrors-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['horrors-unforgettable-goosebumps']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsUnforgettableGoosebumpsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['horrors-when-shadows-life']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsWhenShadowsLifeBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}

		case EnBookTypes['horrors-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await horrorsOurChoiceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['not-fiction-emotions-under-control']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionEmotionsUnderControlBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['not-fiction-power-of-thoughts']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionPowerOfThoughtsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['not-fiction-steps-best-version']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionStepsBestVersionBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}

		case EnBookTypes['not-fiction-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await notFictionOurChoiceBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['romantic-broken-promises']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticBrokenPromisesBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['romantic-love-among-storms']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticLoveAmongStormsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['romantic-new']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticNewsBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['romantic-popular']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticPopularBooks()
				return data.find(
					({ data }) =>
						data.slug.replace('?', '') ===
						decodeURIComponent(slug).replace('?', '')
				)
			}
		case EnBookTypes['romantic-choice']:
			return async (slug: TBookData['slug']) => {
				const data = await romanticOurChoiceBooks()
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

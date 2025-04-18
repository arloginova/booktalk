import { TBookData, TBookItem } from '../types/Book'
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
import {
	reviewsAllNotFictionBooks,
	reviewsAllRomanticBooks,
	reviewsAllFantasyBooks,
	reviewsAllPopularBooks,
	reviewsRomanticForbiddenBooks,
	reviewsRomanticModernRomanceBooks,
	reviewsRomanticNewsBooks,
	reviewsRomanticPopularBooks,
} from './reviewsList'

class SearchReviews {
	async booksCollections(slug: TBookData['slug']) {
		const data = await booksCollections()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsAllNotFictionBooks(slug: TBookData['slug']) {
		const data = await reviewsAllNotFictionBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsAllRomanticBooks(slug: TBookData['slug']) {
		const data = await reviewsAllRomanticBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsAllFantasyBooks(slug: TBookData['slug']) {
		const data = await reviewsAllFantasyBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsAllPopularBooks(slug: TBookData['slug']) {
		const data = await reviewsAllPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsRomanticForbiddenBooks(slug: TBookData['slug']) {
		const data = await reviewsRomanticForbiddenBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsRomanticModernRomanceBooks(slug: TBookData['slug']) {
		const data = await reviewsRomanticModernRomanceBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsRomanticNewsBooks(slug: TBookData['slug']) {
		const data = await reviewsRomanticNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async reviewsRomanticPopularBooks(slug: TBookData['slug']) {
		const data = await reviewsRomanticPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async detectivesKeToUnravelingBooks(slug: TBookData['slug']) {
		const data = await detectivesKeToUnravelingBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async detectivesNewsBooks(slug: TBookData['slug']) {
		const data = await detectivesNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async detectivesPopularBooks(slug: TBookData['slug']) {
		const data = await detectivesPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async detectivesRiddleUnansweredBooks(slug: TBookData['slug']) {
		const data = await detectivesRiddleUnansweredBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async fantasyHeroWayBooks(slug: TBookData['slug']) {
		const data = await fantasyHeroWayBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async fantasyMisticBooks(slug: TBookData['slug']) {
		const data = await fantasyMisticBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async fantasyNewsBooks(slug: TBookData['slug']) {
		const data = await fantasyNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async fantasyPopularBooks(slug: TBookData['slug']) {
		const data = await fantasyPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async horrorsNewsBooks(slug: TBookData['slug']) {
		const data = await horrorsNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async horrorsPopularBooks(slug: TBookData['slug']) {
		const data = await horrorsPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async horrorsUnforgettableGoosebumpsBooks(slug: TBookData['slug']) {
		const data = await horrorsUnforgettableGoosebumpsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async horrorsWhenShadowsLifeBooks(slug: TBookData['slug']) {
		const data = await horrorsWhenShadowsLifeBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async notFictionEmotionsUnderControlBooks(slug: TBookData['slug']) {
		const data = await notFictionEmotionsUnderControlBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async notFictionPowerOfThoughtsBooks(slug: TBookData['slug']) {
		const data = await notFictionPowerOfThoughtsBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async notFictionStepsBestVersionBooks(slug: TBookData['slug']) {
		const data = await notFictionStepsBestVersionBooks()
		return data.find(({ data }) =>
			data.slug
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
}

export const searchReviews = async (slug: string): Promise<TBookItem[]> => {
	const m = new SearchReviews()

	try {
		const promises = [
			m.booksCollections(slug),
			m.reviewsAllNotFictionBooks(slug),
			m.reviewsAllRomanticBooks(slug),
			m.reviewsAllFantasyBooks(slug),
			m.reviewsAllPopularBooks(slug),
			m.reviewsRomanticForbiddenBooks(slug),
			m.reviewsRomanticModernRomanceBooks(slug),
			m.reviewsRomanticNewsBooks(slug),
			m.reviewsRomanticPopularBooks(slug),
			m.detectivesKeToUnravelingBooks(slug),
			m.detectivesNewsBooks(slug),
			m.detectivesPopularBooks(slug),
			m.detectivesRiddleUnansweredBooks(slug),
			m.fantasyHeroWayBooks(slug),
			m.fantasyMisticBooks(slug),
			m.fantasyNewsBooks(slug),
			m.fantasyPopularBooks(slug),
			m.horrorsNewsBooks(slug),
			m.horrorsPopularBooks(slug),
			m.horrorsUnforgettableGoosebumpsBooks(slug),
			m.horrorsWhenShadowsLifeBooks(slug),
			m.notFictionEmotionsUnderControlBooks(slug),
			m.notFictionPowerOfThoughtsBooks(slug),
			m.notFictionStepsBestVersionBooks(slug),
		]

		const results = await Promise.allSettled(promises)

		const successfulResults = results
			.filter(
				result => result.status === 'fulfilled' && result.value !== undefined
			)
			.map(result => (result as PromiseFulfilledResult<TBookItem>).value)

		console.log(results)

		const uniqueResults = successfulResults.reduce(
			(acc: TBookItem[], current) => {
				if (!acc.some(item => item.data.id === current.data.id)) {
					acc.push(current)
				}
				return acc
			},
			[]
		)

		return uniqueResults
	} catch (error) {
		console.error(error)
		return []
	}
}

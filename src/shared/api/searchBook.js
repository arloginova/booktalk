import {
	detectivesKeToUnravelingBooks,
	detectivesNewsBooks,
	detectivesPopularBooks,
	detectivesRiddleUnansweredBooks,
	detectivesOurChoiceBooks,
} from './detectivesBooks'
import {
	fantasyHeroWayBooks,
	fantasyMisticBooks,
	fantasyNewsBooks,
	fantasyPopularBooks,
	fantasyOurChoiceBooks,
} from './fantasyBooks'
import {
	horrorsNewsBooks,
	horrorsPopularBooks,
	horrorsUnforgettableGoosebumpsBooks,
	horrorsWhenShadowsLifeBooks,
	horrorsOurChoiceBooks,
} from './horrorsBooks'
import {
	notFictionStepsBestVersionBooks,
	notFictionEmotionsUnderControlBooks,
	notFictionPowerOfThoughtsBooks,
	notFictionOurChoiceBooks,
} from './notFictionBooks'
import {
	romanticNewsBooks,
	romanticOurChoiceBooks,
	romanticBrokenPromisesBooks,
	romanticLoveAmongStormsBooks,
	romanticPopularBooks,
} from './romanticBooks'

class SearchBooksMethods {
	async notFictionStepsBestVersionBooks(slug) {
		const data = await notFictionStepsBestVersionBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async romanticNewsBooks(slug) {
		const data = await romanticNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async romanticOurChoiceBooks(slug) {
		const data = await romanticOurChoiceBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async detectivesKeToUnravelingBooks(slug) {
		const data = await detectivesKeToUnravelingBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async detectivesNewsBooks(slug) {
		const data = await detectivesNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async detectivesPopularBooks(slug) {
		const data = await detectivesPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async detectivesRiddleUnansweredBooks(slug) {
		const data = await detectivesRiddleUnansweredBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async detectivesOurChoiceBooks(slug) {
		const data = await detectivesOurChoiceBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async fantasyHeroWayBooks(slug) {
		const data = await fantasyHeroWayBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async fantasyMisticBooks(slug) {
		const data = await fantasyMisticBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async fantasyNewsBooks(slug) {
		const data = await fantasyNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async fantasyPopularBooks(slug) {
		const data = await fantasyPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async fantasyOurChoiceBooks(slug) {
		const data = await fantasyOurChoiceBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async horrorsNewsBooks(slug) {
		const data = await horrorsNewsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async horrorsPopularBooks(slug) {
		const data = await horrorsPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async horrorsUnforgettableGoosebumpsBooks(slug) {
		const data = await horrorsUnforgettableGoosebumpsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async horrorsWhenShadowsLifeBooks(slug) {
		const data = await horrorsWhenShadowsLifeBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async horrorsOurChoiceBooks(slug) {
		const data = await horrorsOurChoiceBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async notFictionEmotionsUnderControlBooks(slug) {
		const data = await notFictionEmotionsUnderControlBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async notFictionPowerOfThoughtsBooks(slug) {
		const data = await notFictionPowerOfThoughtsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async notFictionOurChoiceBooks(slug) {
		const data = await notFictionOurChoiceBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async romanticBrokenPromisesBooks(slug) {
		const data = await romanticBrokenPromisesBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async romanticLoveAmongStormsBooks(slug) {
		const data = await romanticLoveAmongStormsBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}

	async romanticPopularBooks(slug) {
		const data = await romanticPopularBooks()
		return data.find(({ data }) =>
			data.slug
				.replace('?', '')
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
}

export const searchBooks = async (slug) => {
	const m = new SearchBooksMethods()

	try {
		const promises = [
			m.detectivesKeToUnravelingBooks(slug),
			m.detectivesNewsBooks(slug),
			m.detectivesNewsBooks(slug),
			m.detectivesOurChoiceBooks(slug),
			m.detectivesPopularBooks(slug),
			m.fantasyHeroWayBooks(slug),
			m.fantasyMisticBooks(slug),
			m.fantasyNewsBooks(slug),
			m.fantasyOurChoiceBooks(slug),
			m.fantasyOurChoiceBooks(slug),
			m.fantasyPopularBooks(slug),
			m.horrorsNewsBooks(slug),
			m.horrorsOurChoiceBooks(slug),
			m.horrorsPopularBooks(slug),
			m.horrorsUnforgettableGoosebumpsBooks(slug),
			m.horrorsUnforgettableGoosebumpsBooks(slug),
			m.horrorsWhenShadowsLifeBooks(slug),
			m.notFictionEmotionsUnderControlBooks(slug),
			m.notFictionOurChoiceBooks(slug),
			m.notFictionPowerOfThoughtsBooks(slug),
			m.notFictionStepsBestVersionBooks(slug),
			m.romanticBrokenPromisesBooks(slug),
			m.romanticLoveAmongStormsBooks(slug),
			m.romanticNewsBooks(slug),
			m.romanticOurChoiceBooks(slug),
			m.romanticPopularBooks(slug),
		]

		const results = await Promise.allSettled(promises)

		const successfulResults = results
			.filter(result => result.status === 'fulfilled' && result.value !== undefined)
			.map(result => result.value)

		const uniqueResults = successfulResults.reduce((acc, current) => {
			if (!acc.some(item => item.data.id === current.data.id)) {
				acc.push(current)
			}
			return acc
		}, [])

		return uniqueResults
	} catch (error) {
		console.error(error)
		return []
	}
}
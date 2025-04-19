//@ts-nocheck
import { TArticleData, TArticleItem } from '../types/Articles'
import {
	articlesAtmospheric,
	articlesNews,
	articlesPopular,
	articlesRomanticMood,
} from './articles'

class SearchArticleMethods {
	async articlesAtmospheric(slug: TArticleData['title']) {
		const data = await articlesAtmospheric()
		return data.find(({ data: { title } }) =>
			title
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async articlesNews(slug: TArticleData['title']) {
		const data = await articlesNews()

		return data.find(({ data: { title } }) => {
			return title
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		})
	}
	async articlesPopular(slug: TArticleData['title']) {
		const data = await articlesPopular()
		return data.find(({ data: { title } }) =>
			title
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
	async articlesRomanticMood(slug: TArticleData['title']) {
		const data = await articlesRomanticMood()
		return data.find(({ data: { title } }) =>
			title
				.toLowerCase()
				.includes(decodeURIComponent(slug).replace('?', '').toLowerCase())
		)
	}
}

export const searchArticles = async (slug: string): Promise<TArticleItem[]> => {
	const m = new SearchArticleMethods()

	try {
		const promises = [
			m.articlesAtmospheric(slug),
			m.articlesNews(slug),
			m.articlesPopular(slug),
			m.articlesRomanticMood(slug),
		]

		const results = await Promise.allSettled(promises)

		const successfulResults = results
			.filter(
				result => result.status === 'fulfilled' && result.value !== undefined
			)
			.map(result => (result as PromiseFulfilledResult<TArticleItem>).value)

		const uniqueResults = successfulResults.reduce(
			(acc: TArticleItem[], current) => {
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

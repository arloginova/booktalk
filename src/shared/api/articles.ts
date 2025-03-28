import popular from './data/articles/popular.json'
import news from './data/articles/new.json'
import atmospheric from './data/articles/atmospheric.json'
import ourChoice from './data/articles/our-choice.json'
import romanticMood from './data/articles/romantic-mood.json'
// import сhildrens from './data/articles/сhildrens.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'
import { TArticleData, TArticleItem, TArticlesTypes } from '../types/Articles'
import { TBookItem } from '../types/Book'

type TResponse = TArticleItem[]
type TOurChoiceResponse = TBookItem[]

// export const articlesChildrens = () => {
// 	return new Promise<TResponse>((res, rej) => {
// 		setTimeout(() => {
// 			res(
// 				сhildrens.data.map(data => ({
// 					data,
// 					genre: 'article',
// 					type: 'childrens',
// 				}))
// 			)
// 		}, API_MOCK_REQUEST_TIME_MS)
// 	})
// }
export const articlesPopular = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				popular.data.map(data => ({
					data,
					genre: popular.genre,
					type: popular.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesNews = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				news.data.map(data => ({
					data,
					genre: news.genre,
					type: news.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesAtmospheric = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				atmospheric.data.map(data => ({
					data,
					genre: atmospheric.genre,
					type: atmospheric.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesOurChoice = () => {
	return new Promise<TOurChoiceResponse>((res, rej) => {
		setTimeout(() => {
			res(
				ourChoice.data.map(data => ({
					data,
					genre: ourChoice.genre,
					type: ourChoice.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesRomanticMood = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				romanticMood.data.map(data => ({
					data,
					genre: romanticMood.genre,
					type: romanticMood.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const articlesFindOneBySlugRequest = (type: TArticlesTypes) => {
	switch (type) {
		case 'atmospheric':
			return async (slug: TArticleData['title']) => {
				const data = await articlesAtmospheric()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'new':
			return async (slug: TArticleData['title']) => {
				const data = await articlesNews()
				console.log(decodeURIComponent(slug).replace('?', ''), data)

				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'popular':
			return async (slug: TArticleData['title']) => {
				const data = await articlesPopular()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'romantic-mood':
			return async (slug: TArticleData['title']) => {
				const data = await articlesRomanticMood()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
	}
}

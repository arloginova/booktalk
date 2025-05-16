import popular from './data/articles/popular.json'
import news from './data/articles/new.json'
import cinemaAndSeries from './data/articles/cinema-and-series.json'
import brightEmotions from './data/articles/bright-emotions.json'
import easyRead from './data/articles/easyRead.json'
import atmospheric from './data/articles/atmospheric.json'
import ourChoice from './data/articles/our-choice.json'
import romanticMood from './data/articles/romantic-mood.json'
import ourChoiceSecond from './data/articles/our-choice-second.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

export const articlesCinemaAndSeries = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				cinemaAndSeries.data.map(data => ({
					data,
					genre: cinemaAndSeries.genre,
					type: cinemaAndSeries.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesOurChoiceSecond = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				ourChoiceSecond.data.map(data => ({
					data,
					genre: ourChoiceSecond.genre,
					type: ourChoiceSecond.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesEasyRead = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				easyRead.data.map(data => ({
					data,
					genre: easyRead.genre,
					type: easyRead.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesBrightEmotions = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				brightEmotions.data.map(data => ({
					data,
					genre: brightEmotions.genre,
					type: brightEmotions.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const articlesPopular = () => {
	return new Promise((res, rej) => {
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
	return new Promise((res, rej) => {
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
	return new Promise((res, rej) => {
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
	return new Promise((res, rej) => {
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
	return new Promise((res, rej) => {
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

export const articlesFindOneBySlugRequest = (type) => {
	switch (type) {
		case 'atmospheric':
			return async (slug) => {
				const data = await articlesAtmospheric()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'new':
			return async (slug) => {
				const data = await articlesNews()

				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'popular':
			return async (slug) => {
				const data = await articlesPopular()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'romantic-mood':
			return async (slug) => {
				const data = await articlesRomanticMood()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'cinema-and-series':
			return async (slug) => {
				const data = await articlesCinemaAndSeries()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'bright-emotions':
			return async (slug) => {
				const data = await articlesBrightEmotions()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
		case 'easy-read':
			return async (slug) => {
				const data = await articlesEasyRead()
				return data.find(
					({ data: { title } }) =>
						title.replace('?', '') === decodeURIComponent(slug).replace('?', '')
				)
			}
	}
}
import popular from './data/horrors/popular.json'
import news from './data/horrors/new.json'
import whenShadowsLife from './data/horrors/when-shadows-life.json'
import ourChoice from './data/horrors/our-choice.json'
import unforgettableGoosebumps from './data/horrors/unforgettable-goosebumps.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

export const horrorsPopularBooks = () => {
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

export const horrorsNewsBooks = () => {
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

export const horrorsWhenShadowsLifeBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				whenShadowsLife.data.map(data => ({
					data,
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const horrorsOurChoiceBooks = () => {
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

export const horrorsUnforgettableGoosebumpsBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				unforgettableGoosebumps.data.map(data => ({
					data,
					genre: unforgettableGoosebumps.genre,
					type: unforgettableGoosebumps.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const horrorsRecommendedBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res([
				{
					data: whenShadowsLife.data[0],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[1],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[2],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[3],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[4],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[5],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
				{
					data: whenShadowsLife.data[6],
					genre: whenShadowsLife.genre,
					type: whenShadowsLife.type,
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
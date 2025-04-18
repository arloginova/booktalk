//@ts-nocheck
import { TBookItem } from '../types/Book'
import popular from './data/romantic/popular.json'
import news from './data/romantic/new.json'
import loveAmongStorms from './data/romantic/love-among-storms.json'
import ourChoice from './data/romantic/our-choice.json'
import brokenPromises from './data/romantic/broken-promises.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

type TResponse = TBookItem[]

export const romanticPopularBooks = () => {
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
export const romanticNewsBooks = () => {
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
export const romanticLoveAmongStormsBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				loveAmongStorms.data.map(data => ({
					data,
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const romanticOurChoiceBooks = () => {
	return new Promise<TResponse>((res, rej) => {
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
export const romanticBrokenPromisesBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				brokenPromises.data.map(data => ({
					data,
					genre: brokenPromises.genre,
					type: brokenPromises.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const romanticRecommendedBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res([
				{
					data: loveAmongStorms.data[0],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[1],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[2],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[3],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[4],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[5],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
				{
					data: loveAmongStorms.data[6],
					genre: loveAmongStorms.genre,
					type: loveAmongStorms.type,
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

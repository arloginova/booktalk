//@ts-nocheck
import { TBookItem } from '../types/Book'
import popular from './data/fantasy/popular.json'
import news from './data/fantasy/new.json'
import heroWay from './data/fantasy/hero-way.json'
import ourChoice from './data/fantasy/our-choice.json'
import mistic from './data/fantasy/mistic.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

type TResponse = TBookItem[]

export const fantasyPopularBooks = () => {
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
export const fantasyNewsBooks = () => {
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
export const fantasyMisticBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				mistic.data.map(data => ({
					data,
					genre: mistic.genre,
					type: mistic.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const fantasyOurChoiceBooks = () => {
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
export const fantasyHeroWayBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				heroWay.data.map(data => ({
					data,
					genre: heroWay.genre,
					type: heroWay.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const fantasyRecommendedBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res([
				{
					data: heroWay.data[0],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[1],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[2],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[3],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[4],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[5],
					genre: heroWay.genre,
					type: heroWay.type,
				},
				{
					data: heroWay.data[6],
					genre: heroWay.genre,
					type: heroWay.type,
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

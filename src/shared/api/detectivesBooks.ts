//@ts-nocheck
import { TBookItem } from '../types/Book'
import popular from './data/detectives/popular.json'
import news from './data/detectives/new.json'
import keyToUnraveling from './data/detectives/keyToUnraveling.json'
import ourChoice from './data/detectives/ourChoice.json'
import riddleUnanswered from './data/detectives/riddleUnanswered.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

type TResponse = TBookItem[]

export const detectivesPopularBooks = () => {
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
export const detectivesNewsBooks = () => {
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
export const detectivesKeToUnravelingBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				keyToUnraveling.data.map(data => ({
					data,
					genre: keyToUnraveling.genre,
					type: keyToUnraveling.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
export const detectivesOurChoiceBooks = () => {
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
export const detectivesRiddleUnansweredBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res(
				riddleUnanswered.data.map(data => ({
					data,
					genre: riddleUnanswered.genre,
					type: riddleUnanswered.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const detectivesRecommendedBooks = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res([
				{
					data: popular.data[0],
					genre: popular.genre,
					type: popular.type,
				},
				{
					data: popular.data[1],
					genre: popular.genre,
					type: popular.type,
				},
				{
					data: keyToUnraveling.data[2],
					genre: keyToUnraveling.genre,
					type: keyToUnraveling.type,
				},
				{
					data: keyToUnraveling.data[3],
					genre: keyToUnraveling.genre,
					type: keyToUnraveling.type,
				},
				{
					data: riddleUnanswered.data[4],
					genre: riddleUnanswered.genre,
					type: riddleUnanswered.type,
				},
				{
					data: riddleUnanswered.data[5],
					genre: riddleUnanswered.genre,
					type: riddleUnanswered.type,
				},
				{
					data: riddleUnanswered.data[2],
					genre: riddleUnanswered.genre,
					type: riddleUnanswered.type,
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

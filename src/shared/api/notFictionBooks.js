import stepsBestVersion from './data/not-fiction/stepsBestVersion.json'
import powerOfThoughts from './data/not-fiction/powerOfThoughts.json'
import ourChoice from './data/not-fiction/ourChoice.json'
import emotionsUnderControl from './data/not-fiction/emotionsUnderControl.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'

export const notFictionStepsBestVersionBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				stepsBestVersion.data.map(data => ({
					data,
					genre: stepsBestVersion.genre,
					type: stepsBestVersion.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const notFictionPowerOfThoughtsBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				powerOfThoughts.data.map(data => ({
					data,
					genre: powerOfThoughts.genre,
					type: powerOfThoughts.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const notFictionOurChoiceBooks = () => {
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

export const notFictionEmotionsUnderControlBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(
				emotionsUnderControl.data.map(data => ({
					data,
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				}))
			)
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

export const notFictionRecommendedBooks = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res([
				{
					data: emotionsUnderControl.data[0],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[1],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[2],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[3],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[4],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[5],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
				{
					data: emotionsUnderControl.data[6],
					genre: emotionsUnderControl.genre,
					type: emotionsUnderControl.type,
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}
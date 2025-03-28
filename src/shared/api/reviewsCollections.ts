import { API_MOCK_REQUEST_TIME_MS } from '../constants'
import { TBookItem } from '../types/Book'
import reviewsAllPopular from './data/reviews/all/popular.json'
import reviewsRomantic from './data/reviews/romantic/popular.json'
import reviewsPopular from './data/reviews/popular.json'

type TResponse = TBookItem[]

export const reviewsCollections = () => {
	return new Promise<TResponse>((res, rej) => {
		setTimeout(() => {
			res([
				{
					genre: reviewsAllPopular.genre,
					type: reviewsAllPopular.type,
					data: reviewsAllPopular.data[1],
				},
				{
					genre: reviewsAllPopular.genre,
					type: reviewsAllPopular.type,
					data: reviewsAllPopular.data[2],
				},
				{
					genre: reviewsAllPopular.genre,
					type: reviewsAllPopular.type,
					data: reviewsAllPopular.data[3],
				},
				{
					genre: reviewsAllPopular.genre,
					type: reviewsAllPopular.type,
					data: reviewsAllPopular.data[0],
				},
				{
					genre: reviewsRomantic.genre,
					type: reviewsRomantic.type,
					data: reviewsRomantic.data[0],
				},
				{
					genre: reviewsRomantic.genre,
					type: reviewsRomantic.type,
					data: reviewsRomantic.data[1],
				},
				{
					genre: reviewsRomantic.genre,
					type: reviewsRomantic.type,
					data: reviewsRomantic.data[3],
				},
				{
					genre: reviewsRomantic.genre,
					type: reviewsRomantic.type,
					data: reviewsRomantic.data[2],
				},
				{
					genre: reviewsPopular.genre,
					type: reviewsPopular.type,
					data: reviewsPopular.data[4],
				},
				{
					genre: reviewsPopular.genre,
					type: reviewsPopular.type,
					data: reviewsPopular.data[5],
				},
				{
					genre: reviewsPopular.genre,
					type: reviewsPopular.type,
					data: reviewsPopular.data[3],
				},
				{
					genre: reviewsPopular.genre,
					type: reviewsPopular.type,
					data: reviewsPopular.data[6],
				},
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

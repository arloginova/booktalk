import popular from './data/articles/popular.json'
import newBooks from './data/articles/new.json'
import atmospheric from './data/articles/atmospheric.json'
import { API_MOCK_REQUEST_TIME_MS } from '../constants'
import { TArticleItem } from '../types/Articles'

type Response = TArticleItem[]

export const articlesCollections = () => {
	return new Promise<Response>((res, rej) => {
		setTimeout(() => {
			res([
				{ genre: popular.genre, type: popular.type, data: popular.data[0] },
				{ genre: popular.genre, type: popular.type, data: popular.data[2] },
				{ genre: popular.genre, type: popular.type, data: popular.data[1] },
				{
					genre: atmospheric.genre,
					type: atmospheric.type,
					data: atmospheric.data[0],
				},
				{
					genre: atmospheric.genre,
					type: atmospheric.type,
					data: atmospheric.data[4],
				},
				{
					genre: atmospheric.genre,
					type: atmospheric.type,
					data: atmospheric.data[1],
				},
				{
					genre: atmospheric.genre,
					type: atmospheric.type,
					data: atmospheric.data[3],
				},
				{ genre: newBooks.genre, type: newBooks.type, data: newBooks.data[1] },
				{ genre: newBooks.genre, type: newBooks.type, data: newBooks.data[2] },
				{ genre: newBooks.genre, type: newBooks.type, data: newBooks.data[3] },
				{ genre: newBooks.genre, type: newBooks.type, data: newBooks.data[0] },
			])
		}, API_MOCK_REQUEST_TIME_MS)
	})
}

type TArticleBookItem = {
	bookTitle: string
	author: string
	description: string
	image: string
	litresLink: string
}
type TArticleData = {
	id: string
	title: string
	introduction: string
	readTime: string
	books: TArticleBookItem[]
}

type TArticleItem = { genre: string; type: string; data: TArticleData }

type TArticlesTypes =
	| 'atmospheric'
	| 'new'
	| 'popular'
	| 'romantic-mood'
	| 'cinema-and-series'
	| 'easy-read'
	| 'bright-emotions'

export {
	type TArticleItem,
	type TArticleData,
	type TArticlesTypes,
	type TArticleBookItem,
}

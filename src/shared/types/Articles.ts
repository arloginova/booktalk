type TArticleBookItem = {
	bookTitle: string
	author: string
	description: string
	image: string
}
type TArticleData = {
	title: string
	introduction: string
	readTime: string
	books: TArticleBookItem[]
}

type TArticleItem = { genre: string; type: string; data: TArticleData }

type TArticlesTypes = 'atmospheric' | 'new' | 'popular' | 'romantic-mood'

export {
	type TArticleItem,
	type TArticleData,
	type TArticlesTypes,
	type TArticleBookItem,
}

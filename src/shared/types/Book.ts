type TBookReview = {
	text: string
	name: string
	grate: number
}

type TBookData = {
	id: string
	slug: string
	author: string
	image: string
	quote: string
	description: string
	review: string
	reviewName: string
	forAdult?: boolean
	readTime: string
	signature?: string
	userReviews: TBookReview[]
	litresLink: string
}
type TBookItem = { genre: string; type: string; data: TBookData }
export { type TBookItem, type TBookData, type TBookReview }

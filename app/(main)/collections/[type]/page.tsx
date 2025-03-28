import { BookTypeScreen } from '@/screens/BookType'
import { FC } from 'react'

interface Props {
	params: Promise<{ type: string }>
}

const ArticleTypePage: FC<Props> = async ({ params }) => {
	const { type } = await params

	return <BookTypeScreen type={type} />
}

export default ArticleTypePage

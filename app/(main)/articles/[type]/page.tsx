import { ArticleTypeScreen } from '@/screens/ArticleType'
import { FC } from 'react'

interface Props {
	params: Promise<{ type: string }>
}

const ArticleTypePage: FC<Props> = async ({ params }) => {
	const { type } = await params

	return <ArticleTypeScreen type={type} />
}

export default ArticleTypePage

import { FC } from 'react'
import { ArticleScreen, TDynamicParams } from '@/screens/Article'

interface Props {
	params: Promise<TDynamicParams>
}

const ArticlePage: FC<Props> = async ({ params }) => {
	const dynamic = await params

	return <ArticleScreen params={dynamic} />
}

export default ArticlePage

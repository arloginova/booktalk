import { FC } from 'react'
import { TDynamicParams } from '@/screens/Book'
import { BookScreen } from '@/screens/Book'

interface Props {
	params: Promise<TDynamicParams>
}

const ArticlePage: FC<Props> = async ({ params }) => {
	const dynamic = await params

	return <BookScreen params={dynamic} />
}

export default ArticlePage

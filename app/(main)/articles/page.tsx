import { ArticlesScreen } from '@/screens/Articles'
import { FC } from 'react'

interface Props {
	searchParams: Promise<{ genre?: string }>
}

const ArticlesPage: FC<Props> = async ({ searchParams }) => {
	const params = await searchParams

	return <ArticlesScreen genre={params.genre} />
}

export default ArticlesPage

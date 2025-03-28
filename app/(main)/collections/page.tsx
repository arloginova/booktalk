import { CollectionsScreen } from '@/screens/Collections'
import { FC } from 'react'

interface Props {
	searchParams: Promise<{
		genre?: string
	}>
}

const CollectionsPage: FC<Props> = async ({ searchParams }) => {
	const { genre } = await searchParams

	return <CollectionsScreen genre={genre} />
}

export default CollectionsPage

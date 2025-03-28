import { FC } from 'react'
import { ReviewsScreen } from '@/screens/Reviews/ui'

interface Props {
	searchParams: Promise<{
		genre?: string
	}>

}

const ReviewsPage: FC<Props> = async ({ searchParams }) => {
	const { genre } = await searchParams
	return (
		<ReviewsScreen genre={genre} />
	)
}

export default ReviewsPage 
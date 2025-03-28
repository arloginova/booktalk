import { FC } from 'react'
import { ReviewScreen, TDynamicParams } from '@/screens/Review'

interface Props {
	params: Promise<TDynamicParams>
}

const ReviewsPage: FC<Props> = async ({ params }) => {
	const dynamic = await params

	return <ReviewScreen params={dynamic} />
}

export default ReviewsPage

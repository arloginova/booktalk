import { ReviewsTypeScreen } from '@/screens/ReviewsType'
import { FC } from 'react'

interface Props {
	params: Promise<{ type: string }>

}

const ReviewsTypePage: FC<Props> = async ({ params }) => {
	const { type } = await params
	return (
		<ReviewsTypeScreen type={type} />
	)
}

export default ReviewsTypePage 
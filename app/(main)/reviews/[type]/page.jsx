import { ReviewsTypeScreen } from '@/screens/ReviewsType';

const ReviewsTypePage = async ({ params }) => {
	const { type } = await params;
	return (
		<ReviewsTypeScreen type={type} />
	);
};

export default ReviewsTypePage;
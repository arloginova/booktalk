import React from 'react';
import { ReviewScreen } from '@/screens/Review';

const ReviewsPage = async ({ params }) => {
	const dynamic = await params;

	return <ReviewScreen params={dynamic} />;
};

export default ReviewsPage;
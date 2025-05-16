import React from 'react';
import { ReviewsScreen } from '@/screens/Reviews/ui';

const ReviewsPage = async ({ searchParams }) => {
	const { genre } = await searchParams;
	return (
		<ReviewsScreen genre={genre} />
	);
}

export default ReviewsPage;
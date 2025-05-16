'use client';
import { useQuery } from '@tanstack/react-query';
import {
	detectivesReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes';
import { EnRoutes } from '@/shared/constants';
import { SliderReviews } from '@/widgets/SliderReviews';

const Popular = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: detectivesReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	});

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfuhhhhhhhhhhhfuefe',
				prev: 'asoiddddddsiadiwqdqwiud',
			}}
			title={detectivesReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popularBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					detectivesReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
};

export { Popular };
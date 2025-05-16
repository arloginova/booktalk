'use client';
import { useQuery } from '@tanstack/react-query';
import { romanticReviewsRoutes, EnAllReviewsRoutesKeys } from '../../constants/routes';
import { EnRoutes } from '@/shared/constants';
import { SliderReviews } from '@/widgets/SliderReviews';

const Popular = ({ className }) => {
	const popularBooks = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.popular],
		queryFn: romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].queryFn,
	});

	return (
		<SliderReviews
			buttonsID={{
				next: 'gbweyfgiuewiugfewuhfewfewuhfewfwe',
				prev: 'zxcxzczxcxcxcxvfvffgf',
			}}
			title={romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].title}
			reviews={popularBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					romanticReviewsRoutes[EnAllReviewsRoutesKeys.popular].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
};

export { Popular };
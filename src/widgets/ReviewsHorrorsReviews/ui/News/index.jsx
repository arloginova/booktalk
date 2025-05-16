'use client';
import { useQuery } from '@tanstack/react-query';
import { EnRoutes } from '@/shared/constants';
import {
	horrorsReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes';
import { SliderReviews } from '@/widgets/SliderReviews';

const New = ({ className }) => {
	const news = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys.new],
		queryFn: horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].queryFn,
	});

	return (
		<SliderReviews
			buttonsID={{
				next: 'ugeuigeivbuernv',
				prev: 'rnvnfdnvfdsiuvcdsciniwc',
			}}
			title={horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].title}
			reviews={news.data}
			className={className}
			headLink={{
				href: `${EnRoutes.reviews}/${
					horrorsReviewsRoutes[EnAllReviewsRoutesKeys.new].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
}

export { New };
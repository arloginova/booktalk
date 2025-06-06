'use client';
import { useQuery } from '@tanstack/react-query';
import { EnRoutes } from '@/shared/constants';
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes';
import { SliderReviews } from '@/widgets/SliderReviews';

const Popular = ({ className }) => {
	const popular = useQuery({
		queryKey: ['reviews', EnAllReviewsRoutesKeys['all-popular']],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys['all-popular']].queryFn,
	});

	return (
		<SliderReviews
			buttonsID={{
				next: 'dsdsfddcnsnvcsv',
				prev: 'dcijscifoewoifdeoijfewfoij',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys['all-popular']].title}
			reviews={popular.data}
			className={className}
			redirectOverrideType={
				allReviewsRoutes[EnAllReviewsRoutesKeys['all-popular']].href
			}
			headLink={{
				href: `${EnRoutes.reviews}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys['all-popular']].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
}

export { Popular };
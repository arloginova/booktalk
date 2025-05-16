'use client';
import { useQuery } from '@tanstack/react-query';
import { EnRoutes } from '@/shared/constants';
import {
	allReviewsRoutes,
	EnAllReviewsRoutesKeys,
} from '../../constants/routes';
import { SliderBooks } from '@/widgets/SliderBooks';

const HeroWay = ({ className }) => {
	const heroWay = useQuery({
		queryKey: ['collections', EnAllReviewsRoutesKeys.heroWay],
		queryFn: allReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].queryFn,
	});

	return (
		<SliderBooks
			buttonsID={{
				next: 'cdiciddiuqwfiueqfieiufeiufei',
				prev: 'dweuqfrgorgourgvsyhidiwq',
			}}
			title={allReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].title}
			books={heroWay.data}
			className={className}
			headLink={{
				href: `${EnRoutes.collections}/${
					allReviewsRoutes[EnAllReviewsRoutesKeys.heroWay].href
				}`,
				text: 'Подробнее',
			}}
		/>
	);
};

export { HeroWay };
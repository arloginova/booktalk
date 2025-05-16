'use client';
import { useQuery } from '@tanstack/react-query';
import { articlesRomanticMood } from '@/shared/api/articles';
import { SliderArticles } from '@/widgets/SliderArticles';
import { EnRoutes } from '@/shared/constants';
import { allReviewsRoutes } from '../../constants/routes';

const RomanticMood = ({ className }) => {
	const romanticMood = useQuery({
		queryKey: ['articles', 'romantic mood'],
		queryFn: articlesRomanticMood,
	});

	return (
		<SliderArticles
			buttonsID={{
				next: 'kogggggggdokdsfkoewokfeokwfoekwf',
				prev: 'dqwwsqdwpqdswqdwqdokwqkodwqkodwq',
			}}
			title='романтичное настроение'
			articles={romanticMood.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['romantic-mood'].href}`,
				text: 'Подробнее',
			}}
		/>
	);
};

export { RomanticMood };
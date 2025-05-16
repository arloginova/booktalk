'use client'
import { useQuery } from '@tanstack/react-query'
import { articlesCinemaAndSeries } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { allReviewsRoutes } from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'

const CinemaAndSeries = ({ className }) => {
	const cinemaAndSeriesBooks = useQuery({
		queryKey: ['articles', 'cinemaAndSeries'],
		queryFn: articlesCinemaAndSeries,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'oiifgodgpoiffpepifeqpdq',
				prev: 'dfuhew9f89hf9wq388hf9f8',
			}}
			title='Кино и сериалы'
			articles={cinemaAndSeriesBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['cinema-and-series'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { CinemaAndSeries }
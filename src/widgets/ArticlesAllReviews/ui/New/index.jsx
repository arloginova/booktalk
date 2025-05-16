'use client'
import { useQuery } from '@tanstack/react-query'
import { articlesNews } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { allReviewsRoutes } from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'

const New = ({ className }) => {
	const newBooks = useQuery({
		queryKey: ['articles', 'new'],
		queryFn: articlesNews,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'gkopfgkdckwckmwemcowcowwoiewifwoi',
				prev: 'dsaijcoidqiwdijwqijdowqoifdqwijw',
			}}
			title='новинки'
			articles={newBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['new'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { New }
'use client'
import { useQuery } from '@tanstack/react-query'
import { articlesPopular } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '../../constants/routes'

const Popular = ({ className }) => {
	const popular = useQuery({
		queryKey: ['articles', 'popular'],
		queryFn: articlesPopular,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'wqewqwqewqegrhtjytkukinvbbfvvc',
				prev: 'dsajasdasoidsapfoiewfgoidjwcod',
			}}
			title='популярное'
			articles={popular.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['popular'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Popular }
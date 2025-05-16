'use client'
import { useQuery } from '@tanstack/react-query'
import { articlesAtmospheric } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '../../constants/routes'

const Atmospheric = ({ className }) => {
	const atmospheric = useQuery({
		queryKey: ['articles', 'atmospheric'],
		queryFn: articlesAtmospheric,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'qwdwqdscvdgfhjghdfgf',
				prev: 'rtijgreoigvriofojioediwqowq',
			}}
			title='атмосферные'
			articles={atmospheric.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['atmospheric'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { Atmospheric }
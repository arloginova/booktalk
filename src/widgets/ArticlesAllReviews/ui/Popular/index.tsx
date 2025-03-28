'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { articlesPopular } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '../../constants/routes'

interface Props extends TClassName {}

const Popular: FC<Props> = ({ className }) => {
	const popular = useQuery({
		queryKey: ['articles', 'popular'],
		queryFn: articlesPopular,
	})

	return (
		<SliderArticles
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

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { articlesNews } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '../../constants/routes'

interface Props extends TClassName {}

const Atmospheric: FC<Props> = ({ className }) => {
	const atmospheric = useQuery({
		queryKey: ['articles', 'atmospheric'],
		queryFn: articlesNews,
	})

	return (
		<SliderArticles
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

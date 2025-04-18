'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { useQuery } from '@tanstack/react-query'
import { articlesEasyRead } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { allReviewsRoutes } from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'

interface Props extends TClassName {}

const EasyRead: FC<Props> = ({ className }) => {
	const easyReadBooks = useQuery({
		queryKey: ['articles', 'easyRead'],
		queryFn: articlesEasyRead,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'fopkdgpohprthptpogtr',
				prev: 'a984f98w48f9ffrgooiwoif',
			}}
			title='Легкое чтение'
			articles={easyReadBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['easy-read'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { EasyRead }

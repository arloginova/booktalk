'use client'
import React from 'react'
import { SliderArticles } from '@/widgets/SliderArticles'
import { UiGridElemWrapper } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { articlesCollections } from '@/shared/api/articlesCollections'
import { EnRoutes } from '@/shared/constants'

const HomeArticles = ({ className }) => {
	const articles = useQuery({
		queryKey: ['home', 'articles'],
		queryFn: articlesCollections,
	})

	return (
		<UiGridElemWrapper className={className} plaque='Тематические статьи'>
			<SliderArticles
				buttonsID={{
					next: 'fineqifwqiwfpwqpfwqpfwipqfwqfiwq',
					prev: 'mfgiobfiorioeriwocwnoiciowiecici',
				}}
				withMarginTop
				className={''}
				title='Наши тематические статьи'
				articles={articles.data}
				headLink={{
					href: EnRoutes.articles,
				}}
			/>
		</UiGridElemWrapper>
	)
}

export { HomeArticles }
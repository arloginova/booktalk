'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { SliderArticles } from '@/widgets/SliderArticles'
import { UiGridElemWrapper } from '@/shared/ui'
import { useQuery } from '@tanstack/react-query'
import { articlesCollections } from '@/shared/api/articlesCollections'

interface Props extends TClassName {}

const HomeArticles: FC<Props> = ({ className }) => {
	const articles = useQuery({
		queryKey: ['home', 'articles'],
		queryFn: articlesCollections,
	})

	return (
		<UiGridElemWrapper className={className} plaque='Тематические статьи'>
			<SliderArticles
				withMarginTop
				className={''}
				title='Наши тематические статьи'
				articles={articles.data}
			/>
		</UiGridElemWrapper>
	)
}

export { HomeArticles }

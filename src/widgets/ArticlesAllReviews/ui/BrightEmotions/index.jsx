'use client'
import { useQuery } from '@tanstack/react-query'
import { articlesBrightEmotions } from '@/shared/api/articles'
import { SliderArticles } from '@/widgets/SliderArticles'
import { allReviewsRoutes } from '../../constants/routes'
import { EnRoutes } from '@/shared/constants'

const BrightEmotions = ({ className }) => {
	const brightEmotionsBooks = useQuery({
		queryKey: ['articles', 'brightEmotions'],
		queryFn: articlesBrightEmotions,
	})

	return (
		<SliderArticles
			buttonsID={{
				next: 'gkopfgkdckwckmwemcowcowwoiewifwoi',
				prev: 'dsaijcoidqiwdijwqijdowqoifdqwijw',
			}}
			title='Яркие эмоции'
			articles={brightEmotionsBooks.data}
			className={className}
			headLink={{
				href: `${EnRoutes.articles}${allReviewsRoutes['bright-emotions'].href}`,
				text: 'Подробнее',
			}}
		/>
	)
}

export { BrightEmotions }
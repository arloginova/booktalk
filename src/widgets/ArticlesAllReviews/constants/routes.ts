import {
	articlesAtmospheric,
	articlesNews,
	articlesOurChoice,
	articlesPopular,
	articlesRomanticMood,
} from '@/shared/api/articles'
import { TArticleItem } from '@/shared/types/Articles'

const allReviewsRoutes: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TArticleItem[]> }
> = {
	new: {
		href: '/new',
		title: 'новинки',
		queryFn: articlesNews,
	},
	popular: {
		href: '/popular',
		title: 'популярные',
		queryFn: articlesPopular,
	},
	atmospheric: {
		href: '/atmospheric',
		title: 'атмосферные',
		queryFn: articlesAtmospheric,
	},
	'romantic-mood': {
		href: '/romantic-mood',
		title: 'романтическое настроение',
		queryFn: articlesRomanticMood,
	},
	'our-choice': {
		href: '/our-choice',
		title: 'Наш выбор',
		//@ts-ignore
		queryFn: articlesOurChoice,
	},
}

export { allReviewsRoutes }

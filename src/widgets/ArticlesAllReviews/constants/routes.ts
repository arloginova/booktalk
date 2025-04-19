import {
	articlesAtmospheric,
	articlesBrightEmotions,
	articlesCinemaAndSeries,
	articlesEasyRead,
	articlesNews,
	articlesOurChoice,
	articlesOurChoiceSecond,
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
	'our-choice-second': {
		href: '/our-choice-second',
		title: 'Наш выбор',
		//@ts-ignore
		queryFn: articlesOurChoiceSecond,
	},
	'cinema-and-series': {
		href: '/cinema-and-series',
		title: 'Кино и сериалы',
		queryFn: articlesCinemaAndSeries,
	},
	'easy-read': {
		href: '/easy-read',
		title: 'Легкое чтение',
		queryFn: articlesEasyRead,
	},
	'bright-emotions': {
		href: '/bright-emotions',
		title: 'Яркие эмоции',
		queryFn: articlesBrightEmotions,
	},
}

export { allReviewsRoutes }

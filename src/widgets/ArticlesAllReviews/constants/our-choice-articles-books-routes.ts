import {
	articlesOurChoice,
	articlesOurChoiceSecond,
} from '@/shared/api/articles'
import { TArticleItem } from '@/shared/types/Articles'

export const ourChoiceArticlesBooks: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TArticleItem[]> }
> = {
	'articles-our-choice': {
		href: '/articles-our-choice',
		title: 'Наш выбор',
		//@ts-ignore
		queryFn: articlesOurChoice,
	},
	'articles-our-choice-second': {
		href: '/articles-our-choice-second',
		title: 'Наш выбор',
		//@ts-ignore
		queryFn: articlesOurChoiceSecond,
	},
}

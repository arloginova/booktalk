import {
	articlesOurChoice,
	articlesOurChoiceSecond,
} from '@/shared/api/articles'
import { TArticleItem } from '@/shared/types/Articles'
import { TBookItem } from '@/shared/types/Book'

export const ourChoiceArticlesBooks: Record<
	string,
	{ href: string; title: string; queryFn: () => Promise<TBookItem[]> }
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

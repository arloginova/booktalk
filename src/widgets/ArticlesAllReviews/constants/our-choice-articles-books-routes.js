import {
	articlesOurChoice,
	articlesOurChoiceSecond,
} from '@/shared/api/articles';

export const ourChoiceArticlesBooks = {
	'articles-our-choice': {
		href: '/articles-our-choice',
		title: 'Наш выбор',
		queryFn: articlesOurChoice,
	},
	'articles-our-choice-second': {
		href: '/articles-our-choice-second',
		title: 'Наш выбор',
		queryFn: articlesOurChoiceSecond,
	},
};
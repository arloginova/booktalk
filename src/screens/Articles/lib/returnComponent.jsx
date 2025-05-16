import { ArticlesAllReviews } from '@/widgets/ArticlesAllReviews';

export const returnComponent = (genre) => {
	let component = null;

	switch (genre) {
		case undefined:
			component = <ArticlesAllReviews />;
			break;
		case EnCurrentTab.detectives:
			component = <>Нет данных</>;
			break;
		case EnCurrentTab.fantasy:
			component = <>Нет данных</>;
			break;
		case EnCurrentTab.horrors:
			component = <>Нет данных</>;
			break;
		case EnCurrentTab.notFiction:
			component = <>Нет данных</>;
			break;
		case EnCurrentTab.romantic:
			component = <>Нет данных</>;
			break;
	}
	return component;
};
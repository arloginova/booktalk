enum EnRoutes {
	tests = '/test',
	collections = '/collections',
	articles = '/articles',
	reviews = '/reviews',
	home = '/',
}

const HEADER_NAVIGATION = [
	{
		text: 'Тест',
		path: EnRoutes.tests,
	},
	{
		text: 'Подборки',
		path: EnRoutes.collections,
	},
	{
		text: 'Статьи',
		path: EnRoutes.articles,
	},
	{
		text: 'Обзоры',
		path: EnRoutes.reviews,
	},
] as const

export { EnRoutes, HEADER_NAVIGATION }

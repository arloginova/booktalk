import { ArticlesScreen } from '@/screens/Articles';

const ArticlesPage = async ({ searchParams }) => {
	const params = await searchParams;

	return <ArticlesScreen genre={params.genre} />;
};

export default ArticlesPage;
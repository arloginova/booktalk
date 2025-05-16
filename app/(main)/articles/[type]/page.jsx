import { ArticleTypeScreen } from '@/screens/ArticleType';

const ArticleTypePage = async ({ params }) => {
	const { type } = await params;

	return <ArticleTypeScreen type={type} />;
};

export default ArticleTypePage;
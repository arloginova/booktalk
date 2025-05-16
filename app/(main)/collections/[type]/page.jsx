import { BookTypeScreen } from '@/screens/BookType';

const ArticleTypePage = async ({ params }) => {
	const { type } = await params;

	return <BookTypeScreen type={type} />;
};

export default ArticleTypePage;
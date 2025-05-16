import React from 'react';
import { ArticleScreen } from '@/screens/Article';

const ArticlePage = async ({ params }) => {
	const dynamic = await params;

	return <ArticleScreen params={dynamic} />;
};

export default ArticlePage;
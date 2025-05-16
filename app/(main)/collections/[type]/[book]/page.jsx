import React from 'react';
import { BookScreen } from '@/screens/Book';

const ArticlePage = async ({ params }) => {
	const dynamic = await params;

	return <BookScreen params={dynamic} />;
};

export default ArticlePage;
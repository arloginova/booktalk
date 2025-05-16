'use client';
import React from 'react';
import { cn } from '@/shared/lib';
import { UiGridElemWrapper } from '@/shared/ui';
import { SliderBooks } from '@/widgets/SliderBooks';
import { useQuery } from '@tanstack/react-query';
import { booksCollections } from '@/shared/api/booksCollections';
import { EnRoutes } from '@/shared/constants';

const wrapperCls = 'bg-whiteMain p-main';

const HomeBooks = ({ className }) => {
	const booksQuery = useQuery({
		queryKey: ['news', 'books'],
		queryFn: booksCollections,
	});

	return (
		<UiGridElemWrapper className={cn(wrapperCls, className)} plaque='Подборки'>
			<SliderBooks
				withMarginTop
				books={booksQuery.data}
				title='Новинки книг'
				headLink={{
					href: EnRoutes.collections,
				}}
				buttonsID={{
					next: 'drtwqdrtwqudwudywdgy',
					prev: 'bdknfjdbfkjdbkfdbkjfd',
				}}
			/>
		</UiGridElemWrapper>
	);
};

export { HomeBooks };
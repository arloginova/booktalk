import React from 'react';
import { UiGridElemWrapper } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { SliderBooks } from '@/widgets/SliderBooks';
import { booksCollections } from '@/shared/api/booksCollections';

const wrapperCls = '';
const sliderCls = '';

const BookCollections = async ({ className }) => {
	const data = await booksCollections();

	return (
		<UiGridElemWrapper plaque='Подборки' className={cn(wrapperCls, className)}>
			<SliderBooks
				buttonsID={{
					next: 'fqidiofoifedfe',
					prev: 'vdsuiuewfuiewfiuewfgurogr',
				}}
				withMarginTop
				title='Вам может понравится'
				books={data}
				className={sliderCls}
			/>
		</UiGridElemWrapper>
	);
};

export { BookCollections };
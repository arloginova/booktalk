import { notFound } from 'next/navigation';
import { returnComponent } from '../lib/returnComponent';
import { EnCurrentTab } from '../types/tabs';
import { cn } from '@/shared/lib';
import { UiGridElemWrapper } from '@/shared/ui';

const wrapperCls = 'my-[var(--main-blocks-gap)]  ';

const ArticlesScreen = ({ className, genre }) => {
	if (
		genre !== EnCurrentTab.all &&
		genre !== EnCurrentTab.detectives &&
		genre !== EnCurrentTab.fantasy &&
		genre !== EnCurrentTab.horrors &&
		genre !== EnCurrentTab.notFiction &&
		genre !== EnCurrentTab.romantic &&
		genre !== undefined
	) {
		notFound();
	}
	const renderComponent = returnComponent(genre);

	return (
		<UiGridElemWrapper
			Tag='main'
			plaque='тематические статьи'
			className={cn(wrapperCls, className)}
		>
			<p className='mt-35' />
			{renderComponent}
		</UiGridElemWrapper>
	);
};

export { ArticlesScreen };
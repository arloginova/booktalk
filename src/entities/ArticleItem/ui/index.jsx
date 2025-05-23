import { BookIcon } from '@/shared/icons';
import { cn, endingsFormatter } from '@/shared/lib';
import {
	UiArticleTheme,
	UiSkeleton,
	UiTypography,
} from '@/shared/ui';

const wrapperCls = 'flex flex-col';
const decorBgCls = 'lg-low:h-[185px] h-[150px] w-full relative grow';
const infoCls =
	'w-full flex items-center justify-between [&>span]:flex [&>span]:items-center text-greyExtra [&>span]:gap-x-1 leading-none mt-4 relative ';

const ArticleItem = ({
						 className,
						 backgroundImageClassName,
						 books,
						 readTime,
						 theme,
						 title,
						 hasSkeleton,
						 themeClassName,
						 withoutText,
					 }) => {
	return (
		<div className={cn(wrapperCls, className)}>
			<UiArticleTheme
				backgroundImageClassName={backgroundImageClassName}
				theme={hasSkeleton ? 'grey-cloud-4' : theme}
				className={cn(decorBgCls, themeClassName)}
			>
				{hasSkeleton ? (
					<UiSkeleton />
				) : (
					<UiTypography font='Raleway-M' tag='h2' className='line-clamp-2'>
						{title}
					</UiTypography>
				)}
			</UiArticleTheme>

			{!withoutText ? (
				<UiTypography font='Raleway-M' tag='div' className={infoCls}>
					{hasSkeleton ? (
						<UiSkeleton isAbsolute={false}>
							<UiTypography font='Muller-R' tag='p'>
								skeleton
							</UiTypography>
						</UiSkeleton>
					) : (
						<>
                            <span>
                                <BookIcon fill='var(--color-greyExtra)' /> {readTime}
                            </span>
							<span>
                                {books.length}{' '}
								{endingsFormatter(books.length, [
									'Книга',
									'Книги',
									'Книг',
								])}
                            </span>
						</>
					)}
				</UiTypography>
			) : null}
		</div>
	);
};

export { ArticleItem };
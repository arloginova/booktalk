import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { BookIcon } from '@/shared/icons'
import { cn, endingsFormatter } from '@/shared/lib'
import {
	TUiArticleTheme,
	UiArticleTheme,
	UiSkeleton,
	UiTypography,
} from '@/shared/ui'
import { TArticleData } from '@/shared/types/Articles'

const wrapperCls = 'flex flex-col'
const decorBgCls = 'lg-low:h-[185px] h-[150px] w-full relative grow'
const infoCls =
	'w-full flex items-center justify-between [&>span]:flex [&>span]:items-center text-greyExtra [&>span]:gap-x-1 leading-none mt-4 relative'

type TWithoutSkeleton = {
	theme?: TUiArticleTheme
	hasSkeleton?: never
	backgroundImageClassName?: string
} & TClassName &
	Partial<Pick<TArticleData, 'readTime' | 'title' | 'books'>>
type TWithSkeleton = {
	theme?: never
	hasSkeleton?: boolean
	backgroundImageClassName?: string
} & TClassName &
	Partial<Pick<TArticleData, 'readTime' | 'title' | 'books'>>

type Props = TWithSkeleton | TWithoutSkeleton

const ArticleItem: FC<Props> = ({
	className, backgroundImageClassName,
	books,
	readTime,
	theme,
	title,
	hasSkeleton,
}) => {
	return (
		<div className={cn(wrapperCls, className)}>
			<UiArticleTheme
				backgroundImageClassName={backgroundImageClassName}
				theme={hasSkeleton ? 'grey-cloud-4' : (theme as TUiArticleTheme)}
				className={decorBgCls}
			>
				{hasSkeleton ? (
					<UiSkeleton />
				) : (
					<UiTypography font='Raleway-SB' tag='h2' className='line-clamp-3'>
						{title}
					</UiTypography>
				)}
			</UiArticleTheme>

			<UiTypography font='Raleway-SB' tag='div' className={infoCls}>
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
							{(books as TArticleData['books']).length}{' '}
							{endingsFormatter((books as TArticleData['books']).length, [
								'Книга',
								'Книги',
								'Книг',
							])}
						</span>
					</>
				)}
			</UiTypography>
		</div>
	)
}

export { ArticleItem }

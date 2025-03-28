import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiGridElemWrapper, UiTypography } from '@/shared/ui'
import { TDynamicParams } from '@/screens/Article'
import { articlesFindOneBySlugRequest } from '@/shared/api/articles'
import { TArticlesTypes } from '@/shared/types/Articles'
import { notFound } from 'next/navigation'
import { cn } from '@/shared/lib'
import { ArticleBookItem } from '@/entities/ArticleBookItem'

const wrapperCls = ''
const titleCls = 'mt-[110px] uppercase lg-low:text-2xl'
const introductionCls =
	'lg-low:text-xl text-sm text-sm lg-low:mt-5 mt-3 lg-low:mb-12 mb-7'
const contentCls = 'lg-low:max-w-[680px] max-w-[470px] mx-auto'
const groupCls = 'flex flex-col lg-low:gap-y-10 gap-y-6'

interface Props extends TClassName {
	params: TDynamicParams
}

const ArticleInfo: FC<Props> = async ({
	className,
	params: { article, type },
}) => {
	const responseData = await articlesFindOneBySlugRequest(
		type as TArticlesTypes
	)(article)

	if (!responseData) notFound()

	return (
		<UiGridElemWrapper
			Tag='section'
			className={cn(wrapperCls, className)}
			plaque='Рецензии'
		>
			<div className={contentCls}>
				<UiTypography font='Raleway-SB' tag='h1' className={titleCls}>
					{responseData.data.title}
				</UiTypography>
				<UiTypography font='Raleway-SB' tag='h1' className={introductionCls}>
					{responseData.data.introduction}
				</UiTypography>
				<ul className={groupCls}>
					{responseData.data.books.map(data => (
						<ArticleBookItem {...data} key={data.bookTitle} Tag='li' />
					))}
				</ul>
			</div>
		</UiGridElemWrapper>
	)
}

export { ArticleInfo }

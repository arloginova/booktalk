import { articlesFindOneBySlugRequest } from '@/shared/api/articles'
import { notFound } from 'next/navigation'
import { cn } from '@/shared/lib'
import { ArticleBookItem } from '@/entities/ArticleBookItem'
import { UiGridElemWrapper, UiTypography } from '@/shared/ui'

const wrapperCls = ''
const titleCls = 'mt-[110px] uppercase lg-low:text-2xl'
const introductionCls =
	'lg-low:text-xl text-sm text-sm lg-low:mt-5 mt-3 lg-low:mb-12 mb-7'
const contentCls = 'lg-low:max-w-[680px] max-w-[470px] mx-auto'
const groupCls = 'flex flex-col lg-low:gap-y-10 gap-y-6'

const ArticleInfo = async ({ className, params: { article, type } }) => {
	const responseData = await articlesFindOneBySlugRequest(
		type
	)(article)

	if (!responseData) notFound()

	return (
		<UiGridElemWrapper
			Tag='section'
			className={cn(wrapperCls, className)}
			plaque='Тематические статьи'
		>
			<div className={contentCls}>
				<UiTypography font='Raleway-M' tag='h1' className={titleCls}>
					{responseData.data.title}
				</UiTypography>
				<UiTypography font='Raleway-M' tag='p' className={introductionCls}>
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
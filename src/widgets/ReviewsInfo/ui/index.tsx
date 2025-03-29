import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiGridElemWrapper, UiTypography } from '@/shared/ui'
import { notFound } from 'next/navigation'
import { cn } from '@/shared/lib'
import { TDynamicParams } from '@/screens/Review'
import { EnReviewsTypes, reviewsFindOneBySlugRequest } from '@/shared/api/reviewsList'
import { ArticleBookItem } from '@/entities/ArticleBookItem'

const wrapperCls = ''
const titleCls = 'uppercase lg-low:text-2xl lg-low:mt-9 mt-8'
const introductionCls =
	'lg-low:text-xl text-sm text-sm lg-low:mt-5 mt-3 lg-low:mb-12 mb-7'
const contentCls = 'lg-low:max-w-[680px] max-w-[470px] mx-auto'

interface Props extends TClassName {
	params: TDynamicParams
}

const ReviewsInfo: FC<Props> = async ({
	className,
	params: { review, type },
}) => {
	const responseData = await reviewsFindOneBySlugRequest(
		type as EnReviewsTypes
	)(review)

	if (!responseData) notFound()

	return (
		<UiGridElemWrapper
			Tag='section'
			className={cn(wrapperCls, className)}
			plaque={['Рецензии', responseData.genre]}
		>
			<div className={contentCls}>
				<ArticleBookItem
					author={responseData.data.author}
					bookTitle={responseData.data.slug}
					image={responseData.data.image}
					className='mt-[110px] '
				/>
				{responseData.data.quote ? <UiTypography className='lg-low:text-lg text-xs p-main lg-low:rounded-[20px] rounded-2xl text-center bg-greyBackground leading-[130%] lg-low:mt-10 mt-8' font="Raleway-M" tag="blockquote">«{responseData.data.quote.replace('»', '').replace('«', '')}»</UiTypography> : null}
				<UiTypography font='Raleway-SB' tag='h1' className={titleCls}>
					{responseData.data.slug}
				</UiTypography>
				<UiTypography font='Raleway-M' tag='h1' className={introductionCls}>
					{responseData.data.review}
				</UiTypography>

			</div>
		</UiGridElemWrapper>
	)
}

export { ReviewsInfo }

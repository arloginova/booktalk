import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiGridElemWrapper, UiTypography } from '@/shared/ui'
import { notFound } from 'next/navigation'
import { cn } from '@/shared/lib'
import { TDynamicParams } from '@/screens/Book'
import {
	booksFindOneBySlugRequest,
	EnBookTypes,
} from '@/shared/api/booksCollections'
import { Image } from './Image'
import { Info } from './Info'
import { Reviews } from './Reviews'

const wrapperCls = ''
const contentCls =
	'flex lg-low:gap-x-8 gap-x-5 mt-35 md-low:flex-row flex-col gap-y-8'
const reviewsCls = 'max-w-[650px]'
const infoCls = ''
const reviewsContentCls = 'lg-low:mt-12 mt-6'
const imageCls = 'md-low:mx-0 mx-auto'

interface Props extends TClassName {
	params: TDynamicParams
}

const BookInfo: FC<Props> = async ({ className, params: { book, type } }) => {
	const responseData = await booksFindOneBySlugRequest(
		type as unknown as EnBookTypes
	)(book)

	if (!responseData) notFound()

	const {
		data: { author, image, slug, description, litresLink, userReviews },
	} = responseData

	return (
		<UiGridElemWrapper
			Tag='section'
			className={cn(wrapperCls, className)}
			plaque={['Книги', responseData.genre]}
		>
			<div className={contentCls}>
				<Image
					image={image}
					slug={slug}
					className={imageCls}
					litresLink={litresLink}
				/>
				<div className={reviewsCls}>
					<Info
						reviewGrate={userReviews[0]}
						author={author}
						description={description}
						slug={slug}
						className={infoCls}
					/>
					<Reviews className={reviewsContentCls} userReviews={userReviews} />
				</div>
			</div>
		</UiGridElemWrapper>
	)
}

export { BookInfo }

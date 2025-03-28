'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/shared/lib'
import { TBookItem } from '@/shared/types/Book'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { BookItem } from '@/entities/BookItem'
import { TUiMainBlockWithTitleProps, UiMainBlockWithTitle } from '@/shared/ui'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { reviewsRoutes } from '@/screens/BookType'

const wrapperCls = ''
const sliderCls = ''
const itemCls = 'lg-low:w-[210px] w-[160px]'
const slideCls = '!w-auto'

interface Props extends TClassName {
	title?: string
	books?: TBookItem[]
	withMarginTop?: boolean
	headLink?: TUiMainBlockWithTitleProps['headLink']
}

const SliderBooks: FC<Props> = ({
	className,
	books,
	title,
	withMarginTop,
	headLink,
}) => {
	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			headLink={headLink}
			title={title}
			className={cn(wrapperCls, className)}
		>
			<Swiper className={sliderCls} {...sliderConfig()}>
				{!books?.length || !books
					? [...Array(12)].map((_, index) => (
						<SwiperSlide key={index} className={slideCls}>
							<BookItem hasSkeleton className={itemCls} />
						</SwiperSlide>
					))
					: books.map(({ genre, type, data }) => {
						return (
							<SwiperSlide
								className={slideCls}
								key={`${data.slug}${genre}${type}`}
							>
								<Link
									href={`${EnRoutes.collections}/${reviewsRoutes[type]?.href}/${data.slug}`}
								>
									<BookItem {...data} className={itemCls} />
								</Link>
							</SwiperSlide>
						)
					})}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderBooks }

'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/shared/lib'
import { TBookItem } from '@/shared/types/Book'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { BookItem } from '@/entities/BookItem'
import {
	TUiMainBlockWithTitleProps,
	TUiTypographyTextProps,
	UiMainBlockWithTitle,
} from '@/shared/ui'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { reviewsRoutes } from '@/screens/BookType'
import { Navigation } from 'swiper/modules'
import { ArrowIcon } from '@/shared/icons'

const wrapperCls = ''
const sliderCls = ''
const itemCls = 'lg-low:w-[210px] w-[160px]'
const slideCls = '!w-auto'

const REPEAT_BOOKS_ITEMS = 10

interface Props extends TClassName {
	title?: string
	sliderClassName?: string
	books?: TBookItem[]
	withMarginTop?: boolean
	headLink?: TUiMainBlockWithTitleProps['headLink']
	titleFont?: TUiTypographyTextProps['font']
	buttonsID: {
		prev: string
		next: string
	}
}

const SliderBooks: FC<Props> = ({
	className,
	books,
	title,
	withMarginTop,
	headLink,
	titleFont,
	buttonsID,
	sliderClassName,
}) => {
	let curRepeatItemIndex = -1

	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			headLink={headLink}
			title={title}
			titleFont={titleFont}
			className={cn(wrapperCls, className)}
		>
			<div className='relative'>
				<button
					className='absolute -rotate-180 top-[45%] left-0 -translate-1/2 z-10 bg-whiteMain rounded-full'
					id={buttonsID.prev}
				>
					<ArrowIcon />
				</button>
				<Swiper
					className={cn(sliderCls, sliderClassName)}
					{...sliderConfig()}
					modules={[Navigation]}
					navigation={{
						prevEl: `#${buttonsID.prev}`,
						nextEl: `#${buttonsID.next}`,
					}}
				>
					{!books?.length || !books ? (
						[...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<BookItem hasSkeleton className={itemCls} />
							</SwiperSlide>
						))
					) : (
						<>
							{books.map(({ genre, type, data }) => {
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
							{books.length < REPEAT_BOOKS_ITEMS
								? [...Array(REPEAT_BOOKS_ITEMS)].map((_, index) => {
										if (curRepeatItemIndex + 2 > books.length) {
											curRepeatItemIndex = 0
										} else {
											curRepeatItemIndex++
										}

										const { data, genre, type } = books[curRepeatItemIndex]

										return (
											<SwiperSlide
												className={slideCls}
												key={`${data.slug}${genre}${type}${index}`}
											>
												<Link
													href={`${EnRoutes.collections}/${reviewsRoutes[type]?.href}/${data.slug}`}
												>
													<BookItem {...data} className={itemCls} />
												</Link>
											</SwiperSlide>
										)
								  })
								: null}
						</>
					)}
				</Swiper>
				<button
					className='absolute bg-whiteMain rounded-full top-[45%] right-0 -translate-y-1/2 translate-x-1/2 z-10'
					id={buttonsID.next}
				>
					<ArrowIcon />
				</button>
			</div>
		</UiMainBlockWithTitle>
	)
}

export { SliderBooks }

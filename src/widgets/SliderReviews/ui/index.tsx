'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { TBookItem } from '@/shared/types/Book'
import { cn } from '@/shared/lib'
import {
	TUiMainBlockWithTitleProps,
	UiMainBlockWithTitle,
	UiTypography,
} from '@/shared/ui'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { ReviewItem } from '@/entities/ReviewItem'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { ArrowIcon } from '@/shared/icons'
import { Navigation } from 'swiper/modules'

const wrapperCls = ''
const sliderCls = ''
const slideCls = '!w-auto'
const itemCls = 'lg-low:w-[300px] w-[250px]'

const REPEAT_REVIEWS_ITEMS = 7

interface Props extends TClassName {
	reviews?: TBookItem[]
	title: string
	withMarginTop?: boolean
	headLink?: TUiMainBlockWithTitleProps['headLink']
	redirectOverrideType?: string
	buttonsID: {
		prev: string
		next: string
	}
}

const SliderReviews: FC<Props> = ({
	reviews,
	title,
	className,
	withMarginTop,
	headLink,
	redirectOverrideType,
	buttonsID,
}) => {
	let curRepeatItemIndex = -1

	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			headLink={headLink}
			title={title}
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
					{...sliderConfig()}
					{...sliderConfig()}
					modules={[Navigation]}
					navigation={{
						prevEl: `#${buttonsID.prev}`,
						nextEl: `#${buttonsID.next}`,
					}}
					className={sliderCls}
				>
					{!reviews?.length || !reviews ? (
						[...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<ReviewItem hasSkeleton className={itemCls} />
							</SwiperSlide>
						))
					) : (
						<>
							{reviews.map(({ genre, type, data }) => {
								return (
									<SwiperSlide
										key={`${data.slug}${genre}${type}`}
										className={slideCls}
									>
										<Link
											href={`${EnRoutes.reviews}/${
												redirectOverrideType || type
											}/${data.slug}`}
										>
											<ReviewItem {...data} className={itemCls} />
										</Link>
									</SwiperSlide>
								)
							})}
							{reviews.length <= REPEAT_REVIEWS_ITEMS
								? [...Array(REPEAT_REVIEWS_ITEMS)].map((_, index) => {
										if (curRepeatItemIndex + 2 > reviews.length) {
											curRepeatItemIndex = 0
										} else {
											curRepeatItemIndex++
										}

										const { data, genre, type } = reviews[curRepeatItemIndex]

										return (
											<SwiperSlide
												key={`${data.slug}${genre}${type}${index}`}
												className={slideCls}
											>
												<Link
													href={`${EnRoutes.reviews}/${
														redirectOverrideType || type
													}/${data.slug}`}
												>
													<ReviewItem {...data} className={itemCls} />
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

export { SliderReviews }

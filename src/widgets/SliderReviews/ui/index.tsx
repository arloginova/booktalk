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
}

const SliderReviews: FC<Props> = ({
	reviews,
	title,
	className,
	withMarginTop,
	headLink, redirectOverrideType
}) => {
	let curRepeatItemIndex = -1

	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			headLink={headLink}
			title={title}
			className={cn(wrapperCls, className)}
		>
			<Swiper {...sliderConfig()} className={sliderCls}>
				{!reviews?.length || !reviews
					? [...Array(12)].map((_, index) => (
						<SwiperSlide key={index} className={slideCls}>
							<ReviewItem hasSkeleton className={itemCls} />
						</SwiperSlide>
					))
					: <>
						{reviews.map(({ genre, type, data }) => {
							return (
								<SwiperSlide
									key={`${data.slug}${genre}${type}`}
									className={slideCls}
								>
									<Link href={`${EnRoutes.reviews}/${redirectOverrideType || type}/${data.slug}`}><ReviewItem {...data} className={itemCls} /></Link>
								</SwiperSlide>
							)
						})}
						{reviews.length <= REPEAT_REVIEWS_ITEMS ?
							[...Array(REPEAT_REVIEWS_ITEMS)].map((_, index) => {
								if (curRepeatItemIndex + 2 > reviews.length) {
									curRepeatItemIndex = 0
								} else {
									curRepeatItemIndex++
								}

								const { data, genre, type } = reviews[curRepeatItemIndex]

								return <SwiperSlide
									key={`${data.slug}${genre}${type}${index}`}
									className={slideCls}
								>
									<Link href={`${EnRoutes.reviews}/${redirectOverrideType || type}/${data.slug}`}><ReviewItem {...data} className={itemCls} /></Link>
								</SwiperSlide>
							})
							: null}
					</>
				}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderReviews }

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
const infoCls = 'mt-3'

const itemSkeletonCls = ''
const itemSkeletonImgCls =
	'lg-mid:aspect-[300/185] aspect-[250/150] bg-greyExtra rounded-[15px]'
const skeletonTextCls = 'bg-greyExtra text-transparent rounded-[10px]'

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
							<div className={itemSkeletonCls}>
								<div className={cn(itemCls, itemSkeletonImgCls)} />
								<div />
								<UiTypography
									className={cn(infoCls, skeletonTextCls)}
									font='Raleway-SB'
									tag='h2'
								>
									skeleton
								</UiTypography>
							</div>
						</SwiperSlide>
					))
					: reviews.map(({ genre, type, data }) => {
						return (
							<SwiperSlide
								key={`${data.slug}${genre}${type}`}
								className={slideCls}
							>
								<Link href={`${EnRoutes.reviews}/${redirectOverrideType || type}/${data.slug}`}><ReviewItem {...data} className={itemCls} /></Link>
							</SwiperSlide>
						)
					})}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderReviews }

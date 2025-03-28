'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/shared/lib'
import { TBookItem } from '@/shared/types/Book'
import {
	TUiMainBlockWithTitleProps,
	UiMainBlockWithTitle,
	UiTypography,
} from '@/shared/ui'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { OurChoiceItem } from '@/entities/OurChoiceItem'

const itemCls = 'lg-low:w-[400px] w-[300px] h-full'
const slideCls = '!w-auto !h-auto'

const itemTitle = 'mt-3 text-xl mb-2 line-clamp-1 uppercase w-full'
const authorCls = 'text-greyExtra text-lg line-clamp-1'

const itemSkeletonImgCls =
	'lg-mid:aspect-[400/325] aspect-[300/245] bg-greyExtra rounded-[15px]'
const skeletonTextCls = 'bg-greyExtra text-transparent rounded-[10px]'

interface Props extends TClassName {
	title: string
	books?: TBookItem[]
	withMarginTop?: boolean
	headLink?: TUiMainBlockWithTitleProps['headLink']
}

const SliderOurChoice: FC<Props> = ({
	className,
	books,
	title,
	withMarginTop,
	headLink,
}) => {
	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			title={title}
			className={className}
			headLink={headLink}
		>
			<Swiper {...sliderConfig()}>
				{!books?.length || !books
					? [...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<div>
									<div className={cn(itemCls, itemSkeletonImgCls)} />
									<div />
									<UiTypography
										className={cn(itemTitle, skeletonTextCls)}
										font='Raleway-SB'
										tag='h2'
									>
										skeleton
									</UiTypography>
									<UiTypography
										className={cn(authorCls, skeletonTextCls)}
										font='Raleway-M'
										tag='h4'
									>
										skeleton
									</UiTypography>
								</div>
							</SwiperSlide>
					  ))
					: books.map(({ genre, type, data }) => (
							<SwiperSlide
								className={slideCls}
								key={`${data.slug}${genre}${type}`}
							>
								<OurChoiceItem {...data} className={itemCls} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderOurChoice }

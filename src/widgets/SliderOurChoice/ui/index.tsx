'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TBookItem } from '@/shared/types/Book'
import {
	TUiMainBlockWithTitleProps,
	UiMainBlockWithTitle,
} from '@/shared/ui'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { OurChoiceItem } from '@/entities/OurChoiceItem'

const itemCls = 'lg-low:w-[400px] w-[300px] h-full'
const slideCls = '!w-auto !h-auto'

const REPEAT_OUR_CHOICE_ITEMS = 4

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

	let curRepeatItemIndex = -1

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
							<OurChoiceItem hasSkeleton className={itemCls} />
						</SwiperSlide>
					))
					:
					<>
						{books.map(({ genre, type, data }) => (
							<SwiperSlide
								className={slideCls}
								key={`${data.slug}${genre}${type}`}
							>
								<OurChoiceItem {...data} className={itemCls} />
							</SwiperSlide>
						))}
						{books.length <= REPEAT_OUR_CHOICE_ITEMS ?
							[...Array(REPEAT_OUR_CHOICE_ITEMS)].map((_, index) => {
								if (curRepeatItemIndex + 2 > books.length) {
									curRepeatItemIndex = 0
								} else {
									curRepeatItemIndex++
								}


								const { data, genre, type } = books[curRepeatItemIndex]


								return <SwiperSlide
									className={slideCls}
									key={`${data.slug}${genre}${type}${index}`}
								>
									<OurChoiceItem {...data} className={itemCls} />
								</SwiperSlide>
							})
							: null}
					</>
				}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderOurChoice }

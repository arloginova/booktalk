'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/shared/lib'
import {
	UiTypography,
	UiMainBlockWithTitle,
	TUiMainBlockWithTitleProps,
} from '@/shared/ui'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { TArticleItem } from '@/shared/types/Articles'
import { CHAIN } from '../constants/renderChain'
import { ArticleItem } from '@/entities/ArticleItem'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '@/widgets/ArticlesAllReviews'

const wrapperCls = ''
const sliderCls = ''
const itemCls = 'lg-low:w-[300px] w-[250px]'
const slideCls = '!w-auto'

interface Props extends TClassName {
	title: string
	articles?: TArticleItem[]
	withMarginTop?: boolean
	headLink?: TUiMainBlockWithTitleProps['headLink']
}

const SliderArticles: FC<Props> = ({
	className,
	articles,
	title,
	withMarginTop,
	headLink,
}) => {
	let curChainItemIndex = -1

	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			headLink={headLink}
			title={title}
			className={cn(wrapperCls, className)}
		>
			<Swiper className={sliderCls} {...sliderConfig()}>
				{!articles?.length || !articles
					? [...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<ArticleItem hasSkeleton className={itemCls} />
							</SwiperSlide>
					  ))
					: articles.map(({ data, genre, type }) => {
							if (curChainItemIndex + 2 > CHAIN.length) {
								curChainItemIndex = 0
							} else {
								curChainItemIndex++
							}

							return (
								<SwiperSlide
									className={slideCls}
									key={`${data.title}${genre}${type}`}
								>
									<Link
										href={`${EnRoutes.articles}${
											allReviewsRoutes[type].href
										}/${data.title.replace('?', '')}`}
									>
										<ArticleItem
											{...data}
											theme={CHAIN[curChainItemIndex]}
											className={itemCls}
										/>
									</Link>
								</SwiperSlide>
							)
					  })}
			</Swiper>
		</UiMainBlockWithTitle>
	)
}

export { SliderArticles }

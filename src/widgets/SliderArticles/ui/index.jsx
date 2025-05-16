'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { cn } from '@/shared/lib'
import {
	UiTypography,
	UiMainBlockWithTitle,
} from '@/shared/ui'
import { sliderConfig } from '../config/slider'
import 'swiper/swiper-bundle.css'
import { ArticleItem } from '@/entities/ArticleItem'
import Link from 'next/link'
import { EnRoutes } from '@/shared/constants'
import { allReviewsRoutes } from '@/widgets/ArticlesAllReviews'
import { ArrowIcon } from '@/shared/icons'
import { Navigation } from 'swiper/modules'
import {CHAIN} from "@/widgets/Header/constants/chain";

const wrapperCls = ''
const sliderCls = ''
const itemCls = 'lg-low:w-[300px] w-[250px]'
const slideCls = '!w-auto'

const REPEAT_ARTICLES_ITEMS = 7

const SliderArticles = ({
							className,
							articles,
							title,
							withMarginTop,
							headLink,
							buttonsID,
						}) => {
	let curRepeatItemIndex = -1
	let curChainItemIndex = -1

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
					className={sliderCls}
					{...sliderConfig()}
					modules={[Navigation]}
					navigation={{
						prevEl: `#${buttonsID.prev}`,
						nextEl: `#${buttonsID.next}`,
					}}
				>
					{!articles?.length || !articles ? (
						[...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<ArticleItem hasSkeleton className={itemCls} />
							</SwiperSlide>
						))
					) : (
						<>
							{articles.map(({ data, genre, type }) => {
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
							{articles.length <= REPEAT_ARTICLES_ITEMS
								? [...Array(REPEAT_ARTICLES_ITEMS)].map((_, index) => {
									if (curChainItemIndex + 2 > CHAIN.length) {
										curChainItemIndex = 0
									} else {
										curChainItemIndex++
									}
									if (curRepeatItemIndex + 2 > articles.length) {
										curRepeatItemIndex = 0
									} else {
										curRepeatItemIndex++
									}

									const { data, genre, type } = articles[curRepeatItemIndex]

									return (
										<SwiperSlide
											className={slideCls}
											key={`${data.title}${genre}${type}${index}`}
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

export { SliderArticles }
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderConfig } from '../config/slider';
import 'swiper/swiper-bundle.css';
import { OurChoiceItem } from '@/entities/OurChoiceItem';
import { reviewsRoutes } from '@/screens/BookType';
import { EnRoutes } from '@/shared/constants';
import Link from 'next/link';
import { ArrowIcon } from '@/shared/icons';
import { Navigation } from 'swiper/modules';
import {UiMainBlockWithTitle} from "@/shared/ui";

const itemCls = 'lg-low:w-[400px] w-[300px] h-full';
const slideCls = '!w-auto !h-auto';

const REPEAT_OUR_CHOICE_ITEMS = 4;

const SliderOurChoice = ({
							 className,
							 books,
							 title,
							 withMarginTop,
							 headLink,
							 buttonsID,
						 }) => {
	let curRepeatItemIndex = -1;

	return (
		<UiMainBlockWithTitle
			withMarginTop={withMarginTop}
			title={title}
			className={className}
			headLink={headLink}
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
					modules={[Navigation]}
					navigation={{
						prevEl: `#${buttonsID.prev}`,
						nextEl: `#${buttonsID.next}`,
					}}
				>
					{!books?.length || !books ? (
						[...Array(12)].map((_, index) => (
							<SwiperSlide key={index} className={slideCls}>
								<OurChoiceItem hasSkeleton className={itemCls} />
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
											<OurChoiceItem {...data} className={itemCls} />
										</Link>
									</SwiperSlide>
								);
							})}
							{books.length <= REPEAT_OUR_CHOICE_ITEMS
								? [...Array(REPEAT_OUR_CHOICE_ITEMS)].map((_, index) => {
									if (curRepeatItemIndex + 2 > books.length) {
										curRepeatItemIndex = 0;
									} else {
										curRepeatItemIndex++;
									}
									const { data, genre, type } = books[curRepeatItemIndex];

									return (
										<SwiperSlide
											className={slideCls}
											key={`${data.slug}${genre}${type}${index}`}
										>
											<Link
												href={`${EnRoutes.collections}/${reviewsRoutes[type]?.href}/${data.slug}`}
											>
												<OurChoiceItem {...data} className={itemCls} />
											</Link>
										</SwiperSlide>
									);
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
	);
};

export { SliderOurChoice };
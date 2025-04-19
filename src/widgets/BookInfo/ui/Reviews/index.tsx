'use client'
import { FC, MouseEventHandler, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiButton, UiTypography } from '@/shared/ui'
import { BookReviewItem } from '@/entities/BookReviewItem'
import { TBookData, TBookReview } from '@/shared/types/Book'
import Link from 'next/link'

const wrapperCls = ''
const headCls =
	'lg-low:text-xl text-sm flex items-center justify-between lg-low:mb-6 mb-4'
const addReviewCls = 'text-greyExtra '
const reviewsCountCls = 'uppercase'
const reviewsCls = 'flex flex-col lg-low:gap-y-8 gap-y-4'
const btnCls = 'lg-low:mt-8 mt-3.5 lg-low:text-base text-xs'

interface Props
	extends TClassName,
		Pick<TBookData, 'userReviews' | 'litresLink'> {}

const Reviews: FC<Props> = ({ className, userReviews, litresLink }) => {
	return (
		<div className={cn(wrapperCls, className)}>
			<div className={headCls}>
				<UiTypography
					tag='strong'
					font='Raleway-SB'
					className={reviewsCountCls}
				>
					Отзывы{' '}
					<UiTypography
						font='Muller-R'
						tag='span'
						className='text-greyExtra lg-low:ml-3 ml-1'
					>
						{userReviews.length - 1}
					</UiTypography>
				</UiTypography>
				<button className={addReviewCls}>
					<UiTypography font='Raleway-M' tag='p'>
						Оставить отзыв
					</UiTypography>
				</button>
			</div>
			{userReviews[0] ? (
				<ul className={reviewsCls}>
					{(userReviews as TBookReview[]).map((data, index) => (
						<BookReviewItem {...data} id={index} avatar='' key={index} />
					))}
				</ul>
			) : null}
			{userReviews[0] ? (
				<Link href={litresLink} target='_blank'>
					<UiButton className={btnCls}>Показать еще</UiButton>
				</Link>
			) : null}
		</div>
	)
}

export { Reviews }

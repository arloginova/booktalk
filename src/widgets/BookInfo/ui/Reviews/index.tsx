'use client'
import { FC, MouseEventHandler, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiButton, UiTypography } from '@/shared/ui'
import { LOAD_STEP, REVIEWS } from '../../constants/reviews'
import { BookReviewItem } from '@/entities/BookReviewItem'

const wrapperCls = ''
const headCls =
	'lg-low:text-xl text-sm flex items-center justify-between lg-low:mb-6 mb-4'
const addReviewCls = 'text-greyExtra '
const reviewsCountCls = 'uppercase'
const reviewsCls = 'flex flex-col lg-low:gap-y-8 gap-y-4'
const btnCls = 'lg-low:mt-8 mt-3.5 lg-low:text-base text-xs'

interface Props extends TClassName {}

const Reviews: FC<Props> = ({ className }) => {
	const [dataIndex, setDataIndex] = useState<number>(LOAD_STEP)

	const handleMore: MouseEventHandler = () => {
		setDataIndex(cur => cur + LOAD_STEP)
	}

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
						{REVIEWS.length}
					</UiTypography>
				</UiTypography>
				<button className={addReviewCls}>
					<UiTypography font='Raleway-M' tag='p'>
						Оставить отзыв
					</UiTypography>
				</button>
			</div>
			<ul className={reviewsCls}>
				{REVIEWS.map((data, index) =>
					index <= dataIndex - 1 ? (
						<BookReviewItem {...data} key={data.id} />
					) : null
				)}
			</ul>
			{REVIEWS.length >= dataIndex - 1 ? (
				<UiButton className={btnCls} onClick={handleMore}>
					Показать еще
				</UiButton>
			) : null}
		</div>
	)
}

export { Reviews }

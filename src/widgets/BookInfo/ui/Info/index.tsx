import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiExpandText, UiTypography } from '@/shared/ui'
import { TBookData } from '@/shared/types/Book'
import { StarIcon } from '@/shared/icons'

const wrapperCls = ''
const titleCls = 'uppercase lg-low:text-3xl'
const authorCls =
	'lg-low:mt-3 mt-1 lg-low:mb-5 mb-3 text-greyExtra lg-low:text-xl text-sm'
const ratingCls = 'flex items-center justify-between'
const generalRatingCls =
	'lg-low:text-2xl text-sm flex items-center lg-low:gap-x-1 gap-x-0.5 leading-none'
const starsCls =
	'flex items-center lg-low:gap-x-1 gap-x-0.5 text-xl text-greyExtra'
const descriptionCls = 'lg-low:my-5 my-3 lg-low:text-xl text-sm'
const expandCls = 'lg-low:text-xl text-sm'

interface Props
	extends TClassName,
		Pick<TBookData, 'slug' | 'description' | 'author'> {
	reviewGrate: number | null
}

const Info: FC<Props> = ({
	className,
	description,
	slug,
	author,
	reviewGrate,
}) => {
	return (
		<div className={cn(wrapperCls, className)}>
			<UiTypography font='Raleway-M' tag='h1' className={titleCls}>
				{slug}
			</UiTypography>
			<UiTypography tag='h4' font='Raleway-M' className={authorCls}>
				{author}
			</UiTypography>
			<div className={ratingCls}>
				<div className={generalRatingCls}>
					<StarIcon
						fill='var(--color-blackMain)'
						className='lg-low:size-6 size-5'
					/>
					<UiTypography
						font='Muller-M'
						tag='p'
						className='lg-low:translate-y-0 translate-y-0.5'
					>
						{reviewGrate?.toFixed(1) || 'Нет данных'}
					</UiTypography>
				</div>
				<div className={starsCls}>
					{[...Array(5)].map((_, index) => (
						<StarIcon
							fill='var(--color-greyBackground)'
							key={index}
							className='lg-low:size-6 size-5'
						/>
					))}
					<UiTypography
						font='Raleway-M'
						tag='p'
						className='lg-low:text-base text-sm lg-low:ml-2 ml-0.5'
					>
						Оценить
					</UiTypography>
				</div>
			</div>
			<UiExpandText buttonClassName={expandCls}>
				<UiTypography font='Raleway-M' tag='p' className={descriptionCls}>
					{description}
				</UiTypography>
			</UiExpandText>
		</div>
	)
}

export { Info }

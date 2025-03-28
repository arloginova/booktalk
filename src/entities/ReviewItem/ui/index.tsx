import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { TBookData } from '@/shared/types/Book'
import { BookIcon } from '@/shared/icons'
import { UiTypography } from '@/shared/ui'
import { GradientImage } from './GradientImage'
import { cn } from '@/shared/lib'

const itemCls = ''
const itemTitleCls = 'lg-low:text-lg text-[13px] max-w-[70%] line-clamp-1 leading-none'
const itemSubtitleCls =
	'flex items-center gap-x-1 text-greyExtra lg-low:text-lg text-[13px]'
const infoCls = 'mt-3 flex items-center justify-between'

interface Props
	extends TClassName,
	Pick<TBookData, 'image' | 'reviewName' | 'slug' | 'readTime'> { }

const ReviewItem: FC<Props> = ({
	image,
	readTime,
	reviewName,
	slug,
	className,
}) => {
	return (
		<div className={cn(itemCls, className)}>
			<GradientImage src={image} slug={slug} />
			<div className={infoCls}>
				<UiTypography font='Raleway-M' tag='h2' className={itemTitleCls}>
					{reviewName}
				</UiTypography>
				<UiTypography font='Raleway-M' tag='h2' className={itemSubtitleCls}>
					<BookIcon fill='var(--color-greyExtra)' /> {readTime}
				</UiTypography>
			</div>
		</div>
	)
}

export { ReviewItem }

import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { TBookData } from '@/shared/types/Book'
import { BookIcon } from '@/shared/icons'
import { UiSkeleton, UiTypography } from '@/shared/ui'
import { GradientImage } from './GradientImage'
import { cn } from '@/shared/lib'

const itemCls = ''
const itemTitleCls = 'lg-low:text-lg text-[13px] max-w-[70%] line-clamp-1 leading-none'
const itemSubtitleCls =
	'flex items-center gap-x-1 text-greyExtra lg-low:text-lg text-[13px]'
const infoCls = 'mt-3 flex items-center justify-between'
const gradientCls = 'rounded-[10px]'
const gradientImageCls = ' lg-low:h-[165px] h-[130px] rounded-[10px]'

type Props = TClassName & (
	| {
		hasSkeleton: true
	} & {
		[K in keyof Pick<TBookData, 'image' | 'reviewName' | 'slug' | 'readTime'>]?: never
	}
	| {
		hasSkeleton?: never
	} & Pick<TBookData, 'image' | 'reviewName' | 'slug' | 'readTime'>
)


const ReviewItem: FC<Props> = ({
	image,
	readTime,
	reviewName,
	slug,
	className, hasSkeleton
}) => {
	return (
		<div className={cn(itemCls, className)}>
			{hasSkeleton ? <UiSkeleton className={cn(gradientImageCls, gradientCls)} isAbsolute={false} /> : <GradientImage imageClassName={gradientImageCls} className={gradientCls} src={image} slug={slug} />}
			<div className={infoCls}>
				{hasSkeleton ? <UiSkeleton className={cn(itemTitleCls, 'max-w-none')} isAbsolute={false}>	<UiTypography font='Raleway-M' tag='h2'>
					{reviewName}
				</UiTypography>
				</UiSkeleton> : <>
					<UiTypography font='Raleway-M' tag='h2' className={itemTitleCls}>
						{reviewName}
					</UiTypography>
					<UiTypography font='Raleway-M' tag='h2' className={itemSubtitleCls}>
						<BookIcon fill='var(--color-greyExtra)' /> {readTime}
					</UiTypography>
				</>}
			</div>
		</div>
	)
}

export { ReviewItem }

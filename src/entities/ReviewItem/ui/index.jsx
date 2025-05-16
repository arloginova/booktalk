import { BookIcon } from '@/shared/icons'
import { UiSkeleton, UiTypography } from '@/shared/ui'
import { GradientImage } from './GradientImage'
import { cn } from '@/shared/lib'

const itemCls = ''
const itemTitleCls =
	'lg-low:text-lg text-[13px] max-w-[70%] line-clamp-1 leading-none'
const itemSubtitleCls =
	'flex items-center gap-x-1 text-greyExtra lg-low:text-lg text-[13px]'
const infoCls = 'mt-3 flex items-center justify-between'
const gradientCls = 'rounded-[10px]'
const gradientImageCls = ' lg-low:h-[165px] h-[130px] rounded-[10px]'

const ReviewItem = ({
						image,
						readTime,
						reviewName,
						slug,
						className,
						hasSkeleton,
						gradientImageClassName,
						imageClassName,
						withoutText,
					}) => {
	return (
		<div className={cn(itemCls, className)}>
			{hasSkeleton ? (
				<UiSkeleton
					className={cn(gradientImageCls, gradientCls, gradientImageClassName)}
					isAbsolute={false}
				/>
			) : (
				<GradientImage
					imageClassName={cn(gradientImageCls, imageClassName)}
					className={cn(gradientCls, gradientImageClassName)}
					src={image}
					slug={slug}
				/>
			)}
			{!withoutText ? (
				<div className={infoCls}>
					{hasSkeleton ? (
						<UiSkeleton
							className={cn(itemTitleCls, 'max-w-none')}
							isAbsolute={false}
						>
							<UiTypography font='Raleway-M' tag='h2'>
								{reviewName}
							</UiTypography>
						</UiSkeleton>
					) : (
						<>
							<UiTypography font='Raleway-M' tag='h2' className={itemTitleCls}>
								{reviewName}
							</UiTypography>
							<UiTypography
								font='Raleway-M'
								tag='h2'
								className={itemSubtitleCls}
							>
								<BookIcon fill='var(--color-greyExtra)' /> {readTime}
							</UiTypography>
						</>
					)}
				</div>
			) : null}
		</div>
	)
}

export { ReviewItem }
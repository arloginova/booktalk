import { UiSkeleton, UiTypography } from '@/shared/ui'
import Image from 'next/image'
import { cn } from '@/shared/lib'

const wrapperCls = ''
const imgWrapperCls = 'relative w-full'
const imgCls = 'lg-low:h-[325px] h-[245px] w-full rounded-[15px] object-cover'
const adultRatingCls = 'pb-0.25 pt-0.75 px-1.75 rounded-md bg-orangeMain text-whiteMain absolute left-3.5 top-3.5 text-sm'
const titleCls = 'mt-3.5 lg-low:text-xl text-sm lg-low:mb-2 mb-1 line-clamp-1 uppercase w-full'
const authorCls = 'text-greyExtra lg-low:text-lg text-xs line-clamp-1'

const BookItem = ({
					  hasSkeleton,
					  author,
					  slug,
					  className,
					  forAdult,
					  image,
					  Tag = 'div',
				  }) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<div className={imgWrapperCls}>
				{hasSkeleton ? (
					<UiSkeleton isAbsolute={false} className={imgCls} />
				) : (
					<>
						{forAdult ? (
							<UiTypography tag='p' font='Muller-R' className={adultRatingCls}>
								18+
							</UiTypography>
						) : null}
						<Image
							src={image}
							alt={slug}
							width={210}
							height={325}
							className={imgCls}
						/>
					</>
				)}
			</div>
			{hasSkeleton ? (
				<>
					<UiSkeleton className={titleCls} isAbsolute={false}>
						<UiTypography font='Raleway-M' tag='h2'>
							skeleton
						</UiTypography>
					</UiSkeleton>
					<UiSkeleton isAbsolute={false}>
						<UiTypography className={authorCls} font='Raleway-M' tag='h4'>
							skeleton
						</UiTypography>
					</UiSkeleton>
				</>
			) : (
				<>
					<UiTypography className={titleCls} font='Raleway-M' tag='h2'>
						{slug}
					</UiTypography>
					<UiTypography className={authorCls} font='Raleway-M' tag='h4'>
						{author}
					</UiTypography>
				</>
			)}
		</Tag>
	)
}

export { BookItem }
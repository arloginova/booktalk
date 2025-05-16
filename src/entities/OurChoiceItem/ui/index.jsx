import { cn } from '@/shared/lib'
import Image from 'next/image'
import { UiButton, UiSkeleton, UiTypography } from '@/shared/ui'

const wrapperCls = 'p-main bg-greyBackground xs-big:rounded-[20px] rounded-[16px] flex flex-col'
const imgCls = 'mx-auto lg-low:rounded-[15px] rounded-[10px] lg-low:w-[210px] w-[150px] lg-low:h-[325] h-[245px] object-cover lg-low:mb-5 mb-3'
const titleCls = 'my-auto text-center lg-low:text-lg text-xs'
const btnCls = 'mx-auto lg-low:text-base text-xs lg-low:mt-4 mt-3'
const btnTextCls = 'flex items-center gap-x-3'

const OurChoiceItem = ({
						   Tag = 'div',
						   className,
						   signature,
						   slug,
						   image,
						   hasSkeleton,
						   reviewName
					   }) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			{hasSkeleton ?
				<UiSkeleton className={imgCls} isAbsolute={false} /> : <Image
					src={image}
					alt={slug}
					width={210}
					height={325}
					className={imgCls}
				/>
			}
			{hasSkeleton ? <UiSkeleton className={titleCls} isAbsolute={false} >
				<UiTypography font='Raleway-M' tag='h2'>
					skeleton
				</UiTypography>
			</UiSkeleton> : <UiTypography font='Raleway-M' tag='h2' className={titleCls}>
				{signature || reviewName}
			</UiTypography>}
			{hasSkeleton ? null : <UiButton className={btnCls} textClassName={btnTextCls}>
				<Image
					src='/images/shared/second-logo.svg'
					alt='Booktalk'
					width={20}
					height={20}
				/>
				читать
			</UiButton>}
		</Tag>
	)
}

export { OurChoiceItem }
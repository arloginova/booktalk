import { FC } from 'react'
import { TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TBookData } from '@/shared/types/Book'
import Image from 'next/image'
import { UiButton, UiTypography } from '@/shared/ui'
// import { TOurChoiceData } from '@/shared/types/OurChoice'

const wrapperCls =
	'p-main bg-greyBackground xs-big:rounded-[20px] rounded-[16px] flex flex-col'
const imgCls =
	'mx-auto lg-low:rounded-[15px] rounded-[10px] lg-low:w-[210px] w-[150px] lg-low:h-[325] h-[245px] object-cover lg-low:mb-5 mb-3'
const titleCls = 'my-auto text-center lg-low:text-lg text-xs'
const btnCls = 'mx-auto lg-low:text-base text-xs lg-low:mt-4 mt-3'
const btnTextCls = 'flex items-center gap-x-3'

interface Props
	extends TClassName,
		Pick<TBookData, 'signature' | 'slug' | 'image' | 'forAdult'> {
	Tag?: TTag
}

const OurChoiceItem: FC<Props> = ({
	Tag = 'div',
	className,
	signature,
	slug,
	forAdult,
	image,
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<Image
				src={image}
				alt={slug}
				width={210}
				height={325}
				className={imgCls}
			/>
			<UiTypography font='Raleway-M' tag='h2' className={titleCls}>
				{signature}
			</UiTypography>
			<UiButton className={btnCls} textClassName={btnTextCls}>
				<Image
					src='/images/shared/second-logo.svg'
					alt='Booktalk'
					width={20}
					height={20}
				/>
				читать
			</UiButton>
		</Tag>
	)
}

export { OurChoiceItem }

import { FC } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'
import Image from 'next/image'

const wrapperCls =
	'relative lg-low:py-8 lg-low:px-10 py-5 px-7 bg-greyBackground rounded-full text-xl uppercase -z-[2] w-max'
const tailCls = 'absolute left-0 -bottom-1 -z-[1]'

interface TUiMessageCloudProps extends TClassName, TChildren {
	Tag?: TTag
}

const UiMessageCloud: FC<TUiMessageCloudProps> = ({
	className,
	children,
	Tag = 'div',
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<Image
				src='/images/shared/message-tail.svg'
				alt='хвост'
				width={42}
				height={32}
				className={tailCls}
			/>
			<UiTypography font='Raleway-SB' tag='h2'>
				{children}
			</UiTypography>
		</Tag>
	)
}

export { UiMessageCloud, type TUiMessageCloudProps }

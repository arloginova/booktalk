'use client'
import { FC, ReactNode } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { UiGridElemWrapper, UiTestDecorImage } from '@/shared/ui'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { useScreen } from '@/shared/hooks'
import { MD_MID } from '@/shared/constants'

const wrapperCls =
	'relative overflow-hidden flex flex-col justify-center md-mid:bg-whiteMain rounded-[16px]'
const contentWrapperCls =
	'relative md-mid:border-[11px] md-mid:border-solid md-mid:border-greyBackground max-w-[1000px] md-mid:w-[80%] w-full lg-low:h-[500px] md-mid:h-[460px] z-[0] flex flex-col mx-auto'
const bgCls = 'absolute size-full object-cover'
const innerCls = 'md-mid:p-10'

interface Props extends TClassName, TChildren {
	afterContent?: ReactNode
	contentWrapperClassName?: string
	withoutBeforeImageMobileBlock?: boolean
}

const TestBlockWrapper: FC<Props> = ({
	className,
	children,
	afterContent,
	contentWrapperClassName,
	withoutBeforeImageMobileBlock,
}) => {
	const { screenWidth } = useScreen()
	return (
		<div className={cn(wrapperCls, className)}>
			{screenWidth >= MD_MID ? (
				<Image
					src='/images/Test/backgrounds/main-background.png'
					alt='фон'
					width={1405}
					height={715}
					className={bgCls}
				/>
			) : null}

			{screenWidth < MD_MID && !withoutBeforeImageMobileBlock ? (
				<UiTestDecorImage className='mb-3' />
			) : null}
			<div className={innerCls}>
				<UiGridElemWrapper
					plaque='Тест'
					className={cn(contentWrapperCls, contentWrapperClassName)}
				>
					{children}
				</UiGridElemWrapper>
			</div>
			{afterContent}
			{screenWidth < MD_MID ? <UiTestDecorImage className='mt-3' /> : null}
		</div>
	)
}

export { TestBlockWrapper }

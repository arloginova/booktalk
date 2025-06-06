'use client'
import { cn } from '@/shared/lib'
import Image from 'next/image'
import { useScreen } from '@/shared/hooks'
import { MD_MID } from '@/shared/constants'
import { UiGridElemWrapper, UiTestDecorImage } from '@/shared/ui'

const wrapperCls =
	'relative overflow-hidden flex flex-col justify-center md-mid:bg-whiteMain rounded-[16px]'
const contentWrapperCls =
	'relative md-mid:border-[11px] md-mid:border-solid md-mid:border-greyBackground max-w-[1000px] md-mid:w-[90%] w-full lg-low:h-[500px] md-mid:h-[460px] z-[0] flex flex-col mx-auto'
const bgCls = 'absolute size-full object-cover'
const innerCls = 'md-mid:p-10'

const TestBlockWrapper = ({
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
					src='/images/Test/backgrounds/main-background.webp'
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
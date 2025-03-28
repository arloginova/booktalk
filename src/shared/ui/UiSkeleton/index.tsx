import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

const wrapperCls = 'bg-greyExtra rounded-[15px] text-transparent min-h-5 w-full'

interface TUiSkeletonProps extends TClassName, Partial<TChildren> {
	isAbsolute?: boolean
}

const UiSkeleton: FC<TUiSkeletonProps> = ({
	className,
	children,
	isAbsolute = true,
}) => {
	return (
		<div
			className={cn(
				wrapperCls,
				{
					['absolute inset-0']: isAbsolute,
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export { UiSkeleton, type TUiSkeletonProps }

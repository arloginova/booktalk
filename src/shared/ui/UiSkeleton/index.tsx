import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'


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
				'bg-greyExtra rounded-[15px] text-transparent min-h-5 w-full overflow-hidden after:absolute after:inset-0 after:-translate-x-full after:bg-[linear-gradient(90deg,transparent_0,theme(colors.white/.2)_20%,theme(colors.white/.5)_60%,transparent_100%)] after:animate-shimmer',
				{
					['absolute inset-0']: isAbsolute,
					['relative']: !isAbsolute,
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export { UiSkeleton, type TUiSkeletonProps }

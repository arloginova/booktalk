import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = 'uppercase rounded-full duration-150'
const isInvertedCls = 'bg-whiteMain text-orangeMain hover:bg-greyBackground'
const isVertedCls = 'bg-orangeMain text-whiteMain hover:bg-black '

const bigSizeCls = 'text-base px-7 pt-3 pb-2.25'
const midSizeCls = 'text-xs px-7 pt-3 pb-2.25'
const smallSizeCls = 'text-xs px-5 pt-2.25 pb-2'

interface TUiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isInverted?: boolean
	size?: 'big' | 'mid' | 'small'
	textClassName?: string
}

const UiButton: FC<TUiButtonProps> = ({
	className,
	children,
	isInverted,
	size = 'big',
	textClassName,
	...props
}) => {
	return (
		<button
			className={cn(
				wrapperCls,
				{
					[isInvertedCls]: isInverted,
					[isVertedCls]: !isInverted,
					[bigSizeCls]: size === 'big',
					[midSizeCls]: size === 'mid',
					[smallSizeCls]: size === 'small',
				},
				className
			)}
			{...props}
		>
			<UiTypography font='Raleway-M' tag='p' className={textClassName}>
				{children}
			</UiTypography>
		</button>
	)
}

export { UiButton, type TUiButtonProps }

import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'
import { TClassName } from '@/shared/types'

const wrapperCls = ''
const contentCls =
	'flex gap-x-4 items-end px-5 py-2 bg-whiteMain rounded-full duration-200'
const errorContentCls = 'bg-orangeError'
const inputCls =
	'text-lg text-blackMain font-raleway font-medium placeholder:text-greyExtra font-size-inherit placeholder:font-muller placeholder:font-normal w-full flex-1 focus:outline-none leading-none text-blackMain'
const errorCls = 'text-orangeMain '
const labelCls = ''

interface TUiInputProps extends TClassName {
	beforeContent?: ReactNode
	label?: string
	errorMessage?: string
	contentClassName?: string
	inputProps?: InputHTMLAttributes<HTMLInputElement>
}

const UiInput: FC<TUiInputProps> = ({
	className,
	errorMessage,
	contentClassName,
	label,
	beforeContent,
	inputProps,
}) => {
	return (
		<div className={cn(wrapperCls, className)}>
			{label ? (
				<UiTypography className={labelCls} font='Raleway-M' tag='p'>
					{label}
				</UiTypography>
			) : null}
			<div
				className={cn(
					contentCls,
					{
						[errorContentCls]: errorMessage !== undefined,
					},
					contentClassName
				)}
			>
				{beforeContent}
				<input
					{...inputProps}
					className={cn(inputCls, inputProps?.className)}
				/>
			</div>
			{errorMessage ? (
				<UiTypography className={errorCls} font='Raleway-M' tag='p'>
					{errorMessage}
				</UiTypography>
			) : null}
		</div>
	)
}

export { UiInput, type TUiInputProps }

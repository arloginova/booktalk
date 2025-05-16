import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'

const wrapperCls = ''
const contentCls =
	'flex gap-x-4 items-end px-5 py-2 bg-whiteMain rounded-full duration-200'
const errorContentCls = 'bg-orangeError'
const inputCls =
	'text-lg text-blackMain font-raleway font-medium placeholder:text-greyExtra placeholder:font-muller placeholder:font-normal w-full flex-1 focus:outline-none leading-none text-blackMain'
const errorCls = 'text-orangeMain '
const labelCls = ''

const UiInput = ({
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

export { UiInput }
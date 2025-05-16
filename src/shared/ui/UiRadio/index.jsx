'use client'
import React, { useEffect, useState } from 'react'
import { UiTypography } from '../UiTypography'
import { cn } from '@/shared/lib'

const labelCls = 'leading-none'

const UiRadio = ({
					 label,
					 checked,
					 labelClassName,
					 className,
					 defaultChecked,
					 onChange,
					 onClick,
					 ...inpProps
				 }) => {
	const [state, setState] = useState(!!defaultChecked)

	useEffect(() => {
		if (checked === undefined) {
			if (onChange) {
				if (state)
					onChange({
						text: label,
						value: inpProps.value,
					})
				else onChange(null)
			}
		}
	}, [state])

	useEffect(() => {
		if (checked !== undefined) {
			if (onChange) {
				if (checked)
					onChange({
						text: label,
						value: inpProps.value,
					})
				else onChange(null)
			}
		}
	}, [checked])

	return (
		<label
			onClick={onClick}
			className={cn(
				'mr-4 cursor-pointer text-xl font-medium text-blackMain flex items-center gap-x-4',
				className
			)}
		>
			<input
				type='radio'
				checked={state}
				className='peer sr-only m-0 size-0 hidden'
				{...inpProps}
			/>
			<div
				className='relative size-5 rounded-full border-2 border-blackMain peer-checked:border-blackMain'
				onClick={() => {
					if (checked === undefined) setState(cur => !cur)
				}}
			>
				<div
					className={`absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${
						state || checked ? 'bg-blackMain opacity-100' : 'opacity-0'
					}`}
				/>
			</div>
			{label ? (
				<UiTypography
					font='Muller-R'
					tag='p'
					className={cn(labelCls, labelClassName)}
				>
					{label}
				</UiTypography>
			) : null}
		</label>
	)
}

export { UiRadio }
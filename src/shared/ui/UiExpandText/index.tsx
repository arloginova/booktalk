'use client'
import { FC, useRef } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const contentCls = ''
const btnCls = 'text-greyExtra mt-3 text-xl'

interface TUiExpandTextProps extends TClassName, TChildren {
	Tag?: TTag
	contentClassName?: string
	buttonClassName?: string
}

const UiExpandText: FC<TUiExpandTextProps> = ({
	Tag = 'div',
	className,
	children,
	buttonClassName,
	contentClassName,
}) => {
	const contentRef = useRef<HTMLDivElement | null>(null)

	return (
		<Tag className={cn(wrapperCls, className)}>
			<div ref={contentRef} className={cn(contentCls, contentClassName)}>
				{children}
			</div>
			<button className={cn(btnCls, buttonClassName)}>
				<UiTypography font='Raleway-M' tag='p'>
					Развернуть
				</UiTypography>
			</button>
		</Tag>
	)
}

export { UiExpandText, type TUiExpandTextProps }

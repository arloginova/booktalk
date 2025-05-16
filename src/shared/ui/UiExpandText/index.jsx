'use client'
import { useRef } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const contentCls = ''
const btnCls = 'text-greyExtra mt-3 text-xl'

const UiExpandText = ({
						  Tag = 'div',
						  className,
						  children,
						  buttonClassName,
						  contentClassName,
					  }) => {
	const contentRef = useRef(null)

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

export { UiExpandText }
'use client'
import { FC, ReactNode } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { UiGridElemWrapper } from '@/shared/ui/UiGridElemWrapper'
import { cn } from '@/shared/lib'
import { UiButton, UiPlaque, UiTypography } from '@/shared/ui'
import { useScreen } from '@/shared/hooks'
import { LG_BIG } from '@/shared/constants'

const wrapperCls = 'relative overflow-hidden z-[0] flex flex-col'
const plaqueWrapperCls = 'relative'
const plaqueCls = 'absolute left-0 top-0 lg-big:text-base text-xs'
const absoluteCls = 'absolute inset-0 -z-[1]'
const titleCls = 'uppercase lg-big:text-2xl text-base mt-auto'
const subtitleCls = 'lg-big:text-xl text-sm lg-big:mt-4 mt-2 leading-[130%]'
const btnCls = 'lg-big:mt-5 mt-3 w-max'

interface Props extends TClassName, Partial<TChildren> {
	plaque: string
	title: string
	subtitle: ReactNode
	button?: {
		text: string
		onClick?: () => void
	}
	absoluteContainerClassName?: string
	subtitleClassName?: string
	titleClassName?: string
	withParentPaddings?: boolean
}

const GridElemInfo: FC<Props> = ({
	subtitle,
	title,
	button,
	plaque,
	children,
	className,
	withParentPaddings,
	subtitleClassName,
	absoluteContainerClassName, titleClassName
}) => {
	const { screenWidth } = useScreen()

	return (
		<UiGridElemWrapper className={cn(wrapperCls, className)}>
			<div
				className={cn(
					absoluteCls,
					{
						['p-[inherit]']: withParentPaddings,
					},
					absoluteContainerClassName
				)}
			>
				{children}
			</div>
			<div className={plaqueWrapperCls}>
				<UiPlaque className={plaqueCls}>{plaque}</UiPlaque>
			</div>
			<UiTypography className={cn(titleCls, titleClassName)} tag='h2' font='Raleway-M'>
				{title}
			</UiTypography>
			<UiTypography
				className={cn(subtitleCls, subtitleClassName)}
				tag='h3'
				font='Raleway-M'
			>
				{subtitle}
			</UiTypography>
			{button ? (
				<UiButton
					size={screenWidth >= LG_BIG ? 'big' : 'mid'}
					className={btnCls}
					onClick={button.onClick}
				>
					{button.text}
				</UiButton>
			) : null}
		</UiGridElemWrapper>
	)
}

export { GridElemInfo }

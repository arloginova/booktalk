import { FC } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TUiTypographyTextProps, UiButton, UiTypography } from '@/shared/ui'
import Link from 'next/link'

const wrapperCls = ''
const titleCls = 'lg-low:text-2xl text-base uppercase'
const headCls = 'flex justify-between items-center flex-wrap gap-3'

interface TUiMainBlockWithTitleProps extends TClassName, TChildren {
	Tag?: TTag
	title?: string
	titleClassName?: string
	withMarginTop?: boolean
	headClassName?: string
	titleFont?: TUiTypographyTextProps['font']
	headLink?: {
		text?: string
		href: string
	}
}

const UiMainBlockWithTitle: FC<TUiMainBlockWithTitleProps> = ({
	className,
	Tag = 'div',
	titleClassName,
	children,
	title,
	withMarginTop,
	headLink,
	headClassName, titleFont
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<div className={cn(headCls, { ['mb-5']: !!title }, headClassName)}>
				{title ? (
					<Link href={headLink?.href || '#'} className={cn({ ['mt-35']: withMarginTop, ['hover:text-orangeMain duration-150']: !!headLink?.href })} onClick={(e) => {
						if (!headLink?.href) e.preventDefault()
					}}>
						<UiTypography
							font={titleFont || 'Raleway-M'}
							tag='h2'
							className={cn(
								titleCls,
								titleClassName
							)}
						>
							{title}
						</UiTypography>
					</Link>
				) : null}

			</div>
			{children}
		</Tag>
	)
}

export { UiMainBlockWithTitle, type TUiMainBlockWithTitleProps }

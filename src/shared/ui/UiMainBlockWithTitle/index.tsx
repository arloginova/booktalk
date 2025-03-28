import { FC } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiButton, UiTypography } from '@/shared/ui'
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
	headLink?: {
		text: string
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
	headClassName,
}) => {
	return (
		<Tag className={cn(wrapperCls, className)}>
			<div className={cn(headCls, { ['mb-5']: !!title }, headClassName)}>
				{title ? (
					<Link href={headLink?.href || '#'} onClick={(e) => {
						if (!headLink?.href) e.preventDefault()
					}}>
						<UiTypography
							font='Raleway-M'
							tag='h2'
							className={cn(
								titleCls,
								{ ['mt-35']: withMarginTop },
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

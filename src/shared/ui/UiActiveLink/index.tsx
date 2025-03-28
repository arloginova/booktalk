'use client'
import { FC, ReactNode } from 'react'
import { TChildrenGen, TClassName } from '@/shared/types'
import Link, { LinkProps } from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/shared/lib'

type TUiActiveLinkChildren = (params: { isActive: boolean }) => ReactNode

interface TUiActiveLinkProps
	extends TClassName,
		LinkProps,
		TChildrenGen<TUiActiveLinkChildren | ReactNode> {
	activeClassName?: string
	strict?: boolean
}

const UiActiveLink: FC<TUiActiveLinkProps> = ({
	href,
	strict,
	activeClassName,
	className,
	children,
	...linkProps
}) => {
	const path = usePathname()
	const params = useSearchParams()
	const fullPath = `${params}`.length
		? `${path}?${decodeURIComponent(`${params}`)}`.replace('+', ' ')
		: path

	const checkIsActive = (): boolean => {
		return strict ? fullPath === href : path === href
	}

	return (
		<Link
			href={href}
			{...linkProps}
			className={cn(className, {
				[activeClassName || '']: checkIsActive(),
			})}
		>
			{typeof children === 'function'
				? children({ isActive: checkIsActive() })
				: children}
		</Link>
	)
}

export { UiActiveLink, type TUiActiveLinkChildren, type TUiActiveLinkProps }

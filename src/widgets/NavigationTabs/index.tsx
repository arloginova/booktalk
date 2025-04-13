import { Suspense } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiActiveLink, UiTypography } from '@/shared/ui'

const wrapperCls =
	'w-full overflow-auto flex lg-low:gap-x-6 gap-x-4 no-scrollbar'
const linkCls = 'lg-low:text-base text-xs duration-150 uppercase'
const linkActiveCls = 'text-orangeMain'

type TLinkItem<T extends string> = {
	href: string
	text: T
	className?: string
}

interface Props<T extends string> extends TClassName {
	links: TLinkItem<T>[]
}

const NavigationTabs = <T extends string>({ className, links }: Props<T>) => {
	return (
		<nav className={cn(wrapperCls, className)}>
			{links.map(({ href, text, className }) => (
				<Suspense fallback={<></>} key={`${text}${href}`}>
					<UiActiveLink
						strict
						href={href}
						className={cn(linkCls, className)}
						activeClassName={linkActiveCls}
					>
						<UiTypography isNoWrap font='Raleway-M' tag='p'>
							{text}
						</UiTypography>
					</UiActiveLink>
				</Suspense>
			))}
		</nav>
	)
}

export { NavigationTabs, type TLinkItem }

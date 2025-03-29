import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { HEADER_NAVIGATION } from '@/shared/constants'
import Link from 'next/link'
import { UiTypography } from '@/shared/ui'

const wrapperCls = 'flex lg-big:gap-x-10 md-mid:gap-x-5 xs-mid:gap-x-4 gap-x-3.5'
const linkCls =
	'uppercase duration-150 hover:text-orangeMain lg-mid:text-base xs-mid:text-xs text-[9px]'

interface Props extends TClassName { }

const Navigation: FC<Props> = ({ className }) => {
	return (
		<nav className={cn(wrapperCls, className)}>
			{HEADER_NAVIGATION.map(({ path, text }) => (
				<Link className={linkCls} href={path} key={path}>
					<UiTypography font='Muller-R' tag='p'>
						{text}
					</UiTypography>
				</Link>
			))}
		</nav>
	)
}

export { Navigation }

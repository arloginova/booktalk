import { CSSProperties, FC } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { HashLink as Link } from 'react-router-hash-link'
import cls from './index.module.scss'

interface Props extends TClassName, TChildren {
	size: number
	font: 'Muller-R' | 'Raleway-M' | 'Raleway-SB'
	href: string
}
const TypographyLink: FC<Props> = ({
	children,
	className,
	size,
	font,
	href,
}) => {
	return (
		<Link
			to={href}
			className={cn(cls.text, [className])}
			style={
				{
					'--size': `${size}px`,
					'--font': font,
				} as CSSProperties
			}
		>
			{children}
		</Link>
	)
}

export { TypographyLink }

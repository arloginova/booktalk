import { FC } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '../Typography'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG } from '@/shared/constants'

interface Props extends TClassName, TChildren {}
const Plaque: FC<Props> = ({ className, children }) => {
	const screen = useScreen()

	return (
		<div className={cn(cls.wrapper, [className])}>
			<Typography
				size={screen >= LG ? 16 : 12}
				font='Raleway-M'
				className={cn(cls.plaque)}
			>
				{children}
			</Typography>
		</div>
	)
}

export { Plaque }

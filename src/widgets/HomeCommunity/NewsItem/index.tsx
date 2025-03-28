import { FC, ReactNode } from 'react'
import { TChildren, TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'

interface Props extends TClassName, TChildren {
	images: [string, string]
	textMiddleScreen?: ReactNode
}
const NewsItem: FC<Props> = ({
	children,
	images,
	className,
	textMiddleScreen,
}) => {
	const screen = useScreen()
	return (
		<li className={cn(cls.item, [className])}>
			<div className={cn(cls.head)}>
				{images.map((src, index) => {
					return <img src={src} key={index} alt='news' />
				})}
			</div>
			<Typography font='Raleway-M' size={screen >= LG ? 18 : 14} tag='h3'>
				{textMiddleScreen && screen <= LG && screen > MD
					? textMiddleScreen
					: children}
			</Typography>
			<img
				src='images/Home/Questions/white-tail.svg'
				alt='tail'
				className={cn(cls.tail)}
			/>
		</li>
	)
}

export { NewsItem }

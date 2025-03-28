import { FC, ReactNode } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { useScreen } from '@/shared/hooks'
import cls from './index.module.scss'
import { LG, MD } from '@/shared/constants'

interface Props extends TClassName {
	title: string
	content: {
		title: string
		subtitle: ReactNode
		subtitleMiddleScreen?: ReactNode
	}
}
const Item: FC<Props> = ({ className, content, title }) => {
	const screen = useScreen()

	return (
		<li className={cn(cls.item, [className])}>
			<Typography size={screen >= 1406 ? 56 : 28} font='Muller-R' tag='h2'>
				{title}
			</Typography>
			<div className={cn(cls.content)}>
				<Typography size={screen >= 1406 ? 24 : 17} font='Raleway-SB' tag='h3'>
					{content.title}
				</Typography>

				<Typography size={screen >= 1406 ? 20 : 16} font='Raleway-M' tag='h4'>
					{content.subtitleMiddleScreen && screen <= LG && screen > MD
						? content.subtitleMiddleScreen
						: content.subtitle}
				</Typography>
			</div>
		</li>
	)
}

export { Item }

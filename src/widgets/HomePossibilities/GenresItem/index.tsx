import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import { useScreen } from '@/shared/hooks'
import { LG } from '@/shared/constants'
import cls from './index.module.scss'

interface Props extends TClassName {
	title: string
	subtitle: string
	image: 'big-star' | 'pentagon' | 'low-star'
}
const GenresItem: FC<Props> = ({ className, image, subtitle, title }) => {
	const screen = useScreen()
	return (
		<li className={cn(cls.item, [className])}>
			<Typography font='Raleway-SB' size={screen >= LG ? 20 : 16} tag='h2'>
				{title}
			</Typography>
			<Typography font='Raleway-M' size={screen >= LG ? 20 : 16} tag='h3'>
				{subtitle}
			</Typography>
			<img
				src={
					image === 'big-star'
						? 'images/Home/Possibilities/big-star.svg'
						: image === 'low-star'
						? 'images/Home/Possibilities/low-star.svg'
						: 'images/Home/Possibilities/pentagon.svg'
				}
				alt='big star'
				className={cn(cls.image, [], {
					[cls.big_star]: image === 'big-star',
					[cls.low_star]: image === 'low-star',
					[cls.pentagon]: image === 'pentagon',
				})}
			/>
		</li>
	)
}

export { GenresItem }

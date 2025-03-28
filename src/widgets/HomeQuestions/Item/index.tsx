import { FC, useEffect, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { Typography } from '@/shared/ui'
import cls from './index.module.scss'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'

interface Props extends TClassName {
	questions: string[]
	theme: 'white' | 'black'
	tailDirection: 'left' | 'right'
}
const Item: FC<Props> = ({ questions, className, theme, tailDirection }) => {
	const screen = useScreen()
	const [visibleIndex, setVisibleIndex] = useState<number>(0)
	const DELAY = 2000

	useEffect(() => {
		const interval = setInterval(() => {
			setVisibleIndex(cur => {
				if (cur + 1 < questions.length) {
					return cur + 1
				}
				return 0
			})
		}, DELAY)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div className={cn(cls.item, [className, cls[theme]])}>
			{questions.map((question, index) => {
				return (
					<Typography
						size={screen >= LG ? 20 : screen >= MD ? 16 : 14}
						font='Raleway-SB'
						className={cn(cls.question, [], {
							[cls.active]: visibleIndex === index,
						})}
						key={index}
					>
						{question}
					</Typography>
				)
			})}
			<img
				src={
					theme === 'black'
						? 'images/Home/Questions/black-tail.svg'
						: 'images/Home/Questions/white-tail.svg'
				}
				className={cn(cls[tailDirection])}
				alt='tail'
			/>
		</div>
	)
}

export { Item }

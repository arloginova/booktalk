import { FC } from 'react'
import { cn } from '@/shared/lib'
import { TClassName } from '@/shared/types'
import { Typography } from '@/shared/ui'
import { useScreen } from '@/shared/hooks'
import { LG, MD } from '@/shared/constants'
import cls from './index.module.scss'

interface Props extends TClassName {
	partFirstCls?: string
	partSecondCls?: string
}
const Logo: FC<Props> = ({ className, partFirstCls, partSecondCls }) => {
	const screen = useScreen()

	return (
		<div className={cn(cls.logo, [className])}>
			<div className={cn(cls.part, [cls.part_1, partFirstCls])}>
				<Typography
					font='Muller-R'
					size={screen >= LG ? 34 : screen >= MD ? 24 : 21}
				>
					BOOK
				</Typography>
			</div>
			<div className={cn(cls.part, [cls.part_2, partSecondCls])}>
				<Typography
					font='Muller-R'
					size={screen >= LG ? 34 : screen >= MD ? 24 : 21}
				>
					TALK
				</Typography>
			</div>
		</div>
	)
}

export { Logo }

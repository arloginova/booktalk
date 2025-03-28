import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import cls from './index.module.scss'

interface Props extends TClassName {}
const ImageBlock: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.image, [className])}>
			<img src='images/Home/Community/background.png' alt='backg' />
		</div>
	)
}

export { ImageBlock }

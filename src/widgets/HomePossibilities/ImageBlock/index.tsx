import { FC } from 'react'
import cls from './index.module.scss'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

interface Props extends TClassName {}
const ImageBlock: FC<Props> = ({ className }) => {
	return (
		<div className={cn(cls.wrapper, [className])}>
			<img
				src='images/Home/Possibilities/image-block.png'
				alt='possibilities'
			/>
		</div>
	)
}

export { ImageBlock }

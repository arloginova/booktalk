import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { GenresItem } from '../GenresItem'
import cls from './index.module.scss'

interface Props extends TClassName {}
const Genres: FC<Props> = ({ className }) => {
	return (
		<ul className={cn(cls.genres, [className])}>
			<GenresItem
				image='big-star'
				title='ужасы'
				subtitle='Проникнитесь
жуткой атмосферой'
			/>
			<GenresItem
				image='pentagon'
				title='детективы'
				subtitle='Разгадывайте тайны 
и сложные загадки'
			/>
			<GenresItem
				image='low-star'
				title='фэнтези'
				subtitle='Погрузитесь в мир приключений'
			/>
		</ul>
	)
}

export { Genres }
